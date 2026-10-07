+++
title = 'Diagnosing a Crash'
weight = 90
hidden = true
+++

Even a list as thoroughly tested as MGO will crash on you eventually. Thousands of mods, VR physics, and a 2011 engine walk into a bar; sometimes the bar falls over. When it happens, you're yanked out of Tamriel and dropped back at your desktop with no explanation.

Except there _is_ an explanation, because MGO ships a pair of diagnostic mods that catch every crash on the way down: {{< nexus 59818 >}}Crash Logger{{< /nexus >}} writes the classic crash log, and {{< nexus 172272 >}}Tullius CTD Logger{{< /nexus >}} captures a full dump&mdash;for crashes, freezes, and infinite loading screens alike&mdash;then folds Crash Logger's output into a single human-readable report. There's nothing to install or enable. Every crash leaves a note; you just have to read it.

## First, try the boring explanation

A single, unrepeatable crash in a list this size is weather, not climate. Load your save and carry on with your life. Diagnosis is for crashes that _repeat_&mdash;especially ones that repeat in the same place or during the same action. That pattern is itself your first clue.

## Where the evidence lands

* **Tullius CTD Logger** writes its dumps and reports to [Overwrite](/reference/overwrite), under {{< file folder-open >}}SKSE\Plugins\Tullius Ctd Logs{{< /file >}}. Look for a {{< file >}}*_Crash_*.dmp{{< /file >}} dump with a matching {{< file file-lines >}}SkyrimDiagReport.txt{{< /file >}}. (Depending on settings, its viewer may simply open itself after a crash and save you the trip.)
* **Crash Logger** writes {{< file file-lines >}}crash-*.log{{< /file >}} files to {{< file folder-open >}}Documents\My Games\Skyrim VR\SKSE{{< /file >}}.
* **Freezes and infinite loading screens** count too: Tullius detects a hang after a threshold and captures a {{< file >}}*_Hang_*.dmp{{< /file >}} on its own. If the game is stuck and nothing has fired, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F12</kbd> to take a manual snapshot before you kill the process.

## Reading the report

Tullius comes with an interactive viewer. If it didn't open itself, right-click the **Tullius CTD Logger** mod in MO2's left pane, choose {{< btn-inline >}}Open in Explorer{{< /btn-inline >}}, and run {{< file >}}SKSE\Plugins\SkyrimDiagWinUI\SkyrimDiagDumpToolWinUI.exe{{< /file >}}. Pick the dump from your crash and click {{< btn-inline >}}Analyze{{< /btn-inline >}}.

The report leads with a summary and a list of **actionable candidates**: the actual plugin and DLL filenames that were implicated, with the evidence behind each. That's usually all you need&mdash;a candidate named after a mod you recognize is a strong lead.

Two habits make you better at this:

* **Treat candidates as suspects, not verdicts.** The tool itself calls its analysis a best-effort estimate. A mod can appear in a crash stack because it was the victim, not the culprit.
* **In the raw log, hunt for filenames.** Skim the top of Crash Logger's {{< file file-lines >}}crash-*.log{{< /file >}}, then search for `.esp`, `.dll`, and `.nif`. A specific mesh path in a crash log is about as close to a smoking gun as this hobby gets.

## The usual suspects

* **Something you added recently.** The most common answer by far. Disable your newest addition and test&mdash;this is why [Installing a Mod](/tutorials/installing-a-mod) preaches one mod at a time.
* **A missing master.** Instant crash-to-desktop at launch or load, usually right after removing something. [Removing a Mod](/tutorials/removing-a-mod) covers the fix (and how Synthesis gets tangled in it).
* **A bad mesh.** If the log names a {{< file >}}.nif{{< /file >}}, the mod that mesh belongs to is your lead, and crashes will cluster wherever that object appears.
* **A haunted save.** If crashes follow one save file around while a new game is stable, the save is the suspect. [Removing a Mod](/tutorials/removing-a-mod) has the triage; sometimes the answer is the one nobody wants.

## Asking for help

When you've hit your limit, the {{< discord "WjSUaSPaQZ" >}}MGO Discord{{< /discord >}} is full of people who read these logs for fun. Help them help you:

1. **Attach the evidence:** the {{< file file-lines >}}SkyrimDiagReport.txt{{< /file >}} from Tullius, or the {{< file file-lines >}}crash-*.log{{< /file >}} from Crash Logger. Ideally both.
2. **Say what you were doing:** where you were, what action triggered it, and whether it repeats.
3. **Confess your changes:** any mods you've added, removed, or updated. Nobody's judging; it's the first thing they'll ask anyway.

"Game crashed, help" gets you sympathy. A log and a description get you an answer.

{{< aside type="btw" title="Before you post" >}}
Crash dumps and logs can include local file paths, which means your Windows username may be in there. Give a report a quick skim before posting it publicly if that sort of thing matters to you.
{{< /aside >}}