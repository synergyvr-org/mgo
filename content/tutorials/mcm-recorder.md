+++
title = 'MCM Recorder'
weight = 70
hidden = true
+++

When you start a new game in MGO, a torrent of notifications washes over you while the list configures hundreds of MCM settings on your behalf (as covered in [Alternate Start](/first-launch/alternate-start)). The tool doing that work is {{< nexus 61719 >}}MCM Recorder{{< /nexus >}}, a mod by Mrowr Purr, and it isn't just for modlist authors. You can use it yourself.

Here's the problem it solves: MCM settings live in your _save file_, not in your mod list. Spend an evening dialing in DovaVR's sensitivity, Spell Wheel's button combos, and a dozen other menus, and the moment you roll a new character, all of that is gone. You'd have to redo every tweak by hand. Unless you recorded them.

## Record your tweaks

MCM Recorder works like a tape deck for menus. It watches what you click and writes it down.

1. Launch the game and load your save.
2. Open the **MCM Recorder** menu in the MCM (under the System menu).
3. Start recording, and give your recording a name.
4. Go configure whatever MCMs you like, exactly as you normally would. Every step is captured.
5. When you're done, quit the game. That ends the recording.

{{< aside type="btw" title="No red light" >}}
In VR, there's no confirmation popup when you start recording. It may feel like nothing happened, but the tape is rolling. Go make your changes and quit when you're done.
{{< /aside >}}

## Play it back

On your next character, once you're in the game:

1. Open the **MCM Recorder** menu and select your recording. Confirm that you want to run it.
2. Exit the MCM. (In VR, nothing appears to happen until you do.)
3. A popup appears. Choose **Play Recording** to run the whole thing, or **View Steps** to run individual steps.
4. Sit back while it opens each menu and clicks through your settings, just like MGO does on a new game.

{{< aside type="alert" title="One tape at a time" >}}
MGO's own recording (the **MCM Recorder Settings** mod in the list) runs automatically at the start of every new game. Let it finish (wait for the notifications to die down) before you play back a recording of your own, for the same reason you don't fiddle with menus while it works: two things clicking through MCMs at once ends badly. See the "Give it a minute" warning in [Alternate Start](/first-launch/alternate-start).
{{< /aside >}}

## Where recordings live

Recordings are saved to a {{< file folder-open >}}McmRecorder{{< /file >}} folder, which lands in MO2's [Overwrite](/reference/overwrite) folder. As usual, don't leave it there: move it into its own mod so it survives tidying (and tag the mod with `[NoDelete]` so it survives a list update, too).

Each recording is a folder of {{< file file-lines >}}.json{{< /file >}} files, one per step, and they're deliberately human-readable. A step looks like this:

```json
{
  "Mod": "Spell Wheel VR",
  "option": "Show Torches",
  "page": "Types",
  "toggle": "on"
}
```

A full multi-step recording looks like this:

```json {data-file="0001_Dirt & Blood.json"}
[
  {
    "choose": "Deactivated",
    "Mod": "Dirt & Blood",
    "option": "Dirt on Player",
    "page": "Settings"
  },
  {
    "choose": "Deactivated",
    "Mod": "Dirt & Blood",
    "option": "Hair Reminders",
    "page": "Settings"
  },
  {
    "Mod": "Dirt & Blood",
    "option": "Dirt on NPCs Based on Profession",
    "page": "Settings",
    "toggle": "off"
  },
  {
    "Mod": "Dirt & Blood",
    "option": "Dirt on Bandits",
    "page": "Settings",
    "toggle": "off"
  },
  {
    "Mod": "Dirt & Blood",
    "option": "Swimming is as Effective as Bathing",
    "page": "Settings",
    "toggle": "on"
  }
]
```

You can edit steps by hand, delete the ones you no longer want, or share the whole folder with a friend (zip it up, and it installs like any other mod).

{{< aside type="btw" title="Roll tape automatically" >}}
If you want your recording to run on _every_ new game, open the recording's main {{< file file-lines >}}.json{{< /file >}} file and change `"autorun": "false"` to `"autorun": "true"`. That's exactly how MGO's own recording does it&mdash;autorun recordings kick off right after RaceMenu closes.
{{< /aside >}}