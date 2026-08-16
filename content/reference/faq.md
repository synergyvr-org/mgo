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

{{< disclosure title="Why doesn't brawling work?" >}}
Skyrim's brawls have two requirements that are hard to see in VR. First, you can't have anything else equipped, even sheathed&mdash;and a weapon that you've holstered on your VRIK body may still be equipped as far as the game is concerned. Unequip your hands for real: the [Spell Wheel](/mod-highlights/spell-wheel)'s center orb does it swiftly, no menu required. Second, your fists have to be _drawn_, as silly as that sounds, so use the same button that readies a weapon.

With VRIK, empty hands look identical regardless of whether they're properly prepped for pugilism, so glance at your follower. If their weapon is out, you're in fighting stance.

Tired of checking? Enable {{< nexus 182410 >}}VRIK Closed Fist{{< /nexus >}} in **OPTIONAL Mods → Combat & Magic** (see [Onboarding](/start/onboarding#combat--magic)) and your hands ball up into fists when they're drawn.
{{< /disclosure >}}

{{< disclosure title="How do I swap spells without opening the menu?" >}}
 Use [Spell Wheel VR](/mod-highlights/spell-wheel)! In most control schemes, hold {{< control name="grip" >}} and pull {{< control name="trigger" >}} on the same hand to open the Spell Wheel. You can also use it to grab or use weapons, shields, potions, and more.
{{< /disclosure >}}

{{< disclosure title="Why are my health and magicka bars on my wrist?" >}}
Because MGO moved them there on purpose. {{< nexus 49657 >}}Clear HUD VR{{< /nexus >}} takes the vanilla bars out of your floating field of view, and [Spell Wheel VR](/mod-highlights/spell-wheel) puts the readouts on your forearm instead, where you can check them with a glance like a wristwatch. (If you're using SunHelm, hunger and thirst show up there too.)

**To turn the wrist bars off**, open Spell Wheel VR's MCM and disable them there.

**To bring back parts of the vanilla HUD**, you'll need to re-run Clear HUD VR's installer, because it makes those choices at install time rather than through an MCM. In MO2, right-click **Clear HUD VR** in the left pane and choose {{< btn-inline >}}Reinstall Mod{{< /btn-inline >}}, then work through the FOMOD wizard again and pick different options. (See [Installing a Mod](/tutorials/installing-a-mod) for what a FOMOD wizard looks like.) Doing both is fair game: keep the vanilla health bar and drop the wrist bars, or any other combination you like.
{{< /disclosure >}}

{{< disclosure title="How should I save?" >}}
Make regular saves (ideally indoors), and always before changing your mod list. In the MGO 4.0 beta, quick saves and auto-saves are actually full saves, so they're safe to use. You can also add a _save game_ orb to the [Spell Wheel](/mod-highlights/spell-wheel), so you don't even have to dig through a menu to do it.
{{< /disclosure >}}

{{< disclosure title="Why can't I open the door to Markarth?" >}}
Dwemer-style doors have levers, so instead of pointing at them and hitting _Interact/Activate_, simply pull the lever! That's {{< nexus 161676 >}}Interactive Activators VR{{< /nexus >}} at work.
{{< /disclosure >}}

{{< disclosure title="Can I turn on enemy healthbars?" >}}
{{< nexus 17812 >}}Minimal Enemy Healthbar VR{{< /nexus >}} includes variations that make the healthbars smaller, and that hide them altogether. Both are included in MGO. To get healthbars to appear again, disable **Minimal Enemy Healthbar VR - Remove Enemy Health Bar**, which you'll find under {{< btn-inline >}}START HERE{{< /btn-inline >}} → {{< btn-inline >}}OPTIONAL Mods{{< /btn-inline >}} → {{< btn-inline >}}Immersion{{< /btn-inline >}}.
{{< /disclosure >}}

{{< disclosure title="Why can't I power attack?" >}}
This one is specific to **MGO 4.0 RC2 and earlier**, which included the optional {{< nexus 170889 >}}Fake Edge VR{{< /nexus >}}. With it enabled, power attacks only fire while the weapon is _equip-locked_. Squeeze the {{< control name="trigger" >}} four times within two seconds to lock it, and then hold {{< control name="trigger" >}} while swinging your weapon to power attack as usual.

RC3 dropped Fake Edge VR in favor of {{< nexus 186335 >}}Physical Collision VR{{< /nexus >}}, which doesn't ask anything extra of you. Your weapons attack as usual.
{{< /disclosure >}}

## Making it yours

{{< disclosure title="Can I add my own mods?" >}}
During the beta, the team asks that you don't, so that feedback reflects the list as built.

As the final version of 4.0 gets closer, this site will be updated with several tutorials related to making your own changes to the list.
{{< /disclosure >}}

{{< disclosure title="Will you add alternative NPC appearances, like Pandorable's NPCs?" >}}
Probably, but not yet. At the moment, the team is focused on fixing bugs and conflicts. Once those essentials are worked out, we'll start testing community suggestions, including NPC options, more OBody presets, etc.
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

{{< disclosure title="My frame rate tanks after 20–30 minutes on my Quest. What gives?" >}}
Almost certainly not you. As of April 2026, a bug in Meta's Quest video decoders makes Virtual Desktop's frame rate hiccup after 20–30 minutes of continuous streaming, worsening over time. There's no fix yet, but changing your codec, toggling between desktop and VR mode, or reconnecting buys you roughly another 20 minutes. See [Virtual Desktop](/performance/virtual-desktop) for the details.
{{< /disclosure >}}

{{< disclosure title="Where do I get help?" >}}
The {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}}. If you're reporting a crash, post in {{< btn-inline >}}#mgo-4-beta-support{{< /btn-inline >}} and attach the log and say what you were doing.
{{< /disclosure >}}
