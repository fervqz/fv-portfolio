import { CircularProgress } from "@mui/material";
import AppBackdrop from "../Common/AppBackdrop/AppBackdrop";

interface SpinnerFullScreenProps {
    loading: boolean;
}

const SpinnerFullScreen: React.FC<SpinnerFullScreenProps> = (props: SpinnerFullScreenProps) => {
    return (
        <>
            <AppBackdrop open={props.loading}>
                <CircularProgress color="inherit" />
            </AppBackdrop>
        </>
    );
}

export default SpinnerFullScreen;