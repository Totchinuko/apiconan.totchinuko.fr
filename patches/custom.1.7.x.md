# Tot ! Custom 1.7.X

## 1.7.0
- Added Partial Body Profile
    - A partial body profile only apply its non default value of a body on the current body, like an overlay.
    - Non default value are marked in blue and with a asterisk.
    - This can be used for example to have a different haircut, different hair color, while not having to duplicate all the values of the main body. This way, when you modify the main one, you don't have to update all of your variations.
- Body export format has changed since internally the data is structured differently, but old export will be backward compatible.
- Dual wielded weapons were not scaled properly

## 1.7.1
- A way to flag materials as being part of a flat chest body `API`
- New Metallic slider for Warpaints/Makeup slots `Feature`
- New Glow slider for Warpaints/Makeup slots `Feature`
- Command to enforce body rules on character + scripting node `Feature`
- New lantern with 3 variation of light `Feature`
- New configurable input to turn on/off light from accessories `Feature`
- Separate hairline color body parameter `Feature`
- Alternative weapon transmog compatibility method (Can be toggle on the main panel) `Feature`
- Reset entire body category with a buton `Improvement`
- Right clicking on a transmog weapon slot display the compatible weapons `Improvement`
- Dual weapons can be upside down `Bug`
- Down But Not Out does not function properly with Customization `Bug`
- Gender should apply to body menus in partial bodies `Bug`
- Override profiles are broken `Bug`
- Mannequin heads reappearing even with invisible head armor `Bug`
- Character shoulders were twisted inward `Bug`
- Footsteps were not visible in some situations `Bug`

## 1.7.2
- API for new transmog mechanism `API`
- Visibility tag when swimming or not `Feature`
- New variation of the lantern with fake shadow `Improvement`
- Legs bent with heels on, when not on flat ground `Bug`
- Improved body rules download `Bug`

## 1.7.3
- Fixing broken Legs `Bug`

## 1.7.4
- New Footstep sounds, Footprint shape and Armor Foley sounds selection in body parameters. This will allow you to configure the sound your character is making when walking and the footprint left on the ground. It also double as a fix for the many issues their was with High Heels regarding sounds and print. You'll have armor foley, high heels sound, hooves sounds, and various animal footprints.

## 1.7.5
- Adjusting volume of a few footsteps
- Removing footprints on hard surfaces such as stone, wood, metal...
- Fix silent footsteps in first person
- Fix some mounts not having footsteps sounds
- Fix weapon exploit with hand sizes
- Fix body rules not updating when roles/tags were changed

## 1.7.6
- Added double click in the accessory editor to select all the accessories of a same bone
- Added blood glow and metalic slider
- Added a hidding condition based on the state of the lantern (Lit or not)
- Added the chair snap menu item. Open the wheel on a chair, to automatically snap your character at the proper coordinates so you can play chair emotes.
- Added a button in custom panel to offset your character the proper height to sit on the surface you stand on with a chair emote.
- Improved the item tooltip of the weapon transmog panel
- Improved radium lantern to allow the cork and string to be dyed
- Decreased intensity and range of some of !Custom lanterns by about 30%.
- Fixed camera being stuck into you when too close from a collision such as a wall, chair, floor, etc...
- Fixed character offset tool not having proper rotation when opening Custom panel again
- Fixed wrong breast perk rotation during emotes when the character was oriented differently
- Fixed character offset tool not working after editing accessories

## 1.7.7
- Fixed broken camera on puppet and mannequin

## 1.7.8
- Improved sync of body rules status that was not getting loaded properly.
- Fixed !Custom camera teleporting at the center of the world when using the input key

## 1.7.11
- Added a new accessory: Tot!Decency. You two can now wear your very own piece of pixelated censorship, with dyable option.

## 1.7.12
- Added a name field to the import window, so you can name your newly imported profile.
- Added a right click input on the profile creation buttons of the favorite area, to instead import directly into your favorites.
- Added an export button to the favorite profiles.

