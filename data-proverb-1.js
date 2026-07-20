const pData1 = [
  {
    "id": 1,
    "text": "八字没一撇",
    "pinyin": "bā zì méi yī piě",
    "pinyin_key": "B",
    "meaning": "比喻事情还没有一点眉目。",
    "en": "Things are still far from being realized; not even the first stroke of the character 'ba' is written.",
    "bm": "Perkara yang belum ada sebarang bayang atau kepastian lagi."
  },
  {
    "id": 2,
    "text": "百闻不如一见",
    "pinyin": "bǎi wén bù rú yī jiàn",
    "pinyin_key": "B",
    "meaning": "听得再多，也不如亲眼看到一次可靠。",
    "en": "Seeing is believing; to hear a hundred times is not as good as to see once.",
    "bm": "Melihat sendiri adalah lebih baik daripada mendengar khabar angin berkali-kali."
  },
  {
    "id": 3,
    "text": "搬起石头砸自己的脚",
    "pinyin": "bān qǐ shí tou zá zì jǐ de jiǎo",
    "pinyin_key": "B",
    "meaning": "比喻本来想害别人，结果却害了自己。",
    "en": "Lift a rock only to drop it on one's own feet; harm oneself while intending to harm others.",
    "bm": "Senjata makan tuan; perbuatan yang menyusahkan diri sendiri."
  },
  {
    "id": 4,
    "text": "饱汉不知饿汉饥",
    "pinyin": "bǎo hàn bù zhī è hàn jī",
    "pinyin_key": "B",
    "meaning": "比喻处境好的人不能理解处境困难者的苦衷。",
    "en": "The well-fed do not understand the plight of the starving.",
    "bm": "Orang yang senang tidak memahami kesusahan orang yang miskin."
  },
  {
    "id": 5,
    "text": "不要鸡蛋里挑骨头",
    "pinyin": "bù yào jī dàn lǐ tiāo gǔ tou",
    "pinyin_key": "B",
    "meaning": "比喻故意挑剔，故意找茬。",
    "en": "Look for a bone in an egg; find fault intentionally.",
    "bm": "Mencari-cari kesalahan atau kesilapan yang tidak wujud."
  },
  {
    "id": 6,
    "text": "聪明反被聪明误",
    "pinyin": "cōng míng fǎn bèi cōng míng wù",
    "pinyin_key": "C",
    "meaning": "自以为聪明，结果反而害了自己。",
    "en": "Cleverness may be overreached; ruined by one's own cleverness.",
    "bm": "Orang yang menyangka dirinya bijak akhirnya ditipu oleh muslihat sendiri."
  },
  {
    "id": 7,
    "text": "粗线条",
    "pinyin": "cū xiàn tiáo",
    "pinyin_key": "C",
    "meaning": "形容人做事不细致，或者只看大轮廓。",
    "en": "Careless; broad outlines; not paying attention to details.",
    "bm": "Seseorang yang melakukan kerja dengan tidak teliti atau sekadar melepaskan batuk di tangga."
  },
  {
    "id": 8,
    "text": "打翻身仗",
    "pinyin": "dǎ fān shēn zhàng",
    "pinyin_key": "D",
    "meaning": "比喻彻底改变落后、被动或受压迫的局面。",
    "en": "To turn the tables; to break free from an unfavorable situation.",
    "bm": "Mengubah nasib yang malang atau membalikkan keadaan yang mundur."
  },
  {
    "id": 9,
    "text": "打破沙锅问到底",
    "pinyin": "dǎ pò shā guō wèn dào dǐ",
    "pinyin_key": "D",
    "meaning": "比喻对事情寻根问底，非要弄个水落石出不可。",
    "en": "Insist on getting to the bottom of the matter.",
    "bm": "Suka bertanya secara mendalam untuk mengetahui perkara yang sebenar."
  },
  {
    "id": 10,
    "text": "打开天窗说亮话",
    "pinyin": "dǎ kāi tiān chuāng shuō liàng huà",
    "pinyin_key": "D",
    "meaning": "比喻直率、坦白地把话说出来，不绕圈子。",
    "en": "Speak frankly and openly; put all cards on the table.",
    "bm": "Bercakap secara berterus-terang tanpa menyembunyikan apa-apa."
  },
  {
    "id": 11,
    "text": "大意失荆州",
    "pinyin": "dà yì shī jīng zhōu",
    "pinyin_key": "D",
    "meaning": "比喻因疏忽大意而导致严重的失败或损失。",
    "en": "Suffer a major setback due to carelessness.",
    "bm": "Mengalami kerugian yang besar akibat kelalaian sendiri."
  },
  {
    "id": 12,
    "text": "倒吸一口凉气",
    "pinyin": "dào xī yī kǒu liáng qì",
    "pinyin_key": "D",
    "meaning": "形容人非常吃惊、恐惧或绝望的状态。",
    "en": "Gasp with astonishment or fear.",
    "bm": "Tersentak atau terkejut besar kerana ketakutan atau berasa cemas."
  },
  {
    "id": 13,
    "text": "到什么山上唱什么歌",
    "pinyin": "dào shén me shān shàng chàng shén me gē",
    "pinyin_key": "D",
    "meaning": "比喻根据实际情况行事，在什么环境下就说什么话。",
    "en": "Adapt oneself to current circumstances; sing the song according to the mountain you are on.",
    "bm": "Menyesuaikan diri dengan keadaan di mana-mana kita berada."
  },
  {
    "id": 14,
    "text": "丢三落四",
    "pinyin": "diū sān là sì",
    "pinyin_key": "D",
    "meaning": "形容做事马虎粗心，经常遗忘东西。",
    "en": "Forgetful; scatterbrained.",
    "bm": "Pelupa atau sentiasa tercicir barang kerana lalai."
  },
  {
    "id": 15,
    "text": "豆腐渣工程",
    "pinyin": "dòu fu zhā gōng chéng",
    "pinyin_key": "D",
    "meaning": "形容质量极其低劣、偷工减料的建筑或工程。",
    "en": "Jerry-built project; shoddy work.",
    "bm": "Projek atau bangunan yang dibina secara sambil lewa dan tidak berkualiti."
  },
  {
    "id": 16,
    "text": "读书破万卷",
    "pinyin": "dú shū pò wàn juàn",
    "pinyin_key": "D",
    "meaning": "形容读书极多，学识非常渊博。",
    "en": "Have read extensively; well-read.",
    "bm": "Mempunyai ilmu pengetahuan yang amat luas hasil daripada banyak membaca."
  },
  {
    "id": 17,
    "text": "对牛弹琴",
    "pinyin": "duì niú tán qín",
    "pinyin_key": "D",
    "meaning": "比喻对不懂道理的人讲道理，白费口舌；也讽刺说话不看对象。",
    "en": "Casting pearls before swine; preaching to the wrong audience.",
    "bm": "Menasihati orang yang tidak mahu mendengar atau tidak faham; seperti mencurahkan air ke daun keladi."
  },
  {
    "id": 18,
    "text": "多事之秋",
    "pinyin": "duō shì zhī qiū",
    "pinyin_key": "D",
    "meaning": "形容事故或事变很多的时期（多指国家或集体）。",
    "en": "A fateful time; an eventful period.",
    "bm": "Zaman atau tempoh masa yang penuh dengan huru-hara atau masalah."
  },
  {
    "id": 19,
    "text": "恶人先告状",
    "pinyin": "è rén xiān gào zhuàng",
    "pinyin_key": "E",
    "meaning": "指坏人或理亏的人抢先去诬告别人，企图恶人先占便宜。",
    "en": "The guilty party files the suit first; the rogue complains first.",
    "bm": "Orang yang bersalah mencuri kesemptan untuk menuduh orang lain terlebih dahulu."
  },
  {
    "id": 20,
    "text": "二话不说",
    "pinyin": "èr huà bù shuō",
    "pinyin_key": "E",
    "meaning": "形容非常爽快，没有任何犹豫或废话。",
    "en": "Without a second word; straightforward; immediately.",
    "bm": "Tanpa banyak bicara; terus melakukan sesuatu dengan segera."
  },
  {
    "id": 21,
    "text": "防患于未然",
    "pinyin": "fáng huàn yú wèi rán",
    "pinyin_key": "F",
    "meaning": "在祸患发生之前就采取预防措施。",
    "en": "Prevent trouble before it happens; nip it in the bud.",
    "bm": "Sediakan payung sebelum hujan."
  },
  {
    "id": 22,
    "text": "风马牛不相及",
    "pinyin": "fēng mǎ niú bù xiāng jí",
    "pinyin_key": "F",
    "meaning": "比喻事物之间完全没有任何联系或关系。",
    "en": "Totally unrelated; have absolutely nothing to do with each other.",
    "bm": "Dua perkara yang langsung tidak mempunyai kaitan antara satu sama lain."
  },
  {
    "id": 23,
    "text": "赶鸭子上架",
    "pinyin": "gǎn yā zi shàng jià",
    "pinyin_key": "G",
    "meaning": "比喻强迫别人去做他根本做不来或不愿做的事。",
    "en": "Force someone to do something way beyond their ability.",
    "bm": "Memaksa seseorang melakukan sesuatu yang tidak mampu dilakukannya."
  },
  {
    "id": 24,
    "text": "高不成低不就",
    "pinyin": "gāo bù chéng dī bù jiù",
    "pinyin_key": "G",
    "meaning": "形容找工作或选对象时，条件高的得不到，条件低的又不愿要。",
    "en": "Be fastidious; can't choose between high and low options, ending up with nothing.",
    "bm": "Terlalu memilih hingga akhirnya tidak mendapat apa-apa."
  },
  {
    "id": 25,
    "text": "高标准严要求",
    "pinyin": "gāo biāo zhǔn yán yāo qiú",
    "pinyin_key": "G",
    "meaning": "以极高的规范和严格的条件来要求自己或工作。",
    "en": "High standards and strict requirements.",
    "bm": "Meletakkan piawaian yang tinggi dan syarat yang ketat dalam sesuatu urusan."
  }
];
