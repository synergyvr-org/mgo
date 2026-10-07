+++
title = 'Updating the List (Wabbajack)'
weight = 80
hidden = true
+++

MGO isn't frozen in amber. New versions ship as new Wabbajack releases, with mods added, removed, updated, and re-tuned as a set. That's the deal with a curated list: you don't update the parts, you update the whole. When you run the update, Wabbajack makes your installation match the new release _exactly_&mdash;and that word "exactly" is why this page exists. Anything in the installation that isn't part of the list is, by default, swept away.

Done with a little preparation, an update is uneventful. Here's the preparation.

{{< aside type="alert" title="Read the release notes first" >}}
Before anything else, check the release announcement in the {{< btn-inline >}}#mgo-updates{{< /btn-inline >}} channel of the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}}. It will tell you whether your existing saves are expected to work or whether the update means starting a new game. Point releases are often save-friendly; major versions usually aren't. When the notes don't say, assume a new game is the safe path, and ask in the MGO Discord before betting a 100-hour character on it.
{{< /aside >}}

## Before you update

1. **Back up your saves.** Depending on configuration, they live either in the MO2 profile ({{< file folder-open >}}profiles\...\saves{{< /file >}} inside your MGO folder) or in {{< file folder-open >}}Documents\My Games\Skyrim VR\Saves{{< /file >}}. Copy whichever exists to somewhere outside the MGO folder entirely.
2. **Tag the mods you've added.** Any mod whose name starts with `[NoDelete]` and a space survives the update; anything else you added does not. If you followed [Installing a Mod](/tutorials/installing-a-mod), your additions are already tagged. If not, now's the moment: right-click each one in the left pane, choose {{< btn-inline >}}Rename{{< /btn-inline >}}, and add the prefix.
3. **Empty the Overwrite folder.** Update or not, [Overwrite](/reference/overwrite) is a place things go to be lost. Move anything you care about (MCM Recorder recordings, stray generated files) into a `[NoDelete]`-tagged mod.
4. **Keep your downloads folder.** Don't clear it to "make room." The update reuses it and only downloads archives that actually changed, which saves you hours.

{{< aside type="btw" title="What [NoDelete] does and doesn't do" >}}
The tag protects a mod's _files_. It does not protect its place in your load order or its enabled state&mdash;the update resets the mod list itself to the new release's layout, and your tagged mods get bumped to the bottom, likely disabled. They're safe, but you'll be re-shelving them afterward.
{{< /aside >}}

## Run the update

1. Close MO2 (and everything else touching the MGO folder).
2. Launch Wabbajack and download the new MGO release, the same way you got the original (see [Installation](/start/installation) if it's been a while).
3. Point the installation location at your **existing MGO folder** and the download location at your **existing downloads folder**. Updating in place is what lets Wabbajack diff the two versions instead of rebuilding from scratch.
4. Start it, then go do something else. It's faster than a fresh install, but it isn't fast.

If the update fails partway, the advice from [Installation](/start/installation) still applies: **try again** first. Wabbajack picks up where it left off.

## After the update

The list is new, so your customizations need to be reintroduced to it.

1. **Redo your Onboarding choices.** The update resets the profile to the release's defaults, which means the setup steps from [Onboarding](/start/onboarding) (runtime and bindings selections, performance presets, and any OPTIONAL Mods you'd enabled) revert. Walk that page's checklist again. It goes quickly the second time.
2. **Re-shelve your added mods.** Your `[NoDelete]` mods are sitting at the bottom of the left pane, probably disabled. Re-enable each one and drag it back to its proper section, then run **Sync Plugins** to line the right pane up again ([Installing a Mod](/tutorials/installing-a-mod) covers both).
3. **Re-run your generators.** Anything you generated yourself was built against the _old_ list. If you added gear, rebuild it in [BodySlide](/tutorials/bodyslide) and re-run PGPatcher and Synthesis; if you use {{< nexus 90557 >}}VRAMr{{< /nexus >}}, run it again so the new version's textures get optimized too.
4. **Expect a long first launch.** Mods changed, so [Community Shaders will recompile](/first-launch/compiling-shaders) on the first run. That's normal, not a hang.

Then load your save (or roll a new character, if the release notes said so) and enjoy the new toys. The release notes usually list them, and they're half the fun of updating.