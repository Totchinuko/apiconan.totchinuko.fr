# Roleplay Redux API

## Modding Resources

### Assets
If you'd like to override the Redux Runes with your own server mod, here are all the images and IDs used by the mod.

[Download Runes](/API/RoleplayRedux.Runes.7z ':ignore')

[Download Potions](/API/RoleplayRedux.Potions.7z ':ignore')

[Download Scrolls](/API/RoleplayRedux.Scrolls.7z ':ignore')

### Example

Example of how to consume the API.

The interface name you're looking for is `I_RP_Dice_Component`

![RR Api Example](/img/screenshot/RR.Example.png ':size=70%')

### Node.js Webserver

This is a simple implementation of a webserver in NodeJS.  
If you want use RR's web hooks, you'll need to host this (or something similar, this is just an example) on your own server.

Inside `/routes/index.js` you'll find two endpoints:   
`/message` receives chat messages  
`/log` receives all the stuff that goes into the ingame mod's log

You'll need to replace YOUR_WEBHOOK_HERE with your actual Discord webhook.  
Once this is hosted and running, input your URL into RR.

This thing is provided as is and I do not wish to become its tech support.   
All issues you may run into while getting this to run can be solved with Google.  
Good luck!

**Download**: [Web Server](/API/webserver.7z ':ignore')

### Player Chat Logger

You can configure RR to log all your incoming chat messages. It works as a webhook, so you'll need to host a service on your own.   
This can run locally on your PC, or somewhere in the cloud.

Here is a simple server I implemented. It will create a `.txt` under `/log` wherever you place it, and dump all chat messages in there.

You'll need NodeJS to run this.  
https://nodejs.org/en/

Once you have that installed, download the attached file, open its folder in CMD (command line), and type: `node chat-logger.js` 
Also leave the window open.

You'll need to enable the logger ingame, in your settings window. The URL for this mini-logger is `http://localhost:3000/message`

![LocalWebhook](/img/screenshot/LocalWebhook.png 'size=70%')

**Download API**: [chat-logger.js](/API/chat-logger.js ':ignore')

## Roleplay Redux API Download

