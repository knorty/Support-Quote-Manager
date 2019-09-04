
const findTape = (req, res) => {
    const db = req.app.get('db')
    const { name } = req.params;
    db.carrier_tape.where(`carrier_tape ILIKE $1`, [`%${name}%`])
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
};

const findDevice = (req, res) => {
    const db = req.app.get('db')
    const { name } = req.params;
    db.devices.where(`mpn ILIKE $1`, [`%${name}%`])
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
};

const findCompatibleTapes = (req, res) => {
    const db = req.app.get('db')
    const dev_ao = req.body.device_ao;
    const dev_bo = req.body.device_bo;
    const dev_ko = req.body.device_ko;
    db.query(`
        SELECT * FROM carrier_tape WHERE ao BETWEEN \${dev_ao} AND \${dev_ao} + 1.00
        AND bo BETWEEN \${dev_bo} AND \${dev_bo} + 1.00
        AND ko BETWEEN \${dev_ko} AND \${dev_ko} + 1.00
    `, { dev_bo, dev_ko, dev_ao })
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
};

const addDevice = (req, res) => {
    const db = req.app.get('db')
    const mpn = req.body.mpn;
    const package_type = req.body.package_type;
    const device_ao = req.body.device_ao;
    const device_bo = req.body.device_bo;
    const device_ko = req.body.device_ko;
    const date_quoted = req.body.date_quoted;
    const customer = req.body.customer;
    const contact = req.body.contact;
    const notes = req.body.notes;
    const quote_eau = req.body.quote_eau;
    const quote_number = req.body.quote_number;
    const min_price = req.body.min_price;
    const tr_unit_pricing = req.body.tr_unit_pricing;
    const nre = req.body.nre
    const email_subject = req.body.email_subject;

    db.query(`
        INSERT INTO devices (
            mpn,
            package_type,
            device_ao,
            device_bo,
            device_ko,
            date_quoted,
            customer,
            contact,
            notes,
            quote_eau,
            quote_number,
            min_price,
            tr_unit_pricing,
            nre,
            email_subject
        ) 
        VALUES (
            \${mpn},
            \${package_type},
            \${device_ao},
            \${device_bo},
            \${device_ko},
            \${date_quoted},
            \${customer},
            \${contact},
            \${notes},
            \${quote_eau},
            \${quote_number},
            \${min_price},
            \${tr_unit_pricing},
            \${nre},
            \${email_subject}
        )`,
        {
            mpn,
            package_type,
            device_ao,
            device_bo,
            device_ko,
            date_quoted,
            customer,
            contact,
            notes,
            quote_eau,
            quote_number,
            min_price,
            tr_unit_pricing,
            nre,
            email_subject
        }
    )
        .then((data) => {
            res.send(console.log('Entered!'))
        })
        .catch((error) => {
            console.error
        })
};

const addTape = (req, res) => {
    const db = req.app.get('db');
    const carrier_tape = req.body.carrier_tape;
    const vendor = req.body.vendor;
    const mpr = req.body.mpr;
    const vendor_part_number = req.body.vendor_part_number;
    const width = req.body.width;
    const pitch = req.body.pitch;
    const ao = req.body.ao;
    const bo = req.body.bo;
    const ko = req.body.ko;
    const k1 = req.body.k1;
    const pockets_per_22inch_reel = req.body.pockets_per_22inch_reel;
    const max_pockets_per_13inch_reel = req.body.max_pockets_per_13inch_reel;
    const max_meters_per_13inch_reel = req.body.max_meters_per_13inch_reel;
    const desired_pockets_per_13inch_reel = req.body.desired_pockets_per_13inch_reel;
    const comments = req.body.comments;

    db.query(`
        INSERT INTO carrier_tape (
            carrier_tape,
            vendor,
            mpr,
            vendor_part_number,
            width,
            pitch,
            ao,
            bo,
            ko,
            k1,
            pockets_per_22inch_reel,
            max_pockets_per_13inch_reel,
            max_meters_per_13inch_reel,
            desired_pockets_per_13inch_reel,
            comments
        ) 
        VALUES (
            \${carrier_tape},
            \${vendor},
            \${mpr},
            \${vendor_part_number},
            \${width},
            \${pitch},
            \${ao},
            \${bo},
            \${ko},
            \${k1},
            \${pockets_per_22inch_reel},
            \${max_pockets_per_13inch_reel},
            \${max_meters_per_13inch_reel},
            \${desired_pockets_per_13inch_reel},
            \${comments}
        )`,
        {
            carrier_tape,
            vendor,
            mpr,
            vendor_part_number,
            width,
            pitch,
            ao,
            bo,
            ko,
            k1,
            pockets_per_22inch_reel,
            max_pockets_per_13inch_reel,
            max_meters_per_13inch_reel,
            desired_pockets_per_13inch_reel,
            comments
        }
    )
        .then((data) => {
            res.send(console.log('Entered!'))
        })
        .catch((error) => {
            console.error
        })
};

module.exports = {
    findTape,
    findDevice,
    findCompatibleTapes,
    addDevice,
    addTape
}