import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import ProductDetailPage from './pages/productDetail/ProductDetailPage';
import MyAppBar from './sharedComponents/MyAppBar';
import { Container } from '@mui/material';
import MyCart from './pages/cart/MyCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "details",
    element: <ProductDetailPage />
  },
  {
    path: "cart",
    element: <MyCart />
  }
]);

root.render(
  // <React.StrictMode>
  <div>
    <Container sx={{ marginTop: 8, marginLeft: 0, marginRight: 0, padding: 0.5 }}>
      <BrowserRouter>
        <MyAppBar />
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/details' element={< ProductDetailPage />}></Route>
          <Route exact path='/cart' element={< MyCart />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
