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

`0.6.8`
- Added spiciness to updates, so potato can cry about it.
- Added `Shift + Left Click` on the Move Tool to place a copy of the current object. This is only compatible with admin tools, or any mods that would implement the API for it.
- Action: New actions based on math expression to apply the result to a wide range of variables.
- Rule: New rule based on math expression where the result is tested.
- Added a toggle to hide the nameplate of puppets
- Added Radishes
- Admin Tool: Resource Spawn. Add optimized fields of harvestable resources.

`0.6.9`
- Rule: Has Buff Category
- Rule: Has Chat Language
- Action: Give RR Buff
- Action: Remvove RR Buff Category
- Rule: Has Knowledge
- Action: Learn Knowledge
- Action: Forget Knowledge
- Added an admin clan panel to display every existing clan, their members and construction counts.
- Cheat Command: /cheat creative - Fake creative mode, toggle god, cloak, all recipes and no cost cheat.
- Cheat Command: /cheat nostamina - Toggle the no stamina cost cheat
- Cheat Command: /cheat nostability - Toggle the cheat to build without stability
- Cheat Command: /cheat allrecipes - Allow access to all recipes
- New Cheat Panel
    - Accessible in the menu on the top right corner of the escape menu or in the sudo Admin Panel
    - Add accessibility to almost the same tools as the vanilla cheat panel, minus the admin mode requirement, replaced with sudo permissions
    - Took the opportunity to provide a less bugged freeze time that can resist to server reboot (optional)
    - Fixed the login weather bug by not fixing Funcom code. Yes, dark rituals were involved.

`0.6.10`
- Added new weather settings to configure weather chances and wind strength
- Added a new option to scripted chest to only check rules once every new kit spawn


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

`0.6.8`
- Improved some admin tool editing to be refresh live as you change some visual parameters.
- Added visual for Post Process Anchor radius
- Improved performance and reactivity for the puppet auto visibility feature
- Added a quantity multiplier to the kit spawn action

`0.6.9`
- Adding missing resources on the resource spawner
- Improved text variable for notify and talk to include a whole bag of variables, from stats to var chars, and many others...
- Improve math formula editor and text parsing editor
- Scripted chest will no longer clear their content when no kit is configured on them.
- ~Rework of the Feat Ban feature:~
    - ~This will not use the feat ban feature funcom anymore, instead it will manually prevent the teaching of the feat~
    - ~A notification will pop informing that the feat is banned~
    - ~Banned feat now appear in the knowledge panel~
    - ~Banned feat will be automatically unlearn at the next login of the player~
    - ~Banned feat can still be teached through the knowledge button in the player editor, events or the future scripting system~

`0.6.10`
- Walked back on the Feat ban system improvements in the previous patch. It will work like before, at the exception that the player editor will now be able to teach knowledge that are banned in the feat ban list.
- Improved feat selector filtering to filter by ID as well
- Improved the cheat panel item spawner filtering to filter by ID as well

`0.6.11`
- Changed max quest categories from 20 to 50
- Improve non climbable zone for invisible walls

`0.6.12`
- Changed !DeathCount automatic Char Var to CharDeathCount
- Changed !KillCount automatic Char Var to CharKillCount

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

`0.6.7`
- `/select` should now correctly select armor stands from !Custom
- Fixed an exploit to get infinit loot from customized NPC

`0.6.8`
- Quest editor would sometime fail to load the OnCompletion module
- Quest editor would not properly refresh the quest list in some cases

`0.6.9`
- Fixed event not firing on resource spawner
- Fixed basic NPC and Trader NPC interaction area (No need to look at their underwear anymore)
- Fixed Kit not spawning thralls

`0.6.10`
- Fixed talk action that had 0 max length in character
- Fixed text/math sometimes not recognizing float/string char var. 
- Fixed the Feat selector missing a scroll bar

`0.6.11`
- Fixed talk text field not saving its content
- Fixed quest duplication not copying the start module
- Fixed NPC not respawning after being captured

`0.6.12`
- Fixed Math Formula editor and text editor cropping their content at 32 characters.
- Fixed copy pasting action module in various scenarios
- Fixed the thrallify button not working
- Fix custom NPC size not applying to humans