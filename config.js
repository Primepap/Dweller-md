//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "voawiv@ghostymail.com";
global.location = "da,deep,dark.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/nigera/somewhere/everywhere";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://github.com/Hehehahat/Dweller-md";
global.website = process.env.GURL || "https://wa.link/5sf1yo";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2348125926761";
global.sudo = process.env.SUDO || "2348125926761";
global.owner = process.env.OWNER_NUMBER || "2348125926761";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURYOWFjeWMwNE1BK1FpYm93M0diS3hvNVIyakxJQlBlWXNHcENkSXlrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1E1R1F6cS8wV1U1YnRqU2MyWHJJVkIyZjdGRDB2N2Z2d1c2dXJHVHJXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTTVyaklDWkRuV2wwbGdhWWg5eERUU2VGTi9EdTVoVjkwbkhGTHUvSFZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWlNweUFCeGxSZkdVS3RMT2JtWFJKYW1JS2lWY2RJOUV1MWtFaDAzYTBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKeFJ0cHFZdThWakNmT3VtL1RBY1dWMjk0dzRORGtKazJpN1RxdjFiMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGME5qVkYzdzRkeU1zczNNTlRBY0FZejkvMWxkSElUNmFEcVpoTjhuMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUUwME9reVI3SWhJeVNtMVc1RlFnM2IzV0EyU25ZbldjWGRJMVFLOHlFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmxvdmJScWpCYmpqUWV1SDBETXg3TFNjNHhvZXRYam80c0tvNlljY1hBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0WkJlWDE3b0UzR1BEVnJTTEg1bmlaZUQxQ2F6MGtjQktwVzNGOTFabXpQM0JCbE1Mb0VzVEwvcmFHMmc1aDJ3dlNWeUxHNWp5eWIrd0FVajdWc0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJsRktYQ1lJQnRGZ1J1YmgzVGNWeEFWTXBERmx0elk3cnpaa08yWWZCR1ZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3d1ZoNHZUaFNwNkdScjhienZBV0dnIiwicGhvbmVJZCI6ImM5MjllMzc4LThjZDAtNDBkOS04YWM5LTc0ODc5N2E4MzUxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUi9Id1VqSkZYTFlnTnRzVXpOd1VHU2hna2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pvck0wL3d4eHJpa2ZnUU43NUV4c0RoaHlnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhGUFpIUFBWIiwibWUiOnsiaWQiOiIyMzQ5MDYxNTQ4Mzg4OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkF1c3RpbiBQcmltZVhjaGFuZ2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2VCtMb0VFT1h4M3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNEcGpENXlHOVRrT1IwOGNTUi9XKzA4bnA0dzF0cVJvQmJuSTNNQ2E2WFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVZYWdOcnR0WTVsQTJBZG1LQ1pJaFRTQnk5UVhCNVlMZ3lFN0MvVXdaTGoyREhYU01HZ29GR3NVTSs5cnFnWjc1TXJSRzN2cDByTjVvNU5LL1ZYVkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjcXA0d24zOFlnRDVmN1pUWEtVc1ZxcVdrMlpFUDhEM0ZqeS8xSXVZNUlyaTcrY3kwVk1qMHJXSG1JUWliSEJqbjhiK2lQVlhDNjZJQjhUSUJlWVFEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjE1NDgzODg6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWc2WXcrY2h2VTVEa2RQSEVrZjF2dFBKNmVNTmJha2FBVzV5TnpBbXVsMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTIxOTMxNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDcloifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using dwells bot| now bow or burn| this is Dw3ller💅🏽✨",
  author: process.env.PACK_AUTHER || "dweller",
  packname: process.env.PACK_NAME || "dwells",
  botname: process.env.BOT_NAME || "dwells-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Dw3ller",
  errorChat: process.env.ERROR_CHAT || "burn☝🏼",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "warn",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Him").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
