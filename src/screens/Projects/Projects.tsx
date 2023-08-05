import { Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ScreenLayout from "../../components/common/Screenlayout/ScreenLayout";
import Spacer from "../../components/common/Spacer/Spacer";
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from "react-router-dom";
import config from "../../consts/config";

const Projects: React.FC = () => {

    return (
        <ScreenLayout isContainer>

            <Stack display="flex" justifyContent="space-between" alignItems="bottom" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Typography variant="h4" gutterBottom>🚀 Live Products</Typography>
                <Button
                    variant="text"
                    endIcon={<LaunchIcon />}
                    component={Link}
                    to={config.gitHubUrl}
                    target="_blank"
                >
                    View all on GitHub
                </Button>
            </Stack>
            <Grid container display="flex" alignItems="center" spacing={4}>
                {Array.from(Array(3).keys()).map(() => (<Grid item xs={12} md={4} >
                    <Card>
                        <CardContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>

            <Spacer />

            <Stack display="flex" justifyContent="space-between" alignItems="bottom" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Typography variant="h4" gutterBottom>👨‍🔧 Code Templates</Typography>
                <Button
                    variant="text"
                    endIcon={<LaunchIcon />}
                    component={Link}
                    to={config.gitHubUrl}
                    target="_blank"
                >
                    View all on GitHub
                </Button>
            </Stack>
            <Grid container display="flex" alignItems="center" spacing={4}>
                {Array.from(Array(3).keys()).map(() => (<Grid item xs={12} md={4} >
                    <Card>
                        <CardContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium ut sapiente, blanditiis ex suscipit pariatur magnam ratione quis optio dolores repellendus reprehenderit omnis voluptates cumque rem sed vero eaque!
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>

        </ScreenLayout>
    );
}

export default Projects;