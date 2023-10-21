# Tot ! Custom 1.2.x

## New
`1.2.0`
- Alternative Hair Shader - Toggle it in the hair section, it will apply to hairs and beards alike. This is a different more "Classic" rendering for the hairs, so shine sliders will behave differently. It also comes with a detail slider exclusive to this shader so you can control the strenght of the normal map.

`1.2.1`
- Adding new bone socket to bind movable accessories to. Namely socket that are used for weapons in hands.
- Adding shortcuts to the main editor menu to copy and paste the full skin a custom compatible character to another.

`1.2.2`
- Add a lit metal torch to accessories

`1.2.3`
- Add new dyable/movable accessories: a radium lantern accessory, a journal, a leather belt bag and a potion bottle

`1.2.4`
- Add new dyable/movable accessories: 3 gems, 3 leather bags, a pirate hat and a Zath broach.

## Changes/Improvements
`1.2.0`
- Age of Sorcery Chapter 3 - Patch Compatibility

`1.2.2`
- Improved the light radius and intensity of the lantern and glowing stick

`1.2.3`
- Improved the editor preview refresh code to avoid undesired animation refresh

`1.2.4`
- Cache loading will now automatically start on loading screen like before
- Spliting global item rules for the 3 category of items: Accessories, Weapons, and Armors.
- Changing some of the item type icons, static accessories now use a ring icon, movable a move icon, and only armors use a shield icon.

## Bug Fixes
`1.2.1`
- Editing a something directly from the favorites did not properly refresh the favorite list once saved.
- Thralls made before fixing the voice issue did kept the rocknose voice.
- Opening the editor while in FPS view did not show hidden accessories.
- ALT Hair shader was not applied to beard as expected.
- In some scenarios, body, armor, attachement and weapons config was not properly saved on a character and was lost after reboot of the server.