module.exports = function(controller) {
 
  controller.hears([new RegExp('.*\b(shit|fuck|hell|damn|bitch)\b.*','i')], 'ambient', function(bot, message) {
    bot.reply(message, `language`);
  });

};