import axios from "axios";


// json-server --watch db.json

export const api = axios.create({
    baseURL: "https://api-db-json-products.vercel.app/products"
    
})