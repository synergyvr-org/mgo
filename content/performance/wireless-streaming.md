+++
title = 'Wireless Streaming'
weight = 23
hidden = true
+++

A wireless headset streams every frame your PC renders over Wi-Fi, so that link is a factor your performance. An questionable connection can manifest in the form of latency, stutter, and smeary compression artifacts, and no amount of in-game tuning will fix it. This applies to any wireless connection method (Virtual Desktop, Air Link, Steam Link, ALVR), and it's worth your time to get it fixed up.

{{< aside type="btw" title="Wired? You can skip this" >}}
If you play over a Link cable or on a SteamVR-native headset, your connection is already as stable as it gets, and you can ignore this page. See [Headset Setup](/performance/headset-setup) for guidance on your situation.
{{< /aside >}}

## Wire the PC

Connect your PC to the router with an **Ethernet cable**. The only thing that should be reaching the router over Wi-Fi is your headset; the PC's side of the link should be wired. Put both ends on Wi-Fi and you've doubled the wireless hops&mdash;and the number of places interference can creep in&mdash;for no good reason.

## Give the headset its own network

Ideally, the PC-to-headset link runs on a **fast router with nothing else on it.** Every other device sharing that network&mdash;phones, TVs, a smart doorbell, someone in the next room streaming a movie&mdash;competes for airtime, and that contention lands in your game as hitches.

* **Best case:** a second router or access point used _only_ for VR, wired to your PC and kept separate from the rest of the household's traffic.
* **The router itself:** Wi-Fi 6 (802.11ax) or Wi-Fi 6E is ideal. A solid dual-band Wi-Fi 5 (802.11ac) router can still do the job, but it's the more likely bottleneck.

## Use the right band

Stream on the **5 GHz** band&mdash;never 2.4 GHz, which is slow and hopelessly crowded. If you have a Wi-Fi 6E router _and_ a headset that supports it (Quest 3, Quest Pro), the **6 GHz** band is better still: more bandwidth and far less congestion. If your router lumps both bands under one network name (band steering), split them so you can put the headset firmly on 5 or 6 GHz.

## Stay close, keep line of sight

Play in the same room as the router, with a clear line to it. Walls, distance, and anything solid between headset and router are the usual suspects behind sudden artifacting or a latency spike mid-swing. Mount or set the router up high and out in the open&mdash;not on the floor, and not tucked behind the TV.

## Watch the connection

Virtual Desktop and most streaming apps can show a live **network latency** readout or performance graph. Keep half an eye on it: you want the number low and, more importantly, _steady_. Latency that jumps when you turn your head is pointing at your signal, not your GPU.

Once the link itself is solid, the [Virtual Desktop](/performance/virtual-desktop) settings are where you fine-tune the rest.
