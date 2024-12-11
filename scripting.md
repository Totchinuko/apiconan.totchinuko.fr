# Tot ! Admin - Scripting API <small>WIP, 0.8.8+</small>
## API Download
API can be downloaded from the main [Tot ! Admin API](admin) page.

## Introduction

The scripting system is relatively complexe, but I'll try to detail as much as possible the informations about its various components.
Every files that is named `Tot_I_FlowChart`, `Tot_DT_FlowChart`, `Tot_S_FlowChart` are about the scripting system. I use that keyword `FlowChart` to refere to the scripting system.
I've made a video and an example mod to teach how the components work together and how to build upon them.

## Video
Here you can download the example mod I'm making during the video: [Example Mod](/API/TotScriptingSystemExample.zip ':ignore')

<iframe width="560" height="315" src="https://www.youtube.com/embed/8JCp5xOihZM?si=V7CD83QubaCn5yEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Interfaces

### Tot_I_FlowChartArray
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartArray`  
Represent a list in the scripting system. In the background this is a serializable class, and common functions are exposed through this interface. I will not detail all the functions from this class, since more simply achieve the same thing, only for different types. It is important to note that, while this serialized array allow to mix whatever type you want, in the end, the UI will only display one type of variable for every entry of the array. Something to keep in mind.

#### AddString
It is important to note that ultimatly, all type of values are stored as a string. Other types are simply a convenient way to convert the values into the serialized format recognized by Tot!Admin. That being said, you'll find in the Helper library all the function necessary to parse/unparse those values from and to strings.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|Value added|
|Boolean|Unique|Only add the value if it is not already present in the array|
|bool|SnapToGround|Should the game snap the character on the ground to avoid falling under the map|
#### **Output**
void 
<!-- tabs:end -->

#### GetString
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Integer|Index|Index of the value in the array|
#### **Output**
|type|name|description|
|-|-|----|
|String|Return||
<!-- tabs:end -->

#### Clear
Empty the array

#### Length
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Integer|Return|Size of the array|
<!-- tabs:end -->

#### LastIndex
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Integer|Return|Last element of the array|
<!-- tabs:end -->

#### RemoveIndex
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Integer|Index|Position of the element to remove|
#### **Output**
void
<!-- tabs:end -->

#### MergeArrays
Merge the content of another array into this one. This does not check about duplicates
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartArray|MergeFrom|The data to merge from|
#### **Output**
void
<!-- tabs:end -->

#### MergeUniqueArrays
Merge the content of another array into this one and avoid creating duplicate entries.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartArray|MergeFrom|The data to merge from|
#### **Output**
void
<!-- tabs:end -->

#### ContainValue
This one lack variation for other types, so use the helper to serialize the data first.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|The value to look for|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Return|Is the value present or not|
<!-- tabs:end -->

#### Remove value
This one lack variation for other types, so use the helper to serialize the data first.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|The value to remove from the array|
#### **Output**
void
<!-- tabs:end -->

#### InsertValue
This one lack variation for other types, so use the helper to serialize the data first.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|Value to insert at the desired position|
|Integer|Index|Desired position of insertion|
#### **Output**
void
<!-- tabs:end -->

#### SetValue
This one lack variation for other types, so use the helper to serialize the data first.  
Replace the value of a position by another
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|Value to replace at the desired position|
|Integer|Index|Position to replace the value from|
|Boolean|SizeToFit|Should the array be increased in size if the index provided is beyond the array's size|
#### **Output**
void
<!-- tabs:end -->

### Tot_I_FlowChartField <small>To Implement</small>
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartField`  
This is a class you would implement on your custom UI fields to edit a particular variable type. All your field **must** implement it for the inspector to use them properly. Fields is the base element of the UI to edit data. If you intend to make more variable types/fields, it is important to note that this system was designed to be used with small and simple bit of data. Avoid making field/type that represent complex structure when you can to favor splitting them into smaller parts. Small field of simple piece of data will always provide better reusability in the script.

#### GetFieldValue <small>Client</small>
Get the value of the field. This must be serialized and if part of one of the supported primitives by !Admin, you must serialize them using the provided function in the helper library. Anything else is to be handled by yourself.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|String|Value|The serialized value|
<!-- tabs:end -->

#### SetFieldValue <small>Client</small>
Set the value to the field. This will be called by the inspector when initializing the field. Common primitives can be deserialized using the helper functions.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|The serialized value|
#### **Output**
void
<!-- tabs:end -->

