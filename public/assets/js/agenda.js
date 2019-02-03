
document.addEventListener("DOMContentLoaded", function() {
    AgendaAPI.findAll()
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
    
        let view = document.getElementById('agenda-details-container');
        view.innerHTML = 'Loading ... please wait';

        let id = event.target.getAttribute('data-id');
        
        AgendaAPI.findById(id)
            .then(function(agenda) {                
                view.innerHTML = tmpl('tmpl-agenda-details', agenda);            
            });

    }, false);
});