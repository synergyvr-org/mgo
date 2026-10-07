+++
title = 'Updating a Mod'
weight = 20
hidden = true
+++

Sooner or later Nexus will wave a shiny new version of some mod at you, and every modder's instinct says _update it_. On a curated list, that instinct needs a leash. MGO pins every mod to a specific, tested version on purpose: the patches were built against those versions, and they've been proven to work together. Newer is not automatically better; newer is _unknown_.

So the first question isn't _how_. It's _whether_.

## Should you update at all?

{{< aside type="alert" title="If the mod is part of MGO: leave it alone" >}}
Updates to the list's own mods arrive with the next MGO release, tested as a set (see [Updating the List](/tutorials/updating-the-list)). Updating one of them yourself invites conflicts with the patches built around it&mdash;and the next list update will steamroll your change anyway. The exception is a hotfix that the list author explicitly tells you to apply, announced in the {{< btn-inline >}}#mgo-updates{{< /btn-inline >}} channel. Those instructions outrank this page.
{{< /aside >}}

For a mod _you_ added, it's your call, and it's worth a moment of homework first:

* **Read the changelog.** A crash fix for a bug you're actually hitting is a good reason to update. "Rebalanced some values" is not an emergency.
* **Check save safety.** Mod pages usually say whether updating mid-save is fine ("safe to update on an existing save") or whether it needs a clean save or a new game. Take them at their word.
* **Check for new requirements.** Updates sometimes add dependencies. Any new requirement has to pass the [VR sniff test](/tutorials/se-mods-in-vr) all over again.
* **When in doubt, don't.** If the current version is working, the safest version is the one you're on.

## Update a mod you added

1. **Make your manual, indoor save** and quit. (The same habit as [installing](/tutorials/installing-a-mod), for the same reasons.)
2. **Keep the old archive.** Don't delete the previous version from MO2's {{< btn-inline >}}Downloads{{< /btn-inline >}} tab. It's your rollback insurance.
3. **If you've edited the mod's INI, copy your changes somewhere first.** A clean reinstall replaces the mod's files, your edits included (see [INI Files](/reference/editing-inis)).
4. **Download the new version** with {{< btn-inline download >}}Mod manager download{{< /btn-inline >}}, then double-click it in the {{< btn-inline >}}Downloads{{< /btn-inline >}} tab.
5. **Name it exactly as the existing entry** (including any `[NoDelete]` prefix). MO2 will recognize the match and ask what to do: choose **Replace**, which swaps the old files out cleanly while keeping the mod's position and enabled state.
6. **Redo any FOMOD choices** the installer offers, matching what you picked last time (unless the changelog gives you a reason to choose differently).
7. **Handle the aftermath**, depending on what the update changed:
   * New, removed, or renamed plugin? Run **Sync Plugins**.
   * New BodySlide files? Rebuild in [BodySlide](/tutorials/bodyslide).
   * New or changed meshes or records? Re-run **PGPatcher** and **Synthesis**, same as when you first added it.
   * Re-apply your INI edits from step 3.
8. **Load your save and test.** Give it a real play session before you trust it.

{{< aside type="btw" title="Why Replace and not Merge?" >}}
**Merge** lays the new files over the old ones, which sounds friendly but leaves ghosts: if the update _removed_ a file, Merge keeps the stale copy around to cause mischief. **Replace** empties the folder and installs fresh, so what you have is exactly what the author shipped. When updating, Replace is almost always the right answer.
{{< /aside >}}

## Rolling back

If the new version misbehaves, the road back is short: find the old archive in the {{< btn-inline >}}Downloads{{< /btn-inline >}} tab, double-click it, name it to match the entry again, and **Replace**. You're back on the version that worked.

One caution: if the update ran scripts on your save in the meantime, rolling the files back doesn't roll the _save_ back. That's what the save from step 1 is for&mdash;and if things have gotten properly weird, [Removing a Mod](/tutorials/removing-a-mod) covers the deeper cleanup.