#### SetFieldCallback <small>Client</small>
This will be called by the inspector to give you something to call whenever your field value change. It is up to you to call it whenever the value is changed in a significant manner. Avoid calling it on events that fire too often. For example, when using a text field, avoid calling it from a ValueChanged event and prefere the ValueCommited event.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartFieldCallback|Callback||
#### **Output**
void
<!-- tabs:end -->

### Tot_I_FlowChartFieldCallback
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartFieldCallback`  
This represent the callback for fields to call whenever their value change. It will be provided by the inspect throught the the `Tot_I_FlowChartField.SetFieldCallback` method.

#### OnValueChanged <small>Client</small>
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Value|The new serialized value of your field|
#### **Output**
void
<!-- tabs:end -->

### Tot_I_FlowChartInspector
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartInspector`  
Main interface representing the scripting Inspector. The inspector is the side pannel you use to edit a node values through fields. It handle the partial deserialization of the node data, the construction of all the fields that need to be displayed for a node, variable insertions, and cleanup of unused bits of data. Its what you'll use to order the scripting editor to draw fields for your nodes.

#### AddParameter <small>Client</small>
The way to add input values for your node.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|Name|Key|Dictionary key for your parameter, used to access the data at runtime|
|Text|Label|UI Label of your parameter|
|Name|VariableType|The variable type of your parameter (See section about variable types)|
|Boolean|Array|Is the parameter an array ? (Called List in the editor)|
|Name|FieldType|The field Widget used to edit this parameter|
|String|SerializedDefault|The default value of your parameter|
|Boolean|AllowVariableInsertion|Does the inspector will allow the user to insert a variable in place of a constant parameter|
|Text|HelpTooltip|UI Help widget text, to add more explanations|
|Boolean|AutoUpdate|Should the inspector be redrawn every time the value of that parameter change. Should be left false most of the time.|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success||
<!-- tabs:end -->

#### AddReturn <small>Client</small>
They way to add output values for your node.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|Name|Key|Dictionary key for your return, used to provide the data at runtime|
|Text|Label|UI Label of your return|
|Name|VariableType|The variable type of your return (See section about variable types)|
|Boolean|Array|Is the return an array ? (Called List in the editor)|
|Boolean|AutoUpdate|Should the inspector be redrawn every time the inserted variable of that return change. Should be left false most of the time.|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success||
<!-- tabs:end -->

#### GetParameterValue <small>Client</small>
Get the current value (in editor) of a parameter. If `IsVariable` is true, this will only give you the default value of the variable. You cannot know ahead of time what the value will be once the script run.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|Name|Key|Dictionary key for your parameter|
#### **Output**
|type|name|description|
|-|-|----|
|String|SerializedData||
|Boolean|IsVariable|Is a variable inserted into the parameter|
<!-- tabs:end -->

#### Update <small>Client</small>
Force the inspector to redraw the parameters/returns manually. This is the equivalent of AutoUpdate booleans on AddParameter, that can be called to your discretion. Note, the node must be selected for this call to work at all.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success||
<!-- tabs:end -->

#### PurgeParameters <small>Client</small>
Cleanup the data of every parameters on your node, save for the keys provided. Only useful if your node is not marked as auto-purged (Most of them should be).
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|Name[]|Keeps|Parameters keys to keep|
#### **Output**
void
<!-- tabs:end -->

#### PurgeReturns <small>Client</small>
Same as for parameters, only for returns instead.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|Name[]|Keeps|Returns keys to keep|
#### **Output**
void
<!-- tabs:end -->

#### GetParameterVariableType <small>Client</small>
Get the details about the variable currently assigned to a parameter
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|The parameter key|
#### **Output**
|type|name|description|
|-|-|----|
|Name|Type|Variable type|
|Boolean|IsArray|Is the variable a list|
|Name|SelectedField|Field used for this variable|
|Boolean|HasVariable|Is this parameter actually have a variable assigned|
<!-- tabs:end -->

#### GetReturnVariableType <small>Client</small>
Get the details about the variable currently assigned to a return
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|The return key|
#### **Output**
|type|name|description|
|-|-|----|
|Name|Type|Variable type|
|Boolean|IsArray|Is the variable a list|
|Name|SelectedField|Field used for this variable|
<!-- tabs:end -->

#### AutoPurgeParameters <small>Client</small>
Same as PurgeParameters, only the keeps are generated based on the parameters you declared prior to this call
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
#### **Output**
void
<!-- tabs:end -->

#### AutoPurgeReturns <small>Client</small>
Same as AutoPurgeParameters but for returns
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
#### **Output**
void
<!-- tabs:end -->

