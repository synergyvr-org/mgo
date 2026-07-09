+++
title = 'OpenComposite (Unleashed)'
weight = 20
+++

{{< aside type="note" title="Tip of the Daedric Helmet" >}}
OpenComposite Unleashed is the work of {{< github "Wondernuttz" >}}Wondernuttz{{< /github >}} and {{< github "ColdBomb1" >}}ColdBomb1{{< /github >}}, who not only built the thing but also wrote the thorough documentation that much of this page draws from. Thanks, fellas!
{{< /aside >}}

Skyrim VR was built to run through SteamVR. For a lot of setups (anything going through Virtual Desktop, Quest Link, and the like), that means an extra translation layer sitting between the game and your headset. {{< nexus 171182 >}}OpenComposite Unleashed{{< /nexus >}} (OCU) saves that step, and it's enabled by default in MGO.

OCU works well even for SteamVR-native headsets (_i.e._ ones that require base stations), and though the inherent performance improvement in that setup isn't as dramatic, it provides other benefits that you'll likely find to be worth it. If you don't use any SteamVR accessories like trackers or a treadmill, then you'll probably want to take advantage of what OCU offers.

OCU includes a desktop app, {{< file window-maximize >}}OC Unleashed Configurator for Skyrim VR.exe{{< /file >}} (hereafter called the **Configurator**), that unlocks a bunch of things Skyrim VR never shipped with. You'll find the app in the OCU mod folder. To open the mod folder, find the MO2 entry {{< btn-inline >}}Right Click - Select Open In Explorer - Launch OCU Configurator{{< /btn-inline >}}, do what it says, and then make a shortcut for the app so you don't have to do all of that every time you want to tweak something.

{{< caption name="ocu-05-mo2" type="webp" >}}
Right-click the MO2 entry and choose "Open in Explorer" to find {{< file window-maximize >}}OC Unleashed Configurator for Skyrim VR.exe{{< /file >}}.
{{< /caption >}}

---
## Set Your Runtime

{{< caption name="ocu-01-settings" type="webp" >}}
The Configurator's Settings page, home to the SteamVR profile, among other things.
{{< /caption >}}

