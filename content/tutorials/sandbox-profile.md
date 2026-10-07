+++
title = 'A Sandbox Profile'
weight = 85
hidden = true
+++

Every tutorial in this chapter preaches caution: save first, one mod at a time, keep a way back. Here's the cheat code that makes caution cheap. MO2 supports multiple **profiles**&mdash;parallel configurations of the same installation&mdash;and a copy of your MGO profile is a sandbox where you can experiment as recklessly as you like while your real setup sits untouched.

## What a profile is (and isn't)

A profile is a saved answer to the question "which mods, in what order?" Each profile keeps its own:

* Enabled/disabled state of every mod, and the left-pane order
* Plugin list and load order
* Save games and game INIs, if you turn on the profile-specific options

What profiles _share_ is everything heavy: the installed mod files themselves, your downloads, and the tools. A second profile costs almost nothing on disk, because it's just a different set of checkmarks pointed at the same files.

{{< aside type="alert" title="Two things stay shared" >}}
**Deleting a mod deletes it for every profile.** Disabling is per-profile; removal is global. In the sandbox, _untick_ things&mdash;never {{< btn-inline >}}Remove Mod...{{< /btn-inline >}} unless you mean it everywhere. And the [Overwrite](/reference/overwrite) folder is shared too, so anything you generate while sandboxing (BodySlide builds, crash logs) lands in the same communal bin.
{{< /aside >}}

## Make the sandbox

1. Find the **profile dropdown** near the top-left of MO2 and choose {{< btn-inline >}}Manage...{{< /btn-inline >}} to open the profile manager.
2. Select MGO's profile and click {{< btn-inline >}}Copy{{< /btn-inline >}}. Name the copy something honest, like `MGO Sandbox`.
3. Give the copy **profile-specific save games**, so your experiments' characters stay quarantined from your real saves. (A fresh save in the sandbox even gets MGO's MCM configuration applied automatically, courtesy of [MCM Recorder](/tutorials/mcm-recorder)'s autorun.)
4. Close the manager and switch the dropdown to your new sandbox. Everything you change now&mdash;mods toggled, order shuffled, plugins rearranged&mdash;affects this profile only, until you switch back.

## What it's good for

* **Auditioning a mod.** Install it, place it, and play a test character for an evening, all before it ever touches your real profile. If it earns its keep, enable it on the main profile too; if not, the sandbox absorbs the mess.
* **Trying optional-mod combinations.** Curious whether Spellsiphon is for you? Flip it on in the sandbox and find out without committing your main game to the experiment.
* **Bisecting a problem.** When [Diagnosing a Crash](/tutorials/diagnosing-a-crash) points at "something you added," a sandbox copy lets you disable half your additions at a time until the culprit falls out, with zero risk of mangling your real load order.
* **Rehearsing something risky.** Planning to [remove a scripted mod](/tutorials/removing-a-mod) mid-save? Run the whole procedure in the sandbox first and see what actually breaks, while your real save stays out of the blast radius.

## Throw it away

That's the whole point: when the experiment is over, switch back to the MGO profile, open the profile manager, and {{< btn-inline >}}Remove{{< /btn-inline >}} the sandbox. Anything it left in [Overwrite](/reference/overwrite) is yours to tidy, but the profile itself vanishes without a trace.

{{< aside type="btw" title="Sandboxes are disposable by definition" >}}
Don't get attached. A [list update](/tutorials/updating-the-list) rebuilds the installation around the release's own profile, and there's no promise your custom profiles come through intact. Treat a sandbox as scaffolding: cheap to raise, cheap to tear down, rebuilt in a minute whenever you need one again.
{{< /aside >}}