+++
title = 'FAQ'
weight = 87
+++

Quick answers to the questions that come up the most, with links to the full story. If yours isn't here, the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}} probably has it covered. Tap a question to expand it.

## The big ones

{{< disclosure title="When will the next version be released?" >}}
Soon®.

A release goes out when the team decides it's ready, and that can be very hard to judge until the moment it happens. When there _is_ news on the beta, it appears in the {{< btn-inline >}}#mgo-updates{{< /btn-inline >}} channel of the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}} before anywhere else. Watch that space, and you'll know the moment there's anything to know.
{{< /disclosure >}}

{{< disclosure title="Will MGO run on my machine?" >}}
Probably, if you have a recent GPU with at least 12 GB of VRAM, 32 GB of system memory, and 400 GB of free NVMe storage. The [Requirements](/start/requirements) page has the full checklist, including settings you'll need to change and things you'll need to install ahead of time.
{{< /disclosure >}}

## Getting started

{{< disclosure title="Why is the first launch taking so long?" >}}
Community Shaders is compiling its shader cache, and the first time takes a while. It's probably not a hang, and the progress bar makes it appear that it's going to take far longer than it actually will. See [Compiling Shaders](/first-launch/compiling-shaders). (If it takes more than 30 minutes, then you may have an actual problem.)
{{< /disclosure >}}

{{< disclosure title="I created my character, and now I'm drowning in notifications. What the heck?" >}}
That's MCM Recorder configuring mod settings for you. Try to resist the temptation to fiddle around in menus until it stops. See [Alternate Start](/first-launch/alternate-start).
{{< /disclosure >}}

{{< disclosure title="Can I still play Skyrim's original opening? I'm finally awake, and I like it when people point that out." >}}
Yes, it's an option in both Live Another Life (4.0 RC2 and earlier) and Alternate Perspective (4.0 RC3 and later).

In [Alternate Start- Live Another Life](/first-launch/alternate-start/) (all MGO versions up to and including 4.0 RC2), the vanilla start is clearly labeled: **I got caught crossing the border illegally. [Vanilla Start]**
{{< /disclosure >}}

{{< disclosure title="Do pirated copies really not work?" >}}
They really don't. You're asking for a friend, I presume.

MGO requires a legal Steam copy of Skyrim VR, and several of the list's core mods refuse to work with cracked versions anyway. See [Requirements](/start/requirements).

It fails in several different places. Wabbajack verifies the game's files against the exact fingerprints of the legitimate versions before it will install the list, and a cracked copy's altered files will not pass that check. If you somehow get past that, VRIK will refuse to patch the game, and it will likely crash at startup (with a {{< file file-lines >}}vrik.log{{< /file >}} that reads "Unable to patch SkyrimVR"). If you get past _that_, other stuff won't work. Tell your friend to buy the game. Skyrim VR goes on sale pretty often.
{{< /disclosure >}}

## In the game

{{< disclosure title="Why won't my torch light?" >}}
Torches start unlit. Hold a fire spell near the torch's head or hold the torch to a candle, brazier, campfire, etc. to light it. See [Interaction](/how-to-play/interaction).
{{< /disclosure >}}

{{< disclosure title="Why can't I power attack?" >}}
If you've enabled Fake Edge VR, power attacks only fire while the weapon is _equip-locked_. Squeeze the {{< control name="trigger" >}} four times within two seconds to lock it, and then hold {{< control name="trigger" >}} while swinging your weapon to power attack as usual. See [Fake Edge VR](/mod-highlights/fake-edge).
{{< /disclosure >}}

{{< disclosure title="Why doesn't brawling work?" >}}
Skyrim's brawls have two requirements that are hard to see in VR. First, you can't have anything else equipped, even sheathed&mdash;and a weapon that you've holstered on your VRIK body may still be equipped as far as the game is concerned. Unequip your hands for real: the [Spell Wheel](/mod-highlights/spell-wheel)'s center orb does it swiftly, no menu required. Second, your fists have to be _drawn_, as silly as that sounds, so use the same button that readies a weapon. Since empty hands look identical regardless of whether they're properly prepped for pugilism, glance at your follower. If their weapon is out, you're in fighting stance.
{{< /disclosure >}}

{{< disclosure title="How do I swap spells without opening the menu?" >}}
 Use [Spell Wheel VR](/mod-highlights/spell-wheel)! In most control schemes, hold {{< control name="grip" >}} and pull {{< control name="trigger" >}} on the same hand to open the Spell Wheel. You can also use it to grab or use weapons, shields, potions, and more.
{{< /disclosure >}}

{{< disclosure title="How should I save?" >}}
Make regular saves (ideally indoors), and always before changing your mod list. In the MGO 4.0 beta, quick saves and auto-saves are actually full saves, so they're safe to use. You can also add a _save game_ orb to the [Spell Wheel](/mod-highlights/spell-wheel), so you don't even have to dig through a menu to do it.
{{< /disclosure >}}

## Making it yours

{{< disclosure title="Can I add my own mods?" >}}
During the beta, the team asks that you don't, so that feedback reflects the list as built.

As the final version of 4.0 gets closer, this site will be updated with several tutorials related to making your own changes to the list.
{{< /disclosure >}}

{{< disclosure title="Should I run LOOT to sort my plugins?" >}}
No, you should not. MGO's plugins are already sorted, and LOOT would undo that work. The list itself [warns you about this](/start/onboarding).
{{< /disclosure >}}

{{< disclosure title="How do I update MGO itself?" >}}
New versions go out as whole Wabbajack releases, announced in the Discord's {{< btn-inline >}}#mgo-updates{{< /btn-inline >}} channel, but they are not yet in Wabbajack's in-app gallery. You'll have to download them manually. Point Wabbajack at the same installation and downloads folders you used last time. Your save files will be preserved, though beta releases are unlikely to be backwards-compatible. Beta updates will be announced and posted in the {{< btn-inline >}}#mgo-updates{{< /btn-inline >}} channel of the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}}.
{{< /disclosure >}}

## When things go wrong

{{< disclosure title="Performance is rough. Where do I start?" >}}
More to come in this department, but for the moment, follow the [Performance](/performance) chapter, in order: the presets you picked during [Onboarding](/start/onboarding), then [VRAMr](/performance/vramr) if your GPU has under 16 GB of VRAM, then [Community Shaders](/performance/community-shaders) tuning.
{{< /disclosure >}}

{{< disclosure title="Where do I get help?" >}}
The {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}}. If you're reporting a crash, post in {{< btn-inline >}}#mgo-4-beta-support{{< /btn-inline >}} and attach the log and say what you were doing.
{{< /disclosure >}}