#### GetNodeName <small>Client</small>
Get the name of the currently selected node. This can be a user name.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
#### **Output**
|type|name|description|
|-|-|----|
|String|Name|The current name of the selected node|
<!-- tabs:end -->

#### SetNodeName <small>Client</small>
Set the name of the currently selected node, useful for automatically generated names base on parameter inputs
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Object|Instigator|A direct reference to your node class|
|String|Name|The current name of the selected node|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success||
<!-- tabs:end -->

### Tot_I_FlowChartNode <small>To Implement</small>
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartNode`  
This is the interface you need to implement to your class to create nodes. Do not use an Actor, or a component, use an object. You can use a GameItem to have access to WorldContext, but the parent must be based out of an Object. At the very least, you'll need to pay attention to `RunNode` and `InspectorUpdate`. A good practice would be to create a base node that would be the parent of all your actual nodes. That base node would provide default implementation for all the methods of the interface.

#### RunNode <small>Server</small>
The execution method of your node. This is where the stuff that your node is suppose to do, happen. It is **always** server side. An object of your class we'll be created for each instance that appear inside a script, not every instance of every script. So, your node instance will be reused between two players that run the same script for example. Therefore, storing variable into your node directly is not advised, that's what the stack is for (more on that lower).
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|ConanCharacter|PlayerCharacter|This is a reference to the player character context, the player that started the script. Keep in mind it can be overriden in script or null|
|Object|Origin|What started the script, more often than not its either null or an !Admin tool, so its not going to be very useful|
|Name|Input|The input plug this node was entered. I don't use that much myself, but node can have multiple input|
|Tot_I_FlowChartStack|Stack|The stack that handle variables, scopes and the likes. Thats what you would interact with to get/set values from your node fields.|
#### **Output**
|type|name|description|
|-|-|----|
|Name|NextNode|The key for your next node as defined in your datatable outputs for this node|
<!-- tabs:end -->

#### InspectorParameterChanged <small>Client</small>
Called whenever a parameter changed, if you wish to react to that. Rarely useful for the vast majority of nodes
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector|Reference to the inspector|
|Name|ParameterKey|The key of the parameter that changed|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Update|Should an update be trigger after this function call ?|
<!-- tabs:end -->

#### InspectorUpdate <small>Client</small>
Called every time the inspector need to be redrawn for this node. This is where you'd want to add parameters/returns to your node.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector|Reference to the inspector|
#### **Output**
void
<!-- tabs:end -->

#### InspectorReturnChanged <small>Client</small>
Called whenever a return changed, if you wish to react to that. Rarely useful for the vast majority of nodes
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector|Reference to the inspector|
|Name|ReturnKey|The key of the return that changed|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Update|Should an update be trigger after this function call ?|
<!-- tabs:end -->

#### InspectorAllowAutoPurge <small>Client</small>
Should the inspector automatically purge irrelevant data based on the parameters/returns you've declared in the last update ? This should almost always be true.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Return||
<!-- tabs:end -->

#### InspectorREquireCharacterContext <small>Client</small>
Should the inspector indicate that this node require player context to function properly ? Right now this has no other effect than a little UI indication, but it might be used for more in the future.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector|Reference to the inspector|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Return||
<!-- tabs:end -->

### Tot_I_FlowChartStack
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartStack`  
This is to interact with the current stack for the script execution. You'd use that one to access parameters and set returns and other execution oriented tasks. This is exclusively server side.

#### SetString
And other types save for SetRef. All the other type works the same so I won't be including them here. This is used to set a value to the current scope, being a return or an internal value. When setting a return, if this return has been assigned a variable by the user, the content of the value will be assigned to the variable directly, otherwise it will be discarded.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value. In the case of a return, it need to match the return declaration you made in your `InspectorUpdate` method.|
|String|Value||
|Boolean|Return|Should it be a return value or a internal value ?|
#### **Output**
void
<!-- tabs:end -->

#### GetString
And other types save for SetRef. All the other type works the same so I won't be including them here. This is used to get a value from the current scope, being a parameter or an internal value. When getting a parameter, if this parameter has been assigned a variable by the user, the content of the value given will be from the variable directly, otherwise it will be the value typed in the parameter field if it had one.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value. In the case of a parameter, it need to match the parameter declaration you made in your `InspectorUpdate` method.|
|Boolean|Param|Should it be a parameter value or a internal value ?|
#### **Output**
|type|name|description|
|-|-|----|
|String|Value||
<!-- tabs:end -->

