import { useProductStore } from "../../stores/productStore";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Fab, Grid, List, ListItem, ListItemButton, ListItemText, Modal, Rating, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Add, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SearchBar from "../../sharedComponents/SearchBar";
import useUserStore from "../../stores/userStore";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    height: 500,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: "auto"
};

function ProductListing() {
    var productStore = useProductStore();
    var userStore = useUserStore();
    var navigate = useNavigate();

    var [modalOpen, setModalOpen] = useState(false);
    var [snackBarOpen, setSnackbarOpen] = useState(false);

    var toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    var openDetails = (item) => {
        navigate('/details', { state: item });
    }

    var onLeftclick = () => {
        if (productStore.currentPage > 0) {
            productStore.getProducts(10, productStore.currentPage - 1);
        } else {
            setSnackbarOpen(true);
        }
    }

    var onRightclick = () => {
        if (productStore.currentPage < (productStore.total - 10) / 10) {
            productStore.getProducts(10, productStore.currentPage + 1);
        } else {
            setSnackbarOpen(true);
        }
    }

    return (
        <div>
            <Typography variant="h5" textAlign="center">BuyBuyBuy</Typography>
            {userStore.username === "" ? <div></div> : <Typography variant="body2" textAlign='center'>Welcome, {userStore.username}</Typography>}
            <SearchBar />
            <Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 1 }}>
                    <Button variant="text" onClick={toggleModal} sx={{ alignSelf: "right" }}>Categories</Button>
                </Box>
                {
                    productStore.productList.length > 0 ? <Grid
                        container
                        spacing={1}>
                        {productStore.productList.map(item =>
                            <Grid item xs={6} sm={6} md={3} key={item.id}>
                                <Card sx={{ height: 250 }}>
                                    <CardActionArea onClick={() => openDetails(item)}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={item.images[0]}
                                        />
                                        <Box sx={{ display: "flex", padding: 1, flexDirection: "column" }}>
                                            <Typography variant="body" textAlign="left" sx={{ height: 40 }}>
                                                {item.title}
                                            </Typography>
                                            {
                                                item.discountPercentage > 0 ?
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Typography variant="body2" textAlign="left" sx={{ alignSelf: "flex-end" }}>
                                                            <s>RM</s>
                                                        </Typography>
                                                        <Typography variant="body" textAlign="left" sx={{ marginRight: 1 }}>
                                                            <s>{item.price}</s>
                                                        </Typography>
                                                        <Typography variant="body2" textAlign="left" sx={{ alignSelf: "flex-end" }}>
                                                            RM
                                                        </Typography>
                                                        <Typography variant="body" textAlign="left">
                                                            <b>{Math.round(item.price * ((100 - item.discountPercentage) / 100))}</b>
                                                        </Typography>
                                                    </Box>
                                                    :
                                                    <Typography variant="body" textAlign="left">
                                                        RM{item.price}
                                                    </Typography>
                                            }
                                            <Rating name="read-only" value={item.rating} readOnly />
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>)}
                    </Grid>
                        : <Typography variant="h6">No Product Found</Typography>
                }
            </Box>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <List>
                        {
                            productStore.categories.map(item => {
                                return (
                                    <ListItem disablePadding key={item}>
                                        <ListItemButton onClick={() => {
                                            productStore.getProductByCategory(item);
                                            setModalOpen(false);
                                        }}>
                                            <ListItemText primary={item} />
                                        </ListItemButton>
                                    </ListItem>);
                            })
                        }
                    </List>
                </Box>
            </Modal>

            <Container sx={{ position: 'sticky', bottom: 70, padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                <Fab color="primary" aria-label="left" onClick={onLeftclick}>
                    <KeyboardArrowLeft />
                </Fab>

                <Fab color="primary" aria-label="right" onClick={onRightclick}>
                    <KeyboardArrowRight />
                </Fab>
            </Container>

            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={() => setSnackbarOpen(false)}
                message="No more products"
            />
        </div >
    );
}

export default ProductListing;