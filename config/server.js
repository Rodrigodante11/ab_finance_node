// um npm install ja vai pegar todas dependencias do projeto(no arquivo package.json) e instalar
// npm install express body-parser mongoose node-restful mongoose-paginate lodash express-query-int pm2 --save
// npm install nodemon --save-dev
const port = 3003

// Express v4.16.0 e superior
// --------------------------
const express = require('express');
const app = express()
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(port , function () {
    console.log(`BACKEND in runiing on port ${port}. `)
})

// app.use(function(req, res , next){ //http://localhost:3003/
//     console.log('meu middlewae 1')
//     next()
// })

app.use(function(req, res , next){ //http://localhost:3003/
    // console.log('meu middlewae 2')
    res.send('Funcionou')
})



// npm run dev

 
// // For Express 4.16.0 ou abaixo
// // ------------------------------------
// const bodyParser = require('body-parser');
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));