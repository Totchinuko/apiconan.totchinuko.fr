# Conan Exiles Enhanced Texture Conversion

This is an attempt at offering an automated conversion for skin/armor textures. It can process batches of textures at once. It's not perfect, but I tried to have it as close as possible. Let me know if you're running into some issues.

[Download Archive](/API/LegacyToEnhanced_Substance.zip ':ignore')

## Requirements
- Adobe Substance Designer (preferably the last version, but I've not tested the older ones, it could work). It needs to be installed, but the program doesn't need to run. 
- Python 3 ([Download](https://www.python.org/downloads/)

## Usage

- Extract the content of the archive somewhere of your choosing, keep the empty folders Legacy/Enhanced, they will be useful.
- If Designer is not installed at its typical location (In program files), open the .py script with a text editor and edit the path located between the warning sign, put your Substance designer location between the quotes, touch nothing else.
- Place your legacy textures in the Legacy folder, with the following naming conventions:
  - Normal map names must end by _N
  - Base Color names must end by _D
  - Opacity map names must end by _O
  - ORM Mask names must end by _M
  - Tintmap names must end by _TM

- All textures that are the same group should be named the same at the exception to their suffixes.
- You don't need to provide all the textures either, but the BaseColor must be accompanied of its mask. 
- Do not mix batches of body skin, and armor, the process is slightly different between the two.
- Once you are ready, run the py script with python, you might need to change the default program of py files and select python.
- Once the script start it will ask you which graph to execute:
  - Graph 1 is for body skin, which include BCR and NCD, from BaseColor, Normal and Mask.
  - Graph 2 is for armors, which include BCRO, NCD_Mask, and RGN_Mask from BaseColor, Normal, Mask, Tintmap and optionally an Opacity map.
- Type the number to select the graph and press Enter. Legacy textures will be left untouched, the output of the script will be placed into the Enhanced folder.
- Be sure to keep the suffixes the script create the new textures with. They are identified by the Mod Kit and your texture are properly configured on import by the editor.