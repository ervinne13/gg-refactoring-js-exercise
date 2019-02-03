document.addEventListener("DOMContentLoaded", function() {
    axios.get('/api/agenda/data.json')
        .then(function(response) {
            var html = '';

            for(var i in response.data) {
                html += '<div class="vertical-timeline-block">' +
                            '<div class="vertical-timeline-icon ' + response.data[i].icon_color_class + '">' +
                                '<i class="' + response.data[i].icon_class + '"></i>' +
                            '</div>' +
                            '<div class="vertical-timeline-content">' +
                                '<h3>' + response.data[i].title + '</h3>' +
                                '<button data-id="' + response.data[i].id + '" class="btn btn-sm btn-primary action-view-agenda-details"> View Details</button>' +
                                '<span class="vertical-date">' +
                                    response.data[i].date_text + ' <br>' +
                                    '<small>' + response.data[i].time_text + '</small>' +
                                '</span>' +
                            '</div>' +
                        '</div>';
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
                        view.innerHTML = '<h1>' + response.data[i].title + '</h1>' +
                                        '<span class="vertical-date">' +
                                            response.data[i].date_text + '<br>' +
                                            '<small>' + response.data[i].time_text + '</small>' +
                                        '</span>' +
                                        '<h3>Details</h3>' + response.data[i].content;
                    }
                }
            });

    }, false);
});