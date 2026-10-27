# Tot ! Enhanced HUD

## 2.2.0
- Ported to Conan Exiles Enhanced
- Added POI Markers and Server markers to the minimap, with settings to hide those two layers
- Integrated the new HUD Compass
- Added a settings to Buff Widget to hide Debuffs
- Added a new Debuff widget that only display debuffs, effectively allowing to separate Buffs and Debuffs into separate widgets.
- Damage Log permission does not hide the widget entirely anymore, instead if the permission is missing, player character names will be anonymized.
- Separated Container Info and Repair Info from the Decoration Info widget

## 2.2.3
- Integrated RPR key system into Decoration Info and Container Info
- Improved buff rows default size
- Improved shortcut bar positioning in the inventory
- Improved the damage log to report damage/healing from unknown sources as "External"
- Fixed Buff icons sometimes failing to load properly, displaying a white square
- Fixed Shortcut bar sometimes photo bombing
- Fixed Owners being displayed on containers when the permission was not assigned
- Fixed combat log not accessible when missing the permission

## 2.2.5
- Added arrow precision movement, allowing to place HUD widgets with precision.
- Added widgets coordinate display on the HUD editor panel
- Round coordinates so that widgets can be better aligned
- Removed Ping Stat as its value was simply didn't appear to be reliable
- Buff/Debuff without a valid icon will now have a generic icon instead of a white square.
- Fixed decoration info displaying the word open/locked on everything instead of just doors
- Fixed cases where decoration info could be displayed at the same time as the container info
- Fixed shortcut bar not placing correctly when a container/crafting station is opened and not reacting to interactions
- Fixed Quick Loot not showing up when aiming at a container if the HUD is hidden.