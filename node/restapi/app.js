let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.LiveMongo;
let cors = require('cors')
let bodyParser = require('body-parser')
let db;


//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.send('Hii from Express')
})

// list of location
app.get('/user',(req,res)=>{
    db.collection('user').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/product',(req,res)=>{
    db.collection('product').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/customer',(req,res)=>{
    db.collection('customer').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/customeraddress',(req,res)=>{
    db.collection('customeraddress').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/customerorder',(req,res)=>{
    db.collection('customerorder').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('amazonapi');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })

})

 
