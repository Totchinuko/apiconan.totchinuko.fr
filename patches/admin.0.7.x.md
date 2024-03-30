# Tot ! Admin 0.7.x (Alpha)

## New
`0.7.0`
- Scripting System with more than 200 different nodes
- Scripting Events, trigger script for a specific date, player login, etc...
- Scripting dashboard, to display the script currently running and the ones that ran for a while
- Added a setting to resource spawners to ignore player buildings
- Added a setting to resource spawners to ignore server multiplier with kits
- Spawned NPC can now be made invulnerable
- Added a Near Me filter to display Admin Tools in a 100m radius around the player.
## Changes
`0.7.0`
- Reworked the price definition widget for trading
- Added the possibility to prevent a trader from selling a particular good
- Added a new Killed event on the spawner, reacting for every NPC kill attached to that spawner.
- Spawned NPC will now go back much closer to their idling location
- Armors in kit for customized NPC will now be a simple skin and not actual armor. This is to allow NPC to wear DLC armors.
- Armors for customized NPC can now be dyed.
- Loot objectives will now only consume items uppon quest validation instead of immediatly. Loosing the items will uncomplete the quest and prevent validation.
## Fixes
`0.7.0`
- Fixed the rule Is Math Not Zero using the old formula editor
- Fixed resource spawner giving too much resources with kits if the server multiplier was more than one.
- Fixed event order spawn on spawner that was waiting for the respawn time before spawning