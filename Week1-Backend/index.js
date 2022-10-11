const express = require('express')
const bills = require('./models/user')

const PORT = 6500;
const app = express()
app.use(express.json());


app.get('/pong', (req, res, next) => {
    res.send({
        msg: 'Hello'
    })
})

app.get('/bills', async (req, res, next) => {
    let data = {
        net: 36163,
        bill: 'sdsfsdsfdfdsfdssd',
        total: 58222
    }

    const result = await bills.save(data)

    if (result) {
        res.send({save: true})
    } else {

        res.send({save: true})
    }
})

app.post('/update', (req, res) => {
    let net = req.body.net;
    let bill = req.body.bill;
    let total = req.body.total;

    let data = {
        net, bill, total
    }

    const result = bills.save(data);

    if (result) {
        res.send({
            status: 'success'
        })
    } else {
        res.send({
            status: 'failed to save bill'
        })
        
    }
})

app.listen(PORT, () => {
    console.log('nakuskiza');
})