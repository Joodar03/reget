import {create} from "axios";

const http = create ({
    baseURL: "https://ecommerce-7-api.itpark.edu.kg/api"
})

class Service {
    getProduct = async () => {
        const res = await http.get("/products/")
        return res.data
    }
}

export default Service;