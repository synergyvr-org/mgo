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

To switch any feature on or off, open the CS menu with <kbd>END</kbd>, flip the toggle in the upper-right of the feature's panel, save, and restart the game. You only have to do it once, because CS remembers the setting.

{{< caption name="cs-troned-toggle" no-retina="true" >}}
Each feature's on/off toggle sits in the upper-right of its panel. Don't forget to save your changes!
{{< /caption >}}

**VR.** Keep both VR depth culling options enabled.

**Upscaling.** Troned runs either **DLAA + Profile K** or **Quality Upscaling + Profile K**, with **Sharpness** set to 0.1. (DLAA and DLSS upscaling are NVIDIA-only.)

{{< aside type="alert" title="Upscale in one place, not both" >}}
Both Community Shaders and [OpenComposite Unleashed](/performance/open-composite) can handle upscaling, and you don't want them both doing it at once. Enable it in one or the other, and make sure it's turned off in the other. If Community Shaders won't be your upscaler, disable its upscaling _before_ you compile shaders, or you may end up rebuilding them.
{{< /aside >}}

**NVIDIA Reflex.** Turn it on and leave the defaults. It clears up the momentary stutter you can get when you spin around quickly and your CPU spikes.