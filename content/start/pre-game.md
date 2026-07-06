+++
title = 'Pre-Game (MO2)'
weight = 30
+++

Now that you have Mad God's Overhaul downloaded and installed, you can manage the installed list and launch the game via **Mod Organizer 2 (MO2)**.

If you've created a shortcut, use that to launch MO2. If not, find {{< file >}}ModOrganizer.exe{{< /file>}} in your MGO installation folder, and launch it from there.

MO2 takes a little while to start. Even the splash screen may not appear right away. Resist the temptation to launch it again. Just wait.

## Quick Start

{{< caption name="mo2-run" type="webp" >}}
To play, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /caption >}}

When MO2 has finished loading, you can launch the game with the {{< btn-inline play >}}Run{{< /btn-inline >}} button near the upper-right, with {{< btn-inline >}}Launch MGO - Do Not Unlock{{< /btn-inline >}} selected in the nearby dropdown. You should always launch MGO this way. Don't just run Skyrim VR from Steam. That will launch the vanilla (unmodded) game. To play MGO, you need to run it from MO2.



{{< aside type="btw" title="Skip to the game" >}}
You can use the <span class="btn-inline"><i class="fa-solid fa-share"></i> Shortcut</span> dropdown to add a shortcut directly to the game, eliminating the need to run MO2 first.
{{< /aside >}}

Before jumping into Tamriel, you might want to take a quick look around MO2.

{{< aside type="btw" title="Mods & Plugins" >}}
Mod Organizer 2's interface is basically split in two: **mods** on the left, **plugins** on the right.

The left pane is the mod list. In MGO, mods are collected in folders. You can expand each folder by clicking the arrow to the left of each one.

Within the folders are the actual mods. Most of them are packaged mods that you can download from Nexusmods or somewhere similar. Others are specific to MGO. If the box is checked, that mod is enabled. If it's unchecked, the mod is disabled, and will not be included when you run the game.

Many, but not all, of the mods listed in the left pane have corresponding plugins on the right. We'll get into what makes plugins special in a later section. MGO is pre-configured so that you never need to worry about it unless you want to start fiddling with the list yourself.
{{< /aside >}}

## Before you play...

You don't need to know everything there is to know about MO2 before playing for the first time. MGO is pre-configured with sensible default, but it's worth taking a moment to do some initial configuration. Synergy Team has made it pretty straightforward.

Scroll down the mod list until you see a folder labeled {{< btn-inline folder >}}START HERE - Expand for Setup{{< /btn-inline >}}. As the label suggests, there is where you should start.

<div class="separator mo2-start">
  <i class="fa fa-folder"></i> ▸ START HERE - Expand for Setup
</div>

If you open the **START HERE** folder, you'll see subfolders labeled **STEP 1**, **STEP 2**, etc.

---
## Startup Notes
<div class="separator mo2-step1">
  <i class="fa fa-folder"></i> ▸▸ STEP 1 - Startup Notes - PLEASE READ BEFORE REPORTING ISSUES
</div>

**STEP 1** doesn't include any actual mods, but rather reminds you of some of MGO's [requirements](/start/requirements) along with some important notes for using MO2 and running the game.

* <span class="highlight mo2-unlock">DO NOT Click Unlock</span> - When you run the game, MO2's interface will lock to keep you from accidentally messing with it while the game is running. The dialog box that opens will include an {{< btn-inline >}}Unlock{{< /btn-inline >}} button. This entry in the list is to remind you _not_ to click that button.
* <span class="highlight mo2-autosave">DO NOT Use Auto Save or Quick Save</span> - Auto Save and Quick Save are handy features in Skyrim (flat and VR alike), but the save files they produce are not as complete as those created by full saves, and some players have reported issues loading them. A bad save can result in hours of progress lost. For safety, use full saves. You can add a save shortcut to Spell Wheel VR to make this more convenient.
* <span class="highlight mo2-loot">DO NOT Use Loot Sort on Plugins</span> - LOOT is a tool that automatically sorts plugins (the files listed on the right side of MO2) to be loaded in an order that's better optimized than if you just added them without much thought. **The plugins in Mad God's Overhaul have already been sorted.** You shouldn't mess with that order.

---
## Target Frame Rate (FPS)
<div class="separator mo2-fps">
  <i class="fa fa-folder"></i> ▸▸ STEP 2 - Select Target FPS
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 144
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 120
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly" checked> 90
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 80
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 72
</div>