Before getting to the fun stuff, you need to **choose the right runtime.** Under the hood, OCU changes how Skyrim VR reaches your headset.[^1] OpenXR is the vendor-neutral standard that most headsets speak natively, which is exactly why skipping the SteamVR detour can run leaner for those headsets. (For SteamVR-native headsets, the benefits come from skipping the actual SteamVR app and from OCU's other features.)

Which OpenXR runtime OCU should hand the game off to depends on your headset:

* **Standalone headsets (Quest, Pico, Dream MR, etc.) with Virtual Desktop:** use **VDXR** (see below).
* **Quest over a wired Link or Air Link:** you're probably already using the Oculus (Meta) OpenXR runtime and don't need to do anything.
* **Pimax**: set "Pimax OpenXR as your default runtime in the Pimax Play settings.
* **SteamVR-native headsets** (Valve Index, Bigscreen Beyond, and the like): use SteamVR's own OpenXR runtime (see below).

If you juggle multiple headsets, you can use {{< ext "(https://github.com/rpavlik/xr-picker)" >}}XR Picker{{< /ext >}} to switch the active OpenXR runtime between them.

---
### Virtual Desktop

{{< caption name="virtual-desktop-vdxr-runtime" no-retina="true" >}}
Set the OpenXR runtime to VDXR in the Virtual Desktop Streamer app.
{{< /caption >}}

**Setting the runtime in Virtual Desktop.** If you play on a Quest (or another wireless headset) over Virtual Desktop, the runtime setting lives in the **Streamer** app on your PC—not in the game, and not in the headset's settings.

1. Open the Virtual Desktop Streamer app on your PC.
2. Find the {{< btn-inline >}}OpenXR Runtime{{< /btn-inline >}} setting in the {{< btn-inline >}}OPTIONS{{< /btn-inline >}} tab.
3. Set it to {{< btn-inline >}}VDXR{{< /btn-inline >}}.

Whatever you do, don't pick SteamVR here. On Virtual Desktop, VDXR is the runtime you want.

{{< aside type="btw" title="Virtual Desktop audio" >}}
Leave the Configurator's auto-switch audio option _off_ if you're on Virtual Desktop. VD manages its own audio path, and we don't want them fighting each other.
{{< /aside >}}

---
### SteamVR

{{< caption name="steamvr-openxr-runtime" no-retina="true" >}}
In SteamVR's settings, set SteamVR as the active OpenXR runtime.
{{< /caption >}}

**Setting the runtime in SteamVR.** If you're on a wired SteamVR-native headset (a Valve Index, Bigscreen Beyond, and the like), you'll point OpenXR at SteamVR and then apply a profile that tunes SteamVR for OCU.

1. Open {{< btn-inline >}}SteamVR Settings{{< /btn-inline >}} → {{< btn-inline >}}OpenXR{{< /btn-inline >}}.
2. If SteamVR isn't already the active runtime, click {{< btn-inline >}}Set SteamVR as OpenXR Runtime{{< /btn-inline >}}.
3. In the Configurator, apply the **SteamVR OCU Profile** (pictured below).

{{< caption name="ocu-04-steamvr" type="webp" >}}
Apply the SteamVR OCU Profile from the Configurator's Settings page.
{{< /caption >}}

{{< aside type="alert" title="Don't skip the OCU Profile" >}}
The **SteamVR OCU Profile** patches your {{< file file-lines >}}steamvr.vrsettings{{< /file >}} with OCU-friendly defaults. It backs up your existing file first, so you can hit {{< btn-inline >}}Restore SteamVR Defaults{{< /btn-inline >}} to undo it later. Wired SteamVR-native users should always apply it. (And if you ever want to go back to plain SteamVR, just disable the OCU mod in MO2.)
{{< /aside >}}

---
## OCU Features

### On-Screen Keyboard
{{< caption name="ocu-keyboard-console" type="webp" >}}
Using the console in VR with OpenComposite Unleashed
{{< /caption >}}

An on-screen keyboard was OCU's original signature feature and is what motivated Wondernutts to start the project. SteamVR has its own keyboard, but OpenComposite doesn't, and even hardware keyboards don't work in-game. So to name your character and the items that you forge/enchant/brew, you'll need OpenComposite Unleashed. It also saves you from needing to switch to the desktop view to use the console.

The keyboard will open automatically when it's time to name your character or an item. You can open it manually using an assigned button or button combo, defined in the Configurator. By default, it's set to {{< btn-inline >}}Double-Click {{< control name="left-stick" >}}{{< /btn-inline >}}.

You can close the keyboard by squeezing {{< control name="grip" >}} on either controller.

{{< aside type="alert" title="Console Woes" >}}
If you open the console and then hide the keyboard using the {{< btn-inline >}}Done{{< /btn-inline >}} button instead of {{< control name="grip" >}} before closing the console, your console state will be out of sync with OCU, and it can get confusing. If that happens, open the keyboard back up, close the console with <kbd>`</kbd>, and close the keyboard with {{< btn-inline >}}Done{{< /btn-inline >}}.

This might seem weirdly specific, but I've put these instructions here because I've done it about a dozen times. I can't be the only one.
{{< /aside >}}

---
### Controller Bindings

{{< caption name="ocu-02-bindings" type="webp" >}}
Choosing a controller binding preset in the Configurator
{{< /caption >}}

Skyrim VR gives you no in-game way to customize its controls. Your only options are to edit an esoteric text file by hand or to install a mod. The Configurator does it, and it's one of the best solutions out there.

But: OCU has to be the _only_ thing managing your bindings.

{{< aside type="alert" title="Let OCU own your bindings" >}}
Binding conflicts are the number-one cause of crashes, dead buttons, and bizarre input behavior in OCU. Because OCU works by intercepting your controller input, it needs to be the single source of truth for your controls. Don't stack it on top of another control scheme (including the SteamVR binding options elsewhere in MGO) or a mod that supplies its own {{< file file-lines >}}controlmapvr.txt{{< /file >}}. Pick one of OCU's presets and let it do its job.
{{< /aside >}}

Happily, OCU ships with several presets, and a few of them have their own pages here with a full button-by-button breakdown:

* {{< btn-inline >}}VRIK V2.1.0{{< /btn-inline >}}: the default and the best starting point for most players ([VRIK Bindings](/controls/bindings-vrik))
* {{< btn-inline >}}VR Safe{{< /btn-inline >}}: which restores the original VRIK layout alongside the original keyboard layout ([VR Safe Bindings](/controls/bindings-vrsafe)), in case you goof up your keyboard bindings somewhere along the way
* {{< btn-inline >}}Kvite{{< /btn-inline >}}, a community favorite ([Kvite Bindings](/controls/bindings-kvite)) from FUS
* {{< btn-inline >}}Cangar{{< /btn-inline >}}, another favorite from FUS ([Cangar Bindings](/controls/bindings-cangar))
* {{< btn-inline >}}Vanilla + Oculus Touch{{< /btn-inline >}}, a hotkey-heavy layout that's closer to VRIK than to vanilla, despite the name ([Optimized Oculus Bindings](/controls/bindings-touch))

There's also a plain {{< btn-inline >}}Vanilla{{< /btn-inline >}} preset if you want Skyrim VR's baseline layout. Whichever you choose, apply it, save your bindings, and restart the game to test it _before_ you start tweaking anything.

{{< aside type="btw" title="Roll your own combos" >}}
Beyond the presets, the Configurator's **Bindings** page lets you build your own controller combos. Assign an action to a button combination (say, both grips together), and pick how it fires: a single press, a double/triple/quad tap, or a long press. Each combo can send a plain keyboard key or a specific Skyrim action. You can have up to 16 at once, and OCU is smart enough to check bigger combos before smaller ones, so a {{< control name="grip" >}} + {{< control name="a" >}} + {{< control name="b" >}} combo won't get eaten by a simpler {{< control name="grip" >}} + {{< control name="a" >}} one.
{{< /aside >}}

---
### Video/Performance

{{< caption name="ocu-03-video" type="webp" >}}
Performance settings in the Configurator
{{< /caption >}}

The Configurator exposes a number of performance-tuning tools for both NVIDIA and AMD cards. There are multiple options for upscaling, which renders the game at a lower resolution and intelligently scales it up, buying you frames without turning everything into mush. You can enable FSR (AMD's FidelityFX Super Resolution, which works on any GPU) or DLSS (NVIDIA only). NVIDIA users also get Fixed Foveated Rendering, which saves work by rendering the edges of your view (where your eyes generally aren't focused, though this feature does not include eye-tracking) at lower detail.

{{< aside type="alert" title="Pick one upscaler" >}}
Community Shaders can _also_ handle DLSS upscaling, and you don't want both systems fighting over the job. Decide whether OCU or Community Shaders is doing your upscaling _before_ you compile shaders. If Community Shaders won't be your upscaler, disable its upscaling first, or you may have to rebuild your shaders and waste a chunk of time.
{{< /aside >}}

The Configurator also offers ASW (Asynchronous SpaceWarp), a frame-generation technique that smooths motion by inserting synthetic frames between the real ones. ASW runs on your PC, not your headset.

{{< aside type="btw" title="Choose a SpaceWarp" >}}
OCU's ASW is currently experimental, and depending on your headset and runtime it can introduce artifacts like ghosting, flickering, or parallax weirdness. If you're happy with Virtual Desktop's Synchronous SpaceWarp (SSW), there's no rush to switch. Just don't run ASW and SSW at the same time. If you do want to experiment, turn off SSW first and give ASW a shot to see which looks better on your setup.
{{< /aside >}}

[^1]: Normally the chain is {{< btn-inline >}}Skyrim VR → SteamVR{{< /btn-inline >}}. With OCU, it becomes {{< btn-inline >}}Skyrim VR → OCU → your OpenXR runtime{{< /btn-inline >}}.