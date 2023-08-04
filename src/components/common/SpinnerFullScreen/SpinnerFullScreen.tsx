import { Backdrop, CircularProgress } from "@mui/material";

interface SpinnerFullScreenProps {
    loading: boolean;
}

const SpinnerFullScreen: React.FC<SpinnerFullScreenProps> = (props: SpinnerFullScreenProps) => {
    return (
        <>
            <Backdrop open={props.loading}>
                <CircularProgress color="primary" />
            </Backdrop>
        </>
    );
}

export default SpinnerFullScreen;