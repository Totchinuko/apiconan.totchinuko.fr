# Tot ! iHUD 2.1.x

## 2.1.0
- Added damage display, DPS meter and combat log
- Added a standalone survival bar
- Added the possibility to hide the survival bar on the health stats
- Added the possibility to change the alignment and the anchor of any widgets
- Added button on the sudo escape menu

## 2.1.1
- Added building piece interaction UI replacement
- Added Quick Loot UI replacement
- Lock Combat Log behind permission
- Damage log was not displaying the proper damage type in some cases (fall damage)

## 2.1.2
- Disabled auto hide HUD for default widgets configuration
- Added background opacity sliders to Decoration info, quick loot panel and damage log
- Improved the Quick Loot Panel compatibility with more containers.
- Fixed Decoration info not restoring the vanilla equivalent when deactivated
- Improved HUD replacement code to reduce contextual flickering
- Fixed the decayed indicator displayed on non decayed objects

## 2.1.3
- Fixed corruption display on health/stamina bar

## 2.1.5
- Making the buff list more resilient to errors

## 2.1.7
- HUD buffs timers were not progressing when the HUD was hidden in some capacity.

## 2.1.9
- Fix broken asset reference

## 2.1.15
- Added compass an independent hud widget. It will only be displayed when having the item in your inventory and doesn't require permissions to use outside of that. 

## 2.1.16
- Fixed the minimap overlaying everything
- Removing the +/- button from the minimap as the chat back panel catch clicks on those all the time.

## 2.1.17
- Fixed compass not hiding when the inventory is open

## 2.1.22
- Fixed incorrect corruption values after login