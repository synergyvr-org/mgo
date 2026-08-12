+++
title = 'Virtual Desktop'
weight = 25
+++

If you play on a standalone headset (Quest, Pico, Vive Focus), there's a good chance you reach your PC through {{< ext "https://www.vrdesktop.net/" >}}Virtual Desktop{{< /ext >}}. (And if you don't, you should consider it.) It's one of the most popular ways to stream PCVR to a wireless headset, and its settings have a big impact on your experience, irrespective of the game engine.

Let's look at a few of the most significant adjustments you can make, in both the Virtual Desktop Streamer app on your PC and in the companion app on your headset.

{{< aside type="btw" title="Is this for you?" >}}
This page is for folks using standalone headsets with Virtual Desktop. On a wired Link cable or a SteamVR-native headset, none of it applies. (Guidance for SteamVR-native headsets is on the way.)

Virtual Desktop is paid software. [Free alternatives](/reference/glossary#virtual-desktop-vd) like ALVR, Steam Link, and Meta Horizon Link exist, but the settings below are specific to VD.
{{< /aside >}}

{{< aside type="alert" title="Quest Beta version 1.34.20" >}}
On August 5, 2026, Virtual Desktop's developer announced a new beta release. Among many other things, it adds USB support and includes a workaround for a bug in Meta's Quest video decoders that causes the frame rate to hiccup after 20–30 minutes of continuous streaming. (Meta claims to be working on it, but they seem not to be in a big hurry.) Check out the `#announcements` channel in the {{< discord "hBCcKNbX" >}}Virtual Desktop Discord{{< /discord >}} for installation instructions.
{{< /aside >}}

## First, the runtime (PC app)

Before chasing frames, make sure Virtual Desktop hands Skyrim off to the right runtime: **VDXR**. That setting is in the PC app, as mentioned on the [OpenComposite (Unleashed)](/performance/open-composite/) page. Set that before you start tuning anything else.

{{< caption name="vd-pc-runtime" type="webp" >}}
The PC app's **Options** screen holds the **OpenXR Runtime** setting. Set it to **VDXR**.
{{< /caption >}}

## Settings to know

Virtual Desktop has a lot of other performance settings to tweak. Here are some of the biggest.

{{< aside type="btw" title="A moving target" >}}
Virtual Desktop updates often, and the exact tier names, codecs, and other values drift from version to version. What's written here is a snapshot of a point in time.
{{< /aside >}}

{{< disclosure title="Preferred Codec (PC)" >}}

{{< caption name="vd-pc-codec" type="webp" >}}
Preferred Codec appears on the PC app's **Options** screen.
{{< /caption >}}

Codec choice is not primarily about the GPU load, but rather about clarity and latency. Personal taste definitely plays a role here, so don't be afraid to experiment with the various options.

- **HEVC** is a reasonable default if your video card or headset can't do AV1. There's little reason to pick HEVC over AV1 if you have the option.
- **AV1** looks better at the same bitrate, and it's better at holding off color banding in dark scenes (not that Skyrim has any of those). It requires a Quest 3 (or newer, if there ever is such a thing) _and_ an AV1-capable encoder&mdash;NVIDIA RTX 40-series, AMD RX 7000-series, or Intel Arc.
- **H.264+** is has to run at a higher bitrate (demanding more of your network) to match what HEVC and AV1 manage with less. Its upside is the lowest decode latency and crisper details than AV1 in certain circumstances. AV1 can go soft on things like foliage, where a high-bitrate H.264+ stream (say, 400 Mbps) better retains the fine details. If your network can handle it, you may want to give that a try.
{{< /disclosure >}}

{{< disclosure title="Field of View (PC)" >}}

{{< caption name="vd-pc-fov" type="webp" >}}
The FOV sliders are in the **Advanced** tab.
{{< /caption >}}

Inside the PC app's {{< btn-inline >}}Advanced{{< /btn-inline >}} tab are two ~~wolves~~ sliders: {{< btn-inline >}}Horizontal FOV Tangent{{< /btn-inline >}} and {{< btn-inline >}}Vertical FOV Tangent{{< /btn-inline >}}. They control how wide of a <abbr title="field of view">FOV</abbr> actually gets rendered, and they default to **100** (your headset's full width). Dial them down to around **90** and your GPU renders fewer pixels out toward the edges of your vision, for a decent performance boost.

{{< aside type="btw" title="A feature, not a bug!" >}}
Losing a sliver of your peripheral vision sounds like a downside until you remember your character is, in all likelihood, wearing a helmet. A slightly narrower view is arguably _more_ immersive, not less!
{{< /aside >}}

{{< /disclosure >}}

{{< disclosure title="Bitrate (HMD)" >}}
The bitrate determines how clear the image looks crossing your network. (Blocky or smeary motion is more of a bitrate issue than a graphics performance one.) With HEVC or AV1, somewhere around **100&ndash;150 Mbps** over Wi-Fi 6/6E is a common sweet spot. H.264+ can go much higher if your connection is rock-solid, though past around **400 Mbps** the clarity-for-latency trade-off may stop seeming to be worth it.

