import axios from "axios"

const http = axios.create({
    baseURL: "https://digimon-api.vercel.app/api/",
})

export default http;