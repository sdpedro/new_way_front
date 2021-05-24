import axios from "axios";
const url = "http://127.0.0.1:3000/";

export default {
    people: [
        { text: 'Todos', value: 0 },
        { text: 'Giovana', value: 1 },
        { text: 'Pedro', value: 2 },
        { text: 'Nelma', value: 3 },
        { text: 'Sergio', value: 4 },
    ],
    list: (data) => {
        return axios.get(url, { params: data });
    },
    create: (data) => {
        return axios.post(url, data);
    }
}