+++
title = 'Onboarding (MO2)'
weight = 30
aliases = ['/start/onboarding-rc3/']
+++

Now that you have Mad God's Overhaul downloaded and installed, you can manage the installed list and launch the game via **Mod Organizer 2 (MO2)**.

If you've created a shortcut, use that to launch MO2. If not, find {{< file >}}ModOrganizer.exe{{< /file>}} in your MGO installation folder, and launch it from there.

MO2 takes a little while to start. Even the splash screen may not appear right away. Resist the temptation to launch it again. Just wait.

{{< aside type="btw" title="Full load order" >}}
This documents the onboarding steps for MGO 4.0 **RC4**, the current release. Check out the [full load order for RC4](/load-order/mgo-4-rc4/) on this very site if you want the whole scoop.
{{< /aside >}}

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

* <span class="highlight mo2-docs">PLEASE FOLLOW PROVIDED DOCUMENTATION FOR SETUP</span> - Good news: that's the site you're reading right now. You're already following instructions beautifully.
* <span class="highlight mo2-beta">DO NOT ADD YOUR OWN MODS TO THE BETA</span> - MGO 4.0 is still in beta—a testing period. At this stage, the team is looking for feedback on the mod list as they've developed it. To be part of that process, please resist the temptation to throw in additional mods.
* <span class="highlight mo2-unlock">DO NOT Click [ Unlock ] After Launching Game</span> - When you run the game, MO2's interface will lock to keep you from accidentally messing with it while the game is running. The dialog box that opens will include an {{< btn-inline >}}Unlock{{< /btn-inline >}} button. This entry in the list is to remind you _not_ to click that button.
* <span class="highlight mo2-loot">DO NOT Use LOOT to Sort Plugins</span> - LOOT is a tool that automatically sorts plugins (the files listed on the right side of MO2) to be loaded in an order that's better optimized than if you just added them without much thought. **The plugins in Mad God's Overhaul have already been sorted.** You shouldn't mess with that order.

---
## Preferred Runtime
<div class="separator mo2-runtime">
  <i class="fa fa-folder"></i> ▸▸ Step 2 - Select ONE Preferred Runtime
</div>

_VR runtime_ refers to the software layer that sits between a VR application or game (Skyrim VR in this case) and your VR headset. **Step 2** asks you to choose between OpenComposite and SteamVR. As the folder name insists, pick _ONE_: everything runtime-specific lives in the two subfolders here.

### OpenComposite (Unleashed)

<div class="separator sub mo2-ocu">
  <i class="fa fa-folder"></i> ▸▸▸ Open Composite
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> OCU - Enable, Right Click, Open In Explorer, Run Configurator
</div>

OpenComposite is the right choice for most players. MGO includes [OpenComposite Unleashed](/performance/open-composite/), which works fine with SteamVR-native headsets and includes a number of features beyond just translating VR-related API calls. It's great!

You should probably go with OpenComposite unless you know that you have a _really good reason_ to choose SteamVR—like a treadmill, trackers, or some other accessory that strictly requires using the SteamVR runtime.

To choose it, enable the single mod (with the really long label) in the **Open Composite** folder. That's OpenComposite Unleashed itself, and its label doubles as instructions: the included configurator app lives in the mod's folder (right-click the mod and select {{< btn-inline >}}Open In Explorer{{< /btn-inline >}} to find it). The configurator has options for OCU's built-in keyboard, changing your key bindings, upscaling, and more. Seriously, [read up on it](/performance/open-composite/) if you haven't yet.

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

The **Controller Bindings** folder provides three alternate control schemes. Skyrim VR's default controls were designed for the Vive Wands, and they weren't designed with today's mods in mind. (In all fairness, they didn't exist yet.) Choose only _one_ of these. If they're all disabled (and you're not using OC Unleashed), Skyrim VR's default controls will apply.

{{< aside type="alert" title="OC Unleashed compatibility" >}}
If you're using OpenComposite Unleashed, OCU needs to manage your controller bindings. Do _not_ enable any of the bindings in this section. You can use the OCU Configurator app to select from a variety of presets—including all of these—or cook up a control scheme of your own.
{{< /aside >}}

{{< aside type="alert" title="Switching from OpenComposite back to SteamVR" >}}
Unchecking the OpenComposite mod isn't enough on its own. The files OCU generates while it runs can conflict with SteamVR, so you also need to clear them out:

1. Delete the {{< file folder-open >}}shadercache{{< /file >}} folder from your Skyrim VR installation folder.
2. Clear MO2's [Overwrite](/reference/overwrite): right-click {{< file folder-open >}}Overwrite{{< /file >}} and choose {{< btn-inline >}}Clear Overwrite...{{< /btn-inline >}}.

Skip these and Skyrim VR may crash or render incorrectly on SteamVR until the old caches are gone.
{{< /aside >}}

