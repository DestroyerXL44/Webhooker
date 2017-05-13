var request = require('request');

module.exports.sendMessage = function(options) {
  request({
    uri: `https://discordapp.com/api/webhooks/${options.id}/${options.token}`,
    method: "POST",
    form: {
      content: options.content,
      avatar_url: options.avatarUrl,
      username: options.username
    }
  });
}
