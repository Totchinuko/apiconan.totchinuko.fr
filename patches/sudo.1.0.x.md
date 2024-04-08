# Tot ! Sudo 1.0.x
## API
`1.0.13`
- Adding new Internaface `I_EA_MC_Vars` to access the global variables without the need of a player character reference.

`1.0.16`
- Adding a new datatable `EA_DT_App_Nav_Buttons`. This table add new button to the new navigation menu on the top right corner of the game escape menu. A small section have been added to the documentation.

`1.0.28`
- API update that made available a few days ago
- Added the Decoration Handler to the pak file

## New

`1.0.17`
- New nameplate integration from Tot!Chat. This is off by default as I have not moved Redux to this new system yet.

`1.0.23`
- Add settings for players to hide player and thrall names.

## Changes/Improvements
`1.0.13`
- Improved performance for Setting, Getting, and Removing Float Char/Global vars and String Char/Global vars

`1.0.15`
- Add filter fields to global and character variables editors
- Basic compatibility with chat command using the vanilla console. To use them, use `DataCMD sudocmd <command> <subcommand> <arguments>`. Ex: `DataCMD sudocmd home`. 

`1.0.16`
- Adding a small navigation menu on the game escape menu

`1.0.19`
- Added a parameter to control the background opacity of nameplates
- Added a parameter to hide the name of thralls separatly from players

## Fixes
`1.0.14`
- API file was missing from the archive

`1.0.15`
- The color picker now display color preview in sRGB. Meaning it should match more closely things like chat text/role colors.

`1.0.17`
- Fixed API call Has Glob Tag on character I_Vars interface always returning false.

`1.0.20`
- Changed the anchor of the nameplate for better compatibility

`1.0.28`
- Improved the window opacity slider

`1.0.30`
- Fixed sprint being stuck after opening sudo panels