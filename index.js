const Discord = require('discord.js');
const colors = require('colors')
const client = new Discord.Client();
const auth = require('./auth.json');
const config = require('./config.json');

client.on('ready', () => {
  console.log(`HONK HONK HONK ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.channel.type == "dm") return;
  else if (msg.content.toLowerCase().includes("honk")) {
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
  msg.react(emoji)
      .then(console.log(colors.blue('Message Honked in:' + msg.channel.name)))
      .catch(console.error);
} else if (msg.content.toLowerCase().includes("hönk")) {  //Support for alternative spelling of 'honk'
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
  msg.react(emoji)
      .then(console.log(colors.blue('Message Honked in:' + msg.channel.name)))
      .catch(console.error);
}
});

client.on('message', msg => {     //The bot will react with a dagger emoji to all messages sent by users specified in config.json
  if (msg.author.id == config.user) {
  msg.react("🗡")
    .then(console.log)
    .catch(console.error);
} else {return;}
});

client.on('message', msg => {
  if (msg.channel.type == "dm") return;
  else if(msg.content.toLowerCase().includes("h")) {
    const number = Math.floor((Math.random() * 200) + 1);
    if (number == 50) {
      msg.channel.send('HONK')
        .then(console.log(colors.green(number + ' HONK deployed in:' + msg.channel.name)))
        .catch(console.error);
  }  else {
      console.log(colors.red(number + ' Honk not deployed'.red));
    }
  }
})

client.login(auth.token);
