
document.addEventListener("DOMContentLoaded", function() {
    AgendaPage.loadAndDisplayAgendas();
    AgendaPage.initEvents();
});

let AgendaPage = (function() {

    const detailsContainerSel = 'agenda-details-container';

    function initEvents() {
        document.addEventListener('click', function (event) {        
            // If the clicked element doesn't have the right selector, bail
            if (!event.target.matches('.action-view-agenda-details')) return;
            event.preventDefault();
        
            displayLoadingDetails();
    
            let id = event.target.getAttribute('data-id');        
            loadAndDisplayAgendaDetails(id);
    
        }, false);
    }
    
    function loadAndDisplayAgendas() {
        AgendaAPI.findAll()
            .then(function(response) {
                displayAgendas(response.data)
            });
    }

    function displayAgendas(agendas) {
        var html = '';
        for(var i in agendas) {
            html += tmpl("tmpl-agenda-timeline-item", agendas[i]);
        }
        document.getElementById("agenda-timeline").innerHTML = html;
    }

    function displayLoadingDetails() {
        document.getElementById(detailsContainerSel).innerHTML = 'Loading ... please wait';        
    }

    function loadAndDisplayAgendaDetails(id) {
        AgendaAPI.findById(id)
            .then(function(agenda) {                
                document.getElementById(detailsContainerSel).innerHTML = tmpl('tmpl-agenda-details', agenda);            
            });
    }

    return {
        initEvents,
        loadAndDisplayAgendas
    }

})();