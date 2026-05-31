+++
title = 'Marksmanship'
weight = 30
+++

Skyrim VR included a "Realistic Bow Aiming" option out-of-the-box, and it was actually pretty good! Of course it still wasn't good enough for the sickos who make mods. The following mods make archery (and whatever you call "using a crossbow") even better in Mad God's Overhaul:

* {{< nexus 28524 >}}Simple Realistic Archery VR{{< /nexus >}}
* {{< nexus 117254 >}}Seamless Arrow Nocking VR{{< /nexus >}}
* {{< nexus 26447 >}}Locational Damage SKSE VR{{< /nexus >}}
* {{< nexus 139152 >}}Immersive Crossbow Reload VR{{< /nexus >}}
* {{< nexus 20364 >}}Haptic Skyrim VR{{< /nexus >}}

So with _aiming_ being pretty good in vanilla, the community needed something else to obsess over. They chose nocking arrows, and we're all better off for it.

In vanilla, an arrow remains in your dominant hand after each shot. You have to hold {{< control name="trigger" >}} as you nock each arrow, but you never have to grab a _new_ arrow. With {{< nexus 28524 >}}Simple Realistic Archery VR{{< /nexus >}}, you need to reach behind your shoulder and grab a new arrow with {{< control name="trigger" >}} (or another button that you configure in the MCM[^1]) after each shot. {{< nexus 117254 >}}Seamless Arrow Nocking VR{{< /nexus >}} allows you to keep {{< control name="trigger" >}} held down as you nock the new arrow, rather than needing to squeeze it a second time. 

In vanilla Skyrim, it doesn't matter where on the body your shots land. Damage is damage. {{< nexus 26447 >}}Locational Damage SKSE VR{{< /nexus >}} by Ifrazer (inspired by Felisky's {{< nexus 91505 >}}similarly-named Flatrim mod{{< /nexus >}}) applies different damage multipliers for the head, body, legs, and arms. It works with arrows and spells (but not melee[^2]), and the multipliers for each body part are configurable via the mod's INI file.


[^1]: You can even use the MCM to bind different arrows to different buttons.

[^2]: The Flatrim mod applied to melee and archery, but _not_ spells. The VR mod works on archery and spells, but _not_ melee.