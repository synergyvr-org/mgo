+++
title = 'Interaction'
weight = 22
+++

Interaction may be the area in which mods make the most dramatic difference in Skyrim VR. In vanilla, every type of non-combat interaction&mdash;speaking to someone, picking something up, rotating a pillar, looting a body&mdash;simply involved pointing and pressing a button.  In 2018, I was just thrilled to be playing a truly substantial game in VR. But in the wake of games like _Asgard's Wrath_ and _Half-Life: Alyx_, Skyrim VR started to feel a little underwhelming in terms of interactivity.

The mods included in Mad God's Overhaul enhance Skyrim's interactivity to a frankly shocking degree. Here's an overview of just a few of them

## HIGGS

In 2020, Valve released _Half-Life: Alyx_ and introduced the best system for interacting with objects that anyone had seen in a game that wasn't focused entirely on the novelty of interacting with objects. They also came up with a fantastic system for picking up items that are just out of reach: The Gravity Gloves (the inventor of which desperately wants you to call them R.U.S.S.E.L.L.S). This made the "point and press <kbd>A</kbd>" mechanics in Skyrim VR seem terribly dated. A few months later, FlyingParticle released {{< nexus 43930 >}}HIGGS{{< /nexus >}}, and all was right in Tamriel.

With HIGGS, your hands are no longer merely decorations. You can pick objects up, throw them, juggle them&mdash;whatever you like. To add the item in your hand to your inventory, reach above your shoulder until you get a haptic buzz, and then release {{< control name="grip" >}}. Not sure what exactly an item is, or what its stats are? Just look at the back of your hand while you're holding the item. You can even put consumables directly into your mouth without adding them to your inventory first. That even works on books, including spell tomes.

{{< video name="higgs-reading" type="mp4" border="border">}}
Who doesn't like to devour a good book now and again?
{{< /video >}}

And if an object is a little bit out of reach, reach towards the item, squeeze the {{< control name="grip" >}}, pull back your hand, and then release and press {{< control name="grip" >}} to catch the item out of the air.

{{< video name="higgs-salt-pile" type="mp4" border="border">}}
Grab a salt pile off the shelf with the gravity gloves, check out its stats on the back of your hand, and drop it over your shoulder to add it to your inventory.
{{< /video >}}

You can even loot enemies' armor right off of them using the gravity gloves. As with any other use of HIGGS, just drop each item above/behind your shoulder to add it to your inventory.

{{< video name="higgs-loot" type="mp4" border="border">}}
There's no dignity for bandits, even in death.
{{< /video >}}

## Interactive Activators VR

Shizof's first preview video for {{< nexus 161676 >}}Interactive Activators VR{{< /nexus >}} stunned all of the real VR sickos. It replaces buttons, levers (including the ones built into Dwemer doors), pullchains (!), rotating pillars (!!), puzzle door discs (!!!)[^1], etc. with versions that you can interact with directly using your hands, weapons, or any other physics object. You can even throw a cheese wheel at a lever to activate it if you want.

{{< video name="pullchain" type="mp4" border="border">}}
Pullchains are now my favorite thing in Skyrim.
{{< /video >}}

Because it works in conjunction with HIGGS, you can even use the gravity gloves feature to interact with these objects, which comes in pretty handy for some of the hard-to-reach chains and levers.

Although you can still add items to your inventory the boring, vanilla way, Interactive Activators actually replaces the original objects, and now you _must_ use physics to operate them. You actually  _can't_ activate a pullchain by pointing at it and pressing <kbd>A</kbd> anymore.

## Immersive Reading

If eating books with HIGGS strikes you as a little odd, {{< nexus 173931 >}}Immersive Reading{{< /nexus >}} lets you read books like a normal person. Pick up a book or a note with {{< control name="trigger" >}} (configurable in the [INI](/reference/editing-inis)) and turn the pages or open the note by swiping in the appropriate direction with your other hand.

Press {{< control name="grip" >}} to drop the book/note, or hold it to return to grabbing the book with HIGGS. At that point, you can drop it over your shoulder to add it to your inventory as you would anything else.

There are several other settings you can tweak in the INI, so be sure to check out the {{< nexus 173931 >}}Nexus page{{< /nexus >}} for details.

{{< aside type="btw" title="Turn without swiping" >}}
If you'd rather use buttons, you can turn pages with a quick squeeze of either {{< control name="trigger" >}} rather than swiping.
{{< /aside >}}

## Handy, man

There are several other mods that give extra immersion to the everyday business of being an adventurer. Here are some of my favorites:

* {{< nexus 16692 >}}Realistic Mining for VR{{< /nexus >}} turns ore-mining from an instant, one-button operation into actual work. Activate a ore vein to auto-equips your pickaxe. From there, you swing it yourself, and it takes a few strikes to knock loose each piece of ore, which you then need to pick up.
* {{< nexus 72298 >}}Immersive Smithing{{< /nexus >}} moves smithing from the menu to the forge. Craft a blacksmith's hammer, then smelt ore and improve your gear using the actual tools and stations dotted around the forge. Mind you, it only handles upgrading weapons and armor, not creating them from scratch.
* {{< nexus 144669 >}}Interactive Instruments VR{{< /nexus >}} lets you grab a lute, flute, or drum with HIGGS and actually play it. Strum the strings (try different buttons to change chords), hit the drum harder for a louder beat, or raise the flute to your lips (again, use button combinations to achieve different notes). You're a real bard now (for better or worse).

### Interactive Torches

{{< nexus 140404 >}}Interactive Torches - VR{{< /nexus >}} makes torches behave like, well, _torches_. That means that when you first pull one out, it's unlit. That's a feature, not a bug!

To light a torch, equip a fire spell (like _Flames_) in your other hand and bring that hand up near the torch's head. After a second or two, it catches. You can also light an equipped torch off of any real flame in the world&mdash;a candle, a campfire, a brazier&mdash;by holding the torch head to the fire. To douse it, use a frost spell in the same way.

{{< aside type="btw" title="Keep a flame handy" >}}
Since lighting a torch means having a fire spell ready, it's worth keeping a spell like _Flames_ on your [Spell Wheel](/mod-highlights/spell-wheel) or in your favorites so you're never caught fumbling in the dark.
{{< /aside >}}

[^1]: The appropriate dragon claw even appears in your non-dominant hand so you can easily check the order of the totems and then place and rotate the claw in the center of the door. (You need to hold {{< control name="grip" >}} while doing this, and then rotate the claw to the right and to left.)