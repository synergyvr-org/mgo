+++
title = "What's New in 4.0"
weight = 5
+++

MGO 4.0 is a big rebuild. About 70% of the list carries over from 3.8.8.1, and the rest is new: a performance and crash-fix foundation, updated shaders, a modernized VR UI, many more VR interactions, reworked combat, a revised set of gear, NPCs, creatures, and audio, and a step-by-step setup. Optional AI tools are included, too, but they're off by default. Here's the full rundown, category by category.

{{< aside type="btw" title="Still a beta" >}}
4.0 is still in beta, so adding your own mods to it isn't recommended. See the note on the [home page](/) for where to find the beta builds.
{{< /aside >}}

## Performance & stability

- A new engine and performance core: {{< nexus 194164 >}}Skyrim Performance Solution (SPS){{< /nexus >}}, {{< nexus 62089 >}}Engine Fixes VR{{< /nexus >}} (and its Part 2), {{< nexus 194231 >}}Hitch Hunter and Fixes{{< /nexus >}}, {{< nexus 174643 >}}Faster Decompression{{< /nexus >}}, {{< nexus 178777 >}}Faster Cell Lookup{{< /nexus >}}, and {{< nexus 196070 >}}Faster Objects{{< /nexus >}}.
- New crash fixes and loggers: {{< nexus 194392 >}}Havok Solver Crash Fix{{< /nexus >}}, {{< nexus 181445 >}}Collision Sentinel{{< /nexus >}}, and {{< nexus 172272 >}}Tullius CTD Logger{{< /nexus >}}.
- Troned's Community Shaders fork is now {{< nexus 166950 >}}Community Shaders Expanded (CSX){{< /nexus >}}. It also replaces the separate Community Shaders add-ons the list used to carry, and comes with _Performance_, _Balanced_, and _Quality_ presets. (See [Community Shaders](/performance/community-shaders).)
- [VRAMr](/performance/vramr) optimizes the list's textures.
- VR Performance Kit and VR FPS Stabilizer are gone.

## Setup

- A new step-by-step setup flow right in MO2: startup notes, then your choice of VR runtime ({{< nexus 171182 >}}OpenComposite Unleashed{{< /nexus >}} or SteamVR), then performance options. [Onboarding](/start/onboarding) walks through it.
- Controller binding options for SteamVR: {{< nexus 53186 >}}Kvite{{< /nexus >}}, {{< nexus 23416 >}}VRIK Standard{{< /nexus >}}, and {{< nexus 49650 >}}VRIK Easy Shout{{< /nexus >}}.
- Optional _Quality_ versions of Grass Density and LOD Distance.

## VR UI & navigation

- New UI frameworks: {{< nexus 148718 >}}Prisma UI{{< /nexus >}}, {{< nexus 120352 >}}SKSE Menu Framework{{< /nexus >}}, {{< nexus 183466 >}}ImGui VR Helper{{< /nexus >}}, and {{< nexus 49127 >}}NL_MCM{{< /nexus >}}.
- [NavigateVR](/mod-highlights/navigate-vr)'s new {{< nexus 189442 >}}map framework{{< /nexus >}} with a whole stack of map packs, plus {{< nexus 189452 >}}Palm Compass VR{{< /nexus >}}, {{< nexus 189884 >}}Compass Navigation Overhaul VR{{< /nexus >}}, and an {{< nexus 5804 >}}overhauled world map{{< /nexus >}}.
- {{< nexus 122456 >}}Font Overhaul{{< /nexus >}} and {{< nexus 15558 >}}Spell Organizer{{< /nexus >}}.

## VR interaction

- {{< nexus 168553 >}}VR Climbing{{< /nexus >}}, {{< nexus 164902 >}}SpellBender VR{{< /nexus >}}, {{< nexus 169833 >}}Pull Arrows VR{{< /nexus >}}, {{< nexus 128285 >}}Throwing Things VR{{< /nexus >}}, {{< nexus 140404 >}}Interactive Torches{{< /nexus >}}, {{< nexus 166560 >}}Interactive Waters{{< /nexus >}}, {{< nexus 144669 >}}Interactive Instruments{{< /nexus >}}, {{< nexus 186754 >}}Immersive Harvesting{{< /nexus >}}, and {{< nexus 4541 >}}Immersive Lockpicking{{< /nexus >}}.
- {{< nexus 29710 >}}Immersive Gathering{{< /nexus >}} replaces Realistic Mining, Immersive Tree Chopping, and VR Refit.
- Combat with more physical heft: {{< nexus 191124 >}}Lethal Unarmed VR{{< /nexus >}}, {{< nexus 186335 >}}Physical Collision VR{{< /nexus >}}, and {{< nexus 184223 >}}Immersive Weapon Penetration{{< /nexus >}}.

