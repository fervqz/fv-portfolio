import { Grid, Skeleton } from "@mui/material";

export const SectionSekelton = () => {

    const variant = 'rounded';
    const animation = 'wave';

    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={12} sm={6}>
                    <Skeleton variant={variant} animation={animation} height={50} />
                </Grid>

                <Grid item xs={12}>
                    <Skeleton variant={variant} animation={animation} height={220} />
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end" spacing={2}>
                        <Grid item xs={12} sm={4} md={3}>
                            <Skeleton variant={variant} animation={animation} height={50} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Skeleton variant={variant} animation={animation} height={50} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Skeleton variant={variant} animation={animation} height={50} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}