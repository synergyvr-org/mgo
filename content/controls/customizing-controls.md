+++
title = 'Customizing Controls'
weight = 50
hidden = true
+++

None of the presets quite fits your hands? You can build your own layout. The tool for the job is the same one that lives in the [OpenComposite (Unleashed)](/performance/open-composite) mod folder&mdash;the **Configurator**&mdash;and how you use it depends on whether OCU is your runtime.

## If you're using OpenComposite

This is the easy path, because the Configurator is already your bindings manager. Open it, head to its **Bindings** page, and tweak away: swap a preset's actions around, or build your own combos from scratch (a double-tap here, a both-grips-together there). The [Controller Bindings](/performance/open-composite#controller-bindings) section of the OCU page walks through all of it. Apply your changes, save, and restart the game to test them.

That's the whole story for OCU users. OCU owns your bindings, so what you set in the Configurator is what you get in game.

## If you're using SteamVR

You don't run OCU in this setup (your bindings come from one of the SteamVR options in the list, like {{< btn-inline >}}VRIK Controller Bindings - Standard{{< /btn-inline >}}). But the Configurator is still the nicest way to _design_ a custom layout. The trick is to build your bindings with it and then hand the result to the game as an ordinary mod, without ever turning OCU on.

{{< aside type="alert" title="Don't enable OCU" >}}
On a SteamVR-native headset, leave the OCU mod _disabled_. You're only borrowing its Configurator to generate a bindings file. Actually enabling OCU here would put two systems in charge of your controls at once, which is the number-one cause of dead buttons and crashes. (The OCU page explains [why bindings need a single owner](/performance/open-composite#controller-bindings).)
{{< /aside >}}

1. In MO2, find the OCU entry, {{< btn-inline >}}Right Click - Select Open In Explorer - Launch OCU Configurator{{< /btn-inline >}}, and do what it says.
2. Launch the {{< file window-maximize >}}OC Unleashed Configurator for Skyrim VR.exe{{< /file >}} and customize your controls on its **Bindings** page, exactly as an OCU user would. Save when you're happy with it.
3. Back in the OCU folder in Explorer, copy the {{< file folder >}}Interface{{< /file >}} subfolder somewhere out of the way (your Desktop or Downloads is fine) and zip that copy.
4. In MO2, install that zip as a new mod. Rename the mod so it starts with `[NoDelete] ` (the trailing space is part of it), then drag it into the same spot in the left pane as your other SteamVR custom bindings.

Restart the game and try it out. If something's off, you can always tweak it in the Configurator again and repackage.

{{< aside type="btw" title="What's with the [NoDelete]?" >}}
The `[NoDelete] ` prefix is MGO's naming convention for mods you've added by hand, so they're easy to spot and don't get swept up when the list is cleaned or updated. Type it exactly, space and all&mdash;it's the space that separates the tag from the name.
{{< /aside >}}
