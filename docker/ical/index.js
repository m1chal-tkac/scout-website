const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const fetchNewData = async () => {
  const response = await fetch("http://10.5.0.11:1337/api/uvodni-stranka");
  const iCalUrl = (await response.json()).data.attributes.iCalUrl;

  const iCal = await fetch(iCalUrl);
  const calendar = await iCal.text();
  fs.writeFileSync("Kalendar.ics", calendar);
};

fetchNewData();

setInterval(async () => {
  await fetchNewData();
}, 0.5 * 3600 * 1000);

http
  .createServer(async function (req, res) {
    const file = fs.readFileSync("Kalendar.ics");
    const gzip = zlib.gzipSync(file);

    res.writeHead(200, {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Encoding": "gzip",
      "Content-Length": gzip.length,
    });

    const chunkLimit = 16 * 1024;
    const chunkCount = Math.ceil(gzip.length / chunkLimit);
    for (let i = 0; i < chunkCount; i++) {
      if (chunkCount > 1) {
        const chunk = gzip.subarray(i * chunkLimit, (i + 1) * chunkLimit);
        res.write(chunk);
      } else {
        res.write(gzip);
      }
    }

    res.end();
  })
  .listen(8080);
