const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

const logTimetoFile = () => {
  const currentTime = new Date().toLocaleString();
  const logFilePath = path.join(__dirname, "log.txt");

  fs.appendFileSync(logFilePath, `Logged Time: ${currentTime}\n`, "utf8");
  console.log(`Logged Time: ${currentTime}`);
};

// Schedule cron job to run every 5 seconds
cron.schedule("*/5 * * * * *", logTimetoFile);

console.log(
  "Cron job is running every 5 seconds. Check log.txt for time logs."
);
