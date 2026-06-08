# Tot ! Enhanced Admin - Scripting API
## API Download
API can be downloaded from the [API Download Page](api-download).

## Introduction

The scripting system is relatively complex, but I'll try to detail as much as possible the information about its various components.
Every files that is named `Tot_I_FlowChart`, `Tot_DT_FlowChart`, `Tot_S_FlowChart` are about the scripting system. I use that keyword `FlowChart` to refer to the scripting system.
I've made a video and an example mod to teach how the components work together and how to build upon them.

## Video
> Even if the video is a little old now, the instructions are mostly unchanged
Here you can download the example mod I'm making during the video: [Example Mod](/API/TotScriptingSystemExample.zip ':ignore')

<iframe width="560" height="315" src="https://www.youtube.com/embed/8JCp5xOihZM?si=V7CD83QubaCn5yEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Interfaces

### Tot_I_FlowChartArray
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartArray`  
Represent a list in the scripting system. In the background this is a serializable class, and common functions are exposed through this interface. I will not detail all the functions from this class, since more simply achieve the same thing, only for different types. It is important to note that, while this serialized array allow to mix whatever type you want, in the end, the UI will only display one type of variable for every entry of the array. Something to keep in mind.

#### AddString
```csharp
function AddString(string value, bool unique);
```
It is important to note that ultimately, all type of values are stored as a string. Other types are simply a convenient way to convert the values into the serialized format recognized by Tot!Admin. That being said, you'll find in the Helper library all the function necessary to parse/un-parse those values from and to strings.

#### GetString
```csharp
function GetString(int index, out string return);
```
Get the value at provided index

#### Clear
```csharp
function Clear();
```
Empty the array

#### Length
```csharp
function Length(out int return);
```
How many elements in the array

#### LastIndex
```csharp
function LastIndex(out int return);
```
Index of the last element in the array

#### RemoveIndex
```csharp
function RemoveIndex(int return);
```
Remove an element at given index

#### MergeArrays
```csharp
function RemoveIndex(Tot_I_FlowChartArray array);
```
!> Slow operation
Merge the content of another array into this one. This does not check about duplicates

#### MergeUniqueArrays
```csharp
function MergeUniqueArrays(Tot_I_FlowChartArray array);
```
!> Slow operation
Merge the content of another array into this one and avoid creating duplicate entries.

#### ContainValue
```csharp
function MergeUniqueArrays(string value, out bool return);
```
This one lack variation for other types, so use the helper to serialize the data first.

#### RemoveValue
```csharp
function RemoveValue(string value);
```
This one lack variation for other types, so use the helper to serialize the data first.

#### InsertValue
```csharp
function RemoveValue(string value, int index);
```
This one lack variation for other types, so use the helper to serialize the data first.

#### SetValue
```csharp
function SetValue(string value, int index, bool SizeToFit);
```
This one lack variation for other types, so use the helper to serialize the data first.  
Replace the value of a position by another

### Tot_I_FlowChartField <small>To Implement</small>
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartField`  
This is a class you would implement on your custom UI fields to edit a particular variable type. All your field **must** implement it for the inspector to use them properly. Fields is the base element of the UI to edit data. If you intend to make more variable types/fields, it is important to note that this system was designed to be used with small and simple bit of data. Avoid making field/type that represent complex structure when you can to favor splitting them into smaller parts. Small field of simple piece of data will always provide better reusability in the script.

#### GetFieldValue <small>Client</small>
```csharp
function GetFieldValue(out string value);
```
Get the value of the field. This must be serialized and if part of one of the supported primitives by !Admin, you must serialize them using the provided function in the helper library. Anything else is to be handled by yourself.

#### SetFieldValue <small>Client</small>
```csharp
function SetFieldValue(string value);
```
Set the value to the field. This will be called by the inspector when initializing the field. Common primitives can be deserialized using the helper functions.

#### SetFieldCallback <small>Client</small>
```csharp
function SetFieldCallback(Tot_I_FlowChartFieldCallback callback);
```
This will be called by the inspector to give you something to call whenever your field value change. It is up to you to call it whenever the value is changed in a significant manner. Avoid calling it on events that fire too often. For example, when using a text field, avoid calling it from a ValueChanged event and prefere the ValueCommited event.

