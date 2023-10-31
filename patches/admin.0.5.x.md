# Tot ! Admin 0.5.x (Alpha)

## New
`0.5.0`
- UI Rebuilt - The whole Admin/Heat Map has been rebuilt from scratch, offering an improved usability and additional features.
- Grid Map - The heatmap is now displayed as a texture, with pixels on the map showing the constructions and the color indicating the concentration. Instead of a group radius, you get a texture resolution. The lower the resolution, the bigger the groups.
- Performance - All the server code has been rewritten to be more performant, with big servers in mind. Tests have been performed on some of the biggest server databases, kindly provided by server admins. This apply to the heatmap deletion and owner swap, but also how the heatmap retrieve the data for display and the /select tool
- No Owner - The Admin map can now retrieve and display constructions/thralls whit no owner
- Admin Tools - The Admin map now have a dedicated tab to display all the admin tools such as puppets, portals and post processes.
- New Action Modules
    - Warp HUB - Add a bunch of warp to the list, and when the player interact with the puppet, it will display the list of warps with a Map. Good for making caravanes for example.
    - Warp To - Select a single warp to go to when a player interact with the puppet.
- Widget for finding/selecting a player or a clan was reworked from scratch to be more server friendly. The old one required that the whole list of players/clans to be downloaded in one go. The new one only load one page at a time and split players from clans.
- A new "Customize" button in the Player Editor to directly edit a Tot!Custom skin remotely.

`0.5.1`
- Warp Improvements
    - Enabled toggle is now "Allow in command" and will toggle the use of a warp with the command "/warp Warp Name".
    - Added a "Display in Warp List" toggle, to display or not a warp in the "/warp" window.
    - A warp displayed in the list can be used regardeless if it can directly be used by the command or not.
    - Portals now only rely on the warp rules to know if a player can warp or not
- Added a new rule "Disabled" to simply disable anything that has it, preventing players from accessing the content it is added to.
- Due to some internal changes regarding action modules, all the puppet action modules have been reset. This is to unsure proper compatibility with the future scripting system.
- New Stack field in trader price definition for both puppets and trader npc. By specifing a stack, you can define the price for a give stack size. For example 10 coins for 100 iron bar. If the player buy 50, it will cost him 5. Price is always rounded to the superior, so buying 51 in this example, would ask for 6 coins.

`0.5.9`
- Add a death count to the player editor. This death count is stored in string char var and can be accessed using the sudo API
- Add `/math`, `/math solve`, `/math variable` commands to test the future math solver (for !Admin and !Redux). Use `/math` to get some details on how to use it. 

## Changes/Improvements
`0.5.0`
- Hide station thrall has been removed for now, as it was causing more problems than solutions. It will return in the futur

`0.5.1`
- Shift clicking a heatmap cell will now teleport you in the middle
- Trying another Warb HUB icon
- More Map Marker Color variation
- You can now copy/paste an action module from one puppet to another

`0.5.2`
- Hidding the action wheel subtitle when openned on a player. This is to avoid meta, as clan invite can be used to read the player nickname
- Pressing Escape now cancel the trade
- Overpaying now display a confirmation box
- Removing the "Trade was canceled" message
- A notification will now pop when the trader is not happy with a deal

`0.5.3`
- Basic and Trader NPC will now display the interaction GUI when aiming at them for player with puppet edition permission, as well as an Admin Dismantle action
- Portals now use the new internal texture cache system, this means that downloaded image used for portal background are now reused and downloads are queued. Portals that share the exacte same URL will only download the image once, and reuse it on the same session everywhere it is needed instead of downloading it everytime. Portals also patiently wait in line to download an image instead of doing it all at the same time
- Admin map now remember the last location you were looking at
- Warp HUB now smoothly transition toward a destination when hovering the menu
- Item list in the trader definition panel can now be reordered
- Unavailable item at a trader are now displayed as greyed out

`0.5.9`
- Added discriminator to coins item names
- Display the amount of members in a clan using /list clans (Only with the right permission)
- Improved the item requirement rule to allow multiple items. Only one is required per list. The old version is still present for backward compatibility.
- Inventory editor in Player Editor or Admin map now support Thrall item icon and name display
- Kits are now compatible with Thrall items
- Puppet trader and NPC trader are now compatible with thrall items
- Missing items that can be sold by the player are now displayed on the player side of the trading UI
- Missing items that can be bought or sold now display the price

## Fixes

`0.5.0`
- Trader item chance was not working
- An exploit allowed to buy a lot of stuff from the trader while giving very little
- Trade with a player was not possible while the player was in walk mode
- Interacting with a basic NPC was opening its window on the first player connected
- Puppet vanilla customization was not working properly with modded hairs
- Some items spawn triggered an unknown error with Kits and Puppet Traders
- Prevent Price overflow with puppet and NPC traders

`0.5.1`
- backpack button was moved to the intentory explorer window to avoid getting stuck behind the chat overlay button.
- A price multiplied by 0 was alway minimum 1, when it should be free.
- Reopening the admin map after use did not display the heatmap correctly.
- Post processing anchor was blocking thrall placement.

`0.5.3`
- Basic NPC and Trader NPC did not repeat their emotes
- Players were able to configure DLC emotes on puppets and NPCs while not owning those emotes
- Heatmap pixel were not aligned properly on some maps
- Trading puppet module had multipliers default to 0 instead of 1

`0.5.5`
- Emotes on NPC and Puppets did not work after age of war chapter 2

`0.5.7`
- Post process anchor UI was broken

`0.5.8`
- Move tool had a memory leak issue
- Move tool did not detect collisions of objects previously moved
- Move tool level 1 was not allowing negative height
- Role based pricing reduction was applied to everyone
- Reseting trader definition was breaking trader reset cooldown in some cases

`0.5.9`
- Some rules were preventing the listing of kits