## Combat & difficulty

- {{< nexus 154357 >}}Skybane{{< /nexus >}} (an armor and resistance overhaul), {{< nexus 187578 >}}Accuracy{{< /nexus >}} (localized damage), {{< nexus 155430 >}}Valorbound{{< /nexus >}} (replacing Arena), {{< nexus 19608 >}}Encounter Zones Unlocked NG{{< /nexus >}}, {{< nexus 117827 >}}Blade and Blunt Adjusted Difficulty Scaling{{< /nexus >}}, and {{< nexus 195276 >}}Fluid Motion{{< /nexus >}}.
- Animations: {{< nexus 103577 >}}Animated Armoury (OAR){{< /nexus >}}, {{< nexus 76388 >}}Goetia Conditional Shouts{{< /nexus >}}, and {{< nexus 28831 >}}Neutral VR Animations{{< /nexus >}}. The Leviathan and Vanargand packs are trimmed down.
- Out: Combat Pathing Revolution, Pseudo Physical Weapon Collision, Auto Sneak and Jump VR, and Simple Beheading.

## Magic

- {{< nexus 121513 >}}Magicka Surge{{< /nexus >}}, {{< nexus 35464 >}}A Guiding Light{{< /nexus >}}, {{< nexus 145018 >}}V.A.E.R.{{< /nexus >}}, {{< nexus 70400 >}}Master Spells Runes{{< /nexus >}}, and {{< nexus 50197 >}}3D Casting FX{{< /nexus >}}.
- Fourteen older spell packs are gone, including Winter Wonderland, Wildwaker, Obscure, Elemental Mastery, Constellation, Necrom, Necrotic, Inquisition, Arcane, and Abyss.

## Gear

- The armor and clothing set is largely swapped, with Styles of Skyrim, {{< nexus 175319 >}}Faultier's PBR Armors and Clothes{{< /nexus >}}, and Cathedral Armory.
- New weapons and forges: {{< nexus 25073 >}}Vanilla Weapon Replacer{{< /nexus >}}, {{< nexus 2017 >}}LeanWolf's Better-Shaped Weapons{{< /nexus >}}, {{< nexus 187438 >}}Zenithar's Anvil{{< /nexus >}}, and {{< nexus 187203 >}}Smelters of Skyrim{{< /nexus >}}.
- Many older armor retextures are gone, along with Sons of Skyrim, Moon Monk, and the Authentic and Heavy Legion packs. ({{< nexus 30468 >}}New Legion{{< /nexus >}} stays.)

## NPCs & characters

- A new NPC lineup: {{< nexus 153754 >}}Exquisite NPC{{< /nexus >}} and {{< nexus 190024 >}}Exquisite NPC 2{{< /nexus >}}, {{< nexus 78283 >}}Children of the North{{< /nexus >}}, {{< nexus 98103 >}}the Hist{{< /nexus >}}, and {{< nexus 97981 >}}the Pariah{{< /nexus >}}, {{< nexus 27330 >}}Cuyima's Interesting NPCs{{< /nexus >}}, and the {{< nexus 38178 >}}Legacy of the Dragonborn NPC Overhaul{{< /nexus >}}. Together they replace Modpocalypse, NITHI, Northbourne, and BB's NPCs.
- New skins, high-poly head variants for beards, brows, and hair, HIMBO V5 refits, and {{< nexus 39359 >}}Realistic RS Children{{< /nexus >}}.

## Creatures & dragons

