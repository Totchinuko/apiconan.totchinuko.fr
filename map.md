# Sudo Map API
The Map API is a series of tools to easily inject layers on the player map and access the Sudo Map Marker system.  
It is located in `ModsShared/SudoExile/Map` and is part of the main Sudo API download.

## EA_I_MapModule
Map modules are ActorComponents attached to the Funcombat_Controller. They will be called when the Game FullscreenMap is opened and closed.

### OnMapOpened
```csharp
// Client
function OnMapOpened(EA_I_MapManager Manager);
```
Called when the map opens. Use the provided manager to add your layers to the map.

### OnMapClosed
```csharp
// Client
function OnMapClosed(EA_I_MapManager Manager);
```
Called when the map closes, so you can perform some sort of destruction logic.

## EA_I_MapManager
The Map Manager is what is responsible for injecting the various layers in the right place and in the right order.

### InsertWidgetUnderMarkers
```csharp
// Client
function InsertWidgetUnderMarkers(UserWidget Widget, int Priority, out bool Success);
```
Insert a Widget under the vanilla markers. Priority is used to order the various layers in a given section. Bigger priority are on top of smaller ones. You can use this section to place things on the map using a canvas, and the game function WorldToImage and ImageToWorld functions.

### InsertWidgetAboveMarkers
```csharp
// Client
function InsertWidgetAboveMarkers(UserWidget Widget, int Priority, out bool Success);
```
Insert a Widget above the vanilla markers. Priority is used to order the various layers in a given section. Bigger priority are on top of smaller ones. You can use this section to place things on the map using a canvas, and the game function WorldToImage and ImageToWorld functions.

### InsertWidgetOnOverlay
```csharp
// Client
function InsertWidgetOnOverlay(UserWidget Widget, int Priority, out bool Success);
```
Insert a Widget as an overlay of the map UI. Priority is used to order the various layers in a given section. Bigger priority are on top of smaller ones. The overlay is not part of the map itself, and instead can be used to add extra controls on top the map. This won't move with the map as it is scrolled around.

### GetZoomFactor
```csharp
// Client
function GetZoomFactor(out float ReturnValue);
```
Get the current ZoomFactor of the map. This is often used in WorldToImage and ImageToWorld calculations.

### GetZoomFactor
```csharp
// Client
function GetRegion(out ERegion ReturnValue);
```
Get the current Region of the map. This is often used in WorldToImage and ImageToWorld calculations, as well as defining which map is displayed.

### BuildLayers
```csharp
// Client
function BuildLayers();
```
Build all the added layers. Never call that yourself in one of your modules, this is called by Sudo once every module got a chance to add their layers to the map and have been sorted.

## EA_I_MapLayer
Implement this interface in your UserWidgets to receive informations

### ZoomFactorChanged
```csharp
// Client
function ZoomFactorChanged(float ZoomFactor);
```
Called when the ZoomFactor Changed, to refresh your own elements on the map.

### RegionChanged
```csharp
// Client
function RegionChanged(ERegion Region);
```
Called when the Region of the map is changed by the User, to refresh your own elements on the map.

### GetFilterLabel
```csharp
// Client
function GetFilterLabel(out Text Label, out bool IsFilterable, out DisplayedByDefault);
```
Implement that if your layer should be displayed in the filtering present above the map. This allows the user to hide/display your layer. Leave IsFilterable to False if you don't want your layer to be in the list.

### GetKey
```csharp
// Client
function GetKey(out Name ReturnValue);
```
A Key used to remember if your layer was toggled or not in the Filtering. You can leave it to None if your Layer is not filterable.

### SetFilter
```csharp
// Client
function SetFilter(bool Displayed);
```
Called when the user toggle your Layer in the filter list. You are in charge on how your layer hide itself and what it needs to perform when it does.

## EA_I_MapEvents
Currently Unused in the Exposed API. This is mostly for internal maps that the player FullScreen Map.

