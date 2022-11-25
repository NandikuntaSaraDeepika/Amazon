let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = 
'mongodb://localhost:27017';
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


// order
app.get('/customerorder',(req,res)=>{
    //let id = req.query.id
    let id = req.query.id;
    let query = {}
    if(id){
        //query={id:id}
        query={id}
    }else{
        query={}
    }
    db.collection('order').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//placeorder
app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
    
})

//placeorder
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

//updateOrder
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {id:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})


//deleteOrder
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
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

 
