+++
title = 'Community Shaders'
weight = 10
+++

_Shaders_ are programs that run while drawing the game's graphics to the screen (or screens, in VR). Mad God's Overhaul uses Community Shaders (specifically, {{< nexus 166950 >}}Community Shaders (Unofficial Fork){{< /nexus >}}), a plugin with advanced graphical features that vanilla Skyrim does not support. This is what makes MGO's dramatic visuals possible.

Community Shaders (CS) keeps its own cache of pre-compiled shaders on disk to speed up the game's startup time... except for the very first time you run it.

{{< aside type="btw" title="Remember..." >}}
To run the game from Mod Organizer 2, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /aside >}}

When you launch MGO for the first time after installation (or after certain actions, like clearing your {{< file folder-open >}}Overwrite{{< /file >}} folder or otherwise invalidating the cache), Community Shaders will begin compiling. If you can see the Skyrim VR window on your desktop, you should see a progress bar. The bar should also remain visible once you properly enter VR.

{{< caption name="cs-compiling" type="webp" >}}
While the game is compiling shaders, you can see the progress in the Skyrim VR window on the desktop.
{{< /caption >}}

Compiling shaders can take anywhere from 5 minutes[^1] on a high-end PC to almost 30 minutes. If the progress bar isn't moving, and it's been 30 minutes, something may be wrong.

{{< aside type="btw" title="Keep Moving" >}}
You may need to keep your headset awake and active while CS is compiling shaders. Personally, I switch to desktop view in my headset and keep myself busy with other tasks* using my physical mouse and keyboard. That seems to be good enough.

On Virtual Desktop, hold the {{< btn-inline >}}Menu{{< /btn-inline >}} button on your controller to switch to the desktop view, and press {{< btn-inline >}}Menu{{< /btn-inline >}} again to bring up the VD sidebar, where you can switch back to VR.

\*That sounds like a perfect time to browse this documentation!
{{< /aside >}}

During compilation, or at any time when Skyrim VR is running, you can press <kbd>END</kbd> on the keyboard (physical or virtual) to open the CS settings panel.

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
Both Community Shaders and [OpenComposite Unleashed](/appendices/open-composite) can handle upscaling, and you don't want them both doing it at once. Enable it in one or the other, and make sure it's turned off in the other. If Community Shaders won't be your upscaler, disable its upscaling _before_ you compile shaders, or you may end up rebuilding them.
{{< /aside >}}

**NVIDIA Reflex.** Turn it on and leave the defaults. It clears up the momentary stutter you can get when you spin around quickly and your CPU spikes.

When it finishes—and it will finish—it's time to play!

[^1]: Even on a high-end PC, CS may estimate somewhere in the neighborhood of 30 minutes for compiling shaders, but that's likely to be a very high estimate.