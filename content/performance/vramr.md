+++
title = 'VRAMr'
weight = 40
+++

{{< nexus 90557 >}}VRAMr{{< /nexus >}} doesn't change any in-game settings. It optimizes your textures ahead of time, generating downscaled, recompressed copies of the thousands of textures in the list, which your GPU can store and decode more efficiently. The result is lower VRAM use and fewer stutters. MGO includes the tool. You just have to run it.

{{< aside type="btw" title="Prefer to watch?" >}}
Some people learn better by watching someone do it, and there's no shame in that. The {{< youtube "watch?v=Se6oAvmtaBE&t=197s" >}}VRAMr Installation and Use video{{< /youtube >}} walks through the whole process. Since the tool is already installed with MGO, you can skip ahead to the timestamp in that link.
{{< /aside >}}

## Do you need it?

In short, that depends on your VRAM.

* **Under 16GB:** highly recommended.
* **Right at 16GB:** you're probably fine without it, but it won't hurt.
* **Above 16GB:** skip it, unless you're chasing stutters or pushing an extreme headset resolution.

The output takes up a lot of disk space, which is why that output isn't bundled with the list. (The download is big enough already.)

## What it does

VRAMr walks through every texture in your load order and makes an optimized copy: recompressed into the **BC7** format your GPU decodes fastest, and downscaled where the resolution is more than the game moment calls for. One texture saved this way isn't significant, but thousands of them add up.

**Your original files are never touched.** VRAMr only writes copies, so unchecking the output later returns everything to exactly how it was.

**It knows what not to shrink.** Textures where fidelity matters most&mdash;mountains, dragons, giants&mdash;are left at full resolution.

## Run it

1. Launch VRAMr from MO2's run dropdown (the one near the upper-right that usually reads {{< btn-inline >}}Launch MGO{{< /btn-inline >}}). Choose {{< btn-inline >}}VRAMr{{< /btn-inline >}} from the dropdown and click {{< btn-inline play >}}Run{{< /btn-inline >}}.
2. Pick the quality preset that matches your hardware. VRAMr comes with an interactive user guide that explains each one.
3. Point it at your load order and start it, then go do something else for a bit. It's chewing through thousands of textures, so we're talking about hours, not minutes.
4. When it's done, get the results into the **Output VRAMr** mod that MGO already includes in the **Outputs** section near the bottom of the left pane. That placement means that its optimized copies win every texture conflict. You can point VRAMr's output there from the start, or you can move the finished files afterwards.
5. Make sure **Output VRAMr** is enabled.
6. Play!

## When to run it again

VRAMr's output is a snapshot of the textures you had when it ran, so it goes stale the same way other generated output does. Here's when you'll want to re-run it:

* **After a [list update](/tutorials/updating-the-list)**, so any new textures in the update get the same treatment.
* **After adding a texture-heavy mod** of your own. A big retexture or armor pack you install yourself isn't covered until VRAMr sees it.

{{< aside type="btw" title="Not the end of the world" >}}
If you don't re-run VRAMr in these circumstances, the game won't fail to work or anything. You just won't get the full benefit you would from compressing any newly added textures.
{{< /aside >}}

## Changed your mind?

Rolling back it super easy. Disable the **Output VRAMr** mod and you're back to the original textures. If you're sure you won't want it back, delete its content to recover the disk space.
