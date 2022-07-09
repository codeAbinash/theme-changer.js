/*let setting = {
    selector : String,
    theme : {
        dark : String,
        light: String
    }
}*/
export default class ThemeChanger {
    'use strict'
    constructor(data) {
        if (!localStorage.ThemeChangerChangerLastTheme)
            localStorage.ThemeChangerChangerLastTheme = 0
        this.status = +localStorage.ThemeChangerChangerLastTheme

        if (!data) return

        let selector = data.selector
        this.darkData = data.theme?.dark
        this.lightData = data.theme?.light

        if (!this.darkData || !this.lightData) {
            console.error("Required css is not found is not in the constructor()")
            return
        }
        this.#apply(this.status)

        if (!selector) return
        let domElem = document.querySelectorAll(selector)
        if (domElem.length === 0) {
            console.warn("No selector match found.")
            return
        }
        domElem.forEach(elem => {
            elem.onclick = () => {
                this.toggle()
            }
        })
    }
    #apply(status){
        switch (status) {
            case 0:
                this.#autoMode()
                break
            case 1:
                this.#lightMode()
                break
            case 2:
                this.#darkMode()
        }

    }
    getCurrentTheme() {
        const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        if (theme)
            return 'dark'
        return 'light'
    }

    toggle() {
        this.#changeStatus((this.status + 1) % 3)
        switch (this.status) {
            case 0:
                this.#autoMode()
                break
            case 1:
                this.#lightMode()
                break
            case 2:
                this.#darkMode()
        }
    }

    #changeStatus(status) {
        this.status = status
        localStorage.ThemeChangerChangerLastTheme = status
    }
    #darkMode() {
        this.#changeCssVar(this.darkData)
    }
    #lightMode() {
        this.#changeCssVar(this.lightData)
    }
    applyAutoMode() {
        this.#autoMode()
        this.#changeStatus(0)
    }
    applyLightMode() {
        this.#lightMode()
        this.#changeStatus(1)
    }
    applyDarkMode() {
        this.#darkMode()
        this.#changeStatus(2)
    }
    #autoMode() {
        let currentTheme = this.getCurrentTheme()
        if (currentTheme == 'dark')
            this.#darkMode()
        else
            this.#lightMode()
    }
    #changeCssVar(CSSdata = '') {
        CSSdata = CSSdata.trim().split(';')
        CSSdata = CSSdata.map(data => {
            data = data.replace('\n', '').trim()
            const index = data.indexOf(':')
            const prop = data.slice(0, index).trim()
            const val = data.slice(index + 1).trim()
            return { prop, val }
        })
        CSSdata.forEach(data => {
            document.documentElement.style.setProperty(data.prop, data.val)
        })
    }
}