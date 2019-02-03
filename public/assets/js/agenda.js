document.addEventListener("DOMContentLoaded", function() {
    axios.get('/api/agenda/data.json')
        .then(function(response) {
            var html = '';

            for(var i in response.data) {
                html += tmpl("tmpl-agenda-timeline-item", response.data[i]);
            }

            var agendaTimeline = document.getElementById("agenda-timeline");
            agendaTimeline.innerHTML = html;            
        });
        
    document.addEventListener('click', function (event) {        
        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('.action-view-agenda-details')) return;
        event.preventDefault();
    
        view = document.getElementById('agenda-details-container');
        view.innerHTML = 'Loading ... please wait';

        id = event.target.getAttribute('data-id');
        
        axios.get('/api/agenda/data.json')
            .then(function(response) {
                for(var i in response.data) {
                    if (response.data[i].id == id) {                        
                        view.innerHTML = tmpl('tmpl-agenda-details', response.data[i]);                        
                    }
                }
            });

    }, false);
});