import { CheckBox } from "@mui/icons-material";
import { Box, Button, FormControlLabel, Grid, Modal, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useUserStore from "../stores/userStore";
import { useState } from "react";

function LoginModal(props) {
    var userStore = useUserStore();

    var [formData, setFormData] = useState({});

    const updateData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    var tryLogin = () => {
        var result = userStore.login(formData.username, formData.password);
        if(result){
            props.closeModal();
        }
    };

    return (
        <Modal open={props.open}>
            <Box sx={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 250,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        onChange={updateData}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={updateData}
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={tryLogin}
                        sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}

export default LoginModal;