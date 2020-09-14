var _ = require('lodash');

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

};