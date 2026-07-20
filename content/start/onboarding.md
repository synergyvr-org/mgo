+++
title = 'Onboarding (MO2)'
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

Before jumping into Tamriel, you should take a quick look around MO2, especially the onboarding section labeled {{< btn-inline >}}START HERE - Expand for Setup{{< /btn-inline >}}.

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

You can filter the list with the text box at the bottom of the left pane to find "START" quickly.

{{< caption name="mo2-filter-start" type="png" no-retina="true" >}}
Filter the list to find what you're looking for quickly.
{{< /caption >}}

---
## Startup Notes
<div class="separator mo2-step1">
  <i class="fa fa-folder"></i> ▸▸ STEP 1 - Expand to Review Startup Notes
</div>

**STEP 1** doesn't include any actual mods, but rather some important notes for using MO2 and running the game.

<span class="highlight mo2-docs">PLEASE FOLLOW PROVIDED DOCUMENTATION FOR SETUP</span>

That's the site you're reading now, so you're off to a good start. If you're reading this from within Wabbajack, you can refer to it later at [https://synergyvr.org/mgo/](https://synergyvr.org/mgo/).

<span class="highlight mo2-beta">DO NOT ADD YOUR OWN MODS TO THE BETA</span>

The MGO 4.0 beta is a testing period. At this stage, the team is looking for feedback on the mod list as they've developed it. To be part of that process, please resist the temptation to throw in additional mods.

<span class="highlight mo2-unlock">DO NOT Click [ Unlock ] After Launching Game</span>

When you run the game, MO2's interface will lock to keep you from accidentally messing with it while the game is running. The dialog box that opens will include an {{< btn-inline >}}Unlock{{< /btn-inline >}} button. This entry in the list is to remind you _not_ to click that button.

<span class="highlight mo2-loot">DO NOT Use LOOT to Sort Plugins</span>

LOOT is a tool that automatically sorts plugins (the files listed on the right side of MO2) to be loaded in an order that's better optimized than if you just added them without much thought. **The plugins in Mad God's Overhaul have already been sorted.** You shouldn't mess with that order.

---
## Preferred Runtime
<div class="separator mo2-runtime">
  <i class="fa fa-folder"></i> ▸▸ Step 2 - Select ONE Preferred Runtime
</div>

_VR runtime_ refers to the software layer that sits between a VR application (like Skyrim VR) and your VR headset. **Step 2** asks you to choose between OpenComposite and SteamVR. As the folder name insists, pick _ONE_. Everything runtime-specific lives in the two subfolders here.

### OpenComposite (Unleashed)

<div class="separator sub mo2-ocu">
  <i class="fa fa-folder"></i> ▸▸▸ Open Composite
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> Right Click - Select Open In Explorer - Launch OCU Configurator
</div>

OpenComposite is the right choice for most players. MGO includes [OpenComposite Unleashed](/performance/open-composite/), which works fine with SteamVR-native headsets and includes a number of features beyond just translating VR-related API calls.

You should probably go with OpenComposite unless you know that you have a _really good reason_ to choose SteamVR—like a treadmill, trackers, or some other accessory that strictly requires using the SteamVR runtime.

To choose it, enable the single mod (with the really long label) in the **Open Composite** folder. That's OpenComposite Unleashed itself, and its label doubles as instructions: the included configurator app lives in the mod's folder (right-click the mod and select {{< btn-inline >}}Open In Explorer{{< /btn-inline >}} to find it). The configurator has options for OCU's built-in keyboard, changing your key bindings, upscaling (though you may want to do that with Community Shaders instead), and more. Seriously, [read up on it](/performance/open-composite/) if you haven't yet.

### SteamVR

<div class="separator sub mo2-steamvr">
  <i class="fa fa-folder"></i> ▸▸▸ Steam VR
</div>
<div class="separator sub mo2-steamvr-bindings">
  <i class="fa fa-folder"></i> ▸▸▸▸ Controller Bindings
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VRIK Controller Bindings - Easy Shout
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VRIK Controller Bindings - Standard
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> Controller Bindings - Kvite
</div>
<div class="separator sub mo2-steamvr-stabilizer">
  <i class="fa fa-folder"></i> ▸▸▸▸ VR FPS Stabilizer
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> VR FPS Stabilizer
</div>

To use the SteamVR runtime, just don't enable OCU. There's no separate mod to enable for SteamVR, since Skyrim VR is a SteamVR game in the first place.

If you're using OCU, you should use it to manage your controls as well. If you're using SteamVR, however, you should pick from the **Controller Bindings** folder, which provides three alternate control schemes. Skyrim VR's default controls were designed for the Vive Wands, and they weren't designed with today's mods in mind. (In all fairness, those mods didn't exist yet.) Choose only _one_ of these. If they're all disabled (and you're not using OC Unleashed), Skyrim VR's default controls will apply. Whichever you choose, [we've got you covered](/controls).

