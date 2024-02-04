const http = require("http");
const https = require("https");

const allowed_updates_per_day = 4;
let updates = 0;

setInterval(async () => {
  updates = 0;
  if (updates > allowed_updates_per_day) {
    webhook();
    updates++;
  }
}, 24 * 3600 * 1000);

let timeout;

http
  .createServer(async function (req, res) {
    // rate limiting
    if (updates < allowed_updates_per_day) {
      if (!timeout) updates++;
      else clearTimeout(timeout);

      timeout = setTimeout(() => webhook(), 5 * 60 * 1000);
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Ok");
    res.end();
  })
  .listen(8080);

function webhook() {
  const options = {
    hostname: "api.github.com",
    port: 443,
    path:
      process.env.GITHUB_REPO.replace("https://api.github.com", "") +
      "/dispatches",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": postData.length,
      Authorization: "Bearer " + process.env.GITHUB_TOKEN,
      "User-Agent": "curl/7.64.1",
    },
  };

  var req = https.request(options, () => {});

  req.on("error", (e) => {
    console.error(e);
  });

  req.write(postData);
  req.end();
}
