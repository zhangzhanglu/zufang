let express = require('express');
let app = express();
//home数据
let beijingData = require('./data/home/beijing_homehot.js');
let shanghaiData = require('./data/home/shanghai_homehot.js');
let searchData = require('./data/search/index.js');
let detailData =require('./data/details/index.js');
let commitData = require('./data/comment/index');
let pinglunData = require('./data/shopcar/index');
app.get('/homeData',function(req,res){
    let city = req.query.city;
    if(city==='beijing'){
        res.send(beijingData);
    }else{
        res.send(shanghaiData);
    }
})
//search数据搜索接口
//get 接收参数方式：
//restful数据
//?携带的普通数据
app.get('/search/:skw',function(req,res){
    console.log(req.params);
    res.send(searchData)
})
//detail详情页
app.post('/detail',function(req,res){
    // let id = req.body.id;
    res.send(detailData);
})

//评论
app.get('/commit',function(req,res){
    let id = req.query.id;
    res.send(commitData);
})
app.listen(4000,function(){
    console.log('服务器运行在4000端口');
})
//管理评论
app.get('/pinglun',function(req,res){
    res.send(pinglunData);
})