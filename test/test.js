import ThemeChanger from "../src/index.js";

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