# Tot ! Custom API

## API Download

!> **Install instructions**  
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Tot!Custom 1.5.10](/API/TotCustom.1.5.10.zip ':ignore') 

## Internal Data Tables
### Tot_DT_CustomFieldTable
In this file, you'll find all the parameters that exists in Custom for the body editing, so you can better use the body API. It includes names, ranges, default values, etc... A few special ones in there like the eye copy buttons are obvious not tied to any body data.   
[Download Data](/API/Tot_DT_CustomFieldTable.json ':ignore')

## Data tables
### Tot_DT_AttachmentBlueprints
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_AttachmentBlueprints`

Contains all the actors that need to be attached to the accessory. Want to add light and particles to an
accessory? This is the way.


### Tot_DT_BodyHair
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_BodyHair`

Add new body hair map to body customization.

### Tot_DT_Completion
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_Completion`

For body, hands and face. Those need to be colored texture, not black and white and do not use transparency.
Instead, the background need to be white.

### Tot_DT_EyebrowTracks
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_EyebrowTracks`

New eyebrow tracks. Black and white, where white are the masked area. This need to be mapped with uv1 of a human
head. Not uv0.

### Tot_DT_Eyes
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_Eyes`

Add new Iris to the customization. Red channel is used for the black and white diffuse, green is used to
localize the pupile area. For shape and size, refer to the new vanilla iris (post 3.0)

### Tot_DT_FaceWrinkles
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_FaceWrinkles`

Add wrinkle normal map.

### Tot_DT_FacialHairline
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_FacialHairline`

Hair map for beards. Male only.

### Tot_DT_Hairline
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_Hairline`

Hair map for scalp hairs.

### Tot_DT_IrisMasks
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_IrisMasks`

B&W Masks used for the sectoral customization. Black is primary iris color, white is the second.

### Tot_DT_MovableData
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_MovableData`

This is the extra data used by complexe movable accessories. Check the accessory guide.

### Tot_DT_NormalTextures
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_NormalTextures`

Normal texture set, including hands, body and muscles. This follow vanilla convention.

### Tot_DT_Scars
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_Scars`

RGBA masks for scars. Red channel is used for the redish area around the wound, Green is the flesh area inside
the wound, blue is blood splatter, Alpha is a suptle color variation mask of the flesh.

### Tot_DT_SkinTextures
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_SkinTextures`

Skin textures including diffuse and mask (roughness) for hands and body.

### Tot_DT_BaseMaterialRef_Hairs <small>1.3.0+</small>
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_BaseMaterialRef_Hairs`

If your haircut mod use a custom base material, but you still wish the one from Custom take over when it is installed, simple inject your base material to this table so custom can recognize it as hairs.

### Tot_DT_BaseMaterialRef_Skins <small>1.3.0+</small>
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_BaseMaterialRef_Skins`

If your body mod use a custom base material, but you still wish the one from Custom take over when it is installed, simple inject your base material to this table so Custom can recognize it as skin.

### Tot_DT_ModCreators <small>1.5.10+</small>
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_ModCreators`

Using this table, you can insert your mod logo/name in the mod filter of !Custom. You can specify a name, a logo, and a URL that point to a page of your choice.  
In order to link this actual items and body settings, you need to reference your item ID ranges associated with content tags. You can add multiple content tags per ranges. For example, in !Custom, item IDs are usually from 128000 to 129999.   
Here is a list of the content tags:
- `TotCustom.GameItem` <small>(Game items for armor/weapons/accessories)</small>
- `TotCustom.Warpaints`
- `TotCustom.BodySkins` <small>(Diffuse/Specular skin replacement)</small>
- `TotCustom.BodyNormals` <small>(Body normal/muscle replacements)</small>
- `TotCustom.BodyHairs` 
- `TotCustom.Hairlines`
- `TotCustom.Complexion`
- `TotCustom.Eyebrows`
- `TotCustom.EyebrowTracks`
- `TotCustom.Iris` <small>(Eye iris texture)</small>
- `TotCustom.IrisMasks` <small>(Sectoral iris bi color)</small>
- `TotCustom.Head`
- `TotCustom.Hairs`
- `TotCustom.FacialHairs`
- `TotCustom.FacialHairlines`
- `TotCustom.FaceWrinkles`
- `TotCustom.Scars`
- `TotCustom.Makeups`

