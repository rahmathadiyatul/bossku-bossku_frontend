import Axios from 'axios'

const Http = Axios.create({
    baseURL: 'https://localhost:56322/Api/',
    setTimeout: 60000
})
export default Http