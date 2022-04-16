import { extendTheme } from '@chakra-ui/react';

const themeOptions = {
    config: {
        initialColorMode: "dark"
    },
    fonts: {
        body: `Sahel, -apple-system, 
        BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol"`
    },
    styles: {
        global: {
            body: {
                bg: 'radial-gradient(ellipse at bottom, #002b60 0%, #0c0d13 100%)'
            }
        }
    }
}

console.log(extendTheme(themeOptions))

export default extendTheme(themeOptions)