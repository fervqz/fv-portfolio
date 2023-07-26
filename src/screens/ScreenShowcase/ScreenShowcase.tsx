import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import HightlightTitle from "../../components/HighlightTitle/HighlightTitle";
import LayoutScreen from "../../components/LayoutScreen/LayoutScreen";
import Spacer from "../../components/Spacer/Spacer";
import { useEffect, useState } from "react";

const ScreenShowcase: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 400);
    }, []);

    return (
        <LayoutScreen loading={isLoading}>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Typography variant="h2">
                        Welcome to the <HightlightTitle>Showcase</HightlightTitle>
                    </Typography>
                    <Typography variant="h5">
                        This page is <HightlightTitle>responsive</HightlightTitle>, try it!
                    </Typography>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <Typography variant="h5">
                        There is a<code> &lt;Spacer/&gt; </code>element between <HightlightTitle>here</HightlightTitle>
                    </Typography>
                </Grid>

                <Spacer sx={{ border: '2px dashed black' }} />

                <Grid item md={12}>
                    <Typography variant="h5">
                        and <HightlightTitle>here!</HightlightTitle>
                    </Typography>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <Typography variant="h5">
                        Title of the next section
                    </Typography>
                </Grid>

                <Grid item md={12}>
                    <Typography>
                        Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                        Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                        Commodi accusamus odit velit modi distinctio! Sequi pariatur voluptate, cupiditate unde, enim neque similique praesentium suscipit id minima magnam. Possimus perspiciatis repellat at illo tempora porro aperiam soluta blanditiis sed!
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <Button
                        variant="contained"
                        disableElevation
                        fullWidth
                    >Test Button</Button>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        fullWidth
                    >Test Button</Button>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <Typography>
                        Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                        Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                        Commodi accusamus odit velit modi distinctio! Sequi pariatur voluptate, cupiditate unde, enim neque similique praesentium suscipit id minima magnam. Possimus perspiciatis repellat at illo tempora porro aperiam soluta blanditiis sed!
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end" spacing={4}>

                        <Grid item xs={12} sm={4} md={3}>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                fullWidth
                            >Test Button</Button>
                        </Grid>

                        <Grid item xs={12} sm={4} md={3}>
                            <Button
                                variant="contained"
                                disableElevation
                                fullWidth
                            >Test Button</Button>
                        </Grid>

                    </Grid>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <Card>
                        <CardContent>

                            <Typography variant="h5" gutterBottom>This is a example Card</Typography>

                            <Typography>
                                Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                                Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                            </Typography>

                            <Spacer size="medium" />

                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-end" spacing={2}>

                                    <Grid item xs={12} sm={3} md={2}>
                                        <Button
                                            variant="text"
                                            color="error"
                                            disableElevation
                                            fullWidth
                                        >Cancelar</Button>
                                    </Grid>

                                    <Grid item xs={12} sm={3} md={2}>
                                        <Button
                                            variant="contained"
                                            disableElevation
                                            fullWidth
                                        >Guardar</Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Spacer />

                <Grid item xs={12}>
                    <Typography variant="h5">
                        Buttons
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="flex-start" spacing={4}>

                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="primary" variant="contained" disableElevation fullWidth>Primary Button</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="secondary" variant="contained" disableElevation fullWidth>Secondary Button</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="success" variant="contained" disableElevation fullWidth>Success Button</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="info" variant="contained" disableElevation fullWidth>Info Button</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="warning" variant="contained" disableElevation fullWidth>Warning Button</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button color="error" variant="contained" disableElevation fullWidth>Error Button</Button>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        </LayoutScreen >
    );
}

export default ScreenShowcase;