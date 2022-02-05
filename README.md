# bt.tn event handler

This app has a single POST endopint (/bttn) that listens to bttn events,
and posts a message to Slack upon receipt.

## Configuration

There are two .env config vars that need to be set:

`SLACK_TOKEN`

Used to connect to the Slack API.

`SLACK_CHANNEL`

The Slack channel to which to send the message.
