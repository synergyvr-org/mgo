+++
title = 'Glossary'
weight = 94
+++

## Skyrim

| Term | Definition |
| ---- | ---------- |
| Vanilla | Skyrim VR as Bethesda shipped it, without mods. |
| Flatrim | Any non-VR edition of Skyrim, including Special Edition/Anniversary Edition. |
|Journal Menu | The collection of menus containing _Quests_, _General Stats_, and _System_ tabs. |
| Tween Menu | The menu containing _Skills_/_Level Up_, _Items_, _Map_, and _Magic_. |
| Havok | The physics engine that's built into Skyrim (and many other games). Its calculations are tied to your frame rate, which is why MGO has you set your headset's refresh rate (see [Onboarding](/start/onboarding)). |

## Modding and VR

| Term | Definition |
| ---- | ---------- |
| MGO | Mad God's Overhaul, a mod list for Skyrim VR. |
| Wabbajack | An app for downloading and installing mod lists. The recipes for such lists are contained in files with a `.wabbajack` extension and are often informally referred to as _wabbajacks_ themselves. |
| MO2 | Mod Organizer 2, an app for managing a collection of mods. MGO is managed and launched in MO2. |
| Nexus | [Nexusmods.com](https://www.nexusmods.com/), a web site that hosts mods for numerous games, including Skyrim. |
| VD | Virtual Desktop, paid software for wirelessly connecting certain headsets (Quest, Pico, etc.) to a PC, including support for playing PCVR games. It requires a (free) streaming app on the PC, paired with a (paid) app on the HMD. Free alternatives include Meta Link, Steam Link, and ALVR. |
| HMD | Head-Mounted Display, a more precise term for a VR headset. |
| PCVR Games | VR games running on a PC with a connected (wired or wireless) headset, as opposed to games running natively on a standalone headset with no PC involved. |
| VR Runtime | The software translation layer between the game and your VR hardware. Examples include SteamVR and various OpenXR implementations like VDXR and PimaxXR. |
| OpenXR | An open, vendor-neutral standard that lets a VR application talk to any compatible headset. With OCU, Skyrim VR runs through an OpenXR runtime (such as VDXR, Oculus, or SteamVR's own) instead of the older OpenVR path. |
| SteamVR | Valve's VR runtime and platform, built on OpenVR. Skyrim VR runs through it by default, and OCU can bypass it. SteamVR also provides its own OpenXR runtime. |
| OpenVR | The older VR API that SteamVR is built on. OCU replaces this path with OpenXR for lower overhead. |
| SKSE / SKSEVR | Skyrim Script Extender (SKSEVR is the VR build), a foundational tool that expands Skyrim's scripting so script-based mods can work. Many mods require it, and MGO runs on it. |
| MCM | Mod Configuration Menu, the in-game settings menu (under the System menu) where many mods let you adjust their options. Provided by SkyUI. |
| VRIK | A mod that gives you a full, animated body in VR and drives gestures, body holsters, and much of MGO's VR interaction. It's also the source of a default [control scheme](/controls). See the [VRIK Player Avatar](/mod-highlights/vrik) page. |
| HIGGS | Hand Interaction and Gravity Gloves for Skyrim VR: physics-based hand interaction that lets you grab, throw, and pull objects to your hand. Several other mods build on it. See [Interaction](/how-to-play/interaction). |
| PLANCK | A physics mod that makes melee strikes, enemy reactions, and object collisions feel physical in VR. See [Melee Combat](/how-to-play/combat). |
| Plugin | A mod file (with an `.esp`, `.esl`, or `.esm` extension) that adds or changes game records. Plugins are the entries listed on the right-hand side of MO2. |
| LOOT | The Load Order Optimisation Tool, which automatically sorts your plugins. MGO's load order is already sorted and tested, so you shouldn't run LOOT. |
| INI | A plain-text configuration file (settings written as `key = value` under bracketed `[Sections]`). Many mods keep their options in one. See [INI Files](/reference/editing-inis). |

## Graphics and Performance

| Term | Definition |
| ---- | ---------- |
| ASW | Asynchronous SpaceWarp, a motion-smoothing technique for generating artificial intermediate frames between actual frames, giving the effect of double the actual frame rate. For Skyrim VR, ASW runs on the PC's GPU and is an option provided by the [Open Composite Unleashed mod](/performance/open-composite/) and by Meta's PCVR software. May have fewer visual side effects than SSW. Do not enable ASW and SSW at the same time. |
| SSW | Synchronous SpaceWarp, a motion-smoothing technique for generating artificial intermediate frames between actual frames, giving the effect of double the actual frame rate. SSW runs on the VR headset itself and is an option provided by the Virtual Desktop streaming software. Do not enable ASW and SSW at the same time. |
| DLSS | Deep Learning Super Sampling, an NVIDIA upscaling technology (available only on NVIDIA GPUs) for improving performance while maintaining high image quality. |
| FSR | FidelityFX Super Resolution, an upscaling technology developed by AMD for improving performance while maintaining high image quality. FSR3 is GPU-agnostic, while FSR4 is exclusive to certain AMD GPUs. |
| DLAA | Deep Learning Anti-Aliasing, NVIDIA's anti-aliasing technology, exclusive to NVIDIA GPUs, used to improve image quality by reducing jagged edges and shimmering, with fewer visual side effects than TAA, but at a much heavier GPU cost. |
| TAA | Temporal Anti-Aliasing, a GPU-agnostic, highly performant technique used to reduce jagged edges and shimmering. It can introduce ghosting/smearing, which can be offset somewhat by image sharpening technologies like CAS. |
| CAS | Contrast Adaptive Sharpening, a GPU-agnostic image-sharpening technique developed by AMD. It is often used to counteract the softness introduced by TAA, and is built into the FSR process. |
| OCU | Open Composite Unleashed, a mod for Skyrim VR that allows the use of OpenXR-based runtimes directly, bypassing the overhead of SteamVR. It also includes an onscreen VR keyboard and a configuration desktop app with controller mapping options and numerous features for improving performance. |
| CS | Community Shaders, a plugin with advanced graphical features that vanilla Skyrim does not support. MGO uses Troned's [unofficial fork of Community Shaders](https://www.nexusmods.com/skyrimspecialedition/mods/166950) that has far better VR support than the official project, and that plays nicely with OCU. |
| LOD | Level of Detail: how detailed distant geometry (terrain, trees, structures) appears. Higher-quality LODs look better but cost performance. |
| PBR | Physically Based Rendering, a lighting and material model that makes surfaces react to light more realistically. |
| SSGI | Screen Space Global Illumination, a Community Shaders feature that adds bounced, ambient light for extra depth, especially indoors. |
| Upscaling | Rendering the game at a lower resolution and intelligently scaling it up to gain performance. DLSS (NVIDIA) and FSR (any GPU) are the common methods. |
| Renderscale Upscaling | A particular upscaling technique recently added to the [Community Shaders Fork](/performance/community-shaders) that can be toggled while in-game. |
| FFR | Fixed Foveated Rendering, which renders the edges of your view (where you're less likely to be looking) at lower detail to save GPU. Available on NVIDIA through OCU. |