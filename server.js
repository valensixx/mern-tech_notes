const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use('/', express.static(path.join(__dirname, '/public'))) 
//__dirname is global var for nodejs - it says look inside the falder we are in

app.use('/',require('./routes/root'))

app.listen(PORT, () => console.log(`Server is runnung on port ${PORT}`));