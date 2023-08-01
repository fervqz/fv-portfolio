import { Typography } from "@mui/material";
import Paths from "../../router/paths";

interface NavBarLogoProps {
    isMobile?: boolean;
}

const NavBarLogo: React.FC<NavBarLogoProps> = (props) => {

    const logoText = 'Logo';

    const styles = {
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
        ...(!!props.isMobile && { display: { xs: "flex", md: "none" } }),
        ...(!!props.isMobile && { flexGrow: 1 }),
    };

    return (
        <Typography
            variant="h4"
            component="a"
            href={Paths.HOME}
            sx={styles}
            noWrap
        >
            {logoText}
        </Typography>
    );
};

export default NavBarLogo;