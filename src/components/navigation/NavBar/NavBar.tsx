import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

const NavBar: React.FC = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                paddingTop: '1rem',
                paddingBottom: '0.8rem',
                background: '#F0F0F0',
            }}
        >
            <Container>
                <Toolbar component="nav" disableGutters>

                    <DesktopNavBar />
                    <MobileNavBar />

                </Toolbar>
            </Container>
        </AppBar >

    );

};
export default NavBar;