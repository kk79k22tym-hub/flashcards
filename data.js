const rawDatabase = [
    {
        id: "v_see",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "よく使う動詞",
        english: "see",
        japanese: "見る、会う",
        forms: [
            { label: "原形", formName: "see", example: "I want to see you again.", exampleJa: "またあなたに会いたい。" },
            { label: "三人称単数現在", formName: "sees", example: "He sees her every Sunday.", exampleJa: "彼は毎週日曜日に彼女に会います。" },
            { label: "過去形", formName: "saw", example: "I saw him yesterday.", exampleJa: "昨日彼を見ました。" },
            { label: "過去分詞", formName: "seen", example: "I've seen this movie before.", exampleJa: "この映画は以前見たことがあります。" },
            { label: "ing形", formName: "seeing", example: "I am seeing my doctor tomorrow.", exampleJa: "明日お医者さんに診てもらう予定です。" }
        ],
        changeType: "不規則 A-B-C",
        beginnerTip: "目で見て何かをとらえる時によく使う最も基本的な動詞です。",
        searchKeywords: "see saw seen 見る 会う"
    },
    {
        id: "v_go",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "移動",
        english: "go",
        japanese: "行く",
        forms: [
            { label: "原形", formName: "go", example: "I want to go to Japan.", exampleJa: "日本に行きたいです。" },
            { label: "三人称単数現在", formName: "goes", example: "She goes to school by bus.", exampleJa: "彼女はバスで学校に行きます。" },
            { label: "過去形", formName: "went", example: "I went shopping yesterday.", exampleJa: "昨日買い物に行きました。" },
            { label: "過去分詞", formName: "gone", example: "He has gone to the bank.", exampleJa: "彼は銀行に行ってしまった。" },
            { label: "ing形", formName: "going", example: "I am going home now.", exampleJa: "今、家に帰るところです。" }
        ],
        changeType: "不規則 A-B-C",
        beginnerTip: "ある場所へ移動する時に使う必須動詞です。",
        searchKeywords: "go went gone 行く"
    },
    {
        id: "v_want",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "感情",
        english: "want",
        japanese: "~が欲しい、~したい",
        forms: [
            { label: "原形", formName: "want", example: "I want a new bag.", exampleJa: "新しい鞄が欲しいです。" },
            { label: "三人称単数現在", formName: "wants", example: "He wants to drink water.", exampleJa: "彼は水が飲みたい。" },
            { label: "過去形", formName: "wanted", example: "I wanted to call you.", exampleJa: "あなたに電話したかったのです。" },
            { label: "過去分詞", formName: "wanted", example: "She has wanted this car for years.", exampleJa: "彼女はずっとこの車を欲しがっていた。" },
            { label: "ing形", formName: "wanting", example: "I'm wanting to learn more.", exampleJa: "もっと学びたい気持ちでいっぱいです。" }
        ],
        changeType: "規則変化 (-ed)",
        beginnerTip: "自分の欲求や希望をストレートに伝える表現です。",
        searchKeywords: "want wanted 欲しい"
    },
    {
        id: "v_cut",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "日常生活",
        english: "cut",
        japanese: "切る",
        forms: [
            { label: "原形", formName: "cut", example: "Please cut the paper.", exampleJa: "紙を切ってください。" },
            { label: "三人称単数現在", formName: "cuts", example: "He cuts the cake.", exampleJa: "彼はケーキを切る。" },
            { label: "過去形", formName: "cut", example: "I cut my finger.", exampleJa: "指を切ってしまいました。" },
            { label: "過去分詞", formName: "cut", example: "The tree was cut down.", exampleJa: "その木は切り倒された。" },
            { label: "ing形", formName: "cutting", example: "She is cutting vegetables.", exampleJa: "彼女は野菜を切っています。" }
        ],
        changeType: "不規則 A-A-A",
        beginnerTip: "原形・過去形・過去分詞のすべてが同じ形の単語です。",
        searchKeywords: "cut 切る"
    },
    {
        id: "v_buy",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "買い物",
        english: "buy",
        japanese: "買う",
        forms: [
            { label: "原形", formName: "buy", example: "I want to buy coffee.", exampleJa: "コーヒーを買いたい。" },
            { label: "三人称単数現在", formName: "buys", example: "She buys fresh bread.", exampleJa: "彼女は焼きたてのパンを買う。" },
            { label: "過去形", formName: "bought", example: "I bought a new computer.", exampleJa: "新しいパソコンを買いました。" },
            { label: "過去分詞", formName: "bought", example: "I have bought a ticket.", exampleJa: "すでにチケットを購入しました。" },
            { label: "ing形", formName: "buying", example: "He is buying a gift.", exampleJa: "彼はプレゼントを買っているところです。" }
        ],
        changeType: "不規則 A-B-B",
        beginnerTip: "過去形と過去分詞が bought になるタイプです。",
        searchKeywords: "buy bought 買う"
    },
    {
        id: "v_read",
        type: "word",
        partOfSpeech: ["動詞"],
        category: "学校、勉強",
        english: "read",
        japanese: "読む",
        forms: [
            { label: "原形", formName: "read", example: "I like to read books.", exampleJa: "本を読むのが好きです。" },
            { label: "三人称単数現在", formName: "reads", example: "She reads every night.", exampleJa: "彼女は毎晩本を読む。" },
            { label: "過去形", formName: "read", example: "I read this book yesterday.", exampleJa: "昨日この本を読みました。" },
            { label: "過去分詞", formName: "read", example: "I have read that article.", exampleJa: "その記事はもう読みました。" },
            { label: "ing形", formName: "reading", example: "He is reading a magazine.", exampleJa: "彼は雑誌を読んでいる。" }
        ],
        changeType: "不規則 (同形異音)",
        beginnerTip: "過去形・過去分詞になると発音が「レd」に変わります。",
        searchKeywords: "read 読む"
    },
    {
        id: "adj_good",
        type: "word",
        partOfSpeech: ["形容詞"],
        category: "形容詞・副詞",
        english: "good",
        japanese: "良い、上手な",
        forms: [
            { label: "原級", formName: "good", example: "This restaurant is good.", exampleJa: "このレストランは良いです。" },
            { label: "比較級", formName: "better", example: "This one is better.", exampleJa: "こっちの方が良いです。" },
            { label: "最上級", formName: "best", example: "This is the best restaurant in town.", exampleJa: "これは町で一番良いレストランです。" }
        ],
        changeType: "不規則比較変化",
        beginnerTip: "比較級が better、最上級が best になる不規則変化です。",
        searchKeywords: "good better best 良い"
    },
    {
        id: "adj_small",
        type: "word",
        partOfSpeech: ["形容詞"],
        category: "形容詞・副詞",
        english: "small",
        japanese: "小さい",
        forms: [
            { label: "原級", formName: "small", example: "This room is small.", exampleJa: "この部屋は小さいです。" },
            { label: "比較級", formName: "smaller", example: "This room is smaller than mine.", exampleJa: "この部屋は私の部屋より小さいです。" },
            { label: "最上級", formName: "smallest", example: "This is the smallest room.", exampleJa: "これは一番小さい部屋です。" }
        ],
        changeType: "規則変化 (-er / -est)",
        beginnerTip: "語尾に -er, -est をつける規則的な比較変化です。",
        searchKeywords: "small smaller smallest 小さい"
    },
    {
        id: "n_person",
        type: "word",
        partOfSpeech: ["名詞"],
        category: "人",
        english: "person",
        japanese: "人",
        forms: [
            { label: "単数形", formName: "person", example: "There is only one person.", exampleJa: "人は1人だけいます。" },
            { label: "複数形", formName: "people", example: "Many people like music.", exampleJa: "多くの人が音楽が好きです。" }
        ],
        changeType: "不規則複数形",
        beginnerTip: "複数形が people になる不規則変化の重要な名詞です。",
        searchKeywords: "person people 人"
    },
    {
        id: "exp_going_to",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "be going to + 動詞の原形",
        japanese: "〜するつもり／〜する予定",
        example: "I’m going to study tonight.",
        exampleJa: "今夜勉強するつもりです。",
        beginnerTip: "近い将来の予定や確実にやると決めていることに使います。",
        searchKeywords: "be going to 予定"
    },
    {
        id: "exp_want_to",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "want to + 動詞の原形",
        japanese: "〜したい",
        example: "I want to drink coffee.",
        exampleJa: "コーヒーが飲みたいです。",
        beginnerTip: "自分の希望を伝える定番の型です。",
        searchKeywords: "want to したい"
    },
    {
        id: "exp_have_to",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "have to + 動詞の原形",
        japanese: "〜しなければならない",
        example: "I have to go now.",
        exampleJa: "もう行かなければなりません。",
        beginnerTip: "義務や避けられない状況を表します。",
        searchKeywords: "have to しなければならない"
    },
    {
        id: "exp_ever_past",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "Have you ever + 過去分詞?",
        japanese: "今までに〜したことがありますか？",
        example: "Have you ever been to Tokyo?",
        exampleJa: "東京に行ったことがありますか？",
        beginnerTip: "経験を尋ねる時に使う非常に便利な疑問文の型です。",
        searchKeywords: "Have you ever 経験"
    },
    {
        id: "exp_never_past",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "I’ve never + 過去分詞",
        japanese: "一度も〜したことがありません",
        example: "I’ve never seen this before.",
        exampleJa: "これを一度も見たことがありません。",
        beginnerTip: "自分の経験を否定する時に使います。",
        searchKeywords: "I've never 経験"
    },
    {
        id: "exp_alot_of",
        type: "expression",
        partOfSpeech: ["表現"],
        category: "表現・文の型",
        english: "a lot of",
        japanese: "たくさんの",
        example: "I have a lot of friends.",
        exampleJa: "私にはたくさんの友達がいます。",
        beginnerTip: "数えられる名詞にも数えられない名詞にも使えます。",
        searchKeywords: "a lot of たくさんの"
    }
];