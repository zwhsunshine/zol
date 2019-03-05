
const router = require('koa-router')();
const mongoose = require('mongoose');
// const querystring = require("querystring");

const STypes = require('../model/types');
const SNav = require('../model/nav');
const Spro = require('../model/product');
const User = require('../model/user');

router.get('/api/home/nav',async (ctx)=>{

    let o = {};
    let obj = ctx.request.query;

    switch (obj.act) {

    	//添加
        case 'add':
        	if( !obj.name || !obj.img){
        		o.code = 1;
	            o.msg = '请填写完整';
        	}else{
        		let add = new SNav({
	                name:obj.name,
	                img:obj.img,
	            });
	            await add.save();
	            o.code = 0;
	            o.msg = '添加成功';
        	}
            break;

        //删除
        case 'del':
        	let {id} = obj;
        	try{
				await SNav.remove({_id:id});
				o.code = 0;
                o.msg = '删除成功';
        	}catch(error){
        		o.code = 1;
                o.msg = '删除失败';
        	}
        	
        	break;

        case 'get':
            try {
                let arr = await SNav.find(JSON.parse(JSON.stringify({})));
                o.code = 0;
                o.msg = '查询成功';
                o.data = arr;
            } catch (error) {
                o.code = 1;
                o.msg = '查询失败';
                o.data = [];
            }
        	break;

        default:
        	o.code = -1;
            o.msg = '参数错误';
        	break;
    }
    ctx.body = o;
})

router.get('/api/types',async (ctx)=>{

    let o = {};
    let obj = ctx.request.query;

    switch (obj.act) {

        //添加
        case 'add':
            if( !obj.title ){
                o.code = 1;
                o.msg = '请填写完整';
            }else{
                let addTypes = new STypes({
                    title:obj.title,
                    number:Date.now()
                });
                await addTypes.save();
                o.code = 0;
                o.msg = '添加成功';
            }
            break;

        //删除
        case 'del':
            let {id} = obj;
            try{
                await STypes.remove({_id:id});
                o.code = 0;
                o.msg = '删除成功';
            }catch(error){
                o.code = 1;
                o.msg = '删除失败';
            }
            
            break;

        //获取
        case 'get':
            try {
                let arrTypes = await STypes.find(JSON.parse(JSON.stringify({})));
                o.code = 0;
                o.msg = '查询成功';
                o.data = arrTypes;
            } catch (error) {
                o.code = 1;
                o.msg = '查询失败';
                o.data = [];
            }
            break;

        case 'update':
            try {
                await STypes.update( {_id:obj.id} , {
                    title:obj.title
                } );
                o.code = 0;
                o.msg = '修改成功';
            } catch (error) {
                o.code = 1;
                o.msg = '修改失败';
            }
            break;

        default:
            o.code = -1;
            o.msg = '参数错误';
            break;


    }
    ctx.body = o;
})

router.get('/api/products',async (ctx)=>{

    let o = {};
    let obj = ctx.request.query;

    switch (obj.act) {

        //添加
        case 'add':
            let { title, price, freight, picture, number, color, edition, memory, types, recommend, profile, parameter, service } = obj;
            parameter = JSON.parse(parameter);
            color = JSON.parse(color);
            edition = JSON.parse(edition);
            memory = JSON.parse(memory);
            types = JSON.parse(types);
            if( !title ){
                o.code = 1;
                o.msg = '请填写完整';
            }else{
                let addPro = new Spro({
                    title,          //标题
                    price,          //价格
                    freight,        //运费
                    picture,        //图片
                    number,         //商品分类编号
                    color,          //颜色
                    edition,        //版本
                    memory,         //内存
                    types,          //所属类型
                    recommend,      //推荐
                    profile,        //商品详情
                    parameter,   //规格参数
                    service      //售后服务
                });
                await addPro.save();
                o.code = 0;
                o.msg = '添加成功';
            }
            break;

        //删除
        case 'del':
            try{
                await Spro.remove({_id:obj.id});
                o.code = 0;
                o.msg = '删除成功';
            }catch(error){
                o.code = 1;
                o.msg = '删除失败';
            }
            break;

        //获取
        case 'get':
            try {
                o.data = await Spro.find(JSON.parse(JSON.stringify({})));
                o.code = 0;
                o.msg = '查询成功';
            } catch (error) {
                o.code = 1;
                o.msg = '查询失败';
                o.data = [];
            }
            break;

        // case 'find':
        //     try {
        //         o.data = await Spro.find(JSON.parse(JSON.stringify({_id:obj.id})));
        //         o.code = 0;
        //         o.msg = '查询成功';
        //     } catch (error) {
        //         o.code = 1;
        //         o.msg = '查询失败';
        //         o.data = [];
        //     }
        //     break;

        case 'update':
            let {id:id2, title:tit2, price:pri2, freight:fre2, picture:pic2, color:col2, edition:edi2, memory:mem2, types:typ2, recommend:rec2, profile:pro2, parameter:par2, service:ser2 } = obj;
            par2 = JSON.parse(par2);
            col2 = JSON.parse(col2);
            edi2 = JSON.parse(edi2);
            mem2 = JSON.parse(mem2);
            typ2 = JSON.parse(typ2);
            try {
                await Spro.update( {_id:id2} , {
                    title:tit2,         //标题
                    price:pri2,         //价格
                    freight:fre2,       //运费
                    picture:pic2,       //图片
                    color:col2,         //颜色
                    edition:edi2,        //版本
                    memory:mem2,        //内存
                    types:typ2,         //所属类型
                    recommend:rec2,     //推荐
                    profile:pro2,       //商品详情
                    parameter:par2,     //规格参数
                    service:ser2        //售后服务
                } );
                o.code = 0;
                o.msg = '修改成功';
            } catch (error) {
                o.code = 1;
                o.msg = '修改失败';
            }
            break;

        default:
            o.code = -1;
            o.msg = '参数错误';
            break;

    }
    ctx.body = o;
})

router.post('/user/register',async (ctx)=>{
    let o = {};
    let obj = ctx.request.body;
    let {username,password} = obj;

    switch(obj.act){
        case 'reg':

            if( username ){
                let data = await User.findOne(JSON.parse(JSON.stringify({username})))
                if( data ){
                    o.code = 1;
                    o.msg = '此用户名已被注册';
                }else{
                    o.code = 0;
                }
            }else{
                o.code = 2;
                o.msg = '请输入用户名或密码';
            }
            break;

        case 'add':
            let regArr = await new User({username,password});
            await regArr.save();
            o.code = 0;
            o.msg = '注册成功';
            break;
    }
    ctx.body = o;
})

router.post('/user/login',async (ctx)=>{
    let o = {};
    let obj = ctx.request.body;
    let {username,password} = obj;
    console.log(obj);
    if( username ){

        let data = await User.findOne(JSON.parse(JSON.stringify({username})))
        console.log(data);
        if( data ){
            if( password == data.password ){
                o.code = 0;
                o.msg = '登录成功';
            }else{
                o.code = 3;
                o.msg = '密码不正确';
            }
        }else{
            o.code = 1;
            o.msg = '此用户名不存在';
        }

    }else{
        o.code = 2;
        o.msg = '请输入用户名或密码';
    }
    ctx.body = o;
})

module.exports = router;
