import { Container } from "@mui/material";
import SpinnerFullScreen from "../SpinnerFullScreen/SpinnerFullScreen";

interface LayoutScreenProps extends React.PropsWithChildren {
    loading?: boolean;
}

const LayoutScreen = (props: LayoutScreenProps) => {
    return (
        <>
            <SpinnerFullScreen loading={!!props.loading} />
            <Container
                data-cy="screen-layout"
                sx={{
                    paddingTop: '50px',
                    marginBottom: '50px',
                }}
            >
                {props.children}
            </Container>
        </>
    )
}

export default LayoutScreen;