#### SetRef
This is one a little special. It's a convenient tool to store a non serializable object to the current scope and have it accessed by other nodes. Since it can't be serialized, it can't be given to sub scope or parent scoped, it can't be stored, exported or displayed in the UI. 
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value|
|Object|Value||
#### **Output**
void
<!-- tabs:end -->

#### GetRef
See above for details
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value|
#### **Output**
|type|name|description|
|-|-|----|
|Object|Value||
<!-- tabs:end -->

#### HasValue
Does the current scope contain a value of that key ?
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Return||
<!-- tabs:end -->

#### DeleteValue
Remove a value from current scope
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value|
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Return||
<!-- tabs:end -->

#### CreateScope
This will prompt the stack to make a new scope and put it on the stack. The new scope is a copy of the previous one, save for refs. When the script will reach the end of a live for that new scope, it will resume on the node that created the scope, so your node need to handle what happen when the scope you created is over (and thus remember it did so in the past)
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success|Will be false if the script ran into a stack overflow. Currently, only 25 scopes can be stack at any point of a script instance life|
<!-- tabs:end -->

#### FormatTextWithVariables
Sortcut to format a text like the node does.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|ConanCharacter|TargetCharacter|(Optional)|
|String|Text|Text using the syntaxe of text formating of the scripting system|
#### **Output**
|type|name|description|
|-|-|----|
|String|Return|Formated text|
<!-- tabs:end -->

#### SolveFormulaWithVariables
Sortcut to get the result of a math formula including variables
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|ConanCharacter|TargetCharacter|(Optional)|
|String|Formula||
#### **Output**
|type|name|description|
|-|-|----|
|Float|Return|Result of the formula|
<!-- tabs:end -->

#### RaiseCriticalError
This is to throw an error and completly cancel the execution of the whole script. Use this only when something horribly wrong has happened and that the script should not continue at all. It will generate a stack trace in the server logs as a result.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|ErrorName||
|String|ErrorMessage||
#### **Output**
void
<!-- tabs:end -->

#### GetParameterKeys
Return all the keys of every parameters of this node instance.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Name[]|Parameters||
<!-- tabs:end -->

#### GetReturnKeys
Return all the keys of every returns of this node instance.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Name[]|Returns||
<!-- tabs:end -->

#### SetArray
This is to set a Script List. They can be created with MakeArray. Internally, it is a serializable array.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key||
|Tot_I_FlowChartArray|Value||
|Boolean|Return|Should it be a return value or a internal value ?|
#### **Output**
void
<!-- tabs:end -->

#### GetArray
This is to get a Script List. Internally, it is a serializable array.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|Key|Key of your value. In the case of a parameter, it need to match the parameter declaration you made in your `InspectorUpdate` method.|
|Boolean|Param|Should it be a parameter value or a internal value ?|
#### **Output**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartArray|Value||
<!-- tabs:end -->

#### GetNodeGuid
Get the Guid of the node instance. This can be used to differenciate two different node of the same type in a script. Keep in mind, those Guids will be identical between two players instances of a same script.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Guid|Return||
<!-- tabs:end -->

#### MakeArray
Create a brand new array. Arrays are passed by reference at a scope level.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartArray|Return||
<!-- tabs:end -->

#### DelayRun
Pause the script for the requested amount of time. Keep in mind it is the minimum amount of time the script will wait, it does not guarantee it will wait precisely this amount of time, as the server might be busy doing something else once the timer is over.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Timespan|DelayTime||
#### **Output**
void
<!-- tabs:end -->

#### ChangeContext
Change the current context of the script for the rest of the execution.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|ConanCharacter|Player||
|Object|Origin||
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success||
<!-- tabs:end -->

#### GoTo
Move the current execution of the script to the targeted node, by its Guid. This is a little akward to use, but what will be executed is not the targeted node, but the next one that is linked to the plug referenced. The scripting system work by remembering what was the last node executed and what was the next plug to go to. So using this, you're telling him the last node it executed and witch path it should go down to. The node with this Guid will not be actually executed. This allow to jump in the script.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Guid|NodeGuid||
|Name|NextPlug||
#### **Output**
void
<!-- tabs:end -->

#### ToggleScriptPause
This will pause the script indefinitly. It is up to you to resume this specific stack reference whenever you need to. A script that is paused for too long will eventually be thrown to the bin by the server. Currently the only way to resume this is to save using you own means, the reference to this stack, into an object of your own. In the future, I should be able to provide an API to request a stack reference by Guid.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Boolean|Paused||
#### **Output**
void
<!-- tabs:end -->

