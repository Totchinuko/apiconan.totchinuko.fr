# Sudo Nameplate API
Sudo has its own nameplate system that is open and that can be used by mods to add elements to it. This API is included in the sudo API download.  
It is located in `ModsShared/SudoExile/TotNameplate`.

## Tot_E_NameplateSlot
The nameplate system work with a slot system. You insert your widgets in various slot in the nameplate UMG hierarchy, with a numeric priority for sorting.

- `BeforeNameplate` - This is outside the nameplate, on top of it. Useful for things like chat bubbles
- `AfterNamplate` - This is outside the nameplate, underneath. Useful for things like health bar or other stats.
- `BeforeName` - Inside the nameplate, on the name's left. This is grouped within the Horizontal Box of the name. Keep elements in their small, like an icon or something.
- `AfterName` - Inside the nameplate, on the name's right. This is grouped within the Horizontal Box of the name. Keep elements in their small, like an icon or something.
- `AboveName` - Inside the nameplate, on top of the name. This is grouped within the Vertical Box of the nameplate. This is within the padding of the nameplate, so the element won't be flush with the edge of the nameplate.
- `UnderName` - Inside the nameplate, underneath of the name. This is grouped within the Vertical Box of the nameplate. This is within the padding of the nameplate, so the element won't be flush with the edge of the nameplate.
- `AbovePadding` - Inside the nameplate, on top of the name. This is grouped within the Vertical Box of the nameplate. This is outside the padding of the nameplate, so the element will be flush with the edge of the nameplate.
- `UnderPadding` - Inside the nameplate, underneath of the name. This is grouped within the Vertical Box of the nameplate. This is outside the padding of the nameplate, so the element will be flush with the edge of the nameplate.

## Tot_DT_NameplateRanges
In order to avoid conflicts between range mechanics, the nameplate system offer a dedicated API for that. Server admins can choose what influence the visibility range of the nameplate in their server settings.
Range types MUST be added first into the `Tot_DT_NameplateRanges` for them to be accepted. Any call to `SetRangeType` in the API with a non-existing Range in the table will simply be rejected. The table is simply, it only has a Display name that is used in the Admin settings of Sudo.  
Range types are directly used to calculate the DistanceOpacity value of the Nameplate. 

## Tot_I_NamedActor
A simple interface to make your actor name known of a nameplate. If you're actor is not a ChatUser from the Chat API, and is not Placeable, you might want to implement it so that the nameplate knows what name to display.

### GetActorName
```csharp
// Client
function GetActorName(out string ReturnValue);
```
Return the display name of the actor that will directly be displayed in the nameplate.

## Tot_I_NameplateBase
The nameplate itself. You'll receive a reference of that interface on various nameplate ticks if you implement `Tot_I_NameplateElement` or get one throught the `Tot_I_NameplateManager`

### GetOpacity
```csharp
// Client
function GetOpacity(out float Return);
```
This is the global opacity of the nameplate. Useful for external elements in `BeforeNameplate` and `AfterNameplate`, so they can apply the same opacity if needed.

### GetCameraDistance
```csharp
// Client
function GetCameraDistance(out float Return);
```
This is misleading. Originally, this was the camera distance from the nameplate, but it turned out to be a bad idea. Now it is the distance between the main character actor, and the actor of the nameplate you're getting information from.

### GetCameraAngle
```csharp
// Client
function GetCameraAngle(out float Return);
```
Resulting from a fairly complicated calculation, but this is the angle in degree between the forward vector of the camera, and direction of this nameplate from the camera's perspective.

### GetOpacityDistance
```csharp
// Client
function GetOpacityDistance(out float Return);
```
Resulting Opacity multiplier from the GetCameraDistance value, as used by the nameplate itself into the resulting GetOpacity

### GetOpacityAngle
```csharp
// Client
function GetOpacityAngle(out float Return);
```
Resulting Opacity multiplier from the GetCameraAngle value, as used by the nameplate itself into the resulting GetOpacity

### GetForceDisplay
```csharp
// Client
function GetForceDisplay(out bool Return);
```
Is the nameplate forced to be displayed, which force the nameplate opacity to 1.0.

