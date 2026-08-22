# MGO Documentation Changelog

All notable changes to the MGO documentation site, based on its
[deployments](https://github.com/synergyvr-org/mgo/deployments). Entries before 2026-06-30 come from the site's previous home, [dstrus/mgo-tutorial](https://github.com/dstrus/mgo-tutorial/deployments).

The site deploys continuously from `main`, so entries are grouped by date rather than version. Each date collects everything that went live that day. Multiple deployments of the same commit (re-runs and retries) are merged. The format is based on [Keep a Changelog](https://keepachangelog.com/).

## 2026-08-22

## Changed
- Moved a bunch of stuff to a new Hugo module, to be shared across the sites for Synergy Team's various lists.

## 2026-08-18

## Changed
- Increased virtual memory guidance (again).

## 2026-08-16

### Added
- FUS load orders and diffs, with custom branding.
- Shortcode for easy (and nice looking) mod list diffs.

## Changed
- Some minor markup and stylesheet changes for chapter headings
- Updated load order shortcode to accommodate lists that don't use the nested folder plugin that MGO uses.

## 2026-08-15

### Added
- New FAQs for opening Dwemer doors (like the door to Markarth) and restoring enemy healthbars.
- Load order for the first dev build of MGO 4.0 RC4

### Removed
- Notice saying that RC3 isn't out yet. It is!

## 2026-08-13

### Changed
- Fixed RC3 load order to include the file names, and noted that it has been released.

## 2026-08-11

### Added
- New Virtual Desktop guide.

### Changed
- Updated VRAMr guide to note that it may detect your Flatrim installation instead of Skyrim VR.

## 2026-08-10

### Changed
- Increased virtual memory recommendation to 60 GB for folks with 32 GB of system memory.
- Add an alert to the VRAMr guide reminding players to double-check that it's not pointed at Flatrim.

### Removed
- Page dedicated to Fake Edge VR (URL redirects to Combat now), and removed all incoming links across 5 other pages

## 2026-08-09

### Changed
- MGO 4.0 RC3 load order finalized (with the possible exception of the CSX version number)
- Onboarding page updated to match RC3, which differs significantly from RC2
- Update home page to reflect how to actually find the beta downloads
- Updated FAQ "brawling" answer to point out "VRIK Closed Fist"
- Updated Virtual Memory instructions to note that the 40 GB swap file just needs to be on a fast disk, not necessarily the one where MGO is installed.
- Increase NVIDIA shader cache requirement to 20 GB
- Clarified VR application (like Skyrim) vs. runtime (like Steam VR) in onboarding docs.
- Update several pages to reflect that Kvite controller bindings are now the default
- Update Magic page to reflect RC3 (and to generally be more thorough).

## 2026-07-30

### Changed
- Updated 4.0 RC3 (still in dev) load order.
- Moved Physical Collision VR out of the RC3 optional section (now part of the core list).
- Documented Blade and Blunt's optional Adjusted Difficulty Scaling companion.

## 2026-07-26

### Added
- New "Sheogorath in Solitude" 404 page.

### Changed
- Updated Onboarding and the load order for latest RC3 dev build.
- Scoped the `.highlight` CSS so it no longer clashes with the Relearn theme.

## 2026-07-23

### Added
- "Sync Plugins" screenshot and endorsement reminder.
- Nexus and MO2 screenshots in "Installing a Mod."
- Previously missing images.

### Changed
- Finished the per-question permalink anchors in the FAQ.
- Updated Tutorials copy and the "Installing a Mod" walkthrough.

### Fixed
- Repaired the broken "How To Play" chapter page.

## 2026-07-22

### Added
- FAQ page, with per-question permalink anchors and a click-to-copy icon.
- Alternate Perspective page and the RC3 Onboarding page.
- MGO 2.5.5 in the chapter page and navigation.
- FAQ link on the Reference chapter page.

### Fixed
- Cleaned up some Markdown formatting.

## 2026-07-21

### Added
- "Download CSV" button on the Load Order pages.
- MGO 2.5.5 (ENB) load order.
- Updated 4.0 RC3 (dev) load order.

### Changed
- Reworked load order colors: correct separator gradients inside and outside onboarding, zebra striping, and indentation.
- Made the load order filter, count, and buttons responsive.
- Updated Load Order copy to reflect the removed Status column.

### Fixed
- Repaired a broken controller diagram.

## 2026-07-20

### Added
- Searchable load order pages for RC2 and RC3.
- "Clean install" explanation in Onboarding.
- Built out the VRAMr page.
- Requirements note about moving the Steam folder manually (the easy way).

### Changed
- Updated Onboarding for RC2.
- Documented the latest Community Shaders features, including renderscale and performance tuning.
- Added "Sync Plugins" guidance to the Fake Edge page.
- Updated the Glossary and the Reference index.
- Styled code blocks (with an INI filetype label and syntax highlighting) and extracted SCSS rules into partials.

## 2026-07-16

### Added
- Tutorial for installing a mod.
- Built out the Reference chapter index.

## 2026-07-15

### Added
- Mod Highlights chapter index, with Spell Wheel VR, VRIK, and Weapon Throw VR pages.
- Magic page.
- Immersive Reading, Interactive Torches, and Interactive Instruments entries.
- Aside about OCU gestures.

### Changed
- Updated Combat, Marksmanship, and Movement pages.
- Minor edits to DovaVR and a re-order of the Fake Edge content.

### Fixed
- Fixed the VRAMr YouTube link, several broken links, and the missing low-DPI sidebar logo.

## 2026-07-13

### Added
- GitHub Issues configuration.
- Dynamic "next chapter" links.

### Changed
- Renamed "Appendices" to "Reference" and updated the glossary.
- Rearranged the mod-specific pages and other reference material.
- Updated the controller bindings chapter page.
- Added a "wait for MCMs" note.

### Fixed
- Repaired a broken link.

## 2026-07-10

### Added
- Dedicated DovaVR Locomotion page.

### Changed
- Renamed "Pre-Game" to "Onboarding" throughout the site.
- Updated the Movement page.

## 2026-07-09

### Added
- Performance chapter (the OCU and Community Shaders pages moved here).
- BETA alert.

### Changed
- Updated the glossary.

## 2026-07-08

### Added
- Skills & Perks page.
- SkyrimNet coverage.

### Changed
- Updated Onboarding to move "Stop Unsheathing" out of the optional section, and linked to the OCU page from Onboarding.
- Revised the Convenience and AI/Voice sections.
- Added a note about FPS selection with frame generation enabled.

## 2026-07-07

### Added
- Up-to-date OpenComposite Unleashed details.
- Fake Edge VR details, plus INI-editing instructions.
- Troned's recommended settings for Community Shaders.

### Changed
- Renamed "Before You Play"/"Pre-Start" to "Onboarding" and finished the onboarding flow for 3.9.0.7.

### Fixed
- Fixed shortcode issues.
- Disabled/hid the copy-to-clipboard buttons on code blocks.

## 2026-07-06

### Changed
- Updated the MO2 onboarding details for build 3.9.0.7 (in progress).

## 2026-07-05

### Added
- Custom video controls actually wired into the `video` shortcode.
- Kvite and Cangar binding details.

### Changed
- Extensive controller-binding documentation improvements, especially for Optimized Oculus.
- Improved the inline stick-press images.
- Applied SCSS nesting to more rules.

## 2026-07-04

### Added
- Custom video player controls.
- VR Safe controller bindings.

### Changed
- Expanded the intro copy (including Snippy's beta announcement) and updated the `aside` style.
- Clarified that using the SteamVR runtime means *not* using OpenComposite.
- Refactored custom video control CSS to SCSS.

### Removed
- Static experiments for the synergyvr.org homepage (now in a separate repo).

## 2026-07-02

### Changed
- Adjusted the sidebar logo spacing.
- Made footer links identifiable without hovering.

## 2026-06-30

### Changed
- Migrated the site to its new home at https://synergy.org/mgo (repo `synergyvr-org/mgo`), from its previous home at https://daveystrus.com/mgo-tutorial (repo `dstrus/mgo-tutorial`). Updated the base path from `/mgo-tutorial` to `/mgo`.
- Updated the README.

## 2026-06-26

### Added
- Discord invite.

### Changed
- Updated the MO2 walkthrough (in progress) and clarified installation instructions.
- Adjusted the MO2 onboarding separator colors.

## 2026-06-17

### Added
- Glossary.

### Changed
- Rearranged, simplified, and improved the glossary.
- Tweaked the topbar link hover color.

## 2026-06-16

### Fixed
- Fixed typos and H1/H2 line-height issues.

## 2026-06-15

### Changed
- Replaced the Sovngarde font with Futura and restyled chapter headings (with color adjustments).
- Added a static test page with a custom video player.

### Fixed
- Fixed the `control` shortcode's display when nested inside another shortcode.

## 2026-06-03

### Added
- Parallax test page (in progress).

## 2026-05-31

### Added
- Inline controller diagrams.
- "Convenience" subheading for optional mods.

### Changed
- Updated the shader compilation details.
- Clarified what is and isn't written to the Overwrite folder, what "Verify integrity of game files" does, and the Virtual File System.
- Replaced the old icon links with the new MGO 4.0 icon (with preview).

## 2026-05-26

### Changed
- Updated the VRIK bindings copy to mention Index controls.
- Updated the "Pre-Game" page for MO2 as of 3.9.0.4.

## 2026-05-25

### Added
- `steam` shortcode and the start of the Interaction details.

### Changed
- Updated the README.

## 2026-05-24

### Changed
- Updated the main and sidebar with MGO 4.0 logos.

## 2026-05-20

### Changed
- Updated branding for MGO 4.0, began updating the MO2 changes, and updated the VRIK bindings image.

### Fixed
- Fixed a typo.

## 2026-05-19

### Changed
- Updated the favicon and background gradients.

## 2026-05-17

### Added
- Marksmanship content.

### Changed
- Updated branding.

## 2026-05-14

### Changed
- Updated the Interaction page.

## 2026-05-12

### Changed
- Started building out the "How To Play" sub-pages and replaced the interaction GIF.

## 2026-05-09

### Added
- `chapter-heading` shortcode and "How To Play" GIFs.

### Fixed
- Fixed a typo and removed a footnote that failed to parse.

## 2026-05-08

### Added
- "How To Play" chapter page, with placeholders for its sub-pages.

### Changed
- Renamed the Alternate Start page.

## 2026-05-07

### Added
- Built out the "Before You Play" and "First Launch" chapter pages.
- Filled out "Start a New Life" with footnotes.
- Videos on the home page.

## 2026-05-06

### Changed
- Improved the alert gradient, the "next" button background, and added a bunch of new background images (Dragon Claw, Amulet of Mara, Kartaag's Skull); removed unused styles.
- Updated the note about broken RaceMenu options.

## 2026-05-05

### Changed
- Updated cover and main content to scroll independently of the topbar.
- Updated the home page with the logo and removed the cover screenshot.

### Fixed
- Added a missing image.

## 2026-05-04

### Added
- "Monstrosity" image and "undress" info on the character creation page.

## 2026-05-03

### Changed
- Added video borders.
- Stopped auto-hyphenating page titles (H1).

## 2026-05-02

### Added
- Character creation page, with captioned videos and character-naming info.

### Changed
- Mentioned the Experience mod and increased the opacity of info-box background gradients.

### Fixed
- Fixed typos.

## 2026-05-01

### Fixed
- Fixed the repeating background attachment and applied it to the active sidebar link.

## 2026-04-30

### Changed
- Added a repeating background image.

## 2026-04-28

### Added
- MO2 Overwrite folder page.

## 2026-04-27

### Changed
- Rearranged the Community Shaders intro and updated background art.

## 2026-04-24

### Added
- First Launch section and the Community Shaders page.

### Fixed
- Fixed banner-image JS that was overwriting `window.onload`.

## 2026-04-23

### Changed
- Randomized the alert-box backgrounds and added helmet/mask art (Daedric, Dragon Priest, Dwarven) to the rotation.

## 2026-04-22

### Changed
- Updated the VRIK bindings diagrams with a new photo angle and separate front and side views.

## 2026-04-21

### Added
- VRIK controller bindings and OCU keyboard instructions, in their own section.
- Music-replacement mod descriptions and the start of the AI section.

### Changed
- Formatted external links more consistently and linked the shader cache instructions from the installation page.

## 2026-04-20

### Added
- MO2 page (in progress) and OpenComposite page.
- OCU screenshots, MO2 shortcut menu and configuration details.
- Detailed shader cache size instructions.
- Nexus page links.

### Changed
- Linked full-size images from smaller, captioned versions; randomized the h1 banner screenshots; added background art for asides; removed chapter numbers; added a "reboot after installing runtimes" note; decorated the Nexus and GitHub links.

### Fixed
- Fixed the webfont path and prevented mid-word breaks.

## 2026-04-19

### Added
- Virtual memory screenshots.

### Changed
- Replaced most PNGs with WebP.

### Fixed
- Fixed H2/anchor spacing.

## 2026-04-18

### Changed
- Cleaned up the logo/title layout.

## 2026-04-17

### Added
- Initial deployment of the site: Hugo with the Relearn theme, GitHub Actions deployment, favicon, and the Sovngarde webfont.
- Core shortcodes (`file`, `btn-inline`, asides, and captions).
- Start, Installation, Requirements, and home pages, with "next" links between chapters.
- MGO desktop-shortcut instructions, with video.

### Changed
- Expanded Requirements (NVMe storage, virtual memory details, and a game-folder move link) and refined page titles.
- Canonified URLs.

### Fixed
- Fixed image URLs and file extensions, the `btn` shortcode, and a stray `C:\Program Files` path.

## 2026-04-05

### Add
- Everything! Initial commit.
- Initial Hugo configuration.
- Initial shortcodes (resurrecting ones from past projects and making them work with the current Hugo release; it's been a few years!)
- Began writing initial content: Home, Requirements, Installation, Start.
