const Discord = require('discord.js');
const colors = require('colors')  //Used for pretty aesthetic colours in console
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log(`HONK HONK HONK ${client.user.tag}!`);
});

client.on('guildCreate', srv => {
  if (srv.guild.available == false) return;
  if (srv.guild.emojis.find(emoji => emoji.name === 'honk')) {
  console.log(colors.green('Server has honk emote'));
  }
  else {
    (srv.guild.createemoji('/assets/honk_emote.png', 'honk') 
    .then(console.log(colors.green(`Created honk with name ${emoji.name}`))));
    
 }});

client.on('message', msg => {
  if (msg.guild.available == false) return;
  else if (msg.channel.type == "dm") return; //Rough fix for a bug in which the bot crashes upon being dm'd with a honk
  else if (msg.content.toLowerCase().includes("honk")) {  //Reacts to any message containing 'honk' with the emoji tied to :honk:
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
    msg.react(emoji)
      .then(console.log(colors.blue('Message Honked in:' + msg.channel.name)))
      .catch(console.error);
} 
  else if (msg.content.toLowerCase().includes("hönk")) {  //Support for alternative spelling of 'honk'
    const emoji = msg.guild.emojis.find(emoji => emoji.name === 'honk');
    msg.react(emoji)
      .then(console.log(colors.blue('Message Honked in:' + msg.channel.name)))
      .catch(console.error);
}
});

client.on('message', msg => {     //The bot will react with a dagger emoji when targeting = 10 on a particular message
  var targeting = Math.floor((Math.random() * 2500)+1);
  if (msg.guild.available == false) return;
  else if (targeting == 10) {
    msg.react("🗡")
      .then(console.log(colors.cyan('DAGGER deployed in:' + msg.channel.name)))
      .catch(console.error);
} else {
    console.log(colors.red(targeting + ' Dagger not deployed'));
}});

client.on('message', msg => {   //On any message containing the letter 'h' the bot generates a number between 1 and 1000
if (msg.guild.available == false) return;
else if (msg.channel.type == "dm") return;
else if (msg.content.toLowerCase().includes("h")) {
  var number = Math.floor((Math.random() * 1000) + 1);
   if (number == 50) { //If that message is a 50 it triggers a special honk
     msg.channel.send('HONK')
      .then(console.log(colors.green('HONK deployed:' + msg.channel.name)))
      .catch(console.error);
  }  
  else {
   console.log(colors.red(number + ' Honk not deployed')); //On any other number it generates a console log and does nothing
    }
  }
});

client.login(auth.token);
