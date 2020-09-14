var _ = require("lodash");

module.exports = function(controller) {
  controller.hears(
    [".*disclaimer*", ".*disclosure*"],
    "direct_message,direct_mention,mention,ambient",
    function(bot, message) {
      const lunchBudsLegal = `*Disclaimer:* The lunch-buddies channel, lunchbot, or any buddies whom lunch, henceforth referred to as BUDDIES, is a group with the sole purpose of discussing lunch, lunch plans, or any lunch related topics, henceforth referred to as LUNCH. Any topics outside of the previously mentioned LUNCH may be posted within this channel, however these topics are expressed as the author’s own views and opinions and do not express the views or opinions of BUDDIES. BUDDIES have no affiliation with or endorse the racist frog “PePe” or the hacker known as “4 Chan”.`;
      bot.reply(message, `${lunchBudsLegal}`);
    }
  );
};
