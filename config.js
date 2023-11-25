const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2348134288652"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'uyo/Nigeria'
global.gurl = 'https://instagram.com/therea1maxx/' // add your username
global.sudo = process.env.SUDO || '2348134288652' 
global.devs = '2348134288652';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZoOVIyeHplbHBZd3BHcTRteGZuVEM0Y3hLbEhwWHhkdEpETlBkTVYxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHpwaVJrcjdEckFmQ3JIOFpCaFJ2VkdwdjRoYk83MlFRdExwSERRbFltaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTEttYjJIUWhFeUlzNEo2VEJsRjhNOHJ4VW5FdG9ISGUyZG1YK2h5SEVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIN3BVbEY0ZDIvUVZPZE5rcVJ6Zm12Slg1Q1dXeXBUQng1dUV0UkJuOHk4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FSXk5aEQreE5Yem9wdzQxVXZxdWlrVXVzeTRlclJVZC9BOTBsUVFqRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE5UWthYzdVa0F0aWo1R3IwTXNLRVJqVkFuVmlsYmNoVE1uUHFZV2NxeDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTlgvZkYzSnM1WnFlN3hXaTFNMXc2WXhKdGk1ZHhVcjNOeXJMTVgrdllEWkRaRWhCSjIwU0dvV3I1UXJWUDdTa1BYRzBiSHV1S2lNTGJIaWRQRGRqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjgzLCJhZHZTZWNyZXRLZXkiOiJjbVNzYkJ1bE91MVp4ZlVoMjN2QVQ1UTI2d0JoWk43WGhNUWVMckFIczkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0VGF1dzJES1RES3hLS0lWWVRlUGpRIiwicGhvbmVJZCI6Ijg4ZWY0MTRkLTc5YmMtNDU0ZS1iMjA3LWNkM2I4MmZhMWUxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNm11d2t4dExDaW96amhicVZ1NTlPZ24rNm89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh6bzhJSlNsTWFoSzU0ZUthV0lsSXdHYjZHQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05DeW9Ja1BFTHFIaXFzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhvRWZCanpWbDZqQ0xDd3NoWlh2dlpkL3hOMThPb0ZJY2g5Ry9RWHdyQ0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5DckF4Si80RFFoZnhPdG9IalVQQ3oxV1Rvd2FSRnZoTE5RNHUwa3F4bTVRZkM1bElSRVZkeG9RbkRmSTRnN2paRlRXRDFkbldQQ3FFY1dnWmR4UGdRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1SUFQbytGaXBaYmp2Q2NoaFdudGd2VUMwMk9ES2N4MkdhTG85RTJ2RFJJOXQvWUVqY2E3bTVBZHk3Y3N5Y2N0WHFFR3FCUGlPSXprSzJ2a1dUTk9nZz09In0sIm1lIjp7ImlkIjoiMjM0ODEzNDI4ODY1MjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1BU1RFUkdFTklVU1RWIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzQyODg2NTI6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmS0JId1k4MVplb3dpd3NMSVdWNzcyWGY4VGRmRHFCU0hJZlJ2MEY4S3dnIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwOTU1MDY5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@MASTERGENIUS TV',
  packname:  process.env.PACK_NAME || 'MASTERGENIUSTV',
   
  botname:   process.env.BOT_NAME === undefined ? "MASTERGENIUS TV" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MASTERGENIUSTV' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
