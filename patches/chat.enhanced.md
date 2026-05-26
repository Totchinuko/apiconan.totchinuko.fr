# Tot ! Enhanced Chat

## 2.0.0 Beta
- Chat was remade from scratch, as such, expect many changes that are not part of this patch note. I've tried to keep the UI mostly organized the same.
### Messages
- With the removal of personalized chat text color (Due to not being portable from Legacy), the text color is now tied to the chat theme you use.
- Character name is now always display as a message header, along with time and range. Header gets hidden in chained messages from the same user, using the same range and same name.
- Message caching is now server side for most channels excepted ranged channels such as Local. Caching is not automatically restored upon login, to save on server bandwidth, and a button is present at the top of the channel log to load older messages. Server cache is not stored in the database.
- Mentions are now outside the message content. In the chat input, an add button is present that allow you to attach mentions to a message by searching a character name.
- Remove text color depending on range. This is an unfortunate limitation as mentioned above. Instead, the range will be indicated in the message header.
- Words in languages that are not understood are now scrambled in fictional fonts from various fantasy universe, which is configurable by the server staff for each language.
- Focus mode now refresh the channel messages to apply the focus on past content.
- Channel export now feature a button to save the log in a txt file to the Saved folder directly as well as the previous method of copy-pasting.
- Items references are now inserted directly with the add button in the input field, and not from the inventory.
- Font-Size is now expressed as Font-Scale and act as a size multiplier.
- You can toggle the focus on a character by using one of their message's menu.
- You can mention a character by using one of their message's menu
### Window
- The chat now support multiple windows, that you can move around independently and drag and drop channels between them for organization and re-ordering. Channels will remain open on the desired window, even after re-log, until the user is disconnected from them.
- A window cannot escape the boundaries of the screen anymore. There is still a reset window positions in the Sudo client settings, in case something wrong happens.
- The command /channel was removed, instead an add button on top left corner of every window was added, to create/join a channel with a Gui list.
- The command /help was removed, instead you'll find a help button at the bottom left part of every window, featuring all the commands you have access to and details about their usage.
- A theme can now be selected for the chat, changing the look of the windows, the color used for the texts and in some cases the fonts. A few theme are available at launch, with the possibility to add more in the future. New themes can also be added by third party mods.
### Channels
- Channels are now persistent between restarts until explicit closure by the channel owner or the staff of the server.
- A channel will let you know if you send a message while being the only one connected to the channel.
- Direct Channels to other players now cannot be Observed by third party mods or server logs. No message from these channel will be redirected anywhere for instant consultation, but keep in mind that the server still keep a cache of past communications.
- Direct Channels will now remember the name of the two players at the time of creation. Even after changing act name the messages, cache, channel name, typing indicator and notifications will always use the original names. Opening a new channel with a player that has changed his act name, will create a completely new channel under that new act name, effectively allowing multiple channels to be opened under various aliases. This is to avoid the usual RP meta that can come out of it.
- Direct Channels will be closed automatically and removed from the database after 3 days of inactivity and if nobody is currently connected to it. This is to avoid ending up with a pile of dead direct channels tied to past act names no longer in use.
- Generic Channels now have an Owner, which is the player that created the channel. The owner can view the list of connected players to kick them out or pass the ownership to another. Owner can change the channel name or password, and close the channel.
### Macros
- Macros can now insert the current Character name by using {CharName} in their content.
### Server Staff
- Staff can now view the list of all channels present on the server, change their settings, access the connected player list, or close them.
- Staff members with the moderator permission, are considered the owner of every generic channels, allowing them to access the ownership tab of the channels they are connected to.
- Added a new command `/staff`, that let you post with a special staff tag and color. Message will behave like a regular message otherwise.

## 2.0.9 beta
- Fixed blank chat window when the server is set to character remain in the world when players are logged off.
- Fixed Sippy's card categories
- Fixed various typos
- Fixed various formating issues in non IC channels and OOC messages
- Fixed Ranged chat always using the default range no matter what was selected by the user.
- Fixed an issue that would scramble messages, even without any language present
- Fixed invisible chat windows interfering with other UI such as the Radial Wheel

## 2.0.17
- Mentions can now be added more quickly by typing a @ symbol in chat. This will open a contextual search, that will search for characters as you type next to it. You can then use the Up and Down arrows to select your mention and the Enter key to insert it in your message. This effectively allow to insert mentions without having to use the mouse. This behavior can be disabled in the settings.
- Mentions can also be added with a Shift+Click on the Character model in the game.
- Added a few safeties to prevent identical channels from opening twice on the UI. If this still happen to you, please open a bug report with as many details on the issue as possible.
- Various script error fixes

## 2.0.19
- Added a popup and setting to choose whether you want to keep the Vanilla chat active alongside Tot!Chat, with instructions on how to configure your inputs. This setting is saved on a per-server basis.