## 1.7.14
- Trying to go around the bug from Funcom about bazaar DLC sometimes not unlocking on heavily loaded servers. This bug from the game also prevent people from equipping things in !Custom, so I'm trying a little something to see if it works.

## 1.7.18
- Added new creator categories, GrimProduction and Ithlinne's Armory.

## 1.7.20
- Fixed drooling on the left side of the mouse only present in some modded heads.

## 1.7.21
- Fixed bone selection for lip corners being inconsistent between the left and right 

## 1.7.27
- Added `Lew Flat Chest Redux` as a Flat Chest. Original one will remain untouched, and the new one is similar in its shape so that it can remain compatible with clothing made previously.
- Fixed skin on third party mod flat chests not working with !Custom advanced features.

## 1.7.31
- Fixing more issues that made the mannequin head pop back when it should be invisible.

# Tot ! Custom 1.8.0

## Release Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/rPqxSEowaEs?si=tIBDx968utgA5i85" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/wfnJqGuTHbM?si=yjBKLQ1QijMMiGq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1.8.0
- New Gizmos tools (The 3D tools you use to edit accessories)
  - The central view handle is now a circle that remain out of the way
  - Move/Scale Axis handles now flip sides to always remain toward the camera and be accessible
  - Rotation Axis are leaner
  - Move/Scale tools are now accompanied by 3 plane handle allowing to move/scale the target on two axis.
  - Improvements were made on the overall tool size depending on the camera's proximity.
- New Pose System:
  - Contained in a brand-new panel, that can be accessed in a different input with new input key (B by default)
  - Modify your character's body pose using tools you've come to like with accessories.
  - Modify the pose of your character during an emote or completely design from scratch a static pose over a TPosed character.
  - Edit your character directly after opening the panel for small instant adjustments to a scene.
  - Save poses or parts of poses, and overlay them back on your character at any time.
  - Use the Quick Tools and Mirroring to edit your pose more easily
  - Bind an accessory set to a pose, to equip it at the same time as you play a pose.
- Complete rework of the UI structure. A necessary work for the future needs of the mod. The original UI code was messy and needed a facelift.
- File lists now support multi selection and drag and drop, allowing to move, delete, duplicate, export, favorite multiple files at once.
- Bulk export: Export multiple files in one single export, and even a mix of them from the favorites tab.
- Added keyboard shortcuts to file lists, such as Delete, Ctrl+D to duplicate and Ctrl+F to focus your keyboard on the search field
- Favorites are now available on any type of compatible characters
- Added Favorite groups to replace presets, a way to group multiple favorite files into a group that can conveniently be applied. Groups act as a more flexible alternative to Presets.
- Your old presets will have been reimported as normal files, and groups will have been generated based on your old presets.
- Character Profiles are now folders, and can be placed inside other folders, allowing to organize your favorites into a hierarchy with quick navigation to the parent folder or sub folders.
- Files can now be equipped/applied even if they contained locked elements because of server rules/DLC ownership. The locked elements will simply be ignored and the rest of the file will be applied.
- Added several keyboard shortcuts to quickly equip/unequip/override Accessories/Armors, those shortcuts are mentioned in the popup menu of the equip button.
- You can now quickly rename a file without opening the full editor by right-clicking on the edit button.
- You can now change the background color of the mod's UI. Setting is tucked in the cog wheel on the top toolbar.
- Changes made to a body by server rules are now indicated by a yellow border around a body row, and various warning icons.
- Alternative weapon transmog matching is now part of the weapon transmog file
- Armor parts that are forced nude, will not count as equipped transmog part anymore unless any other part of the armor files is. This would avoid a number of matches that make looking at an armor file list a little confusing
- Un-Equipping an armor transmog will now apply nude rather than reverting to the real armor. You can still unequip in quick access and have the current armor menu offering to revert to the real armor completely.
- Font and Icons where changed. The new icon pack is more consistent and of slightly higher resolution. Icons should be slightly bigger.
- Fixed missing light in female hair thumbnails
- Remove fog scattering on the main !Custom camera light
- Fixed a rare case where the list of creators in the body editor would go out of screen.
- Fixed an incompatibility with Devious Desire regarding Elbow and Knee bone rotations.

