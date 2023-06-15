export const ProductRepository = {
    getProducts: async (limit, skip) => {
        const params = new URLSearchParams({
            limit: limit,
            skip: skip
        });

        var res = await fetch('https://dummyjson.com/products?' + params.toString());
        return await res.json();
    },
    getProductsByCategory: async (category) => {
        var res = await fetch('https://dummyjson.com/products/category/' + category);
        return await res.json();
    },
    getCategories: async () => {
        var res = await fetch('https://dummyjson.com/products/categories')
        return await res.json();
    },
    search: (keyword) => {
        const params = URLSearchParams({
            q: keyword,
        });

        fetch('https://dummyjson.com/products/search?' + params.toString())
            .then(res => res.json())
    }
}