require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const controller = require('./controller');

app.use(cors({ origin: ['http://localhost:5000'] }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

massive(process.env.DATABASE_URL)
    .then(db => {

        app.set('db', db);
        console.log('postgres connected');
        app.get('/carrier_tape/:name', controller.findTape);
        app.get('/devices/:name', controller.findDevice);
        app.post('/compatible_tapes', controller.findCompatibleTapes);
        app.post('/device/entry', controller.addDevice);
        app.post('/tape/entry', controller.addTape);
        app.put('/device_update', controller.updateDevice);
        app.put('/tape_update', controller.updateTape);
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        })

        app.listen(process.env.PORT || 5000, () => console.log('listening on 5000'))

    })