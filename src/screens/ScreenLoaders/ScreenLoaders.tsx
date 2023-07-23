import { Grid, Stack } from "@mui/material";
import { SetStateAction, useState } from "react";
import LayoutScreen from "../../components/LayoutScreen/LayoutScreen";
import AppButton from "../../components/Common/AppButton/AppButton";
import AppLoadingButton from "../../components/Common/AppLoadingButton/AppLoadingButton";
import AppTypography from "../../components/Common/AppTypography/AppTypography";
import HightlightTitle from "../../components/Common/HighlightTitle/HighlightTitle";

const ScreenLoaders: React.FC = () => {

    const [isSpinnerFullScreenLoading, setIsSpinnerFullScreenLoading] = useState<boolean>(false);
    const [isButtonSpinnerLoading, setIsButtonSpinnerLoading] = useState<boolean>(false);

    const handleClick = (next: { (value: SetStateAction<boolean>): void; (arg0: (prev: boolean) => boolean): void; }) => {
        next((prev: boolean) => !prev);
        setTimeout(
            () => next((prev: boolean) => !prev),
            2000
        );
    }

    return (
        <LayoutScreen loading={isSpinnerFullScreenLoading}>
            <Stack spacing={4}>
                <AppTypography variant="h3" loading={isButtonSpinnerLoading}>This is a test <HightlightTitle>Page</HightlightTitle></AppTypography>
                <AppTypography paragraph loading={isButtonSpinnerLoading}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, velit consequatur amet dolorum exercitationem animi illo eum eos consectetur vitae optio voluptatum voluptatibus asperiores numquam quam harum cum, voluptates recusandae!
                    Cupiditate quis, quisquam nihil adipisci minima amet facilis. Laboriosam sed perferendis magnam praesentium, accusamus distinctio. Asperiores numquam omnis voluptate. Sint odio illo, est vel ut deleniti. Quaerat tenetur illum rerum.
                    Voluptates nobis vel cupiditate cumque sunt facere ratione expedita maxime temporibus similique natus ipsa, quia adipisci ipsam nostrum, consequuntur soluta fuga eligendi illo, non blanditiis veniam iusto molestiae officiis? Debitis?
                    Autem architecto mollitia officia dolores eveniet necessitatibus, ducimus deserunt earum nostrum, maxime voluptatibus, fugiat dignissimos fugit quis ad non voluptatem nulla doloribus? Ullam illum a corrupti molestiae totam rerum expedita.
                    Nulla delectus ducimus, tempore reprehenderit soluta odit suscipit excepturi saepe, reiciendis at accusantium placeat, consequuntur vitae veritatis similique voluptatibus est harum inventore cum hic dolores maxime praesentium assumenda aut. Ipsa.
                    Ipsam alias dolor aperiam facilis? Sapiente harum explicabo beatae officia laborum, sequi eum incidunt dolorem deserunt, blanditiis porro accusantium? Minus quae quod sequi aperiam deserunt ducimus fuga. Nesciunt, fugiat suscipit?
                    Fugit modi perspiciatis architecto perferendis. Dolore expedita aliquam voluptates deleniti nostrum enim libero voluptatibus, sint ea maiores sequi voluptatum non aspernatur eveniet blanditiis esse molestias exercitationem velit! Nesciunt, et placeat.
                    Deleniti dolores voluptates nulla in quasi minima assumenda molestiae dolore quae veniam corrupti aliquid officia, quibusdam blanditiis repudiandae, veritatis accusamus doloremque rem facilis eaque rerum harum cumque doloribus at! Harum.
                    Facilis, iure dolore odio error ipsa nesciunt praesentium deleniti veniam libero, fuga temporibus consequatur voluptatum sunt perferendis. Libero ut at recusandae molestias. Ipsa placeat amet iusto cumque ad a maiores!
                    Ipsam quasi, laudantium quis blanditiis ea excepturi error quibusdam praesentium fugit debitis, quae, eaque iste quas laboriosam repudiandae aperiam inventore incidunt beatae porro tenetur unde autem cum. Delectus, asperiores qui.
                    Ut accusamus cumque mollitia animi officia facilis possimus consequuntur nostrum doloribus vero iure molestias fugit ipsam enim labore unde est adipisci, beatae quos rerum, recusandae saepe esse pariatur. Explicabo, sunt?
                    Cupiditate ratione facilis ad, placeat fugiat quibusdam nemo natus dolor. Nesciunt qui libero voluptates dolor voluptatem illum dolorem eligendi vel repellat nulla culpa aspernatur quibusdam, voluptatibus, neque, iure suscipit deleniti!
                    Perspiciatis quo ipsam beatae consequuntur, reprehenderit nesciunt, dolorem mollitia cum repellendus doloribus pariatur! Deserunt nostrum cum veritatis dolorum reprehenderit explicabo commodi! Maxime magni repellendus optio laborum, consequatur veniam? Deleniti, unde.
                    Maxime quidem tempore iusto. Itaque, ex a explicabo ipsum porro odit nisi sint laboriosam sunt alias doloremque iusto, facere quam commodi impedit. Officiis, exercitationem! Ipsam magnam maxime iure vero labore.
                    Consequatur accusamus sed vero nesciunt eaque vitae sit nisi? Est quibusdam laudantium ducimus eveniet sunt vitae, error id quos eos perferendis ad nam facilis vel beatae eum, atque nisi aperiam.
                    Est reiciendis minima tenetur dolorem optio iure numquam eius dolor nesciunt illo temporibus natus sed ab porro veniam ullam error possimus cumque in at odio, ut voluptatum. Possimus, praesentium vel.
                    Aspernatur quisquam placeat, dolorum repudiandae molestiae nemo doloribus consequuntur necessitatibus, fugiat quos impedit. Fuga sit aliquam unde amet porro, at vero laborum atque earum dicta ut modi ea distinctio totam.
                    Dolores distinctio perspiciatis nam! Doloremque quis neque blanditiis saepe minima harum necessitatibus voluptatibus, possimus incidunt quam quia! Modi culpa ex delectus dolorem, ut deserunt similique dolores, velit facilis officiis at.
                </AppTypography>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item>
                        <AppButton variant="text" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton variant="outlined" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="primary" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="secondary" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="success" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="info" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="warning" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppButton color="error" variant="contained" onClick={() => handleClick(setIsSpinnerFullScreenLoading)} disableElevation>Toggle Full Screen Spinner</AppButton>
                    </Grid>
                    <Grid item>
                        <AppLoadingButton
                            variant="contained"
                            loading={isButtonSpinnerLoading}
                            disableElevation
                            onClick={() => handleClick(setIsButtonSpinnerLoading)}
                        >
                            Toogle Async Button
                        </AppLoadingButton>
                    </Grid>
                </Grid>
            </Stack>
        </LayoutScreen >
    );
}

export default ScreenLoaders;