## EA_I_MapMarkerManager
The Map Marker Manger is a non replicated Actor that only present Server side. You can access it through GetAllActorWithInterface. It's created as soon as possible after server start. It's essentially the same thing as the vanilla Global Marker Registry, only with more features, and arguably a more comfortable API. I'll first explain what parameter a marker has, so I don't repeat myself in each Method description.  
Markers are not persistent, they are cleared on server reboot. They are synchronized on User login, only a few at a time. Marker addition, update, removal don't trigger an entire synchronization, instead only the updated data of the modified marker is synchronized.

### Marker Parameters
- `Guid` - The Guid of the Marker. You're in charge of generating it with `NewGuid` and keeping it around to remove/update your marker later.
- `Name` - The name displayed in the Tooltip
- `IconLongPathName` - Icon path. You can get this with a `Texture2DSoftObject` (What use to be asset ref) reference, by using `ToSoftObjectPath` and breaking the resulting struct to get the path.
- `Pivot` - Canvas pivot. Most of the time 0.5,0.5 to be centered.
- `Position` - World Position of the Marker, minus the Z axis since we don't need it for a 2D map.
- `Radius` - Radius of the Marker, in World Centimeters. This Radius will accurately be converted on the map to represent the World size onto the paper map. It will appear as a colored circle with a faint background. The Radius itself is not clickable or interfere with other markers **unless** you hide the main icon by using a Size of 0,0.
- `FuzzyRadius` - When Radius is not 0, randomly shift the drawn radius to not be centered on the Marker Position. This is pseudo-random, as it will result in the same offset for the same Position. This can be useful when hiding the main Marker icon, to not give away the true position of a Marker.
- `ExpiryDate` - This is a Unix Timestamp of the expiry date of this Marker. Marker will automatically be removed past this date. To get a one, you can convert an Unreal DateTime from and to an Int64 Timestamp.
- `Color` - Multiplicative color for the icon and radius.
- `Size` - Size of the icon. If set to 0, the Radius (if non 0) will pick up the role of carrying the tooltip and occluding anything underneath.
- `ZOrder` - Canvas ZOrder of the marker. Higher number draw over smaller ones.

### SetMapMarker
```csharp
// Server
function SetMapMarker(MarkerParameters Parameters);
```
Set/Update a map marker.

### RemoveMapMarker
```csharp
// Server
function RemoveMapMarker(Guid Guid, out bool Success);
```
Remove an existing marker. False returned if the marker didn't exist.

### GetMapMarker
```csharp
// Server
function GetMapMarker(Guid Guid, out bool Found, out MarkerParameters Parameters);
```
Get the parameters of an existing marker. Found is false if it wasn't found.

### GetMapMarkerCount
```csharp
// Server
function GetMapMarkerCount(out int ReturnValue);
```
Length of the Marker List

### GetMapMarkerAt
```csharp
// Server
function GetMapMarkerAt(int index, out bool Valid, out MarkerParameters Parameters);
```
Get a marker at an index. Valid is false if the index was not valid.

### UpdateMapMarker
```csharp
// Server
function UpdateMapMarker(Guid Guid, Vector2D Position, float radius);
```
Update the position/radius of a marker. This is cheaper than to set the entire marker parameter stack.

### BindObserver
```csharp
// Server
function BindObserver(EA_I_MapMarkerObserver Observer);
```
Bind an observer to the marker manager, receiving events when markers are created, updated or removed.

### UnbindObserver
```csharp
// Server
function UnbindObserver(EA_I_MapMarkerObserver Observer);
```
Unbind a previously bound observer. Don't forget to do that when your object is EndPlaying or is destroyed.

## EA_I_MapMarkerObserver
Implemented to observer the marker manager, and receive events from it.

### OnMarkerUpdated
```csharp
// Server
function OnMarkerUpdated(Guid Guid, Vector2D Position, float Radius);
```

### OnMarkerRemoved
```csharp
// Server
function OnMarkerRemoved(Guid Guid);
```

### OnMarkerAdded
```csharp
// Server
function OnMarkerAdded(Guid Guid);
```