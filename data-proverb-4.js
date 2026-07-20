// ==========================================
// 常用谚语150句 分卷4 (S - T)
// ==========================================

const proverbData4 = [
    {
        proverb: "上得山多终遇虎。",
        pinyin: "shàng dé shān duō zhōng yù hǔ",
        defZh: "比喻不走正道、经常铤而走险或坏事做得多的人，终有一天一定会翻车、受到王法惩罚。",
        defEn: "If you climb mountains often enough, you will eventually meet a tiger.",
        defBm: "Sepandai-pandai tupai melompat, akhirnya jatuh ke tanah juga.",
        example: "他常年靠倒买倒卖违禁品谋利，自以为天衣无缝，怎料上得山多终遇虎，昨晚被警方当场逮捕。"
    },
    {
        proverb: "上天无路，入地无门。",
        pinyin: "shàng tiān wú lù ， rù dì wú mén",
        defZh: "形容陷入了走投无路、陷入绝境，没有任何人能施以援手、极其窘迫无助的处境。",
        defEn: "No road to heaven, no door into the earth; in a desperate impasse.",
        defBm: "Bagaikan telur di hujung tanduk (tiada tempat bergantung atau melarikan diri).",
        example: "在荒漠中丢了水源和卫星定位器后，探险队一瞬间陷入了上天无路，入地无门的地步。"
    },
    {
        proverb: "蛇无头而不行，鸟无翅而不飞。",
        pinyin: "shé wú tóu ér bù xíng ， niǎo wú chì ér bù fēi",
        defZh: "比喻一个集体或团队如果失去了强有力的核心领导，就会一盘散沙，完全无法展开任何实际行动。",
        defEn: "A snake cannot crawl without its head, and a bird cannot fly without wings.",
        defBm: "Seperti anak ayam kehilangan ibu (tanpa pemimpin, organisasi akan menjadi kucar-kacir).",
        example: "项目开始三天了，大家还在各说各话，蛇无头而不行，鸟无翅而不飞，我们急需选出一个组长来领队。"
    },
    {
        proverb: "生米煮成熟饭。",
        pinyin: "shēng mǐ zhǔ chéng shú fàn",
        defZh: "比喻事情或结局已经不可逆转地成为无法更改的定局，多含既成事实、无可挽回之意。",
        defEn: "The rice is already cooked; what is done cannot be undone.",
        defBm: "Nasi sudah menjadi bubur (perkara sudah terlambat untuk diubah).",
        example: "既然合同已经签字盖章，生米煮成熟饭，你就不要再为那些细节争执了。"
    },
    {
        proverb: "世上无难事，只怕有心人。",
        pinyin: "shì shàng wú nán shì ， zhǐ pà yǒu xīn rén",
        defZh: "强调只要人能够立定志向、有坚定不移的恒心与意志去克服，世界上就绝对没有任何无法克服的困难。",
        defEn: "Nothing is impossible to a willing heart.",
        defBm: "Di mana ada kemahuan, di situ ada jalan.",
        example: "虽然学好一门外语起初极为艰难，但世上无难事，只怕有心人，只要持之以恒定能大成。"
    },
    {
        proverb: "识时务者为俊杰。",
        pinyin: "shí shí wù zhě wéi jùn jié",
        defZh: "指能够看清客观大趋势、顺应环境、懂得在合适时机调整策略的人，才是真正有才干见识的杰出人才。",
        defEn: "A wise man adapts himself to circumstances.",
        defBm: "Ikut resmi padi, makin berisi makin tunduk (bijak menyesuaikan diri mengikut perkembangan zaman).",
        example: "如今数码转型已经是时代大势，传统的实体老店若想生存，识时务者为俊杰，必须拥抱网店模式。"
    },
    {
        proverb: "失之东隅，收之桑榆。",
        pinyin: "shī zhī dōng yú ， shōu zhī sāng yú",
        defZh: "比喻虽然在某一个地方或时间点遭受到了损失，但最终却在另外一个地方获得了应有的补偿与成功。",
        defEn: "What is lost on the swings is won on the roundabouts.",
        defBm: "Ada hikmah di sebalik musibah (mendapat ganti yang lebih baik selepas kehilangan).",
        example: "虽然他在上个月的演讲赛中失利了，却因此在辩论赛里崭露头角，真是失之东隅，收之桑榆。"
    },
    {
        proverb: "守得云开见月明。",
        pinyin: "shǒu de yún kāi jiàn yuè míng",
        defZh: "形容只要能够咬紧牙关坚持忍耐，艰难和苦难的阴霾终究会散去，重现幸福、成功的美好日子。",
        defEn: "Persevere and you will see the silver lining.",
        defBm: "Habis gelap terbitlah terang (selepas bersusah payah, kebahagiaan akan menjelma).",
        example: "经历了数年的实验失败和冷眼后，他终于攻克了抗癌新药研发，真乃守得云开见月明。"
    },
    {
        proverb: "手无缚鸡之力。",
        pinyin: "shǒu wú fù jī zhī lì",
        defZh: "形容一个人身体素质极其文弱、瘦小，没有任何体力和力量，连捆绑一只鸡的力气都没有。",
        defEn: "So weak that one cannot even bind a chicken.",
        defBm: "Lemah lembut bagai sutera (tidak mempunyai kekuatan fizikal langsung).",
        example: "别看他长得高大，实际上却是个手无缚鸡之力的书呆子，连一桶水都提不起来。"
    },
    {
        proverb: "树大生枝，人大生心。",
        pinyin: "shù dà shēng zhī ， rén dà shēng xīn",
        defZh: "比喻事物在发展、长大和成熟后，必然会产生复杂的变化，也指人长大后心思、私心变多，各有想法。",
        defEn: "As a tree grows big, branches sprout; as a person grows up, individual thoughts multiply.",
        defBm: "Bagai mencurah garam ke laut (anak-anak yang dewasa akan membawa haluan sendiri).",
        example: "孩子们成家立业后都搬出去各过各的，树大生枝，人大生心，这也是无可厚非的事。"
    },
    {
        proverb: "树倒猢狲散。",
        pinyin: "shù dǎo hú sūn sàn",
        defZh: "比喻有财势的带头人一旦垮台倒下，依附、谄媚在他周围捞好处的谄媚之辈便会瞬间四散离去。",
        defEn: "When the tree falls, the monkeys scatter.",
        defBm: "Seperti abu di atas tunggul (para pengikut lari bertempiaran sebaik sahaja ketua kehilangan kuasa).",
        example: "当靠行贿垄断起家的老板被拘留后，那些昔日奉承他的下属瞬间树倒猢狲散。"
    },
    {
        proverb: "树高千丈，叶落归根。",
        pinyin: "shù gāo qiān zhàng ， yè luò guī gēn",
        defZh: "比喻游子长期漂泊在外，年迈时终归要回到家乡故土，也比喻人无论走得多远都不能忘记根本。",
        defEn: "A tree may grow a thousand feet high, but its leaves will eventually return to its roots.",
        defBm: "Setinggi-tinggi terbang bangau, akhirnya hinggap di belakang kerbau juga.",
        example: "在国外定居了大半辈子的李爷爷，临终前嘱咐一定要回槟城老家安葬，树高千丈，叶落归根啊。"
    },
    {
        proverb: "水火不相容。",
        pinyin: "shuǐ huǒ bù xiāng róng",
        defZh: "比喻双方冲突剧烈、矛盾极深，根本无法相互妥协、共存或达成和解。",
        defEn: "As incompatible as water and fire.",
        defBm: "Bagai anjing dengan kucing (perbalahan yang tidak boleh didamaikan).",
        example: "这两个商业巨头在行业标准上的立场水火不相容，谈判很快便破裂了。"
    },
    {
        proverb: "水里水去，火里火去。",
        pinyin: "shuǐ lǐ shuǐ qù ， huǒ lǐ huǒ qù",
        defZh: "形容一个人为了道义、友情或高尚事业，可以赴汤蹈火、不避任何艰险地去冲锋陷阵。",
        defEn: "Go through fire and water; willing to undergo any danger.",
        defBm: "Sanggup meredah lautan api (sedia berkorban apa sahaja demi kesetiaan).",
        example: "他们两个是在战场上建立的情义，那是水里水去，火里火去、同生共死交出来的。"
    },
    {
        proverb: "水银泻地，无孔不入。",
        pinyin: "shuǐ yín xiè dì ， wú kǒng bù rù",
        defZh: "比喻手段或势力无处不在，也形容人非常善于抓住机会、一有漏洞就千方百计钻营进去。",
        defEn: "Like spilled mercury; penetrating everywhere; utilizing every loophole.",
        defBm: "Seperti dakwat tumpah di kertas (merebak dan menusuk ke segenap ruang).",
        example: "那些盗用私人信息的诈骗分子简直是水银泻地，无孔不入，我们必须时刻防范。"
    },
    {
        proverb: "送佛送到西天。",
        pinyin: "sòng fó sòng dào xī tiān",
        defZh: "比喻去帮助别人、做善事就要善始善终，做到底，而不能半途而废、把人丢在半路上。",
        defEn: "If you help someone, help them all the way.",
        defBm: "Alang-alang menyeluk pekasam, biar sampai ke pangkal lengan.",
        example: "既然你已经资助他上了高中，送佛送到西天，就顺便帮他垫付第一学期的大学学费吧。"
    },
    {
        proverb: "踏破铁鞋无觅处，得来全不费工夫。",
        pinyin: "tà pò tiě xié wú mì chù ， dé lái quán bù fèi gōng fū",
        defZh: "形容为了寻找某样东西费尽了九牛二虎之力却一无所获，却在无意间轻松得到了它，惊喜万分。",
        defEn: "Find something by chance after a fruitless search.",
        defBm: "Mendapat rezeki terpijak selepas penat berusaha tanpa hasil.",
        example: "我为了找这本绝版小说跑遍了各大书局，谁知今天在大卫家的书架上直接看到了，真是踏破铁鞋无觅处，得来全不费工夫。"
    },
    {
        proverb: "太公钓鱼，愿者上钩。",
        pinyin: "tài gōng diào yú ， yuàn zhě shàng gōu",
        defZh: "比喻自己把条件摆在明处，不施加任何欺骗和强迫，对方完全是自愿落入圈套、甘愿承受后果。",
        defEn: "Like Jiang Taigong fishing; those who are willing will take the bait.",
        defBm: "Suka sama suka (tindakan sukarela walaupun mengandungi risiko).",
        example: "我买卖字画的价格向来公开，这回是他主动出高价买下，太公钓鱼，愿者上钩，怨不得别人。"
    },
    {
        proverb: "太岁头上动土。",
        pinyin: "tài suì tóu shàng dòng tǔ",
        defZh: "比喻胆大包天地去冒犯和触怒极有势力、强暴、惹不起的厉害人物，必将招致灾祸。",
        defEn: "Beard the lion in his den; dare to provoke a powerful figure.",
        defBm: "Sengaja menjolok sarang tebuan (mencari pasal dengan pihak yang sangat berkuasa).",
        example: "你竟然敢去敲诈当地势力庞大的企业大佬？你这无异于在太岁头上动土。"
    },
    {
        proverb: "贪多嚼不烂。",
        pinyin: "tān duō jiáo bù làn",
        defZh: "比喻学习或做事时贪图数量和规模，却由于精力和条件有限而无法消化和做好，劝人要量力而行。",
        defEn: "Bite off more than one can chew; excess leads to poor results.",
        defBm: "Tamak selalu rugi (melakukan terlalu banyak kerja sehinggakan tiada yang sempurna).",
        example: "你一天报了五个补习班，贪多嚼不烂，还不如专心把一科彻底弄懂。"
    },
    {
        proverb: "螳螂捕蝉，黄雀在后。",
        pinyin: "táng láng bǔ chán ， huáng què zài hòu",
        defZh: "比喻只贪图、聚焦于眼前的蝇头小利和报复，却完全没有防备隐藏在身后的巨大灾祸与危机。",
        defEn: "The mantis stalks the cicada, unaware of the oriole behind; short-sighted.",
        defBm: "Tamak akan umpan, tidak nampak perangkap (hanya melihat keuntungan jangka pendek).",
        example: "他正得意地用不正当手段吞并竞争对手的股份，却不知道自己的公司早被跨国财团暗中收购，真是螳螂捕蝉，黄雀在后。"
    },
    {
        proverb: "天下乌鸦一般黑。",
        pinyin: "tiān xià wū yā yī bān hēi",
        defZh: "比喻各地、各处的坏人或恶势力本质上全是一模一样，没有任何区别（含极度无奈与贬义）。",
        defEn: "Crows are black all over the world; evil forces are the same everywhere.",
        defBm: "Di mana-mana pun bumi dipijak, di situ penjenayah bertindak (kejahatan sama sahaja di mana-mana).",
        example: "你别幻想去另一家地下借贷公司会有好待遇，天下乌鸦一般黑，他们都是高利贷。"
    },
    {
        proverb: "天有不测风云，人有旦夕祸福。",
        pinyin: "tiān yǒu bù cè fēng yún ， rén yǒu dàn xī huò fú",
        defZh: "比喻世事风云变幻，极其难以预测，灾祸和福分可能在极短时间内发生骤变，劝人要保持警惕与大度。",
        defEn: "Storms gather without warning, and misfortunes strike people overnight.",
        defBm: "Malang tidak berbau (musibah dan nasib baik berlaku secara tidak terduga).",
        example: "昨天他还健步如飞，今天却突发重病住院，真是天有不测风云，人有旦夕祸福。"
    },
    {
        proverb: "同声相应，同气相求。",
        pinyin: "tóng shēng xiāng yìng ， tóng qì xiāng qiu",
        defZh: "比喻志趣、理念相投的人必然会互相呼应，自然而然地吸引、结合在一起，情意相通。",
        defEn: "Like attracts like; people of similar tastes gravitate towards each other.",
        defBm: "Bagai pinang dibelah dua (dua pihak yang mempunyai keserasian yang sangat tinggi).",
        example: "在这次环保志愿者营会里，同学们一见如故，迅速打成一片，真乃同声相应，同气相求。"
    },
    {
        proverb: "偷鸡不着蚀把米。",
        pinyin: "tōu jī bù zháo shí bǎ mǐ",
        defZh: "比喻本想通过歪门邪道占便宜、暗算别人，结果便宜没占到，反而白白贴进了自己的本钱，狼狈不堪。",
        defEn: "Try to steal a chicken only to lose the rice; get burnt in a greedy venture.",
        defBm: "Sudah jatuh ditimpa tangga (mahu mengaut untung tetapi menanggung kerugian).",
        example: "他想用盗版软件省钱，结果系统中了勒索病毒，白白花了上千令吉修电脑，真是偷鸡不着蚀把米。"
    }
];
