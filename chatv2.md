# Tot ! Chat V2 API

## API Download
[API Download Page](api-download)

!> This API is a work in progress, wide changes could happen, or not. Be prepared for potential breaking changes.

## Datatables
### Tot_DT_ChatChannelTypeTable
When creating new kind of channels, this table need to define a few things for it, and the channel class must reference that row name through its `GetChannelType` and `GetEntityType`.

**Data**  
- TypeIcon - Icon of the channel in the channel list
- TypeColor - Color of the text/icon in the channel list
- TypeName - Mostly indicative for the admin part of the mod
- IsRanged - Is your channel range based (Like a local channel)
- CanHaveOwner - Can your channel have an owner UID. This is set in the channel settings by setting an Integer64 `OwnerUID`

### Tot_DT_ChatCommandTable
If you wish to create your own chat commands, they will need to be referenced through this table.  
Commands are sorted by their row name. So it's best to use the command words in the row name.

**Data**
- Command - First word of your command
- SubCommand - Second word of your command (Optional), leave it to none if you don't need one
- TSignal - Should the user send typing signal while this command is being typed.
- Permission - Sudo permission check for the usage of this command.
- Class - Class of your command. This must implement the interface `Tot_I_ChatCommand`, and it can be a `UObject` or an `Actor`.
- HelpContent - The main description of your command
- HelpArguments - Arguments of your command and their description

### Tot_DT_ChatEntityFormTable
When creating a new channel, you will have to declare a row here using your channel type as a row. This is the setting edition part of your channel.

**Data**
- Name - Display name, not actually used as far as I remember
- Form - UserWidget class, must implement the interface `Tot_I_ChatEntityForm`

### Tot_DT_ChatLanguageFontTable
If you wish to add fonts for language scramble, that's where you'd do it. For best effect, it's preferable to add fonts that don't actually display letters.
When adding fonts to mods, you must configure your FontFace files `LoadingPolicy` as `Inline` and not `LazyLoading`

**Data**
- DisplayName - Name used in the admin panel, when selecting a font for a language
- Font - The actual font file to use

### Tot_DT_ChatStyleTable
First part of creating a theme, the style DataTable used for messages. I won't be detailing how RichText Styles work here, as they are Unreal Engine 5 ones, instead I'll list all the row name tags used by the chat standard messages.
This table can also be used to define Style override and have your own tags in a message. A message style can be overriden using its headers, by setting the string value `TextStyle` with the row name of your style.

**Data**
- Name - Display name, not actually used.
- DataTable - Your RichText style DataTable

!> To maintain message consistency, the font should have a size similar to Open Sans at 12. Font size selected by user is a Font Scale, so if your font is bigger than usual or smaller than usual, it will show. The mod use Open Sans font everywhere as its default, which is available in the Sudo API common folder.

**Row Names for a standard Message Style**
- `Default` - Never used, as the default is always overriden for language scrambling
- `Header.SenderName` - Not actually used at the moment, but this would color the name of the author in messages.
- `Header.Timecode` - Not actually used at the moment, but color the time code in the message content.
- `Content.Emote` - Font of the emote part of messages
- `Content.Speech` - Font of the speech part of messages
- `Content.OOC` - Font for messages that start with a parenthesis. No other Content tags are used at all when an OOC message is detected, even languages are skipped
- `Content.Info` - Used for notifications of Info level
- `Content.Warning` - Used for notifications of Warning level
- `Content.Error` - Used for notifications of Error level
- `Content.Item` - Tag used for item reference insertion
- `Content.Edited` - Font used for the small "Edited/Original" tag at the bottom of a message.
- `Content.Language` - Style the language tag at the beginning of a message when a non Universal language is used.
- `Content.Success` - Used for notifications of Success level

### Tot_DT_ChatThemeTable
Second part of creating a theme, each row is a theme.

