+++
title = 'INI Files'
weight = 20
+++

Some mods include an MCM, but many others keep their settings in a plain-text {{< file file-lines >}}.ini{{< /file >}} file: [Fake Edge VR](/appendices/fake-edge), PLANCK, and more. An INI is just a list of `key=value` settings grouped under bracketed `[Sections]`. You can edit one right inside MO2, or in a text editor of your choice.

## Edit in MO2...

For a quick change, you don't need to leave Mod Organizer. Double-click the mod in the left pane (or right-click it and choose {{< btn-inline >}}Information...{{< /btn-inline >}}) to open its information window, then switch to the {{< btn-inline >}}INI Files{{< /btn-inline >}} tab. Any INI files the mod ships with are listed on the left; click one to edit it on the right.

{{< aside type="alert" title="Save before you close" >}}
The INI editor has its own save button, and your edits _aren't_ saved automatically. Click {{< btn-inline "floppy-disk" >}}Save{{< /btn-inline >}} (or press <kbd>Ctrl</kbd> + <kbd>S</kbd>) before you close the window, or your change won't stick.
{{< /aside >}}

This is the fastest way to flip a setting or two. For anything bigger, the built-in editor gets cramped, and you'll be happier in a proper text editor.

## ...or in a text editor

Because of MO2's [Virtual File System](/mo2-reference/overwrite), a managed mod's files aren't actually sitting in your Skyrim VR game folder, so don't go looking for them there. Open the mod's own folder instead:

1. Find the mod in the left pane of MO2.
2. Right-click it and choose {{< btn-inline >}}Open in Explorer{{< /btn-inline >}}.
3. Locate the {{< file file-lines >}}.ini{{< /file >}} file. It's often in the root of the mod folder, or under {{< file folder-open >}}SKSE\Plugins{{< /file >}} for SKSE plugins.
4. Open it in a text editor, make your changes, and save.
5. Launch the game as usual, and the new settings take effect.

{{< aside type="btw" title="Use a real text editor" >}}
Windows Notepad is fine (far better than it used to be), but something like Notepad++ makes INIs easier to work with. Just don't open an INI in a word processor like Word, which can butcher the formatting.
{{< /aside >}}

## Changing a setting

Inside, you'll see lines like this:

```
[Settings]
EnableSomeFeature = 0
```

Many settings are a simple toggle between `0` (off) or `1` (on), so flipping a feature on is often just a matter of changing a `0` to a `1`. Only change the value to the right of the `=`, and leave the setting name and the section headers alone. If you're lucky, an INI will include comments (lines starting with `;`) explaining what each setting does, so read those before you change anything.

{{< aside type="btw" title="Back it up" >}}
Before you change a value, it's a good idea to backup the file. If the change doesn't work out, you can put it back exactly as it was.
{{< /aside >}}

If a mod rewrites its own INI while the game is running, a new copy can land in the [Overwrite](/mo2-reference/overwrite) folder. If you made an edit and it seems to have reverted, check there.

## Skyrim's INIs

Skyrim VR's own INIs, ({{< file file-lines >}}skyrimvr.ini{{< /file >}} and {{< file file-lines >}}skyrimprefs.ini{{< /file >}}), aren't mod files. MO2 manages them per profile, so edit them through MO2's built-in {{< btn-inline >}}INI Editor{{< /btn-inline >}} tool rather than poking at files on disk. To open it, select {{< btn-inline >}}INI Editor{{< /btn-inline >}} from the run dropdown near the upper-right (the dropdown that usually has {{< btn-inline >}}Launch MGO{{< /btn-inline >}} selected) and click {{< btn-inline play >}}Run{{< /btn-inline >}}. MGO already has these tuned, so you shouldn't need to touch them unless you really know what you're doing.
