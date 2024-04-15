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
`0.7.1`
- Scripting: 
    - Dialogue answers are now number from 1 to 10 and can be triggered using the keyboard key from 1 to 0. Further lines won't have numbers
    - Arrow can now be used to move selected nodes
    - Ctrl + W can be used to duplicate selected nodes
    - Added a server start admin event
    - New clan nodes: `Get Player Clan`, `Set Player Clan`, `Get Clan Name`, `Get Clan Players`, `Clan Equals`
    - Nodes can now be copy/pasted between scripts
`0.7.2`
- Scripting:
    - New Nodes in Redux Tools: `Has Perk Category`
    - New Nodes in operations: `Bit Flag Add`, `Bit Flag Remove`, `Bit Flag Toggle`, `Has Bit Flag`
    - Added a duplicate button to make new copies of a script with a different ID
`0.7.3`
- Scripting:
    - New Node: `Has Completed Quest Objective`
    - Added a category system: Add the category name in your script name by using a pipe as separator (Example: Category|My Script Name). Also increased max script name length from 32 to 128.
    - Using a URL in the text of a `Send Dialogue` node allow you to display an image
## Changes
`0.7.0`
- Reworked the price definition widget for trading
- Added the possibility to prevent a trader from selling a particular good
- Added a new Killed event on the spawner, reacting for every NPC kill attached to that spawner.
- Spawned NPC will now go back much closer to their idling location
- Armors in kit for customized NPC will now be a simple skin and not actual armor. This is to allow NPC to wear DLC armors.
- Armors for customized NPC can now be dyed.
- Loot objectives will now only consume items uppon quest validation instead of immediatly. Loosing the items will uncomplete the quest and prevent validation.
`0.7.1`
- Improved initial placement of Interaction sphere and points
- Points are now slightly smaller
- Scripting:
    - `Camera Cut To`, `Add Camera Pan` now point in the same direction of the tool selected for position, if no "loo at" is provided.
    - You can now reorder the variable order
    - `Send Dialogue` now have its default thinking time set to 0
    - Inventory nodes now default to the character context if a player inventory is left empty
    - Disconnecting plugs is now done with Shift + Right Click
    - Import/Export is now outside of a script edition. Exported script are exported with their Guid, so that importing multiple script that depend on each other will keep the link between them.
    - Math formula now accept variables between brackets (${variable}) or without, to solve issues when using and/or/xor operators
    - Renamed player login admin event to player spawn as it is triggered every time a player spawn
    - Node `Start Camera Pan` now have a `Skip` output plug for when the user skip a cinematic
`0.7.2`
- Added a toggle on scripted door to prevent their manual operation (Open and close by hand)
- Added `On Interact` scripted door event emiter
- Scripting:
    - Node `Warp To Position` now have a Snap to Ground parameter to force or not the character on the ground at arrival, and remove the failed output plug that was never used
    - Improved plug vertical size to precisely take one grid row, making node align perfectly on the grid
    - Improved initial placement of created nodes using a droped plug so the linked plug is aligned with the drop position
    - Added control for the character limit of the request input node
    - Log Sudo now take a text value, but will be truncated at 100 characters max.
    - Renamed Visual Clues into Staff Vision:tm:
    - Improved some admin tools to only be interactable when the Staff Vision is active
## Fixes
`0.7.0`
- Fixed the rule Is Math Not Zero using the old formula editor
- Fixed resource spawner giving too much resources with kits if the server multiplier was more than one.
- Fixed event order spawn on spawner that was waiting for the respawn time before spawning
`0.7.1`
- Scripting:
    - Sudo var nodes were missing a failed plug for when the variable do not exists
    - Button for creating a variable from a node was non functional
    - Node snapping is now always on, more granular and should be slightly more reliable
    - Deleting nodes could sometimes leave ghost lines leading to nowhere
    - Right click menu in the background was not properly positioned on the mouse depending on screen resolutions
    - Starting/Ending a sub/new script with a list as parameter/return would lead to an internal error
    - Dialogue windows was not set to block game inputs in the background
    - Grey node fields (Wildcard) should no longer allowing to create broken variables
    - Game UI were opening in the background when editing a script
    - Send Message nodes were not inserting variables in the text as they should
    - `Play Short Emote` would skip concecutive emotes played to close from each other
    - Math formula editor will not detect and use variables default value from scripts
    - Fixed Formula variables not supporting variable with space
    - `Character is Online` was not functioning properly
    - `Get Time` was not functioning properly
`0.7.2`
- Scripting:
    - Those nodes did not function: `Has RR Key`, `Has Quest Category`
    - Chained dialogue could sometime replace each other if send in a chain
    - Export Serializer was eating up return lines and pipe characters uppon deserialization. Old script export will stiff suffer from this fate and have to be re exported if your script contain a new line or a pipe (|)
    - Moving nodes with arrow keys should now work properly
    - Selecting nodes with a box selection after moving the nodes with arrow keys should now behave as expected.
    - Spawner spawn event was not working with a spawn delay of 0 second.
    - Desync error was reported when pressing delete while no node were selected
    - New nodes where not aligned properly to the grid uppon creation
    - Node created using the right click menu where not selected automaticly uppon creation.
    - Sudo Log was not functionning
    - Text variable insertion preview was not taking into account the edited script variables. This does not execute your script, and will only display default values
`0.7.3`
- Scripting:
    - Variable assigned to returned lists would be cleared when selecting back a node
    - Returned list allowed to add elements to the list when it does not make sense
    - Fix Math and Text variable not accepting variable of 1 character
    - RMB menu was not positioned right in certain windowed modes
    - Date comparison `Under` did not work properly 
    - `Is Quest in Cooldown` was inverted
    - `Manual Spawn` only ever spawned one NPC
    - Export window close button was non functional
    - `Fire Many Event` and `Try Fire Event` were not working on Scripted Doors, Chests and Game Lights
    - Fixed Asura's Glory and Midnight Flower not harvestable in resource spawner
`0.7.4`
- Scripting:
    - Subsequent call to `Set Camera for conversation` were broken
    - `Set Player Clan` was not working