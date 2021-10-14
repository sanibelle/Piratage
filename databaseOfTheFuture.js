const path = "db.json"
import fs from 'fs';

const saveIntoDbOfTheFuture = function (value) {
    return fs.writeFileSync(path, value, { encoding: 'utf8' });
}
const readInDbOfTheFuture =function () {
    return fs.readFileSync(path, { encoding: 'utf8' });
}

export {saveIntoDbOfTheFuture, readInDbOfTheFuture}
