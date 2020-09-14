var _ = require('lodash');

module.exports = function(controller) {
  const bellGifs = [
    'https://media.giphy.com/media/3vEIcic7xp9VHI2TFC/giphy.gif',
    'https://media.giphy.com/media/l0He3K120iZ7rXlHa/giphy.gif',
    'https://media.giphy.com/media/xUNd9EG4XJLj58VA8E/giphy.gif',
    'https://media.giphy.com/media/xTiQymjYza10NhOFDa/giphy.gif',
    'https://media.giphy.com/media/3oFzm0F8nf3BRILjX2/giphy.gif'
  ];
  const bagelGifs = [
    'https://media.giphy.com/media/2qL4MYuanRlni/giphy.gif',
    'https://media.giphy.com/media/XxhmabUVLDKKc/giphy.gif',
    'https://media.giphy.com/media/3oEdvdH897RWi59NXG/giphy.gif',
    'https://media.giphy.com/media/3o7TKyMEp2jsEtN68M/giphy.gif',
    'https://media.giphy.com/media/LIX4uGLDNFW1O/giphy.gif',
    'https://media.giphy.com/media/Z9FMENzCz38Ck/source.gif',
    'https://media.giphy.com/media/vAghZfN9lMNnW/giphy.gif',
    'https://giphy.com/gifs/mallon-themallons-2xPPiPgwjVgSFmg5Ei',
    'https://giphy.com/gifs/blog-buckeyes-recruitment-l1wEqttzjLx5K',
    'https://giphy.com/gifs/appropos-bendy-bagel-hole-flying-xTiTnF7i8iO8eE8pl6',
    
  ];
  
  controller.hears(['.*(bagel bell|BAGEL BELL|BAGEL TIME|bagel time).*'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, `<!here> ${_.sample(bagelGifs)}`);
  });
  
  controller.hears(['.*(bell|BELL).*','.*(RING|ring).*'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, `<!here> ${_.sample(bellGifs)}`);
  });

};