If you set a high bitrate by hand, switch off **Automatically adjust bitrate** in the PC app (**Options** screen), or VD will likely lower it again on its own. Blocky or smeary motion is more of a bitrate issue (or a SpaceWarp side-effect), not a performance one. Push the bitrate higher if your router can take it, and back off if you start seeing stutter. (A dependable network matters more than anything else here. A general guide to wireless streaming is on the way soon.)
{{< /disclosure >}}

{{< disclosure title="VR Graphics Quality (HMD)" >}}
This sets the **render resolution**: how many pixels your GPU outputs each frame before Virtual Desktop encodes and streams them to your headset. Bitrate is about the network, and this one is about the pixels. The options are **Potato**, **Low**, **Medium**, **High**, **Ultra**, **Godlike**.

**High** is a reasonable starting point for MGO. Drop to **Medium** if you've exhausted other frame-saving options and still need more. Treat **Ultra** and **Godlike** as something for folks with video cards that cost as much as a car. Whatever you choose, upscaling helps: Use the options in [Community Shaders](/performance/community-shaders) (or [OCU](/performance/open-composite)) to render the scene internally at a lower resolution and reconstruct it up to whatever tier you pick, so you can aim higher for less render cost[^1]. Just remember to upscale in one place, never both.

[^1]: Upscaling saves _render cost_, but encode/network/decode still scales with output resolution.
{{< /disclosure >}}

{{< disclosure title="VDXR Render Resolution (PC)" >}}
A second resolution control, in the PC app's {{< btn-inline >}}Advanced{{< /btn-inline >}} tab, that scales the render resolution for the VDXR runtime specifically. **Leave it at 100%** unless you have a specific reason not too. It compounds with the VR graphics quality tiers and any other upscaling you use, so it's easy to end up with a super-high target resolution that you didn't intend if you're not careful. So, generally speaking, just use the graphics quality tiers for this.
{{< /disclosure >}}

{{< disclosure title="Synchronous Spacewarp (HMD)" >}}
SSW, Virtual Desktop's version of motion smoothing, generates extra frames on the headset to paper over a less-then-smooth frame rate. Leave it on **Automatic** and it engages when you can't hit your refresh rate; **Always enabled** leaves it always synthesizing up from half of your target FPS (a locked 45 fps becomes a smooth-feeling 90). Never run it alongside OCU's ASW or any other frame-gen tech, though. Pick one.
{{< /disclosure >}}

{{< disclosure title="Refresh Rate (HMD)" >}}
Available frame rates vary from one headset to the next. Quest headsets offer **72**, **80**, **90**, and **120 Hz**. 90 is the sweet spot for many MGO players.
{{< /disclosure >}}

{{< disclosure title="Increase color vibrance (HMD)" >}}
This is a toggle in the headset app that boosts color saturation across the board. Skyrim VR players almost universally recommend leaving it off, but it's your call.
{{< /disclosure >}}

## Recommended GPU drivers

Virtual Desktop uses your GPU to compress every frame before it crosses the air, so the driver version is relevant beyond raw graphics performance. The Virtual Desktop team keeps a list of the versions they've found most reliable. These are their picks as of **April 8, 2026**. For up-to-date recommendations, check the `#announcements` channel on the {{< discord "hBCcKNbX" >}}Virtual Desktop Discord{{< /discord >}}.

| GPU | Recommended driver |
| --- | --- |
| NVIDIA RTX 30 / 40 Series | {{< ext "https://nvidia.custhelp.com/app/answers/detail/a_id/5750/~/geforce-hotfix-display-driver-version-581.94" >}}581.94 (hotfix){{< /ext >}} |
| All other NVIDIA GPUs | {{< ext "https://www.nvidia.com/en-us/geforce/drivers/" >}}Latest{{< /ext >}} |
| AMD RX 400 / 500 / Vega | {{< ext "https://www.guru3d.com/download/amd-radeon-adrenalin-edition-20-10-1-driver-download/" >}}20.10.1{{< /ext >}} |
| AMD RX 5000 / 6000 | {{< ext "https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-25-3-1.html#Downloads" >}}25.3.1{{< /ext >}} |
| AMD RX 7000 / 9000 | {{< ext "https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-3-1.html#Downloads" >}}26.3.1{{< /ext >}} |

{{< aside type="btw" title="The Virtual Desktop Discord" >}}
If you're having trouble with Virtual Desktop, or you just want to get started with it, go straight to the source: Virtual Desktop's {{< discord "hBCcKNbX" >}}Discord{{< /discord >}} has setup tutorials (`#start-here`), troubleshooting steps, and support channels (`#general-support-forum`, `#general-support`, `#quest-support`).
{{< /aside >}}
