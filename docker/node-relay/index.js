var http = require("http");

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
    if (req.headers.authorization !== process.env.NODE_RELAY_TOKEN) {
      res.writeHead(403, { "Content-Type": "text/html" });
      res.write("Wrong authorization token!");
      return res.end();
    }

    // rate limiting
    if (updates < allowed_updates_per_day) {
      if (!timeout) updates++;
      else clearTimeout(timeout);

      setTimeout(() => webhook(), 5 * 60 * 1000);
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Ok");
    res.end();
  })
  .listen(8080);

function webhook() {
  fetch(process.env.GITHUB_REPO + "/dispatches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + process.env.GITHUB_TOKEN,
    },
    body: JSON.stringify({
      event_type: "webhook",
    }),
  });
}
