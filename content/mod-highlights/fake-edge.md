+++
title = 'Fake Edge VR'
weight = 50
+++

{{< nexus 170889 >}}Fake Edge VR{{< /nexus >}} is an SKSE plugin that builds on {{< nexus 43930 >}}HIGGS{{< /nexus >}} to add weapon collisions in VR. Instead of your blade phasing through clutter, scenery, shields, etc., it bumps into them. To achieve this without breaking melee combat, it uses the {{< control name="trigger" >}} to decide whether to treat your equipment as solid physical object or a combat-ready weapon at any given time.

{{< aside type="alert" title="Enable and sync" >}}
Fake Edge VR is optional and disabled by default. Enable it in MO2's **OPTIONAL Mods → Immersion** section (see [Onboarding](/start/onboarding)), and then run Sync Plugins to keep the list on the right in sync with the list on the left ({{< btn-inline >}}Tools{{< /btn-inline >}} → {{< btn-inline >}}Tool Plugins{{< /btn-inline >}} → {{< btn-inline >}}Sync Plugins{{< /btn-inline >}} in MO2).
{{< /aside >}}

This is **Fake Edge**: When you equip a one-handed[^1] weapon, it's immediately HIGGS-grabbed in your hand as a physical object, and the {{< control name="trigger" >}} decides what state it's in.

* **Hold trigger:** the weapon is _equipped_. You're ready to fight (damage, enchantments, etc.).
* **Release trigger:** the weapon is _grabbed_. It has full physics and collides with everything, but hitting an enemy with it does about as much good as hitting them with a cheese wheel.

Most of the time, your weapon is a physical object like anything else—a plate, a loaf of bread, etc. When you're ready to give an enemy a good _whack_, just hold {{< control name="trigger" >}}. Transitions are silent and nearly instant.

## Equip-locking

Holding the trigger through a long fight gets annoying, and some moves (notably power attacks) won't work unless the weapon is locked to its equipped state. To equip-lock a weapon, squeeze the {{< control name="trigger" >}} four times within two seconds. Squeeze four times again to unlock. The lock also clears on its own when you drop or unequip the weapon, load a save, or open a menu.

{{< aside type="alert" title="Unlimited Power*" >}}
"If you're always holding the trigger, how do you power attack?" Great question (although I did kind of just answer it). **Power attacks only work while a weapon is equip-locked.** Once it's equip-locked, hold trigger to power attack, as always.

\*OK, so it's not _unlimited_ power. It still consumes stamina.
{{< /aside >}}

## Dual wielding

Each hand's trigger controls only that hand's weapon. Your two hands work independently, so dual wielding works the way you'd hope.

* Hold both triggers for full dual-wield combat.
* Release both triggers, and your two weapons physically collide with each other. Cross them in an X to block. (This works alongside {{< nexus 28456 >}}Dual Wield Block VR{{< /nexus >}}.)
* Hold one and release the other to attack with one weapon and... drag the other weapon along the wall or something. I don't know.

## Shields

Only weapons require the trigger rigmarole. Your shield stays equipped as usual. Bring your sword behind your shield, and it rests against the shield instead of clipping through it. Sword-and-board, babyyyyy!

## Options in the INI

A couple of Fake Edge's features are opt-in through its {{< file file-lines >}}.ini{{< /file >}} file. (See [Editing INI Files](/reference/editing-inis).)

* **Staff collisions.** Out of the box, staves behave as usual. Turn this option on to give them collisions like your other weapons whenever you're not holding the {{< control name="trigger" >}} to cast.
* **Shield-bash Berserker Rage.** Bash your shield three times to trigger a Berserker Rage. It's off by default, so flip it on in the INI if you want it.

[^1]: There is a **2H Weapons Unlocked** add-on for two-handed weapons. That will likely be added as an option once there has been time to test it with MGO more thoroughly.
