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