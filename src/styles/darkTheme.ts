import { createTheme } from "@mui/material";
import variables from "./variables";

export default createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#EAEAEA',
            dark: '#FFF',
        },
        secondary: {
            light: 'red',
            main: '#3F2E3E',
            dark: '#573F56',
            contrastText: 'white',
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
        background: {
            default: '#331D2C',
            paper: '#3F2E3E'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: variables.button.borderRadius,
                    padding: '15px 30px',
                    textTransform: 'none',
                    fontWeight: '600',
                },
            },
        },
        MuiSkeleton: {
            defaultProps: {
                variant: variables.skeleton.variant,
                animation: variables.skeleton.animation,
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    backgroundColor: 'rgb(0, 0, 0, 0.4)',
                    zIndex: 999,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: variables.card.borderRadius,
                }
            }
        },
    },
});