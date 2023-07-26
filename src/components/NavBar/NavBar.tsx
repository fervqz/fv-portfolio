import { Container, Stack } from "@mui/material"
import Paths from "../../router/paths";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {


    const naviLinks = [
        {
            path: Paths.SHOWCASE,
            title: 'Showcase',
        },
        {
            path: Paths.LOADERS,
            title: 'Loaders',
        },
    ];

    return (
        <Container
            sx={{
                padding: '2rem 0px',
            }}
        >
            <Stack
                flexDirection="row"
                spacing={4}
                useFlexGap
                justifyContent="center"
            >
                {
                    naviLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "black" : "gray",
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                };
                            }}
                        >
                            {link.title}
                        </NavLink>
                    ))
                }

            </Stack>
        </Container>
    )
}

export default NavBar;