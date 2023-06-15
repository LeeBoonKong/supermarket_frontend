function ProductDetailPage(props){
    return(
        <Box sx={{flexGrow:1}}>
            <Card sx={{ height: 250 }}>
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
            </Card>
        </Box>
    )
}