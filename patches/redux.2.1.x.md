# Tot ! Roleplay Redux 2.1.x

## 2.1.15
- Integrating Sudo Nameplate System. Several settings got removed now controlled by Sudo. Sudo nameplate system MUST be activated for players in order to use RR nameplate features.
- Fixing various color formatting issues

## 2.1.16
- Fix empty nameplate bio displaying empty content
- Fix missing spacing between widgets
- Improved the font size of status
- Increase the vision angle to display nameplate bio

## 2.1.17
- Remove export game data button as it was crashing the client
- Your own nameplate bio was displayed in some camera angles

## 2.1.19
- Added a repost button on the notice board to make a copy of an existing message. Only available if you are the author of the message or the manager of the board.
- Fixed the waypoint having 1 hp

## 2.1.20
- Fixed an exploit related to the repost function of notice boards

## 2.1.21
- Fixing a performance issue, cause the client to stutter every seconds. This fix is not magical, heavy dice systems are expensive, but this will cut the constant refresh of the dice sheet to only refresh when needed instead of every seconds.

## 2.1.22
- Fixed `GetStat` API implementation returning the wrong current stat in some situation

## 2.1.23
- Integration of Sudo Backup system.

## 2.1.25
- Added an admin section in POI editor to display the name of the players the previously edited and saved the POI. Old POI will not have any named saved, but after the patch, POI will start to collect that data for admin usage.

## 2.1.27
- Fixed identity serialization for Tot ! Module AST identity transfer. 

## 2.1.28
- Fixed line breaks in identities preventing the Amunet server transfer to be performed properly.

## 2.1.29
- Somehow fixed the key maker toolbox sorting inventory every times its opened ? I don't know. It's broken as fuck.

## 2.1.30
- Auto Remove for POI. If you select a duration, POI will be removed from the server on the next server restart after the selected duration from the placement of the POI
- New option for waypoints to prevent carriable treasures to be taken through a waypoint.
- Fixed waypoint use sudo log displaying twice the origin instead of the origin and destination

## 2.1.31
- Improve some server side performance triggering too much refresh of some of the data

## 2.1.32
- Slowed down timings at which the dice system is loaded onto the client, to reduce the impact on the login loading it can have.
- Added an client experimental setting to only load the dice sheet when RPR panel is first opened. This help login loading by delaying the dice sheet download.

## 2.1.33
- POI will now be made invisible upon reaching the expiration duration, then be scraped on the next reboot.

## 2.1.34
- Game raid doors are not locked when keys are enable for doors (Siptah/EL) `Bug`

## 2.1.35
- Legs bent with heels on, when not on flat ground `Bug`

## 2.1.37
-  Fixed map overlay going above the map markers

## 2.1.38
- Fixed API call `GetCharacterSheet` returning stat value for non-available stats. They will still be in the list, but be at 0 like they should. This will consequently fix Tot!Admin Math for RR stats.

## 2.1.39
- Fixed a typo