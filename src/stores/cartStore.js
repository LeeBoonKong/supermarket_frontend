import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(persist((set, get) => ({
    myCart: [],
    addToCart: (product) => {
        if (get().myCart.filter(item => item.id === product.id).length > 0) {
            const i = get().myCart.findIndex(item => item.id === product.id);
            var updatedCart = get().myCart;
            updatedCart[i]['quantity'] += 1;
            set({
                myCart: updatedCart
            });
        } else {
            var cart = get().myCart;
            product['quantity'] = 1;
            cart.push(product);
            set({
                myCart: cart
            });
        }
    },
    removeFromCart: (productId) => {
        var cart = get().myCart.filter(item => item.id !== productId);
        set({
            myCart: cart
        });
    },
    addQuantity: (productId) => {
        if (get().myCart.filter(item => item.id === productId).length > 0) {
            const i = get().myCart.findIndex(item => item.id === productId);
            var updatedCart = get().myCart;
            updatedCart[i]['quantity'] += 1;
            set({
                myCart: updatedCart
            });
        }
    },
    minusQuantity: (productId) => {
        if (get().myCart.filter(item => item.id === productId).length > 0) {
            const i = get().myCart.findIndex(item => item.id === productId);
            var updatedCart = get().myCart;
            if (updatedCart[i]['quantity'] > 1) {
                updatedCart[i]['quantity'] -= 1;
                set({
                    myCart: updatedCart
                });
            }
        }
    },
}), {
    name: 'my-cart'
}));

export default useCartStore;