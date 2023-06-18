import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import useUserStore from "../stores/userStore";

function LogoutModal(props) {
    var userStore = useUserStore();

    var closeModal = () => {
        props.closeModal();
    }

    var logout = () => {
        userStore.logout();
        props.closeModal();
    }

    return (
        <Dialog
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Logout?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>No</Button>
                <Button onClick={logout} autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogoutModal;