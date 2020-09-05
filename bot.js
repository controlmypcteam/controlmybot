// Here is the bot code
// You can update it i guess

const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "controlmybot",
    password: "oauth token goes here"
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
    client.say(target, `/me The commands and rules are located beneath the stream on pc and in the about/info tab on the channel page on mobile.`);
    console.log("!help");
  }
  
  if (commandName === '!timelapse') {
    client.say(target, `/me Timelapse week 0-2 https://youtu.be/-vlVZdsQOGE Timelapse week 2-4 https://youtu.be/cwaopUlgci0 Timelapse week 4-6 https://youtu.be/DFRtCqNhQkk Timelapse week 6-8 https://youtu.be/rbAJLzGLwSU`);
    console.log("Message posted");
  }
  
  if (commandName === 'pain') {
    client.say(target, `/me PAIN`);
    console.log("Message posted");
  }
  
    if (commandName === 'never gonna give you up') {
    client.say(target, `/me agree`);
    console.log("Message posted");
  }
  
 }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
