# Tot ! Admin 0.8.x (Alpha)

## 0.8.0
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
    - Decoration Concealer: Use the selector to select decoration and bind them to the concealer that then can be used to make the decoration disappear.
    - Script Container: A simply tool that hold a script that can be called by events. Specially useful with parameters.
- Added ~77 new nodes:
    - `Reset Unlocked Items` to reset the Tot!Custom Unlocked Items of a character
    - New `SRandom nodes` that allow to make use of Pseudo-Random number generators based on seeds.
    - `Get Door State` to get a scripted door state and `Set Door State` to set a scripted door state (Open or closed)
    - Carriable treasure oriented nodes: Spawn/Despawn carriable treasure, detect a carried treasure, etc... It comes with non spawnable treasure variant for your quest needs.
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
- Display the chances to get an item from a kit in the kit editor. Specially useful for loot box kits
- Improved the node filter field
- Node `Has Any Quest` was improved to return the list of quest found
- Staff list is now based on the role selected in server settings.
- Added manual max value for Box and Sphere Zones sizes 10 times superior to max slider.
- Integrated map sometimes were stuck on transition animations
- Node field were loosing keyboard focus shortly after creating the node
- Lines starting from the second output plug and up were not aligned properly
- In some rare cases, the player editor was not able to display the selected character information, specifically after character creation.
- Fix parameters for `Try Fire Event` not restoring properly
- Send message node was preventing the script from continuing after posting in clan channel

## 0.8.1
- New Node: Run blind script
- Script Pre-Run value was not exported
- Script command values where not imported properly if the script already existed.
- Editing Script Pre-Run or command values did not update the script editor
- Reinforced default variable field in scripting to avoid some confusion in certain use cases (Notably the Equal node)
- Reworked how scripted door/chest/light collisions are handled, fixing cases where chests could not be interacted with.
- It was sometime possible to move things with the move tool that were not supposed to be moved.
- Variable that are a Parameter and a Return at the same time could not be assigned to both correctly in a sub script node.
- Math expression solving was improved:
    - Word detection is now more robust and the solver should not confused longer words for shorter ones. 
    - Expected parameter count for an operator or function is now more strictly regulated.

## 0.8.2
- New Node: Find Ambush Points. This node use an Environment Query System, the very same used by the Jhebbal Sag hunters events, to find points in a radius around the player that can reach the target, preferably in their backs. 
- Random Point in Circle nodes now have a minimum radius parameter
- Get Player Clan now also return the player current rank in the clan
- Creating variables from a parameter field were not auto-assigned properly after the creation
- Folded state of variables in the scripting editor was not saved properly
- Events in the Quest editor were not loading properly in various cases, entering in conflict with each others.

## 0.8.3
- New Nodes: 
    - Fire timer early. This trigger a timer before it reach its trigger date.
    - Is Spawned NPC at Destination. Check if an NPC has arrived to the latest destination it was given
    - Get Spawned NPC in various box and spheres
    - Get Actor Position. Replacing specific position request, this will work with players, admin tools, or spawned NPC.
    - Receive Message. To make personalized notifications to a specific player.
    - Convert generic admin tool to a specific tool and back.
    - Send local message or fake bubble from a Puppet
- Remove the delay for node filtering
- Improved Send Message to allow added tags (API stuff)
- New variable creation panel
- A script starting with pre-run nodes from a timer, considered the triggering timer to still be in effect.
- Concealed decoration could sometimes loose stability on server start
- Get Float Var truncate Boolean had not effect
- Various item lists were not applying the filter again after refreshing for any reason
- Enforcing rules on quest giver was not displaying errors properly
- Not enforcing rules on quest giver would still enforce the rules before accepting a quest

