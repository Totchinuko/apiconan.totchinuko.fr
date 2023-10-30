# Tips n' Tricks
## Vanilla game

### Game sound when the game is in the background

`ConanSandbox\Saved\Config\WindowsNoEditor\Engine.ini`

Open the file and change this line. Add it if it's not already there.

```
[Audio]
UnfocusedVolumeMultiplier=1.0
```

### Solution to Log Spam on client and server
The game log a lot of details about its actions, constantly. Some messages are actually quite spammy, and are not actual errors, but more informative material that can be safely disgarded. In the example bellow, you can see one line of a notoriously spammy message, that makes log file grow large in size.

```
[2023.04.03-10.33.40:793][815]LogSkinnedMeshComp:Warning: GetBoneMatrix : ParentBoneIndex(0) out of range of MasterPoseComponent->SpaceBases for /Game/Maps/ConanSandbox/ConanSandbox.ConanSandbox:PersistentLevel.BD_BP_Carpenter_Station_C_0.SkeletalMeshComponent_522
```
Two things can be indentified in this line, the source of the message `LogSkinnedMeshComp` and the level of the message `Warning`. With that, we can configure the engine to only send message from a certain source to a certain minimum level. Bellow you'll find all the Log levels of the engine, in priority level. If you choose Error, any message priority under will be ignored.

- NoLogging
- Fatal
- Error
- Warning
- Display
- Log
- Verbose
- VeryVerbose
- All (=VeryVerbose)

With this knowledge, we can identify and configure specific log message to our liking. Open the file bellow, and add the config block `[Core.Log]` if it does not exists. In the example bellow, I disable completly the log related to the message example above, but placing it to Error would suffise to suppress it, as the message is a warning.

`/ConanSandbox/Saved/Config/WindowsNoEditor/Engine.ini`

```
[Core.Log]
LogSkinnedMeshComp=NoLogging
```

As a bonus, you can choose all of the source log level by default, with the source `Global` like bellow. This would suppress a lot of sources, so it might not be desirable if a problem does occure.

```
[Core.Log]
Global=Fatal
```

### No NPC spawn on the map
In this file, add those lines:   

`ConanDedicatedServer/DedicatedServerLauncher/ConanExilesDedicatedServer/ConanSandbox/Saved/Config/Engine.ini`
```
[/Script/ConanSandbox.SystemSettings]
dw.EnableAISpawning=0
dw.EnableInitialAISpawningPass=0
```

### Start Dedicated with log window
Add `-log` in the arguments

### Improve texture loading
This will consume more GPU memory, but if you have enough, this can improve blured textures in heavily moded game and/or heavily decorated aread.

`..\Conan Exiles\ConanSandbox\Config\DefaultScalability.ini`
```
[TextureQuality@3]
r.Streaming.MipBias=0
r.MaxAnisotropy=16
r.Streaming.PoolSize=2500
```

Texture Quality 3 refer to Ultra Setting. By default MaxAnisotropy is 8, and PoolSize is 1500, on Ultra. MaxAnisotropy is for texture filtering at angles, but what is mostly interesting is the PoolSize. Increasing pool size, should increase the amount of memory used by the engine to swap textures that are needed at a given time. Early tests did improve texture loading in heavy decorated environment for me, and had a noticeable impact on my Dedicated GPU memory consumption.

I suppose one could increase it even more, but it really depends on how much memory you have to spare. Do keep in mind that GPU accelerated apps like your browser, Discord, or even steam, consume some amount of GPU memory. Most of those apps consumption can be removed by turning off hardware acceleration, but it can be at the expense of performance (If your CPU can take the load, its not always true).

## Tot Mods In General
### Manual slider values
So it's pretty obvious I like sliders, most of the time they allow to have a fixed range for valid values, but sometimes, it's just for adviced values. For the latter one, you can actually type a manual value with your keyboard, that goes beyond the slider value.


### Solution for Tot Chat getting stuck with Pippi
Bind your chat key (Enter for example) to `Toggle Chat Window` instead of `Global Chat` in your game settings. Let me know if it worked for you.

## Tot ! Admin
### Prevent the server list to refresh automaticly when opening it
In this file, add those lines:

`Conan Exiles/ConanSandbox/Config/DefaultEngine.ini`
```
[/Game/Mods/TotAdmin/PreLoad/Tot_W_NoServer.Tot_W_NoServer_C]
NoServerListAutoRefresh=true
```

### Crashing when trying to open an inventory on the admin map
A similar case was already resolved. If you are using Unlock+, try reducing both inventory multiplier to x1, save, and restore the previous value you had. We suspect this is due to some form of corrupted configuration somewhere, either from Unlock+ or from some vanilla data modified by Unlock+.


## Tot ! Sudo
### Super Admin for Steam ID
In this file, add those lines:

`Conan Exiles/ConanSandbox/Config/DefaultEngine.ini`
```
[/Game/Mods/ModAdmin/Auth/EA_MC_Auth.EA_MC_Auth_C]
+SuperAdminSteamIDs=[YOUR_STEAM_ID]
```