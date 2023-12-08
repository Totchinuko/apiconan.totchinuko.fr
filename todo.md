# Todo List

## Current Roadmap
- [ ] Admin 0.6.x stuff
- [X] Roleplay Redux Nameplate integration
- [ ] Puppet Dice Sheet Integration
- [ ] Immersive Hud Map
- [ ] Admin 1.0.0
- [ ] Custom Accessory panel rework

## Tot ! Admin
- [X] Sphere Interaction Not Saving Rules on Server Restart
- [X] No building in admin map
- [X] More decimals on trader item tooltip for armor penetration
- [X] NPC Search by row ID
- [X] Has RPR Perk Rule
- [X] Has RPR Stat Above/Under/Equal
- [X] Toggle to add loot to a corpse rather than replacing
- [X] Random Spawn Roll for spawners
- [X] Puppet name is still visible after reload of the server using visibility schedule
- [X] Invisible Walls that work like box zones
- [X] Typo in quest editor: Categories are in "General Settings", not "Server Settings".
- [X] Scripted chest to spawn kits in
- [X] Scripted door and chest do not work on admin map
- [X] Improve Scripted door with scripted chest technique
- [X] /trigger command to trigger a tool at a distance
- [X] Add/Remove/Toggle Global tag
- [X] Toggle CharTag
- [X] Add fail objective mode to quest
- [X] Add Global Tag Objective to quest
- [X] Add Global/Char Increment action
- [X] Add Number Condition to quest obj
- [X] Improve complete quest button clarity
- [X] Remaining cooldown for quest
- [X] Kill Count in char var
- [X] Add char float rule above/under/equal
- [X] Fix give quest checking for replayability of a quest when  enforce rules is off 
- [X] Deprecate Give Role, Give Tag, Give Kit, Warp To, Notify, Give Quests, Remove Quests
- [X] Rule: Player/Clan id
- [X] Improve Spawn/Point Emote naming somehow ?    
- [X] Multiple quest points display the same (RPC need a filter)
- [X] Fix identity rule missing a not field
- [X] Typo in some rule "requiered"
- [X] Radial menu for scripted chest indicated scripted doors
- [X] Invisible walls is not appearing in the tool master list
- [X] Rename invisible wall window
- [X] Remove events from invisible wall
- [X] Add a gateway to the warp code, and avoid a stack overflow
- [X] Completed quest in log display abandon button
- [X] Display rule messages on interaction sphere
- [X] Enforce warp rules on action trigger seems to be stuck by the "Allow using command" checkbox when off
- [X] A way to disable the character night lights
- [X] Somehow custom NPC don't have a name or their base name
- [X] Sphere interaction do not stop execution with rules
- [X] Selector item not usable
- [X] Typo on role edit
- [ ] More tools from "Soleil Couchant"
    - [X] Soundboard
        - [X] Preview toggle is broken
        - [X] Sometime preset duplicated ?
        - [X] Preview on right click ?
        - [X] Set default icon when droping sound
        - [X] Test LPF
        - [X] 300ms ish of delay between sound cast for performance
        - [X] Being able to change the sound of a preset
        - [X] Random Pitch/Volume range
    - [ ] Warper Wand
    - [ ] Wallhack using Universal nameplate
    - [ ] Model Picker/Placer
    - [ ] Hunting Horn (Linked to soundboard API)
    - [ ] Extended Range on horn instruments (linked to soundboard API)
- [ ] Rule: Has quest in category
- [ ] Action: Deal Damage
- [ ] Action: Edit Player Int Stat
- [ ] Action: Edit Player Float Stat
- [ ] Copy Admin Tools somehow ?
- [ ] Better velocity transition for short warps (Manual exit vector ?)
- [ ] Try to edit tools "live"
- [ ] Projectile Launchers
- [ ] Player wallpaper
- [ ] Kit use for NPC equipment swap
- [ ] Scripted Resource Spawn
- [ ] Integrate RR Dice Sheet on Puppets
- [ ] Admin Clan List
- [ ] Configurable duration for notifications
- [ ] In Game Scripting (IGS) `1.0.x`
- [ ] Map markers on warp HUB
- [ ] Manipulte weather and time of day (IGS)
- [ ] Events Collector Area
- [ ] Kits in kits
- [ ] Feat in kits
- [ ] /summon multiple character separated by a comma
- [ ] Selector: Copy/Cut/Paste Buildings `Experimental`
- [ ] Babies do not seems to be tradable

## Tot ! Chat
- [X] Improve look and feel of bubbles
- [X] Bubbles are only displayed when setting own bubble is ticked
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
- [X] Fix Coffee Bean bug
- [X] Add a close button on the panel
- [X] Deactivate vanilla customization
- [X] Add new mods from creators
- [X] Update Edrein textures
- [ ] Accessory panel rework `1.6.x`
    - [ ] Groupe accessories icons, with a single editor. 
    - [ ] Ability to select multiple of them and edit all their parameters in common (Shift + Click)
    - [ ] Better 3D bone selection
    - [ ] Piece Mirror `Experimental`
    - [ ] Piece Flip Axis `Experimental`
    - [X] Swaping a bone without moving the accessory in world space
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
- [X] Custom Status text is displayed as \<span color="#hex"\> instead of the actual colored text `bug`
- [X] Integrate the Universal Nameplate to replace the original
- [X] Bio pops up even when empty
- [ ] Selected distance in Tot ! Chat does not affect roll distance as it should
- [ ] Ability to set/increment float/tag/string
- [ ] Integrate the math library to replace the original

## Tot ! Sudo
- [X] Item lookup window should not be a fullscreen type `1.0.18` `bug`
- [X] Add a separated thrall hide all names param
- [X] Clan display on offline page is not refreshed properly `Can't fix`
- [ ] Quick Search (CTRL + K) on panels
- [ ] Alphabetical order for menus
- [ ] Store backup as a .sav rather than downloading/uploading a Json text
- [ ] Make the command fallback display notification and error in the vanilla console

## Tot ! Trebuchet
- [X] Allow navigating the workshop mods while on testlive
- [ ] Individual update button on mods
- [ ] Log Filter to event
- [ ] Shutdown event sequence
- [ ] Mod update/Server update auto reboot
- [ ] Separate UI text for later translation system

## Tot ! Walk
- [ ] Prevent attacks under a target speed (selectable)
- [ ] Counter act the agility bonus under a selectable speed
- [ ] Animation: Improve horse blending

## Library
- [ ] Rework the placeable editor
- [ ] New Item Lookup supporting multiple selection
- [ ] Improve 3D editor use cases