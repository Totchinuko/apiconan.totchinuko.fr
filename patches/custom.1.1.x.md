# Tot ! Custom 1.1.x (Beta)

## API
`1.1.0`
- New API to access custom data on a compatible actor.
- Possibility to make a third party actor compatible with Custom
- New cross mod events to know when custom data is changing
- Extra API to improve the possibilities of attached actors

## Reset
`1.1.0`
- All currently equipped accessories will be unequipped
- Favorites will be reset, but your profiles will still exists.
- Past accessory export text will not be compatible with this version and up.

## New
`1.1.0`
- You can edit Thralls and mannequins using the full Custom Editor
- Improved UI for equipping armor set and accessory set so you know exactly what is equipped and what is not
- Equip/unequip a single accessory from a set when editing it.
- Filter field in the lists, to find whatever you are looking for
- Info panel that gives accessory details about the bone used, and the coordinates of the accessories. This is mostly for modding use.
- Iris size slider
- Sclera glow slider
- Hair shine and hair shine intensity sliders
- Religion selector
- Copy and paste accessories across different set
- Edit another player, even on the other side of the map.
- Unlockable item rule, allowing player to unlock transmog or accessories permanently by consuming an item that is equivalent.
- Weapon transmog, compatible with weapon attached as accessory.
- New head and hand slot for the Upper warpaint all packed into the Upper warpaint category now
- /customize in compatible chats to customize a fellow player.

`1.1.1`
- You can now reorder your favorite and various profile lists by drag and dropping elements
- The accessory icon on the first screen will now inform you if you have orphaned accessories equipped

`1.1.2`
- A link to an online page in construction is now located in the side menu of the Custom editor. For now their is just an introduction video to Custom.

`1.1.3`
- Added Quick Access menu to armor sets. This work just like for accessories, with the exception that right click instead of left click will unequip the piece to a naked transmog instead of removing the transmog.

`1.1.4`
- Command `/count accessories &lt;Minumum&gt;` to list players accessory count, along with its dedicated permission.

`1.1.5`
- New Slider: Feet width

## Changes and Improvements
`1.1.0`
- Improve search results in item selection to include tags like mod tags, type of object (Armor, Weapom, Accessory), grade... 
- Deactivating most of the mod logs that are not errors.
- Improve slightly how black hairs can get
- Created distinct body category for hairs and facial hairs
- Improved how accessories are recognized from each other and how they are updated
- Improved move tool scalling for better handling of small objects.
- Improved scale of accessories to be more linear. This should make it easier to reduce the size of accessories to a small size.
- Better icons for the action wheel

`1.1.1`
- Your act name will now only be applied when you exit the editor or edit the act of the currently active profile as opposed to every time you selected a new profile in the menu
- You will now be notified of your new Act name in the chat when a change of profile is done
- Improve how favorites are stored. You might see INVALID favorites pop around, you can safely remove them.

`1.1.2`
- Admin lists just got upgraded to use the new reorderable lists and some additional usability improvements.

`1.1.3`
- Item search can now more easily find disgarded duplicates.
- Item tooltip will now display every item names the object appearance is used on.
- When editing something other than yourself, your character will be set to invisible localy (but not for everyone else).
- Editor camera will now rotate verticaly and horizontaly with the left click, and pan verticaly and horizontaly with the right click.

`1.1.4`
- Activated the search bar in the dropdown menus on the body editor
- Improve information about accessories on the main menu
- Weapon transmog now use the combo type as comparison. It means that it should match weapons with the same combat pattern more reliably

`1.1.5`
- Improve compatibility with third party humans for the futur Tot ! Admin Puppets
- Accessory count in editor and count command should now display count for original accessory system as well.
- Moving item cache generation when first opening the editor instead of during the loading screen. This might help smooth out some loading issue people had.
- Spreading the item cache generation over more frames.

`1.1.6`
- Further optimization of the item cache generation
- Closing a profile editor after opening it from the favorites will get you back on the favorites instead of the main profile list


## Fixes
`1.1.0`
- After an AFK period, camera was back on the normal vanity camera even with the editor open
- Deleting a character profile was not saved and reverted after reboot of the game.
- Male character had white artifacts on their face warpaint.
- Missing scroll bars

`1.1.1`
- Unlocking items was not working right when more than one player was connected on the server.
- World coordinate was not working anymore.
- Fixed various issues with the naked shortcuts preventing them from working correctly.

`1.1.2`
- Thrall had rocknoise voices, again.
- Fixed reorderable list not working

`1.1.3`
- Missing scroll bar on new admin lists.
- Contextual Menus should now close when hitting escape, avoiding the risk of going back into the game with a menu left in the middle of your screen.
- Armor and weapon sets were still equipable despite containing a invalid item.

`1.1.4`
- Improve accessory visibility with weapon unequip animation
- Tryed to fix a funcom crash when changing armor/body appearance
- Fixes crash on start when not having a mod with the original accessory API

`1.1.5`
- Camera was acting up when using the editor while sitting in a chair
- Editing a body profile on a server with looser slider rules could bypass default slider values on a server with no slider rules
- Newly saved and equiped accessories would appear as orphaned as long as the editor was not closed then reopened

`1.1.6`
- Default favorit profile was not functionning properly


## Original Accessory System
`1.1.0`
- Support for Tot ! Custom skin and hair colors.
- Client crash when an accessory was equipped is fixed while using Custom.