---
## Performance Options
<div class="separator mo2-perf">
  <i class="fa fa-folder"></i> ▸▸ Step 3 - Select Performance Options
</div>
<div class="separator sub mo2-cs">
  <i class="fa fa-folder"></i> ▸▸▸ Community Shaders - Press END in Game to Customize
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CSX3.19-VR-Unified-Quality
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CSX3.19-VR-Unified-Balanced
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> CSX3.19-VR-Unified-Performance
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

The [**Community Shaders**](/performance/community-shaders/) presets come as one unified set now, so there's no need to pick a folder for your GPU brand first. Just enable the (one) preset of your choice: _Quality_, _Balanced_, or _Performance_. The labels are self-explanatory, but when has that ever stopped me? _Quality_ includes all the fanciest visuals, but has a fairly significant impact on your frame rate. _Performance_ is more forgiving, and it still looks _good_. _Balanced_, as you might expect, sits between the two. (And as the folder label says, you can press <kbd>END</kbd> on your keyboard to customize Community Shaders further, though certain adjustments will prompt shaders to re-compile.)

Don't combine these presets with OCU's upscalers. Upscale in one place or the other, never both. (The [Community Shaders](/performance/community-shaders/) page covers this in more detail.)

 **Grass Density** and **LOD Distance** each offer an optional _Quality_ preset here. Left unchecked (the default), you get the lighter performance versions. Check one to trade frames for denser grass or better-looking distant objects. Both impact FPS when outdoors, so be aware of the trade-off.

 {{< aside type="btw" title="LOD?" >}}
 LOD stands for _Level of Detail_ and which set of pre-generated LODs you use determines how detailed distant geometry (terrain, trees, structures, etc.) will appear. Even the _performance_ presets look quite good, so if you're looking to save some frames, this is a good place to do it.
 {{< /aside >}}

{{< aside type="btw" title="Where did the Target FPS step go?" >}}
If you've set up an earlier version of MGO, you may remember a step for selecting your headset's frame rate so Skyrim's physics could be tuned to match. HIGGS handles that automatically, so that step was redundant. One less thing to configure!
{{< /aside >}}

---
## Optional Mods

<div class="separator mo2-optional">
  <i class="fa fa-folder"></i> ▸▸ OPTIONAL Mods - Sync Plugins After Enabling
</div>

MGO includes a number of optional mods across several categories. They're all tested and known to work with the list, but most are disabled by default.

{{< aside type="alert" title="Sync Plugins after enabling" >}}
Whenever you enable (or disable) an optional mod that has a plugin, run {{< btn-inline >}}Tools{{< /btn-inline >}} → {{< btn-inline >}}Tool Plugins{{< /btn-inline >}} → {{< btn-inline >}}Sync Plugins{{< /btn-inline >}} in MO2 so the plugins pane on the right matches the load order on the left.
{{< /aside >}}

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
  <input type="checkbox" class="readonly"> Skyrim VR Refocused
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Dragonborn Voice Over
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

This section includes mods for incorporating AI NPCs into the game via SkyrimNet and its plugins, as well as voice features in both directions: Say It listens to you, and {{< nexus 84329 >}}Dragonborn Voice Over{{< /nexus >}} gives your famously silent character a speaking voice.

### SkyrimNet

{{< github "MinLL/SkyrimNet-GamePlugin" >}}SkyrimNet{{< /github >}} and its plugins offer LLM-powered NPCs and can even invent game scenarios. There's enough to it that it gets [its own section](/skyrimnet) on this site.

{{< aside type="btw" title="Focus!" >}}
SkyrimNet hotkeys won't work properly if the game doesn't have keyboard focus, so be sure to enable Skyrim VR Refocused as well.
{{< /aside >}}

### Say It

{{< nexus 172027 >}}Say It - Dragonborn Voice Control{{< /nexus >}} adds voice recognition to the game, independent of SkyrimNet and other AI mods. You can control vanilla conversations with your voice—start conversations, speak your dialogue from among the avilable choices, and end conversations. You can perform shouts and powers, equip spells, use potions. You can even trigger console commands. It comes in two variants named for their speech-recognition engines, and you should enable _one_, not both. **Vosk** is lightweight, nearly instant, and the author's recommended choice. **WhisperGPU** is heavier but can be more accurate with fewer false positives, and it requires an NVIDIA card.[^1] Check out the Nexus page for all the details.

---
## Combat & Magic

<div class="separator mo2-combat">
  <i class="fa fa-folder"></i> ▸▸▸ Combat &amp; Magic
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> VRIK Closed Fist
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Strange Runes
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Alternative Runes - Strange Runes Texture
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Spellsiphon - Immersive Combat
</div>

This folder contains optional mods that change combat and spellcasting.

