const Discord = require('discord.js');
const colors = require('colors')
const client = new Discord.Client();
const auth = require('./auth.json');
const config = require('./config.json');

client.on('ready', () => {
  console.log(`HONK HONK HONK ${client.user.tag}!`);
});

client.on('message', msg => {               //Bot will react with a honk emote on any message which includes the word 'honk'
  if (msg.content.toLowerCase().includes("honk")) {   //Case insensitive
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
  msg.react(emoji)
      .then(console.log)
      .catch(console.error);
} else if (msg.content.toLowerCase().includes("hönk")) {  //Support for alternative spelling of 'honk'
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
  msg.react(emoji)
      .then(console.log)
      .catch(console.error);
}
});

client.on('message', msg => {     //The bot will react with a dagger emoji to all messages sent by users specified in config.json
  if (msg.author.id == config.user) {
  msg.react("🗡")
    .then(console.log)
    .catch(console.error);
} else {}
});

client.on('message', msg => {
  if(msg.content.toLowerCase().includes("h")) {
    const number = Math.floor((Math.random() * 100) + 1);
    if (number == 50) {
      msg.channel.send('HONK')
        .then(message => console.log (colors.green(number + ' HONK deployed')))
        .catch(console.error);
  }  else {
      console.log(colors.red(number + ' Honk not deployed'.red));
    }
  }
})

client.login(auth.token);
