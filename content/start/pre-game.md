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

**STEP 1** doesn't include any actual mods, but rather reminds you of some of MGO's [requirements](/start/requirements) along with some important notes for using MO2 and running the game.

* <span class="highlight mo2-beta">DO NOT ADD YOUR OWN MODS TO THE BETA</span> - MGO 4.0 is still in beta—a testing period. At this stage, the team is looking for feedback on the mod list as they've developed it. To be part of that process, please resist the temptation to throw in additional mods.
* <span class="highlight mo2-unlock">DO NOT Click Unlock After Launching Game</span> - When you run the game, MO2's interface will lock to keep you from accidentally messing with it while the game is running. The dialog box that opens will include an {{< btn-inline >}}Unlock{{< /btn-inline >}} button. This entry in the list is to remind you _not_ to click that button.
* <span class="highlight mo2-loot">DO NOT Use LOOT to Sort Plugins</span> - LOOT is a tool that automatically sorts plugins (the files listed on the right side of MO2) to be loaded in an order that's better optimized than if you just added them without much thought. **The plugins in Mad God's Overhaul have already been sorted.** You shouldn't mess with that order.

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

### OpenComposite (Unleashed)

MGO enables OpenComposite by default. In particular, MGO includes [OpenComposite Unleashed](appendices/open-composite/), which works fine with SteamVR-native headsets and includes a number of features beyond just translating VR-related API calls. It's great!

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

The single mod (with the really long label) in this folder enables OpenComposite Unleashed. There are options for its built-in keyboard, changing your key bindings, upscaling and more, accessible in the included configurator app. As the mod label points out, you can find this app in the mod folder. Seriously, [read up on it](appendices/open-composite/) if you haven't yet.

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
  <input type="checkbox" class="readonly"> Say It - Dragonborn Voice Control
</div>

This section includes mods for incorporating AI NPCs into the game via SkyrimNet and its plugins, as well as general voice control.

### SkyrimNet

The {{< ext "https://goncalo22.github.io/SkyrimNet-GamePlugin/" >}} SkyrimNet Docs{{< /ext >}} are extensive, though not exhaustive.

### Say It

{{< nexus 172027 >}}Say It - Dragonborn Voice Control{{< /nexus >}} adds voice recognition to the game. (This is independent of SkyrimNet and other AI mods.) You can control vanilla conversations with your voice—start conversations, speak your dialogue from among the avilable choices, and end conversations. You can perform shouts and powers, equip spells, use potions. You can even trigger console commands. Just enable the mod, and it's all set up. Check out the Nexus page for all the details.

---
## Convenience

<div class="separator mo2-convenience">
  <i class="fa fa-folder"></i> ▸▸▸ Convenience
</div>
<div class="mod">
  <input type="checkbox" class="readonly"> PrismaUI AddItem
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

The mods in the _Convenience_ section are mostly  self-explanatory, but I want to call attention to a couple of them.

{{< nexus 179949 >}}Prisma UI AddItemMenu{{< /nexus >}} is a lightweight, fast, and feature-packed mod for adding any item from the game (or from mods!) to your inventory. It's categorized and searchable, and it lets you consume items directly from the menu. This mod, courtesy of Wondernutts, saved the day when an older AddItem mod was sent to Oblivion, keeping many modlists (including some previous versions of MGO) from being downloadable. This one also happens to be much, much better.

{{< nexus 105045 >}}Insects Begone REDUX{{< /nexus >}} is the mod you're looking for if you have arachnophobia, or just don't care to see arachnids and other creepy-crawly things in VR. Enable this mod, and they'll be replaced.

---
## Difficulty

<div class="separator mo2-difficulty">
  <i class="fa fa-folder"></i> ▸▸▸ Difficulty
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Arena - An Encounter Zone Overhaul
</div>

As your Skyrim character progresses, you're likely to become an unstoppable killing machine. With all of the spells, perks, and content added by mods, this can happen even faster.

In short, the game is too easy. {{< nexus 33487 >}}Arena{{< /nexus >}} balances things out a bit by adjusting the enemies that appear in each location.

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

{{< nexus 154803 >}}DovaVR Locomotion{{< /nexus >}} allows you to walk by swinging your arms. Check out the [Movement](/how-to-play/movement) page or the mod's Nexus page to read more.

{{< nexus 170889 >}}Fake Edge VR{{< /nexus >}} is one of the roughly 1 million VR-specific mods by Machina, and it gives your weapons real collisions. They bump against walls, tables, your shield, and your other weapons instead of clipping through them. That's because, strictly speaking, it's not always _equipped_; you're just holding it. When you hold {{< control name="trigger" >}}, the weapon is equipped for combat, with all its usual damage and enchantments. Release {{< control name="trigger" >}}, and the weapon becomes a physical object that bumps into the world. It relies on {{< nexus 55962 >}}Stop Trigger Unsheathing For VR{{< /nexus >}} from the Convenience section, so be sure to enable that one too. For the full rundown (dual-wielding, locking a weapon's equipped status, etc.), see the full [Fake Edge VR](/appendices/fake-edge) write-up.

---

<div class="next">
  <a href="/mgo/first-launch">First Launch <i class="fa fa-circle-right"></i></a>
</div>
