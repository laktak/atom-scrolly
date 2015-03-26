# Scrolly

![scrolly](https://raw.github.com/laktak/atom-scrolly/master/scrolly.gif)

**This package is no longer maintained and looking for a new owner. If you'd like to take over please let me know**

Scrolly let's you scroll up and down while keeping the cursor on the same line. This is great to get a quick look at the lines that are off screen without loosing your position.

The functionality is basically the same as if you were using the mouse wheel.

## Installation

```sh
apm install scrolly
```
or find it in the Packages tab under settings

## Usage Mac

- `alt-up` scroll up one line
- `alt-down` scroll down one line

## Usage Linux/Windows

- `ctrl-up` scroll up one line
- `ctrl-down` scroll down one line

## Horizontal scrolling

You can enable horizontal scrolling by assigning keys to your keymap:

```
'.workspace .editor:not(.mini)':
  'alt-left': 'scrolly:left'
  'alt-right': 'scrolly:right'
```
