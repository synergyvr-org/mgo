+++
title = 'NavigateVR'
weight = 50
+++

Skyrim's world map is pretty cool (especially in the latest MGO), but it takes you out of the gameplay. It stops the world and doesn't even have the courtesy to {{< youtube "watch?v=LuN6gs0AJls" >}}melt with you{{< /youtube >}}! NavigateVR and its companion mods give you equippable maps and a traditional compass.

## The maps

{{< nexus 47174 >}}NavigateVR{{< /nexus >}} (by TheRetroCarrot and Rallyeator) is the foundation, adding four new items in your inventory: a **Map of Provinces and Isles**, a **Map of Skyrim**, a **Map Storage Case**, and a **Compass**. The two maps and the compass are equippable, and are even recognized as daggers for the purposes of Spell Wheel VR and VRIK holsters.

The mod includes fifteen maps, among them nine hold maps with every location placed and named by hand, three Skyrim-wide maps with different amounts of marker detail, and a map of Solstheim. You start with the basics; individual hold maps can be bought from traders and knowledgeable locals as you travel.

{{< aside type="btw" title="Holster like a dagger" >}}
The maps and compass are designed to live on your [VRIK](/mod-highlights/vrik) holsters, and VRIK sees them as daggers. If a map won't stick to a holster, check that the holster is set to accept daggers, and note that holstering only works while your weapons are drawn.
{{< /aside >}}

## The compass

The Compass is exactly what it says: a physical compass that behaves like one. Hold it up and the needle swings around to point north.[^1] Between it and the maps, you can find your way to a dungeon the way an actual adventurer would, instead of pausing reality to consult the satellite view.

If you'd rather keep something closer to the vanilla compass, {{< nexus 189452 >}}Palm Compass VR{{< /nexus >}} moves Skyrim's HUD compass out of your headset and onto your right palm. Raise your hand palm-up and the compass appears above it, level and readable, as though projected from your hand; turn your palm away and it's gone. It has an <abbr title="Mod Configuration Menu">MCM</abbr> for position and scale, and it plays nicely with VRIK's palm-up gesture handling.

## Quest markers, on paper

{{< nexus 119923 >}}Map Markers for NavigateVR{{< /nexus >}} (by LXE97) bridges the gap between immersion and actually finding anything. Mark a quest as active in your journal, and an icon appears on your handheld maps, with the icon style keyed to the quest's category and configurable in its MCM. It even shows your own position, if you allow it: there's a "Clairvoyance" option that only displays the player and custom markers while you have the Clairvoyance spell equipped (not even cast, just equipped), which makes for a tidy lore-friendly toggle.

{{< aside type="btw" title="Not a GPS" >}}
The mod's author is upfront that these hand-drawn maps were never meant as precision instruments. Marker positions are calibrated against landmarks (road forks, islands, rivers), so expect "over there, past the fork" accuracy rather than turn-by-turn navigation. Also, tracking a Miscellaneous objective takes two steps: track the individual objective _and_ the parent "Miscellaneous" entry.
{{< /aside >}}

## The framework and the map packs

The piece that makes RC4.1's map collection possible is the {{< nexus 189442 >}}NavigateVR Map Framework{{< /nexus >}}, a new SKSEVR plugin by LivSterling. It lets add-on packs register maps for specific worldspaces through simple JSON definitions, without anyone having to rewrite NavigateVR's scripts for every new pack. Draw your Map of Provinces and Isles, and the framework checks where you're standing and puts the right map in your hand; if no pack covers that worldspace, it steps aside and NavigateVR behaves as it always did.

MGO ships six add-ons alongside it. Three add maps for whole new worldspaces through the framework:

* {{< nexus 189766 >}}NavigateVR - City Maps by Mirhayasu{{< /nexus >}} adds hand-drawn street maps for the five major walled cities (Markarth, Riften, Solitude, Whiterun, and Windhelm). Draw the map inside a city and you get streets, buildings, and landmarks instead of a province view.
* {{< nexus 189455 >}}NavigateVR - Dawnguard Maps{{< /nexus >}} covers Dayspring Canyon, the Soul Cairn, and the Forgotten Vale, so the Dawnguard questline's stranger realms are mapped too. The pack leans into immersive acquisition: obtain a map from someone who could plausibly have one, then draw it in the matching realm.
* {{< nexus 189458 >}}NavigateVR - Coldharbour by Limon{{< /nexus >}} maps Coldharbour from VIGILANT, which is also part of MGO. If you're headed to Molag Bal's plane of Oblivion, you may as well know where you're going.

And three upgrade the maps NavigateVR already has:

* {{< nexus 189773 >}}NavigateVR - Skyrim Paper Map by FreelanceCartography{{< /nexus >}} redraws all of the handheld Skyrim maps (the three Tamriel variants and all nine hold maps) with FreelanceCartography's illustrated paper-map artwork and hand-placed markers. This is why your maps look like maps and not like screenshots.
* {{< nexus 189769 >}}NavigateVR - Solstheim by Limon{{< /nexus >}} does the same for the Solstheim map, with Limon's hand-drawn artwork and updated geography.
* {{< nexus 189770 >}}NavigateVR - Wyrmstooth by Limon{{< /nexus >}} redraws the Wyrmstooth map (Wyrmstooth being one of MGO's added lands), including the island of Witch's Crag that older maps left off, and registers it with the framework so the right map comes up reliably when you draw it there.

{{< aside type="btw" title="Stow and re-equip" >}}
The framework picks the map when you equip it. If you walk into a city (or step through a portal to a Daedric realm, as one does) with the map already in hand, stow it and draw it again to get the right one. It may take a minute or so for the new map to become available after arriving in a new location.
{{< /aside >}}

You'll also find {{< nexus 24104 >}}Atlas Map Markers{{< /nexus >}} in the _Maps & Navigation_ section, which adds hundreds of discoverable map markers across Skyrim, Solstheim, and the smaller worldspaces. If the frequency of location discovery notifications gets on your nerves, the mod has an MCM with plenty of options.
