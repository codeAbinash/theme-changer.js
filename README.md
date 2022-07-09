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
import CSSTheme from "https://codeabinash.github.io/theme-changer.js/index.js";
let theme = new CSSTheme({
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
Check The example here : 

