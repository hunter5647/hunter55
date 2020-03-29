const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})
client.login("NjkzNzU4MjEyMzM5NDAwODM1.XoDRrQ.83P6s6jkIGbXp0YD5aCwpYjmnlE")
