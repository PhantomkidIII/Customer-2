//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2349162936070";
global.owner = process.env.OWNER_NUMBER || "2349162936070";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkgrb010aUUwbHI2dTZzQUp2VnVyWlRqd201YUhTaDQ1QW9vY1NDMEpscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGJaRFh4K00yb3prQ1Nic1dEazhKcTZxaGFvU3JVZjUxdzBCb2E4ZzFYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTG1GbkY4Qm1KVFdSaVYwQkUwbkpRcFNTOXpvdjBxL3BjK1dLM0NlNVU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnM0ZZK3NmM3V6eFVRTkhIdHE5S0x1QUlUNSs3dlV3NDFob29HZmJUQkNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJbHZPaWxITTRPcXlORVZGY3lkUlhSdVBiS3g4eWRPU1F1T2RtZFp6RW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQzbXkyNmFWQVNWLzZ0QmxjV2kwY0lJQ0wxMHIwbjNEK2l5WEhveTB4amM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdWcjVnQmd6THl0azRpR3pyKzJDN2JhWGpHaUZXMytyekRoU0d0OHVFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3NVRFNhL2tyQmdrN2dxYlNpRW5vRVd3YitmZitFd0Y0UmV2QWUyU3ZFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img1bnVNMzBhVDgza0RMM3JxSzRnNXQ4TWFBMitLMUJsazUrb3ppbm5ZSnBDbk5PdWg5dU85UndabHFBV0lSc2VoMnYvdURBYnZYZytXTzUvYjBmZUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJXSVhKWnlTZVg1Q0J6ais3Y05yV3ZFQWhzcFJaM0prR2hxTjN1T0IxQVFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnTzRITGR3WFJ0R0JoQ0JpZUxUV1NRIiwicGhvbmVJZCI6IjZlYmY3MmJhLTI4MTAtNGZiNy1iNTE4LTU0MDZiMTJjOGZhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscjgvU2ZOQjVjcC9FNDhVWWNtZGROK0VkbzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmt4QWtzSnRjcDBQcHkxR2FTS3cwRHdEeGlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRUM1NQUEJKIiwibWUiOnsiaWQiOiIyMzQ5MTYyOTM2MDcwOjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ011OGw1SUVFS0NDN3JZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBBYjREc0dHTU1HaXlrdE1kM2ZDNnhzZDEzS1RzSDFyQTNEMmJlTElhakk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJZbVdpWGhyeXA3TWxUUmpSeEduQldtWWxiNjdIb0FrSzlvVnk3YzczaHpnSWZxYjlKNVBBQm81UzlIbWtJRWNOeWFKUG81NldpcDhrc0NYczY3eEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDSXdYb2NPVHpEaU03SFJGWFdTK0RkNVBkb2JubnhsYXhPNmVwY0JnM0VoaDRBaDdzdVJyeGd3VkFFNWZ4cFp4eTl3STRoUFBwMnlqdkc1cXVKR3NCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjI5MzYwNzA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhUUcrQTdCaGpEQm9zcExUSGQzd3VzYkhkZHlrN0I5YXdOdzltM2l5R295In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjYxNDg2fQ=="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
