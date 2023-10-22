const http = require("node:http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;
const filename = "Log_" + getTimestamp() + ".txt";

makeFile();

const server = http.createServer((req, res) => {
  try {
    const message = parseMessage(req);
    if (message) {
      writeFile(message);
    }
  } catch (err) {
    console.error(err);
  }
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      ManifestFileVersion: "000000000000",
      bIsFileData: false,
      AppID: "000000000000",
      AppNameString: "",
      BuildVersionString: "",
      LaunchExeString: "",
      LaunchCommand: "",
      PrereqIds: [],
      PrereqName: "",
      PrereqPath: "",
      PrereqArgs: "",
      FileManifestList: [],
      ChunkHashList: {},
      ChunkShaList: {},
      DataGroupList: {},
      ChunkFilesizeList: {},
      CustomFields: {},
    })
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function makeFile() {
  if (!fs.existsSync(path.join(__dirname, "log"))) {
    fs.mkdirSync(path.join(__dirname, "log"));
  }

  fs.writeFileSync(
    path.join(__dirname, "log", filename, ""),
    `Starting log at: ${new Date().toLocaleString()}\n`,
    {
      encoding: "utf8",
    }
  );
}

function parseMessage(req) {
  const [urlPath] = req.url.split("?", 1);
  if (urlPath !== "/message") return;

  const query = req.url.slice(urlPath.length + 1);
  const parts = query.split("&");

  let sender = "";
  let message = "";
  for (const currPart of parts) {
    const [paramName] = currPart.split("=", 1);
    const value = currPart.slice(paramName.length + 1);

    switch (paramName) {
      case "message":
        message = decodeURIComponent(value);
        break;
      case "sender":
        sender = decodeURIComponent(value);
    }
  }

  return { sender, message };
}

function writeFile(msg) {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const payload = `\n[${timestamp}] ${msg.sender}: ${msg.message}`;
  fs.appendFileSync(path.join(__dirname, "log", filename), payload, {
    encoding: "utf8",
  });
}

function getTimestamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
}