#### GetStackGuid
Get the Guid of this stack. This is fundamentally a unique ID per instance of a script. So much so that the Guid of node + the one of a stack would be enough to make a unique Key per script execution. Not much use for it right now.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Guid|Return||
<!-- tabs:end -->

#### EndScript
End the current script instance gracefuly.
<!-- tabs:start -->
#### **Input**
void
#### **Output**
void
<!-- tabs:end -->

#### GoToAnchor
Make the script jump to the named anchor node
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Name||
#### **Output**
|type|name|description|
|-|-|----|
|Boolean|Success|False if the Anchor was not found|
<!-- tabs:end -->

#### GetFlowChartGuid
Get the Guid of the particular script this node belong to
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|Guid|Return||
<!-- tabs:end -->

#### GetParameterVarType
Get the type of a variable inserted in a parameter. This is only useful if your parameter is a wildcard type, to identify what type of variable the user has inserted.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|ParameterKey||
#### **Output**
|type|name|description|
|-|-|----|
|Name|Type||
<!-- tabs:end -->

#### GetReturnVarType
Get the type of a variable inserted in a return. This is only useful if your return is a wildcard type, to identify what type of variable the user has inserted.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|ReturnKey||
#### **Output**
|type|name|description|
|-|-|----|
|Name|Type||
<!-- tabs:end -->

### Tot_I_FlowChartVariable <small>To Implement</small>
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartVariable`  
This interface is used for variable validators. If you ever need to create your own type of variable, you'll need to provide a class that implement this interface. If your type could be useful for other modders, concider instead making a suggestion for its addition to Tot!Admin, so that everyone can use it as a common bit of data.

#### ConvertTo
How to convert this variable type **to** a given target type. Your type of variable does not have to be convertible to every existing type.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|TargetType||
|String|Data|The current serialized (Marshaled) value being converted|
#### **Output**
|type|name|description|
|-|-|----|
|String|Return|Result after conversion|
|Boolean|Success|Was the conversion a success ?|
<!-- tabs:end -->

#### ConvertFrom
How to convert **from** another type to your variable type. Your type of variable does not have to be convertible from every existing type.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Name|OriginalType||
|String|Data|The current serialized (Marshaled) value being converted|
#### **Output**
|type|name|description|
|-|-|----|
|String|Return|Result after conversion|
|Boolean|Success|Was the conversion a success ?|
<!-- tabs:end -->

#### ValidateData
A function to verify that the serialized data is valid. The function **must** account for empty data as well, that can be the default.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|String|Data|The current serialized (Marshaled) value being verified|
#### **Output**
|type|name|description|
|-|-|----|
|String|Return|Result after verification. Its best to return the input data if the data was valid|
|Boolean|Success|Was the verification a success ?|
<!-- tabs:end -->

#### GetDefault
Generate the default value of your type, serialized (Marshaled)
<!-- tabs:start -->
#### **Input**
void
#### **Output**
|type|name|description|
|-|-|----|
|String|Return||
<!-- tabs:end -->

## DataTables

### Tot_DT_FlowChartFields
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FLowChartFields`  
This table is used to reference your custom fields. If you need a specific field to edit a variable type, that how you would reference its existance. Row keys can be anything, but the key will be used during the node conception when adding parameters, so once you chose a key, never change it or you'll break all the nodes that you made with it. Avoid using names already used by Tot!Admin as well.

|type|name|description|
|-|-|----|
|String|Name|UI Name of your field|
|Name|VariableType|The variable type this field is used for|
|UserWidget(Class)|WidgetClass|The actual field widget. This **must** implement `Tot_I_FlowChartField`|
|Boolean|Selectable|Is this field user selectable in variables, or only available in node design ?|

### Tot_DT_FlowChartVariables
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FlowChartVariables`  
This table is used to reference your custom variable types. If the variable type you wish to create is of public interest and not specific to your mod, consider making a suggestion for its addition to Tot!Admin so that everyone can profit from a common bit of data. Row keys can be anything, but the key will be used during the node conception when adding parameters/returns, so once you chose a key, never change it or you'll break all the nodes that you made with it. Avoid using names already used by Tot!Admin as well.

|type|name|description|
|-|-|----|
|String|Name|UI Name|
|LinearColor|Color|Variable type color|
|Name|DefaultField|The default field to use for this type of variable when creating a script variable|
|Object(class)|VariableClass|The validator class for your variable type. This is technically optional buy highly encouraged. It **must** implement `Tot_I_FlowChartVariable` interface|

### Tot_DT_FlowChartNodes
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FlowChartNodes`  
Where you reference your nodes. Row key **must** be a number, avoid using number in the range of 0-1000 and 100,000-999,999, as those are used by Tot!Admin. Max range is 2,147,483,647. 