## Accessory Guide

### Simple Movable Accessory
Add a new item in the vanilla `ItemTable` as a standard `BPGameItem` with a visual object as skeletal or static. It does not need to be a weapon. This is barebone movable accessory. It has a fixed look and it can be attached anywhere.

### Simple Armor Accessory
Add a new item in the vanilla `ItemTable` as a standard `BPGameItem`, and an entry in the vanilla EquipmentVariation Table with the same id. This is to make your accessory behave just like a vanilla piece of armor. You'd rig it to the human skeleton.

### Complex Movable Accessory
By adding a row of the same ID as your simple movable accessory GameItem in the `Tot_DT_MovableData` Table, you can add extra data: 
- Default positions on the body for both gender
- A gender separated mesh fields
- An Anim Instance class for more complexe Skeletal Mesh, like a tail with physics for example.
- Add an Actor automatically to your accessory. It gives you the unique ability to add unique stuff to it, for example: Light sources, particles, etc... You can also use this to script your accessory. The actor will receive a reference of the accessory it is attached to, so you can influence it. For example, I use this technique to modify the light color of my lamps based on the dye of the accessory. One could also use this to script the character when the accessory is equipped, if they so desired.

### Attached Actor
On any accessory, you can attach an actor of your own making. This can be used for anything, from making a special scripted accessory, to simply adding light or particules to it. Just drop an row into `Tot_DT_AttachmentBlueprints` data tables, with the item ID is key, specify the actor class and where to attach the actor, and you are good to go. Do not make it replicable, as the Actor is only created on client side. Accessories are only client side too.
                
### Tot_I_AttachedActor <small>1.1.0+</small>
`ModsShared/SudoExile/TotCustom/Types/Tot_I_AttachedActor`

This interface is to be used on your attached actors, so you can receive usefull data about the associated accessory that spawned the actor. The interface is completely optional, so if you have no use for that data for a particular Actor, you can skip it, and the system will simply ignore it. 

#### SetAccessoryMeshComponent <small>Client</small>
By implementing this interface method to your actor, Custom will be able to give you a reference to the mesh component that is associated with your Actor, and the GUID of the accessory that made that actor spawn in the first place. Using the mesh component, you could access thing like the AnimBP of a rigid skeletal mesh and make the bridge with the rest of your mod, or you do whatever you want with it. The GUID on the other hand can be used to retrieve the data of the associated accessory. Do keep in mind that all of this only happen on client side, as this Actor only live on the client.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|AccessoryGUID||
|MeshComponent|MeshComponent||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
<!-- tabs:end -->

### Enabling customization on third party hoomans <small>1.1.0+</small>

### Adding the Actor Component
`ModsShared/SudoExile/TotCustom/Tot_AC_Customization`

Also it appear to be empty, adding this component your Actor, either directly or by using the mod controller, the component will function once in the live game and with Tot Custom loaded properly at the bottom of your modlist. In order to avoid hard dependancy, you can pack this empty component in your mod. Be mindful to respect the load order instructions if you do.

### Requirements
- Actor must have the Funcom customization component.
- Actor must implement the Funcom Interface "HasCharacterLayout".
- You must update on your own the Anim BP when gender is swaped as well as voice cue when voice is changed. Rest of the changes should be taken care of by Custom. You want to refresh those things everytime the layout is changed. For implementing all that, the BasePlayerChar is good source of information, as does meet those requirements.

### ActorComponentTags

if you add this component using the ModController, you have one more possibility on client side. You can add one of these tags to it so you can tailor a bit the possibilities of Custom on this specific type of Actor. For example, Custom Mannequins forbid the configuration of Bodies and Weapons.
It is important to note that those are only to tailor client side. Even if body customization is blocked at a UI level, your mod can very much continue to use those features to force values.