## 0.8.4
- Added a setting on resource spawner to disable the use of quick harvest perk
- New Node: `Find Actor Ambush Points`
- New Node: `Toggle Prevent Fly`
- Preventing flight while carrying a crate
- Node `Get Character Name` now also return the real name (Non act one)
- Node `Get Puppet Name` now have a failed output as it should have
- Decoration concealers were not revealing their bound decorations when dismantled
- Scripted chests did not received event calls like they should
- Nodes that format text or solve math expressions should now properly do it using the overridden player context
- Resource on client side resource spawners could desync in specific scenarios, making the resources invisible.
- Invisible wall was not interactable if its size was increased and it was disabled

## 0.8.5
- Added Item Stack Size Multiplier to the general settings of the server. (Experimental) (Best to reboot after any change)
- Added Inventory Size Multiplier to the general settings of the server. (Experimental) (Best to reboot after any change)
- Node `Get Date` now also return the local date along side UTC
- New Nodes:
    - Is Character in Own Land Claim
    - Set Unconscious
    - Is Unconscious
    - Get/Set Admin Tool Parameter. For now only Post Process Anchor, Portal And Lights are compatible, more will be added in the future.
- Node `Set Spawned NPC Behavior` was not working properly
- Duplicating a quest was not properly duplicating the failed event section
- Improved the conditions in which the `In Combat` rule triggers
- Improve default NPC speed spawned with spawners, specifically when they enter combat.

## 0.8.6
- New nodes:
    - Set Player Interaction - Attach a script to a player character that will be triggered by other players interaction.
    - Clear Player Interaction - Remove the interaction script attached to a player character.
    - Get Script Origin - Get the original actor that started the script. It can be a player, an admin tool or simply nothing usable (Return failed in the last case)
    - Set Event Action - Set the response of an Admin Tool Event Action for a script of your choosing.
- Added compatibility to Box Zone, Sphere Zone and Sphere Interaction for Get/Set Admin Tool Parameter nods
- Preventing the use of move tool on benches that have a thrall attached to it
- Fixed Thrall generating function (Cheat panel, trader) that broke with the last patch
- Rewriting how the trading window closes automatically, as it was crashing the server in specific scenarios.
- Cheat panel thrallify button was not functional on certain maps.
- Reinforced unconsciousness movement freeze

## 0.8.7
- Expose inventory multipliers to API `API`
- Add hard off switch for inventory multipliers `Improvement`
- Allow for less than 5 inventory slot with multiplier `Improvement`
- Rename the puppet tags to status `Improvement`
- Close admin panel on any warp `Improvement`
- No fly node should toggle off flying `Bug`
- Recurring Event typo, is named "Unique day Event" `Bug`

## 0.8.8
- Publication of the Scripting API `API`
- Node to rename act name or character name `Scripting system`
- Setting on send webhook to encode text with UTF16BE Hexadecimals `Scripting System`
- Node variant send webhook with simple text `Scripting system`
- Adding variable type conversion nodes `Scripting system`
- Many internal changes to polish the API `Scripting System`

## 0.8.10
- New debug data export on long running scripts to identify why they are stuck `Improvement`
- Scripting send webhook nodes now queue their requests to be sent one by one and avoid  some issues when two hooks were running at the same time. `Bug`
- Broken dynamic location and numerics parameters `Bug`
- Return node was corrupting the parent script state when calling a sub script `Bug`

## 0.8.11
- Added a grid size on warps; This will allow to spawn character around the point of warp randomly, while also rejecting points that would lead into a collision. This is useful for busy hubs.
- Fixed placeable on client rounding their scale to a single decimal
- Modified Text Join/Parse scripting node to not trim spaces
- Fixed some reference error on client side

## 0.8.12
- Shift+Insert will now open the vanilla or !Admin cheat panel based on your Admin status and permissions. If you have access to one and not the other, it will prefere that one. If you have access to both, you can choose in !Admin settings which one you wish to open with the input key.
- Added an .ini setting to DefaultEngine.ini to disable high precision scale on the move tool, in order to be more compatible with other scaling methods. You can find details in the tips section of the website.
- Fixed move tool teleporting the player if it was standing on the object that was being moved.
- Fixed quest not getting added to completed log in some cases when auto-validating was on
- Fixed cheat panel not spawning full stack of item when using shift click
- Fixed Admin map listing scripted admin tools such as scripted door when no owner was selected
- Fixed scripted admin tools being counted as the wrong type of tool in admin map

