const express=require('express');
const morgan=require('morgan');
const cors = require('cors');

const app=express();
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');

//middleware
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(morgan('dev'));

//rutas
app.use('/api/empleados',require('./src/routes/empleados.routes'));


module.exports=app;