// .*(lunch sheet|lunchsheet).*

module.exports = function(controller) {

  controller.hears(['.*(lunch sheet|lunchsheet|display the sacred texts|sacred texts).*'], 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, {
      text: '',
      attachments: [
        {
          title: 'The Lunch Sheet',
          title_link: 'https://docs.google.com/spreadsheets/d/1TxkIFQRyrioIDnDKaHNny_F8_fopw7ijjC1VpoPFU2g/edit#gid=0',
          text: 'The sacred texts of the lunch buddies'
        }]
    });
  });

};