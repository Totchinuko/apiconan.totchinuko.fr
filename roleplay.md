# Roleplay Redux API

## Modding Resources

### Assets
If you'd like to override the Redux Runes with your own server mod, here are all the images and IDs used by the mod.
[Download Runes](/API/RoleplayRedux.Runes.7z ':ignore')

[Download Potions](/API/RoleplayRedux.Potions.7z ':ignore')

[Download Scrolls](/API/RoleplayRedux.Scrolls.7z ':ignore')

### Example

Example of how to consume the API.

The interface name you're looking for is `I_RP_Dice_Component`

![RR Api Example](/img/screenshot/RR.Example.png ':size=70%')

### Node.js Webserver

This is a simple implementation of a webserver in NodeJS.  
If you want use RR's web hooks, you'll need to host this (or something similar, this is just an example) on your own server.

Inside `/routes/index.js` you'll find two endpoints:   
`/message` receives chat messages  
`/log` receives all the stuff that goes into the ingame mod's log

You'll need to replace YOUR_WEBHOOK_HERE with your actual Discord webhook.  
Once this is hosted and running, input your URL into RR.

This thing is provided as is and I do not wish to become its tech support.   
All issues you may run into while getting this to run can be solved with Google.  
Good luck!

**Download**: [Web Server](/API/webserver.7z ':ignore')

### Player Chat Logger

You can configure RR to log all your incoming chat messages. It works as a webhook, so you'll need to host a service on your own.   
This can run locally on your PC, or somewhere in the cloud.

Here is a simple server I implemented. It will create a `.txt` under `/log` wherever you place it, and dump all chat messages in there.

You'll need NodeJS to run this.  
https://nodejs.org/en/

Once you have that installed, download the attached file, open its folder in CMD (command line), and type: `node chat-logger.js` 
Also leave the window open.

You'll need to enable the logger ingame, in your settings window. The URL for this mini-logger is `http://localhost:3000/message`

![LocalWebhook](/img/screenshot/LocalWebhook.png 'size=70%')

**Download API**: [chat-logger.js](/API/chat-logger.js ':ignore')

## Roleplay Redux API Download

!> **Install instructions**\
1- Extract this into `...\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\`, the end result should be `..\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\RoleplayRedux\I_RP_DiceComponent.uasset`
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Roleplay Redux 2.0.0](/API/RoleplayRedux2.0.0.7z ':ignore')

## Roleplay Redux Embedded API

This allows you to embed your dice system in its entirely into your server mod.

**Why would you want to do this?**  
1. No download will happen when a player connects. It's already in your server mod.
2. No character limit. You may come to regret this.

**Why would you not want to do this?**  
1. Cannot update it live. You'll need to push a mod update.

**How?**  
1. Extract this in your /ModsShared folder.
2. Make a data table using the provided Struct.
3. Put your dice system into the data table. It doesn't matter what the ID is, it will always use the first thing it finds.
4. Merge tables.
5. Publish your mod.

**Editing**  
You can still use the ingame dice system editor, but saving will do nothing. You'll need to export the text and put it in your mod.

**Download API**: [Roleplay Redux Embedded 1.0.0](/API/RoleplayRedux.Embedded.1.0.0.7z ':ignore')