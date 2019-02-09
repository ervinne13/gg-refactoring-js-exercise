import AgendaPage from './Agenda/AgendaPage'

document.addEventListener('DOMContentLoaded', () => {
    AgendaPage.loadAndDisplayAgendas();
    AgendaPage.initializeOnShowAgendaDetailsEvent();
});