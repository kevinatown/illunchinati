var wordfilter = require('wordfilter');
var _ = require('lodash');
var moment = require('moment');
const { shameSomeone } = require('../utils/helpers');
module.exports = (controller) => {
    
    controller.hears([new RegExp(/^shame (<@[A-Z0-9]*>)(\s\d+)?/i)], 'direct_message,direct_mention,ambient,mention', function(bot, message) {
        if (message.match[1] && message.match[1] !== '<@UAUUZAUCD>') {
          const times = 0;
          const name = message.match[1];
          const maxShames = message.match[2] ? parseInt(_.trim(message.match[2]), 10) : 3;
          // bot.reply(message, `*SHAME ${name}*`);
          setTimeout(() => shameSomeone(maxShames, name, times, message, bot), 1000);
        } else if (message.match[1] && message.match[1] === '<@UAUUZAUCD>') {
          const times = 0;
          const name = `<@${message.event.user}>`;
          const maxShames = message.match[2] ? parseInt(_.trim(message.match[2]), 10) : 3;
          bot.reply(message, `*HAHA NICE TRY! ${name}*`);
          setTimeout(() => shameSomeone(maxShames, name, times, message, bot), 1000);
        }
    });
  controller.hears([new RegExp(/^shame <!here>(\s\d+)?/i)], 'direct_message,direct_mention,ambient,mention', function(bot, message) {
      if (message.match[0]) {
          const times = 0;
          const name = '<!here>';
          const maxShames = message.match[2] ? parseInt(_.trim(message.match[2]), 10) : 3;
          // bot.reply(message, `*SHAME ${name}*`);
          setTimeout(() => shameSomeone(maxShames, name, times, message, bot), 1000);
        } 
    });
  
}