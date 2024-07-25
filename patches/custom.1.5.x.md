# Tot ! Custom 1.5.x
## New
`1.5.0`
- Icon Preview - Custom now benefit from an Icon Generator system, generating preview for various body parameters such as haircut, warpaint, etc.. And is also used for various new features.
- Presets - A new Preset tab has been added to favorites, allowing you save various aspect of your current character, to quickly reaply it later. It can be a simple outfit or a complete character.
- Unlocking overall - When item unlocking is active on the server, a new Unlock panel has been added to the base screen of custom, instead of going in the item list to unlock items.
- Tag Search - In the item selection window, you can now filter items by tags.
- Hairs/Beards as accessories - You can now equip additional haircuts or beards using the accessory system and overlap them
- Accessory Soft Cap - A soft limit has been to the item rules section, regarding max accessory count. The limit is a soft one, as it only happen when the panel is closed. Activating the item ignore rule admin flag allow you to ignore the limitation.
- A new slider allowing to decrease/increase facial details

`1.5.1`
- Adding new hiding flags for accessories: While beard is hidden and While hairs are hidden

`1.5.4`
- New content
    - 37 new Warpaint Set
    - 5 new Eyebrows
    - 19 new Beardlines
    - 2 new Body hairs for males
    - 3 new Complexions
    - 4 new Hairlines
    - 5 new scars

`1.5.10`
> Everyone knows that the blood of your enemies makes the BEST foundation. Try Tot !Skin Care today to smooth away those awful lines.   
> <small>Not guaranteed to work on corruption. if burning, itching, or impalement occurs please contact your witch doctor immediately</small>

- New Tot ! Skin Care. Remove your wrinkles in 3 key area: Forehead, eyes, mouth.
- Adding a new item rule, Force Ban to ban everything using the global rules.
- New item selector for body items, armor, accessories, and weapons. Not all mods are present as it is up to the modders to add their mod using the API or ask me to add it for them.
- Added the customize button to the sudo button list of the escape menu.

`1.5.16`
- Added compatibility with !Admin new Move Duplicate feature for puppet duplication

`1.5.18`
- Integration of Sudo Backup system

## Changes/Improvements
`1.5.0`
- The beard configured in the body section is now added to the character using an internal accessory from Custom, instead of using Funcom internal beard management. This avoid issues with modded heads not working well with beards. Keep in mind that modded heads are not necessarly well suited for the beards and clipping may occure. Additionally, the beard section now allow to choose a variation, to find one that fit best the current face.
- Body data has been modified to consume less memory and be easier to replicate on the network. A script has been made to upgrade your character and your saved profiles up to the new format. The script will also make a backup of your saved bodies in case the update would fail for whatever reason. Finally, old exported bodies will still be compatible to reimport, but newly exported skins will use the new format.
- Hide accessories when using the invisibility spell
- Ignore item rules is now an admin flag with a shortcut button on the main screen of Custom panel
- Increasing the zoom distance while in custom panel
- Deincarnating a puppet to be invisible or incarnating another now update the puppet with your current skin for consistency
- Copying a skin now display a selection of parts to copy, so you can copy just the armor for example

`1.5.1`
- Removing haircuts and beard from the accessory list. Instead when adding an accessory, you'll be presented with a choice to add an item or other kind of accessories.

`1.5.3`
- Improved DLC validation so you don't need to purchace legacy warpaint feats to use them. You still need to purchase the DLC.

`1.5.4`
- Custom is now compatible with vanilla armor illusions and dyes.

`1.5.8`
- Locked profile now display the reason (Missing Item, Missing paid DLC, Server rules)
- Presets with missing or forbiden items can now be partialy applied (without the missing or forbidden stuff)
- Presets can now be updated using the current character design
- **Removing Mod Compatibility**: As per my agreement with Funcom, I'm removing the compatibility layer with two mods:
    - RA: Character Customisation
    - Aquilonian Passion Body

`1.5.11`
- Added a toggle to prevent the generation of preset thumbnails
- Added a button to randomize the identity of accessories. This can be useful after duplicating an accessory profile, so custom does not concider them identical.
- When changing the bone of an accessory, the accessory will remain in its position
- Added an accessory menu button to snap back on the bone origin.

`1.5.13`
- Added a close button to the panel main menu
- Added new creator filters
- Updated some warpaints from Edrein

`1.5.14`
- Custom will now deactivate automatically the vanilla sheathed weapons to avoid confusion and weapon transmog not working. This behavior can be deactivated in the player panel.
- You can now use right click to display the quick access menu when possible.
- Opening the panel will not unequip the weapon anymore.

## Bug Fixes
`1.5.0`
- Lock the breast and butt physics to the original default min/max slider values, and remove their customization. This was know to provock serious issues if values outside of their boudarie were used.
- It was possible to use DLC Warpaints when the user did not own them
- It was possible to equip locked items in some situations
- More polish on the flag chest
- Unlocking an item should now properly refresh preset lock status
- Male Mannequin and male armor stand had pubes... ...
- Some movable items had missing textures
- Adding item range in item rules was not working for armor pieces and weapons
- While no weapon is equipped hiding rule was not working properly
- Equipping an armor piece sharing the same ID as your transmog in the same slot would break transmog colors
- Mouse was replaced with a skin shader displaying warpaint and hair scalp on teeth

`1.5.1`
- Beard was visible in FPS mode and using covering helmets
- Saddles were missing from the item list
- Improving icon lighting at night
- Improving icon framing for tall and short characters
- Some files were missing from the archive, preveting some widgets from opening

`1.5.2`
- It was possible to paste a skin containing DLC items not owned by the player
- It was possible to apply a body skin containing DLC elements not owned by thte player
- It was possible to apply a mannequin armor containing DLC items not owned by the player
- Disabled DLC item use while editing a distant player with /customize command to avoid exploits
- It was possible to use beards/hairs/heads from DLC you did not own
- Hair/Beard accessories were not properly saved in presets, copy/pasted, or transfered using Amunet Server Transfer

`1.5.3`
- Heads from AOC were missing without the proper feat
- It was previously possible to still apply a body preset by editing it

`1.5.4`
- Basic NPC has inconcistencies with the handling of their beards
- New made skins did not set hairs properly

`1.5.6`
- Preview icons where invisible
- Preview icons where fogged and or over exposed
- Some body textures had issues when equipping accessories using the original accessory system
- The game would be disconnected from the server when leaving the Custom panel when too many presets are stored
- Copying part of a character did not reset properly the data from a previous copy

`1.5.7`
- Some Makeups did not appear in the list in some modlists

`1.5.8`
- Installing the mod or placing new thrall was reseting their vanilla body
- Duplicating the flat chest to a different item ID and avoid a game bug

`1.5.9`
- Color status for accessories used the wrong color, showing red when the item was valid
- Fixing item rules panel not working properly

`1.5.10`
- The weather simulation is now frozen while editing a character, to avoid the rain bug.

`1.5.11`
- In rare cases, accessories would trigger an endless cycle of refresh on Custom panel, leading to intense slow downs and eventualy to a crash

`1.5.13`
- Moved reset position of accessories button higher in the menu

`1.5.14`
- Fixed accessories position presets not functionning
- Fixed the incorrect Juvilia's Crabby Accessories item range filter

`1.5.15`
- `/select` from !Admin should now correctle select armor stands
- Shoulder translation was influenced by pelvis sliders

`1.5.17`
- Fixed hair/beard accessories replacing other accessories or the list when adding them
- Attempt at fixing wrong visible accessories on thrall when using DD emote system

`1.5.18`
- Fixed a potential exploit allowing to equip more accessories than the server allow