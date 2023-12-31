import { createTheme } from "@mui/material";
import variables from "./variables";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000',
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
            default: '#f5f5f7',
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
                    boxShadow: 'none',
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
                // raised: true, Only apply if variant = elevation
                // elevation: 4, Only apply if variant = elevation
            },
            styleOverrides: {
                root: {
                    padding: '1rem',
                    borderRadius: variables.card.borderRadius,
                    borderColor: '#F1F1F1',
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