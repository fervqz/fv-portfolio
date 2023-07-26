import { Container } from "@mui/material";
import SpinnerFullScreen from "../SpinnerFullScreen/SpinnerFullScreen";

interface LayoutScreenProps extends React.PropsWithChildren {
    loading?: boolean;
}

const LayoutScreen = (props: LayoutScreenProps) => {
    return (
        <>
            <SpinnerFullScreen loading={!!props.loading} />
            <Container data-cy="screen-layout" sx={{
                marginTop: '1rem',
                marginBottom: '3rem',
                paddingBottom: '2rem',
            }}>
                {props.children}
            </Container>
        </>
    )
}

export default LayoutScreen;