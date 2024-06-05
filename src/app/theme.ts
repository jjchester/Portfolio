// styles/theme.js
import { extendTheme } from "@chakra-ui/react";
const bgnavy = "rgb(34,36,55)";
const bggray = "rgb(30,30,30)";
const customTheme = extendTheme({
    colors: {
        brand:
        {
            50: '#e2fbed',
            100: '#c2ebd4',
            200: '#9fddb9',
            300: '#7ccf9e',
            400: '#58c184',
            500: '#3ea76a',
            600: '#2e8251',
            700: '#1f5d3a',
            800: '#0f3921',
            900: '#001506',
        },
        codegreen:
        {
            50: '#e2fdeb',
            100: '#bdf1d0',
            200: '#96e7b3',
            300: '#6edc94',
            400: '#47d277',
            500: '#2db85e',
            600: '#208f48',
            700: '#146633',
            800: '#073e1d',
            900: '#001603',
        }
    },
    styles: {
        global: {
            // Apply global styles here
            body: {
                bg: bgnavy, // Set the global background color
                color: "codegreen.400",
            },
        },
    },
});

export default customTheme;