|type|name|description|
|-|-|----|
|String|Name|UI Name|
|String|UIGroup|UI Category|
|LinearColor|Color|Color of the node. Try having consistent coloring with the type of your node.|
|Tot_S_FlowChartPlugDefinition[]|Inputs|The input plugs of your node. Standard single input in admin is `Do`. Plug type is to make your plug only work with plug of the same type. All normal plugs are `0`|
|Tot_S_FlowChartPlugDefinition[]|Ouputs|Same but for outputs|
|Object(Class)|NodeClass|The class of your node. This **must** implement the `Tot_I_FlowChartNode` interface|
|Boolean|PreventDeletion|This is always false. The only node that use that is the start node, so it may never be deleted|
|String|Description|UI Description|
|Boolean|HiddenInMenu|Prevent your node to be created or even copy/pasted. This effectively prevent new copies of the node to be made, and is useful to deprecate a node without deleting it and breaking existing scripts.|

## Libraries

### Tot_FL_PrimitiveMarshal
`/Game/ModsShared/SudoExile/TotAdmin/Tot_FL_PrimitiveMarshal`  
In their you'll find how serialization of primitives is done, so you can serialize/deserialize (Marshal/Unmarshal) data in the same way the scripting system does. I will not detail how most of this works, as it is rather self explanatory. Marshal functions turn data into string, Unmarshal functions attempt to turn a string back to its original data. Simple.

!> Please do **not** modify those functions. If you want one to work a little different, make copies in your own libraries to modify. If you change how this work, your mod will force a different behavior on everyone else.

### Tot_FL_FlowChartHelper
`/Game/ModsShared/SudoExile/TotAdmin/Tot_FL_FlowChartHelper`  
In there you'll find helpers to handle special types of field that are used in Tot!Admin, such as dynamic location, numeric fields and inventory field. Those are essentially multi type fields. I will only details the methods that are intended for usage, the rest is only there for dependancy.

!> Please do **not** modify those functions. If you want one to work a little different, make copies in your own libraries to modify. If you change how this work, your mod will force a different behavior on everyone else.

#### AddDynamicLocation
Add a Dynamic Location Parameter to the node. Dynamic Location allow a user to either select an admin tool as a point in space or directly type a Vector3 coordinates. It work similarly to `Tot_I_FlowChartInspector.AddParameter`.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector||
|Object|Instigator||
|Name|Key|Parameter Key|
|Text|Label||
|Text|HelpTooltip||
|Boolean|VectorDefault|Should the default type be Vector or Admin Tool ?|
#### **Output**
void
<!-- tabs:end -->

#### GetDynamicLocationParam
Get the location value during run time
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Parameter Key|
#### **Output**
|type|name|description|
|-|-|----|
|Vector3|Return|Location|
|Actor|Object|The AdminTool Actor reference if the user used an admin tool, null otherwise|
<!-- tabs:end -->

#### GetDynamicLocationTransformParam
Similar to location but attempt to get a full transform (mostly for its rotation)
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Parameter Key|
|Rotator|DefaultRotation|If the user directly input a Vector3, their wont be rotation informations, so this default rotation will be returned|
#### **Output**
|type|name|description|
|-|-|----|
|Transform|Return||
<!-- tabs:end -->

#### AddInventoryTargetParameters
Add a multi-typed inventory target parameter to your node
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector||
|Object|Instigator||
|Name|Key|Parameter Key|
|Text|Label||
#### **Output**
void
<!-- tabs:end -->

#### GetInventoriesFromParameters
Get the collection of inventories from the parameter at runtime
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Parameter Key|
|Actor|Default|Provide a reference to the player character here, so that the player context be used as a default fallback|
#### **Output**
|type|name|description|
|-|-|----|
|ItemInventory[]|Return||
<!-- tabs:end -->

#### AddNumericParameter
Add a parameter that can either be a float or an integer for the user to provide. The system will do the necessary conversion in the background
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector||
|Object|Instigator||
|Name|Key|Parameter Key|
|Text|Label||
|Text|HelpTooltip||
|Boolean|FloatDefault||
#### **Output**
void
<!-- tabs:end -->

