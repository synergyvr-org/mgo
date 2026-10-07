+++
title = 'Removing a Mod'
weight = 30
hidden = true
+++

Adding a mod is easy, relatively speaking. Try to removing one, and Skyrim gets surprisingly clingy. Your save file doesn't just remember where you left your character standing; it remembers items, quests, and (worst of all) running scripts from every mod that was active when you saved. Pull a mod out from under a save, and what's left behind ranges from "nothing" to "a haunting."

How rough it gets depends entirely on what kind of mod it is, so start there.

{{< aside type="alert" title="This is about mods you added" >}}
Don't remove mods that shipped with MGO. The list's patches and load order depend on them, and yanking one can make a mess of things. The OPTIONAL Mods from [Onboarding](/start/onboarding) are meant to be toggled, of course, but the mid-save rules below still apply to the scripted ones. If you do want to be rid of them, disable them rather than completely removing them. When in doubt, ask the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}} before pulling anything not listed as optional.
{{< /aside >}}

## How risky is it?

* **Asset-only mods** (textures, meshes, sounds; no plugin) can be removed any time (but for textures and meshes, you'll need to re-run a patcher or two afterward; see [The Patchers](/tutorials/patchers)).
* **Pure SKSE mods** (a {{< file >}}.dll{{< /file >}}, no plugin) are nearly as safe. Their behavior simply goes away when the mod goes.
* **Mods with a plugin** ({{< file >}}.esp{{< /file >}} / {{< file >}}.esl{{< /file >}}) leave a mark. Your save holds references to the mod's records, so at the very least expect the mod's items to vanish from your inventory and a "missing content" warning when you load.
* **Scripted mods** (anything with an MCM, quests, or Papyrus scripts) are riskier. Scripts get baked into the save and keep trying to run after the mod is gone. Orphaned script data can terrorize your playthrough.

## The removal procedure

Before anything else, **check the mod's Nexus page for uninstall instructions.** Some scripted mods include a proper uninstall option in their MCM that winds everything down cleanly. If one is offered, accept that offer.

Otherwise...

1. **In the game:** run the mod's uninstall option if it has one, and unequip anything the mod added. Then make a manual save indoors, somewhere unrelated to the mod's content[^1], and quit.
2. **In MO2:** untick the mod in the left pane. _Disable, don't delete._ You want a way back if something goes wrong.
3. **Regenerate the patchers that touched it.** If the mod had a plugin, re-run {{< ext "https://mutagen-modding.github.io/Synthesis/" >}}Synthesis{{< /ext >}} _before_ you launch again: the merged patch (kept in **Output Synthesis**) counts the departed plugin among its masters, and a missing master will stop the game from loading at all. If the mod added meshes or textures, the asset patchers baked in references to files that are now gone, so give them another pass too. See [The Patchers](/tutorials/patchers) for which tool matches what you pulled, and the order to run them in.
4. **Launch and load your save.** The game may warn that it relies on content that is no longer present. Load anyway.
5. **Immediately save to a _new_ slot.** Keep the old save untouched as your Plan B.
6. **If the mod had scripts, clean the new save with ReSaver** (next section).
7. **Play for a while.** If everything behaves after a few hours, you can send the mod's files to Oblivion for good: right-click it in MO2 and choose {{< btn-inline >}}Remove Mod...{{< /btn-inline >}}. Any meshes you built for it in **Output Bodyslide** aren't doing any harm, so clean them up when you get around to it.

## Cleaning the save with ReSaver

ReSaver, part of {{< nexus 5031 >}}FallrimTools{{< /nexus >}}, is a save-file surgeon: it opens a save, shows you the Papyrus data inside, and cuts out the pieces whose mod no longer exists. MGO includes it, so there's nothing to install. Select {{< btn-inline >}}ReSaver{{< /btn-inline >}} from the run dropdown near the upper-right (the one that usually has {{< btn-inline >}}Launch MGO{{< /btn-inline >}} selected) and click {{< btn-inline play >}}Run{{< /btn-inline >}}.

1. Open the _new_ save you made after removing the mod (not your escape-hatch save).
2. From the {{< btn-inline >}}Clean{{< /btn-inline >}} menu, run **Remove Unattached Instances**, then **Remove Undefined Elements**. Those are the orphans: script data whose owner has left the building.
3. Save. ReSaver writes the cleaned result and keeps a backup of the original.
4. Load the cleaned save in-game and carry on.

{{< aside type="btw" title="Triage, not resurrection" >}}
ReSaver removes the wreckage a departed mod left behind; it can't restore a save that's already misbehaving. If cleaning turns up thousands of orphans, or problems persist after a clean, treat that as the save telling you something.
{{< /aside >}}

## When the answer is a new game

Sometimes the honest move is to let the save go:

* The mod's page says it isn't safe to uninstall mid-save. Believe it.
* It's a large quest, framework, or overhaul mod with scripts woven through everything.
* You removed it, cleaned up, and things are _still_ weird&mdash;crashes, stuck quests, NPCs staring into the middle distance more than usual.

A haunted save doesn't get better with time; it accumulates. Starting over stings less in MGO than in vanilla, though: [Alternate Perspective](/first-launch/alternate-start) gets a new character into the world in minutes, and [MCM Recorder](/tutorials/mcm-recorder) can replay all of your settings tweaks when you get there.

[^1]: Don't save in a custom player home and then remove that home.
