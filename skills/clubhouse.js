var _ = require('lodash');

module.exports = function(controller) {
  const clubhouseGifs = [
    'https://media.giphy.com/media/xT5LMWBEnXT2IVYs5G/giphy.gif', // quality
    'https://cdn.glitch.com/ede73467-97f0-49de-b86e-1cec8a2ef1c8%2Fezgif-1-cbd0ee6b6ae3.gif?v=1560534215407', // quality
    'https://media.giphy.com/media/3o6ZtdRcAzkgUoomZy/giphy.gif',
    'https://media.giphy.com/media/3o6ZtnaLo2Zrl0Xc4g/giphy.gif',
    'https://media.giphy.com/media/l0HlDDrnGmTdHagpO/giphy.gif',
    'https://media.giphy.com/media/3o6Zte82JwOaaeEBY4/giphy.gif',
    'https://media.giphy.com/media/XtCxEDvqQOLvi/giphy.gif',
    'https://giphy.com/gifs/friday-chris-tucker-smokey-mWGbyxdIOa6MU',
    'https://cdn.glitch.com/ede73467-97f0-49de-b86e-1cec8a2ef1c8%2Fezgif-1-c12627773f88.gif?v=1560534436451', // quality
    'https://giphy.com/gifs/soa-sons-of-anarchy-XtCxEDvqQOLvi',
    
  ];
  
  controller.hears(['.*(head to the clubhouse|join me in the clubhouse|clubhouse time|expecting you at the clubhouse|meet me in the clubhouse|let\'s go clubbin|let us go clubbin).*'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    bot.reply(message, `<!here> ${_.sample(clubhouseGifs)}`);
  });
  
};