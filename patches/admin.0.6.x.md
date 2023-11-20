# Tot ! Admin 0.6.x (Alpha)

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
- Has RPR Perk Rule
- Has RPR Skill/Stat Above/Under/Equal Rule

# Improvements
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

# Fixes
`0.6.0`
- Fixed PostProcess Vignette effect by adding a custom one
- Fixed PostProcess FilmGrain effect by adding a custom one
- Fixed Pets not being able to be sold at a trader.

`0.6.1`
- Sphere Interaction Not Saving Rules on Server Restart
- No building in admin map