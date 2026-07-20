const pData1 = [
  {
    "id": 1,
    "text": "拨开云雾见青天",
    "pinyin": "bō kāi yún wù jiàn qīng tiān",
    "pinyin_key": "B",
    "meaning": "比喻黑暗或逆境过去，光明重现，看见了新希望。",
    "en": "Clear skies after the clouds depart; brighter days ahead.",
    "bm": "Mendapat jalan keluar atau sinar harapan selepas menghadapi kesukaran.",
    "example": "经过长达一年的司法调查，他们终于洗清冤屈，拨开云雾见青天。"
  },
  {
    "id": 2,
    "text": "不敢越雷池一步",
    "pinyin": "bù gǎn yuè léi chí yī bù",
    "pinyin_key": "B",
    "meaning": "形容做事极其小心谨慎，完全不敢越过规定的一丁点界线。",
    "en": "Dare not cross the line; extremely cautious.",
    "bm": "Sangat berhati-hati dan tidak berani melanggar sempadan atau peraturan.",
    "example": "在纪律森严的考场里，任何考生都不敢越雷池一步去交头接耳。"
  },
  {
    "id": 3,
    "text": "不看僧面看佛面",
    "pinyin": "bù kàn sēng miàn kàn fó miàn",
    "pinyin_key": "B",
    "meaning": "不顾某人的情面，也要顾到与他有关的人的情面（常用于恳求原谅）。",
    "en": "Do it for the sake of others; show mercy in consideration of a third party.",
    "bm": "Memberi kemaafan demi menghormati orang lain yang berkaitan.",
    "example": "这次你就原谅他吧，不看僧面看佛面，他父亲曾是我们的恩人。"
  },
  {
    "id": 4,
    "text": "长江后浪推前浪，一代新人换旧人",
    "pinyin": "cháng jiāng hòu làng tuī qián làng yī dài xīn rén huàn jiù rén",
    "pinyin_key": "C",
    "meaning": "比喻时光飞逝，人事新陈代谢很快，旧的事物很快就被更优秀的后起之秀取代。",
    "en": "Times change, the new generation inevitably replaces the old.",
    "bm": "Yang patah tumbuh, yang hilang berganti (generasi baharu menggantikan yang lama).",
    "example": "在这场科技博览会上，年轻一辈独树一帜的创意证明了长江后浪推前浪，一代新人换旧人。"
  },
  {
    "id": 5,
    "text": "吃饭不忘种谷人",
    "pinyin": "chī fàn bù wàng zhòng gǔ rén",
    "pinyin_key": "C",
    "meaning": "劝诫人们在享受当下成果和好生活时，一定要饮水思源、感激付出的人。",
    "en": "When eating rice, do not forget the farmer who planted it.",
    "bm": "Mengenang budi; orang yang berbudi kita kenang (selalu mengenang asal-usul).",
    "example": "我们能有今天优裕的学习环境，吃饭不忘种谷人，绝不能忘记创校先贤的艰苦奋斗。"
  },
  {
    "id": 6,
    "text": "船到江心补漏迟",
    "pinyin": "chuán dào jiāng xīn bǔ lòu chí",
    "pinyin_key": "C",
    "meaning": "比喻凡事应提早预防，如果等灾祸发生了再去补救，一切已经为时已晚了。",
    "en": "It is too late to plug the leak when the boat is in midstream.",
    "bm": "Sesal dahulu pendapatan, sesal kemudian tidak berguna.",
    "example": "你平时不努力，临考试了才熬夜，岂不是船到江心补漏迟？"
  },
  {
    "id": 7,
    "text": "打虎不离亲兄弟",
    "pinyin": "dǎ hǔ bù lí qīn xiōng dì",
    "pinyin_key": "D",
    "meaning": "比喻面临生死攸关或极大困难时，只有骨肉至亲才能同心协力共渡难关。",
    "en": "Brothers stand together in times of danger.",
    "bm": "Cubit paha kanan, paha kiri terasa juga (hubungan persaudaraan yang sangat rapat).",
    "example": "家族危机面前，他们两兄弟不计前嫌携手拯救家业，真乃打虎不离亲兄弟。"
  },
  {
    "id": 8,
    "text": "大船沉没，原由小孔",
    "pinyin": "dà chuán chén mò yuán yóu xiǎo kǒng",
    "pinyin_key": "D",
    "meaning": "比喻极微小的疏忽或失误，如果不加防范和重视，会导致巨大灾难的发生。",
    "en": "A small leak will sink a great ship.",
    "bm": "Rosak bawang setandan kerana sebiji yang busuk.",
    "example": "工程安全容不得半点粗心，大船沉没，原由小孔，一个小螺丝松动都可能毁了整艘飞船。"
  },
  {
    "id": 9,
    "text": "单丝不成线，独木难成林",
    "pinyin": "dān sī bù chéng xiàn dú mù nán chéng lín",
    "pinyin_key": "D",
    "meaning": "比喻个人力量单薄，难以成就宏大的事业，强调团队协作与合作的重要性。",
    "en": "A single thread cannot make a cord, and a single tree cannot make a forest.",
    "bm": "Bulat air kerana pembetung, bulat manusia kerana muafakat.",
    "example": "一个成功的班集体需要所有人共同维护，毕竟单丝不成线，独木难成林。"
  },
  {
    "id": 10,
    "text": "当一天和尚撞一天钟",
    "pinyin": "dāng yī tiān hé shàng zhuàng yī tiān zhōng",
    "pinyin_key": "D",
    "meaning": "比喻工作或学习毫无主观能动性，敷衍塞责，只图混一天算一天。",
    "en": "Do what is expected for the day but without passion; drift along.",
    "bm": "Sekadar melepaskan batuk di tangga (melakukan kerja acuh tidak acuh).",
    "example": "我们青年对待学业应当积极奋斗，而不能抱着当一天和尚撞一天钟的消极态度。"
  },
  {
    "id": 11,
    "text": "道高一尺，魔高一丈",
    "pinyin": "dào gāo yī chǐ mó gāo yī zhàng",
    "pinyin_key": "D",
    "meaning": "比喻正义力量虽然发展很快，但邪恶势力往往更难对付，法律总要面对新漏洞。",
    "en": "As virtue rises one foot, vice rises ten.",
    "bm": "Setiap peraturan yang ketat pasti ada pihak yang cuba mencari jalan pintas melanggarinya.",
    "example": "尽管防伪技术不断升级，盗版技术也跟着更新，真是道高一尺，魔高一丈。"
  },
  {
    "id": 12,
    "text": "当家才知盐米贵，出门才晓路难行",
    "pinyin": "dāng jiā cái zhī yán mǐ guì chū mén cái xiǎo lù nán xíng",
    "pinyin_key": "D",
    "meaning": "形容凡事如果不亲自体验，绝不可能知道其中的艰难与持家的辛苦。",
    "en": "Only when you run a household do you know the cost of living.",
    "bm": "Hanya orang yang memikul sahaja yang tahu beratnya bebanan.",
    "example": "来到国外留学凡事靠自己后，他才叹道：当家才知盐米贵，出门才晓路难行。"
  },
  {
    "id": 13,
    "text": "灯盏无油枉费心",
    "pinyin": "dēng zhǎn wú yóu wǎng fèi xīn",
    "pinyin_key": "D",
    "meaning": "比喻客观条件不足，或者根本没有基础物资，再怎么枉费心思也是无济于事。",
    "en": "An oil lamp without oil is a waste of effort.",
    "bm": "Bagai menanti kucing bertanduk (tiada kelengkapan asas).",
    "example": "没有核心的技术开发资金支持，你构想再美的创业计划也是灯盏无油枉费心。"
  },
  {
    "id": 14,
    "text": "二龙相斗，虾蟹受伤",
    "pinyin": "èr lóng xiāng dòu xiā xiè shòu shāng",
    "pinyin_key": "E",
    "meaning": "比喻两雄相争或大国、高层发生激烈的利益冲突，往往会使夹在中间的平民小辈遭殃。",
    "en": "When two dragons fight, the shrimps and crabs get hurt.",
    "bm": "Gajah sama gajah berjuang, pelanduk mati di tengah-tengah.",
    "example": "两家大型科技巨头在行业里大打恶意价格战，结果无辜的下游零售商纷纷倒闭，二龙相斗，虾蟹受伤。"
  },
  {
    "id": 15,
    "text": "风马牛不相及",
    "pinyin": "fēng mǎ niú bù xiāng jí",
    "pinyin_key": "F",
    "meaning": "比喻两件事物之间完全没有任何关联、瓜葛或共同之处。",
    "en": "Completely unrelated; having nothing to do with each other.",
    "bm": "Bagai minyak dengan air (perkara yang langsung tiada kaitan).",
    "example": "你回答科学考题不能东拉西扯一些风马牛不相及的内容，否则肯定零分。"
  },
  {
    "id": 16,
    "text": "夫子庙前卖文章",
    "pinyin": "fū zǐ miào qián mài wén zhāng",
    "pinyin_key": "F",
    "meaning": "比喻在学问极高、技术高超的老行家面前卖弄、夸耀本领，不自量力。",
    "en": "Show off one's slight talent before a true master.",
    "bm": "Mengajar lumba berenang kepada ikan / Menunjukkan kemahiran di hadapan pakar.",
    "example": "在国家队羽毛球总教练面前秀你的扣杀技巧，简直是夫子庙前卖文章。"
  },
  {
    "id": 17,
    "text": "福无双至，祸不单行",
    "pinyin": "fú wú shuāng zhì huò bù dān xíng",
    "pinyin_key": "F",
    "meaning": "比喻好的运气难得成双成对发生，但悲伤的灾祸却总是一个接一个连续发生。",
    "en": "Misfortunes never come singly.",
    "bm": "Sudah jatuh ditimpa tangga.",
    "example": "他才刚刚在风暴中丢失了护照，钱包紧接着又被小偷抢走，真是福无双至，祸不单行。"
  },
  {
    "id": 18,
    "text": "覆巢之下无完卵",
    "pinyin": "fù cháo zhī xià wú wán luǎn",
    "pinyin_key": "F",
    "meaning": "比喻一个国家或团队整体遭受到毁灭性灾难，其个体、局部成员也无法独自幸免于难。",
    "en": "Under a fallen nest, there are no whole eggs.",
    "bm": "Rumah terbakar, bersivik pun hangus (apabila organisasi musnah, ahli turut menderita).",
    "example": "如果国家经济在国际战火中彻底垮了，平民百姓又怎么能安枕无忧？覆巢之下无完卵啊。"
  },
  {
    "id": 19,
    "text": "公说公有理，婆说婆有理",
    "pinyin": "gōng shuō gōng yǒu lǐ pó shuō pó yǒu lǐ",
    "pinyin_key": "G",
    "meaning": "比喻双方各执一词，每个人都说自己占理，让旁人很难明断是非是非。",
    "en": "Each claims to be right; both sides have their arguments.",
    "bm": "Masing-masing menegakkan benang yang basah (tiada pihak mahu mengalah).",
    "example": "他们俩在走廊发生碰撞的事，公说公有理，婆说婆有理，让纪律老师头痛不已。"
  },
  {
    "id": 20,
    "text": "狗嘴里吐不出象牙",
    "pinyin": "gǒu zuǐ lǐ tǔ bù chū xiàng yá",
    "pinyin_key": "G",
    "meaning": "用来讽刺坏人、素质极低的人言辞粗俗，不可能说出高尚、温和有哲理的好话。",
    "en": "No ivory comes from a dog's mouth.",
    "bm": "Mulut busuk tidak akan mengeluarkan kata-kata yang mulia.",
    "example": "你别理那个恶霸的挑衅，他那狗嘴里吐不出象牙，我们理他就降低了格调。"
  },
  {
    "id": 21,
    "text": "海水不可斗量",
    "pinyin": "hǎi shuǐ bù kě dǒu liáng",
    "pinyin_key": "H",
    "meaning": "比喻卓越的人才或伟大的事物绝不应该从粗浅的外表去评估、小看他们。",
    "en": "The ocean cannot be measured with a bucket; do not judge by appearances.",
    "bm": "Air yang tenang jangan disangka tiada buaya (jangan memandang rendah).",
    "example": "那位不起眼的农家子弟竟在SPM全国考卷中夺得总冠军，可见人不可貌相，海水不可斗量。"
  },
  {
    "id": 22,
    "text": "好蜂不采落地花",
    "pinyin": "hǎo fēng bù cǎi luò dì huā",
    "pinyin_key": "H",
    "meaning": "比喻真正有道德、有气节、顶天立地的英雄豪杰，绝不屑于乘人之危或做低俗的事。",
    "en": "A noble bee does not visit fallen flowers; a true hero does not take advantage of others.",
    "bm": "Orang yang bermoral tinggi tidak akan mengambil kesempatan atas kelemahan orang lain.",
    "example": "他虽然急需对手手上的独家商机，但绝不做落地花的行为，更不乘人之危夺取。"
  },
  {
    "id": 23,
    "text": "好汉不吃眼前亏",
    "pinyin": "hǎo hàn bù chī yǎn qián kuī",
    "pinyin_key": "H",
    "meaning": "比喻聪明人懂得审时度势，在形势不利于自己时懂得暂时退让忍耐，避免造成不必要损失。",
    "en": "A wise man avoids immediate disadvantage; know when to retreat.",
    "bm": "Mengalah tidak semestinya kalah; bijak menyesuaikan diri.",
    "example": "面对暴徒的抢劫，我们应该把钱给他们以确保人身安全，好汉不吃眼前亏，保命最重要。"
  },
  {
    "id": 24,
    "text": "好马不吃回头草",
    "pinyin": "hǎo mǎ bù chī huí tóu cǎo",
    "pinyin_key": "H",
    "meaning": "比喻有志气、有尊严和骨气的人，一旦做出了离开的决定，绝不会走回头路。",
    "en": "A good horse does not turn back to graze.",
    "bm": "Orang yang berprinsip tidak akan kembali kepada perkara lama yang sudah ditinggalkan.",
    "example": "既然辞去了那家屡次克扣员工薪资的公司，好马不吃回头草，你千万不要再接受他们的挽留。"
  },
  {
    "id": 25,
    "text": "虎落平阳被犬欺",
    "pinyin": "hǔ luò píng yáng bèi quǎn qī",
    "pinyin_key": "H",
    "meaning": "比喻有权威、有本事的人一旦失去权势或陷入特定困境，连原本不如他的小人也敢来欺负他。",
    "en": "A tiger in the hills loses its power when it descends to the plains.",
    "bm": "Orang berkuasa yang jatuh akan dipandang hina dan hilang dihormati.",
    "example": "公司前任董事长退休后，那些平时奉承迎合他的人竟态度冷漠，真是虎落平阳被犬欺。"
  },
  {
    "id": 26,
    "text": "换汤不换药",
    "pinyin": "huàn tāng bù huàn yào",
    "pinyin_key": "H",
    "meaning": "比喻形式上、外表上做了一些花哨的改动，而实质性的内容依然没有变化。",
    "en": "Change the form but not the essence.",
    "bm": "Pertukaran luaran sahaja sedangkan isi kandungan masih sama.",
    "example": "这部新版电影只是演员变了，剧情和老版一模一样，简直是换汤不换药。"
  },
  {
    "id": 27,
    "text": "慧眼识英雄",
    "pinyin": "huì yǎn shí yīng xióng",
    "pinyin_key": "H",
    "meaning": "指有高超见识、敏锐眼光的人能在一群普通人中识别出卓越的人才并委以重任。",
    "en": "A wise eye recognizes genius.",
    "bm": "Mempunyai kebolehan luar biasa menilai kelebihan orang lain (mengenal pasti mutiara).",
    "example": "多亏了陈导演慧眼识英雄，才让这位昔日的街头艺人成为了闪耀国际的影星。"
  },
  {
    "id": 28,
    "text": "吉人自有天相",
    "pinyin": "jí rén zì yǒu tiān xiāng",
    "pinyin_key": "G",
    "meaning": "指心地善良、品德高尚的好人，自然会得到上天的庇佑，在危难中总能化险为夷。",
    "en": "Good people will be blessed by heaven; things will turn out fine.",
    "bm": "Orang murni yang bertindak jujur akan sentiasa dilindungi tuhan daripada bala.",
    "example": "虽然他在地震中失联了，但他一生行善积德，相信吉人自有天相，必能平安归来。"
  },
  {
    "id": 29,
    "text": "急急如丧家之犬",
    "pinyin": "jí jí rú sāng jiā zhī quǎn",
    "pinyin_key": "J",
    "meaning": "形容人处境极度狼狈，惊慌失措、无处投奔逃命的样子。",
    "en": "Terrified and panicked like a homeless dog.",
    "bm": "Keadaan yang sangat cemas, kelam-kabut dan tidak menentu hala tuju.",
    "example": "警方层层包围后，几名劫匪急急如丧家之犬，慌不择路地逃入了大山深处。"
  },
  {
    "id": 30,
    "text": "急惊风遇着慢郎中",
    "pinyin": "jí jīng fēng yù zháo màn láng zhōng",
    "pinyin_key": "J",
    "meaning": "比喻情况十分危急、刻不容缓，偏偏遇上一个做事拖拉、慢吞吞的人来处理，让人干着急。",
    "en": "Urgent business handled by a slow person.",
    "bm": "Masalah yang sangat gawat diserahkan kepada pelaku yang sangat perlahan.",
    "example": "客人的合同必须在十分钟内发出去，而网络专员还在慢条斯理地重启服务器，真是急惊风遇着慢郎中！"
  },
  {
    "id": 31,
    "text": "脚踏两只船",
    "pinyin": "jiǎo tà liǎng zhī chuán",
    "pinyin_key": "J",
    "meaning": "形容做事没有坚定意志，拿不定主意，企图在相互对立的两方同时讨好、留后路。",
    "en": "Sitting on the fence; keeping one's options open.",
    "bm": "Menanam tebu di pinggir bibir / Memihak kepada dua pihak demi kepentingan peribadi.",
    "example": "在两家公司的竞争中，你想脚踏两只船是极为危险的，最终只会两头空。"
  },
  {
    "id": 32,
    "text": "井水不犯河水",
    "pinyin": "jǐng shuǐ bù fàn hé shuǐ",
    "pinyin_key": "J",
    "meaning": "比喻彼此之间界线严明，各行其道，互不干扰、互不侵犯。",
    "en": "Keep to one's own domain; no interference with each other.",
    "bm": "Bagaikan air sungai dengan air laut (masing-masing menjaga sempadan sendiri).",
    "example": "我们和隔边班虽然在一层楼，但向来井水不犯河水，从不发生争执摩擦。"
  },
  {
    "id": 33,
    "text": "镜中花，水中月",
    "pinyin": "jìng zhōng huā shuǐ zhōng yuè",
    "pinyin_key": "J",
    "meaning": "比喻看似十分美丽却虚幻不实、无法触及和得到的事物，完全是一场空。",
    "en": "Flowers in a mirror and the moon in the water; illusion.",
    "bm": "Sesuatu impian atau perkara yang kelihatan indah tetapi palsu and mustahil dicapai.",
    "example": "如果不通过踏踏实实的劳动去致富，任何彩票暴富的幻想终究是镜中花，水中月。"
  },
  {
    "id": 34,
    "text": "酒逢知己千杯少，话不投机半句多",
    "pinyin": "jiǔ féng zhī jǐ qiān bēi shǎo huà bù tóu jī bàn jù duō",
    "pinyin_key": "J",
    "meaning": "形容遇到知交、意气相投的朋友时畅谈甚欢；而与话不投机、合不来的人连多说半句话也嫌烦。",
    "en": "With a true friend, even a thousand cups are not enough; with a mismatch, half a word is too much.",
    "bm": "Kemesraan terjalin bersama sahabat sejati, manakala hujah membosankan bersama seteru.",
    "example": "老张和老李一见如故，在咖啡店聊了一整天，真是酒逢知己千杯少，话不投机半句多。"
  },
  {
    "id": 35,
    "text": "旧瓶装新酒",
    "pinyin": "jiù píng zhuāng xīn jiǔ",
    "pinyin_key": "J",
    "meaning": "比喻采用原有的、旧的形式或外壳，来表达或承载全新的思想与内容。",
    "en": "Put new wine into old bottles; old forms used for new ideas.",
    "bm": "Menggunakan acuan lama untuk melahirkan pembaharuan yang moden.",
    "example": "这款网络国风游戏虽然采用传统文化背景，玩法却十分新颖，可以说是旧瓶装新酒。"
  },
  {
    "id": 36,
    "text": "开弓没有回头箭",
    "pinyin": "kāi gōng méi yǒu huí tóu jiàn",
    "pinyin_key": "K",
    "meaning": "比喻说过的话、做过的事或已经全面展开的计划，都再也没有反悔和退后的余地，必须坚持到底。",
    "en": "There's no turning back once the arrow is shot.",
    "bm": "Lajak perahu boleh diundur, lajak kata buruk padahnya (keputusan tidak boleh diubah).",
    "example": "既然已经向全校立下了考取十个A的诺言，开弓没有回头箭，你就全力以赴吧！"
  },
  {
    "id": 37,
    "text": "快刀斩乱麻",
    "pinyin": "kuài dāo zhǎn luàn má",
    "pinyin_key": "K",
    "meaning": "比喻以大无畏的果断魄力和利落的手法，迅速把极其复杂、纠缠不清的乱局和难题一举解决。",
    "en": "Cut the Gordian knot; solve complex problems with decisive action.",
    "bm": "Mengambil keputusan atau tindakan tegas dengan segera untuk menghentikan kekacauan.",
    "example": "面对部门内部复杂的利益纠纷，新经理大刀阔斧，快刀斩乱麻，一气呵成地调整了岗位。"
  }
];
