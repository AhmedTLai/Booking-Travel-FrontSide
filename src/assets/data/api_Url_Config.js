import axios from 'axios'

const api = axios.create({
    baseURL : 'https://bookingtravel-backend-side.onrender.com/api'
})

export default api