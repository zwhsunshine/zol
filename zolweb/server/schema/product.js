const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	title:String,		//标题
	price:Number,		//价格
	freight:Number,		//运费
	picture:Array,		//图片
	number:Number,		//商品分类编号
	color:Array,		//颜色
	edition:Array,		//版本
	memory:Array,		//内存
	types:Array,		//所属类型
	recommend:Array,	//推荐
	profile:Array,		//商品详情
	parameter:Object,	//规格参数
	service:String		//售后服务
})

