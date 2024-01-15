# Tot ! Admin 0.6.x (Alpha)

## API
`0.6.7`
- Quest API
- Spawn API
- Navigation API
- Admin Tools API

## New
`0.6.0`
- Admin Wallpaper, a placeable image from a given URL with various parameters
- Admin/Player Decals, a placeable image that project on the target surface, like a painted picture.
- Sphere/Box Zone, a trigger detecting players entry and exit to fire some game logic
- Sphere interaction, a trigger reacting to the action button, displaying some text when aiming at it.
- Spawner and NPC Customization, Allow you to spawn NPC with various parameters (radius, orientation, rally point, roaming radius...). You can use vanilla NPC or customize the stats of one. 
- Point placeable, used as an NPC rally point or a patrol step by placing them in chains
- Quest system with admin quest creation and player quest log
- Quest Add/Remove Action Module
- Quest Giver Action Module
- Multi Action Module (OmniModule). Allow you to perform multiple small actions in one event.
- Scripted doors. Using the action on wheel on any door, you can transform a normal door into a scripted door.
- Admin Lights. Simple configurable lights that can receive script events.
- New visibility schedule for puppets
- Random Spawn chances for spawners, working just like kits

`0.6.1`
- New Rule: Has RPR Perk
- New Rule: Has RPR Skill/Stat Above/Under/Equal
- Invisible Walls that work like box zones
- Scripted chest to spawn kits in and trigger on opening
- /trigger command to trigger a tool at a distance
- New Multi Action: Add/Remove/Toggle Global tag
- New Multi Action: Toggle Char Tag
- Add fail mode to quest objectives
- Add Global mode to Tag Objectives
- New Objective Type: Number, tracking float vars either global or on characters
- Puppet now have a rule set for their own interaction
- Player kill count automatically stored in float char var and accessible in the player editor.
- New Multi Action: Add Var Float to increment/decrement char/global float variables
- New Rule: Char/Global Float Var for comparison
- Add Identiry Rule to check the identity of one or more players/clans

`0.6.2`
- A way to disable the character night lights
- Added Scripted Game Light

`0.6.4`
- Added the soundboard with most vanilla sounds in library. Some might not work, but since their is 2000+ of them, I'm not going to filter that.

`0.6.5`
- Add a start action module to quests

`0.6.7`
- New Rule: Has Quest in Category
- New Action: Inflict Damage

# Changes
`0.6.0`
- Improve lighting of portals as they scale
- Tool search filters is now session persistent
- Added the quest log and admin flags window to the sudo button list of the escape menu.
- Added Global mode for Cooldown, Counter and Has Tag rules.

`0.6.1`
- Rename rally point to point to avoid confusion
- More decimals on trader item tooltip for armor penetration
- NPC Search and Display row ID
- Toggle to add loot to a corpse rather than replacing
- Improved scripted door compatibility with game doors
- Improve complete quest button clarity
- Added Remaining cooldown for repeatable quests
- Deprecate Give Role, Give Tag, Give Kit, Warp To, Notify, Give Quests, Remove Quests
- Improved spawned emote list naming

`0.6.2`
- Display rule messages on interaction sphere

`0.6.5`
- Added a system name to puppets

`0.6.6`
- Improved Move tools handling

`0.6.7`
- Added the possibility to copy/paste rule sets.
- Added spiciness to updates, so potato can cry about it.

# Fixes
`0.6.0`
- Fixed PostProcess Vignette effect by adding a custom one
- Fixed PostProcess FilmGrain effect by adding a custom one
- Fixed Pets not being able to be sold at a trader.

`0.6.1`
- Sphere Interaction Not Saving Rules on Server Restart
- No building in admin map
- Puppet name is still visible after reload of the server using visibility schedule
- Typo in quest editor: Categories are in "General Settings", not "Server Settings".
- Fixed Multi Action Talk sending message in current channel rather than local
- Fix Give Quest Action checking for replayability of a quest while enforce rules is off
- Objective location were always showing the location of the first objective

`0.6.2`
- Fix identity rule missing a forbidden field
- Typo in some rule "requiered"
- Radial menu for scripted chest indicated scripted doors
- Invisible walls is not appearing in the tool master list
- Rename invisible wall window
- Remove events from invisible wall
- Add a gateway to the warp code, and avoid a stack overflow
- Completed quest in log display abandon button
- Enforce warp rules on action trigger seems to be stuck by the "Allow using command" checkbox when off

`0.6.4`
- Custom Spawned NPC did not use their custom name properly
- Interaction rules did not prevent their use
- Fix a typo in edit resource permission
- Selector item was not usable

`0.6.5`
- Interaction Sphere had no event to receive when triggering actions on them
- Fixed the interaction text staying on the screen after a warp

`0.6.6`
- Fixed puppet rules not applying
- Fixed scripted chests not editable on the tool master list
- Player name cache will now reset between each reboot
- `/link puppet` should now properly use the internal name rather than nameplate name
- `/trigger` should now properly find puppets with their internal name
- `/select` should now correctly select armor stands from !Custom