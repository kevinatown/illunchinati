var _ = require('lodash');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = function(controller) {
  controller.hears(['.*(express your feelings|what would John say|how are you).*', '.*WWJS*.','.*wwjs.*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var x = Math.random();
    
    if (x <= .2){
      bot.reply(message, "YEET");
    }
    else if (x <= .4){
      bot.reply(message, "Tight tight tight.");
    }
    else if (x <= .6){
      bot.reply(message, "Whack!");
    }
    else if (x <= .8){
      bot.reply(message, "It's ok buddy bear.");
    }
    else {
      bot.reply(message, "REEEEEEEEEEEEEEEEE");
    }
  });

//   controller.hears(['.*\?$'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
//     var respond = Math.random();

//     const yesGifs = [
//       'https://giphy.com/gifs/adweek-yes-absolutely-thousand-times-Zai3ffKrUcLFwalDor',
//       'https://giphy.com/gifs/excited-yes-agree-jErnybNlfE1lm',
//     ];

//     const noGifs = [
//       'https://giphy.com/gifs/no-green-LOEI8jsNKPmzdJYvhJ', // quality
//       'https://giphy.com/gifs/reaction-mood-15aGGXfSlat2dP6ohs'
//     ];

//     var respond = Math.random();
//     if (respond <= .05){
//       bot.reply(message, yesGifs[getRandomInt(yesGifs.length)]);
//     }
//     else if (respond <= .1){
//       bot.reply(message, noGifs[getRandomInt(noGifs.length)]);
//     }
//   });
};