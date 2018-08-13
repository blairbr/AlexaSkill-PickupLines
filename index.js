"use strict";

var Alexa = require("alexa-sdk");

const pickupData = ["Excuse me, you just dropped something...  my jaw.", 
                    "Are you a ninja? Because you just snuck into my heart.", 
                    "How much does a polar bear weigh?  Enough to break the ice.  Hi, I'm Alexa.", 
                    "I just got a new shirt. Feel the fabric.  You know what that is? Girlfriend material.", 
                    "Have we met before? Because you look just like my next girlfriend.", 
                    "Are you from Australia? Cuz you're meeting all of my koala fications", 
                    "Do you think you could help me? I lost my number. Could I have yours?", 
                    "Are you a library book? Cuz I'm gonna check you out.", 
                    "Are you from Tennessee? Because you're the only ten I see.", 
                    "Are you a parking ticket? ‘Cause you’ve got fine written all over you."];

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Hello, gorgeous"); 
    this.emit(':responseReady');
  },
  "GeneratePickUpLineIntent": function () {
    this.response.speak(randomPhrase(pickupData));
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Welcome to the pick up line skill. Meow meow"); 
    this.emit(':responseReady');
  },
    "WorkingProperlyIntent": function () {
    this.response.speak("Yes, everything is properly connected"); 
    this.emit(':responseReady');
  },
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function randomPhrase(pickupData) {
//pickupData is an array [] of words or phrases
var i = 0;
i = Math.floor(Math.random() * pickupData.length);

return(pickupData[i]);
}