### Tot_I_FlowChartFieldCallback
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartFieldCallback`  
This represent the callback for fields to call whenever their value change. It will be provided by the inspect throught the the `Tot_I_FlowChartField.SetFieldCallback` method.

#### OnValueChanged <small>Client</small>
```csharp
function OnValueChanged(string value);
```
Called when the value of the field changed

#### OnValueChangedUnsafe <small>Client</small>
```csharp
function OnValueChangedUnsafe(string value);
```
Same as above but do not check variable validity. Only use when you know what you are doing (Mostly this should only be used when not reporting user change)

### Tot_I_FlowChartInspector
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartInspector`  
Main interface representing the scripting Inspector. The inspector is the side pannel you use to edit a node values through fields. It handle the partial deserialization of the node data, the construction of all the fields that need to be displayed for a node, variable insertions, and cleanup of unused bits of data. Its what you'll use to order the scripting editor to draw fields for your nodes.

#### AddParameter <small>Client</small>
```csharp
function AddParameter(object instigator, Name key, Text label, Name variableType, bool array, Name fieldType, string serializedDefault, bool allowVariableInsertion, Text helpTooltip, bool autoUpdate, out bool success);
```
The way to add input values for your node. Instigator is a reference to the object calling the inspector (which is most of the time going to be self)

#### AddReturn <small>Client</small>
```csharp
function AddReturn(object instigator, Name key, Text label, Name variableType, bool array, bool autoUpdate, out bool success);
```
They way to add output values for your node. Instigator is a reference to the object calling the inspector (which is most of the time going to be self)

#### GetParameterValue <small>Client</small>
```csharp
function GetParameterValue(object instigator, Name key, out string serializedData, out bool isVariable);
```
Get the current value (in editor) of a parameter. If `IsVariable` is true, this will only give you the default value of the variable. You cannot know ahead of time what the value will be once the script run.

#### Update <small>Client</small>
```csharp
function Update(object instigator, out bool success);
```
Force the inspector to redraw the parameters/returns manually. This is the equivalent of AutoUpdate booleans on AddParameter, that can be called to your discretion. Note, the node must be selected for this call to work at all.

#### PurgeParameters <small>Client</small>
```csharp
function PurgeParameters(object instigator, Name[] keeps, out bool success);
```
Cleanup the data of every parameters on your node, save for the keys provided. Only useful if your node is not marked as auto-purged (Most of them should be).

#### PurgeReturns <small>Client</small>
```csharp
function PurgeReturns(object instigator, Name[] keeps, out bool success);
```
Same as for parameters, only for returns instead.

#### GetParameterVariableType <small>Client</small>
```csharp
function GetParameterVariableType(Name key, out Name type, out bool isArray, out Name selectedField, out bool hasVariable);
```
Get the details about the variable currently assigned to a parameter

#### GetReturnVariableType <small>Client</small>
```csharp
function GetReturnVariableType(Name key, out Name type, out bool isArray, out Name selectedField);
```
Get the details about the variable currently assigned to a return

#### AutoPurgeParameters <small>Client</small>
```csharp
function AutoPurgeParameters(object instigator);
```
Same as PurgeParameters, only the keeps are generated based on the parameters you declared prior to this call

#### AutoPurgeReturns <small>Client</small>
```csharp
function AutoPurgeReturns(object instigator);
```
Same as AutoPurgeParameters but for returns

#### GetNodeName <small>Client</small>
```csharp
function AutoPurgeReturns(object instigator, out string name);
```
Get the name of the currently selected node. This can be a user name.

#### SetNodeName <small>Client</small>
```csharp
function SetNodeName(object instigator, string name, out bool success);
```
Set the name of the currently selected node, useful for automatically generated names base on parameter inputs

