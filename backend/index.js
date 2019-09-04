const app = require('express')();
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(bodyParser.json());


massive({
    host: 'localhost',
    port: 5432,
    database: 'sqm',
    user: 'kylenorton',
    password: ''
}).then(db => {

    app.set('db', db);
    console.log('postgres connected');
    app.get('/carrier_tape/:name', controller.findTape);
    app.get('/devices/:name', controller.findDevice);
    app.post('/compatible_tapes', controller.findCompatibleTapes);
    app.post('/device/entry', controller.addDevice);
    app.post('/tape/entry', controller.addTape);

    app.listen(8001, () => console.log('listening on 8001'))

})