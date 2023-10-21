# Tot ! Admin 0.2.x (Alpha)

## API
`0.2.0`
- Adding puppet base Actor so modders can add ActorComponent on it
- Adding Interactive Module API. This will allow a third party mod to add new modules to puppets for their own needs

## New
`0.2.0`
- Puppets. Those are Thespian equivalent with extra features. No Mushi equivalent and not economy for now, but its coming.<br>Current features:
    - Name with nameplate
    - Chat support with puppet link and bubbles
    - Vanilla or Tot!Custom customization
    - 2 Layer Emote system, with support for RPR animations
    - Compatible with Move tool
    - Incarnate/Deincarne command: Take the appearance and place of a puppet and have the puppet take your place when you deincarnate it.

`0.2.3`
- Global Admin Tool list: List all the portals, puppets and post process anchor placed on the map. You can locate, delete and edit them where ever they are without needing to got there.

## Changes/Improvements
`0.2.0`
- You can now use the move tool on a Post Process Anchor

`0.2.1`
- Adding a proper visual clue to puppets so you can better spot invisible ones

`0.2.2`
- Added puppet emote delay, so you can put some delay between each loop of an emote

`0.2.3`
- Portal are now ownerless. You simply need the proper permission to edit/place them.

## Bug Fixes
`0.2.0`
- Dismanteling a post process anchor does not require to be logged as vanilla admin anymore, but require to have the post process edit permission.
- Improved post process priority refresh
- Post process offset sliders did not have the proper bounds and default values
- Kits did not give the proper amount of attributes and knowledge points

`0.2.1`
- Missing permission check when using the puppet placer
- Invisible command was conflicting with various other mods
- Move info widget was not closing
- Nameplate was not displayed when Tot!Chat was not installed
- Nameplate was not visible when the visual clue were active
- Disabling Nameplates in Tot!Chat was also removing nameplates on puppets, leaving them with none

`0.2.2`
- Removed RPR compatibility and disable arms layer as this could trigger game freeze. Better support will have to wait
- Role rule in server settings did not refresh the save button properly when adding/removing roles.