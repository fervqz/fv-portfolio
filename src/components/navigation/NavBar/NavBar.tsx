import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import theme from "../../../styles/lightTheme";

const NavBar: React.FC = () => {
    return (
        <AppBar
            position="static"
            // color="transparent"
            elevation={0}
            sx={{ padding: '1.5rem 0', backgroundColor: theme.palette.background.default }}
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