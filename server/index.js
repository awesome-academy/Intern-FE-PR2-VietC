import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/products', productRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://vietnguyen2799:vietnguyen2799@e-commerce.nzo7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set('useFindAndModify', false);
