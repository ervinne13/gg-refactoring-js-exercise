let AgendaAPI = (function() {

    function findAll() {
        return axios.get('/api/agenda/data.json');
    }

    function findById(id) {
        return axios.get('/api/agenda/data.json')
            .then(response => response.data.find(agenda => agenda.id == id))
    }

    return {
        findAll,
        findById
    }

})();