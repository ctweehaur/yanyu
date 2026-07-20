// ==========================================
// 常用谚语150句 分卷3 (M - S)
// ==========================================

const proverbData3 = [
    {
        proverb: "明枪易躲，暗箭难防。",
        pinyin: "míng qiāng yì duǒ ， àn jiàn nán fáng",
        defZh: "形容公开的挑衅和正面攻击容易对付及防备，而暗地里的阴谋陷害和小人算计却让人防不胜防。",
        defEn: "An open attack is easy to dodge, but a hidden arrow is hard to guard against.",
        defBm: "Penyakit yang nampak mudah dirawat, hasad dengki yang tersembunyi sukar dikesan.",
        example: "商业竞争中，不怕正面对抗，最怕竞争对手在背后搞小动作，明枪易躲，暗箭难防啊。"
    },
    {
        proverb: "明知山有虎，偏向虎山行。",
        pinyin: "míng zhī shān yǒu hǔ ， piān xiàng hǔ shān xíng",
        defZh: "比喻人具有不畏艰险、勇往直前的无畏英雄气概，明晓有巨大困难，也毅然迎难而上。",
        defEn: "Knowing there are tigers in the mountain, yet deliberately walking towards it; defy danger.",
        defBm: "Mempunyai keperwiraan yang tinggi, sanggup menghadapi maut demi melaksanakan tugas.",
        example: "战区形势动荡万分，这名战地记者依然明知山有虎，偏向虎山行，带回了第一线实况报道。"
    },
    {
        proverb: "牡丹虽好，全凭绿叶扶持。",
        pinyin: "mǔ dān suī hǎo ， quán píng lǜ yè fú chí",
        defZh: "比喻一个人纵有天大的本事和才华，也必须要依靠团队、绿叶及旁人的协助和支持才能获得极大成就。",
        defEn: "No matter how beautiful the peony is, it still needs green leaves to support it.",
        defBm: "Ular menyusur akar tidak akan hilang bisanya (orang hebat memerlukan sokongan orang bawahan).",
        example: "主角演得好，多亏了配角们完美的演出。牡丹虽好，全凭绿叶扶持。"
    },
    {
        proverb: "拿鸡蛋往石头上碰。",
        pinyin: "ná jī dàn wǎng shí tou shàng pèng",
        defZh: "比喻不自量力，以极度微弱的力量去跟绝对庞大强盛的对手硬拼，结果只能自取灭亡。",
        defEn: "Like throwing an egg against a stone; courting disaster due to overestimating oneself.",
        defBm: "Bagaikan mencurahkan air ke daun keladi / Melawan musuh yang jauh lebih kuat secara bodoh.",
        example: "你靠个人力量想去和垄断大企业硬性对抗，简直是拿鸡蛋往石头上碰。"
    },
    {
        proverb: "泥菩萨过江，自身难保。",
        pinyin: "ní pú sà guò jiāng ， zì shēn nán bǎo",
        defZh: "形容自己都已经陷入了极其危险危险的泥潭中自顾不暇，更没有任何多余的能力去救助和照顾别人。",
        defEn: "Like a clay idol crossing a river; unable to save even oneself.",
        defBm: "Seperti ketam mengajar anaknya berjalan betul (diri sendiri bermasalah, tidak mampu menolong orang).",
        example: "我们公司已经快要倒闭了，我现在泥菩萨过江，自身难保，实在是没办法借钱给你。"
    },
    {
        proverb: "牛头不对马嘴。",
        pinyin: "niú tóu bù duì mǎ zuǐ",
        defZh: "形容言行答非所问、前后矛盾、牛头不对马嘴，或者两件事物风马牛不相及，完全不相称不相符。",
        defEn: "Utterly incongruous; giving an irrelevant answer.",
        defBm: "Cakap siang pandang-pandang (jawapan yang langsung tidak menepati soalan yang ditanya).",
        example: "历史考试问你建国年份，你却一直在写神山高度，牛头不对马嘴。"
    },
    {
        proverb: "爬得高，摔得重。",
        pinyin: "pá dé gāo ， shuāi dé zhòng",
        defZh: "比喻一个人的名声和地位捧得太高、脱离实际，一旦遭遇失败或过错，其声誉崩塌得越惨惨重。",
        defEn: "The higher you climb, the harder you fall.",
        defBm: "Makin tinggi bangau terbang, akhirnya hinggap di belakang kerbau juga (kejatuhan orang tinggi amat dahsyat).",
        example: "那些一夜爆红却品德败坏的网红，通常爬得高，摔得重，很快就会被时代唾弃。"
    },
    {
        proverb: "赔了夫人又折兵。",
        pinyin: "péi le fū rén yòu zhé bīng",
        defZh: "比喻不仅没有占到任何便宜，反而蒙受了双重的巨大损失，常用于讥笑投机取巧者的愚蠢失败。",
        defEn: "Losing both one's wife and one's soldiers; suffer a double loss.",
        defBm: "Yang dikejar tak dapat, yang dikendong berciciran (rugi berganda kerana tamak).",
        example: "他想通过投机炒作虚拟币赚一笔，结果被骗子卷走了本金，账号还被封禁，真是赔了夫人又折兵。"
    },
    {
        proverb: "平地一声雷。",
        pinyin: "píng dì yī shēng léi",
        defZh: "比喻原本平淡无奇的人忽然声名鹊起、地位极速飙升，也指突然爆发了惊人的重大社会事件。",
        defEn: "A sudden clap of thunder on flat ground; sudden dramatic news or rise to fame.",
        defBm: "Bagai petir di siang hari (perkara besar atau kejayaan hebat yang berlaku secara mendadak).",
        example: "该村庄里那名家境清贫的孩子摘下SPM全国第一，犹如平地一声雷，轰动了整个社区。"
    },
    {
        proverb: "前门拒虎，后门进狼。",
        pinyin: "qián mén jù hǔ ， hòu mén jìn láng",
        defZh: "比喻一个危险刚被化解和制止，另一个更加凶残、险恶的危机接踵而至，祸事接连不断。",
        defEn: "Fending off a tiger at the front door while a wolf enters at the back.",
        defBm: "Terlepas dari mulut buaya, masuk ke mulut harimau.",
        example: "好不容易解决了工厂的财务纠纷，原料供应链又因风暴断绝，前门拒虎，后门进狼。"
    },
    {
        proverb: "牵一发而动全身。",
        pinyin: "qiān yī fà ér dòng quán shēn",
        defZh: "比喻一个极微小的局部细节变动，都会连锁反应地直接关联和影响到全局、整个系统的稳定运作。",
        defEn: "Pull one hair and the whole body moves; a tiny change affects the whole situation.",
        defBm: "Cubit paha kanan, paha kiri terasa juga (satu masalah kecil menjejaskan keseluruhan sistem).",
        example: "金融市场的汇率波动牵一发而动全身，每一个实体工商业链条都面临洗牌风险。"
    },
    {
        proverb: "强将手下无弱兵。",
        pinyin: "qiáng jiàng shǒu xià wú ruò bīng",
        defZh: "比喻有英明、高水平的领袖或教练，他手下的队员、属员实力肯定也绝不弱小，十分精干。",
        defEn: "Under a strong general, there are no weak soldiers.",
        defBm: "Bapa rintik anak bertitik / Pemimpin yang hebat melahirkan pengikut yang berkebolehan tinggi.",
        example: "张老师带出来的辩论队已经十连冠了，果真是强将手下无弱兵。"
    },
    {
        proverb: "巧妇难为无米之炊。",
        pinyin: "qiǎo fù nán wéi wú mǐ zhī chuī",
        defZh: "比喻哪怕一个人再有聪明才智、再能干，如果没有必备的物质资金或客观基础，也做不出任何成绩。",
        defEn: "Even the cleverest housewife cannot cook a meal without rice.",
        defBm: "Bagai menggantang asap (projek tidak boleh berjalan tanpa modal asas).",
        example: "设计图已经完美无缺，但如果不拨款采购基本原材料，那就是巧妇难为无米之炊。"
    },
    {
        proverb: "热锅上的蚂蚁。",
        pinyin: "rè guō shàng de mǎ yǐ",
        defZh: "形容人处境极其惶恐不安、焦急万分万分、走投无路而急得手忙脚乱的样子。",
        defEn: "Like ants on a hot pot; in a state of extreme anxiety and panic.",
        defBm: "Seperti cacing kepanasan (sangat gelisah dan tidak duduk diam).",
        example: "得知孩子在郊游时失联，母亲心急如焚，犹如热锅上的蚂蚁在房间里不停地踱步。"
    },
    {
        proverb: "人死留名，豹死留皮。",
        pinyin: "rén sǐ liú míng ， bào sǐ liú pí",
        defZh: "比喻人活一世，应当注重自己的品德与名声，力求在死后能留下受人称颂的光荣名声与建树。",
        defEn: "A man leaves a name behind him, just as a leopard leaves its skin.",
        defBm: "Harimau mati meninggalkan belang, manusia mati meninggalkan nama.",
        example: "林连玉先生一生致力民族华教事业，人死留名，豹死留皮，他的奉献精神永远照亮后辈。"
    },
    {
        proverb: "人同心，土变金。",
        pinyin: "rén tóng xīn ， tǔ biàn jīn",
        defZh: "强调只要大家能万众一心、精诚合作、同心协力，哪怕再大再难的事情也必然能够取得成功。",
        defEn: "If people are of one heart, even clay can be turned into gold; unity is strength.",
        defBm: "Muafakat membawa berkat (perpaduan membawa kemakmuran).",
        example: "在这次百年一遇的洪水中，村民们积极自救重建，证明了人同心，土变金的真理。"
    },
    {
        proverb: "人为财死，鸟为食亡。",
        pinyin: "rén wèi cái sǐ ， niǎo wèi shí wáng",
        defZh: "指很多人由于被金钱和利益冲昏了头脑，贪得无厌，甚至可以不惜搭上自己的生命去冒险，令人叹息。",
        defEn: "Men die for wealth, birds die for food; greed leads to ruin.",
        defBm: "Mati semut kerana gula (manusia binasa kerana tamak akan harta).",
        example: "他明知道那是高风险的庞氏骗局还要去投资，真是人为财死，鸟为食亡。"
    },
    {
        proverb: "人为刀俎，我为鱼肉。",
        pinyin: "rén wéi dāo zǔ ， wǒ wéi yú ròu",
        defZh: "比喻自己完全丧失了主动权，处在任由强权者、强势对手宰割、玩弄、奴役的绝对被动被动地位。",
        defEn: "Like meat on another's chopping block; at the mercy of others.",
        defBm: "Seperti timun dengan durian, menggolek pun luka, digolek pun luka (tiada kuasa melawan).",
        example: "在这份霸王合同面前，我们资金链断裂，只能是人为刀俎，我为鱼肉，听任对方开出苛刻条件。"
    },
    {
        proverb: "人闲生病，石闲生苔。",
        pinyin: "rén xián shēng bìng ， shí xián shēng tái",
        defZh: "比喻人的一生绝不能常年游手好闲、无所事事，否则身体意志都会废退，还会惹出百病。",
        defEn: "An idle brain is the devil's workshop; dynamic life keeps healthy.",
        defBm: "Air yang tenang jangan disangka tiada buaya (manusia aktif menjamin kecergasan moral).",
        example: "外公退休后依然坚持每天下地劳作、看报纸，他说人闲生病，石闲生苔，生命在于运动。"
    },
    {
        proverb: "人心不足蛇吞象。",
        pinyin: "rén xīn bù zú shé tūn xiàng",
        defZh: "形容人贪心到了极点，贪得无厌，永远不知道满足，最终只会害了自己。",
        defEn: "A man's heart is never satisfied, like a snake trying to swallow an elephant.",
        defBm: "Bagaikan orang mengantuk disorongkan bantal (tetapi ini dalam konteks tamak yang keterlaluan).",
        example: "他已经赚了几个亿，却还想靠内幕交易非法牟利，真是人心不足蛇吞象。"
    },
    {
        proverb: "人要衣装，佛要金装。",
        pinyin: "rén yào yī zhuāng ， fó yào jīn zhuāng",
        defZh: "强调人必须要靠体面的衣着和适当的打扮，才能展现出大方得体、端正整洁的外表仪态。",
        defEn: "Clothes make the man; fine feathers make fine birds.",
        defBm: "Bagai cincin dengan permata (penampilan yang segak meningkatkan maruah diri).",
        example: "去面试时一定要穿戴整齐得体，毕竟人要衣装，佛要金装，第一印象非常重要。"
    },
    {
        proverb: "如堕五里雾中。",
        pinyin: "rú duò wǔ lǐ wù zhōng",
        defZh: "比喻陷入了一团糟、莫名其妙、迷离恍惚、完全摸不着头脑的茫然处境中。",
        defEn: "As if lost in a thick fog; completely bewildered and confused.",
        defBm: "Seperti rusa masuk kampung (keadaan yang terpingat-pingat dan tersangat keliru).",
        example: "这场突如其来的管理层大重组，让我们普通员工如堕五里雾中，不知道接下来听谁指挥。"
    },
    {
        proverb: "孺子不可教。",
        pinyin: "rú zǐ bù kě jiào",
        defZh: "形容顽皮捣蛋、顽固不化、屡教不改的顽童劣生，已经到了令人无法教育引导的地步。",
        defEn: "The boy is untameable; a student beyond hope of teaching.",
        defBm: "Bagai mencurahkan air ke daun keladi (degil dan tidak mahu menerima teguran).",
        example: "他屡次在作弊被抓后态度嚣张，连校长也摇头叹道：“真是孺子不可教也。”"
    },
    {
        proverb: "三日打鱼，两日晒网。",
        pinyin: "sān rì dǎ yú ， liǎng rì shài wǎng",
        defZh: "比喻学习、运动或做事没有任何恒心和长远毅力，断断续续，到头来势必一事无成。",
        defEn: "Go fishing for three days and dry the nets for two; lack of perseverance.",
        defBm: "Hangat-hangat tahi ayam (bersemangat seketika sahaja, tiada ketetapan).",
        example: "背诵成语必须每天坚持，你这种三日打鱼，两日晒网的态度，词汇量怎么能提高？"
    },
    {
        proverb: "杀鸡焉用牛刀。",
        pinyin: "shā jī yān yòng niú dāo",
        defZh: "比喻办理微不足道的小事或解决简单的小问题，根本不需要耗费太大的力量或请大人物出马。",
        defEn: "Why use a poleaxe to kill a chicken; overkill.",
        defBm: "Membakar kelambu kerana marahkan nyamuk (tindakan yang keterlaluan untuk masalah kecil).",
        example: "只是去校门口取个信件，杀鸡焉用牛刀，我让班长顺便拿一下就可以了，不用麻烦老师您。"
    }
];
