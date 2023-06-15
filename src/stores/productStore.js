import { create } from "zustand";
import { ProductRepository as repo } from "../repositories/productRepository";

export const useProductStore = create((set, get) => ({
    isLoading: false,
    productList: [],
    categories: [],
    total: 0,
    getProducts: async (limit, skip) => {
        var response = await repo.getProducts(limit, skip);
        set(() => ({
            productList: response.products,
            total: response.total
        }));
    },
    getProductByCategory: async (category) => {
        var response = await repo.getProductsByCategory(category);
        set(() => ({
            productList: response.products,
            total: response.total
        }));
    },
    search: (keyword) => {

    },
    getCategories: async () => {
        var response = await repo.getCategories();
        set(() => ({
            categories: response,
        }));
        console.log(get().categories);
    }
}));

export const useCategoryStore = create((set) => ({
    categoryList: [],
    getCategories: () => {
    }
}));