- New dragons: {{< nexus 159377 >}}Dragon Races of Skyrim{{< /nexus >}}, {{< nexus 168815 >}}Next Gen Dragons{{< /nexus >}}, and {{< nexus 87085 >}}Dragons Use Thu'um{{< /nexus >}}.
- New animals and critters: {{< nexus 34459 >}}Better Animals{{< /nexus >}}, {{< nexus 182994 >}}Canidae{{< /nexus >}} wolves, {{< nexus 70493 >}}Bellyache's{{< /nexus >}} pack, {{< nexus 72490 >}}Witcher Horse{{< /nexus >}}, {{< nexus 63640 >}}zzjay's Horse Overhaul{{< /nexus >}}, butterflies, moths, and {{< nexus 19272 >}}Rustic Daedra{{< /nexus >}} and {{< nexus 18107 >}}Spriggans{{< /nexus >}}.

## World & visuals

- {{< nexus 42731 >}}Azurite Weathers III{{< /nexus >}} now has HDR, Darker Nights, and {{< nexus 119148 >}}Alluring Sunsets{{< /nexus >}} add-ons, and {{< nexus 58782 >}}Weather of World{{< /nexus >}} joins it.
- Restructured PBR landscapes: Vanaheimr's mountains, mines, and farmhouses, {{< nexus 177621 >}}TomatoRim PBR Landscapes{{< /nexus >}}, split-up Faultier's packs, {{< nexus 81822 >}}Happy Little Trees 4k{{< /nexus >}}, and DrJacopo's 3D plants.
- New and reworked locations: {{< nexus 40094 >}}Fortified Whiterun{{< /nexus >}}, {{< nexus 172845 >}}Imperial Forts Remake{{< /nexus >}}, {{< nexus 117684 >}}Crossroads of Skyrim{{< /nexus >}}, {{< nexus 20151 >}}the Great City of Rorikstead{{< /nexus >}}, {{< nexus 35180 >}}Drengin's Blue Palace Terrace{{< /nexus >}}, and Markarth updates.
- {{< nexus 43158 >}}Lux{{< /nexus >}} and {{< nexus 56095 >}}Lux Orbis{{< /nexus >}} are updated, with a newer main plugin and {{< nexus 60524 >}}variants{{< /nexus >}}.
- Terrain Shadows and Seasonal Landscapes are gone.

## Audio

- A new sound overhaul: {{< nexus 77384 >}}Bleeding Edge{{< /nexus >}}, {{< nexus 1841 >}}Lucidity{{< /nexus >}}, {{< nexus 51541 >}}Airgetlam{{< /nexus >}}, {{< nexus 79219 >}}Skullbreaker{{< /nexus >}}, {{< nexus 76137 >}}Bulwark{{< /nexus >}}, and {{< nexus 523 >}}Immersive Sounds Compendium{{< /nexus >}}.
- New voice packs for {{< nexus 194339 >}}NPC Situational Reactions{{< /nexus >}}, and {{< nexus 163710 >}}Skyrim Revoiced{{< /nexus >}}.

## Alternate starts

- {{< nexus 50307 >}}Alternate Perspective{{< /nexus >}} and its add-ons replace A New Dragonborn, Live Another Life, and the Bruma start. (See [Alternate Start](/first-launch/alternate-start).)
- Relic Hunter is still here, as a different mod ({{< nexus 12253 >}}Relic Hunter- Guildmaster Start{{< /nexus >}}).

## AI (optional, off by default)

- [SkyrimNet](/skyrimnet), SeverActions, OStimNet, and {{< nexus 172027 >}}Say It{{< /nexus >}} voice control replace Mantella.

## Now enabled by default

- {{< nexus 72298 >}}Immersive Smithing{{< /nexus >}}, {{< nexus 99809 >}}Gift by Hand VR{{< /nexus >}}, {{< nexus 58023 >}}Conduit{{< /nexus >}}, {{< nexus 119689 >}}Spell Auto-Aim VR{{< /nexus >}}, {{< nexus 55962 >}}Stop Trigger Unsheathing{{< /nexus >}}, {{< nexus 47174 >}}NavigateVR's Dynamic Compass{{< /nexus >}}, {{< nexus 17812 >}}Minimal Enemy Healthbar VR{{< /nexus >}}, and the {{< nexus 37792 >}}Chapter II{{< /nexus >}} and {{< nexus 115096 >}}LORKHAN{{< /nexus >}} music mods.

## Removed

- Bruma (both Beyond Skyrim's and CleverCharff's), the Enigma Series quest mods, Terrain Shadows, Arena, Dynamic Torches NG, and Mantella.
