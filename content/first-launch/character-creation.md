+++
title = 'Character Creation'
weight = 20
+++

Like many big mod lists for Skyrim, Mad God's Overhaul uses an alternate start mod that lets you create your character immediately, instead of after a 15-minute cart ride.

Skyrim's vanilla character creator includes some presets and lets you tweak a few facial features, but there aren't a ton of options. You certainly won't be able to reproduce your favorite monstrosities from Oblivion.

{{< caption name="oblivion-character" type="webp" >}}
Not this time!
{{< /caption >}}

## RaceMenu

{{< nexus 19080 >}}RaceMenu{{< /nexus >}}, included in MGO (along with {{< nexus 156898 >}}RacemenuVR{{< /nexus >}}), adds far more sliders for you to adjust until your character is just as beautiful/handsome/nauseating as you've always dreamed.

{{< caption name="racemenu-monstrosity" type="webp" >}}
Now we're talking!
{{< /caption >}}

Some RaceMenu features (like the _Camera_ and _Sculpt_ tabs in the upper-right) don't work in VR, and the VR version is a little bit harder to navigate. But there's still an incredible assortment of sliders you can tweak, and you can load presets created in the flat version (as long as they have no dependencies that aren't available in MGO).

{{< caption name="racemenu-01" type="webp" >}}
So many sliders! Character creation with RaceMenu in MGO.
{{< /caption >}}

There are a couple of ways to adjust the values of each slider. You can point directly at the marker with your motion controller, hold down the {{< control name="a" >}} button, and move your controller left and right to adjust each slider. You have to initially point pretty precisely, but once you begin holding down the {{< control name="a" >}} button, you can rest assured that you'll be adjusting that same slider until you release the button. That initial selection is easier if you can move closer to where the RaceMenu UI appears. (You aren't able to use the thumbsticks to move while the RaceMenu is active, so you'll have to move in your physical space.)

{{< video name="racemenu-sliders" border="border" >}}
Method 1: Moving the value marker directly.
{{< /video >}}

The other approach is to point just above the slider and use the thumbstick to move it left and right. It requires a bit less precision than the other approach, but you must be careful to keep your pointer within that space the entire time you're making adjustments. If your pointer moves past the slider above or below, you'll start adjusting an entirely different value. I find that this approach works best when only adjusting a value by one or two notches. For bigger changes, it's too easily to accidentally move your cursor over a different slider.

{{< video name="racemenu-sliders-02" border="border" >}}
Method 2: Pointing above the slider and using the thumbstick.
{{< /video >}}

RaceMenu will start on the "ALL" tab, showing every available slider, but there are tabs for various categories (BODY, FACE, etc.), so you don't have to do it all on a single page. Switch tabs by using the pointer and the {{< control name="a" >}} button.

Some tabs still have an awful lot of sliders, so you'll need to scroll (which, again, requires some high-precision pointing) to see all of the options. Point precisely at the scroll marker (ignoring the fact that the sliders appear to extend far to the right of the scrollbar), hold down {{< control name="a" >}}, and use your motion controller to move the scroll marker's position.

{{< aside type="btw" title="A note to the NSFW crowd..." >}}
If you're playing the NSFW list, you may be disappointed to find your character fully clothed, in spite of how... _extensive_ the customization options are.

Fear not! There's a slider near the bottom of the BODY tab (and the ALL tab) to toggle between a dressed and undressed state.

<a href="/images/racemenu-undress@2x.webp"><img src="/images/racemenu-undress.webp" srcset="/mgo/images/racemenu-undress@2x.webp 2x"></a>
{{< /aside >}}

## Build options

In many RPGs, your build is a Very Big Deal, and choosing poorly can make or break your experience before you've really even started playing. Skyrim, unlike earlier entries in The Elder Scrolls series, is not that kind of game. In fact, in vanilla, your initial selections make almost no difference. There are no classes, there's no concept of major and minor skills, you don't have a birthsign, and racial differences are so minor that they're effectively irrelevant. There are still ways to optimize for certain play styles in vanilla, mostly via the Standing Stones, but those can be changed mid-game. You don't have to commit before you've even picked up a weapon.

With the mods in MGO, it's still hard to set yourself up for long-term failure by speccing your character poorly, but the races at least feel like they matter beyond a few tiny bits of dialogue. {{< nexus 26686 >}}Aetherius{{< /nexus >}} overhauls the various races' passive abilities and their starting levels in various skills. This reintroduces the concept of major and minor skills... kind of. In previous games, major and minor skills had a huge impact of how you leveled up your character. That feature remains absent from Skyrim, so you still don't need to be terrified of being a Bosmer when you should have been a Redguard. (In fact, in MGO, your overall level isn't based on your skills at all. It's based on gaining experience through discovering locations and completing quests. See the {{< nexus 17751 >}}Experience{{< /nexus >}} mod for details.) Aetherius also starts certain races with additional spells. Check out the {{< nexus 26686 >}}mod page{{< /nexus >}} for all the details.

(Standing Stones don't come into play until you actually start the game, but MGO includes an overhaul for that system as well: {{< nexus 33411 >}}Mundus{{< /nexus >}}.)

## Wrapping up

When your character looks perfect (or perfectly abhorrent, as the case may be), you can finish by squeezing the {{< control name="grip" >}} on one of your controllers, or you can point to {{< btn-inline >}}Done{{< /btn-inline >}} in the extreme lower-left of the RaceMenu UI and press {{< control name="a" >}} on your controller.

{{< caption name="racemenu-done" type="webp" >}}
Point to "Done" and press the <kbd>A</kbd> button.
{{< /caption >}}

Whichever method you choose, you'll be prompted to confirm that you're finished and ready to name your character. If you're running the game through Steam VR, you'll see Steam VR's onscreen keyboard. If you're using Open Composite Unleashed, you'll see the keyboard that's built into that mod. With Open Composite Unleashed, you'll still see the red laser pointers that you used to control RaceMenu, alongside the white laser pointers that you need to use with the onscreen keyboard.

{{< video name="racemenu-name" border="border" >}}
Finish and name your character.
{{< /video >}}

## Changing your mind... and your face

You can access the RaceMenu mid-playthrough to make further adjustments to your character with the console command `showracemenu`. Mind you, the changes will be purely cosmetic. If you change your character's race&mdash;from Nord to Argonian, for example&mdash;your racial bonuses won't be updated.

{{< aside type="alert" title="Save first!" >}}
Before using console commands, remember to do a full, manual save. You may also want to re-run VRIK calibration afterwards.
{{< /aside >}}

{{< aside type="btw" title="The lore-friendly option" >}}
If you think that using the console to change your appearance feels like cheating, remember that even vanilla Skyrim includes the character Galathil ("The Face Sculptor") at the Ragged Flagon, who can help you for 1,000 gold. She's still there in MGO.
{{< /aside >}}