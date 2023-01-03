import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';    
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import salesRoutes from './routes/sales.js';
import managementRoutes from './routes/management.js';

// data imports
// import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from './data/index.js';
// import User from './models/User.js';
// import Product from './models/Product.js';
// import ProductStat from './models/ProductStat.js';
// import Transaction from './models/Transaction.js';
// import OverallStat from './models/OverallStat.js'
// import AffiliateStat from './models/AffiliateStat.js'

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE */
mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log(`Server at port ${PORT}`));
    
    // Will add this only one time.
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

}).catch(err => console.log(`${err} did not connect`));
