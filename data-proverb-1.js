const pData1 = [
  {
    "id": 1,
    "text": "八字没一撇",
    "pinyin": "bā zì méi yī piě",
    "pinyin_key": "B",
    "meaning": "比喻事情还没有一点眉目。",
    "en": "Things are still far from being realized; not even the first stroke of the character 'ba' is written.",
    "bm": "Perkara yang belum ada sebarang bayang atau kepastian lagi.",
    "example": "大家都还在讨论要不要去旅行，目的地都还没选好呢，这事根本就是八字没一撇。"
  },
  {
    "id": 2,
    "text": "百闻不如一见",
    "pinyin": "bǎi wén bù rú yī jiàn",
    "pinyin_key": "B",
    "meaning": "听得再多，也不如亲眼看到一次可靠。",
    "en": "Seeing is believing; to hear a hundred times is not as good as to see once.",
    "bm": "Melihat sendiri adalah lebih baik daripada mendengar khabar angin berkali-kali.",
    "example": "以前常听人说双子塔在夜里有多壮观，今晚走近一看，果然是百闻不如一见。"
  },
  {
    "id": 3,
    "text": "搬起石头砸自己的脚",
    "pinyin": "bān qǐ shí tou zá zì jǐ de jiǎo",
    "pinyin_key": "B",
    "meaning": "比喻本来想害别人，结果却害了自己。",
    "en": "Lift a rock only to drop it on one's own feet; harm oneself while intending to harm others.",
    "bm": "Senjata makan tuan; perbuatan yang menyusahkan diri sendiri.",
    "example": "他原本想在考试中作弊嫁祸给同桌，结果被巡考老师当场抓获，真是搬起石头砸自己的脚。"
  },
  {
    "id": 4,
    "text": "饱汉不知饿汉饥",
    "pinyin": "bǎo hàn bù zhī è hàn jī",
    "pinyin_key": "B",
    "meaning": "比喻处境好的人不能理解处境困难者的苦衷。",
    "en": "The well-fed do not understand the plight of the starving.",
    "bm": "Orang yang senang tidak memahami kesusahan orang yang miskin.",
    "example": "他出生于富贵人家，竟然嘲笑贫困同学放学后要去打工，真是饱汉不知饿汉饥。"
  },
  {
    "id": 5,
    "text": "不要鸡蛋里挑骨头",
    "pinyin": "bù yào jī dàn lǐ tiāo gǔ tou",
    "pinyin_key": "B",
    "meaning": "比喻故意挑剔，故意找茬。",
    "en": "Look for a bone in an egg; find fault intentionally.",
    "bm": "Mencari-cari kesalahan atau kesilapan yang tidak wujud.",
    "example": "他的这份华文作文已经写得非常完美了，你组长就不要鸡蛋里挑骨头了。"
  },
  {
    "id": 6,
    "text": "聪明反被聪明误",
    "pinyin": "cōng míng fǎn bèi cōng míng wù",
    "pinyin_key": "C",
    "meaning": "自以为聪明，结果反而害了自己。",
    "en": "Cleverness may be overreached; ruined by one's own cleverness.",
    "bm": "Orang yang menyangka dirinya bijak akhirnya ditipu oleh muslihat sendiri.",
    "example": "他自作聪明地在华文理解题里写了两个相反的答案，以为能碰对，结果聪明反被聪明误，被老师扣光了分。"
  },
  {
    "id": 7,
    "text": "粗线条",
    "pinyin": "cū xiàn tiáo",
    "pinyin_key": "C",
    "meaning": "形容人做事不细致，或者只看大轮廓。",
    "en": "Careless; broad outlines; not paying attention to details.",
    "bm": "Seseorang yang melakukan kerja dengan tidak teliti atau sekadar melepaskan batuk di tangga.",
    "example": "他做华文文学报告总是抓不到重点，细节全错，真是一个粗线条的人。"
  },
  {
    "id": 8,
    "text": "打翻身仗",
    "pinyin": "dǎ fān shēn zhàng",
    "pinyin_key": "D",
    "meaning": "比喻彻底改变落后、被动或受压迫的局面。",
    "en": "To turn the tables; to break free from an unfavorable situation.",
    "bm": "Mengubah nasib yang malang atau membalikkan keadaan yang mundur.",
    "example": "这次期末考他每天挑灯夜读，发誓一定要在华文科目上打翻身仗。"
  },
  {
    "id": 9,
    "text": "打破沙锅问到底",
    "pinyin": "dǎ pò shā guō wèn dào dǐ",
    "pinyin_key": "D",
    "meaning": "比喻对事情寻根问底，非要弄个水落石出不可。",
    "en": "Insist on getting to the bottom of the matter.",
    "bm": "Suka bertanya secara mendalam untuk mengetahui perkara yang sebenar.",
    "example": "只要发现古诗文里有不明白的字词，他一定会打破沙锅问到底，直到完全理解为止。"
  },
  {
    "id": 10,
    "text": "打开天窗说亮话",
    "pinyin": "dǎ kāi tiān chuāng shuō liàng huà",
    "pinyin_key": "D",
    "meaning": "比喻直率、坦白地把话说出来，不绕圈子。",
    "en": "Speak frankly and openly; put all cards on the table.",
    "bm": "Bercakap secara berterus-terang tanpa menyembunyikan apa-apa.",
    "example": "既然大家都想解决班级徽章的设计问题，我们就打开天窗说亮话，别再拐弯抹角了。"
  },
  {
    "id": 11,
    "text": "大意失荆州",
    "pinyin": "dà yì shī jīng zhōu",
    "pinyin_key": "D",
    "meaning": "比喻因疏忽大意而导致严重的失败或损失。",
    "en": "Suffer a major setback due to carelessness.",
    "bm": "Mengalami kerugian yang besar akibat kelalaian sendiri.",
    "example": "他本是校内华文辩论赛的王牌，却因为没有好好准备初赛资料而大意失荆州，爆冷淘汰。"
  },
  {
    "id": 12,
    "text": "倒吸一口凉气",
    "pinyin": "dào xī yī kǒu liáng qì",
    "pinyin_key": "D",
    "meaning": "形容人非常吃惊、恐惧或绝望的状态。",
    "en": "Gasp with astonishment or fear.",
    "bm": "Tersentak atau terkejut besar kerana ketakutan atau berasa cemas.",
    "example": "一看到这次预考那极其密麻难懂的华文文言文题目，所有考生都不禁倒吸一口凉气。"
  },
  {
    "id": 13,
    "text": "到什么山上唱什么歌",
    "pinyin": "dào shén me shān shàng chàng shén me gē",
    "pinyin_key": "D",
    "meaning": "比喻根据实际情况行事，在什么环境下就说什么话。",
    "en": "Adapt oneself to current circumstances; sing the song according to the mountain you are on.",
    "bm": "Menyesuaikan diri dengan keadaan di mana-mana kita berada.",
    "example": "到了新的学校就职，就要遵守新学校的规矩，到什么山上唱什么歌嘛。"
  },
  {
    "id": 14,
    "text": "丢三落四",
    "pinyin": "diū sān là sì",
    "pinyin_key": "D",
    "meaning": "形容做事马虎粗心，经常遗忘东西。",
    "en": "Forgetful; scatterbrained.",
    "bm": "Pelupa atau sentiasa tercicir barang kerana lalai.",
    "example": "他出门上学总是丢三落四的，今天忘带华文课本，明天忘带铅笔盒。"
  },
  {
    "id": 15,
    "text": "豆腐渣工程",
    "pinyin": "dòu fu zhā gōng chéng",
    "pinyin_key": "D",
    "meaning": "形容质量极其低劣、偷工减料的建筑或工程。",
    "en": "Jerry-built project; shoddy work.",
    "bm": "Projek atau bangunan yang dibina secara sambil lewa dan tidak berkualiti.",
    "example": "这座新修的学校凉亭才过了一场暴雨就坍塌了，简直是豆腐渣工程。"
  },
  {
    "id": 16,
    "text": "读书破万卷",
    "pinyin": "dú shū pò wàn juàn",
    "pinyin_key": "D",
    "meaning": "形容读书极多，学识非常渊博。",
    "en": "Have read extensively; well-read.",
    "bm": "Mempunyai ilmu pengetahuan yang amat luas hasil daripada banyak membaca.",
    "example": "张老师自幼热爱文学，长年积累下来，真可谓读书破万卷，说起典故手到擒来。"
  },
  {
    "id": 17,
    "text": "对牛弹琴",
    "pinyin": "duì niú tán qín",
    "pinyin_key": "D",
    "meaning": "比喻对不懂道理的人讲道理，白费口舌；也讽刺说话不看对象。",
    "en": "Casting pearls before swine; preaching to the wrong audience.",
    "bm": "Menasihati orang yang tidak mahu mendengar atau tidak faham; seperti mencurahkan air ke daun keladi.",
    "example": "他根本不懂得欣赏古典文学，你跟他聊大理石上的刻字诗词，简直是对牛弹琴。"
  },
  {
    "id": 18,
    "text": "多事之秋",
    "pinyin": "duō shì zhī qiū",
    "pinyin_key": "D",
    "meaning": "形容事故或事变很多的时期（多指国家或集体）。",
    "en": "A fateful time; an eventful period.",
    "bm": "Zaman atau tempoh masa yang penuh dengan huru-hara atau masalah.",
    "example": "学校今年接连遭遇校长调职、主楼漏水和校队比赛失利，正值多事之秋。"
  },
  {
    "id": 19,
    "text": "恶人先告状",
    "pinyin": "è rén xiān gào zhuàng",
    "pinyin_key": "E",
    "meaning": "指坏人或理亏的人抢先去诬告别人，企图恶人先占便宜。",
    "en": "The guilty party files the suit first; the rogue complains first.",
    "bm": "Orang yang bersalah mencuri kesemptan untuk menuduh orang lain terlebih dahulu.",
    "example": "分明是他先动手抢了别人的笔记本，却跑去跟班导师哭诉对方欺负他，真是恶人先告状。"
  },
  {
    "id": 20,
    "text": "二话不说",
    "pinyin": "èr huà bù shuō",
    "pinyin_key": "E",
    "meaning": "形容非常爽快，没有任何犹豫或废话。",
    "en": "Without a second word; straightforward; immediately.",
    "bm": "Tanpa banyak bicara; terus melakukan sesuatu dengan segera.",
    "example": "听到母校的华文教研会缺乏资金购买绘本，伟豪二话不说便捐出了千元善款。"
  },
  {
    "id": 21,
    "text": "防患于未然",
    "pinyin": "fáng huàn yú wèi rán",
    "pinyin_key": "F",
    "meaning": "在祸患发生之前就采取预防措施。",
    "en": "Prevent trouble before it happens; nip it in the bud.",
    "bm": "Sediakan payung sebelum hujan.",
    "example": "雨季要到了，校工提前清理了学校大礼堂屋顶的排水槽，以便防患于未然。"
  },
  {
    "id": 22,
    "text": "风马牛不相及",
    "pinyin": "fēng mǎ niú bù xiāng jí",
    "pinyin_key": "F",
    "meaning": "比喻事物之间完全没有任何联系或关系。",
    "en": "Totally unrelated; have absolutely nothing to do with each other.",
    "bm": "Dua perkara yang langsung tidak mempunyai kaitan antara satu sama lain.",
    "example": "你的回答和老师提出来的华文理解题问题根本风马牛不相及，怎么可能拿到分数？"
  },
  {
    "id": 23,
    "text": "赶鸭子上架",
    "pinyin": "gǎn yā zi shàng jià",
    "pinyin_key": "G",
    "meaning": "比喻强迫别人去做他根本做不来或不愿做的事。",
    "en": "Force someone to do something way beyond their ability.",
    "bm": "Memaksa seseorang melakukan sesuatu yang tidak mampu dilakukannya.",
    "example": "我从来没有主持过大型华文课外晚会，这次班长非要让我当司仪，真是赶鸭子上架。"
  },
  {
    "id": 24,
    "text": "高不成低不就",
    "pinyin": "gāo bù chéng dī bù jiù",
    "pinyin_key": "G",
    "meaning": "形容找工作或选对象时，条件高的得不到，条件低的又不愿要。",
    "en": "Be fastidious; can't choose between high and low options, ending up with nothing.",
    "bm": "Terlalu memilih hingga akhirnya tidak mendapat apa-apa.",
    "example": "他毕业后找工作总是高不成低不就，大公司嫌他没经验，小公司他嫌薪水低，至今还在家待业。"
  },
  {
    "id": 25,
    "text": "高标准严要求",
    "pinyin": "gāo biāo zhǔn yán yāo qiú",
    "pinyin_key": "G",
    "meaning": "以极高的规范和严格的条件来要求自己或工作。",
    "en": "High standards and strict requirements.",
    "bm": "Meletakkan piawaian yang tinggi dan syarat yang ketat dalam sesuatu urusan.",
    "example": "作为学校华文辩论队的总教练，他对队员的每一个立论陈词都坚持高标准严要求。"
  }
];
