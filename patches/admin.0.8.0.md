# Tot ! Admin 0.8.x (Alpha)

## New
`0.8.0`
- Added a button in the `Player Editor` to reset the Tot!Custom Unlocked Items of a character
- Spawners now have a new event that trigger with player context for each player that killed or assisted in killing an NPC of that spawner.
- You can now set a script to pre-run up to 200 nodes. When starting a new script (Not as a subscript), you can tell the server to pre-run a certain amount of nodes before placing the script into the normal execution queue. This will make the scripts more reactive when needed. Setting is located in the Settings tab of the script editor.
- Quest definition now have a new optional cooldown mode: Recuring. Instead of setting up a cooldown from the moment the quest is validated for the player, the cooldown will be relative to a cycle. You can then make a daily quest that reset every day at 6 in the morning for example, for everyone, instead of having a 24h cooldown from the moment the player has finished the quest.
- Added 58 new nodes:
    - `Reset Unlocked Items` to reset the Tot!Custom Unlocked Items of a character
    - New `SRandom nodes` that allow to make use of Pseudo-Random number generators based on seeds.
    - `Get Door State` to get a scripted door state and `Set Door State` to set a scripted door state (Open or closed)
    - Carryable treasure oriented nodes: Spawn/Despawn carryable treasure, detect a carried treasure, etc... It comes with non spawnable treasure variant for your quest needs.
    - Clear corpse in zones and sphere
    - Decoration Concealer. Use the selector to select decoration and bind them to the concealer that then can be used to make the decoration disapear.
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
## Changed
`0.8.0`
- Display the chances to get an item from a kit in the kit editor. Specially useful for lootbox kits
- Improved the node filter field
- Node `Has Any Quest` was improved to return the list of quest found
## Fixed
`0.8.0`
- Integrated map sometimes were stuck on transition animations
- Node field were loosing keyboard focus shortly after creating the node
- Lines starting from the second output plug and up were not aligned properly
- In some rare cases, the player editor was not able to display the selected character informations, specifically after character creation.