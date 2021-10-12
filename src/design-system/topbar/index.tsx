import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, Spacer } from './styles';

function Topbar() {
  return (
    <Spacer>
      <Container>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </Spacer>
  );
}

export default Topbar;
