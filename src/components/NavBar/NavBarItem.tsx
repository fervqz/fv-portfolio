import { styled } from "@mui/material";
import { NavLink as MuiNavLink } from "react-router-dom";
import { AppRoute } from "../../types";

const NavLink = styled(MuiNavLink)({
    textDecoration: 'none',
    fontSize: '1.2rem',
});

interface NavBarItemProps {
    route: AppRoute;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ route }) => {
    return (
        <NavLink
            to={route.path as string}
            style={({ isActive }) => ({
                color: isActive ? "black" : "gray",
            })}
        >
            {route.title}
        </NavLink >
    );
};

export default NavBarItem;