### GetNameHidden
```csharp
// Client
function GetNameHidden(out bool Return);
```
Is the name inside the plate hidden either by client or server setting.

### GetAimedAt
```csharp
// Client
function GetAimedAt(out bool Return);
```
Is the player aiming directly at the nameplate. This is true if the crosshair directly enter the nameplate border. That does not include elements outside the nameplate.

### GetWallHit
```csharp
// Client
function GetWallHit(out bool Return);
```
True if the Wall Check server setting is on and the nameplate is invisible because a wall is blocking it.

### SetRangeType
```csharp
// Client
function SetRangeType(Name Type, float Range);
```
In order to avoid conflicts between range mechanics, the nameplate system offer a dedicated API for that. Server admins can choose what influence the range of the nameplate in their server settings. 
Range types MUST be added first into the `Tot_DT_NameplateRanges` for them to be accepted. Any call with a non-existing Range in the table will simply be rejected.  
Range types are directly used to calculate the DistanceOpacity value of the Nameplate.

SetRangeType simply allow to refresh your current RangeType. For example, Sudo provide a configurable Fixed Range by default, and Chat V2 offer the possibility to display the nameplate with the Local Channel Range that is selected.

### AddChild
```csharp
// Client
function AddChild(Widget AddedWidget, int OrderPriority, enum Slot);
```
This adds a custom widget to the nameplate. They don't have to implement any interface, but it is strongly advised to make use of the `Tot_I_NameplateElement` to function well. Slot is the `Tot_E_NameplateSlot` described above, and the OrderPriority is from smaller to bigger number, from top to bottom or left to right.

### RemoveChild
```csharp
// Client
function RemoveChild(Widget AddedWidget);
```
Remove a previously added child. 

!> **An important node**: It is preferable to hide a child than to constantly add it/remove it from the nameplate. The ordering of widgets is rather expensive because of shortcomings of UMG, so avoid doing that at all costs. Prefer using a collapsed visibility.

### ToggleForceDisplay
```csharp
// Client
function ToggleForceDisplay(bool Active);
```
Should the nameplate be display forcefully? This will effectively disable any drop in opacity coming from angle/distance and other sources. This is also a cumulative toggle, which mean if you toggle it on twice, you'll need to toggle it off twice as well to return to normal.

### SetActive
```csharp
// Client
function SetActive(bool Active);
```
Toggle the nameplate on or off completely. In practice, you should never use this outside of your own actors that carry this nameplate.

### IsActive
```csharp
// Client
function IsActive(out bool Return);
```
Is this nameplate active or not.

## Tot_I_NameplateElement
Interface implement by sub-widgets of the nameplate. This is not mandatory, but is strongly advised.

### NameplateTick
```csharp
// Client
function NameplateTick(Tot_I_NameplateBase BaseNameplate);
```
This will always tick, regardless of the visibility of your current UserWidget. In a way, this is useful to hide your own widget at times, and continue receiving tick events from the nameplate when your own widget tick will stop. Elements are called in no particular order.

### SettingsUpdated
```csharp
// Client
function SettingsUpdated(Tot_I_NameplateBase Nameplate, I_EA_NameplateSettings Settings);
```
This is called when your widget is first added to the nameplate, and whenever a settings change, both from User client settings, and server wide settings.

### GetVerticalAlignment
```csharp
// Client
function SetFontSize(out enum Return);
```
What vertical alignment the nameplate should apply to your widget.

### GetHorizontalAlignment
```csharp
// Client
function GetHorizontalAlignment(out enum Return);
```
What horizontal alignment the nameplate should apply to your widget.

### RefreshNameplateActive
```csharp
// Client
function RefreshNameplateActive(bool IsActive);
```
Called whenever the nameplate is toggled on or off.

### NameplateSlowTick
```csharp
// Client
function NameplateSlowTick(Tot_I_NameplateBase BaseNameplate);
```
Another tick, but this one is immune to even disabling the nameplate completely. It ticks roughly once every second. Mostly used for refresh that don't need to be frame perfect. Even if it is a slow tick, never perform expensive work on any ticks.