VRIK leaves your hands open (or tracks your fingers on supported controllers), regardless of whether your fists are _drawn_ and you're ready to brawl. Enable {{< nexus 182410 >}}VRIK Closed Fist{{< /nexus >}}, and your hands become proper fists when they're "unsheathed" (so to speak). Without it, you pretty much have to check whether your followers have their weapons drawn to know whether you're ready to punch your foes, or just ready to slap them.

{{< nexus 19456 >}}Strange Runes{{< /nexus >}} gives spellcasting some pizazz, with glowing runic circles (55+ varieties, in fact) appearing when you or NPCs cast. Naturally, that's configurable in the MCM.

If you want to give the runes a different look, {{< nexus 137611 >}}Alternative Runes{{< /nexus >}} is a texture replacer for it. It's an add-on, so only enable it alongside the original Strange Runes.

{{< nexus 26627 >}}Spellsiphon - Immersive Combat{{< /nexus >}} is a whole dang system, not just a tweak, built around combos and the like. It's meant to be learned in-game, and you can safely disable it mid-game, so why not give it a shot?

---
## Convenience

<div class="separator mo2-convenience">
  <i class="fa fa-folder"></i> ▸▸▸ Convenience
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
  <input type="checkbox" class="readonly"> Prisma UI Additem Menu
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> My Minimalistic AutoSave Mod
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> Unread Books Glow SSE with MCM
</div>

The mods in the _Convenience_ section are mostly  self-explanatory, but I want to call attention to a couple of them.

{{< nexus 179949 >}}Prisma UI AddItemMenu{{< /nexus >}} is a lightweight, fast, and feature-packed mod for adding any item from the game (or from mods!) to your inventory. It's categorized and searchable, and it lets you consume items directly from the menu. This mod, courtesy of Wondernutts, saved the day when an older AddItem mod was sent to Oblivion, keeping many modlists (including some previous versions of MGO) from being downloadable. This one also happens to be much, much better.

{{< nexus 105045 >}}Insects Begone REDUX{{< /nexus >}} is the mod you're looking for if you have arachnophobia, or just don't care to see arachnids and other creepy-crawly things in VR. Enable this mod, and they'll be replaced.

MGO has historically advised against using Skyrim's AutoSave feature. {{< nexus 37133 >}}My Minimalistic AutoSave Mod{{< /nexus >}} is meant to be relatively unobtrusive, and because it's configured to use _full saves_, it ought to actually work. (Full saves do cause a bit more of a stutter than the unsafe quicksaves, so keep that in mind.)

---
## Difficulty

<div class="separator mo2-difficulty">
  <i class="fa fa-folder"></i> ▸▸▸ Difficulty
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Arena - An Encounter Zone Overhaul
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Blade and Blunt - Adjusted Difficulty Scaling
</div>

As your Skyrim character progresses, you're likely to become an unstoppable killing machine. With all of the spells, perks, and content added by mods, this can happen even faster. In short, the game is too easy.

 {{< nexus 33487 >}}Arena{{< /nexus >}} balances things out a bit by adjusting the enemies that appear in each location.

MGO's combat runs on {{< nexus 34549 >}}Blade and Blunt{{< /nexus >}}, a combat overhaul built to make Skyrim harder and to encourage active resource management. The optional {{< nexus 117827 >}}Adjusted Difficulty Scaling{{< /nexus >}} entry in this section is a companion to it. Enable it if you want to add even more to that challenge.

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
  <input type="checkbox" class="readonly"> Swap Drop and Hold Redux - VR
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Minimal Enemy Healthbar VR - Remove Enemy Health Bar
</div>

Immersion is a high priority for MGO. The list includes a number of mods to help you feel like you're really in Tamriel, many of which are enabled by default. This section includes a few more optional mods that can enhance your playthrough, depending on your taste. Here are a couple worth calling out.

{{< nexus 154803 >}}DovaVR Locomotion{{< /nexus >}} allows you to walk by swinging your arms. Check out the [Movement](/how-to-play/movement) page or the mod's Nexus page to read more.

If you're looking for {{< nexus 47174 >}}NavigateVR{{< /nexus >}} here, it's moved up in the world. As of RC4, its equipable maps are part of the core list (built on Liv's new {{< nexus 189442 >}}NavigateVR Map Framework{{< /nexus >}}, with a whole bunch of map packs), so there's no longer a checkbox to remember.

{{< nexus 186335 >}}Physical Collision VR{{< /nexus >}}, MGO's weapon-collision mod since RC3 (when it first replaced Fake Edge VR), is also part of the core list rather than one of the optional toggles. Your weapons collide with the world around you (walls, tables, your shield) instead of clipping through, and they still attack as usual. Check its Nexus page for the details of how it works.

[^1]: Even if you choose WhisperGPU, shouts are still recognized by Vosk under the hood. The Thu'um answers to only one engine.
