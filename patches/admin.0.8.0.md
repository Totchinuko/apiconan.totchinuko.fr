# Tot ! Admin 0.8.x (Alpha)

## New
`0.8.0`
- Added a button in the `Player Editor` to reset the Tot!Custom Unlocked Items of a character
- Spawners now have a new event that trigger with player context for each player that killed or assisted in killing an NPC of that spawner.
- You can now set a script to pre-run up to 200 nodes. When starting a new script (Not as a subscript), you can tell the server to pre-run a certain amount of nodes before placing the script into the normal execution queue. This will make the scripts more reactive when needed. Setting is located in the Settings tab of the script editor.
- Quest definition now have a new optional cooldown mode: Recuring. Instead of setting up a cooldown from the moment the quest is validated for the player, the cooldown will be relative to a cycle. You can then make a daily quest that reset every day at 6 in the morning for example, for everyone, instead of having a 24h cooldown from the moment the player has finished the quest.
- New rule to filter people carrying a treasure.
- Adding new Admin Events: 
    - Death Prevented. It is triggered instead of the character death, if death prevention was activated through scripting. This **Require** to have Tot ! Module Death in order to work.
    - RPR Sheet Refresh. Triggered when a change in the player dice sheet occur.
- +400 icons for quest categories, from RPR
- Admin Tools:
    - Decoration Concealer: Use the selector to select decoration and bind them to the concealer that then can be used to make the decoration disapear.
    - Script Container: A simply tool that hold a script that can be called by events. Specially useful with parameters.
- Added ~77 new nodes:
    - `Reset Unlocked Items` to reset the Tot!Custom Unlocked Items of a character
    - New `SRandom nodes` that allow to make use of Pseudo-Random number generators based on seeds.
    - `Get Door State` to get a scripted door state and `Set Door State` to set a scripted door state (Open or closed)
    - Carryable treasure oriented nodes: Spawn/Despawn carryable treasure, detect a carried treasure, etc... It comes with non spawnable treasure variant for your quest needs.
    - Clear corpse in zones and sphere
    - `Get Spawn Event Data` and `Get Command Data` to get added data from starting a script respectively from a Player Spawn admin event and from a chat command.
    - `List all Clans`, `Search Clans`, `Search Players`
    - `Screen Shake`
    - `Has Any Quest With Status` search for a quests withing a list and return the ones found.
    - `Toggle Lights in Sphere` to toggle on or off all normal game lights in a radius, as well as crafting stations with lights. This does not affect Admin tools.
    - Additional nodes have been added to read a quest objectives. This allow for example to know what enemy of a hunt objective is expect and in what quantity, allowing to make script that automatically adapt for the content of a quest.
    - Added ~20 nodes to retrieve the list of NPC of a spawner and individually influence them. From stat edition, to AI orders.
    - New universal `Equal` and `List Equal` nodes, replacing a few other dedicated equal nodes. The old ones have not been deleted, but they are now hidden away.
    - Node to reset the character's feat/knowledge
    - Node to reset the character's attributes
    - Node to reset Roleplay Redux Dice Sheet
    - Nodes to manage game map markers
    - Nodes to create Tot!Hud gages and update them through scripts
    - Nodes to handle climb blockers
    - A node to toggle a death prevention system. This **Require** to have Tot ! Module Death in order to work.
    - A node to get the Steam ID of a player
    - A node to send webhook request to a router server
    - Two nodes to send people back at their home or bed/bedroll
    - New nodes to track down a character change of state
    
## Changed
`0.8.0`
- Display the chances to get an item from a kit in the kit editor. Specially useful for lootbox kits
- Improved the node filter field
- Node `Has Any Quest` was improved to return the list of quest found
- Staff list is now based on the role selected in server settings.
- Added manual max value for Box and Sphere Zones sizes 10 times superior to max slider.

## Fixed
`0.8.0`
- Integrated map sometimes were stuck on transition animations
- Node field were loosing keyboard focus shortly after creating the node
- Lines starting from the second output plug and up were not aligned properly
- In some rare cases, the player editor was not able to display the selected character informations, specifically after character creation.
- Fix parameters for `Try Fire Event` not restoring properly
- Send message node was preventing the script from continuing after posting in clan channel