### Tot_I_FlowChartNode
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartNode`  
This is the interface you need to implement to your class to create nodes. Do not use an Actor, or a component, use an object. You can use a GameItem to have access to WorldContext, but the parent must be based out of an Object. At the very least, you'll need to pay attention to `RunNode` and `InspectorUpdate`. A good practice would be to create a base node that would be the parent of all your actual nodes. That base node would provide default implementation for all the methods of the interface.

#### RunNode <small>Server</small>
```csharp
function RunNode(ConanCharacter playerCharacter, object origin, Name input, Tot_I_FlowChartStack stack, out Name nextNode);
```
The execution method of your node. This is where the stuff that your node is suppose to do, happen. It is **always** server side. An object of your class we'll be created for each instance that appear inside a script, not every instance of every script. So, your node instance will be reused between two players that run the same script for example. Therefore, storing variable into your node directly is not advised, that's what the stack is for (more on that lower).

#### InspectorParameterChanged <small>Client</small>
```csharp
function InspectorParameterChanged(Tot_I_FlowChartInspector inspector, Name parameterKey, out bool Update);
```
Called whenever a parameter changed, if you wish to react to that. Rarely useful for the vast majority of nodes

#### InspectorUpdate <small>Client</small>
```csharp
function InspectorUpdate(Tot_I_FlowChartInspector inspector);
```
Called every time the inspector need to be redrawn for this node. This is where you'd want to add parameters/returns to your node.

#### InspectorReturnChanged <small>Client</small>
```csharp
function InspectorReturnChanged(Tot_I_FlowChartInspector inspector, Name returnKey, out bool update);
```
Called whenever a return changed, if you wish to react to that. Rarely useful for the vast majority of nodes

#### InspectorAllowAutoPurge <small>Client</small>
```csharp
function InspectorAllowAutoPurge(out bool return);
```
Should the inspector automatically purge irrelevant data based on the parameters/returns you've declared in the last update ? This should almost always be true.

#### InspectorRequireCharacterContext <small>Client</small>
```csharp
function InspectorRequireCharacterContext(out bool return);
```
Should the inspector indicate that this node require player context to function properly ? Right now this has no other effect than a little UI indication, but it might be used for more in the future.

### Tot_I_FlowChartStack
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartStack`  
This is to interact with the current stack for the script execution. You'd use that one to access parameters and set returns and other execution oriented tasks. This is exclusively server side.

#### SetString
```csharp
function SetString(Name key, string value, bool return);
```
And other types save for SetRef. All the other type works the same so I won't be including them here. This is used to set a value to the current scope, being a return or an internal value. When setting a return, if this return has been assigned a variable by the user, the content of the value will be assigned to the variable directly, otherwise it will be discarded.

#### GetString
```csharp
function GetString(Name key, bool param, out string value);
```
And other types save for SetRef. All the other type works the same so I won't be including them here. This is used to get a value from the current scope, being a parameter or an internal value. When getting a parameter, if this parameter has been assigned a variable by the user, the content of the value given will be from the variable directly, otherwise it will be the value typed in the parameter field if it had one.

#### SetRef
```csharp
function SetRef(Name key, object value);
```
This is one a little special. It's a convenient tool to store a non serializable object to the current scope and have it accessed by other nodes. Since it can't be serialized, it can't be given to sub scope or parent scoped, it can't be stored, exported or displayed in the UI. 

#### GetRef
```csharp
function GetRef(Name key, out object value);
```
See above for details

#### HasValue
```csharp
function HasValue(Name key, out bool return);
```
Does the current scope contain a value of that key ?

#### DeleteValue
```csharp
function DeleteValue(Name key, out bool return);
```
Remove a value from current scope

#### CreateScope
```csharp
function CreateScope(out bool success);
```
This will prompt the stack to make a new scope and put it on the stack. The new scope is a copy of the previous one, save for refs. When the script will reach the end of a live for that new scope, it will resume on the node that created the scope, so your node need to handle what happen when the scope you created is over (and thus remember it did so in the past)

#### FormatTextWithVariables
```csharp
function FormatTextWithVariables(ConanCharacter targetCharacter, string text, out string return);
```
Sortcut to format a text like the node does.

#### SolveFormulaWithVariables
```csharp
function SolveFormulaWithVariables(ConanCharacter targetCharacter, string formula, out float return);
```
Sortcut to get the result of a math formula including variables

#### RaiseCriticalError
```csharp
function RaiseCriticalError(string errorName, string errorMessage);
```
This is to throw an error and completely cancel the execution of the whole script. Use this only when something horribly wrong has happened and that the script should not continue at all. It will generate a stack trace in the server logs as a result.

#### GetParameterKeys
```csharp
function GetParameterKeys(Name[] parameters);
```
Return all the keys of every parameters of this node instance.

#### GetReturnKeys
```csharp
function GetReturnKeys(Name[] returns);
```
Return all the keys of every returns of this node instance.

#### GetNodeGuid
```csharp
function GetNodeGuid(Guid return);
```
Get the Guid of the node instance. This can be used to differenciate two different node of the same type in a script. Keep in mind, those Guids will be identical between two players instances of a same script.

#### MakeArray
```csharp
function MakeArray(out Tot_I_FlowChartArray return);
```
Create a brand new array. Arrays are passed by reference at a scope level.

#### DelayRun
```csharp
function DelayRun(Timespan delayTime);
```
Pause the script for the requested amount of time. Keep in mind it is the minimum amount of time the script will wait, it does not guarantee it will wait precisely this amount of time, as the server might be busy doing something else once the timer is over.

