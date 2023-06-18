import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import LoginModal from './LoginModal';
import useUserStore from '../stores/userStore';
import LogoutModal from './LogoutModal';

const MyAppBar = () => {
    var userStore = useUserStore();
    var navigate = useNavigate();
    var location = useLocation();
    var [loginModalOpen, setLoginModalOpen] = useState(false);

    var closeModal = () => {
        setLoginModalOpen(false);
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {location.pathname === '/' ? <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => setLoginModalOpen(true)}
                    >
                        <AccountCircleIcon />
                    </IconButton> : <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    }
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

            {userStore.sessionToken === "" ? <LoginModal open={loginModalOpen} closeModal={closeModal} /> : <LogoutModal open={loginModalOpen} closeModal={closeModal} />}
        </div>
    )
}

export default MyAppBar;