require('dotenv').config();
import * as express from "express";
import * as cors from 'cors';
import routes from './routes';
import dataSource from "./app-data-source";

// establish database connection
dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

// create and setup express app
const app = express();

app.use(cors());
app.use(express.json());

// register routes
app.use('/', routes);

// start express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
