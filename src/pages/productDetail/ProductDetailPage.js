import { Box, Button, ButtonGroup, Card, CardMedia, Container, Rating, Snackbar, Stack, Typography } from "@mui/material";
import Image from "mui-image";
import Carousel from "react-material-ui-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import useCartStore from "../../stores/cartStore";
import { useState } from "react";

function ProductDetailPage() {
    const cartStore = useCartStore();
    const { state } = useLocation();
    const navigate = useNavigate();
    var [snackBarOpen, setSnackbarOpen] = useState(false);

    const snacbarAction = (
        <Button onClick={() => navigate('/cart')} sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>Go to Cart</Button>
    );

    const addToCart = () => {
        cartStore.addToCart(state);
        setSnackbarOpen(true);
    }

    return (
        <Container sx={{ alignItems: 'center', padding: 0 }}>
            <Card sx={{ width: 1 }}>
                <Container sx={{ padding: 1 }}>
                    <Carousel>
                        {
                            state.images.map((item, i) => <Image height={400} fit="contain" key={i} src={item} />)
                        }
                    </Carousel>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            state.discountPercentage > 0 ?
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <Typography variant="h6" textAlign="left" sx={{ alignSelf: "flex-end" }}>
                                        <s>RM</s>
                                    </Typography>
                                    <Typography variant="h5" textAlign="left" sx={{ marginRight: 1 }}>
                                        <s>{state.price}</s>
                                    </Typography>
                                    <Typography variant="h6" textAlign="left" sx={{ alignSelf: "flex-end" }}>
                                        RM
                                    </Typography>
                                    <Typography variant="h5" textAlign="left">
                                        <b>{Math.round(state.price * ((100 - state.discountPercentage) / 100))}</b>
                                    </Typography>
                                </Box>
                                :
                                <Typography variant="h5" textAlign="left">
                                    RM{state.price}
                                </Typography>
                        }
                        <Rating name="read-only" value={state.rating} readOnly />
                        <Typography variant="body">
                            {state.description}
                        </Typography>
                    </Box>
                </Container>
            </Card>
            <ButtonGroup
                disableElevation
                aria-label="Disabled elevation buttons"
                size="large"
                sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', flexGrow: 1, marginTop: 2 }}
            >
                <Button sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>Add To Wishlist</Button>
                <Button onClick={addToCart} sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>Add To Cart</Button>
            </ButtonGroup>

            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={() => setSnackbarOpen(false)}
                message="Added to Cart"
                action={snacbarAction}
            />
        </Container>
    )
}
export default ProductDetailPage;