# Tot ! Sudo 1.0.x

## 1.0.13
- Adding new Interface `I_EA_MC_Vars` to access the global variables without the need of a player character reference.
- Improved performance for Setting, Getting, and Removing Float Char/Global vars and String Char/Global vars

## 1.0.14
- API file was missing from the archive

## 1.0.15
- Add filter fields to global and character variables editors
- Basic compatibility with chat command using the vanilla console. To use them, use `DataCMD sudocmd <command> <subcommand> <arguments>`. Ex: `DataCMD sudocmd home`. 
- The color picker now display color preview in sRGB. Meaning it should match more closely things like chat text/role colors.

## 1.0.16
- Adding a new data table `EA_DT_App_Nav_Buttons`. This table add new button to the new navigation menu on the top right corner of the game escape menu. A small section have been added to the documentation.
- Adding a small navigation menu on the game escape menu

## 1.0.17
- New nameplate integration from Tot!Chat. This is off by default as I have not moved Redux to this new system yet.
- Fixed API call Has Glob Tag on character I_Vars interface always returning false.

## 1.0.19
- Added a parameter to control the background opacity of nameplates
- Added a parameter to hide the name of thralls separately from players

## 1.0.20
- Changed the anchor of the nameplate for better compatibility

## 1.0.23
- Add settings for players to hide player and thrall names.

## 1.0.28
- API update that made available a few days ago
- Added the Decoration Handler to the PAK file
- Improved the window opacity slider

## 1.0.30
- Fixed sprint being stuck after opening sudo panels

## 1.0.32
- Improved nameplate visibility curve
- Improved nameplate "Aimed At" detection to be less intrusive
- Quick Search - Use Ctrl + K in Admin or player panel to quickly go to a specific sudo menu
- Favorites - You can now add to favorites a sudo menu to pin it at the top and display it on the main menu.
- Sudo menus are now ordered alphabetically
- Sudo Backup Rework: Backups will now be stored in the form of save files in your Conan server folders. You can use an FTP client to access these and move them from one server to another.

## 1.0.33
- Fix the role attribution UI allowing role escalation from lower roles

## 1.0.34
- Fixed a few wonky behavior with vars API, potentially corrupting vars list
- Improved the Hexadecimal conversion for color picker

## 1.0.36
- Sudo tabs where showing duplicates and displayed empty groups

## 1.0.37
- Internal Changes

## 1.0.39**
- Added an API Lock toggle/permission to the roles. This is not a permission for users, but instead will lock the role from being given through the API, effectively preventing the role from ever being granted outside of sudo (by third party mods, Scripting system, etc.). The only notable exception to this, is `Tot!Module AST`, that use its own internal means to restore the role in an Amunet server transfer.

## 1.0.42
- Added the meaning of the universe
- Server setting to hide nameplates behind obstacles (Off by default)
- New Admin flags `Nameplate Wall Hack` to display the nameplate, regardless of distance and walls.

## 1.0.44
- Improve nameplate collision

## 1.0.45
- Nameplate issue on death being displayed when it should not `Bug`

## 1.0.49
- Fix soft lock during setup with super admin password

## 1.0.50
- Fixed the parameter blocking nameplates through walls that was not getting backed up

# Tot ! Sudo 1.1.X

## 1.1.0
- Tot ! Environment:
  - Added Player side Environment tab to toggle the improved lighting profile for EL and Siptah, along with a bunch of parameters to tweak some aspects of it
  - Added Player side Decoration Lightning control, to adjust the intensity of player placed lights.

## 1.1.6
- Fixed some issue when deactivating Image Sharpening
- Added a Lens Flare intensity slider
- Added some decency to Conan Exiles

## 1.1.7
- Removing the decency

## 1.1.26
- Improved the quick search to be more reactive when typing a keyword and hitting enter immediately.
- Improved the quick search to not lose focus after the first enter input.
- Attempt at fixing a client crash while or after using the quick search
- Fixed the nameplate name not appearing using the wallhack admin tool when the settings are set to not display the name of a player.

## 1.1.28
- Improved environment upgrade to feature volumetric fog in EL starting area (which never worked)
- Added personal environment profiles for EL, Siptah and Savage Wilds. They are personal preference I like to have in game, might not be of everyone's liking.

## 1.1.32
- Fixed the fog color when using the environment profiles.

## 1.1.54
- Added a Check/Uncheck All buttons on permission selection for roles, globally and per permission categories.
- Font and Icons where changed. The new icon pack is more consistent and of slightly higher resolution. Icons should be slightly bigger.
- Confirmation dialogue now support the Enter as a shortcut to the primary button, and Escape for the cancel button.
- Optimization of permission network replication

## 1.1.57
- Reverted all internal changes made to permissions