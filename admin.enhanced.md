# Tot ! Enhanced Admin API <small>WIP</small>
## API Download

[API Download Page](api-download)

## Scripting
Scripting has [its own dedicated page](scripting).

## Move Tool Tags
Adding the following tags to a placeable actor tags will have the given effect on the move tool.

`disable_move_command` Will completely prevent the use of the move tool on this placeable.  
`disable_move_scale` Disable the possibility to scale a placeable being moved.  
`disable_move_rotate` Disable the possibility to Rotate/Tilt a placeable being moved.  

## Data tables
### Tot_DT_MapMarkerIconTable
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_MapMarkerIconTable`  
You can add new map marker icons with this table. Just need a name and a texture.

### Tot_DT_InteractionModules
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_InteractionModules`  
Add new action modules

### Tot_DT_Icons
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_Icons`  
Add new icons to !Admin. Those are used only for quest categories for now.

### Tot_DT_ResourceSpawnerTable
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_ResourceSpawnerTable`  
Add new resources available with the resource spawner

### Tot_DT_SoundLibrary
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_SoundLibrary`  
Add new sound to the sound library, used for the soundboard and future sound played through scripting.

## Warp API

### Tot_I_Warp
`ModsShared/SudoExile/TotAdmin/Tot_I_Warp`
> #### How to ?
> To get the warp manager, simply use `GetAllActorWithInterface` node, and search for this interface.

#### Tot_TeleportCharacter <small>server</small>
```csharp
function Tot_TeleportCharacter(BasePlayerChar character, Vector position, Rotator rotation, bool RecordReturn, bool SnapToGround, out bool IsSuccess, out string ErrorMessage);
```
Teleport the character to the given position using Tot ! Admin internal teleport mechanism. Meaning you can record a return, and teleportation under 200m will be without loading screen.

#### Tot_GetWarpHeaders <small>server</small>
```csharp
function Tot_GetWarpHeaders(out Header[] headers);
```
Get the list of all warp Headers that are currently saved on the server. Header contain the Guid and name of the warp.

#### Tot_GetWarp <small>Server</small>
```csharp
function Tot_GetWarpHeaders(Guid guid, out string name, out Vector position, out Rotator rotation, out bool IsSpawn, out bool IsEnabled, out bool SnapToGround, out bool Found);
```
Get the warp data from its Guid.

#### Tot_SendCharacterHome <small>Server</small>
```csharp
function Tot_SendCharacterHome(ConanCharacter character, bool EnforceRules, out bool IsSuccess, out string ErrorMessage);
```
Send a character to its recorded home, if he have any.


#### Tot_SetCharacterHome <small>Server</small>
```csharp
function Tot_SetCharacterHome(ConanCharacter character, Vector position, Rotator rotation, bool EnforceRules, out bool IsSuccess, out string ErrorMessage);
```
Update the character main home


#### Tot_CheckWarpRules <small>Server</small>
```csharp
function Tot_CheckWarpRules(ConanCharacter character, Guid WarpGuid, out bool IsSuccess, string ErrorMessage);
```
Check if a character pass the global warp rules and target warp rules.


#### Tot_ClearCharacterHome <small>Server</small>
```csharp
function Tot_ClearCharacterHome(ConanCharacter character, out bool IsSuccess, out string ErrorMessage);
```
Delete any home the given character could have.


#### Tot_FindWarp <small>Server</small>
```csharp
function Tot_FindWarp(string Name, out Guid Guid);
```
Find a warp Guid from a name or partial name.

#### Tot_WarpCharacter <small>Server</small>
```csharp
function Tot_WarpCharacter(ConanCharacter character, Guid WarpGuid, bool EnforceRules, out bool IsSuccess, out string ErrorMessage);
```
Warp a character to a given warp Guid.


## Kit API
### Tot_I_Kit
`ModsShared/SudoExile/TotAdmin/Tot_I_Kit`
> #### How to ?
> To get the warp manager, simply use `GetAllActorWithInterface` node, and search for this interface.

#### Tot_GetKitHeaders <small>Server</small>
```csharp
function Tot_GetKitHeaders(out Headers[] Return);
```
Get the list of all kit Headers that are currently saved on the server. Header contain the Guid and name of the kit.

#### Tot_FindKit
```csharp
function Tot_FindKit(string name, out Guid guid);
```
Find kit by name

#### Tot_CheckKitRules <small>Server</small>
```csharp
function Tot_CheckKitRules(ConanCharacter character, Guid guid, out bool isSuccess, string errorMessage);
```
Check if a character pass the target kit rules.


#### Tot_GiveKit <small>Server</small>
```csharp
function Tot_GiveKit(ConanCharacter character, Guid kitGuid, bool enforceRules, out bool isSuccess, string errorMessage);
```
Attempt to give a Kit to the target character. This can fail if the rules do not pass (When enforced), if the inventory is too full or if the kit contains items the character cannot spawn (DLC not owned for example)


#### Tot_GiveKit_QM <small>Server</small>
```csharp
function Tot_GiveKit_QM(ConanCharacter character, Guid kitGuid, bool enforceRules, float quantityMultiplier, out bool isSuccess, string errorMessage);
```
Attempt to give a Kit to the target character. This can fail if the rules do not pass (When enforced), if the inventory is too full or if the kit contains items the character cannot spawn (DLC not owned for example). It also provide a quantity multiplier to increase or decrease final item quantities.


## Creating an Action Module
An action module is essentially a task for an actor event. This will be something like "Start trading", "Execute a script", "Warp there", etc... It is what happen when you trigger a configured event from an actor, like "Interacting with a puppet" or "Entering a zone". In this section I will explain how to create a module.

For starter, you want to create two file, an `Actor` based on the class `Tot_A_InteractionModule` and a `UserWidget` that implement the interface `Tot_I_ActionModuleGUI`. The Actor simply serve as a trigger, calling the function Interact when someone interact with the puppet, what you do from there is up to you. You'll also need to add a module entry into the datatable `Tot_DT_InteractionModules`

### Tot_A_InteractionModule
`ModsShared/SudoExile/TotAdmin/Types/Tot_A_InteractionModule`

#### Interact <small>Server</small>
```csharp
function Interact(Actor targetActor, Name moduleRow, ConanCharacter character, string data);
```
Triggered when a Puppet is interacted with while your module is on.

On the UserWidget side, you'll implement the `Tot_I_ActionModuleGUI` on it.

### Tot_I_ActionModuleGUI
`ModsShared/SudoExile/TotAdmin/Tot_I_ActionModuleGUI`

#### SetModuleData <small>Client</small>
```csharp
function SetModuleData(Name eventAction, string data);
```
When the user open the widget, this is called to give you the EventAction type and your stored data. The EventAction is essentially the event id that your module is tied to. Data is serialized, so you'll have to serialize/deserialize yourself.


#### GetModuleData <small>Client</small>
```csharp
function GetData(out string data);
```
When the user hit save, this will be called to retrieve the data and save it on the server. Data is serialized, so you'll have to serialize/deserialize yourself.

That should cover up all the steps you need to create a module, if you did everything correctly, your module should show up in the list of modules when editing a puppet.

## Quest API

### Tot_I_QuestManager
`ModsShared/SudoExile/TotAdmin/Tot_I_QuestManager`

Available on the quest manager (ModController)

#### TotStartQuest <small>Server</small>
```csharp
function TotStartQuest(ConanCharacter character, Guid questGuid, bool force, out bool isSuccess, out string errorMessage);
```
Attempt to start a quest for a given player. Use force to ignore rules and quest already completed

#### TotCompleteQuest <small>Server</small>
```csharp
function TotCompleteQuest(ConanCharacter character, Guid questGuid, bool force, out bool isSuccess, out string errorMessage);
```
Attempt to validate an on going quest for a given player. Use force to complete a quest where not all the objectives have been completed.

#### TotGetQuestHeaders <small>Server</small>
```csharp
function TotGetQuestHeaders(out Header[] return);
```
Get the list of all quests defined on the server.

### Tot_I_PlayerQuestTracker
`ModsShared/SudoExile/TotAdmin/Tot_I_PlayerQuestTracker`

Available on an `ActorComponent` on the `BasePlayerChar`

#### TotHasQuest <small>Server</small>
```csharp
function TotHasQuest(Guid guid, out bool return, out bool completed, out bool validated, out bool failed);
```
Check if the player has a quest, either on going, completed, validated or failed.

#### TotRemoveQuest <small>Server</small>
```csharp
function TotRemoveQuest(Guid guid);
```
Remove a quest from the player log, no matter its status

### Tot_I_QuestPlayerEvents
`ModsShared/SudoExile/TotAdmin/Tot_I_QuestPlayerEvents`

Implement this on on of your `ActorComponent` on the `BasePlayerChar` to automatically receive events from the QuestTracker of that player.

#### TotOnQuestComplete <small>Server</small>
```csharp
function TotOnQuestComplete(Guid guid);
```
Received when the player completed all the objectives of a quest

#### TotOnQuestValidated <small>Server</small>
```csharp
function TotOnQuestValidated(Guid guid);
```
Received when the quest is over and the reward has been given

#### TotOnQuestStarted <small>Server</small>
```csharp
function TotOnQuestStarted(Guid guid);
```
Received when a quest has been added to the player log

#### TotOnQuestFailed <small>Server</small>
```csharp
function TotOnQuestFailed(Guid guid);
```
Received when a quest has been failed

## Spawn API

### Tot_I_Spawner
`ModsShared/SudoExile/TotAdmin/Tot_I_Spawner`

Available on admin tools `Actor` of type `Spawner`. Use `Tot_I_AdminTool` interface to know the type of a tool, and `Tot_I_ToolManager` to access the tool search.

#### TotSpawnCreature <small>Server</small>
```csharp
function TotSpawnCreature(out Guid return);
```
Trigger a single spawn from the spawn table of the spawn (This can lead to multiple creature spawn depending on the spawner settings)

#### GetSpawnedCreatures <small>Server</small>
```csharp
function GetSpawnedCreatures(out ConanCharacter[] return);
```
List all `ConanCharacter` spawned by this specific spawner.

#### KillSpawnedCreatures <small>Server</small>
```csharp
function KillSpawnedCreatures();
```
Kill all creatures spawned by this specific spawner.

#### DespawnSpawnedCreatures <small>Server</small>
```csharp
function KillSpawnedCreatures();
```
Despawn all creatures spawned by this specific spawner. They will simply vanish.

### Tot_I_SpawnEvent
`ModsShared/SudoExile/TotAdmin/Tot_I_SpawnEvent`

Implement this on of your `ModController` to automatically receive events from the `Tot_I_SpawnManager`

#### TotOnCreatureSpawn <small>Server</small>
```csharp
function TotOnCreatureSpawn(Guid requestGuid, Name row, ConanCharacter character);
```
Received when an NPC was spawned by the manager. NPCs are spawned using a spawn queue to avoid server slow downs. RequestGuid will be equal to the Guid provided when the spawn was requested.

### Tot_I_SpawnManager
`ModsShared/SudoExile/TotAdmin/Tot_I_SpawnManager`

Available on a `ModController`, this manages the spawn queue and spawn orders.

#### TotSpawnCreature <small>Server</small>
```csharp
function TotSpawnCreature(Guid requestGuid, Name row, Transform transform, enum emote, string pointUid, float roamRadius, bool ignoreAILod, float initialSpeed, bool prioritySpawn);
```
Received the spawn of an NPC. NPC are spawned using a queue to avoid server slow downs, this can take a moment depending on the queue length.

#### AddAINavigation <small>Server</small>
```csharp
function AddAINavigation(ConanCharacter character, out Tot_I_CreatureNavigation return);
```
Add the navigation component to an NPC. This component is always added on NPC spawned using the `Tot_I_SpawnManager` and is only useful for other NPC. Must be an AI controlled NPC. 

#### TotGetCustomNPCHeaders <small>Server</small>
```csharp
function TotGetCustomNPCHeaders(out Header[] return);
```
List all the custom NPC defined on the server.

## Navigation API

### Tot_I_CreatureNavigation
`ModsShared/SudoExile/TotAdmin/Tot_I_CreatureNavigation`

Available on an `ActorComponent` on an AI controlled NPC. Is automatically added on any NPC spawned using the `Tot_I_SpawnManager` or manualy using `Tot_I_SpawnManager.AddAINavigation`

#### TotSetPatrol <small>Server</small>
```csharp
function TotSetPatrol(string pointUid);
```
Set an `Tot_I_AdminTool` of type `TotPoint` and proceed to walk toward it. Nothing will happen if the UID is incorrect or point toward something different.

#### TotStopPatrol <small>Server</small>
```csharp
function TotStopPatrol();
```
Cancel a patrol and stop the NPC

#### TotSetDestination <small>Server</small>
```csharp
function TotStopPatrol(Vector destination);
```
Set manualy a destination for the NPC and proceed to walk toward it.

#### TotSetIdleEmote <small>Server</small>
```csharp
function TotSetIdleEmote(enum emote);
```
Set the emote to play when the NPC is Idle

#### TotStopMovement <small>Server</small>
```csharp
function TotStopMovement();
```
Stop the NPC

#### TotSetRoamingRadius <small>Server</small>
```csharp
function TotSetRoamingRadius(float radius);
```
Distance (in foundation unit) for the NPC to walk around when idle. Center will bet the last destination point or patrol point.

#### TotSetIgnoreAILOD <small>Server</small>
```csharp
function TotSetIgnoreAILOD(bool ignore);
```
Should the NPC continue to navigate when no player is around? Use with caution, too many NPC ignoring LOD can add server strain. This is usually used during purges.

#### TotSetSpeed <small>Server</small>
```csharp
function TotSetSpeed(float speed);
```
Set walk speed. For humans, 150 is walking, 450 is running, 650 is sprinting.

#### TotGetCurrentPatrolPoint <small>Server</small>
```csharp
function TotGetCurrentPatrolPoint(out Actor return);
```
Return the current `TotPoint` used for the patrol. 

#### TotIsMoving <small>Server</small>
```csharp
function TotIsMoving(out bool return);
```
Return true if the npc is currently walking toward a patrol point or manual destination, false when idling.

### Tot_I_CreatureNavigationEvent
`ModsShared/SudoExile/TotAdmin/Tot_I_CreatureNavigationEvent`

Implement this interface on your `ActorComponet` to automatically received events from `Tot_I_CreatureNavigation`

#### TotOnArrivedToDestination <small>Server</small>
```csharp
function TotIsMoving();
```
Received when the NPC as reached is destination and will either go to the next patrol point or idle.

## Admin Tool API

### Tot_I_AdminTool
`ModsShared/SudoExile/TotAdmin/Tot_I_AdminTool`

Available on any `Actor` that is an `AdminTool`

#### AdminTool Type List

Any one of those tools are also of type `AdminTool`  
- Portal
- PostProcessAnchor
- Puppet
- Wallpaper
- Decal
- BoxZone
- SphereZone
- SphereInteraction
- Spawner
- TotPoint
- TotDoor
- TotLight
- TotWall
- TotChest
- TotGameLight
- TotResourceSpawner
- Concealer
- ScriptContainer
- TotMusicTool

#### GetToolInfo <small>Server</small>
```csharp
function GetToolInfo(out string name, out string uid, out Name type);
```
Received when the NPC as reached is destination and will either go to the next patrol point or idle.

### Tot_I_ToolManager
`ModsShared/SudoExile/TotAdmin/Tot_I_ToolManager`

Available on a `ModController` and give access to various Admin tools search functions.

#### GetToolsByName <small>Server</small>
```csharp
function GetToolsByName(string name, Name type, out Actor[] return);
```
Search tools with a name equal or partially equal to the name provided. Use `AdminTool` as a type to get any type of tool.

#### GetToolByUID <small>Server</small>
```csharp
function GetToolByUID(string[] uid, out Actor[] return);
```
List tools corresponding to a list of UID

#### GetToolByType <small>Server</small>
```csharp
function GetToolByType(Name type, out Actor[] return);
```
List all the tools of a given type.

### Tot_I_MoveDuplicable
`ModsShared/SudoExile/TotAdmin/Tot_I_MoveDuplicable`

Implement on a placeable that is movable to make it compatible with the duplication call of the move tool.

#### OnMoveDuplicate <small>Server</small>
```csharp
function OnMoveDuplicate(Transform transform);
```
Called by the move tool when a duplication need to occure. You are responsible on how the duplication happen.

## Cross Mod Event

> #### How to?
> See the corresponding doc on [Tot ! Library](lib?id=tot_i_crossmodevent) on how to listen and send such event

#### TotPuppetIncarnate <small>Server</small>
Raised on `PuppetActor`   
Raised when a player has taken the place of a puppet, taking its appearance, stats, languages, etc...
```csharp
string[] Data = {};
Object[] Context = { BaseplayerChar character };
```

#### TotPuppetDeincarnate <small>Server</small>
Raised on `PuppetActor`   
Raised when a player is no longuer a given puppet. Puppet is made visible again and take the previous spot of the player.

```csharp
string[] Data = {};
Object[] Context = { BaseplayerChar character };
```

#### OnMoveToolStart
Raised on `BasePlayerChar` Actor Components
Raised when a player **start** using the Tot!Admin move tool.

```csharp
string[] Data = {};
Object[] Context = {};
```

#### OnMoveToolStop
Raised on `BasePlayerChar` Actor Components
Raised when a player **stop** using the Tot!Admin move tool.

```csharp
string[] Data = {};
Object[] Context = {};
```

## Inventory Multipliers API

### Tot_I_InventoryMultipliers
`ModsShared/SudoExile/TotAdmin/Tot_I_InventoryMultipliers`

Available on a `ModController` and give access to the curent multipliers in effect on the server.

#### GetMultipliers <small>Server</small>
```csharp
function GetMultipliers(out float stackMultiplier, out float inventoryMultiplier);
```
Return the stack and inventory multiplier currently in effect. **Value strickly inferior to zero (-1) indicate that the feature is off**