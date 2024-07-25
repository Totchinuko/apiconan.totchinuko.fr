# Tot ! Chat 1.2.x

## New

`1.2.0`
- Implementing a new nameplate system. This is work in progress and can be disabled in the player settings
- Speech bubble are now implemented using the new nameplate system, some player settings have been changed to reflect this change.

`1.2.5`
- Adding a button on the bottom left of the screen when the chat is hidden by a fullscreen UI like the inventory or !Custom panel for example. Clicking this button will force display the chat Window so you can chat while designing to character. It also has a notification icon.

`1.2.8`
- A setting to leave the chat open after sending a message rather than closing it.

## Changes/Improvements

`1.2.0`
- Improving link system to better support Admin puppets
- Code for reopening channels on login has been improved

`1.2.2`
- Nameplate looks and fade has been tweaked to be more discreet
- Age of Sorcery Chapter 3 - Patch Compatibility

`1.2.3`
- Background color of mentions is now based on the color of the mention text

`1.2.4`
- Reworked the mouse catching logic of the chat when clicking outside of the window
- More compatibility with Hosav UI

`1.2.8`
- Removed the refocus of the chat input field as it was causing issues and conflicts
- Implementing the new tips and help layout
- Chat can now open on top of more fullscreen windows (like sudo)

## Fixes

`1.2.1`
- Nameplate was causing wider collisions

`1.2.3`
- Preview text for color formating was broken

`1.2.4b`
- Using tab was sometimes opening the inventory for a second

`1.2.6`
- When using the new corner button, clicking outside the chat was not closing it

`1.2.7`
- Prevent the escape menu from being opened when in fullscreen popup

`1.2.8`
- Fullscreen windows became non responsive after using the chat on top
- Last posted message log would wipe the current message being typed after closing and reopening the chat

`1.2.9`
- Fixed various window management issues