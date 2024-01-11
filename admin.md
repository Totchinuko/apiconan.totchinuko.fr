# Tot ! Admin API <small>WIP</small>
## API Download

!> **Install instructions**\
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Tot!Admin 0.6.7](/API/TotAdmin.0.6.7.zip ':ignore')

## Move Tool Tags
Adding the following tags to a placeable actor tags will have the given effect on the move tool.

`disable_move_command` Will completely prevent the use of the move tool on this placeable.  
`disable_move_scale` <small>0.2.0+</small> Disable the possibility to scale a placeable being moved.  
`disable_move_rotate` <small>0.2.0+</small> Disable the possibility to Rotate/Tilt a placeable being moved.  

## Data tables
### Tot_DT_MapMarkerIconTable <small>0.1.0+</small>
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_MapMarkerIconTable`  
You can add new map marker icons with this table. Just need a name and a texture.

### Tot_DT_InteractionModules <small>0.4.0+</small>
`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_InteractionModules`  
Add new puppet modules

## Warp API <small>0.1.0+</small>

### Tot_I_Warp <small>interface</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_Warp`
> #### How to ?
> To get the warp manager, simply use `GetAllActorWithInterface` node, and search for this interface.

#### Tot_TeleportCharacter <small>server</small>
Teleport the character to the given position using Tot ! Admin internal teleport mechanism. Meaning you can record a return, and teleportation under 200m will be without loading screen.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character|Player character reference|
|Vector|Position|Target location|
|Rotator|Rotation|Target rotation|
|bool|RecordReturn|Record previous position for use with /return|
|bool|SnapToGround|Should the game snap the character on the ground to avoid falling under the map|

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### Tot_GetWarpHeaders <small>server</small>
Get the list of all warp Headers that are currently saved on the server. Header contain the Guid and name of the warp.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|struct|Headers[]||
<!-- tabs:end -->

#### Tot_GetWarp <small>Server</small>
Get the warp data from its Guid.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|Guid||

#### **Output**
|type|name|description|
|-|-|----|
|string|Name||
|vector|Position||
|rotator|Rotation||
|bool|IsSpawn||
|bool|IsEnabled||
|bool|SnapToGround||
|bool|Found||
<!-- tabs:end -->

#### Tot_SendCharacterHome <small>Server</small>
Send a character to its recorded home, if he have any.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|bool|EnforceRules||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### Tot_SetCharacterHome <small>Server</small>
Update the character home
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|vector|Position||
|rotator|Rotation||
|bool|EnforceRules||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### Tot_CheckWarpRules <small>Server</small>
Check if a character pass the global warp rules and target warp rules.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### Tot_ClearCharacterHome <small>Server</small>
Delete any home the given character could have.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### Tot_FindWarp <small>Server</small>
Find a warp Guid from a name or partial name.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Name||

#### **Output**

|type|name|description|
|-|-|----|
|Guid|Guid||

<!-- tabs:end -->

#### Tot_WarpCharacter <small>Server</small>
Warp a character to a given warp Guid.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|Guid|Guid||
|bool|EnforceRules||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

## Kit API <small>0.1.0+</small>
### Tot_I_Kit
`ModsShared/SudoExile/TotAdmin/Tot_I_Kit`
> #### How to ?
> To get the warp manager, simply use `GetAllActorWithInterface` node, and search for this interface.

#### Tot_GetKitHeaders <small>Server</small>
Get the list of all kit Headers that are currently saved on the server. Header contain the Guid and name of the kit.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|struct|Headers[]||

<!-- tabs:end -->

#### Tot_FindKit <small>Server</small>
Find a kit Guid from a name or partial name.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Name||

#### **Output**

|type|name|description|
|-|-|----|
|Guid|Guid||

<!-- tabs:end -->

#### Tot_CheckKitRules <small>Server</small>
Check if a character pass the target kit rules.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### Tot_GiveKit <small>Server</small>
Attempt to give a Kit to the target character. This can fail if the rules do not pass, if the inventory is too full or if the kit contains items the character cannot spawn (DLC not owned for example)
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|BasePlayerChar|Character||
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

