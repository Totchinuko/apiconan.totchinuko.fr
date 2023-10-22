# Tot ! iHud API
## API Download
!> **Install instructions**\
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

Download: [iHUD 2.0.0](/API/iHud2.0.0.zip ':ignore')

## Tot_S_iHUDWidgetRow
`ModsShared/SudoExile/TotIHUD/Types/Tot_S_iHUDWidgetRow`

|Name|Description|
|-|---|
|Name|Name as displayed in the HUD Editor mode|
|Widget|Your HUD UserWidget. No need for a window root or place it in the game UIModules.|
|UIModuleToHide|List of vanilla (or other mods) UI module keys to hide while your iHUD widget is enabled.|
|SudoPermissionKey|Permission Key necessary to display the HUD widget.|
|EditorWidget|UserWidget with extra controle to add into your widget editing page.|
|DefaultPosition|Default Position on the screen relative to the Anchors|
|Anchors|Canvas anchors|
|Alignment|Canvas Alignment|
|ZOrder|Widget order of display. Higher will be drawn on top of lower ones. I Recommand 40.|
|EnabledByDefault|Should your widget be enabled by default for a new user.|
|HideWithFullscreenModule|Should your widget be hidden when a fullscreen vanilla module show up, like the inventory.|

## Tot_I_iHUDWidget
`ModsShared/SudoExile/TotIHUD/Types/Tot_I_iHUDWidget`

### ShouldBeVisible <small>Client</small>
Return each frame if your widget should be visible on its own or not.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|bool|Return||
<!-- tabs:end -->

### OverridenPosition <small>Client</small>
Return each frame if your widget should not be placed where the user want it or not. This is used for example for the Shortcut bar to be displayed at its default position when the inventory is open and the user might want to drag stuff in it.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|struct|Position||
|float|Scale||
|float|Opacity||
|bool|Overriding||
<!-- tabs:end -->


### ShouldBeActive <small>Client</small>
Return each frame if your widget should be completly deactivated. This is visually the same as ShouldBeVisible, but internally it stop computing a bunch of things and cannot show up with the hud input key.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|bool|Return||
<!-- tabs:end -->