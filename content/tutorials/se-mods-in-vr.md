+++
title = 'Will This SE Mod Work?'
weight = 40
hidden = true
+++

There's no separate Nexus listing for Skyrim VR. VR mods are in the Special Edition section, side by side with thousands of mods written without a moment's thought for VR (rude!). It's a lot to sift through. The good news is that many of the just-plain-SE mods work just fine in VR. Skyrim VR is based on an earlier version of SE, so most _content_ works out of the box. Incompatibility is concentrated in a few specific categories, and you can often spot them from the mod page before you download something that is certain not to work.

{{< aside type="btw" title="You can always try" >}}
If you're not sure whether an SE mod will work in VR, and no one else seems to know, follow the steps for [installing a mod](/tutorials/installing-a-mod.md) with minimal risk, and give it a shot. If it doesn't work, take it back out!
{{< /aside >}}

## The "will it work as-is" cheat sheet

**Probably**
* Mods containing nothing but **textures, sounds, and music** will work.
* **Meshes** almost always work.
* **Ordinary plugin mods** (weapons, armor, followers, quests, whole new lands) usually work as-is. An `.esp`/`.esl` full of content ought to be fine.

**Definitely not**
* **SKSE mods** (anything with a {{< file >}}.dll{{< /file >}}) require a VR-specific build. More on that below.
* **UI and HUD mods** also require VR-specific forks. That's why MGO runs SkyUI **VR** and moreHUD **VR**. The SE originals don't work in VR.
* **Anything requiring AE** is out. Skyrim VR never received the Anniversary Edition updates, so mods that only support runtime 1.6.x (or that depend on AE-exclusive Creation Club content) won't work.

There's no VR version of {{< nexus 11278 >}}Song of the Green{{< /nexus >}} from [Installing a Mod](/tutorials/installing-a-mod). There doesn't need to be. It's voice, quests, and an NPC in an ordinary plugin, and it runs just fine in VR. Most content mods are like this.

## SKSE mods

An SKSE mod's {{< file >}}.dll{{< /file >}} is compiled against a specific version of the game engine. An SE or AE build won't load in VR, no matter how nicely you ask. So when a mod's file list includes a DLL, look for evidence of a VR build:

* **A separate VR download** on the Files tab, or "VR" right in the mod's name or description.
* **VR Address Library for SKSEVR listed in the requirements.** That library (already part of MGO) is a clear signal that the mod's author built it for VR[^1].
* **"NG" in the name** ({{< nexus 77779 >}}Papyrus Tweaks NG{{< /nexus >}}, for example) often means one universal DLL that supports SE, AE, _and_ VR&mdash;but not always, so read the description to confirm that it actually says VR.

Sometimes there's a VR port of a mod that still requires the original, non-VR version. You'll see a few of these in MGO already (_powerofthree's Tweaks_ alongside _powerofthree's Tweaks VR_)

If a DLL mod shows none of the signals above, assume it doesn't work in VR. That's not pessimism[^2]. It's just the way of things.

{{< aside type="btw" title="Let the light in" >}}
Once upon a time, **ESL** plugins (and ESL-flagged plugins, also known as ESPFE plugins) didn't work in Skyrim VR. Thanks to {{< nexus 106712 >}}Skyrim VR ESL Support{{< /nexus >}}, that's no longer an issue.
{{< /aside >}}

## Special, not legendary

{{< caption name="skyrim-se-le" type="webp" >}}
Special Edition? You're on a mission! Skyrim of old? Let it grow mold!
{{< /caption >}}

You may have noticed I keep emphasizing "SE" when talking about mods that aren't specifically designed for VR, but that may work anyway. That's because mods made for the original, 2011 edition of Skyrim (also called Skyrim LE or "Oldrim") won't work in SE _or_ VR. Many have been ported to SE, in which case you'll find them in the SE section as well. But mods for just-plain-Skyrim will not work.

## Check the requirements

A mod is only as VR-ready as everything it requires, so give its requirements list the same reading. Thankfully MGO already includes VR builds of the big frameworks (PapyrusUtil VR, JContainers VR, Spell Perk Item Distributor VR, SkyPatcher, Keyword Item Distributor, Open Animation Replacer, etc.). If a requirement is already in MGO's left pane (the filter box—in MO2 or [on this very site!](/load-order)—will tell you in seconds), you should be good to go. If a requirement is an SKSE mod with no VR build, the chain breaks, and the mod breaks with it.

## Once more, with feeling

The whole routine, in order:

1. Check the **mod name** for "VR" or "NG".
2. Skim the **description** for any mention of VR. Authors who intentionally support it tend to say so.
3. Check the **Requirements** list. SKSEVR or VR Address Library? Green flag. A DLL requirement with neither? Red flag.
4. Scan the **Files tab** for a VR-specific download.
5. Check the **Mods using this mod** list for a VR variant.
6. Search the **Posts tab** for "VR." If the mod is reasonably popular, someone has likely already asked, and often someone has already answered with the verdict or a workaround.
7. Still unsure? Ask the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}}. Someone may have already tried it.

{{< aside type="alert" title="Save first" >}}
A mod that passes every check above can still surprise you in a list this size. Just because it works in VR doesn't mean in works with everything else in MGO. The habits from [Installing a Mod](/tutorials/installing-a-mod) are your safety net: a manual, indoor save before each addition, one mod at a time. And if a gamble doesn't pay off, [Removing a Mod](/tutorials/removing-a-mod) covers the walk of shame.
{{< /aside >}}

Once you think you have a winner, install it like any other mod. Head back to [Installing a Mod](/tutorials/installing-a-mod) and give your new download a good home.

[^1]: The VR Address Library gets updated _very_ frequently, and a given mod may require a specific version of the library.

[^2]: Plenty of things that I say and write _are_ pessimism, but this isn't one of the them.