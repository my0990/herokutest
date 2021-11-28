const express = require("express");
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 8080;
app.use(express.json());
var cors = require('cors');
app.use(cors());
let db;


app.use(express.static(path.join(__dirname, 'build'))); //static 파일 쓸수있음
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/build/index.html'))
});

// 몽고디비 연결
MongoClient.connect('mongodb+srv://my0990:134613@cluster0.uzcnx.mongodb.net/blog?retryWrites=true&w=majority', function(err,client){
    db = client.db('blog');
    app.listen(port, ()=>console.log(`Listening on port ${port}`))

});


app.get('/get',function(req,res){
    db.collection('post').find().toArray(function(오류,결과){
        res.send(결과)
    })
})
