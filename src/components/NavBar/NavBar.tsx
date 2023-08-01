import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const NavBar: React.FC = () => {



    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ padding: '1.5rem 0', }}
        >
            <Container>
                <Toolbar disableGutters>

                    <DesktopNavBar />
                    <MobileNavBar />

                </Toolbar>
            </Container>
        </AppBar>

    );

};
export default NavBar;