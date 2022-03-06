import { extendTheme } from '@chakra-ui/react';

const themeOptions = {
    config: {
        initialColorMode: "dark"
    },
    fonts: {
        body: 'Sahel, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
}

console.log(extendTheme())

export default extendTheme(themeOptions)