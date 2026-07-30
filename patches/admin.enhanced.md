# Tot ! Admin Enhanced

## 0.9.0 alpha
- Deprecating Chat V1 Scripting nodes and related fields
- Added new Chat V2 Scripting nodes and related fields
- Added support of Regions to the admin map
- Players can now display their quests objectives on their map, providing they have a location
- Converted all the commands to Chat V2 Commands
- Replaced the Map Marker nodes with a V2 variant, that instead take a Guid for identifier, removing the need to get the returning marker id and having to store it. They also come with a number of new parameters.
- Deprecating Client Environment nodes relative to sky color
- Added a new Client Environment node that is compatible with new Environment overrides
- Added a new Moon Texture node that change the texture for the client
- Improved the Admin markers to offer new possibilities, such as color, ordering, radius.
- Removed pre-colored markers, as now the marker system can apply a chosen color.
- Added Burst Mode node, effectively making following nodes run on the same frame until the end of the script or the mode is toggled off.

## 0.9.3
- Made a few changes to Admin Tool Lights:
  - Light B has been removed from the item table, the normal light can do everything the B one could. Old Light B should still be around your server until removed, but they should behave like the normal one.
  - Added Inverse Squared Falloff parameter, which is a more realistic light falloff. This used to be the difference with Light B, but with UE5, I can now change the setting on the light at run time.
  - Added an Inverse Exposure Blend slider, to control how the overall image exposure affect the light.
  - Added Live Edit capacity, changing the light as you edit values, so you can preview how it will look like once you save.
- Added back the Multi-Action Modules
- Fixed Admin Markers removal
- Fixed text wrap of warp UI error message
- Fixed GetCommandData crashing scripts
- Fixed Puppet/NPC emotes not playing
- Fixed scripted chest wrong password event
- Fixed Warp HUB map and added region selector

## 0.9.7
- Fixed a corrupted AI behavior tree for spawned NPC, that could have resulted in many issues. (It's unclear what this might fix, as this corruption straight up crashed my modkit, while the live game didn't seem to care)

## 0.9.15
- Modified the way player names are displayed in the Admin map. Instead of a being a simple hover, the system now list the players present in a radius around the cursor, preventing icons from occluding each other.
- Fixed scripted chests that couldn't be looted when Storage ignore ownership was disabled.
- Fixed several issues with treasure carry nodes
- Fixed home listing formatting
- Fixed spawner not spawning anything on server start
- Fixed the heatmap sometimes not displaying counts of things.
- Fixed formatting issues in quest objectives
- Fixed more instances of log spamming
- Fixed weather settings in the cheat panel. There are still some transition issues, but I don't control these, and the bug is also present with the vanilla admin panel.
- Fixed more text clipping issues