`NoBody` Disable body customization on this Actor. You trigger a gender swap in your mod code by using SetToggleValue API on server with the name Gender. False to male, True for female.   
`NoPoses` Disable the use of preview poses in the editor. No body wants to see a mannequin run, for example.  
`NoWeapon` Disable weapon transmog on this Actor.  
`NoArmor` Disable Armor transmog on this Actor.  
`NoAccessory` Disable Accessories on this Actor.               

## Character Customization API <small>1.1.0+</small>

### Tot_I_Customization
`ModsShared/SudoExile/TotCustom/Types/Tot_I_Customization`

Every compatible character have a bunch of methods that can be called using this interface.

### Serialized Data

#### GetBodyData <small>Server/Client</small>
Get a serialized version of the current body data
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|string|Return||
<!-- tabs:end -->

#### GetArmorData <small>Server/Client</small>
Get a serialized version of the worned transmoged armor
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|string|Return||
<!-- tabs:end -->

#### GetAccessoriesData <small>Server/Client</small>
Get serialized version of the worned accessories
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|string|Return||
<!-- tabs:end -->

#### SetBodyData <small>Server/Client</small>
Replace current body
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Data||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetArmorData <small>Server/Client</small>
Replace current armor transmog
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Data||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetAccessoriesData <small>Server/Client</small>
Replace current set of accessories
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Data||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

### Body methods

#### GetSliderValue <small>Server/Client</small>
Get the current body value of a slider
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||

#### **Output**

|type|name|description|
|-|-|----|
|float|Value||
<!-- tabs:end -->

#### GetDoubleSliderValue <small>Server/Client</small>
Get the current body value of a double slider
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||

#### **Output**

|type|name|description|
|-|-|----|
|Vector2|Value||
<!-- tabs:end -->

#### GetListValue <small>Server/Client</small>
Get the current body value of a list (head, warpaint, makeup, etc..)
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||

#### **Output**

|type|name|description|
|-|-|----|
|int|Value||
<!-- tabs:end -->

#### GetToggleValue <small>Server/Client</small>
Get the current body value of a toggle (Gender, Bracelet,...)
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||

#### **Output**

|type|name|description|
|-|-|----|
|bool|Value||
<!-- tabs:end -->

#### GetColorValue <small>Server/Client</small>
Get the current body value of a Color
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||

#### **Output**

|type|name|description|
|-|-|----|
|LinearColor|Value||
<!-- tabs:end -->

#### SetSliderValue <small>Server</small>
Set the current body value of a slider
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||
|float|Value||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetDoubleSliderValue <small>Server</small>
Set the current body value of a double slider
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||
|Vector2|Value||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetListValue <small>Server</small>
Set the current body value of a list (head, warpaint, makeup, etc..)
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||
|int|Value||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetToggleValue <small>Server</small>
Set the current body value of a toggle (Gender, Bracelet,...)
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||
|bool|Value||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetColorValue <small>Server</small>
Set the current body value of a Color
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Name|Key||
|LinearColor|Value||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->


### Armor transmog methods

#### GetArmorPiece <small>Server/Client</small>
Get the detailed data of a transmog piece
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Enum|Slot||

#### **Output**

|type|name|description|
|-|-|----|
|int|TemplateID||
|LinearColor|ColorR||
|LinearColor|ColorG||
|LinearColor|ColorB||
|LinearColor|ColorA||
<!-- tabs:end -->

#### SetArmorPiece <small>Server</small>
Set a transmog piece into a slog
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Enum|Slot||
|int|TemplateID||
|LinearColor|ColorR||
|LinearColor|ColorG||
|LinearColor|ColorB||
|LinearColor|ColorA||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### ClearArmor <small>Server</small>
Clear all transmog slot
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### ClearArmorSlot <small>Server</small>
Clear a specific armor slot transmog
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Enum|Slot||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

### Accessory methods

#### ClearAccessories <small>Server</small>
Remove all accessories
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### GetAccessoriesGuids <small>Server/Client</small>
Return the list of accessory GUIDs that are currently equipped on the character.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Guid|Guids[]||
<!-- tabs:end -->

