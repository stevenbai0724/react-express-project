const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();

// Use this to parse body params from POST requests
app.use(express.json());

// async / await pattern
app.get('/api/customers', async (req, res) => {
    const customers = [
        {id:1, firstName: "Da", lastName: "Baby"},
        {id:2, firstName: "John", lastName: "Cena"},
        {id:3, firstName: "Pepe", lastName: "Frog"},
    ];

    // PUT API KEY HERE
    const API_KEY = ""
    const requestOptions = {
        headers: { 
            Authorization: `Bearer ${API_KEY}`
        },
    }

    // DMOJ application call
    const res2 = await axios.get('https://dmoj.ca/api/v2/contests?tag=seasonal&tag=dmopc', requestOptions)
    // All data stored under res2.data...
    console.log(JSON.stringify(res2.data.data.objects[0], null, 2))

    res.json(customers);
})

app.post('/api/customers', async (req, res) => {
    // Uses req.body stores the "body" parameter passed in by fetch
    console.log(req.body)
    res.json({ test: "test" });
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

