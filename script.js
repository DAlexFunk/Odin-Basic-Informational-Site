const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

    switch (req.url) {
      case "/":
        res.write(fs.readFileSync("./index.html", "utf8"));
        break;
      case "/about":
        res.write(fs.readFileSync("./about.html", "utf8"));
        break;
      case "/contact-me":
        res.write(fs.readFileSync("./contact-me.html", "utf8"));
        break;
      default:
        res.write(fs.readFileSync("./404.html", "utf8"));
        break;
    }

    res.end();
  })
  .listen(8080);
