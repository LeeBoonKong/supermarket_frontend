import { create } from "zustand";
import { ProductRepository as repo } from "../repositories/productRepository";

export const useProductStore = create((set, get) => ({
    isLoading: false,
    productList: [],
    categories: [],
    total: 0,
    currentPage: 0,
    getProducts: async (limit, currentPage) => {
        var skip = currentPage * limit;
        var response = await repo.getProducts(limit, skip);
        set(() => ({
            productList: response.products,
            total: response.total,
            currentPage: currentPage
        }));
    },
    getProductByCategory: async (category) => {
        var response = await repo.getProductsByCategory(category);
        set(() => ({
            productList: response.products,
            total: response.total
        }));
    },
    search: async (keyword) => {
        var response = await repo.search(keyword);
        set(() => ({
            productList: response.products,
            total: response.total,
        }));
    },
    getCategories: async () => {
        var response = await repo.getCategories();
        set(() => ({
            categories: response,
        }));
    }
}));