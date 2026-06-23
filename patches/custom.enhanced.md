# Tot ! Enhanced Custom
[Workshop Page](<https://steamcommunity.com/sharedfiles/filedetails/?id=3721096154>)

## 1.10.0
- Remade all the materials from scratch witch came with a few changes
- Each Eye now have 8 different color slot, with 2 Sclera, 1 Blood, 4 Iris and one Pupil.
- Dual hair color now being supported by the game, it's now a more well implemented feature. Be aware that modders will have to upgrade their hairs to support that. (Vertex painting on the Green Channel to define the areas for the second color.)
- Iris texture format has changed, so modders that added new ones, will have to update.
- Because the character shading is vastly different, you'll find that your old body might need a reedit to transition well. Skin color will definitely need change to get back the same feeling.
- Things like Less muscular textures or smooth skin for male are currently gone as I did not have the time to remake them. Not certain I will.
- Warpaint detail slider is back, with an actual effect to control the cracks of the paint.
- Hair color alpha channel controls the scattering of the hairs
- Popup containers, such as the ones used to select haircuts, warpaint, etc.. Do not close now when the pointer click away. This allows to move the camera around while keeping them open. They can be closed by clicking on the button once more or pressing Escape.
- New Armor Material controls for compatible Armor and Accessories. Change the metal of your armors, add some silk shine, or give a Crystal look to some of the elements.
- Added a dirt slider. I'm gonna put some dirt in your eye.
- Custom will now produce rolling backups of your files every time you log onto a server, up to 10. This won't prevent you from loosing your things when you format your computer and suddenly remember of your files, but with some chance, it might save a few from a corrupted save.

## 1.10.1
- Renamed Torch accessory variations Legacy Torches.
- Added Enhanced version of the accessory Torch
- Fixed Rigid accessories not working properly
- Mitigated an issue resetting the Character Body Sliders when sitting on a chair or use vanilla intractable in general. This issue exists even in vanilla with the vanilla skin, only it resolve itself when standing up. I can't fix the root issue of this since it's in protected game code, so for now the character sliders will be reapplied when standing up as well.
- Fixed an issue that opened both panels at the same time.
- Fixed UI freaking out when trying to open the panel while the UI of the game is hidden.
- Fixed Torch Flame Model/Glow
- Fixed Gem/Algae glow
- Improve panel switch to prevent a few known issues
- Improved character neck seam
- Fixed some vanilla makeup not applying to right areas of the face
- Fixed the Color picker acting up when on Normal materials

## 1.10.3
- Converted all the Scar/Wrinkles to the proper NCD format used by Enhanced.
- Re-added and converted cleaned skin and less muscular for male
- Decrease the minimum of the Iris Size slider. You might need to edit your character to increase it a little if it got too small for you.
- Decrease the minimum of the Skin Shine slider. You might need to edit your character to increase it a little if it is not shiny enough.
- Fixed warpaint glow during the day, you might need to adjust the intensity of your characters.
- Restore wind in the sails and prevent them from getting hairy. (If you know, you know.)
- Fixed accessory hair/beard selection not allowing to move the camera
- Fixed a few invisible text label in the sudo settings
- Removed the need for sunglasses to look at the Gizmos tools

## 1.10.10
- Fixed an issue introduced with the rent Conan Enhanced update, that had wide repercussion on many features, such as but not limited to, DLC ownership detection, No Combat mode not working, Thrall customization, etc...
- Fix various minor array index warnings.

## 1.10.11
- Removed the code related to detecting and merging down Armors and Weapons that share the same models. Somewhere the code began not working right for reasons unknown, so I've ditched the thing completely. This will make the library of items more cluttered with duplicated, as normal and epic version of the same items will be present for example, but at least there won't be missing items anymore.
- Fixed pasting a color not refreshing the color preview.

## 1.10.13
- Added Glow Exposure sliders to the Right Eye, Left Eye, Makeup, Warpaint and Blood, to control how much the glow affect the exposure. At 0, glow would follow exposure entirely, glowing weakly in day time. At 1, the glow will stay consistent regardless of the current light condition. 

## 1.10.18
- Added alpha to Hairline color, Beard line and Brows color
- Added a hairline shine slider that control the shine of Hairline and beard line
- Fixed accessory export missing some data
- Fixed the broken export of armors. Much data was missing as it had not been upgraded, and it kept outputting outdated data.
- Fixed character copy-paste failing to restoring armor colors
- Fixed pasting armor/accessory color not setting the color properly if it had never been modified from its default
- Fixed stuck No Combat Mode when it is on before login 
- Fixed hands with Cleaned Male Skin
- Fixed input key to clear the current pose
- Fixed seating snapping
- Fixed character loosing its head when zooming
- Fixed footprints changing size with Calf size
- Fixed glitchy eyebrow tracks

## 1.10.20
- Fixed customize command opening on target
- Fixed partial body icons appearing as full bodies 

## 1.10.25
- Rewrote how body/armor materials are categorized and how the parameters are applied. This was a big rework, basically rebuilding some of the backbone of the mod, but a necessary one. This should lead to some very significant performance improvement, specially when editing bodies, armors and accessories. In some cases, performance have been multiplied by 10 while picking a color or dragging a slider, turning a low FPS slog into hopefully, a barely noticeable hit.
- Other smaller optimizations here and there
- Fixed newly created character not having the right hairline
- Fixed the order of following skin layers, to match how it was on Legacy: Warpaints, Complexion, Makeup, hairline, beard line, eyebrows.

## 1.10.26
- Fixed material replacement for various broken instances, notably with other mods. 

## 1.10.28
- More fixes of non functional materials
- Fixed skin shine slider
- Fixed warpaint glow being stronger on the face
- Fixed accessory model selection not updating when selecting different kind of accessories.
- Fixed skin color not apply to some type of accessories

## 1.10.31
- Updated the hair shader to the latest version of the game
- Implemented the new beard shader
- Separated the Beard line color from the Beard actual color
- Added shine sliders for beard
- Removed detail slider for hairs (It did nothing since the transition to Enhanced)
- Fixed eyelashes parameters
- Fixed mannequins having weird forearms.
- Fixed mannequins sometimes having a real head
- Fixed beard color inconsistencies when swapping models.