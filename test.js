const createTestCafe = require('testcafe');

let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        console.log('Now Running Tests');
        testcafe = tc;
        runner = testcafe.createRunner();

        return runner
            // list multiple test files
			.src([
                "tests/agenda-display-test.js", 
			])
            .browsers(['chrome'])
            .reporter('list')
            .run();
    })
    .then(failedCount => {
        console.error('Tests failed: ' + failedCount);
        testcafe.close();
    })