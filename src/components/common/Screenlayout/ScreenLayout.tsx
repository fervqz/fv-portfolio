import { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Box, Container } from "@mui/material";

import SpinnerFullScreen from "../SpinnerFullScreen/SpinnerFullScreen";
import './styles.css';


interface ScreenLayoutProps extends React.PropsWithChildren {
    loading?: boolean;
    isContainer?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = (props) => {

    const isContainer = props.isContainer === undefined ? false : props.isContainer;

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <>
            <SpinnerFullScreen loading={!!props.loading} />
            <CSSTransition in={showContent} timeout={500} classNames="fade">
                <div className="fade-container">

                    {(isContainer
                        ? <Container component="main" sx={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
                            {props.children}
                        </Container >
                        : <Box
                            component="main"
                            sx={{
                                flex: 1,
                                paddingBottom: '4rem',
                            }}>
                            {props.children}
                        </Box >
                    )}
                </div>
            </CSSTransition >
        </>
    );
};

export default ScreenLayout;