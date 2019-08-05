let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('express').Router();
var cors = require('cors');
let app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub',{useNewUrlParser: true});
var db = mongoose.connection;

if(!db){ 
    console.log("error connecting to db");
}
else
{
    console.log("db connected successfully");
}

let port = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send(JSON.stringify({message:'Hello world from Express!!'}))
});
app.use('/api',apiRoutes)
app.listen(port,()=>{
    console.log('Server started...');
})

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);