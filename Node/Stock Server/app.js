const express = require('express');
const app = express();

app.use(express.json()) 

const productRoutes = require('./routes/productRoutes')
app.use(productRoutes)


const stockEntryRoutes = require('./routes/stockEntryRoutes')
app.use(stockEntryRoutes)

const stockExitRoutes = require('./routes/stockExitsRoutes')
app.use(stockExitRoutes)

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))