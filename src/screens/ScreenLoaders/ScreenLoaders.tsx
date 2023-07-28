import { Button, Card, Grid, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import LayoutScreen from "../../components/LayoutScreen/LayoutScreen";
import AppLoadingButton from "../../overrites/LoadingButton/LoadingButton";
import HightlightTitle from "../../components/HighlightTitle/HighlightTitle";
import { ScreenLoadersSkeleton } from "./ScreenLoadersSkeleton";

const ScreenLoaders: React.FC = () => {

    const [isSpinnerFullScreenLoading, setIsSpinnerFullScreenLoading] = useState<boolean>(false);
    const [isButtonSpinnerLoading, setIsButtonSpinnerLoading] = useState<boolean>(false);
    const [isSkeletonsLoading, setIsSkeletonsLoading] = useState<boolean>(false);

    const handleClick = (next: { (value: SetStateAction<boolean>): void; (arg0: (prev: boolean) => boolean): void; }) => {
        next((prev: boolean) => !prev);
        setTimeout(
            () => next((prev: boolean) => !prev),
            2000
        );
    };

    return (
        <LayoutScreen loading={isSpinnerFullScreenLoading}>
            <ScreenLoadersSkeleton loading={isSkeletonsLoading} >
                <Card>

                    <Grid container spacing={4}>

                        <Grid item xs={12}>
                            <Typography variant="h4">This is a test <HightlightTitle>Page</HightlightTitle></Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography paragraph>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, velit consequatur amet dolorum exercitationem animi illo eum eos consectetur vitae optio voluptatum voluptatibus asperiores numquam quam harum cum, voluptates recusandae!
                                Cupiditate quis, quisquam nihil adipisci minima amet facilis. Laboriosam sed perferendis magnam praesentium, accusamus distinctio. Asperiores numquam omnis voluptate. Sint odio illo, est vel ut deleniti. Quaerat tenetur illum rerum.
                                Voluptates nobis vel cupiditate cumque sunt facere ratione expedita maxime temporibus similique natus ipsa, quia adipisci ipsam nostrum, consequuntur soluta fuga eligendi illo, non blanditiis veniam iusto molestiae officiis? Debitis?
                                Autem architecto mollitia officia dolores eveniet necessitatibus, ducimus deserunt earum nostrum, maxime voluptatibus, fugiat dignissimos fugit quis ad non voluptatem nulla doloribus? Ullam illum a corrupti molestiae totam rerum expedita.
                                Nulla delectus ducimus, tempore reprehenderit soluta odit suscipit excepturi saepe, reiciendis at accusantium placeat, consequuntur vitae veritatis similique voluptatibus est harum inventore cum hic dolores maxime praesentium assumenda aut. Ipsa.
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <Grid item xs={12} sm={4} md={3}>
                                    <Button variant="text" onClick={() => handleClick(setIsSkeletonsLoading)} disableElevation fullWidth>Skeletons Loaders</Button>
                                </Grid>

                                <Grid item xs={12} sm={4} md={3}>
                                    <Button variant="outlined" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation fullWidth>Full Screen Spinner</Button>
                                </Grid>

                                <Grid item xs={12} sm={4} md={3}>
                                    <AppLoadingButton
                                        variant="contained"
                                        loading={isButtonSpinnerLoading}
                                        disableElevation
                                        fullWidth
                                        onClick={() => handleClick(setIsButtonSpinnerLoading)}
                                    >
                                        Async Button
                                    </AppLoadingButton>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Card>
            </ScreenLoadersSkeleton>
        </LayoutScreen >
    );
};

export default ScreenLoaders;