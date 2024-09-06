interface MenuItemInterface {
    id: string
    label: string
    link: string
}

export interface MainMenuInterface {
    logo: boolean
    apptitle: string
    items: MenuItemInterface[]
}

export interface CONSTANTSInterface {
    menu: {
        mainmenu: MainMenuInterface
    }
}

// https://webflow.com/blog/elegant-color-palettes
export const THEME = Object.freeze({
    colors: {
        light: {
            background: '#F4F1DE',
            foreground: '#3D405B',
            bold: '#E07A5F',
        },
        websiteLight: {
            background: '#80a080',
            foreground: '#101010',
            bold: '#ff0000',
        },
        dark: {
            background: '#3D405B',
            foreground: '#F4F1DE',
            bold: '#81B29A',
        },
        menu: {
            background: '#E07A5F',
            foreground: '#F4F1DE',
        },
    },
    padding: {
        global: {
            left: '1rem',
        },
    },
})

export const CONSTANTS: CONSTANTSInterface = Object.freeze({
    menu: {
        mainmenu: {
            logo: false,
            apptitle: 'BackOffice',
            items: [
                {
                    id: 'home',
                    label: 'Home',
                    link: '/home',
                },
                {
                    id: 'frametest',
                    label: 'iFrame Test',
                    link: '/frametest',
                },
            ],
        },
    },
})
