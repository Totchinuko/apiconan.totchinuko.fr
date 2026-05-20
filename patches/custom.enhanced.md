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
- Mitigated an issue resetting the Character Body Sliders when sitting on a chair or use vanilla interactable in general. This issue exists even in vanilla with the vanilla skin, only it resolve itself when standing up. I can't fix the root issue of this since it's in protected game code, so for now the character sliders will be reapplied when standing up as well.
- Fixed an issue that opened both panels at the same time.
- Fixed UI freaking out when trying to open the panel while the UI of the game is hidden.
- Fixed Torch Flame Model/Glow
- Fixed Gem/Algea glow
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