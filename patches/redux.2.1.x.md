# Tot ! Roleplay Redux 2.1.x
`2.1.23`
- Integration of Sudo Backup system.
## Changes
`2.1.15`
- Integrating Sudo Nameplate System. Several settings got removed now controlled by Sudo. Sudo nameplate system MUST be activated for players in order to use RR nameplate features.

`2.1.19`
- Added a repost button on the notice board to make a copy of an existing message. Only available if you are the author of the message or the manager of the board.
`2.1.25`
- Added an admin section in POI editor to display the name of the players the previously edited and saved the POI. Old POI will not have any named saved, but after the patch, POI will start to collect that data for admin usage.
## Fixes
`2.1.15`
- Fixing various color formating issues

`2.1.16`
- Fix empty nameplate bio displaying empty content
- Fix missing spacing between widgets
- Improved the font size of status
- Increase the vision angle to display nameplate bio

`2.1.17`
- Remove export game data button as it was crashing the client
- Your own nameplate bio was displayed in some camera angles

`2.1.19`
- Fixed the waypoint having 1 hp

`2.1.20`
- Fixed an exploit related to the repost function of notice boards

`2.1.21`
- Fixing a performance issue, cause the client to stutter every seconds. This fix is not magical, heavy dice systems are expensive, but this will cut the constant refresh of the dice sheet to only refresh when needed instead of every seconds.
`2.1.22`
- Fixed `GetStat` API implementation returning the wrong current stat in some situation