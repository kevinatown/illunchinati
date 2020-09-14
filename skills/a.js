// var wordfilter = require('wordfilter');
// var _ = require('lodash');
// var moment = require('moment');
// const { shameSomeone } = require('../utils/helpers');
module.exports = controller => {
  controller.on("slash_command", function(bot, message) {
    console.log(message)
    const {
      channel,
      user,
      user_name,
      token,
      text,
      response_url,
      channel_name
    } = message;
    const textArray = text.split("");
    bot.replyAcknowledge();

    const mockcase = textArray
      .map((x, i) => {
        if (i % 2 === 0) {
          return x.toUpperCase();
        }
        return x.toLowerCase();
      })
      .join("");

    bot.api.users.info(
      {
        user,
        token: process.env.slackToken
      },
      (err, res) => {
        if (!!err) {
          console.log(err);
        } else {
          let { real_name_normalized } = res.user.profile;

          real_name_normalized =
            !!real_name_normalized && real_name_normalized === "Ankur Roy"
              ? "Roy Ankur"
              : real_name_normalized;
          if (channel_name === "directmessage") {
            // do something else
          } else {
            bot.api.chat.postMessage(
              {
                channel,
                text: mockcase,
                unfurl_media: true,
                unfurl_links: true,
                as_user: false,
                username: real_name_normalized,
                token: process.env.slackToken,
                icon_url:
                  "https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg"
                // attachments: [
                //   {
                //     image_url: answer,
                //     text: ``
                //   }
                // ]
              },
              (err, response) => {
                if (!!err) console.log(err);
              }
            );
          }
        }
      }
    );
  });
};
