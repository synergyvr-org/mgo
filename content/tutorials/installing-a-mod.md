+++
title = 'Installing a Mod'
weight = 10
+++

MGO arrives with hundreds of mods already installed and configured, so you never _have_ to add anything yourself. But part of the fun of a mod list is making it your own, and sooner or later you'll spot something on Nexus that you feel you can't live without. Adding a mod through Mod Organizer 2 is straightforward once you've done it once, but there are risks to be aware of. We'll walk through it using a real example.

{{< aside type="alert" title="Living on the edge" >}}
If it's not included in MGO, it's untested against the list (or possibly even confirmed _not_ to work). Some simple mods drop right in, but mods that touch certain types of records are likely to conflict with something. Add mods one at a time, and make a habit of making a manual, indoor save before each addition. When in doubt, ask the MGO Discord community.
{{< /aside >}}

## Our guinea pig

Machina's {{< nexus 184001 >}}Shields and 2H Weapons Unlocked - VR{{< /nexus >}} removes Skyrim's equipment-hand restrictions. It lets you hold a shield in your main hand, wield a two-handed weapon in either hand (or both hands!), etc. That also means you can arm yourself with previously forbidden combinations: a shield and a greatsword, two shields at the same time[^1], a spell and a battleaxe, etc. It also might be nice for left-handed players who'd rather stay in right-handed mode.

Given its similarity to [Fake Edge VR](/mod-highlights/fake-edge) and some of the other optional Immersion mods, we'll put it there.

## Download it

1. Open the mod's {{< nexus 184001 >}}Nexus page{{< /nexus >}} and go to the {{< btn-inline >}}Files{{< /btn-inline >}} tab.
2. On the main file, click {{< btn-inline download >}}Mod manager download{{< /btn-inline >}} (not _Manual_).
3. After any wait timer, your browser hands the file off to MO2, and it shows up in MO2's {{< btn-inline >}}Downloads{{< /btn-inline >}} tab (over on the right, next to _Plugins_).

{{< aside type="btw" title="If nothing happens" >}}
{{< btn-inline download >}}Mod manager download{{< /btn-inline >}} only works if MO2 is registered to handle Nexus (`nxm://`) links. If clicking it does nothing, open MO2's settings, find the {{< btn-inline >}}Nexus{{< /btn-inline >}} section, and click the button to associate with "Download with Manager" links. (Alternatively, use {{< btn-inline >}}Manual{{< /btn-inline >}} download, then in MO2 click the {{< btn-inline "box-archive" >}}Install a new mod from an archive{{< /btn-inline >}} toolbar button and pick the file you downloaded.)
{{< /aside >}}

## Install it in MO2

1. In the {{< btn-inline >}}Downloads{{< /btn-inline >}} tab, double-click the file you just downloaded. MO2 unpacks it and opens the install dialog.
2. Give it a clear name (the default is usually fine) and click {{< btn-inline >}}OK{{< /btn-inline >}}.
3. If a mod ships with installer options, you'll get a **FOMOD** wizard here instead: a step-by-step screen where you pick which parts to install. Read each step, make your choices, and finish. (This particular mod is a simple install, so you won't see one.)

Your new mod now appears in the left pane, enabled, at the very bottom of the list.

## Enable it and set its load order

A freshly installed mod lands at the bottom of the left pane. We want it tucked into the optional **Immersion** section instead, at the end. Where a mod sits in the left pane sets its priority (mods lower down win conflicts with mods above them), so keeping it grouped with related mods keeps the list tidy and predictable.

