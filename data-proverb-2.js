// ==========================================
// 常用谚语150句 分卷2 (H - J)
// ==========================================

const proverbData2 = [
    {
        proverb: "换汤不换药。",
        pinyin: "huàn tāng bù huàn yào",
        defZh: "比喻形式上、外表上做了一些花哨的改动，而实质性的内容依然没有变化。",
        defEn: "Change the form but not the essence.",
        defBm: "Pertukaran luaran sahaja sedangkan isi kandungan masih sama.",
        example: "这部新版电影只是演员变了，剧情和老版一模一样，简直是换汤不换药。"
    },
    {
        proverb: "慧眼识英雄。",
        pinyin: "huì yǎn shí yīng xióng",
        defZh: "指有高超见识、敏锐眼光的人能在一群普通人中识别出卓越的人才并加委以重任。",
        defEn: "A wise eye recognizes genius.",
        defBm: "Mempunyai kebolehan luar biasa menilai kelebihan orang lain (mengenal pasti mutiara).",
        example: "多亏了陈导演慧眼识英雄，才让这位昔日的街头艺人成为了闪耀国际的影星。"
    },
    {
        proverb: "吉人自有天相。",
        pinyin: "jí rén zì yǒu tiān xiāng",
        defZh: "指心地善良、品德高尚的好人，自然会得到上天的庇佑，在危难中总能化险为夷。",
        defEn: "Good people will be blessed by heaven; things will turn out fine.",
        defBm: "Orang murni yang bertindak jujur akan sentiasa dilindungi tuhan daripada bala.",
        example: "虽然他在地震中失联了，但他一生行善积德，相信吉人自有天相，必能平安归来。"
    },
    {
        proverb: "急急如丧家之犬。",
        pinyin: "jí jí rú sāng jiā zhī quǎn",
        defZh: "形容人处境极度狼狈，惊慌失措、无处投奔逃命的样子。",
        defEn: "Terrified and panicked like a homeless dog.",
        defBm: "Keadaan yang sangat cemas, kelam-kabut dan tidak menentu hala tuju.",
        example: "警方层层包围后，几名劫匪急急如丧家之犬，慌不择路地逃入了大山深处。"
    },
    {
        proverb: "急惊风，慢郎中。",
        pinyin: "jí jīng fēng ， màn láng zhōng",
        defZh: "比喻情况十分危急、刻不容缓，偏偏遇上一个做事拖拉、慢吞吞的人来处理，让人干着急。",
        defEn: "Urgent business handled by a slow person.",
        defBm: "Masalah yang sangat gawat diserahkan kepada pelaku yang sangat perlahan.",
        example: "客人的合同必须在十分钟内发出去，而网络专员还在慢条斯理地重启服务器，真是急惊风，慢郎中！"
    },
    {
        proverb: "脚踏两只船。",
        pinyin: "jiǎo tà liǎng zhī chuán",
        defZh: "形容做事没有坚定意志，拿不定主意，企图在相互对立的两方同时讨好、留后路。",
        defEn: "Sitting on the fence; keeping one's options open.",
        defBm: "Menanam tebu di pinggir bibir / Memihak kepada dua pihak demi kepentingan peribadi.",
        example: "在两家公司的竞争中，你想脚踏两只船是极为危险的，最终只会两头空。"
    },
    {
        proverb: "井水不犯河水。",
        pinyin: "jǐng shuǐ bù fàn hé shuǐ",
        defZh: "比喻彼此之间界线严明，各行其道，互不干扰、互不侵犯。",
        defEn: "Keep to one's own domain; no interference with each other.",
        defBm: "Bagaikan air sungai dengan air laut (masing-masing menjaga sempadan sendiri).",
        example: "我们和隔壁班虽然在一层楼，但向来井水不犯河水，从不发生争执摩擦。"
    },
    {
        proverb: "镜中花，水中月。",
        pinyin: "jìng zhōng huā ， shuǐ zhōng yuè",
        defZh: "比喻看似十分美丽却虚幻不实、无法触及和得到的事物，完全是一场空。",
        defEn: "Flowers in a mirror and the moon in the water; illusion.",
        defBm: "Sesuatu impian atau perkara yang kelihatan indah tetapi palsu dan mustahil dicapai.",
        example: "如果不通过踏踏实实的劳动去致富，任何彩票暴富的幻想终究是镜中花，水中月。"
    },
    {
        proverb: "酒逢知己千杯少，话不投机半句多。",
        pinyin: "jiǔ féng zhī jǐ qiān bēi shǎo ， huà bù tóu jī bàn jù duō",
        defZh: "形容遇到知交、意气相投的朋友时畅谈甚欢；而与话不投机、合不来的人连多说半句话也嫌烦。",
        defEn: "With a true friend, even a thousand cups are not enough; with a mismatch, half a word is too much.",
        defBm: "Kemesraan terjalin bersama sahabat sejati, manakala hujah membosankan bersama seteru.",
        example: "老张和老李一见如故，在咖啡店聊了一整天，真是酒逢知己千杯少，话不投机半句多。"
    },
    {
        proverb: "旧瓶装新酒。",
        pinyin: "jiù píng zhuāng xīn jiǔ",
        defZh: "比喻采用原有的、旧的形式或外壳，来表达或承载全新的思想与内容。",
        defEn: "Put new wine into old bottles; old forms used for new ideas.",
        defBm: "Menggunakan acuan lama untuk melahirkan pembaharuan yang moden.",
        example: "这款网络国风游戏虽然采用传统文化背景，玩法却十分新颖，可以说是旧瓶装新酒。"
    },
    {
        proverb: "开弓没有回头箭。",
        pinyin: "kāi gōng méi yǒu huí tóu jiàn",
        defZh: "比喻说过的话、做过的事或已经全面展开的计划，都再也没有反悔和退后的余地，必须坚持到底。",
        defEn: "There's no turning back once the arrow is shot.",
        defBm: "Lajak perahu boleh diundur, lajak kata buruk padahnya (keputusan tidak boleh diubah).",
        example: "既然已经向全校立下了考取十个A的诺言，开弓没有回头箭，你就全力以赴吧！"
    },
    {
        proverb: "快刀斩乱麻。",
        pinyin: "kuài dāo zhǎn luàn má",
        defZh: "比喻以大无畏的果断魄力和利落的手法，迅速把极其复杂、纠缠不清的乱局和难题一举解决。",
        defEn: "Cut the Gordian knot; solve complex problems with decisive action.",
        defBm: "Mengambil keputusan atau tindakan tegas dengan segera untuk menghentikan kekacauan.",
        example: "面对部门内部复杂的利益纠纷，新经理大刀阔斧，快刀斩乱麻，一气呵成地调整了岗位。"
    },
    {
        proverb: "老虎嘴里拔牙。",
        pinyin: "lǎo hǔ zuǐ lǐ bá yá",
        defZh: "比喻去做极其危险、稍有不慎便会自取灭亡的冒险行为，胆大包天。",
        defEn: "Plucking teeth from a tiger's mouth; extremely risky venture.",
        defBm: "Masuk ke sarang harimau (melakukan perkara yang sangat bahaya dan mengundang maut).",
        example: "你竟敢去揭发本地黑帮的犯罪证据？这无异于在老虎嘴里拔牙。"
    },
    {
        proverb: "老鼠过街，人人喊打。",
        pinyin: "lǎo shǔ guò jiē ， rén rén hǎn dǎ",
        defZh: "比喻社会败类或有害的事物一露面，就会引起整个社会百姓一致的强烈仇视与唾弃。",
        defEn: "A public enemy despised by everyone.",
        defBm: "Bagaikan anjing menyalak bukit / Penjenayah yang dibenci dan ditentang segenap lapisan masyarakat.",
        example: "那个靠拐卖儿童发横财的犯罪团伙，如今在社会上落网，真是老鼠过街，人人喊打。"
    },
    {
        proverb: "雷声大，雨点小。",
        pinyin: "léi shēng dà ， yǔ diǎn xiǎo",
        defZh: "比喻事先口号喊得很响、声势造得很大，但实际落实的行动或产生的效果却非常微弱。",
        defEn: "All bark and no bite; massive publicity but little actual action.",
        defBm: "Indah khabar daripada rupa (gembar-gembur besar tetapi hasilnya mengecewakan).",
        example: "公司宣传要进行全省彻底的绿化活动，最后却只是发了几个纸袋，真是雷声大，雨点小。"
    },
    {
        proverb: "冷锅里跳出热栗子。",
        pinyin: "lěng guō lǐ tiào chū rè lì zǐ",
        defZh: "比喻在完全出乎所有人预料、看似不具备条件的情况下，突然发生了十分惊喜或极大的意外收获。",
        defEn: "An unexpected windfall or windfall from a dormant source.",
        defBm: "Mendapat keuntungan luar biasa secara tidak disangka-sangka (rezeki terpijak).",
        example: "这部无人问津的小说原本连出版商都嫌弃，谁知突然拿到了国际大奖，冷锅里跳出热栗子！"
    },
    {
        proverb: "两虎相斗，必有一伤。",
        pinyin: "liǎng hǔ xiāng dòu ， bì yǒu yī shāng",
        defZh: "比喻两股极其强大的对立势力正面火拼、互相残杀，最终必然会使其中一方甚至双方均遭受重大惨烈损伤。",
        defEn: "When two tigers fight, one is sure to be wounded.",
        defBm: "Bagaikan gajah berjuang sesama gajah, kemusnahan besar pasti berlaku.",
        example: "两家垄断市场的零售大鳄大打价格割喉战，结果证明两虎相斗，必有一伤，其中一家已经申请破产。"
    },
    {
        proverb: "邻居好，赛金宝。",
        pinyin: "lín jū hǎo ， sài jīn bǎo",
        defZh: "形容拥有一户友善、体贴、能互相照应的好邻居，比拥有金银财宝更加珍贵难得。",
        defEn: "A good neighbor is better than gold.",
        defBm: "Jiran sepakat membawa berkat (jiran yang baik lebih berharga daripada harta).",
        example: "每次我们全家出门旅行，邻居阿姨都会帮忙浇花喂宠物，真是邻居好，赛金宝。"
    },
    {
        proverb: "庐山真面目。",
        pinyin: "lú shān zhēn miàn mù",
        defZh: "比喻由于各种干扰、修饰或伪装，一直难以看清的客观事实真相或人物内心本色。",
        defEn: "The true face of Lushan; the real truth/identity revealed.",
        defBm: "Membongkar hakikat sebenar atau rupa paras asli selepas lama berselindung.",
        example: "通过这封匿名举报信揭露的财务证据，终于让这位慈善家的庐山真面目大白于天下。"
    },
    {
        proverb: "麻雀虽小，五脏俱全。",
        pinyin: "má qiào suī xiǎo ， wǔ zàng jù quán",
        defZh: "比喻事物虽然规模非常微小，但是内部的各种结构、机能却十分完备，井井有条。",
        defEn: "Small but complete; small space but fully functional.",
        defBm: "Kecil-kecil cili padi (walaupun kecil tetapi mempunyai kelengkapan dan keupayaan yang menyeluruh).",
        example: "这间新开辟的多媒体微型图书馆虽然面积不大，但麻雀虽小，五脏俱全，所有数字设备应有尽有。"
    },
    {
        proverb: "卖花赞花香。",
        pinyin: "mài huā zàn huā xiāng",
        defZh: "形容一个人为了特定利益，极力夸耀、吹嘘自己销售的产品、拥有的本领或亲属的优点。",
        defEn: "Every potter praises his own pot; puffing one's own products.",
        defBm: "Masuk bakul angkat sendiri (memuji diri sendiri atau barangan jualan sendiri).",
        example: "当老板的一定会卖花赞花香，要了解这车子性能如何，我们还是得看客观评测。"
    },
    {
        proverb: "盲目不盲心。",
        pinyin: "máng mù bù máng xīn",
        defZh: "指虽然在生理上失去了双眼视力，但内心却非常通透、对事态的善恶和底细看得比明眼人还明白。",
        defEn: "Blind in eyes but clear and bright in soul.",
        defBm: "Buta mata tetapi tidak buta hati (mempunyai ketajaman sanubari menilai kebenaran).",
        example: "张爷爷虽然双目失明，但谁是真心待他，谁是虚情假意，他一清二楚，真乃盲目不盲心。"
    },
    {
        proverb: "盲人骑瞎马。",
        pinyin: "máng rén qí xiā mǎ",
        defZh: "比喻完全在盲目的状态下、由极其荒谬不称职的指引带领着涉足极其危险、不可预知的环境。",
        defEn: "A blind man riding a blind horse; rushing blindly into deadly peril.",
        defBm: "Seperti orang buta kehilangan tongkat (keadaan yang amat merbahaya dan keliru).",
        example: "没有经过任何专业户外野外生存训练，就夜宿原始森林，无异于盲人骑瞎马。"
    },
    {
        proverb: "猫哭老鼠假慈悲。",
        pinyin: "māo kū lǎo shǔ jiǎ cí bēi",
        defZh: "比喻恶人、敌人假意同情受害者，流下虚假的眼泪以掩盖自己凶残或幸灾乐祸的险恶内心。",
        defEn: "Crocodile tears; hypocritical sorrow or mercy.",
        defBm: "Air mata buaya (menunjukkan simpati atau kesedihan yang palsu).",
        example: "他平日处处排挤你，今天你落选了他却来安慰，简直是猫哭老鼠假慈悲。"
    },
    {
        proverb: "面和心不和。",
        pinyin: "miàn hé xīn bù hé",
        defZh: "形容人际、团队中表面上客客气气，相处融洽，但实际上内心各怀鬼胎，充满嫉妒与隔阂。",
        defEn: "Friendly on the surface but deeply divided underneath.",
        defBm: "Talam dua muka / Rambut sama hitam, hati lain-lain.",
        example: "这两位商业合伙人在镜头前拥抱，私底下却一直在拉拢股份进行内斗，真乃面和心不和。"
    }
];