## Creating an Action Module <small>0.5.1+</small>
An action module is essentially a task for an actor event. This will be something like "Start trading", "Execute a script", "Warp there", etc... It is what happen when you trigger a configured event from an actor, like "Interacting with a puppet" or "Entering a zone". In this section I will explain how to create a module.

For starter, you want to create two file, an `Actor` based on the class `Tot_A_InteractionModule` and a `UserWidget` that implement the interface `Tot_I_ActionModuleGUI`. The Actor simply serv as a trigger, calling the function Interact when someone interact with the puppet, what you do from there is up to you. You'll also need to add a module entry into the datatable `Tot_DT_InteractionModules`

### Tot_A_InteractionModule
`ModsShared/SudoExile/TotAdmin/Types/Tot_A_InteractionModule`

#### Interact <small>Server</small>
Triggered when a Puppet is interacted with while your module is on.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Actor|TargetActor||
|Name|ModuleRow||
|BasePlayerChar|Character||

#### **Output**

void

<!-- tabs:end -->

On the UserWidget side, you'll implement the `Tot_I_ActionModuleGUI` on it.

### Tot_I_ActionModuleGUI
`ModsShared/SudoExile/TotAdmin/Tot_I_ActionModuleGUI`

#### SetData <small>Client</small>
When the user open the widget, this is called to give you the EventAction type and your stored data. The EventAction is essentially the event id that your module is tied to. Data is serialized, so you'll have to serialize/deserialize yourself.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|EventAction||
|string|Data||
|BasePlayerChar|Character||

#### **Output**

void

<!-- tabs:end -->

#### GetData <small>Client</small>
When the user hit save, this will be called to retrieve the data and save it on the server. Data is serialized, so you'll have to serialize/deserialize yourself.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Name|EventAction||
|string|Data||

<!-- tabs:end -->

That should cover up all the steps you need to create a module, if you did everything correctly, your module should show up in the list of modules when editing a puppet.

## Quest API <small>0.6.7+</small>

### Tot_I_QuestManager <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_QuestManager`

Available on the quest manager (ModController)

#### TotStartQuest <small>Server</small>
Attempt to start a quest for a given player. Use force to ignore rules and quest already completed
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|ConanCharacter|Character||
|Guid|QuestGuid||
|Boolean|Force||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### TotCompleteQuest <small>Server</small>
Attempt to validate an on going quest for a given player. Use force to complete a quest where not all the objectives have been completed.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|ConanCharacter|Character||
|Guid|QuestGuid||
|Boolean|Force||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||

<!-- tabs:end -->

#### TotGetQuestHeaders <small>Server</small>
Get the list of all quests defined on the server.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Tot_S_APIGuidHeader[]|Return||

<!-- tabs:end -->

### Tot_I_PlayerQuestTracker <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_PlayerQuestTracker`

Available on an `ActorComponent` on the `BasePlayerChar`

#### TotHasQuest <small>Server</small>
Check if the player has a quest, either on going, completed, validated or failed.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

|type|name|description|
|-|-|----|
|Boolean|Return|Is the quest in the log at all|
|Boolean|Completed|All objectives completed|
|Boolean|Validated|Reward has been given|
|Boolean|Failed||

<!-- tabs:end -->

#### TotRemoveQuest <small>Server</small>
Remove a quest from the player log, no matter its status
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

void

<!-- tabs:end -->

### Tot_I_QuestPlayerEvents <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_QuestPlayerEvents`

Implement this on on of your `ActorComponent` on the `BasePlayerChar` to automatically receive events from the QuestTracker of that player.

#### TotOnQuestComplete <small>Server</small>
Received when the player completed all the objectives of a quest
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

void

<!-- tabs:end -->

#### TotOnQuestValidated <small>Server</small>
Received when the quest is over and the reward has been given
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

void

<!-- tabs:end -->

#### TotOnQuestStarted <small>Server</small>
Received when a quest has been added to the player log
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

void

<!-- tabs:end -->