#### ChangeContext
```csharp
function ChangeContext(ConanCharacter player, object origin, out bool success);
```
Change the current context of the script for the rest of the execution.

#### GoTo
```csharp
function GoTo(Guid nodeGuid, Name nextPlug);
```
Move the current execution of the script to the targeted node, by its Guid. This is a little akward to use, but what will be executed is not the targeted node, but the next one that is linked to the plug referenced. The scripting system work by remembering what was the last node executed and what was the next plug to go to. So using this, you're telling him the last node it executed and witch path it should go down to. The node with this Guid will not be actually executed. This allow to jump in the script.

#### ToggleScriptPause
```csharp
function ToggleScriptPause(bool paused);
```
This will pause the script indefinitely. It is up to you to resume this specific stack reference whenever you need to. A script that is paused for too long will eventually be thrown to the bin by the server. Currently the only way to resume this is to save using you own means, the reference to this stack, into an object of your own. In the future, I should be able to provide an API to request a stack reference by Guid.

#### GetStackGuid
```csharp
function GetStackGuid(out Guid guid);
```
Get the Guid of this stack. This is fundamentally a unique ID per instance of a script. So much so that the Guid of node + the one of a stack would be enough to make a unique Key per script execution. Not much use for it right now.

#### EndScript
```csharp
function EndScript();
```
End the current script instance gracefully.

#### GoToAnchor
```csharp
function GoToAnchor(string name, out bool success);
```
Make the script jump to the named anchor node

#### GetFlowChartGuid
```csharp
function GetFlowChartGuid(out Guid guid);
```
Get the Guid of the particular script this node belong to

#### GetParameterVarType
```csharp
function GetParameterVarType(Name parameterKey, out Name type, out bool isArray);
```
Get the type of a variable inserted in a parameter. This is only useful if your parameter is a wildcard type, to identify what type of variable the user has inserted.

#### GetReturnVarType
```csharp
function GetReturnVarType(Name parameterKey, out Name type, out bool isArray);
```
Get the type of a variable inserted in a return. This is only useful if your return is a wildcard type, to identify what type of variable the user has inserted.

### Tot_I_FlowChartVariable
`/Game/ModsShared/SudoExile/TotAdmin/Tot_I_FlowChartVariable`  
This interface is used for variable validators. If you ever need to create your own type of variable, you'll need to provide a class that implement this interface. If your type could be useful for other modders, concider instead making a suggestion for its addition to Tot!Admin, so that everyone can use it as a common bit of data.

#### ConvertTo
```csharp
function ConvertTo(Name targetType, string data, out string return, out bool success);
```
How to convert this variable type **to** a given target type. Your type of variable does not have to be convertible to every existing type.

#### ConvertFrom
```csharp
function ConvertFrom(Name originalType, string data, out string return, out bool success);
```
How to convert **from** another type to your variable type. Your type of variable does not have to be convertible from every existing type.

#### ValidateData
```csharp
function ValidateData(string data, out string return, out bool wasValid);
```
A function to verify that the serialized data is valid. The function **must** account for empty data as well, that can be the default.

#### GetDefault
```csharp
function GetDefault(out string return);
```
Generate the default value of your type, serialized (Marshaled)

## DataTables

### Tot_DT_FlowChartFields
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FLowChartFields`  
This table is used to reference your custom fields. If you need a specific field to edit a variable type, that how you would reference its existance. Row keys can be anything, but the key will be used during the node conception when adding parameters, so once you chose a key, never change it or you'll break all the nodes that you made with it. Avoid using names already used by Tot!Admin as well.

- `Name` - UI Name of your field|
- `VariableType` - The variable type this field is used for
- `WidgetClass` - The actual field widget. This **must** implement `Tot_I_FlowChartField`
- `Selectable` - Is this field user selectable in variables, or only available in node design ?

### Tot_DT_FlowChartVariables
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FlowChartVariables`  
This table is used to reference your custom variable types. If the variable type you wish to create is of public interest and not specific to your mod, consider making a suggestion for its addition to Tot!Admin so that everyone can profit from a common bit of data. Row keys can be anything, but the key will be used during the node conception when adding parameters/returns, so once you chose a key, never change it or you'll break all the nodes that you made with it. Avoid using names already used by Tot!Admin as well.

- `Name` - UI Name
- `Color` - Variable type color
- `DefaultField` - The default field to use for this type of variable when creating a script variable
- `VariableClass` - The validator class for your variable type. This is technically optional buy highly encouraged. It **must** implement `Tot_I_FlowChartVariable` interface

