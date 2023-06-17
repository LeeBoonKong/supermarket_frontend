import { Box, Button, Card, Container, IconButton, Stack, Typography } from "@mui/material";
import useCartStore from "../../stores/cartStore";
import Image from "mui-image";
import DeleteIcon from '@mui/icons-material/Delete';

function MyCart() {
    var cartStore = useCartStore();

    var add = (id) => {
        cartStore.addQuantity(id);
    }

    var minus = (id) => {
        cartStore.minusQuantity(id);
    }

    var remove = (id) => {
        cartStore.removeFromCart(id);
    }

    return (
        <Container sx={{ padding: 1 }}>
            <Typography variant="h5">
                My Cart
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button variant="contained">Confirm Orders</Button>
            </Box>
            {cartStore.myCart.map(item => {
                return (
                    <Card sx={{ padding: 1, paddingBottom: 0 }} key={item.id}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                height={140}
                                width={120}
                                fit="contain"
                                src={item.images[0]} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                                <Typography variant="body">
                                    <b>{item.title}</b>
                                </Typography>
                                {
                                    item.discountPercentage > 0 ?
                                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                                            <Typography variant="body2" textAlign="left" sx={{ alignSelf: "flex-end" }}>
                                                <s>RM</s>
                                            </Typography>
                                            <Typography variant="body" textAlign="left" sx={{ marginRight: 0.5 }}>
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

                                <Stack spacing={0} direction="row" sx={{ alignItems: 'center' }}>
                                    <Typography variant="body" sx={{ textAlign: "center" }}>Quantity:</Typography>
                                    <IconButton variant="text" onClick={() => minus(item.id)} sx={{ width: 50, height: 50, margin: 0.5 }}>-</IconButton>
                                    <Typography variant="body" sx={{ textAlign: "center" }}>{item.quantity}</Typography>
                                    <IconButton variant="text" onClick={() => add(item.id)} sx={{ width: 50, height: 50, margin: 0.5 }}>+</IconButton>
                                </Stack>

                                <IconButton variant="text" onClick={() => remove(item.id)} sx={{ width: 50, height: 50, margin: 0.5, alignSelf: 'flex-end' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Card>
                );
            })}
        </Container>
    )
}

export default MyCart;