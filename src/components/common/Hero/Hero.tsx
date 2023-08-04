import { Grid, Typography, Box, Button } from "@mui/material";
import HightlightTitle from "../HighlightTitle/HighlightTitle";
import HeroImg from "../../../assets/img/me_hero.png";
import { useTranslation } from "react-i18next";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';
import config from '../../../consts/config';

const Hero: React.FC = () => {

    const { t } = useTranslation();

    return (
        <Grid
            display="flex"
            alignItems="center"
            container
            sx={{
                flexDirection: { xs: 'column-reverse', md: 'row' },
                marginBottom: { xs: '2rem', md: '9rem' },
                marginTop: { xs: '0', md: '3rem' },
            }}
        >

            <Grid
                item
                xs={12}
                md={7}
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    padding: { xs: '2rem 0px', md: 'none' },
                }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '3.75rem' },
                        paddingBottom: { xs: '1rem', md: 'none' },
                    }}>{t('home.hero-title')}</Typography>

                <Typography variant="h5" sx={{ textWrap: 'balance' }}>
                    <HightlightTitle>{t('home.hero-subtitle-highlight')}</HightlightTitle>
                    {t('home.hero-subtitle')}
                </Typography>

                <Grid container spacing={2} sx={{ paddingTop: '2rem' }}>

                    <Grid item xs={12} md={4}>
                        <Button
                            variant="contained"
                            fullWidth
                        >
                            {t('home.hero-button')}
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            endIcon={<LaunchIcon />}
                            fullWidth
                            component={Link}
                            to={config.gitHubUrl}
                            target="_blank"
                        >
                            {t('home.hero-button2')}
                        </Button>
                    </Grid>

                </Grid>
            </Grid>

            <Grid
                item
                xs={12}
                md={5}
                display="flex"
                sx={{
                    justifyContent: { xs: 'center', md: 'flex-end' }
                }}>
                <Box sx={{
                    paddingTop: '1rem',
                    position: 'relative',
                    right: { xs: '0', md: '-10px' } // Kerning - Compensates rounded blob
                }}>
                    <img
                        src={HeroImg}
                        alt="Photo of Fernando"
                        style={{
                            position: 'relative',
                            width: '100%',
                        }} />
                </Box>
            </Grid>

        </Grid>
    );
}

export default Hero;