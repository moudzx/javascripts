# javascripts

At 2013 I pasted my first JavaScript into a browser console. The scripts turned Facebook a different color or auto-liked a bunch of posts. I had no idea what they did, only that a page could be changed from the outside. That was my first contact with programming, this repo is the same idea.


## Scripts
 
| Script | What it does |
| --- | --- |
| `recolor-page.js` | Applies a random color theme to the page |
| `dark-mode.js` | Toggles a quick dark mode on any site |
| `extract-links.js` | Tables all links and copies the URLs |
| `extract-images.js` | Lists all images with sizes and copies the URLs |
| `remove-overlays.js` | Removes fixed and sticky elements and restores scrolling |
| `edit-page.js` | Toggles `designMode` so you can edit text in place |
| `reveal-passwords.js` | Toggles password fields to plain text |
| `table-to-csv.js` | Downloads every table on the page as CSV |
| `reading-time.js` | Logs word count and estimated reading time |
| `outline-elements.js` | Toggles an outline on every element for layout debugging |
| `auto-click.js` | Clicks a selector on an interval with a hard limit |
| `auto-scroll.js` | Scrolls the page at a steady speed |

## Usage

Open DevTools and go to the Console, paste a script and press Enter (some browsers block pasting until you type `allow pasting`)

- Snippets : Chrome and Edge: DevTools, Sources, Snippets. Save a script and run it with `Ctrl+Enter`.
- Bookmarklets : Join the script onto one line, prefix it with `javascript:`, and save it as a bookmark URL. Click the bookmark to run it. Skip `extract-links.js` and `extract-images.js` here since `copy()` is console only.

## License
MIT