## Tot_I_NameplateObserver
To implement on components sitting on an Actor susceptible to receive a Nameplate such as the BasePlayerChar for example. When a nameplate is created, this event is called on all components that implement it. There is no binding necessary.

### OnNameplateCreated
```csharp
// Client
function OnNameplateCreated();
```
Called when the nameplate is ready to be picked up.

## Tot_I_NameplateManager
This is the ModController, only client side. So you can get it with GetAllActorWithInterface. 

!> If your goal is to get the Nameplate reference of an actor, there are a better way than to check constantly for its availability after begin play. You first check once for availability through the NameplateManager. If it is already available, great, you're good to go. Otherwise, implement `Tot_I_NameplateObserver` on the component sitting on the Actor receiving the nameplate. All `OnNameplateCreated` will be called on every component as soon as the nameplate becomes available on the Actor, you can then ask the manager to get the nameplate. This is true on every Actor, but Sudo only care to create nameplates on BPC and Thralls.

### CreateNameplate
```csharp
// Client
function CreateNameplate(Actor Actor, Vector RelativeLocation, SceneComponent Component, Name SocketName, out Tot_I_NameplateBase ReturnValue);
```
Create a nameplate (if one is not already on it) on the target actor. The component, relative location, and socket name are used to bind it a particular bone on a particular skeleton. For reference, BasePlayerChar nameplates are created by Sudo on the main Mesh component, attached to the EnemyHealthbarSocket variable Socket, at a relative location of 0.0,10.0,0.0.  
Please do not create the nameplate for Thrall/BPC, Sudo does it on its own. You're just going to end up making things messy. This is mainly so you can add nameplates on your own Actors.

### GetNameplate
```csharp
// Client
function GetNameplate(Actor Actor, out Tot_I_NameplateBase ReturnValue);
```
Get the nameplate of the Actor, if one exists.

### SetNameplateLocation
```csharp
// Client
function SetNameplateLocation(Actor Actor, Vector RelativeLocation, SceneComponent Component, Name SocketName);
```
Change the nameplate location (if one exists) to a new attachement

### FindActorName
```csharp
// Client
function FindActorName(Actor Actor, out string ReturnValue);
```
Search a number of sources for names. Including but not limited to: ChatV2 User Name, Sudo's Act Name, The interface mentioned above.

## I_EA_NameplateSetting
This is located in `ModsShared/SudoExile/App`, as it is directly tied to Sudo's Client settings. It is mostly that, setting access to Client/Server nameplate settings.

### GetFontSize
```csharp
// Client
function GetFontSize(out int Return);
```
Get the current Font Size of the user setting. Use this to unify the font size with the rest of the nameplate.

### GetOpacity
```csharp
// Client
function GetOpacity(out float Opacity);
```
User setting of the nameplate opacity, background and content included, not of the ouside elements.

### GetHideNameplates
```csharp
// Client
function GetHideNameplates(out bool Return);
```
Does the user wish to hide all nameplates? Nameplate can be hidden by server settings as well independently for player and thrall character, but this setting only reflect the User choice.

### GetBackgroundOpacity
```csharp
// Client
function GetBackgroundOpacity(out float Opacity);
```
Get the border background opacity

### GetHealthFontSize
```csharp
// Client
function GetHealthFontSize(out int Return);
```
Font size of the health bar selected by the user

### GetUseCheckWall
```csharp
// Client
function GetUseCheckWall(out bool Return);
```
Should the nameplate check for collisions to get hidden behind walls. This is defined by server settings

### GetRangeType
```csharp
// Client
function GetRangeType(out Name Type);
```
The Range type currently in use by the server settings.

### GetUseNameplateHealth
```csharp
// Client
function GetUseNameplateHealth(out bool ReturnValue);
```
Does the User wish to replace the vanilla health bar with the Nameplate Health bar as well.

### GetHideCharacterNames
```csharp
// Client
function GetHideCharacterNames(out bool ReturnValue);
```
Should the name of the character be hidden. This is the server setting, but for Player/Thrall characters, the user can additionally choose for themselves. However, this call only reflect the global server setting.