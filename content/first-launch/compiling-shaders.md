+++
title = 'Compiling Shaders'
weight = 10
+++

_Shaders_ are programs that run while drawing the game's graphics to the screen (or screens, in VR). Mad God's Overhaul uses Community Shaders (specifically, {{< nexus 166950 >}}Community Shaders (Unofficial Fork){{< /nexus >}}), a plugin with advanced graphical features that vanilla Skyrim does not support. This is what makes MGO's dramatic visuals possible.

Community Shaders (CS) keeps its own cache of pre-compiled shaders on disk to speed up the game's startup time... except for the very first time you run it.

{{< aside type="btw" title="Remember..." >}}
To run the game from Mod Organizer 2, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /aside >}}

When you launch MGO for the first time after installation (or after certain actions, like clearing your {{< file folder-open >}}Overwrite{{< /file >}} folder or otherwise invalidating the cache), Community Shaders will begin compiling. If you can see the Skyrim VR window on your desktop, you should see a progress bar. The bar should also remain visible once you properly enter VR.

{{< caption name="cs-compiling" type="webp" >}}
While the game is compiling shaders, you can see the progress in the Skyrim VR window on the desktop.
{{< /caption >}}

Compiling shaders can take anywhere from 5 minutes[^1] on a high-end PC to almost 30 minutes. If the progress bar isn't moving, and it's been 30 minutes, something may be wrong.

{{< aside type="btw" title="Keep Moving" >}}
You may need to keep your headset awake and active while CS is compiling shaders. Personally, I switch to desktop view in my headset and keep myself busy with other tasks* using my physical mouse and keyboard. That seems to be good enough.

On Virtual Desktop, hold the {{< btn-inline >}}Menu{{< /btn-inline >}} button on your controller to switch to the desktop view, and press {{< btn-inline >}}Menu{{< /btn-inline >}} again to bring up the VD sidebar, where you can switch back to VR.

\*That sounds like a perfect time to browse this documentation!
{{< /aside >}}

While you wait (or any time later), you can open the in-game settings overlay to tune what Community Shaders does. See the [Community Shaders](/performance/community-shaders) page in the Performance chapter for how, along with recommended settings.

When it finishes—and it will finish—it's time to play!

[^1]: Even on a high-end PC, CS may estimate somewhere in the neighborhood of 30 minutes for compiling shaders, but that's likely to be a very high estimate.