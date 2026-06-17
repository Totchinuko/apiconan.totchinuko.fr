# Tot ! Enhanced Custom API

## API Download

[API Download Page](api-download)

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

RGB mask of different section of color of the iris. Find the original of the game to have an example. Alpha is an iris mask.

### Tot_DT_FaceWrinkles
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_FaceWrinkles`

Add wrinkle Normal/NCD map.

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

This is the extra data used by complex movable accessories. Check the accessory guide.

### Tot_DT_NormalTextures
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_NormalTextures`

NCD texture set, including hands, body and muscles. This follow vanilla convention.

### Tot_DT_Scars
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_Scars`

RGBA masks for scars. Red channel is used for the red-ish area around the wound, Green is the flesh area inside
the wound, blue is blood splatter, Alpha is a subtle color variation mask of the flesh.

### Tot_DT_SkinTextures
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_SkinTextures`

Skin textures including diffuse and mask (roughness) for hands and body.

### Tot_DT_ModCreators
`ModsShared/SudoExile/TotCustom/Tables/Tot_DT_ModCreators`

Using this table, you can insert your mod logo/name in the mod filter of !Custom. You can specify a name, a logo, and a URL that point to a page of your choice.  
In order to link this actual items and body settings, you need to reference your item ID ranges associated with content tags. You can add multiple content tags per ranges. For example, in !Custom, item IDs are usually from 128000 to 129999.   

> In order to avoid having a dependency on Sudo, you may want to include the following files in your mod, when trying to add your mod to the list. 
> `/Game/ModsShared/SudoExile/TotCustom/Tables/Tot_DT_ModCreators.Tot_DT_ModCreators`  
> `/Game/ModsShared/SudoExile/TotCustom/Types/Tot_S_ModRange.Tot_S_ModRange`  
> `/Game/ModsShared/SudoExile/TotCustom/Types/Tot_S_ModCreator.Tot_S_ModCreator`  

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

## Material Override
In order to provide all the effects that Custom provide, and be compatible with a wide range of external content, !Custom override the materials of the models dynamically with its own. For this, Custom must identify the nature of a Material, so that it can choose the perfect replacement. If your skin or hair material, is based on vanilla ones, Custom should be able to recognize them automatically, but in the case where you wish Custom to be compatible while having custom material the rest of the time, you can use the following keywords, directly in the file name of your material:

- `__TCHand` For hand skin 
- `__TCBody` For body skin
- `__TCHead` For head skin
- `__TCSkin` For alternative body skin, such as the Flat Chest. This will skip body skin replacement parameters from Custom to preserve the custom textures.
- `__TCArmor` For Armor materials
- `__TCHair` For hairs
- `__TCFur` For Fur on Armor (Hair shader for armor fur)
- `__TCBeard` For beards

Simply add these to your file names, and Custom should be able to identify and categorize them accordingly. If you have active scripts that in normal time, dynamically change parameters, it is best to deactivate them when Custom is present, if you wish to be compatible. Otherwise both would fight for the right to apply a parameter.

## Accessory Guide

### Simple Movable Accessory
Add a new item in the vanilla `ItemTable` as a standard `BPGameItem` with a visual object as skeletal or static. It does not need to be a weapon. This is bare-bone movable accessory. It has a fixed look and it can be attached anywhere.

### Simple Armor Accessory
Add a new item in the vanilla `ItemTable` as a standard `BPGameItem`, and an entry in the vanilla EquipmentVariation Table with the same id. This is to make your accessory behave just like a vanilla piece of armor. You'd rig it to the human skeleton.

### Complex Movable Accessory
By adding a row of the same ID as your simple movable accessory GameItem in the `Tot_DT_MovableData` Table, you can add extra data: 
- Default positions on the body for both gender
- A gender separated mesh fields
- An Anim Instance class for more complex Skeletal Mesh, like a tail with physics for example.
- Add an Actor automatically to your accessory. It gives you the unique ability to add unique stuff to it, for example: Light sources, particles, etc... You can also use this to script your accessory. The actor will receive a reference of the accessory it is attached to, so you can influence it. For example, I use this technique to modify the light color of my lamps based on the dye of the accessory. One could also use this to script the character when the accessory is equipped, if they so desired.

### Attached Actor
On any accessory, you can attach an actor of your own making. This can be used for anything, from making a special scripted accessory, to simply adding light or particles to it. Just drop an row into `Tot_DT_AttachmentBlueprints` data tables, with the item ID is key, specify the actor class and where to attach the actor, and you are good to go. Do not make it replicable, as the Actor is only created on client side. Accessories are only client side too.
                
### Tot_I_AttachedActor
`ModsShared/SudoExile/TotCustom/Types/Tot_I_AttachedActor`

This interface is to be used on your attached actors, so you can receive useful data about the associated accessory that spawned the actor. The interface is completely optional, so if you have no use for that data for a particular Actor, you can skip it, and the system will simply ignore it. 