#### AddNumericReturn
Add a return that can either be a float or an integer for the user to provide. The system will do the necessary conversion in the background
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartInspector|Inspector||
|Object|Instigator||
|Name|Key|Parameter Key|
|Text|Label||
|Boolean|FloatDefault||
#### **Output**
void
<!-- tabs:end -->

#### GetNumericFloatParam
Get a numeric parameter as a Float. Conversion will be handled if an integer was provided.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Parameter Key|
#### **Output**
|type|name|description|
|-|-|----|
|Float|Return||
<!-- tabs:end -->

#### GetNumericIntegerParam
Get a numeric parameter as an Integer. Truncation will be handled if an float was provided.
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Parameter Key|
#### **Output**
|type|name|description|
|-|-|----|
|Integer|Return||
<!-- tabs:end -->

#### SetNumericFloatReturn
Set a Float as a Numeric return. Will be truncated automatically if the return expect an integer
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Return Key|
|Float|Value||
#### **Output**
void
<!-- tabs:end -->

#### SetNumericIntegerReturn
Set an Integer as a Numeric return. Will be converted automatically if the return expect an float
<!-- tabs:start -->
#### **Input**
|type|name|description|
|-|-|----|
|Tot_I_FlowChartStack|Stack||
|Name|Key|Return Key|
|Integer|Value||
#### **Output**
void
<!-- tabs:end -->

## Variable Types
Bellow you'll find all the variable types declared and used by Tot!Admin. I'm open to suggestion to add more that could be used by the many, even if !Admin itself don't make use of them.

|RowKey|UI Name|Description|
|-|-|----|
Integer|Integer|A round number. Marshal Helper available|
Float|Decimal|A Decimal number. Marshal Helper available|
String|Text|Normal text|
Key|Key|Text used as an identifier. Max length: 64 characters|
Boolean|Boolean|A boolean, true or false. Marshal Helper available|
Vector2|Vector 2D|Vector in 2D space. Marshal Helper available|
Vector3|Vector 3D|Vector in 3D space. Marshal Helper available|
Color|Color|Marshal Helper available|
Date|Date|Marshal Helper available|
Player|Player Character|A pointer to a player character. Internally it is just the character database UID|
Clan|Clan|Database UID|
Kit|Kit|GUID|
Warp|Warp|GUID|
Stall|Trader Definition|GUID|
Quest|Quest|GUID|
PostProcess|Post Process|GUID|
QuestCategory|Quest Category|GUID|
FlowChart|Script|GUID|
AdminTool|Generic Admin Tool|Database UID|
Portal|Portal|Database UID|
PostProcessAnchor|Post Process Anchor|Database UID|
Puppet|Puppet|Database UID|
Wallpaper|Wallpaper|Database UID|
Decal|Decal|Database UID|
BoxZone|Box Zone|Database UID|
SphereZone|Sphere Zone|Database UID|
SphereInteraction|Sphere Interaction|Database UID|
Spawner|Spawner|Database UID|
Point|Point|Database UID|
ScriptedDoor|Scripted Doors|Database UID|
TotLight|Light|Database UID|
TotWall|Invisible Wall|Database UID|
ScriptedChest|Scripted Chest|Database UID|
TotGameLight|Scripted Light|Database UID|
TotResourceSpawner|Resource Spawner|Database UID|
Concealer|Decoration Concealer|Database UID|
ScriptContainer|Script Container|Database UID|

## Field Types
Bellow you'll find most of the field already built in Tot!Admin that you can use in your parameters

