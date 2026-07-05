+++
title = 'Optimized Oculus Bindings'
weight = 20
+++

These are the controller bindings defined in the OpenComposite Unleashed preset {{< btn-inline >}}Vanilla + Oculus Touch{{< /btn-inline >}}, which originates from the {{< nexus 26468 >}} Optimized Button Layout for Oculus and Meta controllers{{< /nexus >}} mod.

Despite the "Vanilla +" label in OCU, it is far more similar to the VRIK bindings than it is to the vanilla bindings.

This control scheme sets all of the face buttons (A / B / X / Y) to hotkeys. That allows you to set them to a wide variety of actions, including mod-specific functions (VRIK Gestures, DovaVR Locomotion, SkyrimNet, OBody, etc.).

It also lets both grip buttons do double-duty as modifier keys (like _shift_ or _function_), so they can be combined with other buttons to perform additional actions. Notably, {{< control name="left-grip" >}} + {{< control name="left-trigger" >}} is assigned to _Shout / Power_, which conflicts with the default bindings for Spell Wheel VR (so you'll likely want to change one or the other). Check out the {{< nexus 26468 >}} Nexus page{{< /nexus >}} for full details.

This scheme is unusual in that it makes a number of changes to menu bindings, such as assigning {{< control name="a" >}} to _Select / Use_ and assigning {{< control name="b" >}} to _Back / Cancel / Exit_.

![Optimized Oculus/Meta bindings](/images/quest-touch-lighting.webp)

For Valve Index controllers, the actions are assigned to the buttons that are in the same positions as the ones shown above, though they have different labels on the Index controllers.

### Gameplay

| Action | Oculus Left | Oculus Right |
|---|---|---|
| Move | {{< control name="left-stick" >}} | — |
| Turn | — | {{< control name="right-stick" >}} |
| Jump | — | {{< control name="right-stick" >}} ↑ |
| Sneak | — | {{< control name="right-stick" >}} ↓ |
| Cast Magic | {{< control name="left-trigger" >}} | {{< control name="right-trigger" >}} |
| Draw/Nock Arrow | — | {{< control name="right-trigger" >}} |
| Power Attack | {{< control name="left-trigger" >}} (hold + swing) | {{< control name="right-trigger" >}} (hold + swing) |
| Interact (Activate) | — | {{< control name="right-grip" >}} |
| Sprint | {{< control name="left-grip" >}} | — |
| Shout | {{< control name="left-grip" >}} + {{< control name="left-trigger" >}} | — |
| Tween / Ready Weapon | {{< control name="right-stick" >}} (press / hold) | — |
| Journal / Wait | {{< control name="left-stick" >}} (press / hold) | — |
| Hotkey 1 | {{< control name="y" >}} | — |
| Hotkey 2 | {{< control name="x" >}} | — |
| Hotkey 3 | {{< control name="left-grip" >}} + {{< control name="y" >}} | — |
| Hotkey 4 | {{< control name="left-grip" >}} + {{< control name="x" >}} | — |
| Hotkey 5 | — | {{< control name="b" >}} |
| Hotkey 6 | — | {{< control name="a" >}} |
| Hotkey 7 | — | {{< control name="right-grip" >}} + {{< control name="b" >}} |
| Hotkey 7 | — | {{< control name="right-grip" >}} + {{< control name="a" >}} |

### Menus

| Action | Oculus Left | Oculus Right |
|---|---|---|
| Accept | {{< control name="left-trigger" >}} | {{< control name="a" >}} / {{< control name="right-trigger" >}} |
| Back / Cancel / Exit | — | {{< control name="b" >}} |
| Previous Menu (Journal) | {{< control name="left-trigger" >}} | — |
| Next Menu (Journal) | — | {{< control name="right-trigger" >}} |
| Equip Right | — | {{< control name="right-trigger" >}} |
| Equip Left | {{< control name="left-trigger" >}} | — |
| Select / Use Item | — | {{< control name="a" >}} |
| Favorite Item | — | {{< control name="right-stick" >}} (press) |
| Item Zoom | — | {{< control name="right-grip" >}} |
| Filter (SkyUI) | — | — |
| {{< control name="x" >}} Button | {{< control name="x" >}} | — |
| {{< control name="y" >}} Button | {{< control name="y" >}} | - |

### Loot Menu

| Action | Oculus Left | Oculus Right |
|---|---|---|
| Take Item | — | {{< control name="a" >}} |
| Take All Items | {{< control name="x" >}} | — |
