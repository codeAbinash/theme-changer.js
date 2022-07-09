# CSS var Theme Changer
The simplest JavaScript library to apply light - dark theme in your website.
## How to use

Files
- index.html
- style.css
- test.js



### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./test.js" type="module" defer></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello World</h1>
    <button class="btn">Toggle Button 1</button>
    <button class="btn">Toggle Button 2</button>
    <p>Auto -- Light -- Dark</p>
</body>
</html>
```


### style.css
```css
    body {
    background-color: var(--bg);
    color: var(--text);
}
```

### test.js
```js
import ThemeChanger from "https://codeabinash.github.io/theme-changer.js/index.js";
let theme = new ThemeChanger({
    selector : '.btn',
    theme: {
        light:
            `--bg : #ddd;
            --text: #555;`,
        dark:
            `--text: #eee;
            --bg: #222;`
    }
})
```
## Check The example from here : https://codeabinash.github.io/theme-changer.js/test/



### `constructor()`
```js
let theme = new ThemeChanger({
    selector : '.btn', // css selector (internally querySelectorAll)
    theme: {
        light: // css code 
            `--bg : #ddd;
            --text: #555;`,
        dark: // css code
            `--text: #eee;
            --bg: #222;`
    }
})
```
### It is ok to skip the `selector` property, but if you skip the `theme` property, it will throw an error.
```js
let theme = new ThemeChanger({
    theme: {
        light: 'CSS code for light theme',
        dark: 'CSS code for dark theme';
    }
})
```

### `getCurrentTheme()`
```js
theme.getCurrentTheme() 
// returns 'light' or 'dark'
```

### `toggle()`
```js
theme.toggle()
// toggles theme as auto - light - dark 
```

### `applyAutoMode()`
```js
theme.applyAutoMode()
// applies auto mode
```

### `applyLightMode()`
```js
theme.applyLightMode()
// applies light mode
```
### `applyDarkMode()`
```js
theme.applyDarkMode()
// applies dark mode
```


## for npm
..........