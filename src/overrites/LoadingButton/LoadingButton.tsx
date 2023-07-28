import { styled } from "@mui/material";
import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import config from "../../styles/variables";

const LoadingButton = styled(MuiLoadingButton)({
    padding: '15px 30px',
    textTransform: 'none',
    borderRadius: config.button.borderRadius,
});

export default LoadingButton;