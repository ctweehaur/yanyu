// ==========================================
// 常用谚语150句 分卷5 (T - Y)
// ==========================================

const proverbData5 = [
    {
        proverb: "头痛医头，脚痛医脚。",
        pinyin: "tóu tòng yī tóu ， jiǎo tòng yī jiǎo",
        defZh: "比喻做事缺乏整体全面考量，只针对眼前的局部表面症状症状进行应付，不作根本彻底根治。",
        defEn: "Treat the symptoms but not the disease; palliative measures.",
        defBm: "Melepaskan batuk di tangga (tidak menyelesaikan punca utama masalah).",
        example: "学校纪律问题不能头痛医头，脚痛医脚，除了罚站，更要从根源上关心学生的心理辅导。"
    },
    {
        proverb: "外披羊皮，内存狼心。",
        pinyin: "wài pī yáng pí ， nèi cún láng xīn",
        defZh: "形容伪君子表面伪装得极其善良、温和，但内心却阴险狠毒、充满害人的毒计。",
        defEn: "A wolf in sheep's clothing; outward hypocrisy hiding a wicked heart.",
        defBm: "Mulut manis, hati busuk (seperti musang berbulu ayam).",
        example: "你要小心那个新来的客户，他平日满嘴仁义道德，其实外披羊皮，内存狼心。"
    },
    {
        proverb: "为人莫学风前柳，处事当效雪里松。",
        pinyin: "wéi rén mò xué fēng qián liǔ ， chù shì dāng xiào xuě lǐ sōng",
        defZh: "勉励人们做人不能像随风摇摆的柳条般毫无原则立场；做事应当效仿雪中的松树，不屈不挠、傲骨挺拔。",
        defEn: "Do not shake like a willow in the wind; stand firm like a pine in the snow.",
        defBm: "Patah tumbuh hilang berganti / Berdiri teguh mempertahankan prinsip diri.",
        example: "老师常教导我们，面对不良社会风气，为人莫学风前柳，处事当效雪里松，一定要坚守底线。"
    },
    {
        proverb: "未知鹿死谁手。",
        pinyin: "wèi zhī lù sǐ shéi shǒu",
        defZh: "比喻在激烈的竞争或博弈中，局势扑朔迷离，不到最后一刻绝不知道谁能获得胜利胜出。",
        defEn: "Unclear who will win the prize; the outcome remains undecided.",
        defBm: "Belum tahu siapa yang menang (persaingan sengit yang belum tentu pemenangnya).",
        example: "这场全国羽毛球大决赛的两名选手实力旗鼓相当，未知鹿死谁手。"
    },
    {
        proverb: "无巧不成书。",
        pinyin: "wú qiǎo bù chéng shū",
        defZh: "形容世事奇妙，很多事情的巧合精准得就像小说里刻意虚构的情节一样，令人惊叹。",
        defEn: "No coincidence, no story; what a bizarre coincidence.",
        defBm: "Kebetulan yang tersangat aneh (bagaikan tersurat dalam cerita).",
        example: "我今天去商场刚想打电话给你，一抬头你正好站在我面前，真是无巧不成书。"
    },
    {
        proverb: "无事不登三宝殿。",
        pinyin: "wú shì bù dēng sān bǎo diàn",
        defZh: "平时很少走动，往往在遇到难题、需要求人帮忙时才上门探访求助（多用于客套直率直率表达）。",
        defEn: "One does not visit unless there is some business; drop in to ask for help.",
        defBm: "Ada udang di sebalik batu (menziarahi seseorang hanya apabila memerlukan bantuan).",
        example: "大卫，我今天真是无事不登三宝殿，关于下个月的校庆演出，有些技术问题想向你请教。"
    },
    {
        proverb: "无针不引线。",
        pinyin: "wú zhēn bù yǐn xiàn",
        defZh: "比喻如果没有中间人在中间牵线、搭桥引荐，很多事情或合作是很难凭空做成办妥的。",
        defEn: "No needle, no thread; no success without a middleman.",
        defBm: "Tidak akan ada asap jika tiada api (tiada hasil tanpa penghubung awal).",
        example: "他们两家大财团能达成这次百亿合作，全靠林秘书在其中无针不引线，默默斡旋。"
    },
    {
        proverb: "五十步笑百步。",
        pinyin: "wǔ shí bù xiào bǎi bù",
        defZh: "形容一个人讥笑、指责别人的过错和缺点，然而他自己犯的错误本质上并不比别人高明多少。",
        defEn: "The pot calling the kettle black; those who run 50 paces mocking those who run 100.",
        defBm: "Paku serpih, mengata orang dia yang lebih (membongkar kesalahan orang sedangkan diri sendiri sama sahaja).",
        example: "你数学考了30分却去嘲笑考25分的同学，这无异于五十步笑百步。"
    },
    {
        proverb: "乌鸦彩凤不同栖。",
        pinyin: "wū yā cǎi fèng bù tóng qī",
        defZh: "比喻两个身份地位、品德修养或志向完全不同的人，是不可能真正和睦、长久地相处相处在一起的。",
        defEn: "Crows and phoenixes do not nest together; incompatible elements.",
        defBm: "Bagai enau dalam belukar, melepaskan pucuk masing-masing (dua kelompok berbeza tidak bercampur).",
        example: "他喜欢读书研究，而那些不务正业的人天天打游戏，乌鸦彩凤不同栖，他们最终玩不到一块。"
    },
    {
        proverb: "物以稀为贵。",
        pinyin: "wù yǐ xī wéi guì",
        defZh: "指事物、商品或人才因为数量极其稀少、罕见，其价值就会水涨船高，显得无比珍贵昂贵。",
        defEn: "Rarity increases value; scarce things are expensive.",
        defBm: "Barangan yang terhad harganya melonjak tinggi.",
        example: "这款纪念邮票在全国只发行了一百张，物以稀为贵，如今在拍卖行已经炒到了天价。"
    },
    {
        proverb: "喜怒不形于色。",
        pinyin: "xǐ nù bù xíng yú sè",
        defZh: "形容一个人极有修养、沉稳内敛，把内心的兴奋喜悦或愤怒悲伤控制得很好，脸上绝不显露出来。",
        defEn: "Hide one's feelings behind an expressionless face; master of self-control.",
        defBm: "Mempunyai kawalan emosi yang sangat tinggi, tidak menampakkan kemarahan atau kegembiraan.",
        example: "总经理做决策时向来喜怒不形于色，下属们都觉得他深不可测、威严万分。"
    },
    {
        proverb: "瞎子见钱眼也开。",
        pinyin: "xiā zǐ jiàn qián yǎn yě kāi",
        defZh: "极度辛辣地讽刺金钱财富对人有巨大的诱惑力，甚至可以让原则尽失、做出令人匪夷所思的荒唐行径。",
        defEn: "Money makes the mare go; money can tempt even the blind.",
        defBm: "Tamak haloba menggelapkan mata (manusia hilang pedoman apabila melihat wang melimpah).",
        example: "那个平日满口清廉的贪官，最后还是落入了贿赂的陷阱，真是一眼看破：瞎子见钱眼也开。"
    },
    {
        proverb: "小时偷针，大时偷金。",
        pinyin: "xiǎo shí tōu zhēn ， dà shí tōu jīn",
        defZh: "警诫人们坏习惯和恶行是由小逐渐累积养成的，小错如果不及时纠正引导，长大后必会铸成大错法网难逃。",
        defEn: "He who steals a needle as a child will steal gold as a man.",
        defBm: "Melentur buluh biarlah dari rebungnya (kesalahan kecil yang dibiarkan akan menjadi jenayah besar).",
        example: "孩子在学校拿别人的铅笔，家长绝不能当成小事，小时偷针，大时偷金，必须立刻教育引导。"
    },
    {
        proverb: "心有余而力不足。",
        pinyin: "xīn yǒu yú ér lì bù zú",
        defZh: "指心里极其渴望、有完美的意愿去做好某件事，但实际的体力、能力或客观力量却远远不够达不到。",
        defEn: "The spirit is willing but the flesh is weak.",
        defBm: "Hendak seribu daya, tak hendak seribu dalih (namun ini dalam konteks keupayaan fizikal yang tersangat lemah).",
        example: "我想帮你们校队设计壁画，但我最近要筹备SPM大考，实在是心有余而力不足。"
    },
    {
        proverb: "惺惺惜惺惺，好汉识好汉。",
        pinyin: "xīng xīng xī xīng xīng ， hǎo hàn shí hǎo hàn",
        defZh: "指聪明人、有才干者之间会互相爱惜和尊重，英雄豪杰也最愿意去结识、扶持志同道合的好汉。",
        defEn: "Wise men appreciate wise men, and heroes recognize heroes.",
        defBm: "Harimau menyembunyikan kukunya, tetapi sesama cendekiawan saling menghormati.",
        example: "在这次全国诗歌大赛中，冠亚军辩手惺惺惜惺惺，好汉识好汉，在台下成为了挚友。"
    },
    {
        proverb: "秀才遇见兵，有理说不清。",
        pinyin: "xiù cái yù jiàn bīng ， yǒu lǐ shuō bù qīng",
        defZh: "比喻跟野蛮、粗鲁、毫无逻辑、不讲道理的小人沟通，纵有天大的道理和学问也完全无法沟通清楚。",
        defEn: "A scholar meeting a soldier; reasoning with a brute is useless.",
        defBm: "Bagai mencurahkan air ke daun keladi (hujah yang sia-sia kepada orang yang kasar dan tidak berpelajaran).",
        example: "面对泼皮无赖胡搅蛮缠，你跟他讲法律也没用，真是秀才遇见兵，有理说不清。"
    },
    {
        proverb: "绣花枕头一肚草。",
        pinyin: "xiù huā zhěn tou yī dù cǎo",
        defZh: "极度尖刻地比喻人虚有其表，外表打扮得精致好看，内部其实空洞无物、完全没有任何学问和本领。",
        defEn: "A beautiful pillow stuffed with straw; outward show but no substance.",
        defBm: "Tong kosong nyaring bunyinya / Cantik di luar tetapi kosong di dalam.",
        example: "那个新主管在开会时只会堆砌一些花哨的网络名词，一问到实际业务就哑口无言，真是个绣花枕头一肚草。"
    },
    {
        proverb: "迅雷不及掩耳。",
        pinyin: "xùn léi bù jí yǎn ěr",
        defZh: "比喻动作、执行或突发事件发生得极快，出人意料，让人完全来不及防备防御，迅猛无比。",
        defEn: "With lightning speed; leaving no time to cover one's ears.",
        defBm: "Sepantas kilat / Tindakan yang tersangat cepat dan tidak sempat dihalang.",
        example: "警方以迅雷不及掩耳之势迅速突袭了犯罪窝点，当场将所有人一网打尽。"
    },
    {
        proverb: "哑巴吃黄连，有苦说不出。",
        pinyin: "yǎ bā chī huáng lián ， yǒu kǔ shuō bù chū",
        defZh: "比喻人内心承受着极大的痛苦、委屈或苦衷，却因为各种特殊原因或顾忌而无法向旁人倾诉和辩白。",
        defEn: "A mute person eating bitter herbs; having a bitter grievance but unable to speak out.",
        defBm: "Menanggung derita dalam diam tanpa mampu diluahkan kepada sesiapa.",
        example: "由于合同上有保密条款，面对外界对他作品的抄袭指责，他只能哑巴吃黄连，有苦说不出。"
    },
    {
        proverb: "言者谆谆，听者藐藐。",
        pinyin: "yán zhě zhūn zhūn ， tīng zhě miǎo miǎo",
        defZh: "形容说话劝诫、教导的人态度非常诚心恳切、不厌其烦；而听讲的人却态度傲慢不重视、敷衍塞责。",
        defEn: "The speaker is earnest, but the listener is indifferent.",
        defBm: "Masuk telinga kanan, keluar telinga kiri (nasihat yang diabaikan sepenuhnya).",
        example: "任凭张老师在台上言者谆谆，听者藐藐，底下的几名顽劣学生依然在睡觉打闹。"
    },
    {
        proverb: "羊毛出在羊身上。",
        pinyin: "yáng máo chū zài yáng shēn shàng",
        defZh: "比喻表面上给了你各种诱人的好处、免费好礼，但实际上这些好处所耗的成本早已附加在你付出的代价代价中了。",
        defEn: "The wool comes from the sheep's back; in the end, the consumer pays.",
        defBm: "Umpan yang diletakkan pada kail (faedah yang sebenarnya dibayar oleh penerima sendiri).",
        example: "这家网店声称全场免邮还送大礼包，其实商品单价早就调高了，羊毛出在羊身上。"
    },
    {
        proverb: "一鼻孔出气。",
        pinyin: "yī bí kǒng chū qì",
        defZh: "比喻两股势力、两个人为了特定的利益勾结在一起，意见、主张完全相同，沆瀣一气。",
        defEn: "Breathe through the same nostril; align with each other completely in a bad way.",
        defBm: "Bagai kuku dengan isi (sentiasa sependapat dan menyokong satu sama lain secara membabi buta).",
        example: "他们两个主管一鼻孔出气，每次开会都极力打压我们新组员提出的创意方案。"
    },
    {
        proverb: "一不做，二不休。",
        pinyin: "yī bù zuò ， èr bù xiū",
        defZh: "指事情既然已经开始做了，索性就一鼓作气、彻彻底底地做到底，中途绝不退缩放弃。",
        defEn: "In for a penny, in for a pound; carry a thing through once started.",
        defBm: "Alang-alang berminyak, biar licin / Alang-alang menyeluk pekasam, biar sampai ke pangkal lengan.",
        example: "既然我们已经开启了学校环保基地的建设，一不做，二不休，就把整栋教学楼也全部规划进去。"
    },
    {
        proverb: "一登龙门，身价百倍。",
        pinyin: "yī dēng lóng mén ， shēn jià bǎi bèi",
        defZh: "比喻一个寂寂无名的人，一旦与有名气、地位的权贵、名宿接触或受到提拔，其声誉声望极速飙升。",
        defEn: "Once leaping over the Dragon Gate, one's value increases a hundredfold.",
        defBm: "Mendapat ganjaran atau penghormatan yang sangat besar sebaik sahaja naik pangkat.",
        example: "这名业余画家自从获得了国家美术馆金奖后，一登龙门，身价百倍，他的作品现在一画难求。"
    },
    {
        proverb: "一将功成万骨枯。",
        pinyin: "yī jiàng gōng chéng wàn gǔ kū",
        defZh: "形容战争极其残酷悲惨，也比喻一名高层、将领显赫的成功和勋业，是由无数下属平民无辜生命换来的。",
        defEn: "A general's success is built on ten thousand rotting bones; the cruelty of achievement.",
        defBm: "Kemenangan pemimpin dibayar dengan titisan darah dan pengorbanan pengikut.",
        example: "那家互联网巨头公司的上市，凝聚了成千上万程序员连续多年熬夜加班的心血，真是一将功成万骨枯。"
    }
];
