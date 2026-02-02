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

## Roleplay Redux 2.1.41
- Fixed raid doors being open from Al-Merayah Reborn (by Xevyr)

## 2.1.46
- Added a toggle on Notice Board that force players posting a message to display their real character name. This is only accessible with the new Notice Board management admin flag.
- Optimized the initial loading of Notice Boards message lists. This might fix the issue where the list could not load. Let me know if it did.
- Notice Board admin management will now use a new admin flag, available through a new RR permission (Notice Board Management)

## 2.1.47
- Added days on the buff duration/delay and abilities cooldown, when such duration is beyond 24h.

## 2.1.48
- Fixed the duration/delay of buffs that where display both more than 24 hours and the amount of days.

## 2.1.49
- Deactivated the waypoint ability to open its UI when simply walking on the stone. This was always terribly bugged and a gigantic pain when in a fight using mech pvp. You can still open the UI by simply pressing your action button while aiming at the stone.

## 2.1.52
- Prevent the transmog system to update the online characters when it is disabled anyway. This also apply when restoring a backup through sudo. 

## 2.1.53
- Fixed containers that could be locked with the Key system but not picked or breached.
- Fixed restoring a backup not triggering a dice system save
- Fixed a few typos

## 2.1.55
- Added a filtering field on the perk list of the dice sheet editor
- Made the interaction collision of the waypoint slightly thicker, allowing to burry it under something and still be able to interact with it.
- Fixed the character being tilted at the exit of a waypoint, when the waypoint itself was tilted. 