#### SetAccessoryMeshComponent <small>Client</small>
```csharp
function SetAccessoryMeshComponent(Guid accessoryGuid, MeshComponent meshComponent, out bool isSuccess);
```
By implementing this interface method to your actor, Custom will be able to give you a reference to the mesh component that is associated with your Actor, and the GUID of the accessory that made that actor spawn in the first place. Using the mesh component, you could access thing like the AnimBP of a rigid skeletal mesh and make the bridge with the rest of your mod, or you do whatever you want with it. The GUID on the other hand can be used to retrieve the data of the associated accessory. Do keep in mind that all of this only happen on client side, as this Actor only live on the client.

#### RefreshedAccessory
```csharp
function RefreshedAccessory();
```
This function is called every time the accessory colors or model is refreshed.

### Enabling customization on third party hoomans

### Adding the Actor Component
`ModsShared/SudoExile/TotCustom/Tot_AC_Customization`

Also it appear to be empty, adding this component your Actor, either directly or by using the mod controller, the component will function once in the live game and with Tot Custom loaded properly at the bottom of your mod-list. In order to avoid hard dependency, you can pack this empty component in your mod. Be mindful to respect the load order instructions if you do.

### Requirements
- Actor must have the Funcom customization component.
- Actor must implement the Funcom Interface "HasCharacterLayout".
- You must update on your own the Anim BP when gender is swapped as well as voice cue when voice is changed. Rest of the changes should be taken care of by Custom. You want to refresh those things every time the layout is changed. For implementing all that, the BasePlayerChar is good source of information, as does meet those requirements.

### ActorComponentTags

if you add this component using the ModController, you have one more possibility on client side. You can add one of these tags to it so you can tailor a bit the possibilities of Custom on this specific type of Actor. For example, Custom Mannequins forbid the configuration of Bodies and Weapons.
It is important to note that those are only to tailor client side. Even if body customization is blocked at a UI level, your mod can very much continue to use those features to force values.

`NoBody` Disable body customization on this Actor. You trigger a gender swap in your mod code by using SetToggleValue API on server with the name Gender. False to male, True for female.   
`NoPoses` Disable the use of preview poses in the editor. No body wants to see a mannequin run, for example.  
`NoWeapon` Disable weapon transmog on this Actor.  
`NoArmor` Disable Armor transmog on this Actor.  
`NoAccessory` Disable Accessories on this Actor.               

## Character Customization API

### Tot_I_Customization
`ModsShared/SudoExile/TotCustom/Types/Tot_I_Customization`

Every compatible character have a bunch of methods that can be called using this interface.

### Serialized Data

#### GetBodyData <small>Server/Client</small>
```csharp
function GetBodyData(out string return);
```
Get a serialized version of the current body data

#### GetArmorData <small>Server/Client</small>
```csharp
function GetArmorData(out string return);
```
Get a serialized version of the worned transmoged armor

#### GetAccessoriesData <small>Server/Client</small>
```csharp
function GetAccessoriesData(out string return);
```
Get serialized version of the worn accessories

#### GetWeaponData <small>Server/Client</small>
```csharp
function GetWeaponData(out string return);
```
Get serialized version of the worn weapons

#### SetBodyData <small>Server/Client</small>
```csharp
function GetAccessoriesData(string data, out bool isSuccess, out string errorMessage);
```
Replace current body

#### SetArmorData <small>Server/Client</small>
```csharp
function GetAccessoriesData(string data, bool merge, out bool isSuccess, out string errorMessage);
```
Replace current armor transmog or equip it if merge is set to true

#### RemoveArmorData <small>Server/Client</small>
```csharp
function RemoveArmorData(string data, out bool isSuccess, out string errorMessage);
```
Un-equip a given armor set

#### SetAccessoriesData <small>Server/Client</small>
```csharp
function GetAccessoriesData(string data, bool merge, out bool isSuccess, out string errorMessage);
```
Replace current set of accessories or if merge is true, will add your set of accessories to the already equipped set. Accessories sharing the same Guid will be updated.

#### RemoveAccessoriesData <small>Server/Client</small>
```csharp
function GetAccessoriesData(string data, bool merge, out bool isSuccess, out string errorMessage);
```
Remove the set of accessory data from the character, leave the other untouched.

#### SetWeaponData <small>Server/Client</small>
```csharp
function SetWeaponData(string data, out bool isSuccess, out string errorMessage);
```
Replace current set of weapon transmog

### Armor transmog methods

#### ClearArmor <small>Server</small>
```csharp
function ClearArmor(out bool isSuccess, out string errorMessage);
```
Clear all transmog slot

#### ClearArmorSlot <small>Server</small>
```csharp
function ClearArmorSlot(enum slot, out bool isSuccess, out string errorMessage);
```
Clear a specific armor slot transmog

### Accessory methods

#### ClearAccessories <small>Server</small>
```csharp
function ClearAccessories(out bool isSuccess, out string errorMessage);
```
Remove all accessories

