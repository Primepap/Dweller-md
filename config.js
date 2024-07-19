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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dBS0djZFNPTzN0aGpjSUFOYlN2bzdZS3g1K3FQR3FBZEdrY3cwSzFWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2lhRkJSWlFicjRlbXdSYU91Y2h5WGloSTh2dHR4MmNvMUlEZUlrMnlFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSktmZnkzbnBDWFdZNWNEdTFveVY4dml0ZzVRRllPc3FDSkpHUWNpYmtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxdW1YZmc1TklLbXlYNjBwQlBHSjdaQUZmZlA4M2VWQkhSY1VTZUFlWEhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJWGFuenpHNUZEdWQzbFVYbjNxa2JlZ25XVTVBcHk5cCtpeE9KT3pUbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRtT1NaejVPL2YrU2wzQ3hDT0VsQ0w5L2RKOUdaU1NhNGpJMlBaaTU0WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpwTXhxZUhDczZCSlNWUWhndVdpaUVsbkhkZzlxQnI0RDVqUFdkSlJHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2w2UTRNR0tsTUlmNlA1TEVzZTlWZzlVci9kN1hTWnNsOXJzbHJ3OEluaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRoNVdBWDExRVBQZmJwS1F3Y0tZUGMzRDFzeGh3c0dRZjQ4b1dlZkJ0RlphbWZZOXBFM3JIYThpZWxSWEJhcmNYWStnMXp5NlhkYU40ZUR5WHJPdWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJON0VVRThTQXhEbDJ1LzlHcnJSY0plYitqaEZmanhzQW96SFpnRkZTVHR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjU5MjY3NjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDhDMkMxOEM3QUJBODBCN0JFMzI4NzI0RDE4REMzQjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTMwODMyNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYS1uWGJON1NUMmFmaHJNWExLZjBXZyIsInBob25lSWQiOiIxZDNjODI3MS1lYThjLTRlNmQtYmRjMy1jOWU1MjdhNGIwMWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXhwNG9vWXV6ckM4ZDhCZWlJUEJ5WkNmbTk4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhRWmxGMGZuUndyak4wTGNQNTU4WEx0RUtiYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1MVpZVlA4VCIsIm1lIjp7ImlkIjoiMjM0ODEyNTkyNjc2MToyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVdXbjVVR0VKT3A1TFFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM0FJSEVXNy9YQkJyYjV6UFNNTXByb1RxdmM0aU4xOHNsZkF2TStKT1FGZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoib3BkdU8xSFJQNkZKWnUzdHZnRmVWY0tLRGNFcEt6QzBLOXdHNHQ5WFZyUGJ4RnNHbmxycjVBZ2J4NUtZRERyWDVLRVphUzNLUFg3bjl3M29XT3VYQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlB3ZHQyQUdtLys4YWFwd0tnZ2VlVDhsdEpjaUdteGtXQVorcWxpalVWZzRWV3p2UElvS1NFbWM0VzBUaHRGTEdHeGRyZXNxN2daSlU2N0ZMY1h0R2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEyNTkyNjc2MToyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkd0NCeEZ1LzF3UWEyK2N6MGpES2E2RTZyM09JamRmTEpYd0x6UGlUa0JZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzA4MzIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhEYiJ9"
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
