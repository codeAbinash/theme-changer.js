import ThemeChanger from '../../index.js'
let theme = new ThemeChanger({
    theme: {
        light:
            `--bg : #eef;
            --text: #223;`,
        dark:
            `--text: #eee;
            --bg: #112;`
    }
})


let darkButton = document.getElementById('dark')
let lightButton = document.getElementById('light')
let toggleButton = document.getElementById('toggle')
let allButtons = document.querySelector('.buttonsDiv')


darkButton.onclick = () => theme.applyDarkMode()
lightButton.onclick = () => theme.applyLightMode()
toggleButton.onclick = () => theme.toggle()

allButtons.onclick = getTheme
function getTheme(){
    document.getElementById('theme').innerHTML = theme.getTheme()
}
getTheme()