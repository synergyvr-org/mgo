# MGO Documentation Changelog

All notable changes to the MGO documentation site, based on its
[deployments](https://github.com/synergyvr-org/mgo/deployments).

The site deploys continuously from `main`, so entries are grouped by date rather than version. Each date collects everything that went live that day. Multiple deployments of the same commit (re-runs and retries) are merged. The format is based on [Keep a Changelog](https://keepachangelog.com/).

## 2026-07-30

### Changed
- Updated 4.0 RC3 (dev) load order.
- Moved Physical Collision VR out of the RC3 optional section (now part of the core list).
- Documented Blade and Blunt's optional Adjusted Difficulty Scaling companion.

## 2026-07-26

### Added
- New "Sheogorath in Solitude" 404 page.

### Changed
- Updated Onboarding and the load order for RC3.
- Scoped the `.highlight` CSS so it no longer clashes with the Relearn theme.

## 2026-07-23

### Added
- "Sync Plugins" screenshot and endorsement reminder.
- Nexus and MO2 screenshots in "Installing a Mod."
- Previously missing images.

### Changed
- Finished the per-question permalink anchors in the FAQ.
- Updated Tutorials copy and the "Installing a Mod" walkthrough, including its Discord link.

### Fixed
- Repaired the broken "How To Play" chapter page.

## 2026-07-22

### Added
- FAQ page, with per-question permalink anchors and a click-to-copy icon.
- Alternate Perspective page and the RC3 Onboarding page.
- MGO 2.5.5 in the chapter page and navigation.
- "NPC appearance" question and answer.
- FAQ link on the Reference chapter page.

### Fixed
- Cleaned up some Markdown formatting.

## 2026-07-21

### Added
- "Download CSV" button on the Load Order pages.
- MGO 2.5.5 (ENB) load order.
- Updated 4.0 RC3 (dev) load order.

### Changed
- Reworked load-order colors: onboarding-step gradient, zebra striping, indentation, and correct separator gradient outside onboarding.
- Made the load-order filter, count, and buttons responsive.
- Updated Load Order copy to reflect the removed Status column.

### Fixed
- Repaired the broken controller diagram.

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
- Fixed the VRAMr YouTube link, several broken links, and the low-DPI sidebar logo.

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
- Troned's Community Shaders recommendations.

### Changed
- Renamed "Before You Play"/"Pre-Start" to "Onboarding" and finished the onboarding flow.

### Fixed
- Fixed shortcode issues.
- Disabled/hid the copy-to-clipboard buttons on code blocks.

## 2026-07-06

### Changed
- Updated the MO2 details for build 3.9.0.7.

## 2026-07-05

### Added
- Custom video controls, wired into the `video` shortcode.
- Oculus Touch bindings, plus Kvite and Cangar binding details.

### Changed
- Extensive controller-binding documentation improvements, especially for Optimized Oculus.
- Improved the inline stick-press images.
- Applied SCSS nesting to more rules.

## 2026-07-04

### Added
- Custom video controls.
- VR Safe controller bindings.

### Changed
- Expanded the intro copy (including Snippy's announcement) and updated the `aside` style.
- Clarified that using the SteamVR runtime means *not* using OpenComposite.
- Refactored custom video-control CSS to SCSS.

### Removed
- Static experiments for the synergyvr.org homepage.

## 2026-07-02

### Changed
- Adjusted the sidebar logo spacing.
- Made footer links noticeable without hovering.

## 2026-06-30

### Added
- Initial deployment of the MGO documentation site to its home on synergy.org (built on roughly 140 commits of prior development history, previously deployed at https://daveystrus.com/mgo-tutorial).
- README.
