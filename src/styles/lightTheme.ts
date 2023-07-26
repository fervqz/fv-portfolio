import { createTheme } from "@mui/material";
import variables from "./variables";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3F2305',
            // dark: 'red',
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
        background: {
            default: '#F3FEFF',
            paper: '#FFF'
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
            defaultProps: {
                variant: 'outlined',
                // Only apply if variant = elevation
                raised: true,
                elevation: 4,
            },
            styleOverrides: {
                root: {
                    padding: '1rem',
                    borderRadius: variables.card.borderRadius,
                }
            }
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        }
    }
});

export default theme;