**STEP 2** asks you to choose your headset's target frame rate (also called the refresh rate). Although this step is optional, for optimal performance you should check the entry that matches your headset's frame rate.

For SteamVR-based headsets, you can check (or set) the target frame rate in the SteamVR desktop app. If you're using Virtual Desktop, you can set the frame rate in the **STREAMING** tab of the VD overlay.

{{< aside type="btw" title="Why?" >}}
Skyrim uses the Havok Physics engine, and there are a few <abbr title="a plain-text file format for storing settings, preferences, other parameters">INI</abbr> settings for controlling how it handles frame updates and physics calculations. Ideally these values are set to specific values based on your frame rate, and that's what these mod list entries do.
{{< /aside >}}

---
## Performance Options
<div class="separator mo2-perf">
  <i class="fa fa-folder"></i> ▸▸ STEP 3 - Select Performance Options
</div>
<div class="separator sub mo2-cs">
  <i class="fa fa-folder"></i> ▸▸▸ Community Shaders
</div>
<div class="separator sub mo2-grass">
  <i class="fa fa-folder"></i> ▸▸▸ Grass Density & LODs (Optional)
</div>

**STEP 3** includes a few performance-related presets.

There are _Performance_ (the default) and _Quality_ presets for **Community Shaders**. Select one or the other—not both.Switching to the _Quality_ presets will have a fairly significant impact to your outdoor frame rate. Whether that's worth it is up to you.

 **Grass Density** and **LOD Distance** have optional _Quality_ presets as well, and they also impact outdoor frame rate. (Leaving them unchecked will default to performance settings.)

 {{< aside type="btw" title="LOD?" >}}
 LOD stands for _Level of Detail_ and which set of pre-generated LODs you use determines how detailed distant geometry (terrain, trees, structures, etc.) will appear. Even the _performance_ presets look quite good, so if you're looking to save some frames, this is a good place to do it.
 {{< /aside >}}

---
## Preferred Runtime
<div class="separator mo2-runtime">
  <i class="fa fa-folder"></i> ▸▸ STEP 4 - Select Preferred Runtime
</div>

_VR runtime_ refers to the software layer that sits between a VR application (like Skyrim VR) and your VR headset. **STEP 4** asks you to choose between OpenComposite and SteamVR. **STEP 5** and **STEP 6** depend on what you choose here.

MGO enables OpenComposite by default. In particular, MGO includes OpenComposite Unleashed, which works fine with SteamVR-native headsets and includes a number of features beyond just translating VR-related API calls. It's great!

You should probably stick with OpenComposite unless you know that you have a _really good reason_ to choose SteamVR—like a treadmill, trackers, or some other accessory that strictly requires using the SteamVR runtime. 

<div class="separator mo2-ocu">
  <i class="fa fa-folder"></i> ▸▸▸ (A) Open Composite
</div>
<div class="separator sub mo2-ocu-main">
  <i class="fa fa-folder"></i> ▸▸▸▸ Step 5 - Enable Main Mod
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly" checked> Right Click - Select Open In Explorer - Launch OCU Configurator
</div>

The single mod (with the really long label) in this folder enables OpenComposite Unleashed. There are options for its built-in keyboard, changing your key bindings, upscaling and more, accessible in the included configurator app. As the mod label points out, you can find this app in the mod folder.

<div class="separator sub mo2-ocu-stabilizer">
  <i class="fa fa-folder"></i> ▸▸▸▸ Step 6 - Enable VR FPS Stabilizer (OC)
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly" checked> VR FPS Stabilizer - Open Composite
</div>

{{< nexus 31392 >}} VR FPS Stabilizer{{< /nexus >}} changes INI values to maintain your framerate. This entry is the configured for OpenComposite compatibility, and you should leave it enabled if you're using OCU.

<div class="separator mo2-steamvr">
  <i class="fa fa-folder"></i> ▸▸▸ (B) Steam VR
</div>
<div class="separator sub mo2-steamvr-bindings">
  <i class="fa fa-folder"></i> ▸▸▸▸ Step 5 - Select Controller Bindings
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> Controller Bindings - Kvite
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VRIK Controller Bindings - Standard
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VRIK Controller Bindings - Easy Shout
</div>

**STEP 5** for SteamVR provides three alternate control schemes. Skyrim VR's default controls were designed for the Vive Wands, and they weren't designed with today's mods in mind. (In all fairness, they didn't exist yet.)

