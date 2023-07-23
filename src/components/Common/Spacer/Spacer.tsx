import { Box, BoxProps, styled } from "@mui/material";

const SmallBox = styled(Box)({
    height: '2rem',
    width: '100%',
    margin: '1rem 0px 0px 2rem',
    boxSizing: 'border-box',
});

const MediumBox = styled(Box)({
    height: '4rem',
    width: '100%',
    margin: '1rem 0px 0px 2rem',
    boxSizing: 'border-box',
});

const LargeBox = styled(Box)({
    height: '8rem',
    width: '100%',
    margin: '1rem 0px 0px 2rem',
    boxSizing: 'border-box',
});

interface SpacerProps extends BoxProps {
    size?: "small" | "medium" | "large";
}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {

    switch (props.size) {
        case "large":
            return <LargeBox {...props} />;
        case "medium":
            return <MediumBox {...props} />;
        default:
            return <SmallBox {...props} />;
    }

}


export default Spacer;