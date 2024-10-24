# Tot ! Custom 1.6.x

## Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/UMiA0THxBWQ?si=UYKzZQvdGBxQiVKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## New
`1.6.0`
- Added compatibility with Clan Emblems
- Added the possibility to offset/rotate your character to better fit a scene or pose, using the 3D editor
- New hiding conditions: Crouch and Fly related
- Deactivate IK button to prevent your character from moving its feet based on ground level
- Added a button to keep the !Custom camera on after leaving the panel. With the new camera, this can be used to offset your view to had a better view at an RP scene
- Complete Rework of the accessory editor:
    - Reworked camera: More freedom, More democracy.
    - More compact accessory list
    - Select multiple accessories
    - Keyboard shortcuts: Copy, Past, 3D tools, Skeleton layers...
    - Move multiple accessories that share the same bone
    - 3D skeleton to select virtually any bone of the character body + weapon sheath sockets
    - Copy/Paste multiple accessories across profiles
    - Hide button to hide an accessory in editor
    - You can now hold shift while rotating to snap the rotation in 1/16 of a rotation increment

`1.6.2`
- You can now create, duplicate and delete body, weapon, armor and accessory profiles directly from the favorite area

`1.6.6`
- Added the command `/reset unlocked <character name>` to reset the unlocked items of a character.
- Added compatibility in Tot!Module AST for Unlocked Items

## Changed

`1.6.0`
- Improved accessory rotation tool look for better 3D visualization
- Added a light multiplier slider next to the light button
- Creating/Duplicating a new profile will now scroll you down the list

`1.6.1`
- Added button for copy, paste and delete in the accessory panel
- Added a button to reset your character offset, replacing the IK disable button
- IK will now always be disabled for every characters. It's a buggy mess, and a good bug is a dead bug. 
- Added WASD keys to move the Custom camera forward, backward, left and right when holding the left click for rotating. These can be changed in the editor settings.

`1.6.2`
- Custom camera will now remember its last relative position, rotation and zoom
- Camera can now be toggled outside of the custom panel with an input (Unassigned by default)
- Added a filter field in the favorite profile dropdown menu

`1.6.6`
- Improved the Favorites profile selector to be more usable
- Right click on an accessory color will now pop open a menu to copy/paste/reset a color. Color reset shortcut was moved on Shift + Middle Click
- Small improvements to camera behavior
- Compatibility with RPR mutator for Penis and Bust size. You read that right.

`1.6.8`
- Optimization of various item lists download to the client. Instead of downloading them entirely upon login, those lists will be loaded and refreshed (When needed) when !Custom panel is opened, and in small chunks to avoid overloading the connection between the client and server. This should improve initial game loading times upon login in some cases, but will also make the first !Custom panel opening slower as those lists are being downloaded to your client.

## Fixed
`1.6.0`
- Fixed hair/beard accessory not displaying their ID on hover of their icon
- Mannequin could not be deleted using Shift + Delete
- Opening custom was possible while another Fullscreen UI was opened, bricking the escape button

`1.6.1`
- Editing a character offset after reopening the Custom panel did not behave as expected
- Editing the character offset would trigger a rapid flicker on the first frame of movement
- Skeleton visualization was not scaling with the body
- Swapping an accessory with effects to another with effects did not update the effects properly
- It is no longer possible to use the move offset while the character is running
- It was not possible to paste a color copied from the accessory section, into the armor sections
- Reset of the camera and character offset on movement is more accurate and reliable
- Character offset cannot exceed a foundation of distance
- Custom camera cannot go further than 2 foundations of distance and will not go through walls. You've had too much democracy.
- Change item button in accessory editor is now greyed out on hairs and beards. 

`1.6.2`
- Hide in editor was not working properly
- Custom Camera was reset when any player around was moving
- Manual accessory coordinate edition should be more reliable
- Pushing the vanity camera input while using the custom camera would break the custom panel once reopened
- Changing an accessory would sometime break the movement tool
- Tools were absent from the weapon tab since a recent funcom patch

`1.6.3`
- Camera was resetting its position after using it outside of the custom panel

`1.6.4`
- Fixed character offset not applying correct for character loaded after they edited their offset
- Attempt at fixing accessory not equipping correctly in rare situations.

`1.6.5`
- Some male hair were considered invalid in accessories.

`1.6.6`
- Color picker opened from an accessory was not responsive to the escape button
- Weapons/Shield were sometimes influenced by your limbs scales. It will only be influenced by your character overall size now.

`1.6.7`
- It was possible to import body profiles with a line break in the export code that would in turn re-export with that same line break. This would result in a problem with Amunet Server Transfer, preventing the transfer of those characters.
- Added the missing `None` bone as an alternate selection to `b_root` bone.