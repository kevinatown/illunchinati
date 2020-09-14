const shameSomeone = (maxShames, name, times, message, bot) => {
  bot.reply(message, `*SHAME ${name}*`);
  times++;
  if (times < maxShames) {
    setTimeout(() => shameSomeone(maxShames, name, times, message, bot), 1000);
  }
}

module.exports = {
  shameSomeone,
};
