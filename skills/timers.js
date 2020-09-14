var _ = require('lodash');

module.exports = function(controller) {
  const timerGifs = {
    1: 'https://i.imgur.com/7nKLmZU.gif',
  2: 'https://i.imgur.com/wWv7JGq.gif',
  3: 'https://i.imgur.com/ZG1m9Fc.gif',
  4: 'https://i.imgur.com/Zf6g6ac.gif',
  5: 'https://i.imgur.com/fZN7hhz.gif',
  6: 'https://i.imgur.com/ZHr1lBX.gif',
  7: 'https://i.imgur.com/2mO4hMT.gif',
  8: 'https://i.imgur.com/lN3sr9J.gif',
  9: 'https://i.imgur.com/D8DKWYu.gif',
  10: 'https://i.imgur.com/PmNtHEm.gif',
  };
  
  const PATTERN = new RegExp(/(^|\s)(\d+) (min|minute|minny|meenut|meenoot)s? timer/i);
  
  controller.hears([PATTERN], 'direct_message,direct_mention,mention,ambient', function (bot, message) {
    const index = message.match[2];
    if (index >= 1 && index <= 10) {
      const gif = timerGifs[index];
      bot.reply(message, `<!here> ${gif}`);
    } else {
      bot.reply(message, '<!here> IMPOSSIBLE');
    }
  });

  /*controller.hears(['(^|\s)(1 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[1]}`);
  });
  controller.hears(['(^|\s)(2 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[2]}`);
  });

  controller.hears(['\s(3 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[3]}`);
  });

  controller.hears(['(^|\s)(4 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[4]}`);
  });

  controller.hears(['(^|\s)(5 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[5]}`);
  });

  controller.hears(['(^|\s)(6 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[6]}`);
  });

  controller.hears(['(^|\s)(7 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[7]}`);
  });

  controller.hears(['(^|\s)(8 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[8]}`);
  });

  controller.hears(['(^|\s)(9 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[9]}`);
  });

  controller.hears(['(^|\s)(10 minute timer).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
      bot.reply(message, `<!here> ${timerGifs[10]}`);
  });*/

  
};