### Tot_DT_FlowChartNodes
`/Game/ModsShared/SudoExile/TotAdmin/Tables/Tot_DT_FlowChartNodes`  
Where you reference your nodes. Row key **must** be a number, avoid using number in the range of 0-1000 and 100,000-999,999, as those are used by Tot!Admin. Max range is 2,147,483,647. 

- `Name` - UI Name
- `UIGroup` - UI Category
- `Color` - Color of the node. Try having consistent coloring with the type of your node.
- `Inputs` - The input plugs of your node. Standard single input in admin is `Do`. Plug type is to make your plug only work with plug of the same type. All normal plugs are `0`
- `Ouputs` - Same but for outputs
- `NodeClass` - The class of your node. This **must** implement the `Tot_I_FlowChartNode` interface
- `PreventDeletion` - This is always false. The only node that use that is the start node, so it may never be deleted
- `Description` - UI Description
- `HiddenInMenu` - Prevent your node to be created or even copy/pasted. This effectively prevent new copies of the node to be made, and is useful to deprecate a node without deleting it and breaking existing scripts.
- `Deprecated` - Display a warning on the title bar of the node indicating that the node shouldn't be used anymore.

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
```csharp
function AddDynamicLocation(Tot_I_FlowChartInspector inspector, object instigator, Name key, Text label, Text helpTooltip, bool vectorDefault);
```
Add a Dynamic Location Parameter to the node. Dynamic Location allow a user to either select an admin tool as a point in space or directly type a Vector3 coordinates. It work similarly to `Tot_I_FlowChartInspector.AddParameter`.

#### GetDynamicLocationParam
```csharp
function AddDynamicLocation(Tot_I_FlowChartStack stack, Name key, out Vector return, out object actor);
```
Get the location value during run time

#### GetDynamicLocationTransformParam
```csharp
function GetDynamicLocationTransformParam(Tot_I_FlowChartStack stack, Name key, Rotator defaultRotation, out Transform transform);
```
Similar to location but attempt to get a full transform (mostly for its rotation)

#### AddInventoryTargetParameters
```csharp
function AddInventoryTargetParameters(Tot_I_FlowChartInspector inspector, object instigator, Name key, Text label);
```
Add a multi-typed inventory target parameter to your node

#### GetInventoriesFromParameters
```csharp
function GetInventoriesFromParameters(Tot_I_FlowChartStack stack, Name key, Actor default, ItemInventory[] return);
```
Get the collection of inventories from the parameter at runtime

#### AddNumericParameter
```csharp
function AddNumericParameter(Tot_I_FlowChartInspector inspector, object instigator, Name key, Text Label, Text HelpTooltip, bool floatDefault);
```
Add a parameter that can either be a float or an integer for the user to provide. The system will do the necessary conversion in the background

#### AddNumericReturn
```csharp
function AddNumericReturn(Tot_I_FlowChartInspector inspector, object instigator, Name key, Text Label, bool floatDefault);
```
Add a return that can either be a float or an integer for the user to provide. The system will do the necessary conversion in the background

#### GetNumericFloatParam
```csharp
function GetNumericFloatParam(Tot_I_FlowChartStack stack, Name key, out float return);
```
Get a numeric parameter as a Float. Conversion will be handled if an integer was provided.

#### GetNumericIntegerParam
```csharp
function GetNumericIntegerParam(Tot_I_FlowChartStack stack, Name key, out int return);
```
Get a numeric parameter as an Integer. Truncation will be handled if an float was provided.

#### SetNumericFloatReturn
```csharp
function GetNumericIntegerParam(Tot_I_FlowChartStack stack, Name key, float value);
```
Set a Float as a Numeric return. Will be truncated automatically if the return expect an integer

#### SetNumericIntegerReturn
```csharp
function GetNumericIntegerParam(Tot_I_FlowChartStack stack, Name key, int value);
```
Set an Integer as a Numeric return. Will be converted automatically if the return expect an float

## Variable Types
Bellow you'll find all the variable types declared and used by Tot!Admin. I'm open to suggestion to add more that could be used by the many, even if !Admin itself don't make use of them.

[Tot_DT_EnhancedAdminFlowChartFields.csv](/API/Tot_DT_EnhancedAdminFlowChartFields.csv ':ignore')

## Field Types
Bellow you'll find most of the field already built in Tot!Admin that you can use in your parameters

[Tot_DT_EnhancedAdminFlowChartVariables.csv](/API/Tot_DT_EnhancedAdminFlowChartVariables.csv ':ignore')