+++
title = 'Requirements'
weight = 10
+++

Mad God's Overhaul has a few prerequisites, so before you start downloading hundreds of gigabytes, be sure you're ready. The requirements are pretty steep, but there are some other excellent lists out there if your PC just can't cut it.

{{< aside type="alert" title="Hardware Requirements" >}}
* For NVIDIA: GeForce RTX 4070, 3080, or better
* For AMD: Radeon RX 7800 XT, 9070 XT, or better
* At least 12 GB of VRAM
* At least 32 GB of system memory
* Internal NVMe storage with 400 GB of free space

**The GPUs listed here are the _desktop_ versions.** The list is not nearly as widely tested on laptops. If you have a super high-end mobile GPU, perhaps an RTX 5090, you _may_ be able to run MGO.
{{< /aside >}}

If your hardware is up to the task, you will still not be able to download, install, and run the game unless you can meet the following software requirements.

{{< aside type="alert" title="Software Requirements" >}}

**You must...**
* Have a legal copy of Skyrim VR from Steam. **Pirated copies will not work.**
* Have a **clean install** of Skyrim VR, with nothing modified and no extra files in the game's root folder ([instructions](/reference/clean-install/))
* Move Skyrim VR out of the <span class="file"><i class="fa fa-folder-open"></i> C:\Program Files (x86)</span> folder to avoid issues with Windows Defender and other antivirus products ({{< ext "https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327#default" >}}instructions{{< /ext >}})[^1]
* Set Skyrim VR's language to English
* Download and install the latest {{< ext "https://aka.ms/vs/17/release/vc_redist.x64.exe" >}}Visual C++ Redistributable for X64{{< /ext >}}
* Download and install the latest {{< ext "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.11-windows-x64-installer" >}}.NET X64 run-time{{< /ext >}}

**You will need to reboot your PC after you've installed the two runtimes.**

[^1]: Apparently you can skip Steam's official move tool entirely: exit Steam _completely_, manually move the whole {{< file folder-open >}}Steam{{< /file >}} folder to its new home, and then launch Steam from the new location. It auto-detects that it's been moved and picks up right where it left off.
{{< /aside >}}

You may be able to install MGO without fulfilling the next set of requirements, but it may be unplayable.

{{< aside type="alert" title="Other Requirements" >}}

**You must...**

* Increase virtual memory to 40GB or more ([instructions](/reference/virtual-memory/))
* **NVIDIA only**: Set shader cache to 10GB or more in NVIDIA Control Panel ([instructions](/reference/shader-cache/))
{{< /aside >}}

You'll find that the MGO community is both friendly and helpful ([join the Discord!](https://discord.com/invite/WjSUaSPaQZ)), but please be certain that you've met all of the above requirements before asking for help.