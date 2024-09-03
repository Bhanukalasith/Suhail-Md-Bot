const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_12_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODksXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFUWpVSXdLQXdoQzVYMmk0Qmpub1oyV1lRM2ZqR2tpdzJ6aFkyZ3JtdzVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4Z25mMHFWQVQ4dW4xU3hlSUFnMUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkZmIwY2VlLTQxNzgtNDdjNC05M2RhLTIzMDI4Yzk4ZmUxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMTIsXG4gICAgICAxNzcsXG4gICAgICAxNDMsXG4gICAgICA2MSxcbiAgICAgIDE5NSxcbiAgICAgIDEzMixcbiAgICAgIDExNixcbiAgICAgIDEwNSxcbiAgICAgIDExOSxcbiAgICAgIDIzMCxcbiAgICAgIDEwMixcbiAgICAgIDUyLFxuICAgICAgNzYsXG4gICAgICAxNDksXG4gICAgICAxMjgsXG4gICAgICAxMjQsXG4gICAgICA1MSxcbiAgICAgIDgyLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA0NSxcbiAgICAgIDIyMCxcbiAgICAgIDExOSxcbiAgICAgIDI1NCxcbiAgICAgIDE1NixcbiAgICAgIDE1MixcbiAgICAgIDYyLFxuICAgICAgMTAzLFxuICAgICAgODIsXG4gICAgICA4MCxcbiAgICAgIDg2LFxuICAgICAgMjUyLFxuICAgICAgMjIxLFxuICAgICAgMTkwLFxuICAgICAgMTc3LFxuICAgICAgMzksXG4gICAgICAyNTAsXG4gICAgICAyNSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZOEo0Wkw2N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzYyNjU2Mzg6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyODkzNTAxODk0MjU1ODo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTGU1SU1HRVBhSjI3WUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldYaDRUb0FGdWlsaWtwdlcyR1ByZlRwOU4vcTlTM0Z1dFNHMmxOTS9SR3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWkFNM1gxS2ZiRUVjaDFJdi9yOFFKaC8vYkkwS0JtN3lxTGgyMDZ5a1BMV3RTd1NUR3RMUVRSbmh4QkwyVVErTXIyR08vcmdreXM2KzRHVUhaU0xYRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS21DbGNlZzZXQjhjRGJqZmUwQmt1NERtcHNUY1F5SUFvbEtBandSZmQ2eFZ5VVY3VnVaOXhLOW8zV0R2Q1dCVUttMkNzS0N0TEREWWVmRkIvajNaRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzYyNjU2Mzg6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTM1MTE2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFsalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWxqLmpzb24iOiAie1wia2V5RGF0YVwiOlwibFFNTTBsQ0QvVW9PNnJHLzFYZjNxeWZFbjVxb3FxUWRBSmdzajl2WEFnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE4NTU0NjM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2NDI4MzQ3ODZcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
