+++
title = 'RaceMenu Presets'
weight = 65
hidden = true
+++

You spent an hour in [character creation](/first-launch/character-creation) getting the cheekbones just right. A **RaceMenu preset** makes that hour portable: every slider value, saved to a single file you can reload on your next character, carry to a new machine, or share with a friend. Presets are also the fastest way to _start_ with a great-looking character, since Nexus is full of faces that took someone else the hour.

{{< aside type="btw" title="About that file extension" >}}
RaceMenu preset files end in {{< file file-lines >}}.jslot{{< /file >}}, but they're JSON inside, which is why you'll hear them called "JSON presets." If someone hands you a bare `.json` instead, it's usually a `.jslot` wearing the wrong extension&mdash;or an OBody/BodySlide body preset, which is a different thing that lives somewhere else entirely.
{{< /aside >}}

## Where presets live

RaceMenu looks for presets at exactly one path:

{{< file folder-open >}}SKSE\Plugins\CharGen\Presets{{< /file >}}

In MO2 terms, that path needs to exist _inside a mod_&mdash;never loose in the game folder. Getting a preset into the game is just getting the file to that path, through one of two doors.

## If the preset is a Nexus mod

The whole [Installing a Mod](/tutorials/installing-a-mod) routine applies, minus most of the worry: a preset is loose files with no plugin, so there's nothing to conflict with and no patchers to re-run. Download it with MO2, install it, prepend `[NoDelete]` to the name, and park it near your other appearance mods. Done.

## If it's a bare file

A preset shared over Discord (or exported on another PC) still needs to live inside a mod, so a [list update](/tutorials/updating-the-list) doesn't sweep it away:

1. In MO2's left pane, right-click and choose {{< btn-inline >}}Create empty mod{{< /btn-inline >}}. Name it something like `[NoDelete] My RaceMenu Presets` and enable it.
2. Right-click the new mod, choose {{< btn-inline >}}Open in Explorer{{< /btn-inline >}}, and create the folder chain {{< file folder-open >}}SKSE\Plugins\CharGen\Presets{{< /file >}}.
3. Drop the {{< file file-lines >}}.jslot{{< /file >}} file in, switch back to MO2, and press {{< btn-inline >}}F5{{< /btn-inline >}} to refresh.

One mod like this can hold every preset you'll ever collect, so you only do this once.

## Loading a preset

Open RaceMenu&mdash;either at character creation on a new game, or mid-playthrough with the `showracemenu` console command (make a full manual save first, as [Character Creation](/first-launch/character-creation) explains). Head to the **Presets** tab and load your preset; the tab lists its keyboard shortcuts along the bottom (loading is <kbd>F9</kbd> in flat RaceMenu). In VR, having a desktop keyboard within reach is the reliable way to trigger those shortcuts, and the pointer techniques for wrangling RaceMenu's UI are covered on the [Character Creation](/first-launch/character-creation) page.

{{< aside type="alert" title="The bald-potato problem" >}}
A preset references its hair, brows, eyes, and skin _by mod_, from whatever load order it was created in. Load one that depends on mods MGO doesn't include, and RaceMenu substitutes defaults for every missing piece without so much as a warning&mdash;which is how a stunning Nexus screenshot becomes a bald potato in your game. Presets made by other MGO players load faithfully. Presets from arbitrary flat-Skyrim setups are a lottery, so check a preset's requirements on its Nexus page before falling in love.
{{< /aside >}}

{{< aside type="btw" title="Sculpted presets" >}}
Some presets ship a companion {{< file >}}.nif{{< /file >}} of hand-sculpted head data, which belongs one folder up, in {{< file folder-open >}}SKSE\Plugins\CharGen{{< /file >}}. Fair warning: sculpt data is applied through RaceMenu's Sculpt tab, which doesn't work in VR, so heavily sculpted presets may not fully translate to MGO.
{{< /aside >}}

## Saving your own

The Presets tab saves as well as loads (<kbd>F5</kbd> in flat RaceMenu), so you can bottle your current face before experimenting, or export it for a friend. One MGO-specific wrinkle: when the _game_ writes a new preset file, it lands in MO2's [Overwrite](/reference/overwrite) folder, like everything else the game generates. Move it from there into your presets mod, and it's safe for the long haul&mdash;and ready to send to someone else, who now has this page for what to do with it.
