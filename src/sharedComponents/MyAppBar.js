import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MyAppBar = () => {
    var navigate = useNavigate();
    var location = useLocation();

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {location.pathname === '/' ? <div></div> : <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={() => navigate(-1)}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => navigate('/cart')}
                >
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;