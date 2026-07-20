+++
title = 'Community Shaders'
weight = 30
+++

Mad God's Overhaul uses {{< nexus 166950 >}}Community Shaders{{< /nexus >}} (specifically Troned's unofficial VR fork) for the advanced graphical features behind its dramatic visuals. It compiles its shaders the first time you launch the game (covered in [Compiling Shaders](/first-launch/compiling-shaders)), but you can tune what it does at any time from its in-game settings overlay.

Press <kbd>END</kbd> on the keyboard (physical or virtual) while Skyrim VR is running to open the Community Shaders settings panel.

{{< caption name="cs-overlay" type="webp" >}}
Press <kbd>END</kbd> on your keyboard to open the CS settings overlay.
{{< /caption >}}

You can make a variety of adjustments from this settings overlay, but the _Performance_ and _Quality_ presets in MGO represent a reasonable balance for most players. Feel free to read documentation, Nexus posts, Discord posts, etc. and tweak to your heart's content. Fair warning though: With everything cranked up, CS can make even the mightiest machine howl in pain (figuratively speaking).

## Finding your way around the overlay

The overlay has two modes to choose from in its **Home** section:

* **Essentials** shows just the options you're most likely to touch. It's the default, and it's the right place to start if the full pile of toggles and sliders looks overwhelming. (Reading every tooltip is, in Troned's words, almost worth a chapter of your favorite book.)
* **Advanced** unlocks everything, for when you cannot abide simplicity.

If you'd rather always open straight into Advanced, you can set that in your user settings.

{{< aside type="btw" title="Point or drag?" >}}
Steering the cursor around with a thumbstick is now the default. Turn on **Wand Control** in the overlay's VR menu, and you can point at CS options with your controllers instead.
{{< /aside >}}

## ParticleTroned's recommendations

Troned, who maintains the {{< nexus 166950 >}}Community Shaders fork{{< /nexus >}} that MGO uses, has published his own recommendations for which features to run. If you'd like to mess around with individual features, this makes a great starting point. The rough per-frame costs below come from his {{< ext "https://github.com/ParticleTroned/skyrim-community-shaders/blob/cs-1.4.11-PL-VR/Particle-Lights-fork-Installation.md" >}}installation notes{{< /ext >}}, though the exact impact depends on your hardware and resolution.

{{< caption name="cs-troned-recommended" no-retina="true" >}}
Troned's recommended Community Shaders settings at a glance.
{{< /caption >}}

**Worth turning on.** Troned calls the first two absolute must-haves:

* **Terrain Blending** (about 0.3 ms) blends objects into the ground instead of leaving them looking like they're perched on top of it. Its culling distance is fine at the default 1024, or drop it to 512 to save a little more.
* **Screen Space Shadows** (about 0.4 ms) adds grounded contact shadows. It can show minor artifacts in VR, which you can rein in by lowering its culling distance. (He suggests around 10000).
* **Wetterness** (roughly 0.5 to 1.5 ms, depending on how hard it's raining) makes rain, puddles, and wet surfaces look right.
* **SSGI / Ambient Occlusion** (about 0.5 to 0.8 ms) deepens the shading in corners and crevices. If the cost bites, switch to one of the foveated modes, or run it indoors only (his pick: AO mode, interiors only, around 1 ms).

**Turn off if you need frames.**

* **Skylighting** can cost more than 1 ms.
* **Cloud Shadows** runs around 0.3 ms.

**Leave off for now.** Troned doesn't consider these ready for general use yet:

* **Image Based Lighting** isn't fully baked.
* **Linear Lighting** is there for post-processing presets that aren't available yet.

To switch any feature on or off, open the CS menu with <kbd>END</kbd> (or the appropriate controller shortcut), flip the toggle in the upper-right of the feature's panel, save, and restart the game. As long as you hit the save button in the overlay your settings will be remembered.

{{< caption name="cs-troned-toggle" no-retina="true" >}}
Each feature's on/off toggle sits in the upper-right of its panel. Don't forget to save your changes!
{{< /caption >}}

**VR.** Keep both VR depth culling options enabled.

**Upscaling.** For NVIDIA cards, Troned runs either **DLAA + Profile K** or **Quality Upscaling + Profile K**, with **Sharpness** set to 0.1. If this proves to be too much for your GPU, you can reduce it to **Balanced** or **Performance**.

{{< aside type="alert" title="Upscale in one place, not both" >}}
Both Community Shaders and [OpenComposite Unleashed](/performance/open-composite) can handle upscaling, and you don't want them both doing it at once. Enable it in one, and make sure it's turned off in the other. For the moment, CS seems to be the better option, but if Community Shaders won't be your upscaler, disable its upscaling _before_ you compile shaders, or you may have to rebuild them.
{{< /aside >}}

**NVIDIA Reflex.** Turn it on and leave the defaults. It helps to clear up the momentary stutter you can get when you spin around quickly and your CPU spikes.

## But wait! There's more!

Troned's fork keeps growing. Three new features are especially noteworthy.

### Renderscale Upscaling

Renderscale Upscaling puts Skyrim's dynamic rendering engine to work, doing the GPU heavy work at a reduced resolution before submitting the final image to your HMD at full resolution. It's hot-switchable in game, so you can flip it on without restarting. It's built to pair with {{< nexus 31392 >}}VR FPS Stabilizer{{< /nexus >}}, so you can pull off tricks like running Renderscale outdoors, where you need every frame, and switching to sharper DLAA (NVIDIA only) indoors, where you can spare a few.

{{< aside type="alert" title="Still experimental" >}}
Renderscale is new and not fully baked. Switching it mid-game restarts the render engine, which causes a brief visual glitch and, under some conditions, a crash. Treat it as something to experiment with, not to set and forget.

OCU's Asynchronous SpaceWarp (ASW) does not play nicely with renderscale either, so you'll need to choose one or the other.
{{< /aside >}}

### Adaptive Brightness

Are dungeons so dark you can't see your own hands? Or are taverns so blown out that they're pure white? Adaptive Brightness lets you set how bright the sky, lights, water, and more appear, tied to location and time of day. Adjust it broadly (exterior days and nights, dungeons, dwellings, and the like) or zero in on a single location.

### Performance Tuning

Ever wonder what a specific tweak is actually costing you? Performance Tuning measures the real, in-game impact of every performance-relevant CS option from a single panel. It compares your current settings against the same feature switched off and shows you the difference in frame rate and in CPU and GPU frame times, so you can see exactly what SSGI (or anything else) is costing you. Once you've dialed in the settings that feel right, save them to your CS user settings. No, I will not stop reminding you to save your settings.

{{< aside type="btw" title="Only the freshest upscalers" >}}
This version of the fork also bundles updated upscaling DLLs: DLSS 3.10.7 for NVIDIA and FSR 3.1.5 alongside FSR 4.1.1, the latter bringing AMD's newest upscaler to recent Radeon cards.
{{< /aside >}}

Oh, and remember to save your settings.
