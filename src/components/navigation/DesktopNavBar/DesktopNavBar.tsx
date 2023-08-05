import { Stack } from "@mui/material";
import routes from "../../../router/routes";
import NavBarItem from "../NavBarItem/NavBarItem";
import NavBarLogo from "../../common/AppLogo/AppLogo";

const DesktopNavBar: React.FC = () => {

    const pages = routes.filter(route => route.addToNavBar);

    return (
        <>
            <NavBarLogo />
            <Stack
                flexDirection="row"
                spacing={4}
                useFlexGap
                justifyContent="flex-end"
                sx={{
                    flex: 1,
                    display: { xs: "none", md: "flex" },
                }}
            >
                {pages
                    .map(page => <NavBarItem key={`m-${page.title}`} route={page} />)}
            </Stack>
        </>
    );
};

export default DesktopNavBar;