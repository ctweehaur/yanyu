// ==========================================
// 常用谚语150句 分卷6 (Y - Z)
// ==========================================

const proverbData6 = [
    {
        proverb: "一犬吠声，百犬吠影。",
        pinyin: "yī quǎn fèi shēng ， bǎi quǎn fèi yǐng",
        defZh: "比喻盲目、毫无理性地跟在别人屁股后面随声附和、造谣生事，完全没有自己的独立主见主见。",
        defEn: "One dog barks at a sound, and a hundred dogs bark at the shadow; blind conformism.",
        defBm: "Ikut-ikut telunjuk orang (mengikut khabar angin tanpa memeriksa kebenaran).",
        example: "网络上许多键盘侠根本没看真相就盲目转发指责，一犬吠声，百犬吠影，实在可悲。"
    },
    {
        proverb: "一山不能藏二虎。",
        pinyin: "yī shān bù néng cáng èr hǔ",
        defZh: "比喻在同一个组织、集体里，不能同时存在两位同样强势、有决策权的顶尖核心领导，否则势必冲突分裂。",
        defEn: "One mountain cannot hold two tigers; two powerful leaders cannot coexist.",
        defBm: "Dua nahkoda dalam satu perahu (tidak boleh ada dua ketua dalam satu organisasi).",
        example: "在这家小分店里同时安排两个主管，一山不能藏二虎，迟早会产生决策纠纷。"
    },
    {
        proverb: "一手不能掩天下目。",
        pinyin: "yī shǒu bù néng yǎn tiān xià mù",
        defZh: "强调只靠强权者一人的遮蔽、说谎和封锁，是绝对绝不可能永远欺骗和瞒住广大天下的群众眼睛眼睛的。",
        defEn: "One hand cannot cover the eyes of the whole world; truth cannot be hidden forever.",
        defBm: "Membungkus bangkai gajah dengan nyiru (kejahatan besar tidak boleh disembunyikan).",
        example: "他虽然企图用金钱封锁事故消息，但一手不能掩天下目，事实真相终究在网上传开了。"
    },
    {
        proverb: "一蟹不如一蟹。",
        pinyin: "yī xiè bù rú yī xiè",
        defZh: "比喻事情或产品越做越不好，或者团队里接班的人才一届不如一届、一代不如一代（含极度极度失望）。",
        defEn: "Each crab is worse than the last; continuous decline in quality or talent.",
        defBm: "Makin lama makin merosot (generasi penerus yang semakin lemah).",
        example: "本届班委会做事推脱，对比往届，真是一蟹不如一蟹，连早上点名都组织不好。"
    },
    {
        proverb: "一枝动，百枝摇。",
        pinyin: "yī zhī dòng ， bǎi zhī yáo",
        defZh: "比喻一个极微小局部的细节改动或危机，都会迅速产生骨牌效应、牵连和波及到整体大局系统。",
        defEn: "When one branch moves, a hundred branches shake; butterfly effect.",
        defBm: "Sebab nila setitik, rusak susu sebelanga (kebocoran kecil menjejaskan semua).",
        example: "这家总公司的资金链一旦断裂，一枝动，百枝摇，全国数千家加盟店都会面临倒闭风险。"
    },
    {
        proverb: "衣不如新，人不如旧。",
        pinyin: "yī bù rú xīn ， rén bù rú jiù",
        defZh: "指衣服是崭新的最好看；而结交朋友、选用下属则是相处多年、知根知底的老朋友最为忠诚可靠。",
        defEn: "Clothes are best when new, but friends are best when old.",
        defBm: "Sahabat lama lebih setia dan memahami berbanding kenalan baharu.",
        example: "无论你现在结识了多少新商业伙伴，衣不如新，人不如旧，当年陪你一起创业的兄弟千万不能怠慢。"
    },
    {
        proverb: "依样画葫芦。",
        pinyin: "yī yàng huà hú lu",
        defZh: "比喻做事毫无创意，只会机械、死板地模仿别人现成的做法和套路照葫芦画瓢。",
        defEn: "Draw a gourd according to the pattern; copy mechanically.",
        defBm: "Seperti burung kakak tua (meniru sebijak-bijak tindakan orang tanpa kreativiti).",
        example: "在科学研究和设计中，如果只是一味地依样画葫芦，我们永远不可能取得自主技术突破。"
    },
    {
        proverb: "银样镴枪头。",
        pinyin: "yín yàng là qiāng tóu",
        defZh: "比喻外表看起来极其威风、华丽和结实，但实际上非常脆弱、中看不中用、一碰就软的摆设摆设。",
        defEn: "A pewter spearhead made to look like silver; impressive but useless.",
        defBm: "Bagai pohon tidak berbuah (kelihatan hebat tetapi tiada sumbangan atau kebolehan).",
        example: "那台新跑车虽然外形酷炫，谁知刚开上陡坡引擎就熄火了，真是一个银样镴枪头。"
    },
    {
        proverb: "有意栽花花不发，无心插柳柳成荫。",
        pinyin: "yǒu yì zāi huā huā bù fā ， wú xīn chā liǔ liǔ成荫",
        pinyin: "yǒu yì zāi huā huā bù fā ， wú xīn chā liǔ liǔ chéng yīn",
        defZh: "比喻刻意去强求、费尽心思去谋划的事情往往没有成功，而在不经意间顺其自然做的事却意外获得了丰收丰收。",
        defEn: "Intentional planting of flowers yields no blossoms, while an accidental willow seed grows into a shady tree.",
        defBm: "Rezeki tidak pernah salah alamat (kejayaan tidak disangka-sangka bertunas dari perkara biasa).",
        example: "他苦苦投资数年实体店亏损了，反而随手在网播发的一个教学短视频一夜涨粉百万，真是有意栽花花不发，无心插柳柳成荫。"
    },
    {
        proverb: "与日月争光。",
        pinyin: "yǔ rì yuè zhēng guāng",
        defZh: "形容一个人做出的功业、奉献或展现的高尚品德极为伟大，足以照耀千古，同太阳月亮的光辉相比相比。",
        defEn: "Match the brightness of the sun and moon; shine through the ages.",
        defBm: "Jasa yang dikenang sepanjang zaman (kemuliaan yang tidak akan luput dalam sejarah).",
        example: "林连玉先生对华文母语教育的伟大建树与斗争，与日月争光，永垂青史。"
    },
    {
        proverb: "远亲不如近邻。",
        pinyin: "yuǎn qīn bù rú jìn lín",
        defZh: "形容一旦突发紧急事件和危难，住得很远的亲戚根本鞭长莫及，还不如隔壁邻居能立刻给予援助救援。",
        defEn: "A neighbor nearby is better than a relative far away.",
        defBm: "Jiran sepakat membawa berkat (jiran di sebelah lebih cepat menolong berbanding saudara jauh).",
        example: "昨晚外婆突发急病，多亏隔壁的哈桑大叔开车送去医院，真是远亲不如近邻。"
    },
    {
        proverb: "远水救不了近火。",
        pinyin: "yuǎn shuǐ jiù bù liǎo jìn huǒ",
        defZh: "比喻慢腾腾的慢办法、或者远在天边的资源，根本无法解决迫在眉睫、急需立刻处理的眼前危机危机。",
        defEn: "Distant water cannot extinguish a nearby fire; slow aid is useless.",
        defBm: "Bantuan yang terlambat tidak dapat menyelamatkan bencana yang sedang berlaku.",
        example: "虽然我们可以向国外总部申请备用款，但这需要审核一个月，远水救不了近火，我们今天必须先垫付这笔款项。"
    },
    {
        proverb: "在家千日好，出门一时难。",
        pinyin: "zài jiā qiān rì hǎo ， chū mén yī shí nán",
        defZh: "指在家里有父母照料、生活安逸舒适；而一旦出门在外谋生闯荡，哪怕短时间也会面临许多困难艰辛。",
        defEn: "At home, everything is easy; away from home, even a moment is difficult.",
        defBm: "Hujan emas di negeri orang, hujan batu di negeri sendiri (sukarnya hidup di tempat orang).",
        example: "出国留学后凡事都要自己洗衣服做饭、生病了自己照顾，他这才深感：在家千日好，出门一时难。"
    },
    {
        proverb: "丈二和尚，摸不着头脑。",
        pinyin: "zhàng èr hé shàng ， mō bù zháo tóu nǎo",
        defZh: "比喻对突然发生的变故、情况完全摸不清底细，莫名其妙、一头雾水。",
        defEn: "Like a very tall monk unable to touch his own head; utterly puzzled.",
        defBm: "Tercengang-cengang bagai rusa masuk kampung (tersangat hairan dan tidak mengerti apa yang terjadi).",
        example: "大家都高高兴兴在开会，他一进来就指着桌子大发雷霆，让我们丈二和尚，摸不着头脑。"
    },
    {
        proverb: "真金不怕红炉火。",
        pinyin: "zhēn jīn bù pà hóng lú huǒ",
        defZh: "比喻品质高尚、意志坚定、真正有真才实学的人，绝不怕任何严峻的考验、污蔑或审查审查。",
        defEn: "True gold fears no furnace; a person of integrity stands any test.",
        defBm: "Emas tulen tidak takut dibakar (orang berintegriti tinggi tidak takut akan sebarang fitnah).",
        example: "既然你没有挪用公款，面对公证处的审计就大大方方配合，真金不怕红炉火。"
    },
    {
        proverb: "真金不怕火炼。",
        pinyin: "zhēn jīn bù pà huǒ liàn",
        defZh: "同“真金不怕红炉火”，比喻有骨气、意志如钢品格高尚的人，在任何风浪和打压中都能经受住考验。",
        defEn: "True gold stands the test of fire; integrity is proven in trials.",
        defBm: "Berani kerana benar, takut kerana salah (orang jujur pasti lulus sebarang ujian).",
        example: "经过严苛的极限温度测试，我校独立研发的卫星芯片依然运转完美，真金不怕火炼！"
    },
    {
        proverb: "针无两头尖，蔗无两头甜。",
        pinyin: "zhēn wú liǎng tóu jiān ， zhè wú liǎng tóu tián",
        defZh: "比喻客观世事万物不可能十全十美，必然有得有失，劝人做人做事要学会取舍和知足知足。",
        defEn: "A needle cannot be sharp at both ends, and sugarcane cannot be sweet at both ends.",
        defBm: "Tiada gading yang tidak retak (tiada perkara atau manusia yang tersangat sempurna).",
        example: "你想在黄金地段买大房子，价格自然就高，针无两头尖，蔗无两头甜，别再挑剔预算了。"
    },
    {
        proverb: "正离狼窝，又逢虎口。",
        pinyin: "zhèng lí láng wō ， yòu féng hǔ kǒu",
        defZh: "形容人的处境极其悲惨倒霉，刚刚摆脱一个危险的危难，又不幸落入了另一个更加险恶的深渊深渊。",
        defEn: "Out of the wolf's den, and into the tiger's mouth; sequential disasters.",
        defBm: "Terlepas dari mulut buaya, masuk ke mulut harimau.",
        example: "可怜的他上个月刚从那家压榨员工的黑工厂辞职，谁知新找的工作居然是电信诈骗团伙，正离狼窝，又逢虎口。"
    },
    {
        proverb: "知足者常乐。",
        pinyin: "zhī zú zhě cháng lè",
        defZh: "劝诫人们要学会满足、安于已经拥有的优良生活，不作非分之想、不贪心，这样便能永远保持快乐。",
        defEn: "Contentment brings constant happiness.",
        defBm: "Orang yang bersyukur akan sentiasa bahagia (tidak tamak).",
        example: "虽然我们家生活平淡，但家庭和睦，无病无灾，知足者常乐，我已经很幸福了。"
    },
    {
        proverb: "只见火上添油，不见雪中送炭。",
        pinyin: "zhǐ jiàn huǒ shàng tiān yóu ， bú jiàn xuě zhōng sòng tàn",
        defZh: "极为愤慨地比喻世态炎凉，旁人只会在别人遭难、发生纠纷时去火上浇油凑热闹，却很少有人能在最危机时刻救急救难。",
        defEn: "Plenty of those adding fuel to the fire, but none sending charcoal in a winter storm.",
        defBm: "Suka memprovokasi kekacauan, tetapi enggan menghulurkan bantuan sewaktu kesulitan.",
        example: "大卫家里遭了火灾，那些平日称兄道弟的酒肉朋友居然全都避而不见，只见火上添油，不见雪中送炭。"
    },
    {
        proverb: "只听楼梯响，不见人下来。",
        pinyin: "zhǐ tīng lòu tī xiǎng ， bú jiàn rén xià lái",
        defZh: "比喻事情和计划在风声上宣传、议论得极大，却迟迟不见任何具体的实际行动和落实落地。",
        defEn: "Much noise on the stairs, but nobody comes down; empty promises.",
        defBm: "Indah khabar daripada rupa (gembar-gembur besar tanpa sebarang hasil konkrit).",
        example: "开发商去年就声称要在此动工修轻快铁，一年过去了，只见楼梯响，不见人下来。"
    },
    {
        proverb: "只许州官放火，不许百姓点灯。",
        pinyin: "zhǐ xǔ zhōu guān fàng huǒ ， bù yǔn xǔ bǎi xìng diǎn dēng",
        defZh: "极其辛辣地讽刺强权者、高层领导横行霸道，自己任意做坏事违反规章，却严厉限制甚至惩罚普通平民做正当的事。",
        defEn: "The magistrates are allowed to burn down houses, while the common people are forbidden to light lamps; double standard.",
        defBm: "Ketua bebas melanggar peraturan, anak buah dihukum atas kesilapan kecil (pilih kasih yang melampau).",
        example: "你自己天天上课迟到不罚款，学生迟到一秒就罚扫地，这简直是只许州官放火，不许百姓点灯！"
    },
    {
        proverb: "只重衣衫不重人。",
        pinyin: "zhǐ zhòng yī shān bú zhòng rén",
        defZh: "形容势利眼、势利社会，只懂得通过一个人的名牌衣着和华丽外表来评估评估他人，而完全不重视高尚人品人品。",
        defEn: "Value clothes but not the person; judge solely by wealth and dress.",
        defBm: "Memandang tinggi pada pakaian mewah, memandang rendah pada akhlak mulia.",
        example: "现在的很多高档餐厅服务员只重衣衫不重人，看你穿便装就态度冷漠，真是可恶。"
    },
    {
        proverb: "重赏之下，必有勇夫。",
        pinyin: "zhòng shǎng zhī xià ， bì yǒu yǒng fū",
        defZh: "比喻只要给予极度优厚的薪酬、奖金或待遇，自然而然就会有本领高强的人愿意挺身而出效力命去冒险。",
        defEn: "A generous reward bound to elicit a brave man; high incentives drive courage.",
        defBm: "Ada kemenyan ada arang (ganjaran yang lumayan pasti menarik pekerja yang berkebolehan).",
        example: "为了在限期内攻克系统漏洞，董事长开出了十万令吉重奖，重赏之下，必有勇夫，几位专家当晚便完成了代码重写。"
    },
    {
        proverb: "醉翁之意不在酒。",
        pinyin: "zuì wēng zhī yì bú zài jiǔ",
        defZh: "比喻一个人表面上、口头上在做着、谈论着某件事，事实上他的内心和行为另有其他的真实目的目的。",
        defEn: "The drinker's heart is not in the wine; having an ulterior motive.",
        defBm: "Ada udang di sebalik batu (bertindak melakukan sesuatu tetapi mempunyai niat tersembunyi).",
        example: "他天天跑去图书馆借书，醉翁之意不在酒，其实是为了认识那个在台前值班的女班长。"
    },
    {
        proverb: "左右逢源 / 作法自毙 / 作茧自缚 / 坐观成败 / 坐井观天",
        pinyin: "zuǒ yòu féng yuán zuò fǎ zì bì zuò jiǎn zì fù zuò guān chéng bài zuò jǐng guān tiān",
        defZh: "第146-150组重点复习包：涵盖办事圆滑、立法害己、自我捆绑、袖手旁观、以及见识短浅的常用考点。",
        defEn: "Review set: high frequency idioms of dexterity, self-entrapment, bystander apathy, and narrow mindedness.",
        defBm: "Kombinasi peribahasa penting: bertindak secara licik, menjerat diri sendiri, dan berpandangan sempit bagai katak di bawah tempurung.",
        example: "我们要多接触外界，多读报纸，万万不可在温室里坐井观天，否则毕业后很难在社会立足。"
    }
];
