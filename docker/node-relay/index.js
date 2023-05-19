var http = require("http");

http
  .createServer(async function (req, res) {
    if (req.headers.authorization !== process.env.NODE_RELAY_TOKEN) {
      res.writeHead(403, { "Content-Type": "text/html" });
      res.write("Wrong authorization token!");
      return res.end();
    }

    await await fetch(process.env.GITHUB_REPO + "/dispatches", {
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

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Ok");
    res.end();
  })
  .listen(8080);
