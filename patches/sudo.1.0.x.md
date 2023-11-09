# Tot ! Sudo 1.0.x
## API
`1.0.13`
- Adding new Internaface `I_EA_MC_Vars` to access the global variables without the need of a player character reference.

`1.0.16`
- Adding a new datatable `EA_DT_App_Nav_Buttons`. This table add new button to the new navigation menu on the top right corner of the game escape menu. A small section have been added to the documentation.

## Changes/Improvements
`1.0.13`
- Improved performance for Setting, Getting, and Removing Float Char/Global vars and String Char/Global vars

`1.0.15`
- Add filter fields to global and character variables editors
- Basic compatibility with chat command using the vanilla console. To use them, use `DataCMD sudocmd <command> <subcommand> <arguments>`. Ex: `DataCMD sudocmd home`. 

`1.0.16`
- Adding a small navigation menu on the game escape menu

## Fixes
`1.0.14`
- API file was missing from the archive

`1.0.15`
- The color picker now display color preview in sRGB. Meaning it should match more closely things like chat text/role colors.