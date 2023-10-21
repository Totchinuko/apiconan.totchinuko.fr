# Tot ! Admin 0.4.x (Alpha)
## New
`0.4.0`
- Economy Update - The Duke Nukem Forever of Tot ! Mods
    - Trader definition for puppets - Create a trader definition and assign it to one or more puppets. Buy/Sell multiplier allow you to fine tune the pricing at various level
    - Trading UI - Trade with NPCs but also with players using a Divinity 2 inspired UI. Open the action wheel on a player character, and open an exchange window for trading goods. No more dumping your shit on the ground like savages or running after your payment rolling down the hill.
    - NPC Trader - Craftable by players, this barebone NPC can hold plenty of goods to sell, but also buy some.
    - Non farmable coins - 19 different coin items to use in various ways, with no weight and max stack of 1,000,000.
- A radial menu button to hide station thralls
- Admin Flags - Added a new window for accessing admin flags, that can be accessed using /flags command.
- Visual Clue permission was moved to "Tot ! Admin - Flags" category
- Ignore Kit Restriction permission was moved to "Tot ! Admin - Flags" category and is now an Admin Flag
- Ignore Warp Restriction permission was moved to "Tot ! Admin - Flags" category and is now an Admin Flag

## Changes/Improvements
`0.4.0`
- Items in kits can now have a max stack size beyond the item max stack size. This will generate multiple stack when redeeming the kit.
- Kit redeem feedback has been improved.
- Attribute value in the attribute widget editor can now be directly typed in.
- /summon now has a dedicated permission

`0.4.1`
- Adding permissions for trading with a player and hidding a station thrall
- NPC trader for players now ignore land claim
- Opening a trade window is now only possible while the target is standing passively
- When trading with another player, the other side is now hidden

## Fixes
`0.4.1`
- Vanilla armor customization on puppets/npcs did not work properly
- Puppet trader were enable to spawn items in some situation
- Show station thralls had a clipping nacked body
- Hide/Show station thrall button was showing on things it should not
- Adding a horizontal scroll bar in the trader definition screen
- Trading was reseting constantly in some cases