!> **Install instructions**\
1- Extract this into `...\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\`, the end result should be `..\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\RoleplayRedux\I_RP_DiceComponent.uasset`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Roleplay Redux 2.0.0](/API/RoleplayRedux2.0.0.7z ':ignore')

## Roleplay Redux Embedded API

This allows you to embed your dice system in its entirely into your server mod.

**Why would you want to do this?**  
1. No download will happen when a player connects. It's already in your server mod.
2. No character limit. You may come to regret this.

**Why would you not want to do this?**  
1. Cannot update it live. You'll need to push a mod update.

**How?**  
1. Extract this in your /ModsShared folder.
2. Make a data table using the provided Struct.
3. Put your dice system into the data table. It doesn't matter what the ID is, it will always use the first thing it finds.
4. Merge tables.
5. Publish your mod.

**Editing**  
You can still use the ingame dice system editor, but saving will do nothing. You'll need to export the text and put it in your mod.

**Download API**: [Roleplay Redux Embedded 1.0.0](/API/RoleplayRedux.Embedded.1.0.0.7z ':ignore')

## API

**Client/Server**  
All API calls can be made on both client and server.  
If calling things on the client, they'll be routed to the server on your behalf. 

NOTE: You may only make client API calls on the owning client. For example, if a player interacts with an item that grants him a Perk, and you decide to make the API call on the client, it has to be done from this player's client.

**API Functions**
All API functions return a Success boolean and an Error Message string.  
Naturally, when Success == true the Error Message will be empty.  
Some APIs may return additional data.

**Performance**
I suggest you refrain from spamming the API. Every call it has to re-calculate the entire character sheet before spitting out an answer. If you do need to do some intensive checks, I would recommend you do it on the player's client so you don't lag out your servers. 

#### Roll <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Attribute or Skill|The name of the attribute or skill you wish to roll.|
|int|Roll Modifier|A roll modifier, just how you'd use it from the UI.|
|string|Roll Modifier Comment|Same as the roll reason in the UI, will be appended to the roll message.|
|boolean|Show In Chat|If true, the roll will be displayed in the character's bubble/chat. If false the roll will be done in secret.|

#### **Output**

|type|name|description|
|-|-|----|
|bool|Did Roll|Indicates whether the roll succeeded. You can only roll attributes/stats that the character has access to.|
|int|Roll Result|The total roll + any bonuses.|
|string|Character Name|The acted character name.|
|string|Formatted Message|The message that would normally appear in chat/bubble.|
<!-- tabs:end -->

#### GetSkill <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Skill Name|The name of the Attribute or Skill.|

#### **Output**

|type|name|description|
|-|-|----|
|int|Allocated Points|The number of points the player has allocated to this skill.|
|int|Total Bonus|The total bonus currently applies to this skill.|
|boolean|Success|False if the character doesn't have access to this attribute/skill, or if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### GetStat <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|StatName|The name of the Stat.|

#### **Output**

|type|name|description|
|-|-|----|
|int|Current Value|The temporary value of the stat, whether it is player set or not, after all modifiers have been applied.|
|int|Max Value|The maximum posssible value for the stat after all modifiers were applied.|
|boolean|Success|False if the character doesn't have access to this attribute/skill, or if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### AddPerk <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Perk Name|The name of the Perk to grant.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### RemovePerk <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Perk Name|The name of the Perk to remove.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### HasPerk <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Perk Name|The name of the Perk to remove.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|HasPerk|True if the character has the Perk.|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### RemoveAllPerks <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### HasRune <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|int|Item ID|The item ID of the desired Rune.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Is Equipped|True if the player has the Rune equipped.|
|boolean|Is Active|True if the Rune is also active (after meeting all the dice rule conditions)|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### GiveBuff <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Category|The Buff category.|
|int|Type|The type of buff.|
|string|Target|The name of the target thing you'd like to buff. Type in your Attribute/Skill, Stat, Perk, Ability, Status here.|
|int|Modifier|The modifier to apply to the Attribute/Skill/Stat. Does nothing for Perks, Abilities and Statuses.|
|int|Duration Minutes|The duration of the Buff in minutes.|
|int|Delay Minutes|The delay of the buff in minutes.|

**Buff Types**:  

0. Modify Attribute/Skill
1. Modify Stat
2. Grant Perk
3. Grant Ability
4. Grant Status
5. Unlock Status

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### HasBuffCategory <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Buff Category|The buff category to check for.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Has Buff|True if the character has any buff in the given category.|
<!-- tabs:end -->

#### RemoveBuffCategory <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Buff Category|The buff category to remove.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|Always returns true.|
<!-- tabs:end -->

#### RemoveAllBuffs <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|Always returns true.|
<!-- tabs:end -->

#### LearnSpell <small>Client/Server</small>
Teaches the character an Ability that will be available regardless of Perks and Mutators.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Spell Name|The name of the Ability to learn.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### ForgetSpell <small>Client/Server</small>
Unlearn an ability previously given by the API. This will not affect any Abilities granted via Perks and Mutators.
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Spell Name|The name of the Ability to unlearn.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### ForgetAllSpell <small>Client/Server</small>
Resets all spells that were previously learned via the API.
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### HasSpell <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Spell Name|The name of the Ability to check for.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Has Spell|True if the character has access to this Ability.|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### ResetCharacterSheet <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### TriggerSpell <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Spell Name|The name of the Ability to trigger.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### ModifySkill <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Skill Name|The name of the Attribute or Skill to modify. This will permanently change the number of allocated points to the skill.|
|int|Modifier|By how much to modify the Attribute/Skill.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### ModifyStat <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Stat Name|The name of the Stat modify. This will change the stat similarly to how a player might via the UI. Stats with a "can modify" setting will have their temp value changed. Otherwise, the max value will be changed.|
|int|Modifier|By how much to modify the Stat.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### SetStatMaxOverride <small>Client/Server</small>
<!-- tabs:start -->
#### **Input**

|type|name|description|
|-|-|----|
|string|Stat Name|The name of the Stat to modify. This will override any computed maximum values for the Stat. To reset it back to it's default value, set it to -1.|
|int|Max Override|The new value to set.|

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
<!-- tabs:end -->

#### GetCharacterSheet <small>Client/Server</small>
This returns the character sheet in a simplified format, so that it can actually be exported without passing custom structs between mods. To work with Attributes, Skills and Stats you will need to add a bit of your own logic.  
The returned arrays all have matching indexes, so you can match a skill name to its numerical values based on index.

For example: Find the index of "Dexterity" in the Skills array, and use it to query the Skills Total array. 
<!-- tabs:start -->
#### **Input**

void

#### **Output**

|type|name|description|
|-|-|----|
|boolean|Success|False if an error occurred.|
|string|Error Message|An error message.|
|string|Character Name|The acted character name.|
|string[]|Skills|An array of skill names.|
|int[]|Skills Allocation|An array of skill allocations.|
|int[]|Skills Total|An array of skill totals.|
|string[]|Stats|An array of stat names.|
|int[]|Stats Current|An array of the current stat values.|
|int[]|Stats Max|An array of the maximum stat values.|
|string[]|Active Perk|An array of perk names.|
|string[]|Active Perk Categories|An array of perk categories.|
|string[]|Assigned Perks|An array of player selected perk names.|
|string[]|Active Statuses|An array of statuses (not including the custom status).|
|string[]|Active Buff Categories|An array of buff categories, including any delayed buffs that have not activated yet.|
|string[]|Active Zones|An array of zones the character is in.|
|int[]|Equipped Rune Item IDs|An array of item template IDs that the character has equipped as Runes.|
<!-- tabs:end -->

## Codex API

### Download API

!> **Install instructions**\
1- Extract this into `...\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\`  
2- Do not modify any of the files in there  
3- Do not put these files in your mod content folder and do not select them in the modfile list  
If you do not follow those guidelines, whenever we update the API files, your mod is going to conflict whenever someone place it lower than Sudo in the modlist.

**Download API**: [Roleplay Redux Codex 1.0.0](/API/RoleplayRedux.Codex.1.0.0.7z ':ignore')

### The Codex

![Codex Screenshot](/img/screenshot/CodexScreen.png ':size=50%')

This is an API that allows you to write all your server lore and rules in an easily accessible and searchable place ingame.  
It can also double as a storage space for Perk/Ability/etc descriptions, so they are not bloating your dice config.

The API consists of two Data Tables that you need to extend.

#### RP_DT_Codex_Index
This table represents the list of articles on the left.   
When first opening up the Codex UI, it will automatically open the first link.

Each row in this table has 4 fields:  
**ID** - A unique identifier of the row.  
**Title** - The text displayed in the link  
**Parent** - The ID of the parent index row. This is how it knows to nest the links within each other.  
**Is Admin** - If enabled, the link on the left will be displayed only for admins. This is just to hide specific entries from the list. They will still be  accessible by other means (such as direct links, and tooltip descriptions)

#### RP_DT_Codex_Entry
These are the actual articles on the right.   
Their IDs must match the `RP_DT_Codex_Index` IDs, but you don't have to create an Entry for every Index.  
If an Index has nested children, and no Entry, it will simply list its children. 

The entry supports the same formatting as Notice Boards.

```
# Header
## Sub header
[https://imageUrl]
* Bullet point
[codex:ENTRY_ID](Text in the link)
```

To link a Perk/Ability/etc description to the codex, type in `\[codex:ENTRY_ID]` in the description field.
There cannot be anything else in there.

### How to add this API to your own mod

#### Step 1:
Download the zip file below and extract it into:  
`...\ConanExilesDevKit\Games\ConanSandbox\Content\Systems`

The final result should look like this:  
`..\ConanExilesDevKit\Games\ConanSandbox\Content\Systems\RoleplayRedux\Codex\... `

#### Step 2: 
Create two data tables. Right click in the content browser and select `Miscellaneous` -> `Data Table`

![Create Data Table](/img/screenshot/CreateDataTable.png ':size=50%')

Select `RP_S_Codex_Index` and `RP_S_Codex_Entry`

![Select Struct](/img/screenshot/CreateDataTableStructSelection.png ':size=50%')

#### Step 3:  
In your Mon Controller merge the two tables you created with the API's tables.

![Merge Data Table](/img/screenshot/MergeDataTable.png ':size=50%')

That's it, now you can populate your own tables with data.

You can (and should) have more than one table for organization purposes.  
For example, a table for Races, another table for Classes, etc. Just don't forget to merge them all.

