import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const App = express();

// Middleware
App.use(cors());
App.use(express.json());
App.use(UserRoute);

// initialize routes
App.listen(4500,()=>{
    console.log('Server is running on port 4500');
});