#### GetAccessoriesGuids <small>Server/Client</small>
```csharp
function GetAccessoriesGuids(out Guid[] return);
```
Return the list of accessory GUIDs that are currently equipped on the character.

#### GetAccessoryMeshComponent <small>Client</small>
```csharp
function GetAccessoryMeshComponent(Guid guid, MeshComponent meshComponent);
```
Get the mesh component associated with an accessory GUID. Please note that unequipped and equipping the same accessory does not guarantee that it will be reassigned to the same mesh component.

#### GetInvisibleAccessories <small>Client</small>
```csharp
function GetAccessoryMeshComponent(out bool return);
```

#### SetInvisibleAccessories <small>Client</small>
```csharp
function SetInvisibleAccessories(bool invisible);
```
Force all the accessories to be invisible


### Weapon transmog methods

#### ClearWeapons <small>Server</small>
```csharp
function ClearWeapons(out bool isSuccess, out string errorMessage);
```
Remove all weapon transmog

#### GetEquippedWeaponTransmog <small>Client</small>
```csharp
function GetEquippedWeaponTransmog(out int[] return);
```
Get the current list of transmog templateIDs that are currently in the hands of the characters.

### Character profile

#### GetCurrentCharacterProfileGUID <small>Client/Server</small>
```csharp
function GetCurrentCharacterProfileGUID(out Guid guid, out string Name);
```
This will only give you result on the BasePlayerChar. On server, it will only return the current profile GUID. If the GUID is invalid, that mean the player is on the default profile that cannot be deleted. On client, this will only give you result on the main character controlled by the player, and will give you the current GUID and the name of the profile as specified by the player in his save.

### Radial Menu

#### AddRadialMenuCustomization <small>Client</small>
```csharp
function AddRadialMenuCustomization(RadialMenu radialMenu, int HitIndex);
```
When you need to add the customize button on a radial menu, call this function with the radial menu parameters

### Cross Mod Event

> #### How to?
> See the corresponding doc on [Tot ! Library](lib) on how to listen and send such event

#### TotCustomizeActor <small>Client</small>
Raised on `PlayerController`  
Raise it to ask Tot ! Custom to open the editor on a specific actor

```csharp
string[] Data = {};
Object[] Context = { Actor target };
```

#### TotCustomizeUID <small>Client</small>
Raised on `PlayerController`  
Raise it to ask Tot ! Custom to open the editor on a distant actor, using its Funcom Unique ID

```csharp
string[] Data = { string uid };
Object[] Context = {};
```

#### TotCustomAttachmentChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the attachments. Keep in mind that even tho the server knows about attachments, it does not have any corresponding MeshComponents.

```csharp
string[] Data = {};
Object[] Context = {};
```

#### TotCustomBodyChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the custom body layout.

```csharp
string[] Data = {};
Object[] Context = {};
```

#### TotCustomArmorChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the Armor transmog set.

```csharp
string[] Data = {};
Object[] Context = {};
```

#### TotCustomWeaponChanged <small>Server/Client</small>
Raised on any compatible Custom Actor  
Raised by the custom component whenever changes are made/received to the weapon transmog set.

```csharp
string[] Data = {};
Object[] Context = {};
```

#### TotCustomProfileChanged <small>Server/Client</small>
Raised on `BasePlayerChar` only  
Raised by the custom component whenever the player change its character profile where the favorites are stored. While you cannot access data about that profile (as it is only a client save thing), you can keep track of its GUID and use it to swap your own mod features when ever the player change its Custom Profile. See API above to request the current GUID

```csharp
string[] Data = {};
Object[] Context = {};
```

## Weapon Transmog API
If you're making custom weapon in your mod, their is a way for you to increase compatibility with the new method for Custom to handle transmog between weapons. This is very similar to how Fashionist work as well, and in fact I've been making Custom compatible with Fashionist tags. So if your mod has been made compatible with Fashionist transmog system, you should not need to update anything. Otherwise, here is the item tags that can be added to re-categorize your weapons:

- custom.transmog.axe1h
- custom.transmog.axe2h
- custom.transmog.bow
- custom.transmog.chakram
- custom.transmog.claws
- custom.transmog.dagger
- custom.transmog.dual
- custom.transmog.fistweapon
- custom.transmog.katana
- custom.transmog.lance
- custom.transmog.mace1h
- custom.transmog.mace2h
- custom.transmog.shield
- custom.transmog.spear1h
- custom.transmog.spear2h
- custom.transmog.sword1h
- custom.transmog.sword2h
- custom.transmog.throwingaxe
- custom.transmog.cleaver
- custom.transmog.hatchet
- custom.transmog.multitool
- custom.transmog.pick
- custom.transmog.sickle
- custom.transmog.skinningknife
- custom.transmog.torch

Names I think should be relatively self explanatory. In your item table, you'll find an array of item tags, simply add one of those to the list and your weapon should be categorized as such by !Custom.