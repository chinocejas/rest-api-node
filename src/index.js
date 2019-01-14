const express = require('express');
const app = express();

//Configure
app.set('port', process.env.PORT || 3002);

//Middlewares
app.use(express.json());
//routes
app.use(require('./Routes/employees'));
//Run app
app.listen(app.get('port'), (err,)=>{
    console.log('server on port: ', app.get('port'));
});