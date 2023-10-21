# Tot ! Admin 0.1.0 (Alpha)
## API
`0.1.0`
- Adding new warp API
- Adding new Kit API
- Adding Map Marker Icon Datatable

## Wipes
> I know it is not funny to wipe some of your data, and believe me I have better things to do than spending multiple days moving my code around and making you start over again. The reason is simple. I became aware of an Unreal Engine bug that did not yet appear on my mod. This bug might have triggered critical crash when trying to load the mod at all, and I did not want to risk getting into that situation at all. So I moved my code to avoid the potential issue all together. Wiping the data should not be needed anymore in the futur, but sometimes, shit happen.</p>
- Warp list
- Map Markers
- Server rules

## New
`0.1.0`
- Dynamic Post Processing (See dev demo in the video section)
- Increasing the maximum amount of warps
- Increasing the maximum amount of kits
- Improve the warp list: Reorderable and remove the need to manage ID names
- Improve the kit list: Reorderable and remove the need to manage ID names
- Permission to allow a user to see the clan of a character in the `/list players` command.`

`0.1.0c`
- Permission to allow a user to see the count of online players in a clan when using `/list clans`.

`0.1.1`
- Adding "not" flag to role rule and has tags rule. This will invert the function of the rule, looking for a role or a tag respectively to forbid the access.

## Changes/Improvements
`0.1.0`
- The "Has Tag" rule is now "Has Tag(s)", allowing to put multiple tag separated by a coma to have multiple that clear the rule. Only one is needed. To require multiple on a character, you would add multiple time the rule with one tag in each.
- Removed the need to specify an ID when placing a marker on the map
- Portal light is now influenced by the color glow and alpha
- Improved /list players and /list clans display
- /list players and /list clans are now in alphabetical order.

`0.1.1`
- Improved rule list UI
- Add the amount of characters inside a clan on the admin map



## Bug Fixes
`0.1.0`
- /clan was sometime leaving you out of clan

`0.1.0b`
- Portal did not work properly

`0.1.0c`
- Kit window was broken
- Realtime rule widget was displaying the wrong server time
- Warp window was broken

`0.1.1`
- Creating a warp through the menu was not setting the position and rotation right
- Increased the amount of characters allowed in the HasTag(s) rule

## Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/fxzaE5oZiVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>