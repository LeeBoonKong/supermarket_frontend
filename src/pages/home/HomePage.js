import { Fragment, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { useProductStore } from '../../stores/productStore';
import ProductListing from './ProductListing';

function HomePage() {
    const productStore = useProductStore();

    const getProduct = () => {
        productStore.getProducts(10, 0);
    }

    const getCategories = () => {
        productStore.getCategories();
    }

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    return (
        <div>
            <Container sx={{ padding: 1 }}>
                <ProductListing />
            </Container>
        </div >
    );
}

export default HomePage;