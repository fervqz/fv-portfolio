import { styled } from "@mui/material";

// color: 'linear-gradient(0deg, rgba(169,65,240,1) 0%, rgba(255,182,255,1) 100%)',
const HightlightTitle = styled('span')`
    font-weight: 400;
    background: -webkit-linear-gradient(rgba(255,182,255,1) 0%, rgba(169,65,240,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default HightlightTitle;