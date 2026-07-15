+++
title = 'Melee Combat'
weight = 20
+++

If you want to fight, you're going to have to swing your arms around like a goofball, so it may as well feel like it has some impact.

When Skyrim VR shipped, the consensus seemed to be that melee combat was so dull that players were better off ignoring it entirely in favor of archery and magic. With mods, it's a different story.

It took some time, but modders have overhauled Skyrim VR's melee combat to the point that it bears little resemblance to vanilla mechanics. All of the following mods impact the approach to combat in one way or another, and they're all included in Mad God's Overhaul:

* {{< nexus 23416 >}}VRIK{{< /nexus >}}
* {{< nexus 66025 >}}PLANCK{{< /nexus >}}
* {{< nexus 43930 >}}HIGGS{{< /nexus >}}
* {{< nexus 170889 >}}Fake Edge VR{{< /nexus >}}
* {{< nexus 31374 >}}Weapon Throw VR{{< /nexus >}}[^1]
* {{< nexus 26447 >}}Locational Damage SKSE VR{{< /nexus >}}
* {{< nexus 28456 >}}Dual Wield Block VR{{< /nexus >}}
* {{< nexus 44442 >}}Crouch To Dodge VR{{< /nexus >}}
* {{< nexus 34549 >}}Blade and Blunt{{< /nexus >}}/{{< nexus 120494 >}}Blade and Blunt VR{{< /nexus >}}

Here are some of the changes from vanilla to MGO:

* Hit detection is far more accurate.
* Enemy animations are affected by the speed and direction of your attacks.
* You can grab enemies with your hands.
* You can parry attacks.
* Power attacks no longer apply twice.
* Shield bashing costs stamina (as it does in Flatrim).
* You can [throw weapons](/mod-highlights/weapon-throw) (with optional auto-return).
* You can store weapons in body holsters.

## Physics: It matters now![^2]

In vanilla Skyrim VR, you can swing a weapon using motion controls rather than simply pressing a button to attack, but you may as well be button mashing, since the speed and direction of your swings make no difference.

With PLANCK, hit detection is calculated completely differently, in a manner that I would describe as simply feeling far more natural. Enemies also physically react to the direction and velocity of each hit. Contrary to popular belief, swinging faster or harder still doesn't do more _damage_, and power attacks are still activated by holding down the {{< control name="trigger" >}} while attacking. PLANCK does _not_ allow you to perform a power attack just by swinging harder[^3].

PLANCK also fixes several VR-specific bugs from vanilla. Shield bashing now has a stamina cost, just as it does in Flatrim (no more infinite staggering), and each power attack no longer registers twice. Animation events are triggered much more like they are in Flatrim, which has implications for enemy behavior and also happens to improve compatibility with some non-VR mods.

Thanks to HIGGS, you can grab enemies with your hands using either {{< control name="grip" >}} button. PLANCK builds upon this feature, allowing you to activate an ememy's ragdoll by pulling them by the foot or ankle, or by grabbing and yanking their body in any direction and letting go[^4], at the cost of some stamina. Even if you don't yoink them to the point of ragdolling, you can still grab them with one hand and attack them with the other. Why kill your foes quickly when you can humiliate them first?

You should check out the Nexus page for {{< nexus 66025 >}}PLANCK{{< /nexus >}}. It's pretty feature-packed, and you can configure certain aspects by editing `activeragdoll.ini`. We'll be looking more closely at HIGGS in the [Interaction](interaction) section.

[^1]: I suppose it stops being "melee combat" once you start throwing stuff.
[^2]: Physics: It's matter now! (Get it?)
[^3]: I don't care what AI told you.
[^4]: This works on any NPC, but it's not a great way to make friends.