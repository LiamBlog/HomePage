const config = {
	avatar: "/img/tx.jpg", // 头像
	welcometitle: "Hi, I'm ShiAn", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "奶茶",
				"preview": "/img/wallpaper/static/奶茶/image-pre.webp",
				"url": "/img/wallpaper/static/奶茶/image.png",
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "奶茶",
				"preview": "/img/wallpaper/static/奶茶/image-pre.webp",
				"url": "/img/wallpaper/static/奶茶/image.png",
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['音乐', '写作', '阅读', '茶道', '游玩', '探索', '电影', '散步', '睡觉'],
        skillPoints: [96, 85,    93,    88,     80,    88,    92,    90,    100 ],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://www.github.com/LiamBlog" },
		{ icon: "mdi-email", link: "mailto:dave04@foxmail.com" },
	],

	//打字机
	typeWriterStrings: [
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
        "生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。",
        "唯有你的光辉，像漫过山岭的薄雾，像和风从静谧的世界里带来的夜曲，像朗照溪水的月色扑面而来。",
        "慢品人间烟火色，闲观万事岁月长。",
        "万河归海，终会相遇。",
        "错过了落日余晖，还可以静待满天繁星。",
        "世界，美丽易碎，不必慌乱，只要静然于心，就会海阔天空。",
        "自由散漫的凉风，能治愈乱糟糟的坏心情。",
        "愿你内心山河壮阔，始终相信人间值得。",
        "花一定是送给别人吗？抛硬币一定需要结果吗？我追的一定是黄昏吗？",
        "春来夏往，秋收冬藏，我们来日方长。",
        "每一次日落都是太阳留给天空的温柔。",
        "晚风轻踩着云朵，月亮在贩售快乐，你从银河背后靠近我，我与星辉一同为你沉沦。",
        "离别是人间常态，相逢才是意外。",
        "日子甜甜的，像清晨的柠檬水，像冬日的太阳，像梦里的大海，像第一次遇见你。",
        "哪来的天生优秀，都是一步一个坑踩过来的。",
        "总要尝遍所有的路，在对生活充满期待。",
        "你未必万丈光芒，但你温暖有光。",
        "种自己的花，爱自己的宇宙。",
        "对于喜欢的事情，都要全力以赴的努力做到最好。",
        "因为心中有梦，所以暗里有光，遥遥无期，那又怎样，踮起脚尖，就更接近阳光。",
        "别灰心，普普通通的你也值得万般宠溺。",
        "生活总是来来往往，千万别等来日方长。",
        "你的眸是深情的海，满山的花，堕落了我所有的温情。",
        "不能输给月亮，我也要一直发光发亮。",
        "在广袤的空间和无限的时间中，能与你共享同一颗行星和同一段时光是我的荣幸。",
        "如果觉得身边的一切都太不如意，那就去见喜欢的人，做喜欢的事，买喜欢的东西。",
        "借一把清风吹开阴霾，接一碗烈酒谈笑风生。",
        "坐看庭前花开花落，笑看天边云卷云舒。",
        "你不要着急，你先去读你的书，我去看我的电影，总有一天，我们会窝在一起，读同一本书，看同一部电影。",
        "要珍惜的人很多，你在其中名列前茅。",
        "对待自己温柔一点，你只不过是宇宙的孩子，与植物、星辰没什么两样。",
        "热爱可抵岁月漫长，温柔可挡艰难时光。",
        "宇宙山河烂漫，人间点滴温暖都值得我前进。",
        "不要难过，人的运势就像天上的月亮一样，此消彼长，缺了的部分，还会圆回来。",
        "爱这世间，草木如书，爱这岁月，素静如湖。",
        "星星醉酒到处跑，月亮跌进深海里，我以前从未觉得人间美好的，直到你来了。",
        "阳光的酒调得很淡，却很醇，浅浅地斟在每一个杯型的小野花里。",
        "能打动人的从来不是花言巧语，而是恰到好处的温柔以及真挚的内心。",
        "听风八百遍，才知是人间。",
        "跟这个世界交手的许多年来，你是否，光彩依旧，兴趣盎然。",
        "独自走过苍苍莽莽，与你同行才有了光。",
        "你所看到的惊艳，都曾被平庸历练。",
        "我们坠落，破碎，掉入深渊，但我们终会被托起，被治愈，我们无所畏惧。",
        "只是为了更好的遇见，才赠予了距离和时间。那一天值得等待，那一眼满载星海。",
        "迟来的阳光不会拯救凋零的花，但花一定会再次开放。",
        "脚踩在淤泥里，担心要向光明。",
        "远处的云雾轻拂过黛山，橘黄的日落点缀其间，有风经过，停在窗边。这些美好的事物在一瞬间通通向我奔来，嘱咐我要热爱这个世界。",
        "我用执着烧毁了所有的幼稚与任性，那片荒野慢慢长出了理智和清醒。",
        "岁月这东西是要把人变成各种样子的。",
        "成熟的人，不问过去，聪明的人，不问现在，豁达的人，不问未来。",
        "你我之间隔着千山万水，我种下一缕思念，愿思念长成树，开满花，花随着风，飘向最美的你，你闻着花香，我想着你，如此，甚好。",
        "你很好，不要总觉得自己不好，我希望有一天你能和内心的自己真正和解，不要让表象和内心互相打架了，放轻松一点。",
        "过去的一切你都无法改变，这是基本的物理原理。",
        "人安静的生活，哪怕是静静地听着风声，亦能感受到诗意的生活。",
        "人间的事，只要生机不灭，即使重遭天灾人祸，暂被阻抑，终有抬头的日子。",
        "山高自有碧云时，月圆总有盈亏时。",
        "我深怕自己本非美玉，故而不敢加以刻苦琢磨；却又半信自己是块美玉，故又不肯庸庸碌碌，与瓦砾为伍。",
        "我们能做的，是从失望中看到希望。真正的乐观，不是因为没见过世界的黑暗，恰恰是因为见过，才懂得生活的珍贵。",
        "世间多少纷扰事，浮华落尽总随风。",
        "时间并不是解药，但时间里藏着解药。",
        "与理想平等交易，同喧嚣保持距离。",
        "前方的风景很好，我的意思是别回头。",
        "没有销声匿迹，我在热爱生活。",
        "天总会亮的，没有太阳也会。",
        "总有人间一两风，填我十万八千梦。",
        "然而生活辽阔，不要只活在爱恨里。",
        "岁月无波澜，余生不悲欢。",
        "在谷底也要开花，在海底也要望月。",
        "在这个夏天和更好的自己见面。",
        "穿自己喜欢的衣服，和不累的人相处。",
        "日子好长，充满希望。",
        "乐观和爱才是生活的解药。",
        "那就在一起，黄昏与四季。",
        "要相信美好的都在路上。",
        "我们在黑暗中并肩前行。",
        "想让每个平凡的日子溢出欢喜。",
        "希望不辜负理想也不辜负热爱。",
        "要在快乐的年纪活的精彩且迷人。",
        "寂静消散，曙光暗涌，都奔向白昼。",
        "最大的心安是：自律温柔和爱自己。",
        "生活总会难过，但好运也会如期而至。",
        "平凡且认真的生活总会变得可爱。",
        "生活给你苦难，其实是在铺垫浪漫。",
        "我频繁的记录着，因为生活很值得。",
        "愿所有美好的事物都奔向我们而来。",
        "岁月迢迢，我们总要有一往无前的力量。",
        "做一个温柔的人，永远不卑不亢清澈善良。",
        "一旦热爱生活，生活就会教你治愈一切的魔法。",
        "会有遗憾的时候，也会有完满的一天，不必担心。",
        "好的坏的我们都收下吧，然后一声不响继续生活。",
        "努力向上才更开心也更滚烫。",
        "所有缝隙都是光照进来的方向。",
        "努力经营当下，直至未来明朗。",
        "路还长，温柔的事一定会发生。",
        "把温柔碾碎，放入生活的缝隙中。",
        "记得向前看，别烂在过去和梦里。",
        "银河撑不起理想，却有温柔和力量。",
        "要在谴倦不尽的爱意里勇敢地生活。",
        "一定要站在你所热爱的世界里闪闪发光！",
        "因为有了人海，相遇才会显得那么意外。",
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '8659142201'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "报纸", "preview": "/img/wallpaper/static/报纸/image-pre.webp", "url": "/img/wallpaper/static/报纸/image.png" },
			{ "title": "新一小兰", "preview": "/img/wallpaper/static/新一小兰/image-pre.webp", "url": "/img/wallpaper/static/新一小兰/image.png" },
			{ "title": "奶茶", "preview": "/img/wallpaper/static/奶茶/image-pre.webp", "url": "/img/wallpaper/static/奶茶/image.png" },
			{ "title": "Sara", "preview": "/img/wallpaper/static/Sara/image-pre.webp", "url": "/img/wallpaper/static/Sara/image.jpg" },
			{ "title": "壁纸1", "preview": "/img/wallpaper/static/壁纸1/image-pre.webp", "url": "/img/wallpaper/static/壁纸1/image.jpeg" },
			{ "title": "壁纸2", "preview": "/img/wallpaper/static/壁纸2/image-pre.webp", "url": "/img/wallpaper/static/壁纸2/image.png" },
			{ "title": "壁纸3", "preview": "/img/wallpaper/static/壁纸3/image-pre.webp", "url": "/img/wallpaper/static/壁纸3/image.png" },
			{ "title": "壁纸4", "preview": "/img/wallpaper/static/壁纸4/image-pre.webp", "url": "/img/wallpaper/static/壁纸4/image.jpg" },
			{ "title": "壁纸5", "preview": "/img/wallpaper/static/壁纸5/image-pre.webp", "url": "/img/wallpaper/static/壁纸5/image.jpg" },
			{ "title": "壁纸6", "preview": "/img/wallpaper/static/壁纸6/image-pre.webp", "url": "/img/wallpaper/static/壁纸6/image.jpg" },
			{ "title": "壁纸7", "preview": "/img/wallpaper/static/壁纸7/image-pre.webp", "url": "/img/wallpaper/static/壁纸7/image.jpg" },
			{ "title": "壁纸8", "preview": "/img/wallpaper/static/壁纸8/image-pre.webp", "url": "/img/wallpaper/static/壁纸8/image.jpg" },
			{ "title": "壁纸9", "preview": "/img/wallpaper/static/壁纸9/image-pre.webp", "url": "/img/wallpaper/static/壁纸9/image.jpg" },
			{ "title": "壁纸10", "preview": "/img/wallpaper/static/壁纸10/image-pre.webp", "url": "/img/wallpaper/static/壁纸10/image.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "/img/wallpaper/dynamic/世界很温柔《龙族》上杉绘梨衣/A2EF5E85-pre.webm",
				"url": "/img/wallpaper/dynamic/世界很温柔《龙族》上杉绘梨衣/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/pEEZToj.jpg", title: "漫旅绘话", subtitle: "写不了一点", text: "所以你打不开🤣🤣🤣。哈哈，这博客怕是得了“写作拖延症”，连打开都成了“薛定谔的猫”——你不点进去，永远不知道它到底是空的还是满的。或许它正在偷偷酝酿一篇惊天动地的文章，只是还没找到灵感，或者干脆在摸鱼。总之，博客的门关得紧紧的，仿佛在说：“今天不营业，改天再来吧！” 😂", url: "https://www.mlhh.cn", show: false },
		{ go: "🗂️ 前往", img: "/img/pEEZ0sO.jpg", title: "密钥管理系统", subtitle: "一个简简单单の管理系统", text: "真的就是一个简简单单的密钥系统，你不信？那你打开看看！", url: "https://my.shian.xyz", show: false },
		{ go: "📝 前往", img: "/img/pEEZIeg.jpg", title: "FinalShell 激活", subtitle: "偶尔开发の小玩具", text: "一个小玩具而已啦，何必那么认真.", url: "https://js.mlhh.cn", show: false },
		{ go: "👍 前往", img: "/img/pEEZyod.jpg", title: "发布页", subtitle: "平平无奇の页面", text: "一个单页面，不信？自己打开看！", url: "https://fb.mlhh.cn", show: false },
		{ go: "🗃 前往", img: "/img/pEEmOqU.png", title: "本站数据报", subtitle: "让你的数据会说话，让你的网站更出彩。", text: "来自51.LA网站统计支持，网站流量、用户行为、转化效果，一屏尽览，让你运筹帷幄之中，决胜千里之外！", url: "https://v6.51.la/report/overview?comId=3092041", show: false },
	],

	statement: ["备案号：豫ICP备2024077903号", "Copyright © 2025 ShiAn"],
}

export default config
