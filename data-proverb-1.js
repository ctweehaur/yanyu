// ==========================================
// 常用谚语150句 分卷1 (B - H)
// ==========================================

const proverbData1 = [
    {
        proverb: "拨开云雾见青天。",
        pinyin: "bō kāi yún wù jiàn qīng tiān",
        defZh: "比喻黑暗或逆境过去，光明重现，看见了新希望。",
        defEn: "Clear skies after the clouds depart; brighter days ahead.",
        defBm: "Mendapat jalan keluar atau sinar harapan selepas menghadapi kesukaran.",
        example: "经过长达一年的司法调查，他们终于洗清冤屈，拨开云雾见青天。"
    },
    {
        proverb: "不敢越雷池一步。",
        pinyin: "bù gǎn yuè léi chí yī bù",
        defZh: "形容做事极其小心谨慎，完全不敢越过规定的一丁点界线。",
        defEn: "Dare not cross the line; extremely cautious.",
        defBm: "Sangat berhati-hati dan tidak berani melanggar sempadan atau peraturan.",
        example: "在纪律森严的军营里，任何学员都不敢越雷池一步。"
    },
    {
        proverb: "不看僧面看佛面。",
        pinyin: "bù kàn sēng miàn kàn fó miàn",
        defZh: "比喻不顾某人的情面，也要顾到与他有关的人的情面（常用于恳求原谅）。",
        defEn: "Do it for the sake of others; show mercy in consideration of a third party.",
        defBm: "Memberi kemaafan demi menghormati orang lain yang berkaitan.",
        example: "这次你就原谅他吧，不看僧面看佛面，他父亲曾是我们的恩人。"
    },
    {
        proverb: "长江后浪推前浪，一代新人换旧人。",
        pinyin: "cháng jiāng hòu làng tuī qián làng ， yī dài xīn rén huàn jiù rén",
        defZh: "比喻时光飞逝，人事新陈代谢很快，旧的事物、人很快就被更优秀的后起之秀所取代。",
        defEn: "Times change, the new generation inevitably replaces the old.",
        defBm: "Yang patah tumbuh, yang hilang berganti (generasi baharu menggantikan yang lama).",
        example: "在这场科技博览会上，年轻一辈独树一帜的创意证明了长江后浪推前浪。"
    },
    {
        proverb: "吃饭不忘种谷人。",
        pinyin: "chī fàn bù wàng zhòng gǔ rén",
        defZh: "劝诫人们在享受当下成果和好生活时，一定要饮水思源、感激付出的人。",
        defEn: "When eating rice, do not forget the farmer who planted it.",
        defBm: "Mengenang budi; orang yang berbudi kita kenang (selalu mengenang asal-usul).",
        example: "我们能有今天优裕的生活，吃饭不忘种谷人，绝不能忘记父母的苦心抚育。"
    },
    {
        proverb: "船到江心补漏迟。",
        pinyin: "chuán dào jiāng xīn bǔ lòu chí",
        defZh: "比喻凡事应提早预防，如果等灾祸发生了再去补救，一切已经为时已晚了。",
        defEn: "It is too late to plug the leak when the boat is in midstream.",
        defBm: "Sesal dahulu pendapatan, sesal kemudian tidak berguna.",
        example: "你平时不努力，临考试了才挑灯夜读，岂不是船到江心补漏迟？"
    },
    {
        proverb: "打虎不离亲兄弟。",
        pinyin: "dǎ hǔ bù lí qīn xiōng dì",
        defZh: "比喻面临生死攸关或极大困难时，只有骨肉至亲才能同心协力共渡难关。",
        defEn: "Brothers stand together in times of danger.",
        defBm: "Cubit paha kanan, paha kiri terasa juga (hubungan persaudaraan yang sangat rapat).",
        example: "商业危机面前，他们两兄弟不计前嫌携手拯救家业，真乃打虎不离亲兄弟。"
    },
    {
        proverb: "大船沉没，原由小孔。",
        pinyin: "dà chuán chén mò ， yuán yóu xiǎo kǒng",
        defZh: "比喻极微小的疏忽或失误，如果不加防范和重视，会导致巨大灾难的发生。",
        defEn: "A small leak will sink a great ship.",
        defBm: "Rosak bawang setandan kerana sebiji yang busuk.",
        example: "工程安全容不得半点粗心，大船沉没，原由小孔，一个小螺丝松动都可能毁了整艘飞船。"
    },
    {
        proverb: "单丝不成线，独木难成林。",
        pinyin: "dān sī bù chéng xiàn ， dú mù nán chéng lín",
        defZh: "比喻个人力量单薄，难以成就宏大的事业，强调团队协作与合作的重要性。",
        defEn: "A single thread cannot make a cord, and a single tree cannot make a forest.",
        defBm: "Bulat air kerana pembetung, bulat manusia kerana muafakat.",
        example: "一个成功的班集体需要所有人共同维护，毕竟单丝不成线，独木难成林。"
    },
    {
        proverb: "当一天和尚撞一天钟。",
        pinyin: "dāng yī tiān hé shàng zhuàng yī tiān zhōng",
        defZh: "比喻工作或学习毫无主观能动性，敷衍塞责，只图混一天算一天。",
        defEn: "Do what is expected for the day but without passion; drift along.",
        defBm: "Sekadar melepaskan batuk di tangga (melakukan kerja acuh tidak acuh).",
        example: "我们青年对待学业应当积极奋斗，而不能抱着当一天和尚撞一天钟的消极态度。"
    },
    {
        proverb: "道高一尺，魔高一丈。",
        pinyin: "dào gāo yī chǐ ， mó gāo yī zhàng",
        defZh: "比喻法律或正义在发展时，犯罪者也会千方百计找出新漏洞和不正当手段来逃避惩罚。",
        defEn: "As virtue rises one foot, vice rises ten.",
        defBm: "Setiap peraturan yang ketat pasti ada pihak yang cuba mencari jalan pintas melanggarinya.",
        example: "尽管防伪技术不断升级，盗版技术也跟着更新，真是道高一尺，魔高一丈。"
    },
    {
        proverb: "当家才知盐米贵，出门才晓路难行。",
        pinyin: "dāng jiā cái zhī yán mǐ guì ， chū mén cái xiǎo lù nán xíng",
        defZh: "形容凡事如果不亲自体验，绝不可能知道其中的艰难与持家的辛苦。",
        defEn: "Only when you run a household do you know the cost of living.",
        defBm: "Hanya orang yang memikul sahaja yang tahu beratnya bebanan.",
        example: "来到国外留学凡事靠自己后，他才叹道：“当家才知盐米贵，出门才晓路难行。”"
    },
    {
        proverb: "灯盏无油枉费心。",
        pinyin: "dēng zhǎn wú yóu wǎng fèi xīn",
        defZh: "比喻客观条件不足，或者根本没有基础物资，再怎么枉费心思也是无济于事。",
        defEn: "An oil lamp without oil is a waste of effort.",
        defBm: "Bagai menanti kucing bertanduk (tiada kelengkapan asas).",
        example: "没有核心的技术开发资金支持，你构想再美的创业计划也是灯盏无油枉费心。"
    },
    {
        proverb: "二龙相斗，虾蟹受伤。",
        pinyin: "èr lóng xiāng dòu ， xiā xiè shòu shāng",
        defZh: "比喻两雄相争或大国、高层发生激烈的利益冲突，往往会使夹在中间的平民小辈遭殃。",
        defEn: "When two dragons fight, the shrimps and crabs get hurt.",
        defBm: "Gajah sama gajah berjuang, pelanduk mati di tengah-tengah.",
        example: "两家大型科技巨头在行业里大打恶意价格战，结果无辜的下游零售商纷纷倒闭。"
    },
    {
        proverb: "风马牛不相及。",
        pinyin: "fēng mǎ niú bù xiāng jí",
        defZh: "比喻两件事物之间完全没有任何关联、瓜葛或共同之处。",
        defEn: "Completely unrelated; having nothing to do with each other.",
        defBm: "Bagai minyak dengan air (perkara yang langsung tiada kaitan).",
        example: "你回答科学考题不能东拉西扯一些风马牛不相及的内容，否则肯定零分。"
    },
    {
        proverb: "夫子庙前卖文章。",
        pinyin: "fū zǐ miào qián mài wén zhāng",
        defZh: "比喻在学问极高、技术高超的老行家面前卖弄、夸耀本领，不自量力。",
        defEn: "Show off one's slight talent before a true master.",
        defBm: "Mengajar lumba berenang kepada ikan / Menunjukkan kemahiran di hadapan pakar.",
        example: "在国家队羽毛球总教练面前秀你的扣杀技巧，简直是夫子庙前卖文章。"
    },
    {
        proverb: "福无双至，祸不单行。",
        pinyin: "fú wú shuāng zhì ， huò bù dān xíng",
        defZh: "比喻好的运气难得成双成对发生，但悲伤的灾祸却总是一个接一个连续发生。",
        defEn: "Misfortunes never come singly.",
        defBm: "Sudah jatuh ditimpa tangga.",
        example: "他才刚刚在风暴中丢失了护照，钱包紧接着又被小偷抢走，真是福无双至，祸不单行。"
    },
    {
        proverb: "覆巢之下无完卵。",
        pinyin: "fù cháo zhī xià wú wán luǎn",
        defZh: "比喻一个国家或团队整体遭受到毁灭性灾难，其个体、局部成员也无法独自幸免于难。",
        defEn: "Under a fallen nest, there are no whole eggs.",
        defBm: "Rumah terbakar, bersivik pun hangus (apabila organisasi musnah, ahli turut menderita).",
        example: "如果国家经济在国际战火中彻底垮了，平民百姓又怎么能安枕无忧？覆巢之下无完卵啊。"
    },
    {
        proverb: "公说公有理，婆说婆有理。",
        pinyin: "gōng shuō gōng yǒu lǐ ， pó shuō pó yǒu lǐ",
        defZh: "比喻双方各执一词，每个人都说自己占理，让旁人很难明断是非是非。",
        defEn: "Each claims to be right; both sides have their arguments.",
        defBm: "Masing-masing menegakkan benang yang basah (tiada pihak mahu mengalah).",
        example: "他们俩在走廊发生碰撞的事，公说公有理，婆说婆有理，让纪律老师头痛不已。"
    },
    {
        proverb: "狗嘴里吐不出象牙。",
        pinyin: "gǒu zuǐ lǐ tǔ bù chū xiàng yá",
        defZh: "用来讽刺坏人、素质极低的人言辞粗俗，不可能说出高尚、温和有哲理的好话。",
        defEn: "No ivory comes from a dog's mouth.",
        defBm: "Mulut busuk tidak akan mengeluarkan kata-kata yang mulia.",
        example: "你别理那个恶霸的挑衅，他那狗嘴里吐不出象牙，我们理他就降低了格调。"
    },
    {
        proverb: "海水不可斗量。",
        pinyin: "hǎi shuǐ bù kě dǒu liáng",
        defZh: "比喻卓越的人才或伟大的事物绝不应该从粗浅的外表去评估、小看他们。",
        defEn: "The ocean cannot be measured with a bucket; do not judge by appearances.",
        defBm: "Air yang tenang jangan disangka tiada buaya (jangan memandang rendah).",
        example: "那位不起眼的农家子弟竟在SPM全国考卷中夺得总冠军，可见人不可貌相，海水不可斗量。"
    },
    {
        proverb: "好蜂不来落地花。",
        pinyin: "hǎo fèn bù lái luò dì huā",
        defZh: "比喻真正有道德、有气节、顶天立地的英雄豪杰，绝不屑于乘人之危或做低俗的事。",
        defEn: "A noble bee does not visit fallen flowers; a true hero does not take advantage of others.",
        defBm: "Orang yang bermoral tinggi tidak akan mengambil kesempatan atas kelemahan orang lain.",
        example: "他虽然急需对手手上的独家商机，但绝不做落地花的行为，更不乘人之危夺取。"
    },
    {
        proverb: "好汉不吃眼前亏。",
        pinyin: "hǎo hàn bù chī yǎn qián kuī",
        defZh: "比喻聪明人懂得审时度势，在形势不利于自己时懂得暂时退让忍耐，避免造成不必要损失。",
        defEn: "A wise man avoids immediate disadvantage; know when to retreat.",
        defBm: "Mengalah tidak semestinya kalah; bijak menyesuaikan diri.",
        example: "面对暴徒的抢劫，我们应该把钱给他们以确保人身安全，好汉不吃眼前亏，保命最重要。"
    },
    {
        proverb: "好马不吃回头草。",
        pinyin: "hǎo mǎ bù chī huí tóu cǎo",
        defZh: "比喻有志气、有尊严和骨气的人，一旦做出了离开的决定，绝不会走回头路。",
        defEn: "A good horse does not turn back to graze.",
        defBm: "Orang yang berprinsip tidak akan kembali kepada perkara lama yang sudah ditinggalkan.",
        example: "既然辞去了那家屡次克扣员工薪资的公司，好马不吃回头草，你千万不要再接受他们的挽留。"
    },
    {
        proverb: "虎落平阳被犬欺。",
        pinyin: "hǔ luò píng yáng bèi quǎn qī",
        defZh: "比喻有权威、有本事的人一旦失去权势或陷入特定困境，连原本不如他的小人也敢来欺负他。",
        defEn: "A tiger in the hills loses its power when it descends to the plains.",
        defBm: "Orang berkuasa yang jatuh akan dipandang hina dan hilang dihormati.",
        example: "公司前任董事长退休后，那些平时奉承迎合他的人竟态度冷漠，真是虎落平阳被犬欺。"
    }
];
