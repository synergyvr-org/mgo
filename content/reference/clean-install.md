+++
title = 'Clean Install'
weight = 90
+++

MGO's [requirements](/start/requirements) call for a clean install of Skyrim VR. That is, it needs the game to be exactly as Steam delivers it, with nothing modified and nothing extra. Wabbajack verifies the game's files against the exact fingerprints of the originals and builds the list on top of them, so a folder polluted by an old modding setup can break the install. And if you do get past the install, it can break the game in ways that nobody else can reproduce.

If you've never modded Skyrim VR on this PC, you're probably clean already, and a quick [verification](#verify-your-game-files-in-steam) will confirm it. If this machine has previously seen ENB experiments or another mod manager, then you may have a little bit of cleanup to perform.

## What belongs in the folder

A vanilla {{< file folder-open >}}SkyrimVR{{< /file >}} folder (under {{< file folder-open >}}steamapps\common{{< /file >}}) contains exactly the following (though the files may be ordered differently):

* {{< file folder-open >}}Data{{< /file >}}
* {{< file >}}SkyrimVR.exe{{< /file >}}
* {{< file >}}steam_api64.dll{{< /file >}}
* {{< file >}}binkw64.dll{{< /file >}}
* {{< file >}}openvr_api.dll{{< /file >}}
* {{< file >}}atimgpud.dll{{< /file >}}
* {{< file file-lines >}}High.ini{{< /file >}}, {{< file file-lines >}}Medium.ini{{< /file >}}, {{< file file-lines >}}Low.ini{{< /file >}}, {{< file file-lines >}}Skyrim.ini{{< /file >}}
* {{< file file-lines >}}installscript.vdf{{< /file >}}

One or two of these may be absent, and that's actually fine. Missing files aren't the primary problem; _extra_ files are. Common remnants of past modding include {{< file >}}d3d11.dll{{< /file >}} or {{< file >}}dxgi.dll{{< /file >}} (ENB and other injectors), {{< file folder-open >}}enbseries{{< /file >}} folders, SKSE loaders, and OpenComposite files from a previous setup (such as a a different, non-working version of {{< file >}}openvr_api.dll{{< /file >}}).

Inside {{< file folder-open >}}Data{{< /file >}}, vanilla means only Bethesda's own {{< file >}}.esm{{< /file >}} plugins and {{< file >}}.bsa{{< /file >}} archives. If you see folders like {{< file folder-open >}}Meshes{{< /file >}}, {{< file folder-open >}}Textures{{< /file >}}, {{< file folder-open >}}SKSE{{< /file >}}, or {{< file folder-open >}}Interface{{< /file >}}, or any {{< file >}}.esp{{< /file >}} or {{< file >}}.dll{{< /file >}} files, those are from mods installed outside a mod manager.

{{< aside type="btw" title="Creation Club castaways" >}}
If you've copied Creation Club content from Skyrim Anniversary Edition (a.k.a. Flatrim) to your Skyrim VR `Data` folder, they probably won't actually hurt anything (though they won't help anything either). Those {{< file >}}cc*{{< /file >}} files show up in MO2 as _Unmanaged_ mods, and having them sit in {{< file folder-open >}}Data{{< /file >}} does no actual harm. MO2 won't actually attempt to load them unless you go out of your way to enable them.
{{< /aside >}}

## Removing the extras

Delete anything that isn't on the list above. Make a backup if you like, but get the files out of the actual game folder. If your {{< file folder-open >}}Data{{< /file >}} folder is so packed that you can't tell what's vanilla, the nuclear option is simplest: delete the entire {{< file folder-open >}}Data{{< /file >}} folder, and let the verification step below re-download it fresh. This guarantees a vanilla installation.

## Verify your game files in Steam

Whatever you removed (or even if you removed nothing), finish with Steam's built-in check, which compares every file against the originals and re-downloads whatever is modified or missing.

1. In your Steam Library, right-click **The Elder Scrolls V: Skyrim VR** and choose {{< btn-inline >}}Properties...{{< /btn-inline >}}.
2. Select the {{< btn-inline >}}Installed Files{{< /btn-inline >}} tab.
3. Click {{< btn-inline >}}Verify integrity of game files{{< /btn-inline >}} and let it finish.

If it reports files that "failed to validate and will be reacquired," that's good. It means that Steam is replacing bad files with clean ones.

## How a dirty installation manifests

If you skip this and things go wrong, here are a few examples of how it may go.

* **Wabbajack fails partway through installing the list**, with file-hash mismatch errors. It expected the original game files and found something else.
* **The game crashes at launch with a message about a missing master file**. Something in your Skyrim VR installation is missing or altered.
* **An OpenComposite error dialog at launch.** When the game folder holds leftovers from an old OpenComposite or other VR-runtime setup, OCU can fail to start a VR session and abort with a dialog like this:

{{< dialog title="OpenComposite Error - info in log" >}}
OpenXR Call failed, aborting. DrvOpenXR\DrvOpenXR.cpp:342
SetupSession. Error code: XR_ERROR_RUNTIME_FAILURE
xrCreateSession(xr_instance, &sessioninfo, &xr_session.get0)
{{< /dialog >}}


* **Shaders "compile" in seconds, and the game looks wrong.** The [first launch](/first-launch/compiling-shaders) should spend a good while compiling shaders. If it blows through in moments and you load into a world of wrong-looking textures, don't marvel at your luck. The compile didn't really happen, and a dirty install is the usual culprit.
* **Bugs that only you have.** Leftover loose files in {{< file folder-open >}}Data{{< /file >}} and stray injector DLLs load alongside the list and override or fight with it unpredictably. The result is crashes and visual glitches that nobody in the Discord can reproduce, because nobody else's install has your particular ghosts. If your problems are unique, a dirty install is one of the first suspects.