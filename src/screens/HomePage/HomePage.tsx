import { Card, CardContent, Grid } from "@mui/material";

import ScreenLayout from "../../components/common/Screenlayout/ScreenLayout";
import Hero from "../../components/common/Hero/Hero";

const HomePage = () => {

    return (
        <ScreenLayout isContainer>

            <Hero />

            <Grid container display="flex" alignItems="center" spacing={4}>

                {Array.from(Array(3).keys()).map(() => (<Grid item xs={12} md={4} >
                    <Card>
                        <CardContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                        </CardContent>
                    </Card>
                </Grid>))}

            </Grid>

        </ScreenLayout >
    );
};

export default HomePage;