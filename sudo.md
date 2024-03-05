# Tot ! Sudo API <small>WIP</small>

## API Download

!> **Install instructions**\
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Tot!Sudo 1.0.27](/API/SudoExile.1.0.27.zip ':ignore')

## I_EA_Server_Settings

`I_EA_Server_Settings` is implemented by an Actor (it's a mod controller).  
You can use it to get/set the activate chat system, as well as listen to changes in the active chat system when an admin might toggle it in the admin UI.

To subscribe to the changes, you will need to implement on your own Actor Component this interface: `I_EA_Server_Settings_Observer` and then register it through `I_EA_Server_Settings`.Add Server Settings Observer

To observe server settings changes you need to implement `I_EA_Server_Settings_Observer` on one of your Actor Components, and pass that component into `I_EA_Server_Settings.Add Server Settings Observer`.

#### GetActiveChatSystem <small>Server</small>
Gets the active chat system.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|name|ID|The ID of the chat system.|
|Tot_I_Chat_System|Chat System|An instance of the chat system.|
|EA_S_Chat_System|Chat System Info|Metadata about the chat system.|
|boolean|Is Success|True if the return value is valid.|
|string|Error Message|An error message, if there is one.|
<!-- tabs:end -->

#### GetChatSystemTagName <small>Server</small>
Gets the Component Tag Name by which to search for chat companions.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|name|Tag|The component tag.|
|boolean|Is Success|True if the return value is valid.|
|string|Error Message|An error message, if there is one.|
<!-- tabs:end -->

#### SetActiveChatSystem <small>Server</small>
Sets the current chat system.   
Will trigger observers.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name|ID|The ID of the new chat system.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Is Success|True if the return value is valid.|
|string|Error Message|An error message, if there is one.|
<!-- tabs:end -->

#### AddServerSettingsObserver <small>Server</small>
Adds an observer that will be called whenever there is a change to the server settings above.  
**DON'T FORGET TO REMOVE THE OBSERVER WHEN YOUR COMPONENT GETS DESTROYED / END PLAY.**
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|I_EA_Server_Settings_Observer|Observer|Your own component that implements `I_EA_Server_Settings_Observer`.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Is Success|True if the return value is valid.|
|string|Error Message|An error message, if there is one.|
<!-- tabs:end -->

#### RemoveServerSettingsObserver <small>Server</small>
Removes an observer, so it no longer receives callbacks for server setting changes.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|I_EA_Server_Settings_Observer|Observer|Your own component that implements `I_EA_Server_Settings_Observer`.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Is Success|True if the return value is valid.|
|string|Error Message|An error message, if there is one.|
<!-- tabs:end -->

#### OnChatSystemChange <small>Server</small>
Gets invoked whenever the chat system changes.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name|ID|The ID of the chat system.|
|Tot_I_Chat_System|Chat System|An instance of the chat system.|
|EA_S_Chat_System|Chat System Info|Metadata about the chat system.|

#### **Output**

void
<!-- tabs:end -->

## Item lookup popup

You can open the item lookup popup by calling `I_EA_Sudo_UI.OpenItemLookup`
See also: [⁠documentation⁠Sudo UI Navigation](sudo?id=)

Or by directly activating this UI Module: `EA_Item_Lookup`  
With either method, you will get a reference to `EA_W_Item_Lookup_Modal`. This is the widget that appears on the screen.

It will open in read-only mode by default, allowing the player to just search for items and their stats.

You can call additional functions on the `EA_W_Item_Lookup_Modal` instance to configure it.

#### SetProps <small>Client</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|bool|Can Select|If true, a "Select" button will appear at the bottom of the popup. The player will be able to select the item, which will trigger the `On Item Selected` event.|
|bool|Can Spawn|If true, additional item spawning capabilities will be available inside the popup.|

#### **Output**

void
<!-- tabs:end -->

#### SetWhitelist <small>Client</small>
By calling this function, you can specify a closed list of items available to lookup/select/spawn.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name[]|Item IDs|A list of item IDs.|

#### **Output**

void
<!-- tabs:end -->

#### OnItemSelected <small>Client (Event)</small>
Invoked with the selected item ID when the player clicks the Select button.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name|Item IDs||

#### **Output**

void
<!-- tabs:end -->

## Sudo UI Navigation

To embed your mod's settings UI, for either server or player, you simply need to add a few rows into one of two identical data tables.

`EA_DT_App_Nav` houses the menu entries for the admin panel.  
`EA_DT_Client_Settings_Nav` houses the player's client settings.

They are identical structurally, using `EA_S_App_Nav_Link` as a type.

|type|name|description|
|-|-|----|
|name|Name|The name of the menu item as it will appear in the navigation on the left.|
|string|UI Group|The group under which your menu entry will appear. You probably want this to be your mod's name.|
|name|Permission|The required permission to access this part of your mod's configuration. Leave blank if you want this to be accessible by anyone, always.|
|User Widget|Widget|The class of your settings Widget. Sudo will spawn it and embed in its own container.|

## I_EA_Sudo_UI

This interface allows you to control the Sudo settings panels. You can open/close them and navigate to different pages.

**THIS WILL ONLY WORK ON THE OWNING CLIENT**

The interface is implemented by an `ActorComponent` that sits on the `PlayerController`.

#### NavigatetoAdminPage <small>Client</small>
Opens the Sudo Admin panel and navigates to the given page. If no page is provided, just opens the panel.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name|Page ID|An ID in `EA_DT_App_Nav`|

#### **Output**

void
<!-- tabs:end -->

#### NavigatetoUserSettingsPage <small>Client</small>
Same as `Navigate to Admin Page`, only for the client settings. References `EA_DT_Client_Settings_Nav` instead.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|name|Page ID|An ID in `EA_DT_App_Nav`|

#### **Output**

void
<!-- tabs:end -->

#### CloseAdminUI <small>Client</small>
Closes the Sudo admin window.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void
<!-- tabs:end -->

#### CloseUserSettingsUI <small>Client</small>
Closes the Sudo admin window.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void
<!-- tabs:end -->

#### OpenItemLookup <small>Client</small>
Opens the item lookup popup.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void
<!-- tabs:end -->

#### CloseItemLookup <small>Client</small>
Closes the item lookup popup.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

void
<!-- tabs:end -->

## Makeshift Documention <small>WIP</small>

### Vars, Permissions and Logs
- CharVars 
    - Only replicated to the owner character.
    - All edit functions must be called on the server.
    - All admin functions must be called on the server.

- GlobVars 
    - Server only.

- Auth
    - Permissions and roles are only replicated to the owner.
    - Has Permission and Has Role can be called on the owner client.
    - Everything else is server only.

- Log
    - Server only

How to actually use these APIs?  
All these interfaces can be found as Actor Components on Base Player Char, Global vars can be accessed on separate interface on a mod controller.

![Permission example](/img/screenshot/Permission.png ':size=70%')

### Observables & Observers

Sudo Actor Components (and the GlobVars mod controller) implement various `I_EA_****_Observable` APIs.  
They all offer an `Add Observer` and `Remove Observer` functions.

What you must pass into these functions is your own class - it can be an Actor Component, an Object, whatever.  
So long as it implements the corresponding `I_EA_****_Observer` interface.

Each observer interface has some functions that will be invoked by Sudo whenever things change.  
They all work only on the server, pretty much.  

**CharVars vs GlobVars observers**  
To listen to CharVars, you need to find `I_EA_Vars_Observable` as an AC on `BasePlayerChar`.  
To listen to GlobVars, you need to find an Actor that implements `I_EA_Vars_Observable` - that will be the mod controller.

## Game Escape Menu Navigation <small>1.0.16+</small>

Sudo now add a small menu on the game escape menu on the top right corner.  
You can use the datatable `EA_DT_App_Nav_Buttons` to add new buttons to id.  
The `TableRow` field represent either an Admin Nav panel row, a Client Nav panel row or a Conan UI Module row. Those 3 tables are checked in that order to find the panel you wish to open on click.