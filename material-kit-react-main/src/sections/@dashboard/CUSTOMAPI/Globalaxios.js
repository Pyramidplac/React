import axios from "axios";

let data = localStorage.getItem("userData")
let r = JSON.parse(data)

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = "Bearer " + r?.jwtToken

