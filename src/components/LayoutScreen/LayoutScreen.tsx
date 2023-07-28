import { Container } from "@mui/material";
import SpinnerFullScreen from "../SpinnerFullScreen/SpinnerFullScreen";
import React from "react";

interface LayoutScreenProps extends React.PropsWithChildren {
    loading?: boolean;
}

const LayoutScreen: React.FC<LayoutScreenProps> = (props) => {
    return (
        <>
            <SpinnerFullScreen loading={!!props.loading} />
            <Container sx={{ flex: 1, paddingBottom: '4rem' }}>
                {props.children}
            </Container >
        </>
    );
};

export default LayoutScreen;;;;