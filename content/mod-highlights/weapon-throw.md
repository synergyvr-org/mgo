+++
title = 'Weapon Throw VR'
weight = 30
+++

If throwing an axe in a bandit's face from across the room is wrong, then I don't want to be right! {{< nexus 31374 >}}Weapon Throw VR{{< /nexus >}}, another mod by Shizof, makes that possible. It lets you throw whatever you have equipped: any vanilla or mod-added melee weapon, shield, or torch. Even bound weapons become potential projectiles.

{{< aside type="btw" title="Ready for action" >}}
Weapon Throw VR is part of MGO's combat setup, and it's on by default. The [Melee Combat](/how-to-play/combat) page mentions it in passing, but this is the full rundown.
{{< /aside >}}

## How to throw

The motion is exactly what your instincts tell you: **hold the throw button, swing your hand in the direction you want the weapon to go, and release the button at the right time**, like throwing a real object. Throw with your left hand, your right, or both.

The throw button defaults to the {{< control name="trigger" >}} (set per hand, and changeable in the MCM). Your throwing speed matters, too: a harder throw sends the weapon flying faster, and it hits harder.

With {{< nexus 26447 >}}Locational Damage SKSE VR{{< /nexus >}}, headshots even count.

{{< aside type="btw" title="Mind your stamina" >}}
Throwing isn't free (just like freedom!). It costs stamina. How much is configurable per weapon type in the MCM. Damage comes from the weapon's base damage times a multiplier (also configurable per wepon type in the MCM), and any enchantment or poison on the blade still applies.
{{< /aside >}}

## Return of the Deadeye

Excuse the pun.[^1]

Weapon Throw has two modes, chosen per weapon type in the MCM.

**Auto-Return** is the default (MGO ships with the mod's _Thor's Hammer_ preset[^2]). Throw your weapon, then press the button again to call it back to your hand, complete with a satisfying whoosh and a bit of visual flair. You can recall it mid-flight, after it's buried in a frost troll—whenever you like. Leave it lying around, and it flies back on its own after a few seconds. It re-equips itself as soon as it's back in your hand.

**Classic** mode turns the recall off. Thrown weapons stay where they land, and you collect them off the ground (or out of the corpse of whoever was holding still) the way you'd gather anything else. NPCs can even loot your weapons and turn them against you. There are MCM options to auto-equip a weapon when you pick it up, or to re-equip another of the same type from your inventory right after a throw, so you're not left empty-handed.

{{< aside type="btw" title="Plays nice with holsters" >}}
Because it works with {{< nexus 23416 >}}VRIK{{< /nexus >}}, you can pluck a dagger from a body holster, throw it, and grab the next one straight from the holster. In Auto-Return mode the holster remains assigned even after you've thrown your last one, since it's coming right back.
{{< /aside >}}

## Throws of passion

Get it?[^3]

Throws weapons are actual projectiles, and their behavior is highly configurable (if you haven't noticed already). All of the following are configurable in the MCM:

* **Impact force** knocks enemies back.
* **Weapons spin** in flight based on how you release them.
* **Auto-Aim** nudges a throw toward the nearest target.

There are settings for weapon types and materials, minimum swing speed needed (for each hand), haptics, and effects. There are presets too. As usual, the {{< nexus 31374 >}}Nexus page{{< /nexus >}} documents all of it.

{{< aside type="btw" title="The Dagger of Travel" >}}
The mod includes a craftable **Dagger of Travel**. Throw it, press the button, and you teleport to wherever it hit. Other modded weapons can take advantage of this behavior via a keyword as well.
{{< /aside >}}

For where Weapon Throw fits alongside the rest of MGO's combat overhaul, head back to the [Melee Combat](/how-to-play/combat) page.

[^1]: Sorry not sorry.

[^2]: I still think it should be called "Richter Belmont's Cross".

[^3]: OK, I'm genuinely sorry for that one.