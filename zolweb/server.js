const Koa = require('koa');
const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');
const Animal = require('./src/model/animalModel');

const app = new Koa();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:80");
    next();
});

//链接
mongoose.connect('mongodb://localhost:27017');


//监听是否链接成功
mongoose.connection.on('connected',(error)=>{
    if(error)return;
    console.log('链接成功');
    
    router.get('/',async (ctx)=>{
        let o = {};
        let obj = ctx.request.query;
        switch (obj.act) {
            case 'add':
                let add = new Animal({
                    name:obj.name,
                    type:obj.type
                });
                await add.save();
                o.code = 0;
                o.msg = '添加成功';
                break;
        }
        ctx.body = o;
    })
    // router.get('/',async (ctx, next) => {
    //     ctx.response.body = '<h1>Index</h1>';
    // })
    // router.get('/classinfo',async (ctx)=>{
    //     let o = {};
    //     let obj = ctx.request.query;
    //     switch (obj.act) {
    //         case 'add':
    //             let add = new ClassInfo({
    //                 name:obj.name,
    //                 id:obj.id,
    //                 sex:obj.sex
    //             });
    //             await add.save();
    //             o.code = 0;
    //             o.msg = '添加成功';
    //             break;
    //     }
    
    //     ctx.body = o;
    // });
    app.use(router.routes());
    
    // app.use(static(path.join( __dirname,'public')))
    app.listen(80);
    

})
