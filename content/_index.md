+++
title = "Mad God's Overhaul"
type = "home"
+++

<h1><a href="/images/tes5-mgo-wide@2x.webp"><img src="/images/tes5-mgo-wide.webp" srcset="/mgo/images/tes5-mgo-wide@2x.webp 2x" alt="Mad God's Overhaul for Skyrim VR"></a></h1>

<ul class="horizontal-nav"><li>
{{< nexus 107333 >}}<abbr title="Not Safe For Work">NSFW</abbr>{{< /nexus >}}
</li>
<li>
{{< nexus 107780 >}}<abbr title="Safe For Work">SFW</abbr>{{< /nexus >}}
</li>
<li>
<span class="svg github">
  <a href="https://discord.com/invite/WjSUaSPaQZ" target="_blank">
    <i class="fa-brands fa-discord"></i> Discord
  </a>
</span>
</li>
</ul>

{{< aside type="alert" title="This is a BETA" >}}
MGO 4.0 is currently in _beta_, and so is this documentation. There is more content to come, and as things are moving rapidly at the moment, some things here might not match what's in the list perfectly. Please be patient.

To provide documentation feedback, you can {{< github "synergyvr-org/mgo/issues" >}}submit an issue on the GitHub repo{{< /github >}} or post in the `#mod-documentation` channel in the <a href="https://discord.com/invite/WjSUaSPaQZ" target="_blank"><i class="fa-brands fa-discord"></i> MGO Discord</a>, which you can find by turning on the role THE MOD LAB.

MGO 3.8.8.1 will remain the main download on Nexusmods until 4.0 is final. You can find the 4.0 Beta on the FILES tab under _Miscellaneous files_.
{{< /aside >}}

When {{< steam "611670" >}}Skyrim VR{{< /steam >}} hit Steam in April 2018, it was unlike anything else. The state of the art for VR experiences has evolved considerably since that time, but Skyrim VR hasn't received an official update since later the same month that it launched.

As luck would have it, people develop mods for Skyrim. A _lot_ of mods.

**Mad God's Overhaul** combines the best work from the modding community with the team's own custom patches to painstakingly remaster Skyrim VR to create an immersive experience with no equal.

For MGO 4.0, Snippy Stockins and [The Synergy Team](https://synergyvr.org/) have been hard at work rebuilding the list with the best mods available as of July 2026[^1], working with mod authors to maximize compatibility and optimize settings, creating custom patches, manually adjusting the load order, and smoothing out the onboarding experience to make MGO the best it can be.

[^1]: The modding community has been _busy_ lately!

Here's what Snippy highlights:

{{< aside type="note" title="What's New In 4.0" >}}
### Visual Facelift

**The New Horizon:** Stripped out NAT3 for [Azurite Weathers](https://www.nexusmods.com/skyrimspecialedition/mods/42731) by default, bringing rich, vibrant colors while retaining the 3.5 lighting and shadows you loved.

**Landscapes & Shaders:** Swapped to [Tomato Rim PBR Landscape AIO 2K](https://www.nexusmods.com/skyrimspecialedition/mods/177621) and added Wetterness for incredible environmental depth when it rains.

**Flawless Waters:** Switched to [Simplicity of Sea](https://www.nexusmods.com/skyrimspecialedition/mods/56520) + [Wavy Waterfalls](https://www.nexusmods.com/skyrimspecialedition/mods/126073) to blend away jagged water edges, provide a more natural aesthetic, and better compatibility.

### NPC Interactivity & Fidelity

**A Living World:** Removed Mantella entirely for the [SkyrimNet AI](https://goncalo22.github.io/SkyrimNet-GamePlugin/) and OstimNet framework for robust, lifelike, and dynamic AI-driven interactions.

**High-Fidelity Physics:** Integrated [Vanilla Hair Remake SMP](https://www.nexusmods.com/skyrimspecialedition/mods/63979), [HDT SMP Flex](https://www.nexusmods.com/skyrimspecialedition/mods/101564), and a premium suite of 2025 skin complexions for unbelievable physical realism.

### High-Stakes Combat & Monsters

**Intelligent Combos:** Combat is modernized with [Fire and Blood Legendary Dragon Combat](https://www.nexusmods.com/skyrimspecialedition/mods/156018), [MCO](https://www.nexusmods.com/skyrimspecialedition/mods/175044), and [SCAR](https://www.nexusmods.com/skyrimspecialedition/mods/72014) VR for fluid, intelligent enemy AI combos.

**Parallax Dragons:** [Redesigned dragons](https://www.nexusmods.com/skyrimspecialedition/mods/168815) with high-fidelity PBR models and full parallax support. (Spiders look juicier and scarier, too).

### Pure VR Physical Immersion

**VR Mechanics:** Included by default are [VR Climbing](https://www.nexusmods.com/skyrimspecialedition/mods/168553), [Interactive Activators](https://www.nexusmods.com/skyrimspecialedition/mods/161676) (levers/chains), [Spellbender VR](https://www.nexusmods.com/skyrimspecialedition/mods/164902), [Interactive Instruments](https://www.nexusmods.com/skyrimspecialedition/mods/144669), and [Immersive Arrow Pulling](https://www.nexusmods.com/skyrimspecialedition/mods/169833).

**UI & Map:** [Overhauled world map](https://www.nexusmods.com/skyrimspecialedition/mods/5804) featuring 3D trees/structures, alongside a custom premium Mod Organizer theme to easily tweak settings.

### Performance

**Optimized & Smooth:** Enjoy major performance gains thanks to [OpenComposite Unleashed](https://www.nexusmods.com/skyrimspecialedition/mods/171182). It integrates a brand new, highly natural-looking <abbr title="Asynchronous SpaceWarp">ASW</abbr> frame generation technique. Please note this feature is currently experimental and actively being worked on. While exact frame rates will always depend on your hardware, this update makes the list feel significantly smoother across the board.
{{< /aside >}}

Although Snippy's announcement didn't specifically call it out, Troned has made significant improvements to {{< nexus 166950 >}}his unofficial fork of Community Shaders{{< /nexus >}}, adding new features, a better configuration experience, and a host of options for improved performance.

This guide will walk you through setting up MGO, from download and installation to configuration, and how the mod list changes some of Skyrim VR's gameplay systems.

MGO includes somewhere in the neighborhood of 1,600 mods. You don’t need to be familiar with all of them to enjoy yourself, and many of the old, less-immersive ways of doing things still work, so you don’t have to memorize all the new stuff at once (or ever). But if you don’t even know what’s possible, you won’t know how to make the gameplay more immersive and, dare I say, more fun.

<div class="next">
  <a href="/start">Let's go.  <i class="fa fa-circle-right"></i></a>
</div>