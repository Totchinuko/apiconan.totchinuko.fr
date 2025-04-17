# F.A.Q
## 1. Do you support single player ?
No.

## 2. Do you support Pippi ?
No, but the chats can be used together.

## 3. How do I open Sudo Admin/Player Panel ?
Open the escape menu of the game, you should be able to find buttons on the top right corner to open them.

## 4. What is the load order of X, Y or Z ?
My mods should be at the bottom of your modlist for stability, always starting with Tot ! Sudo and then followed by the rest of my mods in no particular order. Custom should always be at the very bottom.

## 5. Please explain Sudo ?
Sudo Exile is a framework, by itself it does not do much. It is a mod made for other mod to have some common ground to communicate and fit all of their UI in a cohesive UI panel.

## 6. Infinite modlist reboot, mods acting up, shortcut not working
There is an issue with the ModControllerCache of the game. Those issues can often be resolved by removing the following file either from the side of the player having issues, or from the server side if every player is affected. It is hard to explain, but you'll find the file here:
`Conan Exiles\ConanSandbox\Saved\ModControllerCache.json`
Just delete it and see if everything is back in order.

## 7. I can't open the chat window when pushing Enter when Pippi is installed
Open the game escape menu, on the top right corner, consult the chat help.

## 8. I moved the chat beyond the border of my screen, how do I move it back ?
Open the Sudo Client config (FAQ 3), then in the chat settings, you should find buttons to move and reset the chat position.

## 9. Can I import IQOL saves into Custom ? Can I apply an IQOL save on my character and then save it with Custom ?
No to both questions. There is no way, however convuluted that could be, to do that. Trust me, I'm an engineer.

## 10. How can I change/reset my Sudo Super Admin Password (SSAP)
Head in the tips, [Here](tips?id=reset-super-admin-password)

## 11. Where to find my !Custom character/armor/accessory data ?
Here: `Steam\steamapps\common\Conan Exiles\ConanSandbox\Saved\SaveGames\TotCustom`
If you are doing a copy for a windows reinstall or similar, you might want to copy the whole `Saved` folder while you're at it.