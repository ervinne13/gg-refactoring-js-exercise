import { Selector, RequestMock } from 'testcafe'
import { server } from './config'
import AgendStub from './stubs/agenda-stub'

let mock = RequestMock()
    .onRequestTo(new RegExp(`${server}api/agenda/data.json`))
    .respond(JSON.stringify(AgendStub))

fixture `Agenda Display Test`
    .page `${server}`
    .requestHooks(mock)

test("Agenda should display on page ready", async t => {
    await t
        .expect(Selector('#agenda-timeline').innerText).notEql('')
        .expect(Selector('#agenda-timeline .vertical-timeline-content h3').innerText).eql(AgendStub[0].title)
        // .debug() //  for when we want to pause the test
})