#### TotOnQuestFailed <small>Server</small>
Received when a quest has been failed
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|QuestGuid||

#### **Output**

void

<!-- tabs:end -->

## Spawn API <small>0.6.7+</small>

### Tot_I_Spawner <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_Spawner`

Available on admin tools `Actor` of type `Spawner`. Use `Tot_I_AdminTool` interface to know the type of a tool, and `Tot_I_ToolManager` to access the tool search.

#### TotSpawnCreature <small>Server</small>
Trigger a single spawn from the spawn table of the spawn (This can lead to multiple creature spawn depending on the spawner settings)
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Guid|RequestGuid||

<!-- tabs:end -->

#### GetSpawnedCreatures <small>Server</small>
List all `ConanCharacter` spawned by this specific spawner.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|ConanCharacter[]|Return||

<!-- tabs:end -->

#### KillSpawnedCreatures <small>Server</small>
Kill all creatures spawned by this specific spawner.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void

<!-- tabs:end -->

#### DespawnSpawnedCreatures <small>Server</small>
Despawn all creatures spawned by this specific spawner. They will simply vanish.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void

<!-- tabs:end -->

### Tot_I_SpawnEvent <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_SpawnEvent`

Implement this on of your `ModController` to automatically receive events from the `Tot_I_SpawnManager`

#### TotOnCreatureSpawn <small>Server</small>
Received when an NPC was spawned by the manager. NPCs are spawned using a spawn queue to avoid server slow downs. RequestGuid will be equal to the Guid provided when the spawn was requested.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|RequestGuid||
|Name|Row|Spawn table row ID or Guid for custom NPC|
|ConanCharacter|Character||

#### **Output**

void

<!-- tabs:end -->

### Tot_I_SpawnManager <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_SpawnManager`

Available on a `ModController`, this manages the spawn queue and spawn orders.

#### TotSpawnCreature <small>Server</small>
Received the spawn of an NPC. NPC are spawned using a queue to avoid server slow downs, this can take a moment depending on the queue length.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|RequestGuid||
|Name|Row|Spawn table row ID or Guid for custom NPC|
|Transform|Transform|Location and Rotation of the NPC. Scale is ignored|
|ECharacterEmote|Emote|Initial idle emote|
|String|PointUID|Unique ID of the first patrol Point (Optional)|
|Float|RoamRadius|Distance in foundation unit for the NPC to roam around. Set 0 for a static NPC|
|Boolean|IgnoreAILOD|Should the NPC continue to navigate when no player are around|
|Float|InitialSpeed|Initial movement speed (Human, 150walk, 450run, 650sprint)|
|Boolean|PrioritySpawn|Should this spawn request be added in front of the queue|

#### **Output**

void

<!-- tabs:end -->

#### AddAINavigation <small>Server</small>
Add the navigation component to an NPC. This component is always added on NPC spawned using the `Tot_I_SpawnManager` and is only useful for other NPC. Must be an AI controlled NPC. 
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|ConanCharacter|Character||

#### **Output**

|type|name|description|
|-|-|----|
|Tot_I_CreatureNavigation|Return||

<!-- tabs:end -->

#### TotGetCustomNPCHeaders <small>Server</small>
List all the custom NPC defined on the server.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Tot_I_APIGuidHeader[]|Return||

<!-- tabs:end -->

## Navigation API <small>0.6.7+</small>

### Tot_I_CreatureNavigation <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_CreatureNavigation`

Available on an `ActorComponent` on an AI controlled NPC. Is automatically added on any NPC spawned using the `Tot_I_SpawnManager` or manualy using `Tot_I_SpawnManager.AddAINavigation`

#### TotSetPatrol <small>Server</small>
Set an `Tot_I_AdminTool` of type `TotPoint` and proceed to walk toward it. Nothing will happen if the UID is incorrect or point toward something different.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|String|PointUID|Unique ID of the TotPoint|

#### **Output**

void

<!-- tabs:end -->

#### TotStopPatrol <small>Server</small>
Cancel a patrol and stop the NPC
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void

