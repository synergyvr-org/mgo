+++
title = 'MO2 Overwrite'
weight = 88
+++

At the bottom of the list on the left side of Mod Organizer, you'll see an entry labeled _Overwrite_. It may appear grayed-out when you first install MGO, but once you've played it should be either white-on-orange, or red-on-gray.

_Overwrite_ is there to catch any new files that are written to disk during program execution. For example, the first time you run MGO, [Community Shaders](/reference/shader-cache/) will write compiled shaders to {{< file folder-open>}}Overwrite{{< /file >}}. 

{{< caption name="mo2-overwrite" type="webp" >}}
_Overwrite_ appears at the bottom of the list on the left side of Mod Organizer 2.
{{< /caption >}}

## What and why?

MO2 uses a Virtual File System (VFS) to keep your Skyrim VR installation folder pristine. Every program you run using the {{< btn-inline play >}}Run{{< /btn-inline >}} button in MO2, whether it's the game itself or one of the other included tools, will run from this VFS. These programs sometimes need to write new files to disk, and when they do, they get written to the VFS. When the program finishes running, and the VFS is unmounted, those files would be lost if not for the {{< file folder-open>}}Overwrite{{< /file >}} folder.

{{< aside type="btw" title="BTW" >}}
When MGO writes to _existing_ files, they remain in their original location. This applies to files in {{< btn-inline folder-open >}}Documents\My Games\Skyrim VR{{< /btn-inline >}}, for example.
{{< /aside >}}

You can see exactly what's in the folder by right-clicking its entry in MO2 and selecting _Open in Explorer_ from the context menu.

{{< caption name="mo2-overwrite-explorer" type="webp" >}}
Right-click _Overwrite_ and select _Open in Explorer_ to browse the contents.
{{< /caption >}}

{{< caption name="explorer-overwrite" type="webp" >}}
Example of the contents of an _Overwrite_ folder after a single play session.
{{< /caption >}}

Aside from Community Shaders, MCMs may write to _Overwrite_. Utilities like BodySlide and DynDOLOD put their output there as well. I recommend treating this folder as though its contents could be lost at any time. That shouldn't happen out of the blue, but don't treat it as permanent storage. For things like BodySlide output, LODs, and the like, it's cleaner to move the files out of _Overwrite_ and into an actual mod.
