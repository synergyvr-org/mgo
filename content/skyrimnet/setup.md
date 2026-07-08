+++
title = 'Setup'
weight = 10
+++

SkyrimNet is a rarity among the mods in Mad God's Overhaul in that it does require a bit of setup, but it walks you through the whole thing with a setup wizard. This page follows one path through that wizard from start to finish.

Two things to know going in:

* **SkyrimNet is optional and disabled by default.** Enable it (and its plugins) in MO2's **OPTIONAL Mods → AI and Speech** section.
* **SkyrimNet needs an AI provider, and the good ones cost money.** SkyrimNet itself is free, but many of the LLMs (large language models) that that it can talk to cost money. It's pay-as-you-go, and you can easily set a limit. About $10 of credit is plenty to get started.

{{< aside type="btw" title="What about the plugins?" >}}
The same **AI and Speech** section in MO2 includes a few SkyrimNet plugins. You probably want to enable {{< github "Severause/SeverActions" >}}SeverActions{{< /github >}} and {{< github "galanx/IntelEngine-GamePlugin" >}}IntelEngine{{< /github >}}, but you can follow those links to learn more about them. **OStimNet** is NSFW (and is only present in the NSFW list), so do with that what you will.
{{< /aside >}}

## Opening the dashboard

Everything happens in SkyrimNet's **dashboard**, a web interface that you can access once the game is running with SkyrimNet enabled. Visit {{< btn-inline >}}http://localhost:8080{{< /btn-inline >}} in a web browser on the PC where Skyrim VR is running.

The first time you open it, SkyrimNet walks you through the setup wizard. Move through it with the {{< btn-inline >}}Back{{< /btn-inline >}} and {{< btn-inline >}}Next{{< /btn-inline >}} buttons. Everything you configure here can be changed later from the dashboard, so don't worry too much. You can even run through the entire wizard again later.

The wizard opens with a welcome, a link to the SkyrimNet Discord (well worth joining for help), and a sign in screen. Account-based setup isn't available yet, so choose {{< btn-inline >}}Manual setup{{< /btn-inline >}} to continue.

## Choose an AI provider

{{< caption name="skyrimnet/06-provider" type="webp" >}}
Pick where SkyrimNet sends its AI requests. OpenRouter is the recommended choice.
{{< /caption >}}

Your provider is the service that runs the language models. SkyrimNet offers a few:

* **OpenRouter** (recommended) gives you one account with access to hundreds of models from every major lab. It's the best starting point.
* **NanoGPT**, **Nvidia NIM**, and **Chutes** are alternatives, each with its own pricing and model selection.
* **Custom Provider** lets you point at a self-hosted or OpenAI-compatible endpoint, if you know you need one.

The rest of this page assumes OpenRouter. Remember, you can change your provider later.

## Set up OpenRouter

{{< caption name="skyrimnet/05-openrouter" type="webp" >}}
Paste your OpenRouter API key. The endpoint is filled in for you.
{{< /caption >}}

Head to {{< ext "https://openrouter.ai" >}}OpenRouter{{< /ext >}}, create an account, and add a little credit (about $10 to start). Then create an API key and copy it. Back in the wizard, the **API Endpoint** is already filled in, so just paste your key into the **API Key** field. SkyrimNet checks the key as you go: a valid key shows a confirmation, while a bad key (or one with no credit) shows an error.

{{< aside type="alert" title="Save that key somewhere" >}}
OpenRouter only shows you the API key once, when you create it. Even though you're pasting it straight into SkyrimNet, copy it somewhere safe (a password manager, a note, etc.) in case you ever need it again. If you lose it, it's not a disaster. Just head back to OpenRouter, delete the old one, and create a new one.
{{< /aside >}}

## Choose your models

SkyrimNet uses language models for a whole range of jobs (dialogue, memories, combat decisions, and more). Rather than pick one for each, start with a preset:

* **Budget** keeps costs down and responses quick.
* **Balanced** is the sweet spot for most players, and a great place to start.
* **Premium** leans on stronger (pricier) models.

{{< caption name="skyrimnet/07-models" type="webp" >}}
Start with a preset. _Balanced_ is a sensible default, but don't be afraid to go with _Budget_ if you need to.
{{< /caption >}}

**Manual selection** lets you assign a specific model to each task, if you're not in a hurry and you know what you're doing.

## Test your models