#### GetAccessory <small>1.3.0+, Server/Client</small>
Return an accessory details using its GUID
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|int|TemplateID||
|Name|Socket||
|Transform|Transform||
|int|HideFlags||
|LinearColor|ColorR||
|LinearColor|ColorG||
|LinearColor|ColorB||
|LinearColor|ColorA||
<!-- tabs:end -->

#### RemoveAccessory <small>Server</small>
Remove an accessory with a given GUID
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### AddAccessory <small>1.3.0+, Server</small>
Add an accessory, if an accessory with the same GUID exist, it will be replaced.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|Guid||
|int|TemplateID||
|Name|Socket||
|Transform|Transform||
|int|HideFlags||
|LinearColor|ColorR||
|LinearColor|ColorG||
|LinearColor|ColorB||
|LinearColor|ColorA||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### GetAccessoryMeshComponent <small>Client</small>
Get the mesh component associated with an accessory GUID. Please note that unequipping and equiping the same accessory does not garantee that it will be reasigned to the same mesh component.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|Guid|Guid||

#### **Output**

|type|name|description|
|-|-|----|
|MeshComponent|MeshComponent||
<!-- tabs:end -->

### Weapon transmog methods

#### SetWeapons <small>Server</small>
Set the list of weapon transmog template IDs
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|int|Weapons[]||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### SetWeaponSlot <small>Server</small>
Set a specific weapon transmog slot, from 0 to 13, every other slot will be refused.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|int|Slot||
|int|TemplateID||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### ClearWeapons <small>Server</small>
Remove all weapon transmog
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
|string|ErrorMessage||
<!-- tabs:end -->

#### GetWeapons <small>Server/Client</small>
Get the list of all the weapon transmogs currently applied to the character.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|int|Return[]||
<!-- tabs:end -->

#### GetEquippedWeaponTransmog <small>Client</small>
Get the current list of transmog templateIDs that are currently in the hands of the characters.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|int|Return[]||
<!-- tabs:end -->

### Character profile

#### GetCurrentCharacterProfileGUID <small>Client/Server</small>
This will only give you result on the BasePlayerChar. On server, it will only return the current profile GUID. If the GUID is invalid, that mean the player is on the default profile that cannot be deleted. On client, this will only give you result on the main character controlled by the player, and will give you the current GUID and the name of the profile as specified by the player in his save.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|Guid|Guid||
|string|Name||
<!-- tabs:end -->

### Radial Menu <small>1.1.6+</small>

#### AddRadialMenuCustomization <small>Client</small>
When you need to add the customize button on a radial menu, call this function with the radial menu parameters
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|RadialMenu|RadialMenu||
|int|HitIndex||

#### **Output**

|type|name|description|
|-|-|----|
|bool|IsSuccess||
<!-- tabs:end -->

### Cross Mod Event <small>1.1.0+</small>

> #### How to?
> See the corresponding doc on [Tot ! Library](lib) on how to listen and send such event

#### TotCustomizeActor <small>Client</small>
Raised on `PlayerController`  
Raise it to ask Tot ! Custom to open the editor on a specific actor

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[Target(Actor)]||

#### TotCustomizeUID <small>Client</small>
Raised on `PlayerController`  
Raise it to ask Tot ! Custom to open the editor on a distant actor, using its Funcom Unique ID

|type|name|description|
|-|-|----|
|string|Data[UID]||
|Object|Context\[]||

#### TotCustomAttachmentChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the attachments. Keep in mind that even tho the server knows about attachments, it does not have any corresponding MeshComponents.

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[]||

#### TotCustomBodyChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the custom body layout.

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[]||

#### TotCustomArmorChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the Armor transmog set.

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[]||

#### TotCustomWeaponChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the weapon transmog set.

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[]||

#### TotCustomProfileChanged <small>Server/Client</small>
Raised on `BasePlayerChar` only  
Raised by the custom component whenever the player change its character profile where the favorites are stored. While you cannot access data about that profile (as it is only a client save thing), you can keep track of its GUID and use it to swap your own mod features when ever the player change its Custom Profile. See API above to request the current GUID

|type|name|description|
|-|-|----|
|string|Data[]||
|Object|Context\[]||