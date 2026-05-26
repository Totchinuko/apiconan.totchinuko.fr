# Tot ! Enhanced Sudo
[Workshop Page](<https://steamcommunity.com/sharedfiles/filedetails/?id=3721090132>)

## 1.3.0
- Removed mention of the Steam ID usage in ini files to promote a user to Super Admin privilege. Currently, ini files settings simply do not work. Not sure if that will change in the future.
### Photo Mode
- Added Source Radius for lights. Lights now manage shadows, and you can use the source radius to handle how the light and shadows looks
- Expect your previous light presets to need some change, intensity is not in the same unit, so they are likely too strong now. The new one is expressed in Lumens, but the lights will ignore global image exposure for convenience, otherwise you'd have to change your light intensities depending on the time of day.

## 1.3.2
- Fixed help tooltips
- Improved the code responsible for the management of the PhotoMode/Custom camera, to try and fix some rare issues that would glitch the camera when exiting it.

## 1.3.4
- Reworked the color picker internals to make sure the Hexadecimal work as intended and reliably, even with pickers that handle either linear and sRGB colors.

## 1.3.6
- Fixed color picker samples stacking to infinity
- Fixed personal panel not converting back color from sRGB

## 1.3.11
- Fixed issue action wheel issues.

## 1.3.18
- Fixed invisible player nameplates
- Small performance improvement of nameplates

## 1.3.20
- Fixed the controls of the player edition panel
### Photo Mode
- Added a saved shot section to save up to 10 positions of the camera to go back to, provided the saved position is within the limited range.