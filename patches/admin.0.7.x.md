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
`0.7.6`
- Scripting:
    - New node: Text to Character List
    - New node: Is Text Numeric
    - New node: Spawn kit in chest
    - New node: Clear Scripted Chest Content
    - New nodes: Save/Load variable/List - Will save globaly the content of a variable or list on the server drive, without restriction. This will survive a reboot.
    - New node: Delete saved Variable/List
- Added two commands /position and /lookat to report in chat your current camera location and look at location respectively
`0.7.7`
- New node: `Set Energy`, `Get Energy` (Mostly used for corruption management)
- You can now store a dice sheet on a puppet to swap when incarnating the puppet
- Your character will now remember what was the last puppet you incarnated before leaving the game
- You can now import/export the following elements: Quest, Quest categories, Kits, Custom NPC, Trader Definitions, Warps and Post Processes. Guid will be exported to maintain links between export elements.
- You can now create custom chat command using scripts. For that, open the newly added setting tab in a script, to specify a command name. Those commands do not have permissions, it is up to you to do the necessary checks at the beginning of the script.
- Added a new quest objective: Hunt Multiple. Allowing you to set multiple valid hunt target for a single objective.
`0.7.8`
- New Node: `For Loop`, `While Loop`
- New Nodes: `Insert into List`, `Set List Element`.
`0.7.12`
- New Secret Door/Hatch system. Craft the component, open the wheel on any compatible wall or ceiling piece, and use the Secret Door/Hatch menu element to consume the component and turn a piece of building into a door or hatch. A word of warning: This effectively destroy the original building piece, so you want to be sure about your building stability first. Those doors/hatches work like regular ones regarding RPR keys and scripted doors.
`0.7.13`
- New Nodes: `Return Script` and `Break` to respectively return to a parent script and break the current loop from going any further
- Added a button to the player editor page to edit the player quests
- New Nodes: `Get Quest Title`, `Get Kit Name`, `Get Warp Name`
- New Node: `Archive Dialogues`, clean the current dialogue window and archive the dialogues that were displayed.
- Adding the `One Stack` settings on items of a trader definition, forcing items to only generate one stack, regardless of their max stack size. When bought, those items will be unstacked in the player inventory.
`0.7.14`
- New Nodes: `Remove All Quest`, `Is Any Quest in Cooldown`, `Try Validate Any Quest`, `Has Any Quest`. These improve management of a quest list, and make procedural quest selection less of a pain. 
- New Node: `Get Quest Objective Text` to get the text of one the quest objectives.
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
`0.7.6`
- You can now shift click on an item stack in the trader UI to move the entire stack to the trading area
- Remove UTC to Local conversion for date/time fields. Now the field will display the current server UTC time for you to make the conversion, when UTC time is expected.
- Added alpha channel to color variables
`0.7.7`
- Added thrall trigger filter on sphere and box zones
- Added a head tracking toggle for puppet conversation nodes
- Display the original name of a node in the node inspector
`0.7.8`
- Increased the duration for paused script to get automaticly scrapted for inactivity from 5 minutes to an hour.
`0.7.9`
- Increase the stack size of Radishes. I'd rather have more radishes.
`0.7.10`
- Internal changes
`0.7.12`
- Increased the trader definition capacity for items from 60 to 100.
`0.7.13`
- Shift clicking item in the cheat panel now give the full stack of the item, just like the vanilla cheat panel
- Improved the item spawn of the cheat panel to create multiple items if the requested stack size goes beyond the item maximum stack size
- Renamed Exit Script to Kill Script
- Improved quest log tab look to be less confusing
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
`0.7.5`
- Reverting an auto save feature for the action modules, suspected to introduce saving issues
- Patrol Point emote was continuing after leaving the point, sometimes as the NPC traveled
- Patrol Point radius was applying for the next point instead of the current point
- Editing a portal with the option hide with time restriction enabled was making the portal visible for yourself until reload
- One type of sand rock in the resource spawner had no character collisions. I hate sand.
- Improved how kill detection is made for the quest system to avoid a bug related to fatalities
- Scripting:
    - Add item node with no item or a non existing item was freezing the server
    - It was possible to remove a negative amount of item, doing so would add items. Minimum will now be 0, and do nothing in this case.
    - `Sudo Log` node will now remove breaking lines from its text before saving, to avoid formating issues in the log panel

`0.7.6`
- Renamed a bunch of buttons to be more concistend with naming
- Trader definition price multiplier were not working properly
- Pricing multiplier will now ceil resulting prices instead of rounding, avoiding small prices (1) to be 0 when the multiplier is inferior ot 0.5.
- Duration field was using number grouping format, making it impossible to select values beyond 999.
- Admin event Global Tag had the On Added/On Removed toggle inverted
- Improved positioning of node right click menu

`0.7.7`
- Improved interaction text to not be right in the middle of the screen
- Improved variable list reliability and performance
- Puppet languages were not duplicated when using a move tool duplication function
- Space where getting trimmed in texts fields when it should not
- Get clan players did not return a list player as it should

`0.7.8`
- Script import was not functioning properly
- Fixed various typos
- Improved trader shift click to move stack to not prevent drag and droping with shift down.
- Thrall Trigger toggle was displayed off when opening the box/sphere zone editor
- Improved /cheat creative command deactivation
- Added a safety to Box/Sphere zone to delay their action on freshly logged in players, avoiding a server crash in some cases.
- Trader NPC will now drop or give back the item in storage when its dismantled or picked up respectively.
`0.7.10`
- It was previously possible to edit a script without the script edition permission
`0.7.12`
- Pasting a ruleset into a script parameter was not saved properly
`0.7.13`
- OnValidate Events did not import properly for quests
- Warp created using `/warp create <warp name>` were corrupted
- Completed quests could not be abandoned
- Quest objectives sometimes did not work after editing the type of objective, even after a server restart.
- Player were able to turn walls and ceilings into secret passages on construction they didn't own
- Improve secret doors/hatch stability