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