+++
title = 'Headset Setup'
weight = 15
hidden = true
+++

MGO doesn't much care which headset you own. What changes from headset to headset is how it connects to your PC, which runtime carries the frames, and a few settings worth knowing before you chase performance problems that aren't your GPU's fault. This page collects that per-headset knowledge in one place. It pairs with the runtime choice in [Onboarding](/start/onboarding) and the deeper dive on the [Open Composite](/performance/open-composite/) page.

## Advice for every headset

* **Use OpenComposite unless you have a reason not to.** That's the same advice as Onboarding's Step 2. The per-headset question is really _which OpenXR runtime_ OCU should talk to, and that's what most of this page is about.
* **Set your headset's refresh rate deliberately, and 90Hz is the sweet spot.** For a list this heavy, 120Hz costs roughly a third more GPU for a smoothness upgrade you'll mostly notice in menus. A stable 90 beats a stuttery 120 every time. (You set this in your headset's own software, and MGO adapts—HIGGS keeps the physics in agreement automatically.)
* **Upscale in one place.** The Community Shaders presets and OCU's upscalers must never run together, whatever your headset. Pick a lane.
* **Fixed foveated rendering is cheap frames.** OCU offers <abbr title="Fixed Foveated Rendering">FFR</abbr> on NVIDIA cards, rendering the edges of your view at lower detail. It's extra attractive on Fresnel-lens headsets (Quest 2, PSVR 2), where the periphery is soft optics anyway.

{{< aside type="alert" title="SteamVR's stacked supersamplers" >}}
SteamVR has a global supersampling setting ({{< btn-inline >}}Settings{{< /btn-inline >}} → {{< btn-inline >}}Video{{< /btn-inline >}} → {{< btn-inline >}}Render Resolution{{< /btn-inline >}}) _and_ a per-game one ({{< btn-inline >}}Video{{< /btn-inline >}} → {{< btn-inline >}}Per-Application Video Settings{{< /btn-inline >}} → {{< btn-inline >}}Skyrim VR{{< /btn-inline >}}), and the two settings stack. Set both high and you end up rendering well past whatever number either slider is showing you, at a substantial performance cost.

Pick one and leave the other at its default. Whichever you choose, go by the actual per-eye resolution SteamVR reports beneath the sliders rather than the percentages. This is worth checking whether you're using the SteamVR runtime or running OCU through SteamVR's OpenXR runtime, because SteamVR stays in the chain either way.
{{< /aside >}}

## Meta Quest (2, 3, Pro)

Quest headsets reach your PC several ways, and each carries its own runtime:

* **Virtual Desktop** (paid) streams wirelessly and provides the **VDXR** runtime, which is the popular pairing with OCU. It also offers <abbr title="Synchronous SpaceWarp">SSW</abbr> frame generation, which can rescue a marginal frame rate. Never run SSW and ASW at the same time.
* **Meta's own Link cable or Air Link** use the **Oculus** OpenXR runtime, with ASW available as the motion-smoothing option.
* **Steam Link and ALVR** are free wireless alternatives if Virtual Desktop isn't in the budget.

Whichever you choose, select the matching runtime in the OCU Configurator (the [Open Composite](/performance/open-composite/) page shows how). And whatever the method, a wireless headset lives or dies by its network, so it's worth reading [Wireless Streaming](/performance/wireless-streaming). For what it's worth, I play on a Quest 3.

## Valve Index and other SteamVR-native headsets

Native SteamVR hardware needs no streaming layer at all. You can run MGO's SteamVR branch exactly as Onboarding describes, or run OCU through **SteamVR's own OpenXR runtime** and keep OCU's upscalers, keyboard, and binding presets. Index users should read the fine print on the [Controller Bindings](/controls) pages; the VRIK scheme in particular needs its community bindings selected in SteamVR to work fully.

## Pimax

Pimax headsets provide the **PimaxXR** OpenXR runtime, and OCU talks to it directly. Beyond that, the universal advice above applies unchanged.

## PSVR 2

Sony's headset joins the PC party through the official PSVR 2 PC adapter (plus a DisplayPort cable, and Bluetooth for the controllers), and it comes with more asterisks than any other headset here.

* **It's a SteamVR-only device on PC.** There's no Sony OpenXR runtime, so your two options in MGO's Step 2 are the SteamVR branch, or OCU running through SteamVR's OpenXR runtime. The second keeps OCU's upscalers and FFR, though the bypass-SteamVR benefit shrinks since SteamVR stays in the chain either way. If OCU and the adapter don't get along, the plain SteamVR branch is the fallback.
* **Choose 90Hz.** The 120Hz mode is real, but see the universal advice above; it goes double on a headset with no frame-generation safety net.
* **Turn off SteamVR's Motion Smoothing.** Community guidance is consistent that it misbehaves on PSVR 2. And note what you _don't_ have here: no Virtual Desktop means no SSW, and OCU's ASW is experimental. Tune for a native, stable frame rate&mdash;performance presets, [VRAMr](/performance/vramr), upscaling, FFR&mdash;rather than counting on reprojection to catch you.
* **No eye tracking on PC**, so the headset's dynamic foveated rendering stays on the PlayStation. OCU's fixed foveated rendering is the substitute.
* **Resolution:** SteamVR's 100% is roughly native for the panel. If you need headroom, prefer the list's upscaling options over crude supersampling cuts.

{{< aside type="btw" title="Controller caveats" >}}
Skyrim VR predates the Sense controllers, so they present themselves as Touch- or Index-style devices, and binding behavior is the roughest edge of the PSVR 2 experience. If a built-in scheme misbehaves, the OCU Configurator's custom bindings are the escape hatch.
{{< /aside >}}

{{< aside type="alert" title="PSVR 2 pioneers wanted" >}}
Fair warning: the PSVR 2 guidance above is synthesized from general PCVR community guides, not yet from a body of MGO-on-PSVR-2 veterans. If that's your headset, the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}} would genuinely love your confirmed settings, and this page will improve as reports come in.
{{< /aside >}}