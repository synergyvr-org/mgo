+++
title = 'Installing a Mod'
weight = 10
+++

MGO arrives with hundreds of mods already installed and configured, so you never _have_ to add anything yourself. But part of the fun of a mod list is making it your own, and sooner or later you'll spot something on Nexus that you feel you can't live without. Adding a mod through Mod Organizer 2 is straightforward once you've done it once, but there are risks to be aware of. We'll walk through it using a real example.

{{< aside type="alert" title="Living on the edge" >}}
If it's not included in MGO, it's untested against the list (or possibly even confirmed _not_ to work). Some simple mods drop right in, but mods that touch certain types of records are likely to conflict with something. Add mods one at a time, and make a habit of making a manual, indoor save before each addition. When in doubt, ask the {{< discord "WjSUaSPaQZ" >}}MGO Discord community{{< /discord >}}.
{{< /aside >}}

## Everyone's favorite Bosmer[^1]

{{< nexus 11278 >}}Song of the Green (Auri Follower){{< /nexus >}}, created and voiced by Waribiki, is one of the most beloved follower mods for Skyrim, and a personal favorite of mine. It adds Auri, a fully voiced Bosmer archer with over a thousand lines of dialogue, an approval system, banter with other custom followers, a mini-quest, her own mount, and an optional romance. You'll find her waiting in Falkreath Hold, northwest of town. Look for _Auri's Pod_ on your map.

A follower like this takes a bit more thought to place than an SKSE plugin or a simple asset replacement would. It adds an NPC and touches records that other mods depend on, so it belongs with the other custom followers (Inigo, Lucien, Sofia, etc.), at the end of that group. More on _why_ that spot in a bit.

## Download it

{{< caption name="auri-nexus" type="webp">}}
Download the mod, and remember to come back and endorse it later!
{{< /caption >}}

1. Open the mod's {{< nexus 11278 >}}Nexus page{{< /nexus >}}.
2. Click {{< btn-inline download >}}Mod manager download{{< /btn-inline >}} or {{< btn-inline download >}}Manual{{< /btn-inline >}} (see below).
3. After any wait timer, your browser hands the file off to MO2, and it shows up in MO2's {{< btn-inline >}}Downloads{{< /btn-inline >}} tab on the right, next to _Plugins_.

{{< aside type="btw" title="Managed or manual?" >}}
{{< btn-inline download >}}Mod manager download{{< /btn-inline >}} only works if MGO's MO2 installation is registered to handle Nexus (`nxm://`) links. If clicking it does nothing, and you'd like it to, open MO2's settings, find the {{< btn-inline >}}Nexus{{< /btn-inline >}} section, and and click the button to associate with "Download with Manager" links.

You can also use {{< btn-inline >}}Manual{{< /btn-inline >}} download on Nexus, then in MO2 click the {{< btn-inline "box-archive" >}}Install a new mod from an archive{{< /btn-inline >}} toolbar button, and pick the file you downloaded. Personally, I always install mods manually because I have a bunch of MO2 installations, and I can't keep track of which (if any) are associated with Nexus links at any given time.
{{< /aside >}}

## Install it in MO2

1. In the {{< btn-inline >}}Downloads{{< /btn-inline >}} tab, double-click the file you just downloaded. MO2 unpacks it and opens the install dialog.
2. Give it a clear name and click {{< btn-inline >}}OK{{< /btn-inline >}}. The default name is usually fine, but you may want to add a little something in front (see below).
3. If a mod ships with installer options, you'll get a **FOMOD** wizard here instead. These are step-by-step screens where you choose installation options. Read each step, make your choices, and finish.

Your new mod now appears in the left pane, disabled, at the very bottom of the list.

{{< aside type="btw" title="Protect it from Oblivion" >}}
MGO is installed with Wabbajack, and reinstalling or updating a Wabbajack list removes anything that isn't part of it from the installation folder—including mods you've added yourself. To protect one, prepend `[NoDelete]` and a space to its name in the left pane, so `[NoDelete] Song of the Green (Auri Follower)` in this case. Wabbajack leaves any mod tagged that way alone when it reinstalls. You can add the tag when you name the mod during installation, or rename the mod later (right-click it in the left pane and choose {{< btn-inline >}}Rename{{< /btn-inline >}}).
{{< /aside >}}

## Enable it and set its load order

Newly installed mods appear at the bottom of the left pane. We want it grouped with the other custom followers instead. Where a mod sits in the left pane sets its priority (mods lower down win conflicts with mods above them), so keeping it grouped with related mods keeps the list manageable and less likely to make trouble.