|RowKey|UI Name|Variable Type|Description|
|-|-|-|----|
FormatableText1000|Text Editor|String|A text editor with the documentation to insert variables. Note that the field itself does not do text formating, its up to the node to do that. Limit of a 1000 character max.|
SimpleText1000|Single Line Text|String|A single line text with a 1000 character limit|
SimpleFloat|Decimal|Float|A float without limit|
FlowChart|Script|FlowChart|A script selector|
Toggle|Toggle|Boolean|A boolean toggle|
Quest|Quest|Quest||
Kit|Kit|Kit||
Warp|Warp|Warp||
SimpleInteger|Integer|Integer|A simple integer without limit|
Role|Role|Key|Sudo Role|
Player|Player|Player|Player character selector|
Duration|Duration|Integer|Duration in seconds. The selector allow for minute, hours and day selection and handle conversion to seconds on its own|
Key|Key|Key|Text field with 64 character max|
Puppet|Puppet|Puppet||
AdminTool|Admin Tool|AdminTool||
Vector2|Vector 2D|Vector2||
ItemLookup|Item Lookup|Integer|Game Item selector stored as a template ID|
Language|Language|Key|Tot!Chat Language|
UnitFloat|Unit Float|Float|A float between 0 and 1|
Feat|Feat|Integer|A game feat selector|
RRBuffType|RR Buff Type|Integer|RR buff type selector|
DurationMinute|Duration (Minutes)|Integer|Same as duration, but as minutes for unit, not seconds|
CharIntStat|Character Int Stat|Integer|Game ECharIntStatID selector|
CharFloatStat|Character Float Stat|Integer|Game ECharFloatStatID selector|
ChatChannelTarget|Chat Channel|Integer|Tot!Chat channel target between global,local and clan|
ChatDistance|Chat Distance|Key|Tot!Chat distance as provided by server configuration|
EmoteFormating|Emote Formating|Key|Tot!Chat emote formating modes|
Color|Color|Color||
ToolType|Admin Tool Type|Key|Tot!Admin Admin tool type selector|
Stall|Stall|Stall|Tot!Admin Trader definition|
Multiplier5|Multiplier 5|Float|A float slider between 0 and 5|
Rounding|Rounding|Integer|Rounding mode|
Vector2Clamp02|Vector 2 (Clamp 0-2)|Vector2|A Vector2 double slider from 0 to 2|
Sound|Sound|Integer|Sound selector from the sound library|
SphereZone|Sphere Zone|SphereZone||
BoxZone|Box Zone|BoxZone||
ScriptedChest|ScriptedChest|ScriptedChest||
Vector3|Vector 3D|Vector3||
Spawner|Spawner|Spawner||
NPC|NPC Type|Key|NPC selector, can be vanilla spawn data table row or a Tot!Admin custom NPC GUID|
Speed|NPC Speed|Float|NPC speed selector|
FoundationDistance|Distance (Foundation)|Float|Distance selection in foundation. Value is converted back to centimeters internally|
SpawnQuantity|Spawn Quantity|Integer|A quantity selector (no negative values)|
StandardEmote|Game Emote|Integer|Game standard emote selector|
Point|Point|Point||
SudoEmote|Emote|Key|Sudo emote selector|
Multiplier2|Multiplier 2|Float|A float slider between 0 and 2|
DT_AdminTool|Dynamic Location|AdminTool|Dynamic location, user Helper provided instead of directly using this|
DT_Vector3|Dynamic Location|Vector3|Dynamic location, user Helper provided instead of directly using this|
Date|Date|Date||
Comparison|Comparison|Integer|Comparison method|
QuestCategory|Quest Category|QuestCategory||
NPCBehavior|NPC Behavior|Integer|Base game NPC behavior selector|
Clan|Clan|Clan||
HateType|Hate Type|Integer|Base game aggro type selector|
IntBitFlags|Int Bit Flags|Integer|A bit flag selector|
TextMaxSize|Text Max Size|Integer|Integer slider between 0 and 1000|
RRKey|RR Key|Integer|RR Door key selector|
Seed|Seed|Integer|A integer seed random generator|
QuestObjective|Quest Objective|Key||
GuildRank|Guild Rank|Integer|Base game guild rank (clan)|
Energy|Energy|Integer|Base game energy selector|
ScriptedDoor|Scripted Door|ScriptedDoor||
TreasureItem|Treasure Item|Integer|Game item selector for carryable treasures|
QuestStatus|Quest Status|Integer||
DT_Float|Numeric Float|Float|Numeric dynamic field, user helper instead|
DT_Integer|Numeric Integer|Integer|Numeric dynamic field, user helper instead|
QuestObjectiveType|Objective Type|Key||
MarkerIcon|Marker Icon|Key|Map marker icon data table|
IconTable|Icons|Integer|Icon data table|
CharState|Character State|Integer|Base Game Character State (ECharacterState)|
Portal|Portal|Portal||
PostProcessAnchor|Post Process Anchor|PostProcessAnchor||
Decal|Decal|Decal||
SphereInteraction|Sphere Interaction|SphereInteraction||
TotLight|Light|TotLight||
TotWall|Invisible Wall|TotWall||
TotGameLight|Scripted Light|TotGameLight||
TotResourceSpawner|Resource Spawner|TotResourceSpawner||
Concealer|Decoration Concealer|Concealer||
ScriptContainer|Script Container|ScriptContainer||
Wallpaper|Wallpaper|Wallpaper||
AdminToolType|Admin Tool Type|Key||
PostProcess|Post Process Profile|PostProcess||
ColorHDR|Color HDR|Color|HDR color|
URL|Image URL|String|URL selector with validation|