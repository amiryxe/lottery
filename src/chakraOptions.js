import { extendTheme } from '@chakra-ui/react';


const themeOptions = {
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
    },
    config: {
        initialColorMode: "dark"
    },
}

export default extendTheme(themeOptions)