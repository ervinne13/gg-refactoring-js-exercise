import axios from 'axios'

function findAll() {
    return axios.get('/api/agenda/data.json')
}

function findById(id) {
    return axios.get('/api/agenda/data.json')
        .then(response => response.data.find(agenda => agenda.id == id))
}

export default {
    findAll,
    findById
};
