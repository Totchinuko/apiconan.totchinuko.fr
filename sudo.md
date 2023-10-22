# Tot ! Sudo API

## API Download

!> **Install instructions**\
1- Extract this into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Tot!Sudo 1.0.13](/API/SudoExile.1.0.13.zip ':ignore')

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