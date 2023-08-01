import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import routes from "../../router/routes";

import NavBarLogo from "./NavBarLogo";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavBar: React.FC = () => {

    const pages = routes.filter(route => !!route.title);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="menus of pages"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{
                        padding: '0px',
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    elevation={0}
                    anchorEl={anchorElNav}
                    keepMounted
                    onClose={handleCloseNavMenu}
                    open={Boolean(anchorElNav)}
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={`d-${page.title}`} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                    ))}

                </Menu>
            </Box>

            <Box sx={{
                position: 'absolute',
                marginLeft: '50%',
                transform: 'translate(-24px, 3px)', // Kerning - Align logo in center
            }}
            >
                <NavBarLogo isMobile />
            </Box>
        </>
    );
};

export default MobileNavBar;