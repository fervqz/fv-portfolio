import { Skeleton, Typography, TypographyProps } from "@mui/material";

interface AppTypographyProps extends TypographyProps {
    loading?: boolean;
}

const AppTypography: React.FC<AppTypographyProps> = (props: AppTypographyProps) => {
    return (
        <Typography {...props}>
            {props.loading ? <Skeleton /> : props.children}
        </Typography>
    );
}

export default AppTypography;