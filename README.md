# Theme Changer
![Theme Changer](https://codeabinash.github.io/codeAbinash/files/repo/images/theme-changer.js.png)

The simplest JavaScript library to apply light - dark theme in your website.
## First Check Out One [Example](https://codeabinash.github.io/theme-changer.js/test/eg1/)

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
import themeChanger from "https://codeabinash.github.io/theme-changer.js/index.js";
let theme = new themeChanger({
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
Check The example from here : https://codeabinash.github.io/theme-changer.js/test/



### `constructor()`
```js
let theme = new themeChanger({
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
let theme = new themeChanger({
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
### `getTheme()`
```js
theme.getTheme() 
// returns 'Light' or 'Dark' or 'Auto'
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


## npm
```
npm i theme-changer-light-dark
```