1. Make sure the mod's checkbox is **checked**.
2. Find the {{< btn-inline "folder" >}}Followers{{< /btn-inline >}} section. The filter box at the bottom of the left pane makes it easy to locate. (Try searching for "Sofia".)
3. Drag your new mod so it sits beneath the other custom followers, just below Sofia's entries and above _AI Overhaul SSE_.

{{< caption name="auri-load-order" type="webp">}}
Add the _Song of the Green_ mod just below the custom followers that are already in the list.
{{< /caption >}}

## Why not just add it to the end?

It's commonly recommended to leave added mods at the bottom of the list. For _some_ mods it may prove to be harmless, but it's not ideal. Sooner or later, that habit is likely to get you into trouble.

MO2 keeps two separate orders, and both treat the bottom as a position of power.

* The **left pane** decides which mod's _loose files_ (meshes, textures, scripts) win when two mods include the same one. The lower mod wins.
* The **right pane** decides the order in which _plugins_ (`.esp`/`.esl`) load, which settles whose edits to the game's records (NPCs, cells, etc.) win. Again, later in the list wins.

A carefully curated list like MGO keeps its bug fixes, patches, compatibility files, and outputs near the bottom so they win every conflict. Drop a new mod at the very end and it can override those.

So the better guidance is to **put a mod next to similar mods**. Those are the mods it's most likely to conflict with, and that portion of the list has already been sorted with intent. It also keeps the list something you can still make sense of six months from now.

Auri is a follower mod that adds an NPC and edits NPC-adjacent records, and MGO deliberately orders its NPC and AI mods (like AI Overhaul SSE and its patches) so the right ones win. Drop her at the very bottom and she'd override some of that. Put her next to Inigo, Lucien, and Sofia, and she lands where she ought to.

When a mod's ideal home is less clear-cut, a few rules of thumb:

* **Group by function.** A texture replacer goes among other texture mods, a combat tweak among the combat mods, and so on.
* **A replacer goes below what it replaces** (so it wins), but still _above_ any fix or patch that's meant to override it (so the patch wins).
* **Let MO2 show you any conflicts.** The {{< btn-inline >}}Conflicts{{< /btn-inline >}} column flags mods that overwrite (or are overwritten by) others, and right-clicking a mod and choosing {{< btn-inline >}}Information{{< /btn-inline >}} → {{< btn-inline >}}Conflicts{{< /btn-inline >}} lists exactly which files clash and which one currently wins. Move the affected mods up or down until the winners are the ones you want.
* **Self-contained mods don't care.** Plenty of VR mods are just an SKSE plugin (or a mod that only _adds_ content) with nothing to fight over. For those, position doesn't technically matter, but your list will be easier to maintain if you still order them logically.

The right pane works much the same, but MGO and the other Synergy lists have a rule for that. Let's talk about it.

## Sync the plugins to match

Once your mod is settled on the left, its plugin, if any, should sit in the matching spot on the right. If a mod adds a **plugin** (an `.esp` or `.esl`), first make sure it's checked in the right pane. Then, instead of dragging plugins around by hand, let {{< nexus 47325 >}}Sync Plugins{{< /nexus >}} do it. It's an MO2 tool that reads your left-pane mod order and reorders the plugins to match. Run it from the menu bar at {{< btn-inline >}}Tools{{< /btn-inline >}} → {{< btn-inline >}}Tool Plugins{{< /btn-inline >}} → {{< btn-inline >}}Sync Plugins{{< /btn-inline >}}, and your plugins snap into the same order as the mods that provide them.

{{< aside type="alert" title="Sync, don't LOOT" >}}
Sync Plugins is the one automatic tool we'll endorse for load order. Sync Plugins only mirrors the order _you_ set on the left; it never invents an order of its own. LOOT, on the other hand, would impose its own sorting and toss out the deliberate order MGO is built around. Sort by hand on the left, sync to the right, and give LOOT the boot.
{{< /aside >}}

## Play it

A follower doesn't need much in the way of configuration. Just go and recruit her. Head to Falkreath Hold, find _Auri's Pod_ (it's on the map), and introduce yourself. A few things worth knowing:

* She's an archer, so keep her stocked with arrows, or she'll resort to punching dragons (her words). She can buy bone arrows (her favorites) at the Drunken Huntsman, or you can craft them, but she'll use any arrows you give her.
* To give her other gear that she'll actually use, go through dialogue: "Let's talk about traveling together" → "Let me check your gear." (Moving items to her normal inventory just stores them.)
* Her quest, approval, and the optional romance all unfold through conversation as you play. The {{< nexus 11278 >}}Nexus page{{< /nexus >}} has the full rundown.

That's the process: download, install, place, sync, and play. Every mod you add follows that same general process, even if some of the specifics differ.

[^1]: Sorry, Faendal.
