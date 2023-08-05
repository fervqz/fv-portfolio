import { styled } from "@mui/material";

const HightlightTitle = styled('span')`
    font-weight: 500;
    background: -webkit-linear-gradient(#f39df3 0%, #62208e 100%);
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