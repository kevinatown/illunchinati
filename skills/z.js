// var wordfilter = require('wordfilter');
// var _ = require('lodash');
var moment = require("moment");
const { shameSomeone } = require("../utils/helpers");
const valid_emoji = [":owl:", ":partyowl:", ":passive-aggressive-owl:"];
module.exports = controller => {
  controller.hears(
    ["bagel", "bagle", "beagle"],
    "ambient,mention,direct_message,direct_mention",
    function(bot, message) {
      if (message.match[0]) {
        // const user = message.user;
        const timestamp = message.event_ts;
        const channel = message.channel;
        bot.api.reactions.add({
          name: "unreasonabagel",
          token: process.env.slackToken,
          timestamp,
          channel
        });
      }
    }
  );

  controller.hears(
    [".*"],
    "ambient,mention,direct_message,direct_mention",
    function(bot, message) {
      const timestamp = message.event_ts;
      const { user, user_name, channel } = message;
//       
//       fix to check for emoji
//       
      bot.api.users.info(
        {
          user,
          token: process.env.slackToken
        },
        (err, res) => {
          if (!!err) {
            console.log(err);
          } else {
            const { status_emoji } = res.user.profile;
            
            if (status_emoji === ':astros:') {
              bot.api.reactions.add({
                name: "nats",
                token: process.env.slackToken,
                timestamp,
                channel
              });
            }
          }
        }
      );

      // if (user === 'UAV843EKH') {
      //   bot.api.reactions.add({
      //     name: "nats",
      //     token: process.env.slackToken,
      //     timestamp,
      //     channel
      //   });
      // }

      if (moment().day() === 5 && Math.floor(Math.random() * 7) == 0) {
        bot.api.reactions.add({
          name: "italian_hand",
          token: process.env.slackToken,
          timestamp,
          channel
        });
      }
    }
  );

  //   controller.hears(['.*'], 'direct_message,direct_mention,mention', function(bot, message) {
  //     const user = message.user;
  //     const timestamp = message.event_ts;
  //     const channel = message.channel;
  //     bot.api.users.info({
  //         user,
  //         token: process.env.slackToken
  //       }, (err,response)=> {
  //         let icon = '';
  //         if  (response.ok) {
  //           icon = response.user.profile.status_emoji;
  //           if (valid_emoji.indexOf(icon) === -1) {
  //             // shameSomeone(1, `<@${user}>`, 0, message, bot);
  //             bot.api.reactions.add({
  //               name: 'no',
  //               token: process.env.slackToken,
  //               timestamp,
  //               channel
  //             });
  //           }
  //         }

  //       });
  //       bot.reply(message, '*BEEP BOOP BEEP*')
  //     });

  // controller.hears(['.*'], 'ambient', function(bot, message) {
  //   const user = message.user;
  //   const timestamp = message.event_ts;
  //   const channel = message.channel;
  //  bot.api.users.info({
  //       user,
  //       token: process.env.slackToken
  //     }, (err,response)=> {
  //       let icon = '';
  //       if  (response.ok) {
  //         icon = response.user.profile.status_emoji;
  //         if (valid_emoji.indexOf(icon) === -1) {
  //           // shameSomeone(1, `<@${user}>`, 0, message, bot);
  //           // Kevin please don't add this again.
  //           // Please I'm begging you
  //           // Jason is getting mad about it
  //           //bot.api.reactions.add({
  //           //  name: 'no',
  //           //  token: process.env.slackToken,
  //           //  timestamp,
  //           //  channel
  //           //});
  //         }
  //       }
  //     });
  // });
};
