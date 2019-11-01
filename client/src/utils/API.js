import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get("/api/books/google", { params: { q: query } });
    }
};