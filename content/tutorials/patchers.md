+++
title = 'The Patchers'
weight = 63
hidden = true
+++

Most of MGO arrives finished. A handful of tools don't: instead of shipping their results inside the download, they _generate_ their output on your PC by scanning your load order exactly as it stands the moment you run them. That output is a snapshot. Change what's in the load order and the snapshot goes stale, so once you start adding and removing mods of your own, a few of these tools need another pass. Here's who they are and when to re-run them.

{{< aside type="btw" title="You may never need this" >}}
Running MGO as it ships? Everything here is already generated for you, and you can happily ignore this page. It starts to matter once you [add](/tutorials/installing-a-mod) or [remove](/tutorials/removing-a-mod) mods yourself.
{{< /aside >}}

## Meet the patchers

Three tools do the bulk of the patching, and they divide neatly by _what they touch_:

* **PGPatcher** handles **meshes**. {{< nexus 120946 >}}PGPatcher{{< /nexus >}} walks every mesh ({{< file >}}.nif{{< /file >}}) in your load order and rewrites it to use the list's PBR, parallax, and complex-material shaders. A mesh it hasn't seen renders flat and out of place next to everything around it.
* **DynDOLOD** handles the **distant world**. {{< ext "https://dyndolod.info/" >}}DynDOLOD{{< /ext >}} builds the low-detail stand-ins you see far away&mdash;mountains, tree lines, city skylines&mdash;along with their textures (that texture step is its companion tool, {{< ext "https://dyndolod.info/Help/TexGen" >}}TexGen{{< /ext >}}). Change something big enough to see from across a hold and its LOD needs rebuilding.
* **Synthesis** handles **plugins**. {{< ext "https://mutagen-modding.github.io/Synthesis/" >}}Synthesis{{< /ext >}} reads the records across your plugins and bakes a single merged patch that reconciles them, so a new piece of armor picks up its SunHelm warmth rating, lands in the right leveled lists, and so on. It's a _plugin_ patcher, not an asset one, which is why it answers to different changes than the other two.

Two more generated-output tools are close cousins with pages of their own: [BodySlide](/tutorials/bodyslide), which builds body and armor meshes, and [VRAMr](/performance/vramr), which bakes optimized copies of your textures. They follow the same snapshot rule.

{{< aside type="btw" title="Why isn't this in the download?" >}}
Each tool's output depends on _your_ exact load order, and some of it runs to many gigabytes. Baking it into the Wabbajack list would balloon the download and still be wrong for anyone who changed a thing. So MGO ships it pre-generated for the list as built, and hands you the tools to redo it when you deviate.
{{< /aside >}}

## When to re-run which

Match the tool to what you changed, and skip the ones that don't apply:

* **Added or removed meshes** → **PGPatcher**. Freshly built meshes (including anything you just ran through [BodySlide](/tutorials/bodyslide)) come out unpatched, and meshes you removed leave PGPatcher's output pointing at files that aren't there anymore.
* **Added or removed textures** → **VRAMr** (see the warning below), plus **PGPatcher** if those textures were PBR, parallax, or complex-material maps. The mesh patch keys off which maps exist, so adding or pulling them changes the answer.
* **Changed anything the distant view shows**&mdash;landscape, large structures, trees → **TexGen**, then **DynDOLOD**.
* **Added or removed a plugin** → **Synthesis**, so the merged patch matches your current plugin set.

{{< aside type="alert" title="Two that bite" >}}
**Synthesis and a missing master.** A Synthesis patch lists every plugin it drew from as a master. Remove one of those plugins _without_ regenerating the patch, and the patch has a master that no longer exists&mdash;and Skyrim won't so much as reach the main menu. Regenerate before you launch.

**VRAMr and the texture that won't leave.** VRAMr's output is optimized _copies_ of your textures. Remove a texture mod but leave the old VRAMr output in place, and the optimized copy lingers, so the texture is effectively still in your game. Re-run VRAMr (or disable **Output VRAMr**) or the removal doesn't fully take. See [VRAMr](/performance/vramr).
{{< /aside >}}

## Run them in order

If one change trips more than one tool, the order matters. Run the ones that apply, top to bottom:

1. **BodySlide** &mdash; build any new gear first. See [BodySlide](/tutorials/bodyslide).
2. **PGPatcher** &mdash; _after_ BodySlide, so it patches those fresh meshes. (Rebuilding in BodySlide strips the patch even from meshes that already had it, which is exactly why PGPatcher goes second.)
3. **TexGen**, then **DynDOLOD** &mdash; distant-world LOD comes after the meshes it's built from are final.
4. **Synthesis** &mdash; regenerate the plugin patch; it lands in **Output Synthesis**.
5. **VRAMr** &mdash; dead last, so it optimizes every texture the steps above just produced. See [VRAMr](/performance/vramr).

Each one runs from MO2's run dropdown (the one near the upper-right that usually reads {{< btn-inline >}}Launch MGO{{< /btn-inline >}}): pick the tool and click {{< btn-inline play >}}Run{{< /btn-inline >}}. Each has a matching **Output** mod near the bottom of the left pane&mdash;**Output PGPatcher**, **Output TexGen**, **Output DynDOLOD**, **Output Synthesis**&mdash;kept low so its generated files win any conflict. The asset tools write to the [Overwrite](/reference/overwrite) folder first, so move their results into the matching Output mod the way you would [after a BodySlide build](/tutorials/bodyslide); Synthesis is set to write its patch straight to **Output Synthesis**. Whichever you ran, make sure its Output mod is enabled.

{{< aside type="btw" title="Pack a lunch" >}}
PGPatcher and especially DynDOLOD read your whole load order, so they take real time&mdash;think in the hours-not-minutes range, like VRAMr. Kick one off when you've got something else to do.
{{< /aside >}}
