# Tot ! Admin API <small>WIP</small>
## API Download

!> **Install instructions**\
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Tot!Admin 0.5.1](https://cdn.discordapp.com/attachments/1054782906251366401/1123610788242935838/TotAdmin.0.5.1.zip)

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