## 0.8.13
- Added nodes to control environment on clients: Day Sky colors, Night Sky colors, moon/sun color, Eclipse Mode, Client only frozen time.
- Added a copy/paste button to script list so you can edit their code directly. They also accept values where each line is a list entry.
- Added used points to Get Feat/Attribute Points nodes
- Added post login ban feature. Using the player editor you can ban any user at any time without a reboot, but the ban function by simply kicking the user on login and does not prevent initial login.
- Added Recipe panel to the player editor
- Added various nodes to handle player recipes
- Removed Player Wallpaper tooltip
- Changed all Admin Tools way to get into editing them for consistency. Every tool will now open its panel by using the action wheel, and using the red bottle pencil icon, including player version of wallpaper and decals
- Changed every Kick action from admin to be a server disconnect rather than a game shutdown
- Improved wallpaper collision to not have its thickness scale with its overall size
- Improved scripting node search with category filtering
- Improved script search such that when searching from default category, the search will be performed in all categories
- Fixed export/backup of scripts that could end up being corrupted. Previously exported script might be impossible to reimport after this update and will need to be exported again.
- Fixed scripting lists not displaying their weight properly

## 0.8.14
- Improved the search panel for kit, scripts, quests, etc... When selecting them in scripts. It will now allow partial search combination, broad search on the default category and allow the filter c:Category_Name to be used directly in the search for scripts. Long term, I plan to move other categories of !Admin data to work more like scripts do, but for now I'm just reinforcing the stuff that already exists.

## 0.8.24
- Fixed scripting main command taking priority over all their sub variants.
- Fixed scripted doors, chests, lights having their panel opening on other players screen when edited from the tool master list.

## 0.8.25
- Fixed removing someone from the banlist always removing the first in the least instead of the desired one.
- Fixed pp anchors hiding health bars.

## 0.8.30
- Rework the `/home` family of commands. `/home` now support extra homes on top of the main one. Admins can choose how many extra home players can have, with the default being 1.
  - `/sethome` has been removed to consolidate the group of commands
  - `/home set [name]` take an optional name to update/set a new extra home, or no name at all to set the main home.
  - `/home del <name>` delete one of your extra homes
  - `/home list` List all of your extra homes
  - Home rules apply to all of your homes as a whole. So if you have a cooldown set, it will be shared between all the players homes.
  - The `Clear Home` admin button delete the main home and all the extra homes of the targeted player.
  - If the maximum of extra home is lowered by an admin, and you have an excess of them, you won't be able to use your extra homes until you have removed that excess.
- Fixed sound library displaying the previous button when it should not

## 0.8.32
- Fixed `/home set` not actually checking warp rules for setting the home
- Fixed various places where the old /sethome was still mentioned
- Added a list of homes in the player editor panel, allowing to locate on a popup map the home, teleport to it or delete it.

## 0.8.39
- Improved recipe icons in the recipe editor of a player to better handle opaque icons
- Improved `Get User Input` node UI inputs. User field is now automatically keyboard focused, and the enter key automatically send the user input unless shift is pressed, adding a new line in that case.
- Fixed interaction sphere opening its panel on a different player when editing through the tool master list.
- Fixed `/cheat creative` inconsistencies regarding cloak

## 0.8.42
- Added two cross mod events on client side, when the player start/stop using the move tool.
- Fixed most situations when ghost mode would remain activated when loosing flight, cause the character to fall through the ground and beyond.

## 0.8.45
- Added RCon command `totpop <message>` to send a pop notification to all players connected
- Added RCon command `totscript <command> [subCommand] [arguments[..]]` to execute a script on your server. A script executed that way will behave as if executed from a chat command, but without a player context. Checking for RCon origin can be done by using the chat command data node and making sure the `Tags` list contain tag `RCon`.