+++
title = 'AI Gameplay'
weight = 20
+++

Need something?
 
Yes, yes.
 
I haven't got all day!

Skyrim has at least 1200 lines of generic[^1] NPC dialogue, but once you're hundreds of hours in, you could swear there are no more than a dozen.

With SkyrimNet and its plugins running, any NPC can hold an actual (unique!) conversation, form opinions, remember what you've done[^2], and decide how to act. And it's all in their own (synthesized) voice.

This page provides a quick overview. SkyrimNet is pretty deep and it's been evolving quite rapidly lately[^3], so see ["You've learned all you can from me"](#youve-learned-all-you-can-from-me) to learn more.

## Talking to NPCs

You can speak to NPCs out loud, or you can type to them.

* **By voice.** If you set up a Whisper backend during [Setup](/skyrimnet/setup), just talk. Depending on your hotkeys, you'll either hold a push-to-talk key while you speak or use Open Mic mode, where SkyrimNet listens and sends what you say on its own.
* **By text.** If speaking aloud isn't practical (or you just don't feel like it), you can use a chat-input hotkey to open a box you can type into instead. (Thank goodness for the [OpenComposite Unleashed](/performance/open-composite/) keyboard.)

Which key does what is up to you. You set them on the _Hotkeys_ step during setup, and you can change them anytime from the dashboard.

## They know what you did last Midyear.

Unlike vanilla NPCs, SkyrimNet characters have memories. Help someone, rob them, or leave them for dead, and they'll remember it. Their reactions are based on who they are and what they've been through, so even the same line from you will land differently depending on your history together.

Turn on **Player Memories** and **Player Reactions** during setup, and your character gets memories of their own, apart from your real-life memory. You'll have an (audible) inner monologue shaped by the bio you (or AI) wrote and your gameplay. SkyrimNet will also speak the dialogue you personally say in your character's synthesized voice. This certainly makes it feel more like a {{< ext "https://www.instagram.com/reels/DSimkzMjgK5/" >}}modern single-player game{{< /ext >}}, but whether that's a good thing is in the eye (or ears, as it were) of the beholder.

## "In a world..."

SkyrimNet's **GameMaster** is effectively an AI Dungeon Master, describing scenes, NPC actions, and the like. An optional narrator voice can recount events in the third person. It's all opt-in, so dial it up or down to taste.

## You've learned all you can from me.

This barely scratches the surface of what SkyrimNet can do. For detailed guidance, troubleshooting, and the latest on what's possible, the {{< discord "gHHS7HpJS9" >}}SkyrimNet Discord{{< /discord >}} is the place to be. The {{< ext "https://goncalo22.github.io/SkyrimNet-GamePlugin/" >}}official docs{{< /ext >}} are worth a read, too.

[^1]: In other words, this excludes character-specific dialogue. It's the stuff on {{< ext "https://en.uesp.net/wiki/Skyrim:Generic_Dialogue" >}}this UESP page{{< /ext >}}.

[^2]: You should be ashamed of yourself.

[^3]: That, and I just plain ran out of time before the MGO 4.0 beta.