1. Make sure the mod's checkbox is **checked** (it should be, right after install).
2. Find the {{< btn-inline "folder" >}}OPTIONAL Mods{{< /btn-inline >}} folder and expand its {{< btn-inline "folder" >}}Immersion{{< /btn-inline >}} subfolder (see [Optional Mods](/start/onboarding) for a tour of what's in there).
3. Drag your new mod so it sits at the **end** of that Immersion group, just below _Minimal Enemy Healthbar VR_:

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
  <input type="checkbox" class="readonly"> Minimal Enemy Healthbar VR - Remove Enemy Health Bar
</div>
<div class="mod">
  <input type="checkbox" class="readonly" checked> Shields and 2H Weapons Unlocked - VR
</div>

## Why not just add it to the end?

You'll see this advice everywhere: to add a mod, just drop it at the bottom of the list. It's tempting, and for _some_ mods it's harmless. As a habit, though, it'll eventually bite you, because "the bottom" isn't the empty shelf it sounds like.

MO2 keeps two separate orders, and both treat the bottom as a position of _power_, not safety:

* The **left pane** decides which mod's _files_ (meshes, textures, scripts) win when two mods ship the same one. Lower down wins.
* The **right pane** decides the order _plugins_ (`.esp`/`.esl`) load, which settles whose edits to the game's records (NPCs, cells, leveled lists) win. Later wins.

A curated list like MGO deliberately keeps its bug fixes, patches, and compatibility files near the _bottom_ so they get the last word. Drop a new mod at the very end and it can quietly override the exact things that were put there to win. (It's also why the bottom of MGO's list isn't empty space; that's where output and patch entries live.)

So the better instinct is the one the experts push: **put a mod next to the mods it's most like.** Those are the mods it'll actually conflict with, and that stretch of the list has already been sorted with intent. It also keeps the list something you can still make sense of six months from now. That's exactly why we tucked our example into the Immersion section instead of the absolute bottom. The end of a _section_ is fine; the end of the whole _list_ is the trap.

When a mod's home isn't as obvious as this one's, a few rules of thumb:

* **Group by function.** A texture replacer goes among the other texture mods, a combat tweak among the combat mods, and so on.
* **A replacer goes below what it replaces** (so it wins), but still _above_ any fix or patch that's meant to stay on top.
* **Let MO2 show you the conflicts.** The {{< btn-inline >}}Conflicts{{< /btn-inline >}} column flags mods that overwrite (or are overwritten by) others, and right-clicking a mod and choosing {{< btn-inline >}}Information{{< /btn-inline >}} → {{< btn-inline >}}Conflicts{{< /btn-inline >}} lists exactly which files clash and who currently wins. Nudge the mod up or down until the winners are the ones you want.
* **Self-contained mods don't care.** Plenty of VR mods are just an SKSE plugin with nothing to conflict over (or a plugin that only _adds_ new content). For those, position really doesn't matter, and the end is fine.

The right pane follows the same spirit, with one MGO-specific rule&mdash;which is next.

## Sync the plugins to match

Once your mod is settled on the left, its plugin should sit in the matching spot on the right. If a mod adds a **plugin** (an `.esp` or `.esl`), first make sure it's checked in the right pane. Then, instead of dragging plugins around by hand, let {{< nexus 47325 >}}Sync Plugins{{< /nexus >}} do it: it's an MO2 tool that reads your left-pane mod order and reorders the plugins to match, all in one go. Run it from the menu bar at {{< btn-inline >}}Tools{{< /btn-inline >}} → {{< btn-inline >}}Tool Plugins{{< /btn-inline >}} → {{< btn-inline >}}Sync Plugins{{< /btn-inline >}}, and your plugins snap into the same order as the mods that provide them.

{{< aside type="alert" title="Sync, don't LOOT" >}}
This is the one automatic tool we'll point you at for load order, and that's rather the point. Sync Plugins only mirrors the order _you_ set on the left; it never invents an order of its own. LOOT, on the other hand, would impose its own sorting and toss out the deliberate order MGO is built around. Sort by hand on the left, sync to the right, and leave LOOT out of it.
{{< /aside >}}

## Set it up

Most mods need a little configuration to shine, and this one is no exception. Its Nexus page is the source of truth, but for our example:

* It leans on {{< nexus 47630 >}}Spell Wheel VR{{< /nexus >}} (already in MGO) to know which hand you meant. In the Spell Wheel MCM, enable **Show all melee weapons in the Off-Hand Orb** and **Show all shields in the Main-Hand Orb**. (See the [Spell Wheel VR](/mod-highlights/spell-wheel) page.)
* If you've also enabled {{< nexus 170889 >}}Fake Edge VR{{< /nexus >}}, this mod notices and hands two-handed weapons off to Fake Edge's own 2H module automatically, while still managing main-hand shields itself. No conflict, no fuss.
* Most of its behavior is tunable through its {{< file file-lines >}}.ini{{< /file >}} file (see [INI Files](/reference/editing-inis)).

That's the whole loop: download, install, place, configure. Every mod you add follows the same rhythm, even if the specifics of that last step differ.

[^1]: ![Diedrich Bader as "Lawrence" in _Office Space_](/images/office-space.webp)