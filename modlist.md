# Recommanded Modlist order

## How to recognize a mod order crash
Before you go and get the modlist, you might want to know how to recognize one of those. Here is a typical crash log from a load order issue. You would find that at the end of your log file

`ConanSandbox\Saved\Logs\ConanSandbox.log`
```
...
Script Stack:
Tot_W_EquipButton_C.ExecuteUbergraph_Tot_W_EquipButton
Tot_W_EquipButton_C.BndEvt__EquipButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature

[2023.02.13-10.20.26:869][ 48]LogMemory: Platform Memory Stats for WindowsNoEditor
[2023.02.13-10.20.26:870][ 48]LogMemory: Process Physical Memory: 2327.51 MB used, 4712.06 MB peak
[2023.02.13-10.20.26:870][ 48]LogMemory: Process Virtual Memory: 8967.48 MB used, 9629.62 MB peak
[2023.02.13-10.20.26:870][ 48]LogMemory: Physical Memory: 11453.00 MB used,  4857.31 MB free, 16310.31 MB total
[2023.02.13-10.20.26:870][ 48]LogMemory: Virtual Memory: 48785.87 MB used,  4857.31 MB free, 134217728.00 MB total
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: === Critical error: ===
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: 
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: Fatal error: [File:C:\B\tech_exiles\code\Engine\Source\Runtime\CoreUObject\Private\UObject\ScriptCore.cpp] [Line: 1137] 
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: Failed to find function OpenContextual in Tot_CommonLibrary_C /Game/ModsShared/SudoExile/TotLib/Tot_CommonLibrary.Default__Tot_CommonLibrary_C
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: 
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: 
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: !0x0000000000000000
[2023.02.13-10.20.26:870][ 48]LogWindows:Error: 
[2023.02.13-10.20.26:900][ 48]LogExit: Executing StaticShutdownAfterError
[2023.02.13-10.20.27:228][ 48]LogWindows: FPlatformMisc::RequestExit(1)
[2023.02.13-10.20.27:228][ 48]Log file closed, 02/13/23 02:20:27
```

Now this might look like gibberish for you, but what is interesting is this specific sentence on line 14:
`Failed to find function OpenContextual in Tot_CommonLibrary_C`  
This says, the code could not find a particular function in a specific file. This is usually a clue that a mod is overriding said file with an older version that does not contain the function. It is usually hard to find which mod is actually causing this without the proper tools, but most of the time this can be fixed by reordering the modlist.                    

## Typical Modlist</h3>
> ### Some explanation
> We recommend putting our mods on the bottom of the modlist. This will prevent issues with mods that accidentally included the API from overwriting with outdated files whenever there's an API update. For more information on how to avoid this as a mod author, please see the instructions on common pitfalls since 3.1 [here](/?id=common-pitfall-since-31).

```
[...]
..\steamapps\workshop\content\440900\880454836\Pippi.pak
[...]
..\steamapps\workshop\content\440900\1542041983\RA.pak
[...]
[Body mods]
[...]
..\steamapps\workshop\content\440900\2010870025\HighHeels.pak
[...]
..\steamapps\workshop\content\440900\2300463941\Devious_Desires.pak
[...]
..\steamapps\workshop\content\440900\3036057084\ModAdmin.pak (Sudo)
..\steamapps\workshop\content\440900\3036058836\RoleplayRedux.pak
..\steamapps\workshop\content\440900\2677532697\TotImmersiveHud.pak
..\steamapps\workshop\content\440900\2671265327\TotWalk.pak
..\steamapps\workshop\content\440900\2850232250\TotAdmin.pak
..\steamapps\workshop\content\440900\2847709656\TotChat.pak
..\steamapps\workshop\content\440900\2886779102\TotCustom.pak
```