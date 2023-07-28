import { styled } from "@mui/material";

const HightlightTitle = styled('span')`
    font-weight: 400;
    background: -webkit-linear-gradient(rgba(255,182,255,1) 0%, rgba(169,65,240,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &::selection {
        color: white;
        -webkit-text-fill-color: white;
        background: #7e4bcb;
    }
`;

export default HightlightTitle;