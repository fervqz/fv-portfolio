import { Box, Container, Stack, Typography } from "@mui/material";
import routes from "../../router/routes";
import NavBarItem from "./NavBarItem";

const NavBar: React.FC = () => {
    return (
        <Container sx={{ padding: '2rem 0px' }}>
            <Stack
                flexDirection="row"
                spacing={4}
                useFlexGap
                justifyContent="flex-start"
                alignItems="center"
            >

                <Box flexGrow={1}>
                    <Typography variant="h6">Logo Placeholder</Typography>
                </Box>

                {
                    routes
                        .filter(route => !!route.title)
                        .map(route => <NavBarItem key={route.title} route={route} />)
                }

            </Stack>
        </Container >
    );
};

export default NavBar;