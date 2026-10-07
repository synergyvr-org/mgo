+++
title = 'Console'
weight = 94
hidden = true
+++

Skyrim's console is a built-in command line for poking at the game directly: teleporting around, spawning items, fixing a stuck quest, setting up a screenshot, or just cheating shamelessly. It's a debug tool the developers left switched on, and it's enormously handy once you know your way around it.

For years it was awkward to reach in VR, because typing was the whole problem. That's changed.

## Opening it in VR

On a desktop you open the console with the <kbd>`</kbd> key (the tilde/grave key, above <kbd>Tab</kbd>). The trouble in VR is obvious: with a headset on, you can't see the keyboard you're supposed to type into, and hardware keyboards don't work in-game anyway.

The fix is the on-screen keyboard in [OpenComposite Unleashed](/performance/open-composite/#on-screen-keyboard). Bring it up (by default, {{< btn-inline >}}Double-Click {{< control name="left-stick" >}}{{< /btn-inline >}}), open the console with the on-screen <kbd>`</kbd>, and type your command with the pointer, all without leaving VR or reaching for a real keyboard. Squeeze {{< control name="grip" >}} to dismiss the keyboard when you're done.

{{< aside type="btw" title="Mind the order" >}}
OCU tracks whether the console is open, and it's easy to get the two out of sync. The [OpenComposite page](/performance/open-composite/#on-screen-keyboard) has the specific dance for closing them in the right order, learned the hard way.
{{< /aside >}}

## How it works

A few ideas cover most of what you'll do:

- **Global vs. targeted commands.** Some commands act on the world at large (`coc whiterun`) or on you. Others act on a specific thing you've _targeted_ first.
- **`player.` for yourself.** Prefix a command with `player.` to run it on your own character, e.g. `player.setav carryweight 500`. This needs no target, which makes it the easiest way to use the console in VR.
- **`help` finds base IDs.** Run `help "thing" 0` to search the game for anything matching (items, spells, perks, NPCs) and print its IDs. Commands and IDs aren't case-sensitive, and leading zeros are optional.

## Targeting without a mouse

On a desktop you target something by clicking it with the console open, which selects it and shows its reference ID at the top of the screen. VR has no cursor for that, so:

- **Prefer commands that need no target.** `player.` commands act on you, and plenty of others are global (`coc`, `help`, `setstage`, `tgm`). Most of what you'll want lives here.
- **To target a specific reference, use `prid`.** `prid <refID>` selects a reference by its ID, no clicking required. Then run your targeted command (`kill`, `resurrect`, `moveto player`, and the like).

The snag is getting that `<refID>`, which is where it stops being straightforward.

## Finding a reference ID

Two kinds of ID turn up, and it's easy to grab the wrong one:

- A **base ID** identifies a _kind_ of thing (the "Lydia" character template, say). This is what `help` gives you.
- A **reference ID** (refID) identifies one specific, placed instance out in the world. That's what `prid` and most targeted commands actually want.

For a **unique, named NPC** (a follower, a jarl, a quest-giver), the refID is fixed, and the easiest place to find it is the {{< ext "https://en.uesp.net/wiki/Skyrim:NPCs" >}}UESP wiki{{< /ext >}}, which lists a RefID on each NPC's page.

{{< aside type="btw" title="Mind the load-order prefix" >}}
The first two digits of an ID are the load-order slot of the plugin it comes from. Base-game IDs (from Skyrim.esm) start with `00`, but a mod-added NPC's real ID starts with that mod's position in _your_ load order. Wikis usually write that part as `xx`; swap in the plugin's index from MO2's right pane. (Light/ESL plugins use an `FE`-prefixed form instead.) Get the prefix wrong and the ID points at something else, or nothing at all.
{{< /aside >}}

For **anything else** (or when you'd rather not comb a wiki), let the game hand you the IDs. `save <name> 1` writes a normal save _and_ a plain-text copy of it beside your saves in {{< file folder-open >}}Documents\My Games\Skyrim VR\Saves{{< /file >}}, named `<name>.ess.txt`. Open that in a text editor and search it by name for the reference IDs your save is currently tracking. The dump takes a moment to write (the game may hang while it does), but it needs no mouse, which makes it the most practical way to run down a refID in VR.

A truly **generic actor** (a nameless bandit) still won't leave a name worth searching for, so for those you're back to `player.` and global commands.

## A few cautions

The console is powerful in the way a chainsaw is powerful.

{{< aside type="alert" title="Save before you experiment" >}}
Make a full manual save before doing anything adventurous in the console. Some commands can't be undone, and a few can leave a quest (or your whole save) in a worse state than you found it. A safe save is your undo button.
{{< /aside >}}

- **Nudge quests, don't shove them.** `setstage` can push a stuck quest forward, but skipping too far can leave scripted content unrun. Advance one stage at a time and check. And never run `caqs` on a save you care about; it completes _every_ quest in the game at once.
- **A couple of commands behave oddly in VR.** Free camera (`tfc`) still follows your head, and field-of-view (`fov`) is governed by your headset, so those don't do what they do on a flat screen. They're noted in the list where it matters.

When you're ready, here's the [Console Commands](/reference/console-commands) reference: a filterable, categorized list of the commands worth knowing and what each one does.
