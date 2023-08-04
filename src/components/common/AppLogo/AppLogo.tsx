import { Typography } from "@mui/material";
import Paths from "../../../consts/paths";
import theme from "../../../styles/lightTheme";
interface NavBarLogoProps {
    isMobile?: boolean;
}

const NavBarLogo: React.FC<NavBarLogoProps> = (props) => {

    const logoText = 'Fer.';

    const styles = {
        mr: 6,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '0px 0.3rem 0px 8px',
        display: { xs: "none", md: "flex" },
        position: 'relative',
        top: '-4px', // Kerning - Aligns logo's text with navbar links
        fontWeight: 700,
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