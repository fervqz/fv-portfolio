import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import LayoutScreen from "../../components/LayoutScreen/LayoutScreen";
import HeroImg from "../../assets/img/me_hero.png";
import HightlightTitle from "../../components/HighlightTitle/HighlightTitle";

const ScreenHome = () => {
    return (
        <LayoutScreen>

            <Grid
                display="flex"
                alignItems="center"
                container
                sx={{
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    marginBottom: { xs: '2rem', md: '8rem' },
                }}
            >

                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        padding: { xs: '2rem 0px', md: 'none' },
                    }} >
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3.75rem' },
                            paddingBottom: { xs: '1rem', md: 'none' },
                        }}>Fernando Vásquez 👋</Typography>

                    <Typography variant="h5" sx={{ textWrap: 'balance' }}>
                        <HightlightTitle>Front-End</HightlightTitle> developer with +4 years of experience using React, TypeScript and cloud services such as AWS
                    </Typography>

                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    sx={{
                        justifyContent: { xs: 'center', md: 'flex-end' }
                    }}>
                    <Box sx={{
                        paddingTop: '1rem',
                        position: 'relative',
                        right: { xs: '0', md: '-10px' } // Kerning - Compensates rounded blob
                    }}>
                        <img src={HeroImg} alt="Photo of Fernando" style={{
                            position: 'relative',
                            width: '100%',
                        }} />
                    </Box>
                </Grid>

            </Grid>

            <Grid container display="flex" alignItems="center" spacing={4}>

                {Array.from(Array(10).keys()).map(() => (<Grid item xs={12} md={4} >
                    <Card>
                        <CardContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                        </CardContent>
                    </Card>
                </Grid>))}

            </Grid>

        </LayoutScreen >
    );
};

export default ScreenHome;