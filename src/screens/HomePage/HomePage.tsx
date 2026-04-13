import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";

import Hero from "../../components/common/Hero/Hero";
import Spacer from "../../components/common/Spacer/Spacer";

const HomePage = () => {

    return (
        <Container sx={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>

            <Hero />

            <Typography variant="h2" textAlign="center" gutterBottom fontWeight={800}>Let's Begin</Typography>
            <Grid container display="flex" alignItems="center" spacing={4}>

                {Array.from(Array(3).keys()).map(() => (<Grid item xs={12} md={4} >
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom fontWeight={800}>Section Title</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            </Typography>
                            <Spacer />
                            <Button variant="outlined" fullWidth>
                                More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>))}

            </Grid>

        </Container>
    );
};

export default HomePage;