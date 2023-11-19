# Todo List

## Current Roadmap
- [ ] Admin 0.6.x stuff
- [ ] Roleplay Redux Nameplate integration
- [ ] Puppet Dice Sheet Integration
- [ ] Immersive Hud Map
- [ ] Admin 1.0.0
- [ ] Custom Accessory panel rework

## Tot ! Admin
- [ ] Invisible Walls that work like box zones `Next 0.6.x` `1/4`
- [ ] Scripted chest to spawn kits in `0.6.x` `1/2`
- [ ] /trigger command to trigger a tool at a distance `0.6.x` `1/4`
- [ ] More tools from "Soleil Couchant"
    - [ ] Soundboard `0.6.x` `1`
    - [ ] Warper Wand `0.6.x` 1/4
    - [ ] Wallhack using Universal nameplate `0.6.x` `Waiting RPR`
    - [ ] Model Picker/Placer `0.6.x` `1/2`
    - [ ] Hunting Horn (Linked to soundboard API) `0.6.x` `Waiting soundboard`
    - [ ] Extended Range on horn instruments (linked to soundboard API) `0.6.x` `Waiting soundboard`
- [ ] Map markers on warp HUB `1.0.x`
- [ ] Manipulte weather and time of day (IGS) `1.0.x`
- [ ] Integrate RR Dice Sheet on Puppets `0.6.x`
- [ ] Admin Clan List `0.6.x`
- [ ] In Game Scripting (IGS) `1.0.x`
- [ ] Events Collector Area `1.0.x`
- [ ] Kits in kits `1.0.x`
- [ ] Feat in kits `1.0.x`
- [ ] /summon multiple character separated by a comma `1.0.x`
- [ ] Selector: Copy/Cut/Paste Buildings

## Tot ! Chat
- [ ] Death Announcements
- [ ] Link in messages
- [ ] Separate emote formating
- [ ] Chat 2.0
    - [X] Adding Guid to message struct so we can allow past edition
    - [ ] No struct in API functions
    - [ ] Remove access to language and range management from API. The UI exists for that.
    - [ ] Remove the use of the API internally, and separate the API from the rest.
    - [ ] Chat System need to be an Actor, not a component
    - [ ] Channels use GUID
    - [ ] Companion use GUID
    - [ ] Channels are persistent with X amount of cache
    - [ ] Channels remember who is connected to them with GUID
    - [ ] Channels notify when empty
    - [ ] Local channels will remained cached on client side.
    - [ ] Language ID → GUID
    - [ ] Range ID → GUID
    - [ ] Improve Add/Remove listener API with returns
    - [ ] Improve Focus mode to be retro active on messages
    - [ ] Add a folding message for focus mode
    - [ ] Range physical visualization (Circle Shader)
    - [ ] Splitting channels in multiple windows
    - [ ] Admin channel panel: List all existing channel and allow to delete them
    - [ ] RCON Support
    - [ ] Second Range for speech ranges, post an emote about being too far to hear something

## Tot ! Custom
- [ ] Accessory panel rework `1.6.x`
    - [ ] Groupe accessories icons, with a single editor. 
    - [ ] Ability to select multiple of them and edit all their parameters in common (Shift + Click)
    - [ ] Better 3D bone selection
    - [ ] Piece Mirror `Experimental`
    - [ ] Piece Flip Axis `Experimental`
    - [ ] Swaping a bone without moving the accessory in world space
- [ ] Voice Selector
- [ ] Profile Quick Deletion Mode
- [ ] Teeth Coloring
- [ ] Investigate faction voice line for NPC
- [ ] Add a new item ban rule: Unlock or Item in bag/equiped
- [ ] Texture Merger `Experimental`
- [ ] Accessory Mirror Toggle `Experimental`
- [ ] Material overlay `Experimental`
- [ ] Hide Editor Button
- [ ] Foot steps sound selection
- [ ] Partial Body application
- [ ] Alternative sweat specular
- [ ] Warpaint Glow
- [ ] Shoe/Hat Stand
- [ ] Saddle Tinting
- [ ] Emote/Pose designer `Experimental`

## Tot ! Hud
- [ ] Toggle Cursor with special input
- [ ] Realtime Clock with server reboot warning
- [ ] Allow to separate stat small bars to another location
- [ ] Alternative World Map
- [ ] Optional Simpler Sun/Moon game clock
- [ ] Interactable widget HUD integration
- [ ] Simple Damage Display
- [ ] Minimap Z Order issue with chat box

## Tot ! Roleplay Redux
- [ ] Custom Status text is displayed as \<span color="#hex"\> instead of the actual colored text
- [ ] Integrate the Universal Nameplate to replace the original
- [ ] Integrate the math library to replace the original
- [ ] Quick Search (CTRL + K) on panels
- [ ] Alphabetical order for menus
- [ ] Store backup as a .sav rather than downloading/uploading a Json text

## Tot ! Sudo
- [ ] Quick Search (CTRL + K) on panels
- [ ] Alphabetical order for menus
- [ ] Store backup as a .sav rather than downloading/uploading a Json text
- [ ] Make the command fallback display notification and error in the vanilla console

## Tot ! Trebuchet
- [ ] Allow navigating the workshop mods while on testlive
- [ ] Separate UI text for later translation system

## Tot ! Walk
- [ ] Prevent attacks under a target speed (selectable)
- [ ] Counter act the agility bonus under a selectable speed
- [ ] Animation: Improve horse blending

## Library
- [ ] Rework the placeable editor
- [ ] New Item Lookup supporting multiple selection
- [ ] Improve 3D editor use cases