{{< aside type="alert" title="OC Unleashed compatibility" >}}
I'll reiterate: If you're using OpenComposite Unleashed, OCU needs to manage your controller bindings. Do _not_ enable any of the bindings in this section. You can use the OCU Configurator app to select from a variety of presets—including all of these—or cook up a control scheme of your own.
{{< /aside >}}

{{< nexus 31392 >}}VR FPS Stabilizer{{< /nexus >}} changes INI values to maintain your framerate. If you're using SteamVR, enable it.

---
## Performance Options
<div class="separator mo2-perf">
  <i class="fa fa-folder"></i> ▸▸ Step 3 - Select Performance Options
</div>
<div class="separator sub mo2-cs">
  <i class="fa fa-folder"></i> ▸▸▸ Community Shaders - Press END in Game to Customize
</div>
<div class="separator sub mo2-nvidia">
  <i class="fa fa-folder"></i> ▸▸▸▸ NVIDIA
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CS NVIDIA- Quality
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CS NVIDIA- Performance
</div>
<div class="separator sub mo2-amd">
  <i class="fa fa-folder"></i> ▸▸▸▸ AMD
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CS AMD - Quality
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CS AMD - Performance
</div>
<div class="separator sub mo2-grass">
  <i class="fa fa-folder"></i> ▸▸▸ Grass Density & LODs (Optional)
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> Grass Density - Quality
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> LOD Distance - Quality
</div>

**Step 3** includes a few performance-related presets.

