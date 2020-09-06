// Here is the bot code
// You can update it i guess

const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "controlmybot",
    password: "token goes here"
  },
  channels: [
    "controlmypc",
    "controlmybot"
  ]
};


// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);


// Connect to Twitch:
client.connect();


// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  
  if (commandName === 'nightbot') {
    client.say(target, `/me DONT TALK ABOUT HIM HERE OK`);
    console.log("nightbot");
  }
  
      if (commandName === 'PogChamp') {
    client.say(target, `/me PogChamp`);
    console.log("PogChamp");
  }

    if (commandName === '!racc') {
    client.say(target, `RaccAttack`);
    console.log("!racc");
  }
  
    if (commandName === 'RaccAttack') {
    client.say(target, `RaccAttack`);
    console.log("RaccAttack");
  }

    if (commandName === '!modalert') {
    client.say(target, `/me The mods have been notified and will investigate. (pls dont use this command to spam, you will be banned.)`);
    console.log("!modalert");
  }

  if (commandName === 'cheese') {
    client.say(target, `/me bonk.. cheese StinkyCheese`);
    console.log("cheese");
  }

  if (commandName === 'e') {
    client.say(target, `/me E`);
    console.log("e");
  }
  
  if (commandName === '!test') {
    client.say(target, `test test blip blop`);
    console.log("!test");
  }

  if (commandName === 'type ***') {
    client.say(target, `/me  Dinkus (***) strikes again. He appears when twitch blocks a link, try to split your link like: type google and type .com`);
    console.log("type ***");
  }
  
  if (commandName === '!help') {
    client.say(target, `/me PLEASE READ THE RULES FIRST before you go here for the commands: https://stagingcmpc.glitch.me/commands.html`);
    console.log("!help");
  }
  
  if (commandName === '!timelapse') {
    client.say(target, `/me Timelapses from season 2: nothing yet... Timelapses from season 1: shorturl.at/lrI18`);
    console.log("!timelapse");
  }
  
  if (commandName === 'pain') {
    client.say(target, `/me PAIN`);
    console.log("pain");
  }
  
    if (commandName === 'never gonna give you up') {
    client.say(target, `/me agree`);
    console.log("never gonna give you up");
  }
  
 }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