MGO comes with three optional control schemes for SteamVR users to choose from. Choose only _one_ of these. If they're all disabled (and you're not using OC Unleashed), Skyrim VR's default controls will apply.

{{< aside type="alert" title="OC Unleashed compatibility" >}}
If you're using OpenComposite Unleashed, OCU needs to manage your controller bindings. Do _not_ enable any of the bindings in this section. You can use the OCU Configurator app to select from a variety of presets—including all of these—or cook up a control scheme of your own.
{{< /aside >}}

<div class="separator mo2-steamvr-stabilizer">
  <i class="fa fa-folder sub"></i> ▸▸▸▸ Step 6 - Enable VR FPS Stabilizer (Steam VR)
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VR FPS Stabilizer - Steam VR
</div>

MGO includes a SteamVR preset for {{< nexus 31392 >}} VR FPS Stabilizer{{< /nexus >}}. If you're using SteamVR, enable this.

---
## Optional Mods

<div class="separator mo2-optional">
  <i class="fa fa-folder"></i> ▸▸ OPTIONAL Mods - Expand to Select
</div>

MGO includes a number of optional mods across several categories. They're all tested and known to work with the list, but most are disabled by default.

---
## AI and Speech

<div class="separator mo2-ai">
  <i class="fa fa-folder"></i> ▸▸▸ AI and Speech - Read Nexus Article
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> SkyrimNet
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> SeverActions
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> IntelEngine
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> OStimNet
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Dragonborn Speaks Naturally
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> No NPC Greetings (Special Edition)
</div>

This section includes mods for incorporating AI NPCs into the game via SkyrimNet and its plugins, as well as the option to use your own voice in vanilla conversations (even without enabling the AI features).

### SkyrimNet

The {{< ext "https://goncalo22.github.io/SkyrimNet-GamePlugin/" >}} SkyrimNet Docs{{< /ext >}} are extensive, though not exhaustive.



### Other Speech Mods

{{< nexus 16514 >}}Dragonborn Speaks Naturally{{< /nexus >}} adds voice recognition to the game. In dialogue/conversation menus, you can speak your chosen dialogue from the available options, rather than selecting it with your controller. This is independent of SkyrimNet and other AI mods.

Frankly, it's nobody's business how often you get to the Cloud District! {{< nexus 1044 >}}No NPC Greetings (Special Edition){{< /nexus >}} can eliminate unprompted NPC greetings altogether, or it can simply require that NPCs get closer before greeting you.

---
## Convenience

<div class="separator mo2-convenience">
  <i class="fa fa-folder"></i> ▸▸▸ Convenience
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> VR Menu Mouse Fix
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Better Sleep Wait Menu
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Unread Books Glow Redone
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Stop Trigger Unsheathing For VR
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Infinite Stamina Out of Combat
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> PrismaUI AddItemMenu
</div>

The mods in the _Convenience_ section are mostly  self-explanatory, but I want to call attention to a few of them.

{{< nexus 33414 >}}VR Menu Mouse Fix{{< /nexus >}} lets you navigate game menus using a laser pointer, rather than exclusively using thumbsticks. Some features of SkyUI and other mods _do not work_ without this, including inventory filtering. For that reason, I recommend giving this a try. In MGO, it has been combined in a single entry with {{< nexus 118579 >}}Stable Hands{{< /nexus >}}, which makes it far easier to point accurately.

{{< nexus 55962 >}}Stop Trigger Unsheathing For VR{{< /nexus >}} does just what it says. I play on a Meta Quest 3, and without this mod, I'd be unsheathing my weapon every time I take a screenshot. (I take a lot of screenshots.) This mod is also a requirement for Fake Edge VR, which we'll encounter soon.

{{< nexus 179949 >}}Prisma UI AddItemMenu{{< /nexus >}} is a lightweight, fast, and feature-packed mod for adding any item from the game (or from mods!) to your inventory. It's categorized and searchable, and it lets you consume items directly from the menu. This mod, courtesy of Wondernutts, saved the day when an older AddItem mod was sent to Oblivion, keeping many modlists (including some previous versions of MGO) from being downloadable. This one also happens to be much, much better.

---

<div class="next">
  <a href="/mgo/first-launch">First Launch <i class="fa fa-circle-right"></i></a>
</div>
