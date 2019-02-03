import { Selector } from 'testcafe'
import { server } from './config'

fixture `Agenda Display Test`
    .page `${server}`

var mock = RequestMock()
    .onRequestTo(`http://192.168.56.1:8081`)
    .respond(/*...*/)
    .onRequestTo(/\/users\//)
    .respond(/*...*/);

test("Agenda should display on page ready", async t => {
    await t
        .expect(Selector('#agenda-timeline').innerText).notEql('')
})