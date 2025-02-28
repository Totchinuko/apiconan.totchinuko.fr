# Tot ! Custom 1.7.x

## 1.7.0`
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
- Reset entire body category with a button `Improvement`
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