Next, the wizard runs a quick check across every task (dialogue, character profiles, memory, combat, etc.) to confirm your provider and models are all responding. Give it a moment. A row of green checks means you're good to move on. If something fails, you might be missing credit on the API key you configured.

## Choose a text-to-speech engine

This is how NPCs actually speak their lines aloud. There are several engines, trading off quality, speed, cost, and hardware:

{{< caption name="skyrimnet/09-tts" type="webp" >}}
This is how NPCs get their voices. PocketTTS is a solid default. It's free, it's included, and it sounds pretty good.
{{< /caption >}}

* **PocketTTS** is bundled with SkyrimNet, runs on your CPU, and can clone voices from short samples. It's a strong free starting point, and its models download automatically the first time you use it.
* **Piper** is also bundled, extremely fast, and CPU-only, but it doesn't do voice cloning.
* **Inworld** and **ElevenLabs** are paid cloud services. (ElevenLabs has the best quality of the bunch.)
* **XTTS**, **Zonos**, and **Chatterbox** are open-source voice-cloning engines that need a local or rented GPU server.
* **Disabled** turns voice synthesis off entirely. NPCs still show their dialogue as text.

If you pick PocketTTS, there's nothing to configure, although an **Advanced** section is there if you want to adjust quality and performance. SkyrimNet then downloads the voice models (a one-time wait), and a **Test Your Voice** step lets you type a line and hear it spoken to confirm everything works.

## Set up your microphone

{{< caption name="skyrimnet/14-speech-to-text" type="webp" >}}
Choose how SkyrimNet turns your speech into text.
{{< /caption >}}

Listening is nice and all, but I bet you want to _talk_ too.

* **Local Whisper** runs a free, open-source speech model on your own machine (CPU or GPU).
* **External Whisper** points at an OpenAI-compatible Whisper API (needs an endpoint and key).
* **Disabled** skips voice input. You can still type to NPCs.

{{< caption name="skyrimnet/15-local-whisper-setup" type="webp" >}}
Pick a Whisper model size, and use the download button (which I failed to take a screenshot of) to fetch it.
{{< /caption >}}

For Local Whisper, pick a **Whisper Model** size. Smaller models are faster. Larger ones are more accurate, but slower. Use the download button next to the dropdown to fetch the model if you don't have it yet. If you have an NVIDIA GPU with CUDA support, you can install {{< ext "https://developer.nvidia.com/cuda-12-9-1-download-archive" >}}CUDA Toolkit{{< /ext >}} and turn on **GPU Acceleration** on the **Advanced** tab. A **Test Your Microphone** step then lets you record a few seconds and check the transcription.

## Hotkeys

SkyrimNet leans on hotkeys for things like opening the chat input, push-to-talk, and opening the dashboard. The wizard shows you the current bindings and lets you rebind or clear any of them. Not all are required, so set only the ones you'll actually use. You'll probably at least want one for **Voice Input (Push to Talk)**.

## Player options

{{< caption name="skyrimnet/21-player-options" type="webp" >}}
Be sure to pick a suitably cool voice.
{{< /caption >}}

These settings apply to you, the player:

* **Player Voice ID** and **Player Thoughts Voice ID** set the voices for your character's speech and inner monologue.
* **Player Reactions** lets your character generate their own thoughts and dialogue.
* **Player Memories** decides whether the world remembers what you do.
* **Voice Player Input** speaks your dialogue aloud (turn it off for subtitles only).
* **Enable Player Subtitles** shows subtitles when you speak.

You can change any of these later from **Characters → Player Settings**.

## Write your character bio

{{< caption name="skyrimnet/22-player-bio" type="webp" >}}
Tell the world who you are. The Summary and Appearance blocks are what NPCs notice about you right away.
{{< /caption >}}

Last, SkyrimNet wants to know who your character is. The bio is split into blocks: **Summary** and **Appearance** are what NPCs perceive when they meet you, while the others shape how your character role-plays. If you'd rather not write it all yourself, use the **Update Bio** button to have AI draft one for you. It works best with a save loaded, so the AI has a character to describe.

## You're ready to play

That's it. The wizard shows a final checklist (provider and models, TTS, speech-to-text, hotkeys, and your player options and bio) and a {{< btn-inline >}}Finish{{< /btn-inline >}} button. There's much more to explore in the dashboard when you're ready, but this is enough to start talking to the people of Skyrim.
