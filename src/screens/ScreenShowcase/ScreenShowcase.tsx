import { Card, CardContent, Grid } from "@mui/material";
import AppTypography from "../../components/Common/AppTypography/AppTypography";
import HightlightTitle from "../../components/Common/HighlightTitle/HighlightTitle";
import LayoutScreen from "../../components/LayoutScreen/LayoutScreen";
import AppButton from "../../components/Common/AppButton/AppButton";
import Spacer from "../../components/Common/Spacer/Spacer";
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
                    <AppTypography variant="h2">
                        Welcome to the <HightlightTitle>Showcase</HightlightTitle>
                    </AppTypography>
                    <AppTypography variant="h5">
                        This page is <HightlightTitle>responsive</HightlightTitle>, try it!
                    </AppTypography>
                </Grid>

                <Grid item md={12}>
                    <AppTypography variant="h5">
                        There is a <code>&lt;Spacer/&gt;</code> element between <HightlightTitle>here</HightlightTitle>
                    </AppTypography>
                </Grid>

                <Spacer sx={{ border: '2px dashed black' }} />

                <Grid item md={12}>
                    <AppTypography variant="h5">
                        and <HightlightTitle>here!</HightlightTitle>
                    </AppTypography>
                </Grid>

                <Grid item md={12}>
                    <AppTypography variant="h5">
                        There is a <code>Spacer</code> element between here
                    </AppTypography>
                </Grid>

                <Grid item md={12}>
                    <AppTypography>
                        Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                        Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                        Commodi accusamus odit velit modi distinctio! Sequi pariatur voluptate, cupiditate unde, enim neque similique praesentium suscipit id minima magnam. Possimus perspiciatis repellat at illo tempora porro aperiam soluta blanditiis sed!
                    </AppTypography>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <AppButton
                        variant="contained"
                        disableElevation
                        fullWidth
                    >Test Button</AppButton>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <AppButton
                        variant="contained"
                        color="secondary"
                        disableElevation
                        fullWidth
                    >Test Button</AppButton>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <AppTypography>
                        Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                        Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                        Commodi accusamus odit velit modi distinctio! Sequi pariatur voluptate, cupiditate unde, enim neque similique praesentium suscipit id minima magnam. Possimus perspiciatis repellat at illo tempora porro aperiam soluta blanditiis sed!
                    </AppTypography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end" spacing={4}>

                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton
                                variant="contained"
                                color="secondary"
                                disableElevation
                                fullWidth
                            >Test Button</AppButton>
                        </Grid>

                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton
                                variant="contained"
                                disableElevation
                                fullWidth
                            >Test Button</AppButton>
                        </Grid>

                    </Grid>
                </Grid>

                <Spacer />

                <Grid item md={12}>
                    <Card variant="outlined">
                        <CardContent>

                            <AppTypography variant="h5" gutterBottom>This is a example Card</AppTypography>

                            <AppTypography>
                                Lorem ipsum dolor sit, amet <HightlightTitle>consectetur</HightlightTitle> adipisicing elit. Ea deleniti saepe hic debitis beatae quisquam maxime. Laborum veritatis culpa fuga sapiente pariatur dolores ipsam quos id, doloremque dignissimos? Esse, optio!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita excepturi magnam vel assumenda voluptatum, earum doloremque placeat culpa veniam ut libero quisquam id error, quaerat eligendi numquam, quibusdam et.
                                Suscipit quia sunt sit deserunt inventore blanditiis, labore impedit? Laudantium odit nemo mollitia doloremque, consequatur culpa atque architecto, ipsum veritatis, reprehenderit nam omnis. Numquam ducimus cumque ea. Similique, enim pariatur?
                            </AppTypography>

                            <Spacer size="medium" />

                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-end" spacing={2}>

                                    <Grid item xs={12} sm={3} md={2}>
                                        <AppButton
                                            variant="text"
                                            color="error"
                                            disableElevation
                                            fullWidth
                                        >Cancelar</AppButton>
                                    </Grid>

                                    <Grid item xs={12} sm={3} md={2}>
                                        <AppButton
                                            variant="contained"
                                            disableElevation
                                            fullWidth
                                        >Guardar</AppButton>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Spacer />

                <Grid item xs={12}>
                    <AppTypography variant="h5">
                        Buttons
                    </AppTypography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="flex-start" spacing={4}>

                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="primary" variant="contained" disableElevation fullWidth>Primary Button</AppButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="secondary" variant="contained" disableElevation fullWidth>Secondary Button</AppButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="success" variant="contained" disableElevation fullWidth>Success Button</AppButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="info" variant="contained" disableElevation fullWidth>Info Button</AppButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="warning" variant="contained" disableElevation fullWidth>Warning Button</AppButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <AppButton color="error" variant="contained" disableElevation fullWidth>Error Button</AppButton>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        </LayoutScreen >
    );
}

export default ScreenShowcase;