## 1.8.4
- Added search bar to Favorites and Folder hierarchy
- Added an admin setting to disable the accessory count of the original accessory system
- Added a client setting to disable the Auto-Act feature
- Fixed inconsistencies with auto /act compared to 1.7
- Fixed state log in server and client side that shouldn't have been shown by default.
- Custom Camera was defaulting to always on
- Keyboard shortcut Delete will now unfavorite files rather than deleting them permanently. Permanent delete now require to Shift+Delete. Do be careful with that thing, you can't revert that. The confirmation has been made more dramatic as a result.
- Fixed reset of bones in the editor breaking the connection between the UI and the bone actually rotated
- Duplicating a folder now internally duplicate the groups correctly and don't make them mysteriously tied to each other.
- It was sometime necessary to escape twice to close the panel, after changing folder
- Equipping a group with multiple accessory sets in it didn't produce the desired merged effect.
- The rotation tool had collisions that didn't match its visual
- Fixed a rare issue were applying a pose would apply an accessory set out of nowhere.
- Fixed quick access popup missing a scroll bar
- Fixed accessories not displaying their name on mouse hover

## 1.8.8
- Introducing Tot!Sippy for !Custom, other mods will come at a later date.
- Changes in the color palette used for buttons, to return to a more familiar color palette that was used in 1.7
- Many small changes adjusting contrasts, paddings, and other details to make the panel more readable.
- Reintroducing icons for the various files on the left side
- The default background color of the mod has been changed, and will reset what you had selected, but it can still be customized.
- Added the possibility to blur the panel background when using transparency.
- Deleting files in the favorite tab is now deactivated by default, and can be enabled back in the settings.
- The snapshot function that used to be in the main sub-menu is now located in the New Group sub menu, under a different name.
- Added an edit group button containing functions to update the content of a group with your character data, like preset used to do. It also contains an option to select files from your libraries more easily.
- Added a checkbox to accessories to prevent them from being equipped when Equipping the whole set (Sort of manual equipping mode), this function for accessory set, groups and even poses.
- Added the possibility to drag and drop files in and out of groups or between groups.
- Added a favorite mechanic for the tag menu of the item selection.
- Added a setting to have bigger icons in item selection.
- Added skeleton layers for individual hands
- Added b_prop_1 and b_prop_2 to bones that can be manipulated in the pose panel
- Added a new tool to the pose toolbox that allow to lock hand/arm prop bones in space, for easier editing.
- Added a setting to reset camera when the character move
- Allow to select a bone by clicking on the line, with the spheres always having priorities.
- Bones can now be selected by clicking on the edited coordinate of the pose editor
- Enabling rotation on lip bones
- Accessories equipped through poses, are now remembered and cleared out when overriding a pose or clearing the current pose. There is also a separate menu item that allow to specifically clear those accessories.
- Simplified the clear pose section of the pose panel, to have one big red button that clear everything, and details in a sub menu.
- Added Clear Body Only that will clear the pose data of the body, save for the face bones.
- Added an input key to toggle No Combat Mode with a sound cue.
- Added an input to clear the current pose data without having to open the panel.
- Pose are now allowed to be used in previously forbidden states, such as with a weapon in hand IF the no combat mode is enabled.
- Improved order of eyelid bones
- Invalid references in folders will now be automatically cleaned up.
- Fixed clear arms menu items that did not clear hand T-Pose
- Optimizing some performance issues with the list management
- Increased the thickness of the gizmos rotation rings
- Input key to delete files was removed as it caused issues with vanilla admin inputs
- Fixed selected folder memory when disabling the auto-act feature.
- Fixed clear b_root not doing anything when right-clicking on skeleton
- Fixed accessories hide in editor not resetting properly after leaving the editor 

## 1.8.13
- Fixed various Sippy card positions
- Fixed Reset Body Only deactivating Face T-Pose instead of Whole Body T-Pose, and leaving the forearms T-posed
- Fixed some fields that were expanding instead of scrolling
- Fixed puppets not having the pose stop button
- Fixed IK tools not working on puppets