var http = require('http');
var Bot = require('node-telegram-bot');

var IFTTT = require('node-ifttt-maker'),
    ifttt = new IFTTT('YOUR_IFTTT_TOKEN');

var actions_dict = require('./config/actions_data.json');

var auth_users = require('./config/auth_users.json');

var bot = new Bot({
  token: 'YOUR_TELEGRAM_TOKEN'
}).on('message', function (message) {
	var notFound = true;

	//security
	var request_from_chat = message.chat.id;
	var userEnabled = false;
	for(var k in auth_users){
		if(auth_users[k].chat_id==request_from_chat){
			userEnabled = true;
		}
	}
	if(!userEnabled){
		console.log("User "+request_from_user+" request denied!");
		return;
	}

	//requested command
	var required_action = message.text.substring(1, message.text.lenght);
	for(var n in actions_dict){
		if(actions_dict[n].id==required_action){

			ifttt.request({
			    event: actions_dict[n].id,
			    method: 'GET'
			}, function (err) {
				if (err) {
					console.log(err);
				} else {
					var opts = {
						chat_id: message.chat.id,
						text: actions_dict[n].ok_message
					}
					bot.sendMessage(opts);
				}
			});
			notFound = false;

			break;
		}
	}

	if(notFound){
 		console.log(message);
	}
}).start();

var express = require('express');
var app = express();

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

var server = app.listen(80);