<!-- tabs:end -->

#### TotSetDestination <small>Server</small>
Set manualy a destination for the NPC and proceed to walk toward it.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Vector|Destination|3D space destination point|

#### **Output**

void

<!-- tabs:end -->

#### TotSetIdleEmote <small>Server</small>
Set the emote to play when the NPC is Idle
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|ECharacterEmote|Emote||

#### **Output**

void

<!-- tabs:end -->

#### TotStopMovement <small>Server</small>
Stop the NPC
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void

<!-- tabs:end -->

#### TotSetRoamingRadius <small>Server</small>
Distance (in foundation unit) for the NPC to walk around when idle. Center will bet the last destination point or patrol point.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Float|Radius||

#### **Output**

void

<!-- tabs:end -->

#### TotSetIgnoreAILOD <small>Server</small>
Should the NPC continue to navigate when no player is around? Use with caution, too many NPC ignoring LOD can add server strain. This is usually used during purges.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Bool|IgnoreAILOD||

#### **Output**

void

<!-- tabs:end -->

#### TotSetSpeed <small>Server</small>
Set walk speed. For humans, 150 is walking, 450 is running, 650 is sprinting.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Float|Speed||

#### **Output**

void

<!-- tabs:end -->

#### TotGetCurrentPatrolPoint <small>Server</small>
Return the current `TotPoint` used for the patrol. 
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Actor|Return||

<!-- tabs:end -->

#### TotIsMoving <small>Server</small>
Return true if the npc is currently walking toward a patrol point or manual destination, false when idling.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Boolean|Return||

<!-- tabs:end -->

### Tot_I_CreatureNavigationEvent <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_CreatureNavigationEvent`

Implement this interface on your `ActorComponet` to automatically received events from `Tot_I_CreatureNavigation`

#### TotOnArrivedToDestination <small>Server</small>
Received when the NPC as reached is destination and will either go to the next patrol point or idle.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void

<!-- tabs:end -->

## Admin Tool API <small>0.6.7+</small>

### Tot_I_AdminTool <small>0.6.7+</small>
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

#### GetToolInfo <small>Server</small>
Received when the NPC as reached is destination and will either go to the next patrol point or idle.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|String|Name||
|String|UID|Funcom Unique ID|
|Name|Type||

<!-- tabs:end -->

### Tot_I_ToolManager <small>0.6.7+</small>
`ModsShared/SudoExile/TotAdmin/Tot_I_ToolManager`

Available on a `ModController` and give access to various Admin tools search functions.

#### GetToolsByName <small>Server</small>
Search tools with a name equal or partially equal to the name provided. Use `AdminTool` as a type to get any type of tool.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|String|Name||
|Name|ToolType||

#### **Output**

|type|name|description|
|-|-|----|
|Actor[]|Return||

<!-- tabs:end -->

#### GetToolByUID <small>Server</small>
List tools corresponding to a list of UID
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|String[]|UID||

#### **Output**

|type|name|description|
|-|-|----|
|Actor[]|Return||

<!-- tabs:end -->

#### GetToolByType <small>Server</small>
List all the tools of a given type.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|ToolType||

#### **Output**

|type|name|description|
|-|-|----|
|Actor[]|Return||

<!-- tabs:end -->

## Quest Category Icon Table <small>0.5.9+</small>

`ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_Icons`

Use this table to add new icons that can be used for quests categories. Those icons might be used in the future for other things.

## Cross Mod Event <small>0.2.0+</small>

> #### How to?
> See the corresponding doc on [Tot ! Library](lib?id=tot_i_crossmodevent) on how to listen and send such event

#### TotPuppetIncarnate <small>Server</small>
Raised on `PuppetActor`   
Raised when a player has taken the place of a puppet, taking its appearance, stats, languages, etc...

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[BasePlayerChar]||

#### TotPuppetDeincarnate <small>Server</small>
Raised on `PuppetActor`   
Raised when a player is no longuer a given puppet. Puppet is made visible again and take the previous spot of the player.

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[BasePlayerChar]||

