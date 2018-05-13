# Readme

## Nodejs TelegramBot for IFTTT requests

A simple Telegram Bot that enables you to make requests to IFTTT.

(Italian article here: https://mattiaaccornero.com/2016/06/ifttt-via-bot-telegram-nodejs/)


## Dependencies

- [ExpressJS](http://expressjs.com/)
- [Node-ifttt-maker](https://github.com/j3lte/node-ifttt-maker)
- [Node-telegram-bot](https://github.com/depoio/node-telegram-bot)

You can install dependencies using `npm install`.

## Configuration
Please set into the app.js file, your IFTTT token ([Get it here](https://ifttt.com/maker)) and your Telegram token ([BotFather will give you once!](https://telegram.me/botfather)).

### Files in config folder
Into the *auth_users.json* you can set the username and the chat_id of your users.
Into the *actions_data.json*  you can set the bot actions. *(Es. /turn_off_lights in Telegram is turn_off_lights in json dictionary and it is also the name of the ifttt event)*


## Using on DreamHost VPS

As I'm using it on a DreamHost VPS, I create .htaccess for configure Phusion Passenger.

### .htaccess
Please change username and domain folder into the *.htaccess* file

`PassengerAppRoot /home/[username]/[domain folder]/`


##License

Read [license.md](https://github.com/beat84/nodejs_telegram_bot_ifttt/blob/master/LICENSE.md) for license information.