The [**Community Shaders**](/performance/community-shaders/) presets are split by GPU brand. Open the folder that matches your video card—NVIDIA or AMD—then select either the _Quality_ or _Performance_ preset. (That's one preset total, not one per folder.) The _Quality_ presets have a fairly significant impact on your outdoor frame rate. Whether that's worth it is up to you. (And as the folder name says, you can press <kbd>END</kbd> in game to customize Community Shaders further.)

{{< aside type="btw" title="One upscaler only" >}}
Don't combine these presets with OCU's upscalers. Upscale in one place or the other, never both. The [Community Shaders](/performance/community-shaders/) page covers this in more detail.
{{< /aside >}}

**Grass Density** and **LOD Distance** have optional _Quality_ presets as well, and they also impact outdoor frame rate. (Leaving them unchecked will default to performance settings.)

{{< aside type="btw" title="LOD?" >}}
LOD stands for _Level of Detail_ and which set of pre-generated LODs you use determines how detailed distant geometry (terrain, trees, structures, etc.) will appear. Even the _performance_ presets look quite good, so if you're looking to save some frames, this is a good place to do it.
{{< /aside >}}

---
## Target Frame Rate (FPS)
<div class="separator mo2-fps">
  <i class="fa fa-folder"></i> ▸▸ Step 4 - Select Target FPS
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 144
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 120
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 90
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 80
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> 72
</div>

**Step 4** asks you to choose your headset's target frame rate (also called the refresh rate). For optimal performance, check the one entry that matches your headset's frame rate.

{{< aside type="btw" title="What about SpaceWarp?" >}}
If you're using frame generation via ASW or SSW, your _target frame rate_ is how many frames you end up with _after_ those tools work their magic. If the game is rendering 45 actual frames per second, but SpaceWarp is generating frames to bring it up to an apparent 90, then you should select 90.
{{< /aside >}}

For SteamVR-based headsets, you can check (or set) the target frame rate in the SteamVR desktop app. If you're using Virtual Desktop, you can set the frame rate in the **STREAMING** tab of the VD overlay.

{{< aside type="btw" title="Why?" >}}
Skyrim uses the Havok Physics engine, and there are a few <abbr title="a plain-text file format for storing settings, preferences, other parameters">INI</abbr> settings for controlling how it handles frame updates and physics calculations. Ideally these values are set to specific values based on your frame rate, and that's what these mod list entries do.
{{< /aside >}}

---
## Optional Mods

<div class="separator mo2-optional">
  <i class="fa fa-folder"></i> ▸▸ OPTIONAL Mods - Expand to Select
</div>

MGO includes a number of optional mods across several categories. They're all tested and known to work with the list, but most are disabled by default.

---
## AI and Speech

<div class="separator mo2-ai">
  <i class="fa fa-folder"></i> ▸▸▸ AI and Speech
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
  <input type="checkbox" class="readonly"> Dragonborn Voice Over 2
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> S.T.F.U — Skyrim Talk Filter Utility
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Say It - Dragonborn Voice Control - Vosk
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Say It - Dragonborn Voice Control - WhisperGPU
</div>

This section includes mods for incorporating AI NPCs into the game via SkyrimNet and its plugins, as well as other voice-related features.

### SkyrimNet

The {{< ext "https://goncalo22.github.io/SkyrimNet-GamePlugin/" >}} SkyrimNet Docs{{< /ext >}} are extensive, though not exhaustive. Check out [our SkyrimNet section](/skyrimnet) for a guide focused on how to set it up for MGO.

### Say It

{{< nexus 172027 >}}Say It - Dragonborn Voice Control{{< /nexus >}} adds voice recognition to the game. (This is independent of SkyrimNet and other AI mods.) You can control vanilla conversations with your voice—start conversations, speak your dialogue from among the avilable choices, and end conversations. You can perform shouts and powers, equip spells, use potions. You can even trigger console commands. It comes in two variants named for their speech-recognition engines, and you should enable _one_, not both. **Vosk** is lightweight, nearly instant, and the author's recommended choice. **WhisperGPU** is heavier but can be more accurate with fewer false positives, and it requires an NVIDIA card.[^1] Check out the Nexus page for all the details.

### Dragonborn Voice Over

{{< nexus 84329 >}}Dragonborn Voice Over{{< /nexus >}} gives your character an in-game voice, speaking your chosen dialogue aloud. Even without SkyrimNet, this works with vanilla dialogue.

---
## Convenience

<div class="separator mo2-convenience">
  <i class="fa fa-folder"></i> ▸▸▸ Convenience
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> PrismaUI Additem
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> VR Menu Mouse Fix
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Insects Begone REDUX
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Better Sleep Wait Menu
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Unread Books Glow Redone
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Infinite Stamina Out of Combat
</div>

The mods in the _Convenience_ section are mostly  self-explanatory, but I want to call attention to a few of them.

{{< nexus 179949 >}}Prisma UI AddItemMenu{{< /nexus >}} is a lightweight, fast, and feature-packed mod for adding any item from the game (or from mods!) to your inventory. It's categorized and searchable, and it lets you consume items directly from the menu. This mod, courtesy of Wondernutts, saved the day when an older AddItem mod was sent to Oblivion, keeping many modlists (including some previous versions of MGO) from being downloadable. This new one also happens to be much, much better.

{{< nexus 33414 >}}VR Menu Mouse Fix{{< /nexus >}}, by Shizof, is a personal favorite. Thumbsticks are great and all, but I find some menus far more convenient to navigate by using motion controls to emulate a mouse. This mod lets you do that.

{{< nexus 105045 >}}Insects Begone REDUX{{< /nexus >}} is the mod you're looking for if you have arachnophobia, or just don't care to see arachnids and other creepy-crawly things in VR. Enable this mod, and they'll be replaced.

---
## Difficulty

<div class="separator mo2-difficulty">
  <i class="fa fa-folder"></i> ▸▸▸ Difficulty
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Arena - An Encounter Zone Overhaul
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Disable for Punishing Dragon Combat
</div>

As your Skyrim character progresses, you're likely to become an unstoppable killing machine. With all of the spells, perks, and content added by mods, this can happen even faster.

In short, the game is too easy. {{< nexus 33487 >}}Arena{{< /nexus >}} balances things out a bit by adjusting the enemies that appear in each location.

**Disable for Punishing Dragon Combat** is the "Fire and Blood Story Mode add on", and it comes enabled, which takes some of the edge off the {{< nexus 156018 >}}Fire and Blood{{< /nexus >}} dragon encounters. If you'd rather have the a harrowing dragon slaying experience, turn this off.

---
## Immersion

<div class="separator mo2-immersion">
  <i class="fa fa-folder"></i> ▸▸▸ Immersion
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Durability VR
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> DovaVR Locomotion
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Spellsiphon - Immersive Combat
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Fake Edge VR - Pseudo Equipped weapon Collisions
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> NavigateVR - Dynamic Compass and Equipable Map
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Minimal Enemy Healthbar VR - Remove Enemy Health Bar
</div>

Immersion is a high priority for MGO. The list includes a number of mods to help you feel like you're really in Tamriel, many of which are enabled by default. This section includes a few more optional mods that can enhance your playthrough, depending on your taste. I'll tell you about a couple of my favorites.

{{< nexus 154803 >}}DovaVR Locomotion{{< /nexus >}} allows you to walk by swinging your arms. Check out [our full write-up](/mod-highlights/dovavr) or the mod's Nexus page to read more.

{{< nexus 170889 >}}Fake Edge VR{{< /nexus >}} is one of the roughly 1 million VR-specific mods by Machina, and it gives your weapons real collisions. They bump against walls, tables, your shield, and your other weapons instead of clipping through them. That's because, strictly speaking, it's not always _equipped_; you're just holding it. When you hold {{< control name="trigger" >}}, the weapon is equipped for combat, with all its usual damage and enchantments. Release {{< control name="trigger" >}}, and the weapon becomes a physical object that bumps into the world. To try it, just enable it here, and run Sync Plugins[^2] from the menu bar ({{< btn-inline >}}Tools{{< /btn-inline >}} → {{< btn-inline >}}Tool Plugins{{< /btn-inline >}} → {{< btn-inline >}}Sync Plugins{{< /btn-inline >}}). For the full rundown (dual-wielding, locking a weapon's equipped status, etc.), see the full [Fake Edge VR](/mod-highlights/fake-edge) write-up.

[^1]: Even if you choose WhisperGPU, shouts are still recognized by Vosk under the hood. Thu'um are not meant to be whispered!

[^2]: More details on syncing plugins are coming soon.