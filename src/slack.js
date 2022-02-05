const { WebClient } = require("@slack/web-api");
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

const SLACK_CHANNEL="#big-red-button";

/** Post a message to a Slack channel

@param {string} channel - Slack channel name
@param {Object} message - the message to send (may include HTML)

@returns {bool} true if the message was sent.

API: https://api.slack.com/methods/chat.postMessage
*/
const sendChannelMessage = async (message) => {
    web.chat.postMessage({
          channel: `#${process.env.SLACK_CHANNEL}`,
          text: message,
          as_user: false,
          icon_url: process.env.SLACK_BOT_ICON_URL,
          username: process.env.SLACK_BOT_USERNAME
      })
      .then(resp => {
          return resp.ok;
      })
      .catch(error => {
          console.log(error);
          return false;
      });
};

module.exports = {
    sendChannelMessage: token ? sendChannelMessage : console.log
};
