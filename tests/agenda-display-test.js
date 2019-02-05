import { Selector, RequestMock } from 'testcafe'
import { server } from './config'
import AgendStub from './stubs/agenda-stub'

let mock = RequestMock()
    .onRequestTo(new RegExp(`${server}/api/agenda/data.json`))
    .respond(JSON.stringify(AgendStub))

fixture `Agenda Display Test`
    .page `${server}`
    .requestHooks(mock)

test("Agenda should display on page ready", async t => {
    let stubTitle = AgendStub[0].title;
    await t
        .expect(Selector('#agenda-timeline').innerText).notEql('')
        .expect(Selector('#agenda-timeline .vertical-timeline-content h3').innerText).eql(stubTitle)
        // .debug() //  for when we want to pause the test
})

test("Agenda details should display on click view details", async t => {
    let stubId = AgendStub[0].id;
    let stubContent = AgendStub[0].content;
    await t
        .click(`button.action-view-agenda-details[data-id="${stubId}"]`)
        .expect(Selector('#agenda-details-container').innerText).contains(stubContent)
        // .debug() //  for when we want to pause the test
})