const express = require('express')
const bills = require('./models/user')
const cors = require('cors')

const PORT = 6500;
const app = express()

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

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
        res.send({save: false})
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