**Data**
- Name - Display name of your theme
- Preview - Screenshot of your theme to display in the settings
- DefaultChatStyleRow - The chat style row defined in `Tot_DT_ChatStyleTable`
- SenderColorDefault - Character name color, when the user is not displaying role colors
- TimecodeColorDefault - Message timecode color
- BackgroundABrush - Each chat window use 2 border for more complex effects. BackgroundA is the first border, which contains BackgroundB, which contains whatever content the window has. So you could have a background and a border with this setup. Background color/image **should always** be BackgroundA, as it is the one controlled by the Background Opacity of the user.
- BackgroundAPadding - Padding of the first background border
- BackgroundBBrush - Brush of the second background border
- PaddingBackgroundB - Padding of the second background border
- ChannelHeaderBrush - Background brush of the Channel header border, which contain the channel name and buttons
- ChannelListBrush - Background brush of the channel list, when folded
- ChannelOpenedListBrush - Background brush of the channel list, when unfolded
- ButtonBrush - Most button will use this style, save for a few. Traditionally, these button don't have a background in their normal state.
- RightButtonBrush - Only used by the Range buttons (For now). Mostly represent a button on the right side of a duo glued together. This one traditionally has a background on normal state.
- LeftButtonStyle - Only used by the Range buttons (For now). Mostly represent a button on the left side of a duo glued together. This one traditionally has a background on normal state.
- TextFont - Main text font of the window, outside the chat messages.
- ButtonContentColor - Multiplicative color of the content of buttons. This will affect icons as well as text.
- TagBrush - Brush for tags. This will be color multiplied with the Tag color, so it should be gray/white.
- InputField - Background border brush of the input field in a normal state
- InputFieldEditing - Background border brush of the input field while editing a message, traditionally blue.
- InputFieldCommand - Background border brush of the input field while typing a command state, traditionally green.
- InputFieldTextColor - Text color of the input field.
- Separator - Border brush of the various separator in channel list, channel header and log area, vertical or horizontal.
- ChannelNameColor - Color of the channel name label in the channel header 
- Scrollbars - Style of all the chat scroll bar, at the time of writing this concern the log scroll bar and Typing Area scroll bar.
- CancelEditButton - Style of the cancel edit button, traditionally blue
- CancelEditButtonText - Text color of the cancel edit button
- FullButton - Button with an actual background on normal state. This concern the Load Cache button and language button.
- Channel Brush - Style of the channel button in the channel list. This should be gray or white to allow the multiplicative color of channel types to work
- DisableBlur - Disable blur behind every window
- DisableShadow - Disable the shadow behind every window (This should be considered carefully, as the shadow is useful to distinguish windows hovering each other. If you have a border, this shouldn't be a problem)
- InfoColor - Standard color of notification of Info level 
- WarningColor - Standard color of notification of Warning level
- ErrorColor - Standard color of notification of Error level
- SuccessColor - Standard color of notification of Success level
- MessageBackground - Background border brush of a message in a normal state. Traditionally, this should be completely invisible, and the brush set to none.
- MessageBackgroundPrint - Background border brush of a message when a message is a notification or mention. Basically when a message has been colored. This should never be invisible. This should be gray or white, as it is multiplied by the level colors defined just above.
- MessageBackgroundHover - Background border brush of a message in a hovered state.
- MessageBackgroundPrintHover - Background border brush of a message in a hovered state when colored by notification or mention. This should be gray or white, as it is multiplied by the level colors defined just above.
- PopupPanelTitleBar - Background border brush of the popup window title bar, used for focus mode window, export, language selection, etc...
- CornerRadius - This should **Always** be the corner radius defined in your BackgroundA/B brush, as it drive the corner radius of the blur effect.
- SpeechColor - The default color of speech in text. This should be the same as the one defined in `Content.Speech` of your style. It is used to color scrambled languages.

## Interfaces

### Tot_I_ChatChannel
Interface used for channels, if you want to make custom channel types. This should **always** be implemented along with `Tot_I_ChatEntity`.  
Channels are actors with an actor persistence component. They shouldn't be anything else. They shouldn't be replicated either. For best practice, you should create your channel as a child of the BaseChannel class provided in the API. 

#### DestroyChannel
```csharp
// Server
function DestroyChannel(out bool Success, out string ErrorMessage);
```
Called when a channel should be closed and destroyed. If you're implementing your own channel type, you should not forget to also call the delete database function of your persistency component.

#### GetChannelUID
```csharp
// Server
function GetChannelUID(out long ReturnValue);
```
Simply return the UID of the channel in Integer 64 format. While implementing your channel, this is the Unique ID of your pe component. You can convert it to Int64 using the helper function.

#### SendMessage
```csharp
// Server
function SendMessage(Guid Guid, long Sender, Tot_S_ChatHeader Headers, string Content);
```
Send a message in this channel. You can leave the Sender to 0 if you wish to perform a notification of some kind. Message with a sender 0 are headless message that will skip traditional checks for users. Guid **is always** a newly generated one with `NewGuid` function. For Headers, check the Header section lower.

#### SendTSignal
```csharp
// Server
function SendTSignal(long Sender, Tot_S_ChatHeader Headers);
```
Send a typing signal in the channel. In general, you should never use this. This is used by the ChatUser class when players are typing. Signal will disappear after 5sec without sending a new one.

#### ConnectUser
```csharp
// Server
function ConnectUser(Tot_I_ChatUser user, string Password, bool ForceSwitch);
```
Connect a user to the channel. For proper implementation of the function, check the base channel class provided in the API. ForceSwitch will switch the channel automatically for the channel UI once opened. 

#### DisconnectUser
```csharp
// Server
function DisconnectUser(Tot_I_ChatUser user);
```
Disconnect a user from the channel, removing it from the user Channel List.

#### GetChannelName
```csharp
// Server
function GetChannelName(out string ReturnValue);
```
Display name of the channel for Admin sections

#### GetPersonalizedChannelName
```csharp
// Server
function GetPersonalizedChannelName(Tot_I_ChatUser user, out string ReturnValue);
```
Display name personalized for a given user. This is used in the chat channel list and the channel header name for this specific user.

#### GetConnectUsers
```csharp
// Server
function GetConnectUsers(out Tot_I_ChatUser[] ReturnValue);
```
List all the users connected to this channel

#### GetChannelType
```csharp
// Server
function GetChannelType(out Name ReturnValue);
```
Channel type row of you channel. It is **always** identical to the row name defined in `Tot_DT_ChatChannelTypeTable` and `Tot_DT_ChatEntityFormTable`

#### BindObserver
```csharp
// Server
function BindObserver(Tot_I_ChatChannelObserver Observer);
```
Bind an observer to a channel, to receive the message going through it. Your observer will be reported in the server log along with the path of its class for accountability.

#### UnbindObserver
```csharp
// Server
function UnbindObserver(Tot_I_ChatChannelObserver Observer);
```
Unbind a previously bound observer from the channel. Don't forget to unbind your observer or EndPlay/Destroy of your object.

#### IsUserConnected
```csharp
// Server
function IsUserConnected(Tot_I_ChatUser User, bool ReturnValue);
```
Is the user connected to the channel

### Tot_I_ChatChannelObserver
Should be implemented by classes that wish to observe a channel.

#### MessageProcessed
```csharp
// Server
function MessageProcessed(Guid Guid, long Sender, long Channel, Tot_S_ChatHeader Headers, string Content);
```
Called when a message has been sent through a channel. 

### Tot_I_ChatCommand
Implemented by commands, which are either UObjects or Actors. Never call a command directly, commands should be executed by the `Tot_I_ChatUser`. 

#### ExecuteCommand
```csharp
// Server
function ExecuteCommand(Name CommandRow, long sender, long channel, Tot_S_ChatHeader Headers, string[] Arguments);
```
Channel is the channel UI from which the command was typed from. The Arguments are the message split by spaces, minus the words of the command that have been stripped from the beginning. The command row is simply the datatable row of the command.

### Tot_I_ChatCommandHandler
Command handlers are simply fallback mechanism. When no normal command has been found, the command is sent to the handlers that can choose or not to handle it. For example, Tot!Admin use this mechanic to turn a script into a command.

#### HandleCommand
```csharp
// Server
function HandleCommand(Name Command, Name SubCommand, long Sender, long Channel, Tot_S_ChatHeader Headers, string[] Arguments, out bool Handled);
```
Nothing out of the ordinary here, but the implementation should return true if the handler did handle the command, to prevent other handler from receiving it.

### Tot_I_ChatDisposableChannel
Disposable channels are channels that will be checked every 30 minutes for auto-disposal. If your channel should be automatically destroyed under certain conditions, you should implement this interface. In ChatV2, Direct channels and Guild channels are set to be automatically destroyed after 3 days of non activity.

#### CanBeGarbageCollected
```csharp
// Server
function CanBeGarbageCollected(out bool ReturnValue);
```
Can the channel be garbage collected? If true is returned, Collect Garbage will be called next.

#### CollectGarbage
```csharp
// Server
function CollectGarbage(out bool ReturnValue);
```
When called your channel should do the necessary to remove itself from the database, and tie up all the loose ends before destroying itself.

### Tot_I_ChatEntity
Chat entities are the Server, the Channels or the Users. It's an abstract concept to group the management of the settings under the same UI/function calls. Every channel and Users should be implementing this interface.

#### GetEntitySettings
```csharp
// Server
function GetEntitySettings(out Tot_S_ChatHeader ReturnValue);
```
Get the entity settings. For detail about the Chat Headers, see the dedicated section.

#### SetEntitySettings
```csharp
// Server
function SetEntitySettings(Tot_S_ChatHeader Settings);
```
Set the entity settings, which can trigger a replication after a  (When implementing your channel, you should always put a delay before replicating to bundle up multiple calls into one replication). For detail about the Chat Headers, see the dedicated section.

#### GetEntityType
```csharp
// Server
function GetEntityType(out Name ReturnValue);
```
Entity type that correspond to the Entity Form row.


#### GetEntityName
```csharp
// Server
function GetEntityName(out string ReturnValue);
```
Display name of the entity, mostly for admin panel purposes.

#### GetEntityUID
```csharp
// Server
function GetEntityUID(out long ReturnValue);
```
Simply return the UID of the entity in Integer 64 format. While implementing your entity, this is the Unique ID of your persistency component. You can convert it to Int64 using the helper function.

### Tot_I_ChatEntityForm
Implement on UserWidgets form for a given entity. This is needed for the forms you declare in the entity form table. The form is a piece of UI that aim at editing the settings of an Entity. Settings are retrieved internally by the chat and the RPC is handled behind the scene, to be given to your form and retrieved on user save.

#### SetSettings
```csharp
// Client
function SetSettings(long EntityUID, Name EntityType, string EntityName, Tot_S_ChatHeader Settings);
```
This will be called on your form to pass the data of the edited entity.

#### GetSettings
```csharp
// Client
function GetSettings(out Tot_S_ChatHeader Settings);
```
This will be called on your form when the user press save.

### Tot_I_ChatServer
Unlike in Chat V1, the server class has a more modest role. It's mostly there to store a bunch of server data and settings, take care of message caching and a few other things. It does not handle messages at all, as user send their messages directly to channels.

#### GetRangesLength
```csharp
// Server/Client
function GetRangesLength(out int ReturnValue);
```
Length of the Range List

#### GetRangeAt
```csharp
// Server/Client
function GetRangeAt(int index, out Guid guid, out string Name, out Name Command, out float Range, out Color Color);
```
Get the data of a range at a given index.

#### GetRange
```csharp
// Server/Client
function GetRange(Guid guid, out int index, out string Name, out Name Command, out float Range, out Color Color);
```
Get the data of a range corresponding to a given index. Index is -1 if the Guid was not found.

#### GetDefaultRange
```csharp
// Server/Client
function GetDefaultRange(out Guid Guid);
```
Get the default range (Which is always the first of the list)

#### GetLanguageLength
```csharp
// Server/Client
function GetLanguageLength(out int ReturnValue);
```
Get the length of the Language List

#### GetLanguageAt
```csharp
// Server/Client
function GetLanguageAt(int index, out Guid Guid, out string Name, out Name Font, out bool Admin Only, out bool Universal, out float StartingKnowledge, out int LearningFraction, out float LearningPower);
```
Get the data of a Language at a given index. Font is the row of the fantasy font used for scrambling, LearningFraction and Learning power are the two element of the Learning curve (x/Fraction^Power)

#### GetLanguageAt
```csharp
// Server/Client
function GetLanguageAt(Guid Guid, out int Index, out string Name, out Name Font, out bool Admin Only, out bool Universal, out float StartingKnowledge, out int LearningFraction, out float LearningPower);
```
Get the data of a Language for a given Guid. Index is -1 if the Guid was not found.

#### ExecuteCommand
```csharp
// Server
function ExecuteCommand(long sender, long channel, Name CommandRow, Tot_S_ChatHeader Headers, string[] Args);
```
Should not be called directly. Command execution should be called from the User, or some of the code will be skipped. 

#### GetMainChannels
```csharp
// Server
function GetMainChannels(out Tot_I_ChatChannel MainGlobal, out Tot_I_ChatChannel MainLocal);
```
Return the two main channels as defined by the staff. upon the first launch of Chat, the server will create both automatically, but they can be deleted by the staff or recreated/changed. Check for validity before handling them. It's okay for a system to refuse working if a main channel is not defined. ChatV2 does this for a couple commands.

#### GetGuildChannelOrCreate
```csharp
// Server
function GetGuildChannelOrCreate(Unique_ID GuildUniqueID, out Tot_I_ChatChannel ReturnValue);
```
Does what it says. Will create a channel automatically if a given clan doesn't have one. A Guild channel is deleted after 3 days of inactivity (connection or messages)

#### PushChannelCache
```csharp
// Server
function PushChannelCache(Guid guid, long Sender, long Channel, Tot_S_ChatHeader headers, string Content);
```
Push a chat message into the server cache. If you implement your own channel, and it should support channel cache, then every message should be pushed to the cache. The server will serve the cache on its own, with no involvement of the channel. The exception to this are Ranged channel, which cache their message on the client. So if `IsRanged` check in the Channel definition of the datatable, don't push cache on server.

#### PurgeChannelCache
```csharp
// Server
function PurgeChannelCache(long Channel);
```
Purge all the cache a server has for a given channel

### Tot_I_ChatToolbox
Only available on Client. Find with `GetAllActorWithInterface`. Provide helper functions.

#### ParseText
```csharp
// Client
function ParseText(string Text, Tot_S_ChatHeader Headers, int LanguageSeed, float LanguageKnowledge, bool RemoveEmotes, out string ReturnValue, int[] InsertedItems, Name LanguageFont);
```
Make use of the chat parser. While greatly optimized in comparison of the V1, this is still performed on Client for practical reason. And it is still and expensive operation, specially when it involved languages.  
Languege font is provided as return, as it is used to access the datatable, to set the rich text default override to handle the font. Scrambled part of a message are the default text of a rich text, while clear speech is Content.Speech. This is what allow the Language Font API.   
RemoveEmote is the behavior of the Bubble setting, which allow to hide emotes when requested by a user setting.

#### SpawnUserBubble
```csharp
// Client
function SpawnUserBubble(Tot_I_ChatUser User, out Tot_I_ChatUserBubble ReturnValue);
```
Spawn a bubble on a third party user. The actor need to have a Sudo nameplate. 

### Tot_I_ChatUser
A chat user. This can be a player, or an NPC. A User is **Always** an ActorComponent. When the User is ready to be found by `GetChatUser` among other systems, the component should set the Tag `TotChatUser` on his Actor tags. This is what allow the user to be found and listed.

#### GetUserUID
```csharp
// Server/Client(For BPC only)
function GetUserUID(out int ReturnValue);
```
Unique_ID of the user, directly converted from the persistency.

#### GetUserName
```csharp
// Server/Client(For BPC only)
function GetUserName(out string ReturnValue);
```
Get the display name of the User, as displayed in the chat when posting. For BPC, this is a simply shortcut to Sudo's Display Name API call.

#### GetUserTransform
```csharp
// Server/Client(For BPC only)
function GetUserTransform(out Transform ReturnValue);
```
Get the Actor transform of the user. This is used by Ranged channel to check for the range.

#### GetKnownLanguageLength
```csharp
// Server
function GetKnownLanguageLength(out int ReturnValue);
```
Length of the Known Language list

#### GetKnownLanguage
```csharp
// Server
function GetKnownLanguage(Guid guid, out float Knowledge, out int index);
```
Get the current knowledge of a language from 0 to 1. Index is -1 if Guid is not found.

#### GetKnownLanguageAt
```csharp
// Server
function GetKnownLanguageAt(int index, out float Knowledge, out Guid Guid);
```
Get the current knowledge of a language at a given index

#### SetKnownLanguage
```csharp
// Server
function SetKnownLanguage(Guid guid, float Knowledge, out int index);
```
Set the current knowledge of a language, and return the index

#### RemoveKnownLanguage
```csharp
// Server
function RemoveKnownLanguage(Guid guid);
```
Remove the language knowledge if the user has any

#### MessageReceived
```csharp
// Server
function MessageReceived(Guid guid, long sender, long Channel, Tot_S_ChatHeader Headers, string Content);
```
Called by a channel when receiving a message, or can be called directly to send notifications for example.

#### TSignalReceived
```csharp
// Server
function TSignalReceived(long Sender, long Channel, Tot_S_ChatHeader Headers);
```
Called to transmit a typing signal to the user. I don't believe this will ever be used outside the Chat own needs, but it's there because the chat use its own API. A Typing signal last for 5 second.

#### SendMessageAsUser
```csharp
// Server
function SendMessageAsUser(Guig guid, long Channel, Tot_S_ChatHeader Headers, string Content);
```
Send a message as if sent by the user. Do not send commands through there, it's already too late in the chain.

#### BindObserver
```csharp
// Server
function BindObserver(Tot_I_ChatUserObserver Observer);
```
Bind an observer to receive the message sent/received by the User. Your observer will be reported in the server log along with the path of its class for accountability.

#### UnbindObserver
```csharp
// Server
function UnbindObserver(Tot_I_ChatUserObserver Observer);
```
Unbind a previously bound observer from the user. Don't forget to unbind your observer or EndPlay/Destroy of your object.

#### OpenConnectedChannel
```csharp
// Server
function OpenConnectedChannel(long channel, bool ForceSwitch, string SavedPassword);
```
Called by channels upon successful connection. This effectively open a new channel on the UI for human users, and the ForceSwitch will switch the channel upon opening.

#### ChannelSettingsChanged
```csharp
// Server
function ChannelSettingsChanged(long channel, Tot_S_ChatHeader Settings);
```
Called by channel on their connected users, whenever the channel has received a change to its settings.

#### CloseDisconnectedChannel
```csharp
// Server
function CloseDisconnectedChannel(long channel);
```
Called by channels upon user disconnect, which effectively close the channel from the UI for human users.

#### ServerSettingsChanged
```csharp
// Server
function ServerSettingsChanged(Tot_S_ChatHeader Settings);
```
Called by the server to every user with the `TotChatUser` tag on their actor, whenever the server has received a change to its settings. (This does not include changes to Range/Languages)

### Tot_I_ChatUserBubble
Interface for the Speech Bubble. Only present on a client as an ActorComponent.

#### MessageReceived
```csharp
// Client
function MessageReceived(Guid Guid, long Sender, long Channel, long Recipient, Tot_S_ChatHeader headers, string Content);
```
Send a message to the bubble only. This will only work for the MainLocal channel, and if the Recipient is equal to the ChatUser UID located on the same actor.

#### TSignalReceived
```csharp
// Client
function TSignalReceived(long Sender, long Channel, long Recipient, Tot_S_ChatHeader headers);
```
Typing signal for bubbles.

#### GetEffectiveRange
```csharp
// Client
function GetEffectiveRange(out float ReturnValue);
```
Return the range at which the bubble should be seen given its content. This includes the biggest effective range in its current messages, and the range of the typing indicator. 

### Tot_I_ChatUserObserver
Observer for a User. 

#### UserReceivedMessage
```csharp
// Server
function UserReceivedMessage(Guid Guid, long Sender, long Channel, long Recipient, Tot_S_ChatHeader headers, string Content);
```
Called whenever a bound user receive a message. This includes edition of past messages.

#### UserSentMessage
```csharp
// Server
function UserSentMessage(Guid Guid, long Sender, long Channel, Tot_S_ChatHeader headers, string Content);
```
Message sent by the user. This does not include edition emitted, as those take another route entirely, and skip channels to go directly to users as a global message, regardless of its original channel.

### Tot_I_ChatMessageAction
Implemented on the components on the main client BasePlayerChar, this can be used to insert menu elements in every chat messages.

#### GetActionMenuRow
```csharp
// Server
function GetActionMenuRow(long AuthorUID, Tot_S_ChatHeader Headers, out Name MenuKey, out string MenuLabel);
```
This is called when the menu is built, to insert menu elements into menu. Return None as a MenuKey to not insert anything.

#### OnActionClicked
```csharp
// Server
function OnActionClicked(Name MenuKey, long AuthorUID, Tot_S_ChatHeader Headers, Widget ButtonWidget);
```
Called when third party action is clicked, to perform the action. The button widget is here as a reference to use as an anchor for popups or similar effects.

## Chat Headers
Chat headers are simply how the chat store most of its Key/Value data. It's used for Entity settings, such as the server, the users or the channels, but also as message headers or typing signals.  
Here is the following values used by ChatV2, but your own channels may use whatever they wish. Avoid making headers too crowded, they are replicated after all and should stay as lean as possible.

### Message Headers
- `SenderName` (String, "") - Name of the Sender that will be displayed in the header.
- `RangeGuid` (Guid, None) - Range of the message as selected by the User. Only useful for Range based channels
- `LanguageGuid` (Guid, None) - Language of the message as selected by the User. Only useful for channels allowing languages
- `CastBubble` (Bool, True) - Set to `False` to prevent the message from being displayed in a bubble (Currently not implemented, but message with sender set to 0 will not land on bubbles)
- `TextStyle` (String, "") - Override the RichText Style used for this message for a target row of the Style datatable. To Node: The default style of text is always overriden, so never use it.
- `PrintLevel` (String, "") - Apply a color tag on message text and a special background/border. Levels are: `Info`, `Warning`, `Error` and `Success`. There is a helper function to create notification header like these.
- `LocationOverride` (Vector, None) - Specify a message 3D location that is different from the sender location. Useful for Headless message (Sender=0), that do not have a sender for range based channels.
- `Stop` (Boolean, False) - Is a stop typing signal for when the user delete its message, only used in TSignal headers.
- `Edited` (Boolean, False) - Differentiate an edited message from a normal one. Edited message do not go through normal channels.
- `EmoteFormating` (String, "") - Emote formating used by the sender
- `StandaloneEmoteFormating` (String, "") - Emote formating used by the sender in the context of emote command (/me, /do, /tell). When not specified, the normal EmoteFormating is used. This effectively replace EmoteFormating when reaching one of these commands.
- `RoleKey` (String, "") - Highest role that display its color assigned to the user.
- `RoleName` (String, "") - Highest role that display its color assigned to the user.
- `RoleColor` (String, "") - Highest role that display its color assigned to the user.
- `LocalUTC` (Int64, 0) - Unix Timestamp that represent the client time at message reception. This only exists on client side and is never found through the existing API.
- `ServerUTC` (Int64, 0) - Unix Timestamp that represent the server time just before being send to the User client.
- `Knowledge` (Float, 0.0) - Added just before the message is received by the client, to bake the knowledge the client had at message reception
- `Seed` (Int, Random) - Added just before the message is received by the client, to bake the message seed the client had at message reception (It should never change normally but just in case)
- `Chained` (Bool, False) - Cache related header. Was the message chained after another from the same sender in identical conditions? Never seen through the current API.
- `Distance` (Float, 0) - Added by Ranged channel, to store the distance between Sender and Recipient when this message was sent. This is so that the focus mode can function on cached messages.
- `EffectiveRange` (Float, 0) - Added by Ranged Channels, to store the retrieved range from the server settings at the time of posting. Can be used by notifications before posting to manually specify a range that is not part of the server Range collection.
- `RangeTag` (String, "") - Feed the range tag of a message with arbitrary text. it will take the color of the PrintLevel, and override the actual range of a message, even if specified.
- `PopNotification` (Boolean, False) - Display the message as a brief popup on the first chat window, and does not generate any chat log or client cache. This should never be used through a channel that might cache the message.

### User Settings
- `UnderstandEverything` (Bool, False) - Disable the scrambling of all languages, effectively setting all his message Knowledge to 1.0.
- `Silenced` (Bool, False) - Prevent a user from posting anything, save for commands.
- `Seed` (Int, Random) - A seed generated on first connection, used to generate pseudo-random elements, such as the language scrambler. This should never be changed for any reason.

### Channel Settings
- `Password` (String, "") - Set a password for the channel. It's up to the channel to check on connection that the password is indeed valid.
- `Notifications` (Bool, False) - Does the Channel send connection notification
- `Locked` (Bool, False) - Can users post in this particular channel? Moderators ignore this, as well as channel owners.
- `Name` (Bool, Different depending on channel) - General name for the channel. Personalized names can apply in some cases, that won't be reflected by this value.
- `ReadOnly` (Bool, False) - Prevent user from typing/posting in this channel. Useful to have a notification channel. This effectively is a stronger version of locked, only it also hide the typing field, preventing moderators from also posting.
- `UseLanguage` (Bool, False) - Toggle the use of languages on a channel
- `UseICFeatures` (Bool, False) - Toggle IC Features on a channel, which include emotes and emote commands.
- `OwnerUID` (Integer64, 0) - The owner of the channel. Owner can open the channel player list, kick users out of it, and change the password. Every chat moderator is considered owner of every channel.

### Server Settings
- `GuildLocked` (Bool, False) - Can users post in any clan channel? Moderators ignore this
- `GlobalLocked` (Bool, False) - Can users post in any global channel? Moderators ignore this
- `MaxMessageLength` (Integer, 2000) - Max length of a user message
- `FirstLaunch` (Bool, False) - Was the first server launch routine executed
- `MainGlobal` (Integer64, 0) - The main global channel of the server, user can't leave this one
- `MainLocal` (Integer64, 0) - The main local channel of the server, user can't leave this one
- `MessageInServerLogs` (Bool, False) - Should messages be sent in the server logs? This does not include Direct Channels.
- `PlayerLanguageCredit` (int, 0) - How many languages a player can select themselves.
