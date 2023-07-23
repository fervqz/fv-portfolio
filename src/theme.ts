import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3F2305',
        },
        secondary: {
            main: '#CFE6EF',
        },
        success: {
            main: '#4CAF50',
        },
        info: {
            main: '#58BCE9',
        },
        warning: {
            main: '#FF9800',
        },
        error: {
            main: '#EF5350',
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});

export default theme;