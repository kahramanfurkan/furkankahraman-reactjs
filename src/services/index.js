import axios from "axios";

export default {
    init() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + process.env.REACT_APP_TOKEN;
    }
};