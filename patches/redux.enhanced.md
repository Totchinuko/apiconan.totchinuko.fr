# Tot ! Enhanced Roleplay Redux


## 2.2.16
- Added some bugs to fix later
- Dice system should be mostly unchanged
- Chat was removed (RPR now require Tot!Chat)
- Gear system was removed
- Emote tab was removed (Emotes will be added to !Custom)
- Megascope was removed (Will be added back as a ChatV2 feature)
- Chat Ranges in the admin settings have been modified to handle Chat V2 ranges. You'll likely have to reconfigure them if you're importing from Legacy.
- Door pounding is not using the Farthest range in the chat settings.
- Waypoint IDs have changed to GUIDs to simplify the code with the map, therefore town portal ID will need to be reconfigured.
- Added a setting to output dice related messages to a dedicated dice channel

## 2.2.22
- Added a new effect to abilities allowing to run a Tot!Admin script, along with passing caster/targets to the script and other parameter configuration.
- Fixed various issues that would prevent the dice system to load, notably when creating a new one.
- Fixed a line break issue that would creep in many fields when importing dice configs, along other issues
- Fixed Edit Bio & Consent button opening an invisible window
- Fixed various placeable nameplates displaying "Waiting for Data" instead of the item name
- Fixed Abilities number of targets slider not allowing any
- Removed a forgotten debug log that would spam the client logs
- Fixed Map Overlay sizing and improve it's zoom scaling

## 2.2.27
- Fixed map overlay toggle hiding the wrong image.
- Improved waypoint map UI
- Fixed consent sheet display not showing up
- Fixed more break line issue around consent sheets. You may have to remake them as a result.