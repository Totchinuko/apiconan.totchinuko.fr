# Tot ! Chat 1.3.x

## 1.3.0
- Posted Message Edition
    - By hovering your mouse pointer on a message you now have access to a toolbar on the right, Discord style.
    - You can edit messages posted by yourself directly (only messages posted after 1.3.0 can be edited). Messages posted on your behalf like notification, linked messages or RR rolls cannot be edited.
    - Message that are edited appear with a "(edited)" at the end, and you can visualize the original version at any time using the message toolbar.
    - In the local channel, people that received the original message will receive the edit regardless of their current position.
    - You cannot edit the Language or the Range and you cannot use a Command or a Macro during an edit.
- Fixing some unintended behavior with the RR and Devious Desire window


## 1.3.1
- Private channels were renamed after a /act and a relog

## 1.3.2
- Implementing new notification internal API for better handling of cross mod notifications

## 1.3.4
- Chat overlay corner button was not working after the main character death

## 1.3.5
- Adding /clear command to clear the current channel log and cache
- Add an option to have sound notification on the current channel
- Mention background color is now a separated parameter with alpha support.

## 1.3.6
- Tot ! Chat is now compatible with Pippi and the vanilla chat.
- In the game escape menu, you can access a small documentation on the top right corner of the screen that will explain how to use both on just one.

## 1.3.7
- Removal of nameplate settings, as it has been moved to sudo.
- Fix special language being available to everyone

## 1.3.9
- Rework the bubble look and feel to match more the style of RPR
- Improved reactivity of the typing signal
- Added a parameter to control the background opacity of bubbles
- Fixed distance based display of the nameplate and bubbles

## 1.3.10
- Hide you own bubble parameter was disabling everyone's bubbles

## 1.3.12
- You can now customize the previous/next message sent key bindings (Default is Shift + Up/Down)
- Added a key bind to edit the last message posted in the current channel. (Default is Up)
- Improved message editing keyboard focus
- Escape now cancel a message edition while focused on the chat input

## 1.3.13
- Fix message historic navigation being inverted

## 1.3.14
- Fixed channel list unfolding in rare situations when it should not.

## 1.3.15
- Allow to change the emote formatting separately for /me, /tell and /do
- Fixed OOC message getting hidden by language

## 1.3.16
- Integration of Sudo Backup system
- Added a setting to deactivate server wide the nameplate visibility based on selected chat range.

## 1.3.17
- Experimental Feature: Alternate Horse Auto Run. Added in player settings.

## 1.3.20
- Chat bubbles did not scale language tag properly with selected font size
- Improved the active chat notification setting to not ring when posting message or receiving notifications.

## 1.3.22
- Display the role name of character in the tooltip of a message
- Allow users to disable Role colors for character names in message, using instead the user defined color.

## 1.3.24
- Fixed infinite horse stamina exploit. No, this was not a feature.

## 1.3.25
- Adding /servertime command `Feature

## 1.3.26
- Added a range visualizer in a form a sphere around your character

## 1.3.27
- Fixed the range visualizer size to properly display the radius instead of the diameter.