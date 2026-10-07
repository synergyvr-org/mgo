+++
title = 'BodySlide'
weight = 50
hidden = true
+++

{{< nexus 201 >}}BodySlide and Outfit Studio{{< /nexus >}} is ax external tool rather than a game mod, but you'll need it if you start adding armor and clothing to MGO. BodySlide builds the meshes for the unclothed body and for every outfit so they remain consistent. Without it, a new piece of armor might be built for some default body that looks nothing like that body looks in other outfits (or no outfit), leaving you with gaps, clipping, and wacky proportions.

{{< aside type="btw" title="Outfit Studio" >}}
Outfit Studio is BodySlide's sibling tool for editing and converting meshes. You can ignore it unless you choose to get deeper into modding at some point.
{{< /aside >}}

MGO uses {{< nexus 30174 >}}CBBE 3BA{{< /nexus >}} for female bodies and {{< nexus 46311 >}}HIMBO{{< /nexus >}} for male ones. Everything in the base list is already built for you, so you don't need to open BodySlide at all unless you add new outfits yourself.

{{< aside type="btw" title="When do I actually need this?" >}}
You need to run BodySlide when you add a clothing or armor mod that includes BodySlide files but that _doesn't_ already include meshes built with zeroed sliders. If a mod doesn't includes BodySlide files, there's nothing to build, and it'll just use whatever static mesh(es) it shipped with.
{{< /aside >}}

## Zeroed sliders?

MGO uses {{< nexus 77016 >}}OBody NG{{< /nexus >}} to apply a variety of body shapes so everyone doesn't look the same. Because OBody does this, you want to build everything in BodySlide with **zeroed sliders**. OBody then morphs that into whatever preset it's applying to any given character. If you bake a specific preset into your BodySlide build instead, you'll end up with the wrong proportions and clipping. Use zeroed sliders and let OBody do its job.

Also make sure to check the **Build Morphs** checkbox before generating the BodySlide output. Build without it, and OBody can't reshape your new outfit, and it'll clip.

To recap, when you build for MGO:
- Use the **Zeroed Sliders** preset
- Tick **Build Morphs**.

Miss either of those and your new outfit won't play nice with OBody.

## Building new gear

Remember, everything already in MGO ships with its meshes pre-built. You're here to build the gear you _added_, so the goal is to build that and nothing else. Rebuilding the whole list would take ages, only to recreate work that's already been done (and if any of your settings differ from what the list author used, you'd be rebuilding hundreds of outfits the _wrong_ way and never know it). The filter box is how you keep the blast radius small.

1. Launch BodySlide from MO2's run dropdown (the one near the upper-right that usually reads {{< btn-inline >}}Launch MGO{{< /btn-inline >}}). Choose {{< btn-inline >}}BodySlide{{< /btn-inline >}} from the dropdown and click {{< btn-inline play >}}Run{{< /btn-inline >}}.
2. At the top, set the _Preset_ to **Zeroed Sliders**.
3. At the bottom, check **Build Morphs**.
4. In the **filter box** next to the **Outfit/Body** dropdown, type part of your new mod's name. This narrows both the dropdown and the Batch Build list to matching entries, so only your new gear is in play.
5. Click **Batch Build**. It builds everything that survives the filter, which should be each piece of your new outfit (for each supported body). If two entries want to build the same slot, it'll ask which one should win.
6. Give the confirmation list a last look. If it shows anything that isn't the mod you're building, untick it before you confirm.

{{< aside type="btw" title="If the filter comes up empty" >}}
The filter matches BodySlide _project_ names, which don't always match the mod's title exactly. Try a different fragment of the name, or click the funnel icon next to the filter box and use **Choose groups** to pick the mod's group directly.
{{< /aside >}}

For a single piece, you can instead select it from the **Outfit/Body** dropdown and click plain **Build**, but the filtered Batch Build is the easy way to catch every piece of an outfit in one pass. To see the whole routine applied to a real mod, male and female meshes and all, see [Master Thief Armor (BodySlide)](/tutorials/master-thief-armor).

## Send the output to its own mod

Run through MO2, BodySlide writes its freshly built meshes to the [Overwrite](/reference/overwrite) folder. Don't leave them there. Overwrite is a catch-all you should treat as temporary, and burying your builds in it makes them a pain to manage or undo later.

MGO already includes an empty mod named **Output Bodyslide** for exactly this purpose. After a build:

1. In MO2's left pane, you'll see the {{< file folder-open >}}Overwrite{{< /file >}} entry (at the very bottom) now has content.
2. Right-click {{< file folder-open >}}Overwrite{{< /file >}} and choose {{< btn-inline >}}Open in Explorer{{< /btn-inline >}}. Do the same for the **Output Bodyslide** mod.
3. Move the built files from Overwrite into Output Bodyslide, then hop back to MO2 and press {{< btn-inline >}}F5{{< /btn-inline >}} to refresh. Overwrite should be empty again.
4. Make sure **Output Bodyslide** is enabled and sits _below_ your armor and clothing mods in the left pane, so its built meshes win any conflict.

{{< aside type="btw" title="Or make a mod on the spot" >}}
If you'd rather not use the included empty mod, right-click {{< file folder-open >}}Overwrite{{< /file >}} and choose {{< btn-inline >}}Create Mod...{{< /btn-inline >}} to package everything in there into a brand-new mod in one step. Either way, the goal is the same: get your builds out of Overwrite and into a real mod. For more on why, see the [MO2 Overwrite](/reference/overwrite) page.
{{< /aside >}}

## Patch and synthesize

BodySlide gets an outfit's _shape_ right, but a couple of other tools may need a pass before new armor or clothing looks and behaves like the rest of the list. Your freshly built meshes come out unpatched, so run {{< nexus 120946 >}}PGPatcher{{< /nexus >}} **after** BodySlide to make them pick up the list's PBR and parallax instead of rendering flat. And if your addition has a plugin, re-run {{< ext "https://mutagen-modding.github.io/Synthesis/" >}}Synthesis{{< /ext >}} so its records fold into MGO's merged patch.

Both run from the same MO2 dropdown as BodySlide. For the full routine&mdash;what each tool does, when to skip it, and the order to run everything in&mdash;see [The Patchers](/tutorials/patchers).