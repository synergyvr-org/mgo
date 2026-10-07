+++
title = 'Master Thief Armor (BodySlide)'
weight = 60
hidden = true
+++

The [BodySlide](/tutorials/bodyslide) page covers the theory. This one puts it into practice with a real outfit: {{< nexus 141700 >}}Master Thief Armor 3BA{{< /nexus >}}, FafnyB's lore-friendly take on Thieves Guild gear for both male and female characters. (Fitting territory: one of FafnyB's first-ever mods, a decade earlier, was a Thieves Guild armor retexture.) It comes in black, brown, and green, is split into a bunch of separate pieces (armor, gauntlets, boots, hood, shoulder armor, hip accessories, and a scabbard for your back), and can be crafted at the Skyforge. There's even an optional replacer if you'd rather earn it the classic way, by joining the Thieves Guild.

{{< aside type="btw" title="About that name" >}}
The mod's full name is _Master Thief Armor 3BA-BHUNP-UNP-CBBE-HIMBO-Vanilla_, which is less a title than a keyword salad for every body mod it supports. We'll be calling it Master Thief Armor 3BA and leaving it at that.
{{< /aside >}}

## Install the right files

This mod supports several body types, so the {{< btn-inline >}}Files{{< /btn-inline >}} tab on Nexus is a bit of a buffet. MGO uses **CBBE 3BA** for female bodies and **HIMBO** for male ones, which means you need exactly two downloads:

1. **Main file:** {{< file >}}FB - Master Thief 3BA-CBBE 4k{{< /file >}}. This covers the female 3BA meshes. (It also includes a vanilla-body version for males, but we can do better.)
2. **Optional file:** {{< file >}}FB - Master Thief HIMBO Files{{< /file >}}. This adds the HIMBO projects for male characters. Skip it, and men get the vanilla-body version, which won't match the HIMBO shapes OBody applies in MGO.

Install both through MO2 as covered in [Installing a Mod](/tutorials/installing-a-mod), and keep them together in the left pane (with the HIMBO file right below the main file) wherever you're collecting your added armor mods.

## Build the meshes, and only these meshes

This is the filter-first routine from the [BodySlide](/tutorials/bodyslide) page, applied. (That's where the whys live; these are just the whats.)

1. Launch **BodySlide** from MO2's run dropdown.
2. Set the _Preset_ to **Zeroed Sliders** and tick **Build Morphs**.
3. In the filter box next to the **Outfit/Body** dropdown, type `Master Thief`. (If nothing shows up, try `Thief` or `FB`.)
4. Click **Batch Build**. The list should show two families of entries: the 3BA (female) pieces and the HIMBO (male) pieces&mdash;each piece of the outfit, for each body. One pass builds both sets, since the male and female meshes live in different output paths and don't compete.
5. Give the Batch Build list one last look before you confirm: you should see only Master Thief entries. If anything else snuck in, untick it.

## The usual housekeeping

Everything from the main BodySlide page still applies:

* The built meshes land in [Overwrite](/reference/overwrite). Move them into the **Output Bodyslide** mod.
* Run **PGPatcher** after building, and re-run **Synthesis** so the new armor picks up the list's treatment (see [BodySlide](/tutorials/bodyslide) for the why).

Then head to the Skyforge and smith yourself something worth stealing.