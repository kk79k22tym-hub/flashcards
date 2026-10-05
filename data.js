const rawDatabase = [
  {
    "id": "v_be",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "be",
    "japanese": "〜である／いる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "〜である／いる",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "be",
        "example": "I want to be honest.",
        "exampleJa": "正直でいたいです。"
      },
      {
        "label": "現在形",
        "formName": "am / is / are",
        "example": "She is at home.",
        "exampleJa": "彼女は家にいます。"
      },
      {
        "label": "過去形",
        "formName": "was / were",
        "example": "We were tired yesterday.",
        "exampleJa": "私たちは昨日疲れていました。"
      },
      {
        "label": "過去分詞",
        "formName": "been",
        "example": "I have been busy all day.",
        "exampleJa": "今日はずっと忙しかったです。"
      },
      {
        "label": "ing形",
        "formName": "being",
        "example": "He is being very quiet.",
        "exampleJa": "彼はとても静かにしています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "beginnerTip": "主語や時制によって形が大きく変わる最重要動詞です。",
    "searchKeywords": "be 〜である／いる 〜である／いる 基本動詞"
  },
  {
    "id": "v_have",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "have",
    "japanese": "持っている／ある",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "持っている／ある",
        "category": "基本動詞"
      },
      {
        "pos": "動詞",
        "meaning": "食べる・飲む",
        "category": "基本動詞",
        "example": "Let's have lunch.",
        "exampleJa": "お昼を食べよう。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "have",
        "example": "I have a question.",
        "exampleJa": "質問があります。"
      },
      {
        "label": "三人称単数現在",
        "formName": "has",
        "example": "She has a dog.",
        "exampleJa": "彼女は犬を飼っています。"
      },
      {
        "label": "過去形",
        "formName": "had",
        "example": "I had enough time.",
        "exampleJa": "十分な時間がありました。"
      },
      {
        "label": "過去分詞",
        "formName": "had",
        "example": "I have had this bag for years.",
        "exampleJa": "このバッグを何年も使っています。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "having",
        "example": "We are having lunch.",
        "exampleJa": "私たちは昼食を食べています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-B",
    "beginnerTip": "have to は別の表現カードで学びます。have got との違いは、have got のカードで確認します。",
    "searchKeywords": "have 持っている／ある 持っている／ある 基本動詞"
  },
  {
    "id": "v_do",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "do",
    "japanese": "する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "する",
        "category": "基本動詞"
      },
      {
        "pos": "動詞",
        "meaning": "疑問文・否定文を作る助動詞",
        "category": "基本動詞",
        "example": "Do you like coffee?",
        "exampleJa": "コーヒーは好き？"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "do",
        "example": "I do my homework at night.",
        "exampleJa": "夜に宿題をします。"
      },
      {
        "label": "三人称単数現在",
        "formName": "does",
        "example": "He does the dishes.",
        "exampleJa": "彼は皿洗いをします。"
      },
      {
        "label": "過去形",
        "formName": "did",
        "example": "I did my best.",
        "exampleJa": "ベストを尽くしました。"
      },
      {
        "label": "過去分詞",
        "formName": "done",
        "example": "I have done it already.",
        "exampleJa": "もうそれをやりました。"
      },
      {
        "label": "ing形",
        "formName": "doing",
        "example": "What are you doing?",
        "exampleJa": "何をしているの？"
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "疑問文・否定文を作る助動詞としても非常によく使われます。",
    "searchKeywords": "do する する 基本動詞"
  },
  {
    "id": "v_go",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "go",
    "japanese": "行く",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "行く",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "go",
        "example": "I go there often.",
        "exampleJa": "そこによく行きます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "goes",
        "example": "She goes to work by train.",
        "exampleJa": "彼女は電車で仕事に行きます。"
      },
      {
        "label": "過去形",
        "formName": "went",
        "example": "We went home early.",
        "exampleJa": "私たちは早く家に帰りました。"
      },
      {
        "label": "過去分詞",
        "formName": "gone",
        "example": "He has gone outside.",
        "exampleJa": "彼は外へ行ってしまいました。"
      },
      {
        "label": "ing形",
        "formName": "going",
        "example": "I am going home now.",
        "exampleJa": "今家に帰るところです。"
      }
    ],
    "changeType": "不規則 A-B-C",
    "searchKeywords": "go 行く 行く 移動"
  },
  {
    "id": "v_come",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "come",
    "japanese": "来る",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "来る",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "come",
        "example": "Come here, please.",
        "exampleJa": "ここに来てください。"
      },
      {
        "label": "三人称単数現在",
        "formName": "comes",
        "example": "He comes here every week.",
        "exampleJa": "彼は毎週ここに来ます。"
      },
      {
        "label": "過去形",
        "formName": "came",
        "example": "She came early.",
        "exampleJa": "彼女は早く来ました。"
      },
      {
        "label": "過去分詞",
        "formName": "come",
        "example": "They have come back.",
        "exampleJa": "彼らは戻ってきました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "coming",
        "example": "I am coming now.",
        "exampleJa": "今行きます。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-A",
    "beginnerTip": "話し手か相手のいる場所へ向かう動きに使います。I'm coming. は「（相手のところへ）今行く」の意味です。",
    "searchKeywords": "come 来る 来る 移動"
  },
  {
    "id": "v_get",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "get",
    "japanese": "得る／手に入れる／〜になる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "得る／手に入れる／〜になる",
        "category": "基本動詞"
      },
      {
        "pos": "動詞",
        "meaning": "分かる（I get it.）",
        "category": "理解",
        "example": "I get it.",
        "exampleJa": "分かった。"
      },
      {
        "pos": "動詞",
        "meaning": "着く",
        "category": "移動",
        "example": "I got home at nine.",
        "exampleJa": "9時に家に着きました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "get",
        "example": "I get a lot of messages.",
        "exampleJa": "たくさんメッセージが来ます。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "gets",
        "example": "It gets cold at night.",
        "exampleJa": "夜は寒くなります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "got",
        "example": "I got a new phone.",
        "exampleJa": "新しいスマホを手に入れました。"
      },
      {
        "label": "過去分詞",
        "formName": "gotten",
        "example": "I have gotten better at English.",
        "exampleJa": "英語が上達しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "getting",
        "example": "It is getting late.",
        "exampleJa": "遅い時間になってきました。"
      }
    ],
    "changeType": "不規則 A-B-C（米語）",
    "beginnerTip": "アメリカ英語では過去分詞は基本的に gotten を使います。have got は別の表現カードで扱います。",
    "searchKeywords": "get 得る／手に入れる／〜になる 得る／手に入れる／〜になる 基本動詞"
  },
  {
    "id": "v_make",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "make",
    "japanese": "作る／〜にする",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "作る／〜にする",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "make",
        "example": "I make coffee every morning.",
        "exampleJa": "毎朝コーヒーを作ります。"
      },
      {
        "label": "三人称単数現在",
        "formName": "makes",
        "example": "This music makes me happy.",
        "exampleJa": "この音楽を聴くと幸せな気分になります。"
      },
      {
        "label": "過去形",
        "formName": "made",
        "example": "I made dinner.",
        "exampleJa": "夕食を作りました。"
      },
      {
        "label": "過去分詞",
        "formName": "made",
        "example": "She has made a mistake.",
        "exampleJa": "彼女は間違いをしました。"
      },
      {
        "label": "ing形",
        "formName": "making",
        "example": "He is making lunch.",
        "exampleJa": "彼は昼食を作っています。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "make 作る／〜にする 作る／〜にする 基本動詞"
  },
  {
    "id": "v_take",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "take",
    "japanese": "取る／持っていく／連れていく",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "取る／持っていく／連れていく",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "take",
        "example": "Take this with you.",
        "exampleJa": "これを持っていって。"
      },
      {
        "label": "三人称単数現在",
        "formName": "takes",
        "example": "It takes ten minutes.",
        "exampleJa": "10分かかります。"
      },
      {
        "label": "過去形",
        "formName": "took",
        "example": "I took a taxi.",
        "exampleJa": "タクシーに乗りました。"
      },
      {
        "label": "過去分詞",
        "formName": "taken",
        "example": "I have taken many photos.",
        "exampleJa": "たくさん写真を撮りました。"
      },
      {
        "label": "ing形",
        "formName": "taking",
        "example": "She is taking a shower.",
        "exampleJa": "彼女はシャワーを浴びています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "take は「取る」以外にも、時間・交通・写真など多くの組み合わせで使います。take は話し手から離れる方向へ「持っていく」、bring は話し手・目的地の方向へ「持ってくる」イメージです。",
    "searchKeywords": "take 取る／持っていく／連れていく 取る／持っていく／連れていく 基本動詞",
    "usageTags": [
      "持っていく",
      "移動"
    ]
  },
  {
    "id": "v_give",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "give",
    "japanese": "与える／渡す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "与える／渡す",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "give",
        "example": "Give me a minute.",
        "exampleJa": "1分ください。"
      },
      {
        "label": "三人称単数現在",
        "formName": "gives",
        "example": "She gives good advice.",
        "exampleJa": "彼女は良い助言をくれます。"
      },
      {
        "label": "過去形",
        "formName": "gave",
        "example": "He gave me a gift.",
        "exampleJa": "彼は私にプレゼントをくれました。"
      },
      {
        "label": "過去分詞",
        "formName": "given",
        "example": "I have given him the key.",
        "exampleJa": "彼に鍵を渡しました。"
      },
      {
        "label": "ing形",
        "formName": "giving",
        "example": "They are giving away free samples.",
        "exampleJa": "無料サンプルを配っています。"
      }
    ],
    "changeType": "不規則 A-B-C",
    "searchKeywords": "give 与える／渡す 与える／渡す 基本動詞"
  },
  {
    "id": "v_know",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "know",
    "japanese": "知っている／分かっている",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "知っている／分かっている",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "know",
        "example": "I know the answer.",
        "exampleJa": "答えを知っています。"
      },
      {
        "label": "三人称単数現在",
        "formName": "knows",
        "example": "She knows my name.",
        "exampleJa": "彼女は私の名前を知っています。"
      },
      {
        "label": "過去形",
        "formName": "knew",
        "example": "I knew that already.",
        "exampleJa": "それはすでに知っていました。"
      },
      {
        "label": "過去分詞",
        "formName": "known",
        "example": "I have known her for years.",
        "exampleJa": "彼女とは何年も前からの知り合いです。"
      },
      {
        "label": "ing形",
        "formName": "knowing",
        "example": "Knowing the truth helped me.",
        "exampleJa": "真実を知ったことが助けになりました。"
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "「知る」より「知っている」という状態を表すことが多い動詞です。know は知識として知っていること、understand は内容や気持ちが分かることです。",
    "searchKeywords": "know 知っている／分かっている 知っている／分かっている 基本動詞"
  },
  {
    "id": "v_think",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "思考",
    "english": "think",
    "japanese": "思う／考える",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "思う／考える",
        "category": "思考"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "think",
        "example": "I think you are right.",
        "exampleJa": "あなたが正しいと思います。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "thinks",
        "example": "He thinks too much.",
        "exampleJa": "彼は考えすぎます。"
      },
      {
        "label": "過去形",
        "formName": "thought",
        "example": "I thought it was easy.",
        "exampleJa": "簡単だと思っていました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "thought",
        "example": "I have thought about it.",
        "exampleJa": "それについて考えました。"
      },
      {
        "label": "ing形",
        "formName": "thinking",
        "example": "I am thinking about lunch.",
        "exampleJa": "昼食のことを考えています。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "think 思う／考える 思う／考える 思考",
    "beginnerTip": "think は普通の意見（〜と思う）、believe は信じている・確信に近い気持ち、hope は「そうなってほしい」という願いです。"
  },
  {
    "id": "v_want",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "希望",
    "english": "want",
    "japanese": "欲しい／望む",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "欲しい／望む",
        "category": "希望"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "want",
        "example": "I want a new bag.",
        "exampleJa": "新しいバッグが欲しいです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "wants",
        "example": "She wants more time.",
        "exampleJa": "彼女はもっと時間が欲しいです。"
      },
      {
        "label": "過去形",
        "formName": "wanted",
        "example": "I wanted that jacket.",
        "exampleJa": "あのジャケットが欲しかったです。"
      },
      {
        "label": "過去分詞",
        "formName": "wanted",
        "example": "I have always wanted this.",
        "exampleJa": "ずっとこれが欲しかったです。"
      },
      {
        "label": "ing形",
        "formName": "wanting",
        "example": "Wanting more is natural.",
        "exampleJa": "もっと欲しいと思うのは自然です。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "want to + 動詞（原形）は別の表現カードで学びます。",
    "searchKeywords": "want 欲しい／望む 欲しい／望む 希望"
  },
  {
    "id": "v_need",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "必要",
    "english": "need",
    "japanese": "必要とする／必要／必要なもの",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "必要とする",
        "category": "必要"
      },
      {
        "pos": "名詞",
        "meaning": "必要／必要なもの",
        "category": "必要",
        "example": "There is no need to hurry.",
        "exampleJa": "急ぐ必要はありません。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "need",
        "example": "I need some water.",
        "exampleJa": "水が必要です。"
      },
      {
        "label": "三人称単数現在",
        "formName": "needs",
        "example": "This needs more time.",
        "exampleJa": "これにはもっと時間が必要です。"
      },
      {
        "label": "過去形",
        "formName": "needed",
        "example": "I needed some help.",
        "exampleJa": "助けが必要でした。"
      },
      {
        "label": "過去分詞",
        "formName": "needed",
        "example": "We have needed this for a long time.",
        "exampleJa": "長い間これが必要でした。"
      },
      {
        "label": "ing形",
        "formName": "needing",
        "example": "Needing help is normal.",
        "exampleJa": "助けを必要とするのは普通のことです。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "need to + 動詞（原形）は別の表現カードで学びます。",
    "searchKeywords": "need 必要とする／必要／必要なもの 必要とする 必要／必要なもの 必要"
  },
  {
    "id": "v_like",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "前置詞"
    ],
    "category": "感情",
    "english": "like",
    "japanese": "好きである／好む／〜のような",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "好きである／好む",
        "category": "感情"
      },
      {
        "pos": "前置詞",
        "meaning": "〜のような",
        "category": "比較",
        "example": "It looks like rain.",
        "exampleJa": "雨が降りそうです。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "like",
        "example": "I like this song.",
        "exampleJa": "この曲が好きです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "likes",
        "example": "He likes cats.",
        "exampleJa": "彼は猫が好きです。"
      },
      {
        "label": "過去形",
        "formName": "liked",
        "example": "I liked the movie.",
        "exampleJa": "その映画が気に入りました。"
      },
      {
        "label": "過去分詞",
        "formName": "liked",
        "example": "I have always liked this place.",
        "exampleJa": "ずっとこの場所が好きです。"
      },
      {
        "label": "ing形",
        "formName": "liking",
        "example": "There is nothing wrong with liking it.",
        "exampleJa": "それを好きでも何も悪くありません。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "「好き」の動詞と「〜のような」の前置詞は意味が大きく違います。会話では I'm liking this. のように「〜している形」で言うこともあります。like は「好き」、love は「大好き」でより強い気持ちです。",
    "searchKeywords": "like 好きである／好む／〜のような 好きである／好む 〜のような 感情"
  },
  {
    "id": "v_love",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "感情",
    "english": "love",
    "japanese": "大好きだ／愛する／愛／愛情",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "大好きだ／愛する",
        "category": "感情"
      },
      {
        "pos": "名詞",
        "meaning": "愛／愛情",
        "category": "感情",
        "example": "She has a lot of love for her family.",
        "exampleJa": "彼女は家族への愛情が深いです。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "love",
        "example": "I love this place.",
        "exampleJa": "この場所が大好きです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "loves",
        "example": "She loves animals.",
        "exampleJa": "彼女は動物が大好きです。"
      },
      {
        "label": "過去形",
        "formName": "loved",
        "example": "I loved that book.",
        "exampleJa": "その本が大好きでした。"
      },
      {
        "label": "過去分詞",
        "formName": "loved",
        "example": "He has loved music since childhood.",
        "exampleJa": "彼は子どもの頃から音楽を愛しています。"
      },
      {
        "label": "ing形",
        "formName": "loving",
        "example": "Loving someone can be difficult.",
        "exampleJa": "誰かを愛することは難しいこともあります。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "love 大好き／愛する／愛／愛情 大好き／愛する 愛／愛情 感情",
    "beginnerTip": "love は like より強い「大好き」です。会話では物や食べ物にもよく使います（I love this song.）。"
  },
  {
    "id": "v_see",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "知覚",
    "english": "see",
    "japanese": "見る／会う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "見る／会う",
        "category": "知覚"
      },
      {
        "pos": "動詞",
        "meaning": "分かる（I see.）",
        "category": "理解",
        "example": "Oh, I see.",
        "exampleJa": "ああ、なるほど。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "see",
        "example": "I can see the mountains.",
        "exampleJa": "山が見えます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "sees",
        "example": "She sees her friend every week.",
        "exampleJa": "彼女は毎週友達に会います。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "saw",
        "example": "I saw him yesterday.",
        "exampleJa": "昨日彼を見ました。"
      },
      {
        "label": "過去分詞",
        "formName": "seen",
        "example": "I have seen this movie.",
        "exampleJa": "この映画を見たことがあります。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "seeing",
        "example": "I am seeing my friend tomorrow.",
        "exampleJa": "明日友達に会う予定です。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "see は「自然に目に入る」、look は「意識して目を向ける」、watch は「動きのあるものをしばらく見る」が基本です。",
    "searchKeywords": "see 見る／会う 見る／会う 知覚",
    "usageTags": [
      "自然に目に入る",
      "知覚"
    ]
  },
  {
    "id": "v_look",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "知覚",
    "english": "look",
    "japanese": "見る／目を向ける／〜に見える／見た目／表情",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "見る／目を向ける",
        "category": "知覚"
      },
      {
        "pos": "動詞",
        "meaning": "〜に見える",
        "category": "知覚",
        "example": "She looks happy.",
        "exampleJa": "彼女は幸せそうに見えます。"
      },
      {
        "pos": "名詞",
        "meaning": "見た目／表情",
        "category": "外見",
        "example": "I like this look.",
        "exampleJa": "この見た目が好きです。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "look",
        "example": "Look at this.",
        "exampleJa": "これを見て。"
      },
      {
        "label": "三人称単数現在",
        "formName": "looks",
        "example": "She looks happy.",
        "exampleJa": "彼女は幸せそうに見えます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "looked",
        "example": "I looked outside.",
        "exampleJa": "外を見ました。"
      },
      {
        "label": "過去分詞",
        "formName": "looked",
        "example": "I have looked everywhere.",
        "exampleJa": "あちこち探しました。"
      },
      {
        "label": "ing形",
        "formName": "looking",
        "example": "What are you looking at?",
        "exampleJa": "何を見ているの？"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "look 見る／目を向ける／見た目／表情 見る／目を向ける 見た目／表情 知覚 〜に見える",
    "usageTags": [
      "目を向ける",
      "見た目"
    ],
    "beginnerTip": "look は意識して目を向ける動作です。see は自然に目に入る、watch は動きを追って見るときに使います。"
  },
  {
    "id": "v_watch",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "知覚",
    "english": "watch",
    "japanese": "じっと見る／視聴する／腕時計",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "じっと見る／視聴する",
        "category": "知覚"
      },
      {
        "pos": "名詞",
        "meaning": "腕時計",
        "category": "持ち物",
        "example": "My watch stopped.",
        "exampleJa": "腕時計が止まりました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "watch",
        "example": "I watch videos at night.",
        "exampleJa": "夜に動画を見ます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "watches",
        "example": "He watches TV after dinner.",
        "exampleJa": "彼は夕食後にテレビを見ます。"
      },
      {
        "label": "過去形",
        "formName": "watched",
        "example": "We watched the game.",
        "exampleJa": "試合を見ました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "watched",
        "example": "I have watched it twice.",
        "exampleJa": "それを2回見ました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "watching",
        "example": "She is watching the kids.",
        "exampleJa": "彼女は子どもたちを見ています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "watch じっと見る／視聴する／腕時計 じっと見る／視聴する 腕時計 知覚",
    "usageTags": [
      "動きを見る",
      "視聴"
    ],
    "beginnerTip": "watch はテレビ・動画・試合など、動くものをある程度続けて見るときに使います。see は自然に目に入る、look は目を向ける動作です。"
  },
  {
    "id": "v_hear",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "知覚",
    "english": "hear",
    "japanese": "聞こえる／耳にする",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "聞こえる／耳にする",
        "category": "知覚"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "hear",
        "example": "I can hear music.",
        "exampleJa": "音楽が聞こえます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "hears",
        "example": "She hears everything.",
        "exampleJa": "彼女には全部聞こえます。"
      },
      {
        "label": "過去形",
        "formName": "heard",
        "example": "I heard a strange noise.",
        "exampleJa": "変な音を聞きました。"
      },
      {
        "label": "過去分詞",
        "formName": "heard",
        "example": "I have heard that story.",
        "exampleJa": "その話は聞いたことがあります。"
      },
      {
        "label": "ing形",
        "formName": "hearing",
        "example": "Hearing your voice made me happy.",
        "exampleJa": "あなたの声を聞いて嬉しくなりました。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "beginnerTip": "hear は音が自然に耳に入ること、listen は意識して耳を傾けることです。",
    "searchKeywords": "hear 聞こえる／耳にする 聞こえる／耳にする 知覚",
    "usageTags": [
      "自然に聞こえる",
      "知覚"
    ]
  },
  {
    "id": "v_listen",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "知覚",
    "english": "listen",
    "japanese": "聞く／耳を傾ける",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "聞く／耳を傾ける",
        "category": "知覚"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "listen",
        "example": "Listen to me.",
        "exampleJa": "私の話を聞いて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "listens",
        "example": "He listens carefully.",
        "exampleJa": "彼は注意深く聞きます。"
      },
      {
        "label": "過去形",
        "formName": "listened",
        "example": "I listened to the song.",
        "exampleJa": "その曲を聴きました。"
      },
      {
        "label": "過去分詞",
        "formName": "listened",
        "example": "I have listened to it many times.",
        "exampleJa": "何度もそれを聴きました。"
      },
      {
        "label": "ing形",
        "formName": "listening",
        "example": "I am listening to music.",
        "exampleJa": "音楽を聴いています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "listen は注意して聞く動作です。対象を置くときは通常 listen to を使います。hear は自然に聞こえることです。",
    "searchKeywords": "listen 聞く／耳を傾ける 聞く／耳を傾ける 知覚",
    "usageTags": [
      "意識して聞く",
      "会話・音楽"
    ]
  },
  {
    "id": "v_say",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "say",
    "japanese": "言う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "言う",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "say",
        "example": "Say it again.",
        "exampleJa": "もう一度言って。"
      },
      {
        "label": "三人称単数現在",
        "formName": "says",
        "example": "She says hello every morning.",
        "exampleJa": "彼女は毎朝挨拶します。"
      },
      {
        "label": "過去形",
        "formName": "said",
        "example": "He said no.",
        "exampleJa": "彼は嫌だと言いました。"
      },
      {
        "label": "過去分詞",
        "formName": "said",
        "example": "I have said enough.",
        "exampleJa": "もう十分言いました。"
      },
      {
        "label": "ing形",
        "formName": "saying",
        "example": "What are you saying?",
        "exampleJa": "何を言ってるの？"
      }
    ],
    "changeType": "不規則 A-B-B",
    "beginnerTip": "say は「言った内容」に、tell は「誰かに伝える」ことに焦点があります。speak は言語ややや改まった発話、talk は会話に使います。",
    "searchKeywords": "say 言う 言う 会話",
    "usageTags": [
      "言う内容",
      "発言"
    ]
  },
  {
    "id": "v_tell",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "tell",
    "japanese": "伝える／教える",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "伝える／教える",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "tell",
        "example": "Tell me the truth.",
        "exampleJa": "本当のことを教えて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "tells",
        "example": "He tells funny stories.",
        "exampleJa": "彼は面白い話をします。"
      },
      {
        "label": "過去形",
        "formName": "told",
        "example": "She told me everything.",
        "exampleJa": "彼女は全部話してくれました。"
      },
      {
        "label": "過去分詞",
        "formName": "told",
        "example": "I have told you before.",
        "exampleJa": "前にも言いました。"
      },
      {
        "label": "ing形",
        "formName": "telling",
        "example": "I am telling the truth.",
        "exampleJa": "本当のことを言っています。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "tell 伝える／教える 伝える／教える 会話",
    "usageTags": [
      "人に伝える",
      "情報"
    ],
    "beginnerTip": "tell は通常「人＋内容」の形で、誰かに伝えるときに使います。say は発言内容そのものに重点があります。"
  },
  {
    "id": "v_speak",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "speak",
    "japanese": "話す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "話す",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "speak",
        "example": "I speak English with my friends.",
        "exampleJa": "友達とは英語で話します。"
      },
      {
        "label": "三人称単数現在",
        "formName": "speaks",
        "example": "She speaks Japanese.",
        "exampleJa": "彼女は日本語を話します。"
      },
      {
        "label": "過去形",
        "formName": "spoke",
        "example": "We spoke yesterday.",
        "exampleJa": "昨日話しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "spoken",
        "example": "I have spoken to him.",
        "exampleJa": "彼と話しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "speaking",
        "example": "Who is speaking?",
        "exampleJa": "誰が話しているの？",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "言語を話すときや、やや改まった「話す」で使います。talk は相手との会話を表しやすい動詞です。",
    "searchKeywords": "speak 話す 話す 会話",
    "usageTags": [
      "言語",
      "やや改まった会話"
    ]
  },
  {
    "id": "v_talk",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "会話",
    "english": "talk",
    "japanese": "話す／会話する／話／会話",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "話す／会話する",
        "category": "会話"
      },
      {
        "pos": "名詞",
        "meaning": "話／会話",
        "category": "会話",
        "example": "We had a long talk.",
        "exampleJa": "私たちは長く話をしました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "talk",
        "example": "Can we talk?",
        "exampleJa": "話せる？",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "talks",
        "example": "He talks a lot.",
        "exampleJa": "彼はよく話します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "talked",
        "example": "We talked for hours.",
        "exampleJa": "何時間も話しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "talked",
        "example": "I have talked to her.",
        "exampleJa": "彼女と話しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "talking",
        "example": "They are talking outside.",
        "exampleJa": "彼らは外で話しています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "talk 話す／会話する／話／会話 話す／会話する 話／会話 会話",
    "usageTags": [
      "会話",
      "やり取り"
    ],
    "beginnerTip": "talk は相手と会話するイメージです。speak は言語を話すときや、やや改まった「話す」に使います。"
  },
  {
    "id": "v_ask",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "ask",
    "japanese": "尋ねる／頼む",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "尋ねる／頼む",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "ask",
        "example": "Ask me anything.",
        "exampleJa": "何でも聞いて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "asks",
        "example": "She asks good questions.",
        "exampleJa": "彼女は良い質問をします。"
      },
      {
        "label": "過去形",
        "formName": "asked",
        "example": "I asked him his name.",
        "exampleJa": "彼に名前を尋ねました。"
      },
      {
        "label": "過去分詞",
        "formName": "asked",
        "example": "I've asked that before.",
        "exampleJa": "それは前にも聞いたことがあります。"
      },
      {
        "label": "ing形",
        "formName": "asking",
        "example": "I am asking for help.",
        "exampleJa": "助けを求めています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "ask 尋ねる／頼む 尋ねる／頼む 会話"
  },
  {
    "id": "v_find",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "発見",
    "english": "find",
    "japanese": "見つける／分かる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "見つける／分かる",
        "category": "発見"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "find",
        "example": "I cannot find my key.",
        "exampleJa": "鍵が見つかりません。"
      },
      {
        "label": "三人称単数現在",
        "formName": "finds",
        "example": "She finds good restaurants.",
        "exampleJa": "彼女は良いレストランを見つけます。"
      },
      {
        "label": "過去形",
        "formName": "found",
        "example": "I found my phone.",
        "exampleJa": "スマホを見つけました。"
      },
      {
        "label": "過去分詞",
        "formName": "found",
        "example": "We have found the answer.",
        "exampleJa": "答えを見つけました。"
      },
      {
        "label": "ing形",
        "formName": "finding",
        "example": "Finding it was difficult.",
        "exampleJa": "それを見つけるのは難しかったです。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "find 見つける／分かる 見つける／分かる 発見",
    "beginnerTip": "find は探した結果「見つける」。探している最中の動作は look for です。"
  },
  {
    "id": "v_use",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "日常生活",
    "english": "use",
    "japanese": "使う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "使う",
        "category": "日常生活"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "use",
        "example": "I use this app every day.",
        "exampleJa": "このアプリを毎日使います。"
      },
      {
        "label": "三人称単数現在",
        "formName": "uses",
        "example": "She uses a laptop.",
        "exampleJa": "彼女はノートパソコンを使います。"
      },
      {
        "label": "過去形",
        "formName": "used",
        "example": "I used your pen.",
        "exampleJa": "あなたのペンを使いました。"
      },
      {
        "label": "過去分詞",
        "formName": "used",
        "example": "I have used this before.",
        "exampleJa": "これは以前使ったことがあります。"
      },
      {
        "label": "ing形",
        "formName": "using",
        "example": "He is using my phone.",
        "exampleJa": "彼は私のスマホを使っています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "use 使う 使う 日常生活"
  },
  {
    "id": "v_work",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "仕事",
    "english": "work",
    "japanese": "働く／機能する／仕事／作業",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "働く／機能する",
        "category": "仕事"
      },
      {
        "pos": "名詞",
        "meaning": "仕事／作業",
        "category": "仕事",
        "example": "I have a lot of work today.",
        "exampleJa": "今日は仕事がたくさんあります。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "work",
        "example": "I work from home.",
        "exampleJa": "在宅で働いています。"
      },
      {
        "label": "三人称単数現在",
        "formName": "works",
        "example": "This button works.",
        "exampleJa": "このボタンは動きます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "worked",
        "example": "I worked yesterday.",
        "exampleJa": "昨日働きました。"
      },
      {
        "label": "過去分詞",
        "formName": "worked",
        "example": "I have worked here for a year.",
        "exampleJa": "ここで1年間働いています。"
      },
      {
        "label": "ing形",
        "formName": "working",
        "example": "I am working now.",
        "exampleJa": "今仕事中です。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "work 働く／機能する／仕事／作業 働く／機能する 仕事／作業 仕事"
  },
  {
    "id": "v_live",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "生活",
    "english": "live",
    "japanese": "住む／生きる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "住む／生きる",
        "category": "生活"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "live",
        "example": "I live in Japan.",
        "exampleJa": "日本に住んでいます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "lives",
        "example": "She lives alone.",
        "exampleJa": "彼女は一人暮らしです。"
      },
      {
        "label": "過去形",
        "formName": "lived",
        "example": "I lived there before.",
        "exampleJa": "以前そこに住んでいました。"
      },
      {
        "label": "過去分詞",
        "formName": "lived",
        "example": "I have lived here for years.",
        "exampleJa": "ここに何年も住んでいます。"
      },
      {
        "label": "ing形",
        "formName": "living",
        "example": "He is living in Canada now.",
        "exampleJa": "彼は今カナダに住んでいます。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "live 住む／生きる 住む／生きる 生活",
    "beginnerTip": "live は住んでいること。stay は一時的に泊まる・とどまることです。"
  },
  {
    "id": "v_eat",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "食事",
    "english": "eat",
    "japanese": "食べる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "食べる",
        "category": "食事"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "eat",
        "example": "I eat breakfast at home.",
        "exampleJa": "家で朝食を食べます。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "eats",
        "example": "He eats quickly.",
        "exampleJa": "彼は食べるのが速いです。"
      },
      {
        "label": "過去形",
        "formName": "ate",
        "example": "I ate too much.",
        "exampleJa": "食べすぎました。"
      },
      {
        "label": "過去分詞",
        "formName": "eaten",
        "example": "I have eaten already.",
        "exampleJa": "もう食べました。"
      },
      {
        "label": "ing形",
        "formName": "eating",
        "example": "We are eating now.",
        "exampleJa": "今食べています。"
      }
    ],
    "changeType": "不規則 A-B-C",
    "searchKeywords": "eat 食べる 食べる 食事"
  },
  {
    "id": "v_drink",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "食事",
    "english": "drink",
    "japanese": "飲む／飲み物",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "飲む",
        "category": "食事"
      },
      {
        "pos": "名詞",
        "meaning": "飲み物",
        "category": "食事",
        "example": "Would you like a drink?",
        "exampleJa": "飲み物はいかがですか？"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "drink",
        "example": "I drink water every morning.",
        "exampleJa": "毎朝水を飲みます。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "drinks",
        "example": "She drinks coffee.",
        "exampleJa": "彼女はコーヒーを飲みます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "drank",
        "example": "I drank some tea.",
        "exampleJa": "お茶を飲みました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "drunk",
        "example": "I have drunk enough water.",
        "exampleJa": "十分水を飲みました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "drinking",
        "example": "He is drinking juice.",
        "exampleJa": "彼はジュースを飲んでいます。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-C",
    "searchKeywords": "drink 飲む／飲み物 飲む 飲み物 食事"
  },
  {
    "id": "v_buy",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "買い物",
    "english": "buy",
    "japanese": "買う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "買う",
        "category": "買い物"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "buy",
        "example": "I buy groceries here.",
        "exampleJa": "ここで食料品を買います。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "buys",
        "example": "She buys fresh bread.",
        "exampleJa": "彼女は新鮮なパンを買います。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "bought",
        "example": "I bought a ticket.",
        "exampleJa": "チケットを買いました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "bought",
        "example": "I have bought everything.",
        "exampleJa": "必要なものは全部買いました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "buying",
        "example": "He is buying a gift.",
        "exampleJa": "彼はプレゼントを買っています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "buy 買う 買う 買い物"
  },
  {
    "id": "v_pay",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "買い物",
    "english": "pay",
    "japanese": "支払う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "支払う",
        "category": "買い物"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "pay",
        "example": "Can I pay by card?",
        "exampleJa": "カードで払えますか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "pays",
        "example": "He pays the bill.",
        "exampleJa": "彼が会計を払います。"
      },
      {
        "label": "過去形",
        "formName": "paid",
        "example": "I paid in cash.",
        "exampleJa": "現金で払いました。"
      },
      {
        "label": "過去分詞",
        "formName": "paid",
        "example": "I have already paid.",
        "exampleJa": "もう支払いました。"
      },
      {
        "label": "ing形",
        "formName": "paying",
        "example": "She is paying now.",
        "exampleJa": "彼女は今支払っています。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "pay 支払う 支払う 買い物"
  },
  {
    "id": "v_wait",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "日常生活",
    "english": "wait",
    "japanese": "待つ",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "待つ",
        "category": "日常生活"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "wait",
        "example": "Wait here, please.",
        "exampleJa": "ここで待ってください。"
      },
      {
        "label": "三人称単数現在",
        "formName": "waits",
        "example": "She waits for the bus.",
        "exampleJa": "彼女はバスを待ちます。"
      },
      {
        "label": "過去形",
        "formName": "waited",
        "example": "I waited for an hour.",
        "exampleJa": "1時間待ちました。"
      },
      {
        "label": "過去分詞",
        "formName": "waited",
        "example": "We have waited long enough.",
        "exampleJa": "もう十分待ちました。"
      },
      {
        "label": "ing形",
        "formName": "waiting",
        "example": "I am waiting outside.",
        "exampleJa": "外で待っています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "人や物を待つときは wait for をよく使います。",
    "searchKeywords": "wait 待つ 待つ 日常生活"
  },
  {
    "id": "v_help",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "人間関係",
    "english": "help",
    "japanese": "助ける／手伝う／助け／手伝い",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "助ける／手伝う",
        "category": "人間関係"
      },
      {
        "pos": "名詞",
        "meaning": "助け／手伝い",
        "category": "人間関係",
        "example": "I need your help.",
        "exampleJa": "あなたの助けが必要です。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "help",
        "example": "Can you help me?",
        "exampleJa": "手伝ってくれる？"
      },
      {
        "label": "三人称単数現在",
        "formName": "helps",
        "example": "This helps a lot.",
        "exampleJa": "これはとても役立ちます。"
      },
      {
        "label": "過去形",
        "formName": "helped",
        "example": "She helped me yesterday.",
        "exampleJa": "彼女は昨日手伝ってくれました。"
      },
      {
        "label": "過去分詞",
        "formName": "helped",
        "example": "You have helped me a lot.",
        "exampleJa": "たくさん助けてもらいました。"
      },
      {
        "label": "ing形",
        "formName": "helping",
        "example": "Thanks for helping me.",
        "exampleJa": "手伝ってくれてありがとう。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "help 助ける／手伝う／助け／手伝い 助ける／手伝う 助け／手伝い 人間関係"
  },
  {
    "id": "v_try",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "行動",
    "english": "try",
    "japanese": "試す／やってみる／試み／挑戦",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "試す／やってみる",
        "category": "行動"
      },
      {
        "pos": "名詞",
        "meaning": "試み／挑戦",
        "category": "行動",
        "example": "Give it a try.",
        "exampleJa": "試してみて。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "try",
        "example": "Try this one.",
        "exampleJa": "これを試してみて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "tries",
        "example": "She tries her best.",
        "exampleJa": "彼女はベストを尽くします。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "tried",
        "example": "I tried again.",
        "exampleJa": "もう一度やってみました。"
      },
      {
        "label": "過去分詞",
        "formName": "tried",
        "example": "I have tried that before.",
        "exampleJa": "それは前に試したことがあります。"
      },
      {
        "label": "ing形",
        "formName": "trying",
        "example": "I am trying to understand.",
        "exampleJa": "理解しようとしています。"
      }
    ],
    "changeType": "規則変化 (y→ied)",
    "searchKeywords": "try 試す／やってみる／試み／挑戦 試す／やってみる 試み／挑戦 行動"
  },
  {
    "id": "v_feel",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "feel",
    "japanese": "感じる／〜な気がする",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "感じる／〜な気がする",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "feel",
        "example": "I feel better today.",
        "exampleJa": "今日は気分が良いです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "feels",
        "example": "It feels strange.",
        "exampleJa": "変な感じがします。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "felt",
        "example": "I felt tired.",
        "exampleJa": "疲れていると感じました。"
      },
      {
        "label": "過去分詞",
        "formName": "felt",
        "example": "I have felt this before.",
        "exampleJa": "前にもこう感じたことがあります。"
      },
      {
        "label": "ing形",
        "formName": "feeling",
        "example": "How are you feeling?",
        "exampleJa": "調子はどう？",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-B",
    "searchKeywords": "feel 感じる／〜な気がする 感じる／〜な気がする 感情"
  },
  {
    "id": "v_remember",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "記憶",
    "english": "remember",
    "japanese": "覚えている／思い出す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "覚えている／思い出す",
        "category": "記憶"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "remember",
        "example": "I remember her name.",
        "exampleJa": "彼女の名前を覚えています。"
      },
      {
        "label": "三人称単数現在",
        "formName": "remembers",
        "example": "He remembers everything.",
        "exampleJa": "彼は全部覚えています。"
      },
      {
        "label": "過去形",
        "formName": "remembered",
        "example": "I remembered the key.",
        "exampleJa": "鍵のことを思い出しました。"
      },
      {
        "label": "過去分詞",
        "formName": "remembered",
        "example": "I have just remembered her name.",
        "exampleJa": "彼女の名前をたった今思い出しました。"
      },
      {
        "label": "ing形",
        "formName": "remembering",
        "example": "I am remembering more now.",
        "exampleJa": "今少しずつ思い出しています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "remember 覚えている／思い出す 覚えている／思い出す 記憶"
  },
  {
    "id": "v_forget",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "記憶",
    "english": "forget",
    "japanese": "忘れる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "忘れる",
        "category": "記憶"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "forget",
        "example": "Do not forget your bag.",
        "exampleJa": "バッグを忘れないで。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "forgets",
        "example": "He always forgets names.",
        "exampleJa": "彼はいつも名前を忘れます。"
      },
      {
        "label": "過去形",
        "formName": "forgot",
        "example": "I forgot my umbrella.",
        "exampleJa": "傘を忘れました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "forgotten",
        "example": "I have forgotten the address.",
        "exampleJa": "住所を忘れてしまいました。"
      },
      {
        "label": "ing形",
        "formName": "forgetting",
        "example": "I keep forgetting his name.",
        "exampleJa": "彼の名前を何度も忘れてしまいます。"
      }
    ],
    "changeType": "不規則 A-B-C",
    "searchKeywords": "forget 忘れる 忘れる 記憶"
  },
  {
    "id": "v_read",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "学習",
    "english": "read",
    "japanese": "読む",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "読む",
        "category": "学習"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "read",
        "example": "I read every night.",
        "exampleJa": "毎晩読みます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "reads",
        "example": "She reads comics in English.",
        "exampleJa": "彼女は英語で漫画を読みます。"
      },
      {
        "label": "過去形",
        "formName": "read",
        "speechText": "red",
        "example": "I read it yesterday.",
        "exampleJa": "昨日それを読みました。"
      },
      {
        "label": "過去分詞",
        "formName": "read",
        "speechText": "red",
        "example": "I have read that book.",
        "exampleJa": "その本を読んだことがあります。"
      },
      {
        "label": "ing形",
        "formName": "reading",
        "example": "I am reading now.",
        "exampleJa": "今読んでいます。"
      }
    ],
    "changeType": "不規則（綴りは同じ・発音が変わる）",
    "beginnerTip": "過去形・過去分詞の read は綴りは同じですが発音が変わります。",
    "searchKeywords": "read 読む 読む 学習"
  },
  {
    "id": "n_person",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人",
    "english": "person",
    "japanese": "人",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "人",
        "category": "人"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "person",
        "example": "There is one person outside.",
        "exampleJa": "外に1人います。"
      },
      {
        "label": "複数形",
        "formName": "people",
        "example": "Many people are here.",
        "exampleJa": "たくさんの人がここにいます。"
      }
    ],
    "changeType": "不規則複数形",
    "beginnerTip": "複数形は persons ではなく、通常 people を使います。",
    "searchKeywords": "person 人 人 人"
  },
  {
    "id": "n_time",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "時間",
    "english": "time",
    "japanese": "時間／回／機会",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "時間",
        "category": "時間"
      },
      {
        "pos": "名詞",
        "meaning": "回／機会",
        "category": "時間",
        "example": "I have been there three times.",
        "exampleJa": "そこへ3回行ったことがあります。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "time",
        "example": "I do not have much time.",
        "exampleJa": "あまり時間がありません。"
      },
      {
        "label": "複数形",
        "formName": "times",
        "example": "We met three times.",
        "exampleJa": "私たちは3回会いました。"
      }
    ],
    "changeType": "意味によって数え方が変わる",
    "beginnerTip": "「時間」の time は数えないことが多く、「〜回」の意味では times と数えます。",
    "searchKeywords": "time 時間／回／機会 時間 回／機会 時間"
  },
  {
    "id": "n_day",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "時間",
    "english": "day",
    "japanese": "日／1日",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "日／1日",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "day",
        "example": "It was a long day.",
        "exampleJa": "長い1日でした。"
      },
      {
        "label": "複数形",
        "formName": "days",
        "example": "I stayed for three days.",
        "exampleJa": "3日間滞在しました。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "day 日／1日 日／1日 時間"
  },
  {
    "id": "n_year",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "時間",
    "english": "year",
    "japanese": "年／1年間",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "年／1年間",
        "category": "時間"
      },
      {
        "pos": "名詞",
        "meaning": "〜歳（years old）",
        "category": "時間",
        "example": "My brother is ten years old.",
        "exampleJa": "弟は10歳です。"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "year",
        "example": "This year is busy.",
        "exampleJa": "今年は忙しいです。"
      },
      {
        "label": "複数形",
        "formName": "years",
        "example": "I lived there for two years.",
        "exampleJa": "そこに2年間住んでいました。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "year 年／1年間 年／1年間 時間"
  },
  {
    "id": "n_place",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "場所",
    "english": "place",
    "japanese": "場所",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "場所",
        "category": "場所"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "place",
        "example": "This is a nice place.",
        "exampleJa": "ここは素敵な場所です。"
      },
      {
        "label": "複数形",
        "formName": "places",
        "example": "I want to visit many places.",
        "exampleJa": "いろいろな場所を訪れたいです。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "place 場所 場所 場所"
  },
  {
    "id": "n_home",
    "type": "word",
    "partOfSpeech": [
      "名詞",
      "副詞"
    ],
    "category": "場所",
    "english": "home",
    "japanese": "家／家庭／家へ／家に",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "家／家庭",
        "category": "場所"
      },
      {
        "pos": "副詞",
        "meaning": "家へ／家に",
        "category": "移動",
        "example": "I am going home.",
        "exampleJa": "家に帰ります。"
      }
    ],
    "forms": [
      {
        "label": "名詞",
        "formName": "home",
        "example": "My home is small.",
        "exampleJa": "私の家は小さいです。",
        "pos": "名詞"
      }
    ],
    "changeType": "品詞で使い方が変わる",
    "beginnerTip": "go home の home の前には通常 to を付けません。",
    "searchKeywords": "home 家／家庭／家へ／家に 家／家庭 家へ／家に 場所"
  },
  {
    "id": "n_food",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "食事",
    "english": "food",
    "japanese": "食べ物／食事",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "食べ物／食事",
        "category": "食事"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "food",
        "example": "The food is good.",
        "exampleJa": "食べ物がおいしいです。"
      },
      {
        "label": "複数形",
        "formName": "foods",
        "example": "I like trying different foods.",
        "exampleJa": "いろいろな種類の食べ物を試すのが好きです。"
      }
    ],
    "changeType": "通常は不可算・種類を表すとき複数可",
    "beginnerTip": "普段の「食べ物」は food のまま使うことが多いです。",
    "searchKeywords": "food 食べ物／食事 食べ物／食事 食事"
  },
  {
    "id": "n_job",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "仕事",
    "english": "job",
    "japanese": "仕事／職",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "仕事／職",
        "category": "仕事"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "job",
        "example": "I like my job.",
        "exampleJa": "自分の仕事が好きです。"
      },
      {
        "label": "複数形",
        "formName": "jobs",
        "example": "There are many jobs here.",
        "exampleJa": "ここには多くの仕事があります。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "job 仕事／職 仕事／職 仕事"
  },
  {
    "id": "n_language",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "学習",
    "english": "language",
    "japanese": "言語",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "言語",
        "category": "学習"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "language",
        "example": "English is a global language.",
        "exampleJa": "英語は世界的な言語です。"
      },
      {
        "label": "複数形",
        "formName": "languages",
        "example": "She speaks three languages.",
        "exampleJa": "彼女は3か国語を話します。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "language 言語 言語 学習"
  },
  {
    "id": "n_thing",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "基本名詞",
    "english": "thing",
    "japanese": "もの／こと",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "もの／こと",
        "category": "基本名詞"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "thing",
        "example": "That is the important thing.",
        "exampleJa": "それが大事なことです。"
      },
      {
        "label": "複数形",
        "formName": "things",
        "example": "I have many things to do.",
        "exampleJa": "やることがたくさんあります。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "thing もの／こと もの／こと 基本名詞"
  },
  {
    "id": "n_problem",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "日常生活",
    "english": "problem",
    "japanese": "問題／困りごと",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "問題／困りごと",
        "category": "日常生活"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "problem",
        "example": "I have a problem.",
        "exampleJa": "困ったことがあります。"
      },
      {
        "label": "複数形",
        "formName": "problems",
        "example": "We can solve these problems.",
        "exampleJa": "これらの問題を解決できます。"
      }
    ],
    "changeType": "規則複数形 (-s)",
    "searchKeywords": "problem 問題／困りごと 問題／困りごと 日常生活"
  },
  {
    "id": "adj_good",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "good",
    "japanese": "良い／上手な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "良い／上手な",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "good",
        "example": "This restaurant is good.",
        "exampleJa": "このレストランは良いです。"
      },
      {
        "label": "比較級",
        "formName": "better",
        "example": "This one is better.",
        "exampleJa": "こちらの方が良いです。"
      },
      {
        "label": "最上級",
        "formName": "best",
        "example": "This is the best one.",
        "exampleJa": "これが一番良いです。"
      }
    ],
    "changeType": "不規則比較変化",
    "searchKeywords": "good 良い／上手な 良い／上手な 評価"
  },
  {
    "id": "adj_bad",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "bad",
    "japanese": "悪い／ひどい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "悪い／ひどい",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "bad",
        "example": "The weather is bad.",
        "exampleJa": "天気が悪いです。"
      },
      {
        "label": "比較級",
        "formName": "worse",
        "example": "The weather is worse today.",
        "exampleJa": "今日は天気がさらに悪いです。"
      },
      {
        "label": "最上級",
        "formName": "worst",
        "example": "That was the worst day.",
        "exampleJa": "あれは最悪の日でした。"
      }
    ],
    "changeType": "不規則比較変化",
    "searchKeywords": "bad 悪い／ひどい 悪い／ひどい 評価"
  },
  {
    "id": "adj_big",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "大きさ",
    "english": "big",
    "japanese": "大きい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "大きい",
        "category": "大きさ"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "big",
        "example": "The room is big.",
        "exampleJa": "部屋は大きいです。"
      },
      {
        "label": "比較級",
        "formName": "bigger",
        "example": "This room is bigger.",
        "exampleJa": "この部屋の方が大きいです。"
      },
      {
        "label": "最上級",
        "formName": "biggest",
        "example": "This is the biggest room.",
        "exampleJa": "これが一番大きな部屋です。"
      }
    ],
    "changeType": "g を重ねて -er / -est",
    "searchKeywords": "big 大きい 大きい 大きさ"
  },
  {
    "id": "adj_small",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "大きさ",
    "english": "small",
    "japanese": "小さい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "小さい",
        "category": "大きさ"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "small",
        "example": "This bag is small.",
        "exampleJa": "このバッグは小さいです。"
      },
      {
        "label": "比較級",
        "formName": "smaller",
        "example": "This one is smaller.",
        "exampleJa": "こちらの方が小さいです。"
      },
      {
        "label": "最上級",
        "formName": "smallest",
        "example": "This is the smallest size.",
        "exampleJa": "これが一番小さいサイズです。"
      }
    ],
    "changeType": "規則比較変化 (-er / -est)",
    "searchKeywords": "small 小さい 小さい 大きさ"
  },
  {
    "id": "adj_new",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "状態",
    "english": "new",
    "japanese": "新しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "新しい",
        "category": "状態"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "new",
        "example": "This phone is new.",
        "exampleJa": "このスマホは新しいです。"
      },
      {
        "label": "比較級",
        "formName": "newer",
        "example": "This model is newer.",
        "exampleJa": "このモデルの方が新しいです。"
      },
      {
        "label": "最上級",
        "formName": "newest",
        "example": "This is the newest model.",
        "exampleJa": "これが最新モデルです。"
      }
    ],
    "changeType": "規則比較変化 (-er / -est)",
    "searchKeywords": "new 新しい 新しい 状態"
  },
  {
    "id": "adj_old",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "状態",
    "english": "old",
    "japanese": "古い／年を取った",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "古い／年を取った",
        "category": "状態"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "old",
        "example": "This building is old.",
        "exampleJa": "この建物は古いです。"
      },
      {
        "label": "比較級",
        "formName": "older",
        "example": "My sister is older than me.",
        "exampleJa": "姉は私より年上です。"
      },
      {
        "label": "最上級",
        "formName": "oldest",
        "example": "He is the oldest person here.",
        "exampleJa": "彼がここで一番年上です。"
      }
    ],
    "changeType": "規則比較変化 (-er / -est)",
    "searchKeywords": "old 古い／年を取った 古い／年を取った 状態"
  },
  {
    "id": "adj_happy",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "happy",
    "japanese": "幸せな／嬉しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "幸せな／嬉しい",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "happy",
        "example": "I am happy today.",
        "exampleJa": "今日は嬉しいです。"
      },
      {
        "label": "比較級",
        "formName": "happier",
        "example": "I feel happier now.",
        "exampleJa": "今はもっと幸せです。"
      },
      {
        "label": "最上級",
        "formName": "happiest",
        "example": "That was my happiest day.",
        "exampleJa": "あれが一番幸せな日でした。"
      }
    ],
    "changeType": "y→ier / iest",
    "searchKeywords": "happy 幸せな／嬉しい 幸せな／嬉しい 感情",
    "beginnerTip": "happy は幸せ・嬉しい気分の状態です。glad は出来事に対して「よかった」と思う嬉しさです。"
  },
  {
    "id": "adj_sad",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "sad",
    "japanese": "悲しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "悲しい",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "sad",
        "example": "I feel sad.",
        "exampleJa": "悲しいです。"
      },
      {
        "label": "比較級",
        "formName": "sadder",
        "example": "She looked sadder today.",
        "exampleJa": "彼女は今日はさらに悲しそうでした。"
      },
      {
        "label": "最上級",
        "formName": "saddest",
        "example": "It was the saddest scene.",
        "exampleJa": "一番悲しい場面でした。"
      }
    ],
    "changeType": "d を重ねて -er / -est",
    "searchKeywords": "sad 悲しい 悲しい 感情"
  },
  {
    "id": "adj_tired",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "体調",
    "english": "tired",
    "japanese": "疲れた",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "疲れた",
        "category": "体調"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "tired",
        "example": "I am tired.",
        "exampleJa": "疲れています。"
      },
      {
        "label": "比較級",
        "formName": "more tired",
        "example": "I am more tired today.",
        "exampleJa": "今日はもっと疲れています。"
      },
      {
        "label": "最上級",
        "formName": "most tired",
        "example": "Of everyone, I was the most tired after the trip.",
        "exampleJa": "みんなの中で、旅行の後は私が一番疲れていました。"
      }
    ],
    "changeType": "more / most を使う",
    "searchKeywords": "tired 疲れた 疲れた 体調"
  },
  {
    "id": "adj_busy",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "状態",
    "english": "busy",
    "japanese": "忙しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "忙しい",
        "category": "状態"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "busy",
        "example": "I am busy today.",
        "exampleJa": "今日は忙しいです。"
      },
      {
        "label": "比較級",
        "formName": "busier",
        "example": "This week is busier.",
        "exampleJa": "今週の方が忙しいです。"
      },
      {
        "label": "最上級",
        "formName": "busiest",
        "example": "Friday is my busiest day.",
        "exampleJa": "金曜日が一番忙しい日です。"
      }
    ],
    "changeType": "y→ier / iest",
    "searchKeywords": "busy 忙しい 忙しい 状態"
  },
  {
    "id": "adj_free",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "時間",
    "english": "free",
    "japanese": "暇な／無料の／自由な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "暇な",
        "category": "時間"
      },
      {
        "pos": "形容詞",
        "meaning": "無料の",
        "category": "買い物",
        "example": "This ticket is free.",
        "exampleJa": "このチケットは無料です。"
      },
      {
        "pos": "形容詞",
        "meaning": "自由な",
        "category": "状態",
        "example": "You are free to choose.",
        "exampleJa": "自由に選んでいいです。"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "free",
        "example": "Are you free tomorrow?",
        "exampleJa": "明日暇ですか？"
      },
      {
        "label": "比較級",
        "formName": "freer",
        "lowFrequency": true
      }
    ],
    "changeType": "意味によって訳が大きく変わる",
    "beginnerTip": "「暇な」の比較は freer より、more free time など別の言い方をすることが多いです。freer は主に「より自由な」の意味で使われます。",
    "searchKeywords": "free 暇な／無料の／自由な 暇な 無料の 自由な 時間"
  },
  {
    "id": "adj_easy",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "easy",
    "japanese": "簡単な／楽な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "簡単な／楽な",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "easy",
        "example": "This is easy.",
        "exampleJa": "これは簡単です。"
      },
      {
        "label": "比較級",
        "formName": "easier",
        "example": "This way is easier.",
        "exampleJa": "この方法の方が簡単です。"
      },
      {
        "label": "最上級",
        "formName": "easiest",
        "example": "This is the easiest way.",
        "exampleJa": "これが一番簡単な方法です。"
      }
    ],
    "changeType": "y→ier / iest",
    "searchKeywords": "easy 簡単な／楽な 簡単な／楽な 評価"
  },
  {
    "id": "adj_difficult",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "difficult",
    "japanese": "難しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "難しい",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "difficult",
        "example": "This question is difficult.",
        "exampleJa": "この質問は難しいです。"
      },
      {
        "label": "比較級",
        "formName": "more difficult",
        "example": "This one is more difficult.",
        "exampleJa": "こちらの方が難しいです。"
      },
      {
        "label": "最上級",
        "formName": "most difficult",
        "example": "This was the most difficult part.",
        "exampleJa": "ここが一番難しい部分でした。"
      }
    ],
    "changeType": "more / most を使う",
    "searchKeywords": "difficult 難しい 難しい 評価"
  },
  {
    "id": "adj_important",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "important",
    "japanese": "重要な／大切な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "重要な／大切な",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "important",
        "example": "This is important.",
        "exampleJa": "これは重要です。"
      },
      {
        "label": "比較級",
        "formName": "more important",
        "example": "Health is more important than money.",
        "exampleJa": "健康はお金より大切です。"
      },
      {
        "label": "最上級",
        "formName": "most important",
        "example": "This is the most important point.",
        "exampleJa": "ここが一番重要な点です。"
      }
    ],
    "changeType": "more / most を使う",
    "searchKeywords": "important 重要な／大切な 重要な／大切な 評価"
  },
  {
    "id": "adj_interesting",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "interesting",
    "japanese": "興味深い／面白い",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "興味深い／面白い",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "interesting",
        "example": "This book is interesting.",
        "exampleJa": "この本は面白いです。"
      },
      {
        "label": "比較級",
        "formName": "more interesting",
        "example": "The second story is more interesting.",
        "exampleJa": "2つ目の話の方が面白いです。"
      },
      {
        "label": "最上級",
        "formName": "most interesting",
        "example": "That was the most interesting part.",
        "exampleJa": "そこが一番面白い部分でした。"
      }
    ],
    "changeType": "more / most を使う",
    "beginnerTip": "interesting は「興味を持たせる側」、interested は「興味を持っている人」の状態です。",
    "searchKeywords": "interesting 興味深い／面白い 興味深い／面白い 感情"
  },
  {
    "id": "adj_different",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "比較",
    "english": "different",
    "japanese": "違う／異なる",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "違う／異なる",
        "category": "比較"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "different",
        "example": "This one is different.",
        "exampleJa": "これは違います。"
      }
    ],
    "changeType": "比較級は必要なとき more を使える",
    "beginnerTip": "different は通常、語形を変えて比較する単語として覚える必要はありません。必要に応じて more different と言うことはあります。",
    "searchKeywords": "different 違う／異なる 違う／異なる 比較"
  },
  {
    "id": "adv_really",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "強調",
    "english": "really",
    "japanese": "本当に／とても",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "本当に／とても",
        "category": "強調"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "really",
        "example": "I really like this.",
        "exampleJa": "これが本当に好きです。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "形容詞や動詞などを強めるほか、Really? だけで「本当に？」とも言えます。強さの目安：really（とても）＞ quite（かなり）＞ kind of（ちょっと）＞ a little（少し）。",
    "searchKeywords": "really 本当に／とても 本当に／とても 強調"
  },
  {
    "id": "adv_actually",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "会話",
    "english": "actually",
    "japanese": "実は／実際には",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "実は／実際には",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "actually",
        "example": "Actually, I do not know.",
        "exampleJa": "実は、分かりません。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "相手の予想と違うことを言うときや、言い直しでよく使います。",
    "searchKeywords": "actually 実は／実際には 実は／実際には 会話"
  },
  {
    "id": "adv_probably",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "確信度",
    "english": "probably",
    "japanese": "たぶん／おそらく",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "たぶん／おそらく",
        "category": "確信度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "probably",
        "example": "I will probably go.",
        "exampleJa": "たぶん行きます。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "maybe より「そうなる可能性が高い」という感じで使われることが多いです。",
    "searchKeywords": "probably たぶん／おそらく たぶん／おそらく 確信度"
  },
  {
    "id": "adv_definitely",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "確信度",
    "english": "definitely",
    "japanese": "絶対に／間違いなく",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "絶対に／間違いなく",
        "category": "確信度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "definitely",
        "example": "I will definitely call you.",
        "exampleJa": "絶対に電話します。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "probably より確信が強い表現です。",
    "searchKeywords": "definitely 絶対に／間違いなく 絶対に／間違いなく 確信度"
  },
  {
    "id": "adv_usually",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "頻度",
    "english": "usually",
    "japanese": "普段は／たいてい",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "普段は／たいてい",
        "category": "頻度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "usually",
        "example": "I usually wake up early.",
        "exampleJa": "普段は早く起きます。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "always より頻度が低く、「たいてい」の感覚です。",
    "searchKeywords": "usually 普段は／たいてい 普段は／たいてい 頻度"
  },
  {
    "id": "adv_exactly",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "会話",
    "english": "exactly",
    "japanese": "正確に／まさに／その通り",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "正確に／まさに／その通り",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "exactly",
        "example": "That is exactly what I mean.",
        "exampleJa": "まさにそういう意味です。",
        "pos": "副詞",
        "needsHint": true
      }
    ],
    "beginnerTip": "単独の Exactly. は「その通り」と強く同意するときにも使います。",
    "searchKeywords": "exactly 正確に／まさに／その通り 正確に／まさに／その通り 会話"
  },
  {
    "id": "adv_maybe",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "確信度",
    "english": "maybe",
    "japanese": "もしかすると／ひょっとしたら",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "もしかすると／ひょっとしたら",
        "category": "確信度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "maybe",
        "example": "Maybe I will stay home.",
        "exampleJa": "もしかしたら家にいるかも。",
        "pos": "副詞",
        "needsHint": true
      }
    ],
    "beginnerTip": "probably より確信が弱い「もしかしたら」に近い使い方が多いです。",
    "searchKeywords": "maybe たぶん／もしかすると たぶん／もしかすると 確信度 たぶん"
  },
  {
    "id": "adv_always",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "頻度",
    "english": "always",
    "japanese": "いつも／常に",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "いつも／常に",
        "category": "頻度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "always",
        "example": "She always helps me.",
        "exampleJa": "彼女はいつも助けてくれます。",
        "pos": "副詞"
      }
    ],
    "searchKeywords": "always いつも／常に いつも／常に 頻度"
  },
  {
    "id": "adv_sometimes",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "頻度",
    "english": "sometimes",
    "japanese": "ときどき",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "ときどき",
        "category": "頻度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "sometimes",
        "example": "I sometimes eat out.",
        "exampleJa": "ときどき外食します。",
        "pos": "副詞"
      }
    ],
    "searchKeywords": "sometimes ときどき ときどき 頻度"
  },
  {
    "id": "adv_never",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "頻度",
    "english": "never",
    "japanese": "決して〜ない／一度も〜ない",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "決して〜ない／一度も〜ない",
        "category": "頻度"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "never",
        "example": "I never drink coffee at night.",
        "exampleJa": "夜はコーヒーを飲みません。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "never 自体に否定の意味があるため、通常 not と重ねません。",
    "searchKeywords": "never 決して〜ない／一度も〜ない 決して〜ない／一度も〜ない 頻度"
  },
  {
    "id": "adv_already",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "already",
    "japanese": "すでに／もう",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "すでに／もう",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "already",
        "example": "I already ate.",
        "exampleJa": "もう食べました。",
        "pos": "副詞"
      }
    ],
    "beginnerTip": "「予想より早く、もう」という感覚を含むことがあります。",
    "searchKeywords": "already すでに／もう すでに／もう 時間"
  },
  {
    "id": "adv_still",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "形容詞"
    ],
    "category": "時間・状態",
    "english": "still",
    "japanese": "まだ／今でも／じっとした／動かない",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "まだ／今でも",
        "category": "時間・状態"
      },
      {
        "pos": "形容詞",
        "meaning": "じっとした／動かない",
        "category": "状態",
        "example": "Stay still.",
        "exampleJa": "じっとしていて。"
      }
    ],
    "forms": [
      {
        "label": "副詞",
        "formName": "still",
        "example": "I am still tired.",
        "exampleJa": "まだ疲れています。",
        "pos": "副詞"
      }
    ],
    "changeType": "品詞で意味が変わる",
    "beginnerTip": "「まだ」の still と「じっとした」の still を文の形から見分けます。",
    "searchKeywords": "still まだ／今でも／じっとした／動かない まだ／今でも じっとした／動かない 時間・状態"
  },
  {
    "id": "adv_now",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "名詞"
    ],
    "category": "時間",
    "english": "now",
    "japanese": "今／今すぐ／現在／今この時",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "今／今すぐ",
        "category": "時間"
      },
      {
        "pos": "名詞",
        "meaning": "現在／今この時",
        "category": "時間",
        "example": "Now is the time to start.",
        "exampleJa": "今こそ始める時です。"
      }
    ],
    "forms": [
      {
        "label": "副詞",
        "formName": "now",
        "example": "I have to go now.",
        "exampleJa": "今行かなければなりません。",
        "pos": "副詞"
      }
    ],
    "changeType": "品詞で使い方が変わる",
    "searchKeywords": "now 今／今すぐ／今／現在 今／今すぐ 今／現在 時間"
  },
  {
    "id": "adv_here",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "場所",
    "english": "here",
    "japanese": "ここに／ここで",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "ここに／ここで",
        "category": "場所"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "here",
        "example": "Come here.",
        "exampleJa": "ここに来て。",
        "pos": "副詞"
      }
    ],
    "searchKeywords": "here ここに／ここで ここに／ここで 場所"
  },
  {
    "id": "adv_there",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "場所",
    "english": "there",
    "japanese": "そこに／そこで",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "そこに／そこで",
        "category": "場所"
      }
    ],
    "forms": [
      {
        "label": "場所",
        "formName": "there",
        "example": "Put it there.",
        "exampleJa": "それをそこに置いて。",
        "pos": "副詞"
      },
      {
        "label": "存在を表す形",
        "formName": "there",
        "example": "There is a cafe nearby.",
        "exampleJa": "近くにカフェがあります。"
      }
    ],
    "changeType": "特殊な用法あり",
    "beginnerTip": "There is / There are の there は「そこ」という場所を指す通常の there とは働きが異なります。",
    "searchKeywords": "there そこに／そこで そこに／そこで 場所"
  },
  {
    "id": "exp_going_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "予定",
    "english": "be going to + 動詞（原形）",
    "japanese": "〜する予定／〜するつもり",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜する予定／〜するつもり",
        "category": "予定"
      },
      {
        "pos": "表現",
        "meaning": "〜しそうだ（予測）",
        "category": "予測",
        "example": "It's going to rain.",
        "exampleJa": "雨が降りそうです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "be going to + 動詞（原形）",
        "example": "I'm going to study tonight.",
        "exampleJa": "今夜勉強する予定です。"
      },
      {
        "label": "過去形",
        "formName": "was / were going to + 動詞（原形）",
        "example": "I was going to call you.",
        "exampleJa": "あなたに電話するつもりでした。"
      },
      {
        "label": "会話形",
        "formName": "gonna + 動詞（原形）",
        "example": "I'm gonna go now.",
        "exampleJa": "もう行くね。"
      }
    ],
    "example": "I'm going to study tonight.",
    "exampleJa": "今夜勉強する予定です。",
    "spokenForm": [
      "gonna"
    ],
    "searchKeywords": "be going to + 動詞（原形） 〜する予定／〜するつもり 〜する予定／〜するつもり 予定",
    "beginnerTip": "前から決めていた予定・つもりに使います（I'm going to study tonight.）。その場で決めたときは I'll を使います（I'll help you.）。今の状況から見て「そうなりそう」と言うときにも使います（It's going to rain.）。"
  },
  {
    "id": "exp_want_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "希望",
    "english": "want to + 動詞（原形）",
    "japanese": "〜したい",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜したい",
        "category": "希望"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "want to + 動詞（原形）",
        "example": "I want to visit America.",
        "exampleJa": "アメリカに行きたいです。"
      },
      {
        "label": "過去形",
        "formName": "wanted to + 動詞（原形）",
        "example": "I wanted to see you.",
        "exampleJa": "あなたに会いたかったです。"
      },
      {
        "label": "会話形",
        "formName": "wanna + 動詞（原形）",
        "example": "I wanna go home.",
        "exampleJa": "家に帰りたい。"
      }
    ],
    "example": "I want to visit America.",
    "exampleJa": "アメリカに行きたいです。",
    "spokenForm": [
      "wanna"
    ],
    "searchKeywords": "want to + 動詞（原形） 〜したい 〜したい 希望",
    "beginnerTip": "「〜したい」の普通の言い方です。I'd like to + 動詞（原形）は、より丁寧な言い方です。"
  },
  {
    "id": "exp_need_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "必要",
    "english": "need to + 動詞（原形）",
    "japanese": "〜する必要がある",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜する必要がある",
        "category": "必要"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "need to + 動詞（原形）",
        "example": "I need to study.",
        "exampleJa": "勉強する必要があります。"
      },
      {
        "label": "過去形",
        "formName": "needed to + 動詞（原形）",
        "example": "I needed to rest.",
        "exampleJa": "休む必要がありました。"
      }
    ],
    "example": "I need to study.",
    "exampleJa": "勉強する必要があります。",
    "searchKeywords": "need to + 動詞（原形） 〜する必要がある 〜する必要がある 必要",
    "beginnerTip": "自分の判断や状況から見て「必要がある」ときに使います。決まりや事情でやらなければならないときは have to です。"
  },
  {
    "id": "exp_have_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "義務",
    "english": "have to + 動詞（原形）",
    "japanese": "〜しなければならない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜しなければならない",
        "category": "義務"
      },
      {
        "pos": "表現",
        "meaning": "〜しなくてもいい（don't have to）",
        "category": "義務",
        "example": "You don't have to come.",
        "exampleJa": "来なくても大丈夫です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "have to + 動詞（原形）",
        "example": "I have to work tomorrow.",
        "exampleJa": "明日は働かなければなりません。"
      },
      {
        "label": "三人称単数現在",
        "formName": "has to + 動詞（原形）",
        "example": "She has to leave early.",
        "exampleJa": "彼女は早く出なければなりません。"
      },
      {
        "label": "過去形",
        "formName": "had to + 動詞（原形）",
        "example": "I had to wait.",
        "exampleJa": "待たなければなりませんでした。"
      }
    ],
    "example": "I have to work tomorrow.",
    "exampleJa": "明日は働かなければなりません。",
    "searchKeywords": "have to + 動詞（原形） 〜しなければならない 〜しなければならない 義務",
    "beginnerTip": "事情や決まりで「やらなければならない」ときに使います。don't have to は「禁止」ではなく「〜しなくてもいい」の意味です。自分に必要なときは need to、強い義務や強い推量（You must be tired.）は must を使います。"
  },
  {
    "id": "exp_be_able_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "可能",
    "english": "be able to + 動詞（原形）",
    "japanese": "〜することができる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜することができる",
        "category": "可能"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "be able to + 動詞（原形）",
        "example": "I want to be able to speak English.",
        "exampleJa": "英語を話せるようになりたいです。"
      },
      {
        "label": "過去形",
        "formName": "was / were able to + 動詞（原形）",
        "example": "I was able to finish it.",
        "exampleJa": "それを終えることができました。"
      }
    ],
    "example": "I am able to work from home.",
    "exampleJa": "在宅で働くことができます。",
    "beginnerTip": "can と似ていますが、want to の後や未来・完了形など、can をそのまま置けない形でも使えます。",
    "searchKeywords": "be able to + 動詞（原形） 〜することができる 〜することができる 可能"
  },
  {
    "id": "exp_have_you_ever",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "Have you ever + 動詞（過去分詞）?",
    "japanese": "今までに〜したことがありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "今までに〜したことがありますか？",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Have you ever + 動詞（過去分詞）?",
        "example": "Have you ever been to Korea?",
        "exampleJa": "韓国に行ったことがありますか？"
      }
    ],
    "example": "Have you ever been to Korea?",
    "exampleJa": "韓国に行ったことがありますか？",
    "beginnerTip": "ever は「今までに」という経験の範囲を強調します。",
    "searchKeywords": "Have you ever + 動詞（過去分詞）? 今までに〜したことがありますか？ 今までに〜したことがありますか？ 経験"
  },
  {
    "id": "exp_ive_never",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "I've never + 動詞（過去分詞）",
    "japanese": "一度も〜したことがない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "一度も〜したことがない",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've never + 動詞（過去分詞）",
        "example": "I've never seen this before.",
        "exampleJa": "これを今まで一度も見たことがありません。"
      }
    ],
    "example": "I've never seen this before.",
    "exampleJa": "これを今まで一度も見たことがありません。",
    "beginnerTip": "never 自体に否定の意味があるので、not は通常付けません。",
    "searchKeywords": "I've never + 動詞（過去分詞） 一度も〜したことがない 一度も〜したことがない 経験"
  },
  {
    "id": "exp_a_lot_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "量",
    "english": "a lot of + 名詞",
    "japanese": "たくさんの〜",
    "senses": [
      {
        "pos": "表現",
        "meaning": "たくさんの〜",
        "category": "量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "a lot of + 名詞",
        "example": "I have a lot of friends.",
        "exampleJa": "友達がたくさんいます。"
      }
    ],
    "example": "I have a lot of friends.",
    "exampleJa": "友達がたくさんいます。",
    "beginnerTip": "数えられる名詞にも数えられない名詞にも使えます。",
    "searchKeywords": "a lot of + 名詞 たくさんの〜 たくさんの〜 量"
  },
  {
    "id": "exp_kind_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "kind of",
    "japanese": "ちょっと／なんとなく／ある意味",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ちょっと／なんとなく／ある意味",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "kind of",
        "example": "I'm kind of tired.",
        "exampleJa": "ちょっと疲れています。"
      },
      {
        "label": "会話形",
        "formName": "kinda",
        "example": "I'm kinda nervous.",
        "exampleJa": "ちょっと緊張しています。"
      }
    ],
    "example": "I'm kind of tired.",
    "exampleJa": "ちょっと疲れています。",
    "spokenForm": [
      "kinda"
    ],
    "searchKeywords": "kind of ちょっと／なんとなく／ある意味 ちょっと／なんとなく／ある意味 会話",
    "beginnerTip": "言い切りを避けて「ちょっと／なんとなく」とぼかす言い方です。強さの目安：really（とても）＞ quite（かなり）＞ kind of（ちょっと）＞ a little（少し）。"
  },
  {
    "id": "exp_a_little",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "量",
    "english": "a little",
    "japanese": "少し／少しだけ",
    "senses": [
      {
        "pos": "表現",
        "meaning": "少し／少しだけ",
        "category": "量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "a little",
        "example": "I speak a little English.",
        "exampleJa": "英語を少し話します。"
      }
    ],
    "example": "I speak a little English.",
    "exampleJa": "英語を少し話します。",
    "beginnerTip": "a little は数えられないものや程度が「少し」あることを表します。強さの目安：really（とても）＞ quite（かなり）＞ kind of（ちょっと）＞ a little（少し）。",
    "searchKeywords": "a little 少し／少しだけ 少し／少しだけ 量"
  },
  {
    "id": "exp_of_course",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "of course",
    "japanese": "もちろん",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もちろん",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "of course",
        "example": "Of course I remember you.",
        "exampleJa": "もちろんあなたのことを覚えています。"
      }
    ],
    "example": "Of course I remember you.",
    "exampleJa": "もちろんあなたのことを覚えています。",
    "searchKeywords": "of course もちろん もちろん 会話",
    "beginnerTip": "Of course. は「言うまでもなく／もちろん」という、やや強めの返事です。気軽な「いいよ」は Sure. が自然です。"
  },
  {
    "id": "exp_i_think",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "意見",
    "english": "I think + 文",
    "japanese": "〜だと思う",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜だと思う",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I think + 文",
        "example": "I think this is good.",
        "exampleJa": "これは良いと思います。"
      },
      {
        "label": "過去形",
        "formName": "I thought + 文",
        "example": "I thought you were busy.",
        "exampleJa": "あなたは忙しいと思っていました。"
      }
    ],
    "example": "I think this is good.",
    "exampleJa": "これは良いと思います。",
    "searchKeywords": "I think + 文 〜だと思う 〜だと思う 意見"
  },
  {
    "id": "exp_i_dont_know",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "I don't know",
    "japanese": "分からない／知らない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "分からない／知らない",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I don't know",
        "example": "I don't know the answer.",
        "exampleJa": "答えが分かりません。"
      },
      {
        "label": "過去形",
        "formName": "I didn't know",
        "example": "I didn't know that.",
        "exampleJa": "それは知りませんでした。"
      }
    ],
    "example": "I don't know the answer.",
    "exampleJa": "答えが分かりません。",
    "beginnerTip": "「知らない」と「分からない」の両方でよく使います。",
    "searchKeywords": "I don't know 分からない／知らない 分からない／知らない 会話"
  },
  {
    "id": "exp_what_do_you_mean",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "What do you mean?",
    "japanese": "どういう意味？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どういう意味？",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What do you mean?",
        "example": "What do you mean by that?",
        "exampleJa": "それはどういう意味？"
      }
    ],
    "example": "What do you mean by that?",
    "exampleJa": "それはどういう意味？",
    "searchKeywords": "What do you mean? どういう意味？ どういう意味？ 会話"
  },
  {
    "id": "exp_can_i",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "許可",
    "english": "Can I + 動詞（原形）?",
    "japanese": "〜してもいいですか？／〜できますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜してもいいですか？／〜できますか？",
        "category": "許可"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Can I + 動詞（原形）?",
        "example": "Can I sit here?",
        "exampleJa": "ここに座ってもいいですか？"
      }
    ],
    "example": "Can I sit here?",
    "exampleJa": "ここに座ってもいいですか？",
    "beginnerTip": "許可を求めるときによく使います。",
    "searchKeywords": "Can I + 動詞（原形）? 〜してもいいですか？／〜できますか？ 〜してもいいですか？／〜できますか？ 許可"
  },
  {
    "id": "adj_fast",
    "type": "word",
    "partOfSpeech": [
      "形容詞",
      "副詞",
      "動詞",
      "名詞"
    ],
    "category": "速さ",
    "english": "fast",
    "japanese": "速い／速く",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "速い",
        "category": "速さ"
      },
      {
        "pos": "副詞",
        "meaning": "速く",
        "category": "速さ",
        "example": "He runs fast.",
        "exampleJa": "彼は速く走ります。"
      },
      {
        "pos": "動詞",
        "meaning": "断食する",
        "category": "食事",
        "example": "I fast once a week.",
        "exampleJa": "週に1回断食します。"
      },
      {
        "pos": "名詞",
        "meaning": "断食",
        "category": "食事",
        "example": "He went on a three-day fast.",
        "exampleJa": "彼は3日間断食しました。"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "fast",
        "example": "This train is fast.",
        "exampleJa": "この電車は速いです。"
      },
      {
        "label": "比較級",
        "formName": "faster",
        "example": "This one is faster.",
        "exampleJa": "こちらの方が速いです。"
      },
      {
        "label": "最上級",
        "formName": "fastest",
        "example": "This is the fastest route.",
        "exampleJa": "これが一番速いルートです。"
      }
    ],
    "changeType": "fast → faster → fastest",
    "beginnerTip": "「速い／速く」が最も一般的です。fast には「断食する」「断食」という別の意味もあります。",
    "searchKeywords": "fast 速い／速く 速い 速く 断食する 断食 速さ"
  },
  {
    "id": "prep_into",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "方向",
    "english": "into",
    "japanese": "〜の中へ／〜にハマって",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の中へ／〜の中に",
        "category": "方向"
      },
      {
        "pos": "前置詞",
        "meaning": "〜に夢中で／〜にハマって",
        "category": "興味",
        "example": "I am really into this game.",
        "exampleJa": "このゲームにすごくハマっています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "into",
        "example": "She walked into the room.",
        "exampleJa": "彼女は部屋の中へ入りました。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "into は「中へ」という方向だけでなく、be into ... で「〜にハマっている／興味がある」もよく使います。",
    "searchKeywords": "into 〜の中へ／〜にハマって 〜の中へ／〜の中に 〜に夢中で／〜にハマって 方向"
  },
  {
    "id": "adj_soso",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "so-so",
    "japanese": "まあまあ／可もなく不可もなく",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "まあまあ／可もなく不可もなく",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "so-so",
        "example": "The movie was so-so.",
        "exampleJa": "その映画はまあまあでした。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "会話では How are you? への返答にも使えますが、ややそっけなく聞こえることがあります。",
    "searchKeywords": "so-so まあまあ／可もなく不可もなく まあまあ／可もなく不可もなく 評価"
  },
  {
    "id": "v_put",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "put",
    "japanese": "置く／入れる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "置く／入れる",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "put",
        "example": "Put it here.",
        "exampleJa": "ここに置いて。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "puts",
        "example": "She puts her phone here.",
        "exampleJa": "彼女はここにスマホを置きます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "put",
        "example": "I put it on the table.",
        "exampleJa": "それをテーブルに置きました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "put",
        "example": "I have put it away.",
        "exampleJa": "それを片付けました。"
      },
      {
        "label": "ing形",
        "formName": "putting",
        "example": "I am putting it in my bag.",
        "exampleJa": "バッグに入れているところです。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "put 置く／入れる 置く／入れる 基本動詞"
  },
  {
    "id": "v_keep",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "keep",
    "japanese": "保つ／続ける／取っておく",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "保つ／取っておく",
        "category": "基本動詞"
      },
      {
        "pos": "動詞",
        "meaning": "〜し続ける（keep + 動詞（ing形））",
        "category": "基本動詞",
        "example": "Keep trying.",
        "exampleJa": "あきらめずに続けて。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "keep",
        "example": "Keep this safe.",
        "exampleJa": "これを安全に保管して。"
      },
      {
        "label": "三人称単数現在",
        "formName": "keeps",
        "example": "She keeps her room clean.",
        "exampleJa": "彼女は部屋をきれいに保っています。"
      },
      {
        "label": "過去形",
        "formName": "kept",
        "example": "I kept the ticket.",
        "exampleJa": "チケットを取っておきました。"
      },
      {
        "label": "過去分詞",
        "formName": "kept",
        "example": "I have kept this for years.",
        "exampleJa": "これを何年も取ってあります。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "keeping",
        "example": "I am keeping this ticket.",
        "exampleJa": "このチケットは取っておきます。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "keep 保つ／続ける／取っておく 保つ／続ける／取っておく 基本動詞"
  },
  {
    "id": "v_leave",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "leave",
    "japanese": "去る／置いていく／残す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "去る／置いていく／残す",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "leave",
        "example": "I leave at eight.",
        "exampleJa": "8時に出ます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "leaves",
        "example": "She leaves early.",
        "exampleJa": "彼女は早く出ます。"
      },
      {
        "label": "過去形",
        "formName": "left",
        "example": "I left my phone at home.",
        "exampleJa": "スマホを家に置いてきました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "left",
        "example": "He has left already.",
        "exampleJa": "彼はもう出ました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "leaving",
        "example": "I am leaving now.",
        "exampleJa": "今出るところです。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "leave 去る／置いていく／残す 去る／置いていく／残す 移動"
  },
  {
    "id": "v_mean",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "mean",
    "japanese": "意味する／意図する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "意味する／意図する",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "mean",
        "example": "What does this mean?",
        "exampleJa": "これはどういう意味？"
      },
      {
        "label": "三人称単数現在",
        "formName": "means",
        "example": "It means the same thing.",
        "exampleJa": "同じ意味です。"
      },
      {
        "label": "過去形",
        "formName": "meant",
        "example": "I meant no harm.",
        "exampleJa": "悪気はありませんでした。"
      },
      {
        "label": "過去分詞",
        "formName": "meant",
        "example": "I have always meant to ask you.",
        "exampleJa": "ずっとあなたに聞こうと思っていました。"
      },
      {
        "label": "ing形",
        "formName": "meaning",
        "example": "I left without meaning to upset you.",
        "exampleJa": "あなたを傷つけるつもりはなく、その場を離れました。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "mean 意味する／意図する 意味する／意図する 会話"
  },
  {
    "id": "v_happen",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "出来事",
    "english": "happen",
    "japanese": "起こる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "起こる",
        "category": "出来事"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "happen",
        "example": "Things happen.",
        "exampleJa": "いろいろなことが起こります。"
      },
      {
        "label": "三人称単数現在",
        "formName": "happens",
        "example": "It happens sometimes.",
        "exampleJa": "そういうことは時々あります。"
      },
      {
        "label": "過去形",
        "formName": "happened",
        "example": "What happened?",
        "exampleJa": "何があったの？"
      },
      {
        "label": "過去分詞",
        "formName": "happened",
        "example": "This has happened before.",
        "exampleJa": "これは以前にも起きたことがあります。"
      },
      {
        "label": "ing形",
        "formName": "happening",
        "example": "What is happening?",
        "exampleJa": "何が起きているの？"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "happen 起こる 起こる 出来事"
  },
  {
    "id": "v_call",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "会話",
    "english": "call",
    "japanese": "呼ぶ／電話する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "呼ぶ／電話する",
        "category": "会話"
      },
      {
        "pos": "名詞",
        "meaning": "電話・通話",
        "category": "会話",
        "example": "Give me a call tonight.",
        "exampleJa": "今夜電話して。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "call",
        "example": "Call me later.",
        "exampleJa": "あとで電話して。"
      },
      {
        "label": "三人称単数現在",
        "formName": "calls",
        "example": "She calls me every day.",
        "exampleJa": "彼女は毎日私に電話します。"
      },
      {
        "label": "過去形",
        "formName": "called",
        "example": "I called her yesterday.",
        "exampleJa": "昨日彼女に電話しました。"
      },
      {
        "label": "過去分詞",
        "formName": "called",
        "example": "I have called twice.",
        "exampleJa": "2回電話しました。"
      },
      {
        "label": "ing形",
        "formName": "calling",
        "example": "I am calling a taxi.",
        "exampleJa": "タクシーを呼んでいます。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "call 呼ぶ／電話する 呼ぶ／電話する 会話"
  },
  {
    "id": "v_bring",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "bring",
    "japanese": "持ってくる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "持ってくる",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "bring",
        "example": "Bring your passport.",
        "exampleJa": "パスポートを持ってきて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "brings",
        "example": "She brings lunch.",
        "exampleJa": "彼女は昼食を持ってきます。"
      },
      {
        "label": "過去形",
        "formName": "brought",
        "example": "I brought a gift.",
        "exampleJa": "プレゼントを持ってきました。"
      },
      {
        "label": "過去分詞",
        "formName": "brought",
        "example": "I have brought everything.",
        "exampleJa": "全部持ってきました。"
      },
      {
        "label": "ing形",
        "formName": "bringing",
        "example": "I am bringing some water.",
        "exampleJa": "水を持ってきます。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "bring 持ってくる 持ってくる 移動",
    "usageTags": [
      "こちらへ持ってくる",
      "移動"
    ],
    "beginnerTip": "bring は話し手・目的地の方向へ「持ってくる」。take はそこから離れる方向へ「持っていく」イメージです。"
  },
  {
    "id": "v_become",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "変化",
    "english": "become",
    "japanese": "〜になる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "〜になる",
        "category": "変化"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "become",
        "example": "It can become a problem.",
        "exampleJa": "問題になることがあります。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "becomes",
        "example": "It becomes easier.",
        "exampleJa": "簡単になります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "became",
        "example": "It became dark.",
        "exampleJa": "暗くなりました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "become",
        "example": "She has become stronger.",
        "exampleJa": "彼女は強くなりました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "becoming",
        "example": "It is becoming popular.",
        "exampleJa": "人気が出てきています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "become 〜になる 〜になる 変化"
  },
  {
    "id": "v_start",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "start",
    "japanese": "始める／始まる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "始める／始まる",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "start",
        "example": "I start work at ten.",
        "exampleJa": "10時に仕事を始めます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "starts",
        "example": "The movie starts at seven.",
        "exampleJa": "映画は7時に始まります。"
      },
      {
        "label": "過去形",
        "formName": "started",
        "example": "It started yesterday.",
        "exampleJa": "昨日始まりました。"
      },
      {
        "label": "過去分詞",
        "formName": "started",
        "example": "I have started a new job.",
        "exampleJa": "新しい仕事を始めました。"
      },
      {
        "label": "ing形",
        "formName": "starting",
        "example": "It is starting to rain.",
        "exampleJa": "雨が降り始めています。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "start 始める／始まる 始める／始まる 行動"
  },
  {
    "id": "v_stop",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "stop",
    "japanese": "止める／止まる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "止める／止まる",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "stop",
        "example": "Stop here.",
        "exampleJa": "ここで止まって。"
      },
      {
        "label": "三人称単数現在",
        "formName": "stops",
        "example": "The bus stops here.",
        "exampleJa": "バスはここに止まります。"
      },
      {
        "label": "過去形",
        "formName": "stopped",
        "example": "I stopped working.",
        "exampleJa": "仕事をやめました。"
      },
      {
        "label": "過去分詞",
        "formName": "stopped",
        "example": "It has stopped raining.",
        "exampleJa": "雨がやみました。"
      },
      {
        "label": "ing形",
        "formName": "stopping",
        "example": "We are stopping for lunch.",
        "exampleJa": "昼食のために止まるところです。"
      }
    ],
    "changeType": "p重ね + -ed / -ing",
    "searchKeywords": "stop 止める／止まる 止める／止まる 行動"
  },
  {
    "id": "v_let",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "基本動詞",
    "english": "let",
    "japanese": "〜させてあげる／〜するのを許す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "〜させてあげる／〜するのを許す",
        "category": "基本動詞"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "let",
        "example": "Let me try.",
        "exampleJa": "私にやらせて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "lets",
        "example": "She lets me choose.",
        "exampleJa": "彼女は私に選ばせてくれます。"
      },
      {
        "label": "過去形",
        "formName": "let",
        "example": "He let me go.",
        "exampleJa": "彼は私を行かせてくれました。"
      },
      {
        "label": "過去分詞",
        "formName": "let",
        "example": "They have let us know.",
        "exampleJa": "彼らは私たちに知らせてくれました。"
      },
      {
        "label": "ing形",
        "formName": "letting",
        "example": "She is letting him decide.",
        "exampleJa": "彼女は彼に決めさせています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "let 〜させる／〜してもらう 〜させる／〜してもらう 基本動詞 〜させる",
    "beginnerTip": "let + 人 + 動詞（原形）で「人が〜するのを許す」。Let me try.（私にやらせて）が定番です。"
  },
  {
    "id": "v_show",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "show",
    "japanese": "見せる／示す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "見せる／示す",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "show",
        "example": "Show me the picture.",
        "exampleJa": "写真を見せて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "shows",
        "example": "It shows the time.",
        "exampleJa": "それは時間を表示します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "showed",
        "example": "She showed me the way.",
        "exampleJa": "彼女は道を教えてくれました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "shown",
        "example": "I have shown you this before.",
        "exampleJa": "前にこれを見せたことがあります。"
      },
      {
        "label": "ing形",
        "formName": "showing",
        "example": "He is showing us around.",
        "exampleJa": "彼が案内してくれています。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "show 見せる／示す 見せる／示す 会話"
  },
  {
    "id": "v_move",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "move",
    "japanese": "動く／動かす／引っ越す",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "動く／動かす／引っ越す",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "move",
        "example": "Move a little.",
        "exampleJa": "少し動いて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "moves",
        "example": "The train moves slowly.",
        "exampleJa": "その電車はゆっくり動きます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "moved",
        "example": "I moved last year.",
        "exampleJa": "去年引っ越しました。"
      },
      {
        "label": "過去分詞",
        "formName": "moved",
        "example": "We have moved the table.",
        "exampleJa": "テーブルを動かしました。"
      },
      {
        "label": "ing形",
        "formName": "moving",
        "example": "I am moving next month.",
        "exampleJa": "来月引っ越します。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "move 動く／動かす／引っ越す 動く／動かす／引っ越す 移動"
  },
  {
    "id": "v_turn",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "turn",
    "japanese": "回す／曲がる／〜になる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "回す／曲がる／〜になる",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "turn",
        "example": "Turn left here.",
        "exampleJa": "ここで左に曲がって。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "turns",
        "example": "This road turns left.",
        "exampleJa": "この道は左に曲がっています。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "turned",
        "example": "The sky turned red.",
        "exampleJa": "空が赤くなりました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "turned",
        "example": "I have turned off the lights.",
        "exampleJa": "電気を消しました。"
      },
      {
        "label": "ing形",
        "formName": "turning",
        "example": "We are turning right here.",
        "exampleJa": "ここで右に曲がります。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "turn 回す／曲がる／〜になる 回す／曲がる／〜になる 移動"
  },
  {
    "id": "v_stay",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "旅行",
    "english": "stay",
    "japanese": "滞在する／〜のままでいる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "滞在する／〜のままでいる",
        "category": "旅行"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "stay",
        "example": "Stay here.",
        "exampleJa": "ここにいて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "stays",
        "example": "She stays here every summer.",
        "exampleJa": "彼女は毎年夏にここへ滞在します。"
      },
      {
        "label": "過去形",
        "formName": "stayed",
        "example": "We stayed for a week.",
        "exampleJa": "1週間滞在しました。"
      },
      {
        "label": "過去分詞",
        "formName": "stayed",
        "example": "I have stayed here before.",
        "exampleJa": "以前ここに泊まったことがあります。"
      },
      {
        "label": "ing形",
        "formName": "staying",
        "example": "I am staying at a hotel.",
        "exampleJa": "ホテルに泊まっています。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "stay 滞在する／〜のままでいる 滞在する／〜のままでいる 旅行",
    "beginnerTip": "stay は一時的に泊まる・とどまること。live は住んでいることです。"
  },
  {
    "id": "v_meet",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "人",
    "english": "meet",
    "japanese": "会う／初めて会う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "会う／初めて会う",
        "category": "人"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "meet",
        "example": "Nice to meet you.",
        "exampleJa": "はじめまして。"
      },
      {
        "label": "三人称単数現在",
        "formName": "meets",
        "example": "She meets clients online.",
        "exampleJa": "彼女はオンラインで顧客に会います。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "met",
        "example": "I met her yesterday.",
        "exampleJa": "昨日彼女に会いました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "met",
        "example": "We have met before.",
        "exampleJa": "以前会ったことがあります。"
      },
      {
        "label": "ing形",
        "formName": "meeting",
        "example": "I am meeting a friend later.",
        "exampleJa": "あとで友人に会います。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "meet 会う／初めて会う 会う／初めて会う 人"
  },
  {
    "id": "v_lose",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "lose",
    "japanese": "失う／なくす／負ける",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "失う／なくす／負ける",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "lose",
        "example": "Do not lose this.",
        "exampleJa": "これをなくさないで。"
      },
      {
        "label": "三人称単数現在",
        "formName": "loses",
        "example": "He loses things often.",
        "exampleJa": "彼はよく物をなくします。"
      },
      {
        "label": "過去形",
        "formName": "lost",
        "example": "I lost my key.",
        "exampleJa": "鍵をなくしました。"
      },
      {
        "label": "過去分詞",
        "formName": "lost",
        "example": "I have lost track of time.",
        "exampleJa": "時間の感覚を失っていました。"
      },
      {
        "label": "ing形",
        "formName": "losing",
        "example": "We are losing the game.",
        "exampleJa": "試合で負けています。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "lose 失う／なくす／負ける 失う／なくす／負ける 行動"
  },
  {
    "id": "v_win",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "win",
    "japanese": "勝つ／勝ち取る",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "勝つ／勝ち取る",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "win",
        "example": "I want to win.",
        "exampleJa": "勝ちたいです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "wins",
        "example": "She wins often.",
        "exampleJa": "彼女はよく勝ちます。"
      },
      {
        "label": "過去形",
        "formName": "won",
        "example": "We won the game.",
        "exampleJa": "試合に勝ちました。"
      },
      {
        "label": "過去分詞",
        "formName": "won",
        "example": "He has won twice.",
        "exampleJa": "彼は2回勝っています。"
      },
      {
        "label": "ing形",
        "formName": "winning",
        "example": "They are winning.",
        "exampleJa": "彼らが勝っています。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "win 勝つ／勝ち取る 勝つ／勝ち取る 行動"
  },
  {
    "id": "v_understand",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "理解",
    "english": "understand",
    "japanese": "理解する／分かる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "理解する／分かる",
        "category": "理解"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "understand",
        "example": "I understand.",
        "exampleJa": "分かりました。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "understands",
        "example": "She understands me.",
        "exampleJa": "彼女は私のことを理解してくれます。"
      },
      {
        "label": "過去形",
        "formName": "understood",
        "example": "I understood the question.",
        "exampleJa": "質問の意味が分かりました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "understood",
        "example": "I have understood everything so far.",
        "exampleJa": "ここまではすべて理解できています。"
      },
      {
        "label": "ing形",
        "formName": "understanding",
        "example": "Understanding this takes time.",
        "exampleJa": "これを理解するには時間がかかります。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "understand 理解する／分かる 理解する／分かる 理解",
    "beginnerTip": "understand は内容や相手の気持ちが分かること。know は知識として知っていることです。"
  },
  {
    "id": "v_believe",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "考え",
    "english": "believe",
    "japanese": "信じる／〜と思う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "信じる／〜と思う",
        "category": "考え"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "believe",
        "example": "I believe you.",
        "exampleJa": "あなたを信じます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "believes",
        "example": "She believes in herself.",
        "exampleJa": "彼女は自分を信じています。"
      },
      {
        "label": "過去形",
        "formName": "believed",
        "example": "I believed it was true.",
        "exampleJa": "それが本当だと思っていました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "believed",
        "example": "I have always believed that.",
        "exampleJa": "ずっとそう信じてきました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "believing",
        "example": "Believing in yourself is important.",
        "exampleJa": "自分を信じることは大切です。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "believe 信じる／〜と思う 信じる／〜と思う 考え",
    "beginnerTip": "believe は「信じている」という強めの気持ちです。普通の意見は think、そうなってほしい願いは hope を使います。"
  },
  {
    "id": "v_hope",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "hope",
    "japanese": "望む／〜だといいと思う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "望む／〜だといいと思う",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "hope",
        "example": "I hope you are okay.",
        "exampleJa": "元気だといいな。"
      },
      {
        "label": "三人称単数現在",
        "formName": "hopes",
        "example": "She hopes to visit Japan.",
        "exampleJa": "彼女は日本を訪れたいと思っています。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "hoped",
        "example": "I hoped to see you.",
        "exampleJa": "あなたに会えたらいいと思っていました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "hoped",
        "example": "I have always hoped to visit.",
        "exampleJa": "ずっと訪れたいと思っていました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "hoping",
        "example": "I am hoping to go next year.",
        "exampleJa": "来年行けたらと思っています。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "hope 望む／〜だといいと思う 望む／〜だといいと思う 感情",
    "beginnerTip": "hope は「そうなってほしい」という願いです。普通の意見は think、確信に近いときは believe を使います。"
  },
  {
    "id": "v_guess",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "guess",
    "japanese": "推測する／〜かなと思う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "推測する／〜かなと思う",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "guess",
        "example": "I guess so.",
        "exampleJa": "そうかもね。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "guesses",
        "example": "He guesses the answer.",
        "exampleJa": "彼は答えを推測します。"
      },
      {
        "label": "過去形",
        "formName": "guessed",
        "example": "I guessed wrong.",
        "exampleJa": "予想が外れました。"
      },
      {
        "label": "過去分詞",
        "formName": "guessed",
        "example": "I should have guessed.",
        "exampleJa": "気づくべきでした。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "guessing",
        "example": "I am just guessing.",
        "exampleJa": "ただの推測です。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "guess 推測する／〜かなと思う 推測する／〜かなと思う 会話",
    "usageTags": [
      "控えめな意見",
      "推測"
    ],
    "beginnerTip": "I guess ... は「たぶん〜かな／〜だと思う」のように、断定を弱める会話表現として非常によく使います。think より確信が弱いときに使います。"
  },
  {
    "id": "v_seem",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "印象",
    "english": "seem",
    "japanese": "〜のように思える／見える",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "〜のように思える／見える",
        "category": "印象"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "seem",
        "example": "You seem tired.",
        "exampleJa": "疲れているようですね。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "seems",
        "example": "It seems fine.",
        "exampleJa": "問題なさそうです。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "seemed",
        "example": "It seemed strange.",
        "exampleJa": "変に思えました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "seemed",
        "example": "It has always seemed strange to me.",
        "exampleJa": "私にはずっと不思議に思えます。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "seeming",
        "lowFrequency": true
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "seem 〜のように思える／見える 〜のように思える／見える 印象",
    "usageTags": [
      "印象・推測",
      "状況から判断"
    ],
    "beginnerTip": "seem は見た目だけでなく、状況・話・雰囲気から「〜のようだ」と判断できます。look like は見た目の印象や外見の類似により重点があります。"
  },
  {
    "id": "v_sound",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "印象",
    "english": "sound",
    "japanese": "〜に聞こえる／音",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "〜に聞こえる",
        "category": "印象"
      },
      {
        "pos": "名詞",
        "meaning": "音",
        "category": "知覚",
        "example": "I heard a strange sound.",
        "exampleJa": "変な音が聞こえました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "sound",
        "example": "Does that sound good?",
        "exampleJa": "それでいい？",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "sounds",
        "example": "It sounds strange.",
        "exampleJa": "変に聞こえます。"
      },
      {
        "label": "過去形",
        "formName": "sounded",
        "example": "It sounded serious.",
        "exampleJa": "深刻そうに聞こえました。"
      },
      {
        "label": "過去分詞",
        "formName": "sounded",
        "example": "That has sounded good all along.",
        "exampleJa": "それはずっと良さそうに聞こえていました。"
      },
      {
        "label": "ing形",
        "formName": "sounding",
        "example": "The plan is sounding better now.",
        "exampleJa": "その案はだんだん良さそうに思えてきました。",
        "needsHint": true
      }
    ],
    "changeType": "",
    "beginnerTip": "sound + 形容詞 で「〜に聞こえる／〜そうだ」を表せます。",
    "searchKeywords": "sound 〜に聞こえる／音 〜に聞こえる 音 印象"
  },
  {
    "id": "v_mind",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "会話",
    "english": "mind",
    "japanese": "気にする／嫌がる／心",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "気にする／嫌がる",
        "category": "会話"
      },
      {
        "pos": "名詞",
        "meaning": "心／考え",
        "category": "考え",
        "example": "I changed my mind.",
        "exampleJa": "考えが変わりました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "mind",
        "example": "Do you mind if I sit here?",
        "exampleJa": "ここに座ってもいいですか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "minds",
        "example": "She minds the noise.",
        "exampleJa": "彼女はその騒音を気にします。"
      },
      {
        "label": "過去形",
        "formName": "minded",
        "example": "I never minded waiting.",
        "exampleJa": "待つのは気になりませんでした。"
      },
      {
        "label": "過去分詞",
        "formName": "minded",
        "example": "I have not minded it.",
        "exampleJa": "それは気になっていません。"
      },
      {
        "label": "ing形",
        "formName": "minding",
        "example": "I am minding my own business.",
        "exampleJa": "自分のことに集中しています。"
      }
    ],
    "changeType": "",
    "beginnerTip": "Do you mind ...? は直訳よりも「〜しても構いませんか？」として覚えると使いやすいです。",
    "searchKeywords": "mind 気にする／嫌がる／心 気にする／嫌がる 心／考え 会話"
  },
  {
    "id": "v_matter",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "評価",
    "english": "matter",
    "japanese": "重要である／問題",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "重要である／問題になる",
        "category": "評価"
      },
      {
        "pos": "名詞",
        "meaning": "問題／事柄",
        "category": "問題",
        "example": "What is the matter?",
        "exampleJa": "どうしたの？"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "matter",
        "example": "It does not matter.",
        "exampleJa": "問題ありません。"
      },
      {
        "label": "三人称単数現在",
        "formName": "matters",
        "example": "It matters to me.",
        "exampleJa": "私には大切です。"
      },
      {
        "label": "過去形",
        "formName": "mattered",
        "example": "It mattered then.",
        "exampleJa": "その時は重要でした。"
      },
      {
        "label": "過去分詞",
        "formName": "mattered",
        "example": "It has always mattered to me.",
        "exampleJa": "私にとってずっと大切なことです。"
      },
      {
        "label": "ing形",
        "formName": "mattering",
        "lowFrequency": true
      }
    ],
    "changeType": "",
    "beginnerTip": "It doesn’t matter. は「問題ないよ／気にしないで」の意味で頻出します。",
    "searchKeywords": "matter 重要である／問題 重要である／問題になる 問題／事柄 評価"
  },
  {
    "id": "v_miss",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "miss",
    "japanese": "逃す／乗り遅れる／恋しく思う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "逃す／乗り遅れる／恋しく思う",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "miss",
        "example": "I miss you.",
        "exampleJa": "あなたが恋しいです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "misses",
        "example": "She misses the train often.",
        "exampleJa": "彼女はよく電車に乗り遅れます。"
      },
      {
        "label": "過去形",
        "formName": "missed",
        "example": "I missed the bus.",
        "exampleJa": "バスに乗り遅れました。"
      },
      {
        "label": "過去分詞",
        "formName": "missed",
        "example": "I have missed this place.",
        "exampleJa": "この場所が恋しかったです。"
      },
      {
        "label": "ing形",
        "formName": "missing",
        "example": "I am missing home.",
        "exampleJa": "家が恋しいです。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "searchKeywords": "miss 逃す／乗り遅れる／恋しく思う 逃す／乗り遅れる／恋しく思う 感情"
  },
  {
    "id": "v_spend",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "時間・お金",
    "english": "spend",
    "japanese": "使う／過ごす",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "使う／過ごす",
        "category": "時間・お金"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "spend",
        "example": "I spend a lot of time here.",
        "exampleJa": "ここで多くの時間を過ごします。"
      },
      {
        "label": "三人称単数現在",
        "formName": "spends",
        "example": "She spends too much money.",
        "exampleJa": "彼女はお金を使いすぎます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "spent",
        "example": "I spent the day at home.",
        "exampleJa": "1日を家で過ごしました。"
      },
      {
        "label": "過去分詞",
        "formName": "spent",
        "example": "I have spent enough.",
        "exampleJa": "十分お金を使いました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "spending",
        "example": "I am spending the weekend here.",
        "exampleJa": "週末をここで過ごしています。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "spend 使う／過ごす 使う／過ごす 時間・お金"
  },
  {
    "id": "v_choose",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "選択",
    "english": "choose",
    "japanese": "選ぶ",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "選ぶ",
        "category": "選択"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "choose",
        "example": "Choose one.",
        "exampleJa": "1つ選んで。"
      },
      {
        "label": "三人称単数現在",
        "formName": "chooses",
        "example": "She chooses carefully.",
        "exampleJa": "彼女は慎重に選びます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "chose",
        "example": "I chose this one.",
        "exampleJa": "これを選びました。"
      },
      {
        "label": "過去分詞",
        "formName": "chosen",
        "example": "I have chosen a hotel.",
        "exampleJa": "ホテルを選びました。"
      },
      {
        "label": "ing形",
        "formName": "choosing",
        "example": "I am choosing now.",
        "exampleJa": "今選んでいるところです。",
        "needsHint": true
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "choose 選ぶ 選ぶ 選択",
    "beginnerTip": "choose は選択肢の中から「選ぶ」。decide は考えて「決める」です。"
  },
  {
    "id": "v_decide",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "選択",
    "english": "decide",
    "japanese": "決める／決断する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "決める／決断する",
        "category": "選択"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "decide",
        "example": "I need to decide.",
        "exampleJa": "決める必要があります。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "decides",
        "example": "She decides what to buy.",
        "exampleJa": "彼女は何を買うか決めます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "decided",
        "example": "I decided to go.",
        "exampleJa": "行くことに決めました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "decided",
        "example": "I have decided to stay.",
        "exampleJa": "残ることに決めました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "deciding",
        "example": "I am still deciding.",
        "exampleJa": "まだ決めかねています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "decide 決める／決断する 決める／決断する 選択",
    "beginnerTip": "decide は迷ったあとに「決める」。選択肢から選ぶ動作そのものは choose です。"
  },
  {
    "id": "v_change",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "変化",
    "english": "change",
    "japanese": "変える／変わる／変化",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "変える／変わる",
        "category": "変化"
      },
      {
        "pos": "名詞",
        "meaning": "変化／変更",
        "category": "変化",
        "example": "I need a change.",
        "exampleJa": "変化が必要です。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "change",
        "example": "Things change.",
        "exampleJa": "物事は変わります。"
      },
      {
        "label": "三人称単数現在",
        "formName": "changes",
        "example": "The weather changes quickly.",
        "exampleJa": "天気はすぐ変わります。"
      },
      {
        "label": "過去形",
        "formName": "changed",
        "example": "I changed my plan.",
        "exampleJa": "予定を変えました。"
      },
      {
        "label": "過去分詞",
        "formName": "changed",
        "example": "It has changed a lot.",
        "exampleJa": "大きく変わりました。"
      },
      {
        "label": "ing形",
        "formName": "changing",
        "example": "Things are changing.",
        "exampleJa": "状況が変わっています。"
      }
    ],
    "changeType": "",
    "searchKeywords": "change 変える／変わる／変化 変える／変わる 変化／変更 変化"
  },
  {
    "id": "v_follow",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "follow",
    "japanese": "ついていく／従う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "ついていく／従う",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "follow",
        "example": "Follow me.",
        "exampleJa": "ついてきて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "follows",
        "example": "He follows the rules.",
        "exampleJa": "彼はルールを守ります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "followed",
        "example": "I followed the instructions.",
        "exampleJa": "指示に従いました。"
      },
      {
        "label": "過去分詞",
        "formName": "followed",
        "example": "I have followed your advice.",
        "exampleJa": "あなたの助言に従ってきました。"
      },
      {
        "label": "ing形",
        "formName": "following",
        "example": "I am following your instructions.",
        "exampleJa": "あなたの指示どおりに進めています。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "follow ついていく／従う ついていく／従う 行動"
  },
  {
    "id": "v_hold",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "hold",
    "japanese": "持つ／開催する／保つ",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "持つ／開催する／保つ",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "hold",
        "example": "Hold this.",
        "exampleJa": "これを持って。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "holds",
        "example": "She holds the door.",
        "exampleJa": "彼女はドアを押さえています。"
      },
      {
        "label": "過去形",
        "formName": "held",
        "example": "We held a meeting.",
        "exampleJa": "会議を開きました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "held",
        "example": "I have held this position for years.",
        "exampleJa": "この役職を何年も務めています。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "holding",
        "example": "I am holding your bag.",
        "exampleJa": "あなたのバッグを持っています。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "hold 持つ／開催する／保つ 持つ／開催する／保つ 行動"
  },
  {
    "id": "v_send",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "連絡",
    "english": "send",
    "japanese": "送る",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "送る",
        "category": "連絡"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "send",
        "example": "Send me a message.",
        "exampleJa": "メッセージを送って。"
      },
      {
        "label": "三人称単数現在",
        "formName": "sends",
        "example": "She sends photos often.",
        "exampleJa": "彼女はよく写真を送ります。"
      },
      {
        "label": "過去形",
        "formName": "sent",
        "example": "I sent it yesterday.",
        "exampleJa": "昨日送りました。"
      },
      {
        "label": "過去分詞",
        "formName": "sent",
        "example": "I have sent the email.",
        "exampleJa": "メールを送りました。"
      },
      {
        "label": "ing形",
        "formName": "sending",
        "example": "I am sending it now.",
        "exampleJa": "今送っています。"
      }
    ],
    "changeType": "不規則変化",
    "searchKeywords": "send 送る 送る 連絡"
  },
  {
    "id": "v_receive",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "連絡",
    "english": "receive",
    "japanese": "受け取る／受信する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "受け取る／受信する",
        "category": "連絡"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "receive",
        "example": "I will receive it tomorrow.",
        "exampleJa": "明日受け取ります。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "receives",
        "example": "She receives a lot of emails.",
        "exampleJa": "彼女はたくさんのメールを受け取ります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "received",
        "example": "I received a package.",
        "exampleJa": "荷物を受け取りました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "received",
        "example": "I have received your email.",
        "exampleJa": "あなたのメールを受け取りました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "receiving",
        "example": "We are receiving a lot of messages.",
        "exampleJa": "たくさんのメッセージが届いています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "receive 受け取る／受信する 受け取る／受信する 連絡"
  },
  {
    "id": "v_reach",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "移動",
    "english": "reach",
    "japanese": "着く／届く／到達する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "着く／届く／到達する",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "reach",
        "example": "We should reach the hotel soon.",
        "exampleJa": "もうすぐホテルに着くはずです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "reaches",
        "example": "The train reaches Tokyo at noon.",
        "exampleJa": "その電車は正午に東京へ着きます。"
      },
      {
        "label": "過去形",
        "formName": "reached",
        "example": "I reached home late.",
        "exampleJa": "家に着くのが遅くなりました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "reached",
        "example": "We have reached the hotel.",
        "exampleJa": "ホテルに着きました。"
      },
      {
        "label": "ing形",
        "formName": "reaching",
        "example": "We are reaching the end.",
        "exampleJa": "もうすぐ終わりです。"
      }
    ],
    "changeType": "規則変化",
    "searchKeywords": "reach 着く／届く／到達する 着く／届く／到達する 移動"
  },
  {
    "id": "exp_happen_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "偶然",
    "english": "happen to + 動詞（原形）",
    "japanese": "たまたま〜する",
    "senses": [
      {
        "pos": "表現",
        "meaning": "たまたま〜する",
        "category": "偶然"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "happen to + 動詞（原形）",
        "example": "I happened to see her.",
        "exampleJa": "たまたま彼女を見かけました。"
      }
    ],
    "example": "I happened to see her.",
    "exampleJa": "たまたま彼女を見かけました。",
    "beginnerTip": "予定ではなく偶然そうなったことを表します。",
    "searchKeywords": "happen to + 動詞（原形） たまたま〜する たまたま〜する 偶然"
  },
  {
    "id": "exp_pick_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常",
    "english": "pick up",
    "japanese": "拾う／迎えに行く／受け取る",
    "senses": [
      {
        "pos": "表現",
        "meaning": "拾う／迎えに行く／受け取る",
        "category": "日常"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "pick up",
        "example": "I will pick you up at the station.",
        "exampleJa": "駅まで迎えに行きます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "picks up",
        "example": "She picks up her kids at five.",
        "exampleJa": "彼女は5時に子どもを迎えに行きます。"
      },
      {
        "label": "過去形",
        "formName": "picked up",
        "example": "I picked up the package.",
        "exampleJa": "荷物を受け取りました。"
      },
      {
        "label": "過去分詞",
        "formName": "picked up",
        "example": "I have picked up the tickets.",
        "exampleJa": "チケットを受け取りました。"
      },
      {
        "label": "ing形",
        "formName": "picking up",
        "example": "I am picking up my friend now.",
        "exampleJa": "今、友達を迎えに行くところです。"
      }
    ],
    "example": "I will pick you up at the station.",
    "exampleJa": "駅まで迎えに行きます。",
    "beginnerTip": "意味が多い句動詞です。人なら「迎えに行く」、物なら「拾う／受け取る」など文脈で判断します。",
    "searchKeywords": "pick up 拾う／迎えに行く／受け取る 拾う／迎えに行く／受け取る 日常",
    "changeType": "規則変化 (-ed)"
  },
  {
    "id": "exp_find_out",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "理解",
    "english": "find out",
    "japanese": "知る／突き止める",
    "senses": [
      {
        "pos": "表現",
        "meaning": "知る／突き止める",
        "category": "理解"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "find out",
        "example": "I found out the truth.",
        "exampleJa": "真実を知りました。"
      }
    ],
    "example": "I found out the truth.",
    "exampleJa": "真実を知りました。",
    "beginnerTip": "find は「見つける」、find out は調べたりして「知る／分かる」です。",
    "searchKeywords": "find out 知る／突き止める 知る／突き止める 理解"
  },
  {
    "id": "exp_look_for",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "行動",
    "english": "look for",
    "japanese": "探す",
    "senses": [
      {
        "pos": "表現",
        "meaning": "探す",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "look for",
        "example": "I am looking for my key.",
        "exampleJa": "鍵を探しています。"
      }
    ],
    "example": "I am looking for my key.",
    "exampleJa": "鍵を探しています。",
    "beginnerTip": "look at は「見る」、look for は「探す」です。find は見つけた結果、look for は探している動作です。",
    "searchKeywords": "look for 探す 探す 行動"
  },
  {
    "id": "exp_look_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "見た目",
    "english": "look like",
    "japanese": "〜のように見える／〜に似ている",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜のように見える／〜に似ている",
        "category": "見た目"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "look like",
        "example": "You look like your mother.",
        "exampleJa": "お母さんに似ていますね。"
      }
    ],
    "example": "You look like your mother.",
    "exampleJa": "お母さんに似ていますね。",
    "beginnerTip": "look like は主に見た目・外見からの判断です。seem は見た目以外の状況・話・雰囲気からの推測にも使えます。",
    "searchKeywords": "look like 〜のように見える／〜に似ている 〜のように見える／〜に似ている 見た目",
    "usageTags": [
      "見た目・外見",
      "似た表現：seem"
    ]
  },
  {
    "id": "exp_get_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常",
    "english": "get up",
    "japanese": "起きる／立ち上がる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "起きる／立ち上がる",
        "category": "日常"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "get up",
        "example": "I get up at seven.",
        "exampleJa": "7時に起きます。"
      }
    ],
    "example": "I get up at seven.",
    "exampleJa": "7時に起きます。",
    "searchKeywords": "get up 起きる／立ち上がる 起きる／立ち上がる 日常"
  },
  {
    "id": "exp_come_back",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "移動",
    "english": "come back",
    "japanese": "戻ってくる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "戻ってくる",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "come back",
        "example": "Come back soon.",
        "exampleJa": "早く戻ってきて。"
      }
    ],
    "example": "Come back soon.",
    "exampleJa": "早く戻ってきて。",
    "beginnerTip": "come は話し手か相手のいる場所へ向かうイメージなので、come back は「（そちらへ／こちらへ）戻ってくる」です。",
    "searchKeywords": "come back 戻ってくる 戻ってくる 移動"
  },
  {
    "id": "exp_go_back",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "移動",
    "english": "go back",
    "japanese": "戻る／戻っていく",
    "senses": [
      {
        "pos": "表現",
        "meaning": "戻る／戻っていく",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "go back",
        "example": "I want to go back there.",
        "exampleJa": "そこへ戻りたいです。"
      }
    ],
    "example": "I want to go back there.",
    "exampleJa": "そこへ戻りたいです。",
    "beginnerTip": "go は話し手から離れる方向の移動なので go back は「戻っていく」イメージです。",
    "searchKeywords": "go back 戻る／戻っていく 戻る／戻っていく 移動"
  },
  {
    "id": "exp_get_back",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "移動",
    "english": "get back",
    "japanese": "戻る／取り戻す",
    "senses": [
      {
        "pos": "表現",
        "meaning": "戻る／取り戻す",
        "category": "移動"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "get back",
        "example": "What time did you get back?",
        "exampleJa": "何時に戻ったの？"
      }
    ],
    "example": "What time did you get back?",
    "exampleJa": "何時に戻ったの？",
    "beginnerTip": "get back は「戻る」以外に get it back で「取り戻す」もあります。",
    "searchKeywords": "get back 戻る／取り戻す 戻る／取り戻す 移動"
  },
  {
    "id": "exp_grow_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "人生",
    "english": "grow up",
    "japanese": "育つ／大人になる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "育つ／大人になる",
        "category": "人生"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "grow up",
        "example": "Kids grow up so fast.",
        "exampleJa": "子どもが育つのは本当に早いです。"
      },
      {
        "label": "三人称単数現在",
        "formName": "grows up",
        "example": "She grows up fast.",
        "exampleJa": "彼女はあっという間に成長します。"
      },
      {
        "label": "過去形",
        "formName": "grew up",
        "example": "I grew up in Japan.",
        "exampleJa": "日本で育ちました。"
      },
      {
        "label": "過去分詞",
        "formName": "grown up",
        "example": "She has grown up a lot.",
        "exampleJa": "彼女はずいぶん成長しました。"
      },
      {
        "label": "ing形",
        "formName": "growing up",
        "example": "I enjoyed growing up here.",
        "exampleJa": "ここで育つのは楽しかったです。"
      }
    ],
    "example": "Kids grow up so fast.",
    "exampleJa": "子どもが育つのは本当に早いです。",
    "beginnerTip": "「育つ／大人になる」。grow は不規則に変化します：grow → grew → grown。",
    "searchKeywords": "grow up 育つ／大人になる 育つ／大人になる 人生",
    "changeType": "不規則変化（grow - grew - grown）"
  },
  {
    "id": "exp_hang_out",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "友人",
    "english": "hang out",
    "japanese": "遊ぶ／一緒に過ごす",
    "senses": [
      {
        "pos": "表現",
        "meaning": "遊ぶ／一緒に過ごす",
        "category": "友人"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "hang out",
        "example": "Do you want to hang out this weekend?",
        "exampleJa": "今週末遊ばない？"
      },
      {
        "label": "三人称単数現在",
        "formName": "hangs out",
        "example": "She hangs out with her friends after school.",
        "exampleJa": "彼女は放課後に友達と過ごします。"
      },
      {
        "label": "過去形",
        "formName": "hung out",
        "example": "We hung out all day.",
        "exampleJa": "私たちは1日中一緒に過ごしました。"
      },
      {
        "label": "過去分詞",
        "formName": "hung out",
        "example": "We have hung out a lot lately.",
        "exampleJa": "最近よく一緒に遊んでいます。"
      },
      {
        "label": "ing形",
        "formName": "hanging out",
        "example": "I am hanging out with friends tonight.",
        "exampleJa": "今夜は友達と過ごします。"
      }
    ],
    "example": "Do you want to hang out this weekend?",
    "exampleJa": "今週末遊ばない？",
    "beginnerTip": "友人と気軽に一緒に過ごすときによく使います。hang の過去形・過去分詞は hung です。",
    "searchKeywords": "hang out 遊ぶ／一緒に過ごす 遊ぶ／一緒に過ごす 友人",
    "changeType": "不規則変化（hang - hung - hung）"
  },
  {
    "id": "exp_give_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "行動",
    "english": "give up",
    "japanese": "諦める／やめる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "諦める／やめる",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "give up",
        "example": "Do not give up.",
        "exampleJa": "諦めないで。"
      }
    ],
    "example": "Do not give up.",
    "exampleJa": "諦めないで。",
    "searchKeywords": "give up 諦める／やめる 諦める／やめる 行動"
  },
  {
    "id": "exp_take_care_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常",
    "english": "take care of",
    "japanese": "世話をする／対処する",
    "senses": [
      {
        "pos": "表現",
        "meaning": "世話をする／対処する",
        "category": "日常"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "take care of",
        "example": "I will take care of it.",
        "exampleJa": "私が対応します。"
      }
    ],
    "example": "I will take care of it.",
    "exampleJa": "私が対応します。",
    "beginnerTip": "人・動物の世話だけでなく、問題や仕事を「対処する」意味でも使います。",
    "searchKeywords": "take care of 世話をする／対処する 世話をする／対処する 日常"
  },
  {
    "id": "exp_have_got",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "所有",
    "english": "have got",
    "japanese": "持っている／〜がある",
    "senses": [
      {
        "pos": "表現",
        "meaning": "持っている／〜がある",
        "category": "所有"
      },
      {
        "pos": "表現",
        "meaning": "〜しなければならない（have got to）",
        "category": "義務",
        "example": "I've got to go.",
        "exampleJa": "もう行かなきゃ。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "have got",
        "example": "I've got a headache.",
        "exampleJa": "頭が痛いです。"
      }
    ],
    "example": "I have got a problem.",
    "exampleJa": "問題があります。",
    "beginnerTip": "意味は have と同じ「持っている／ある」です。違いは雰囲気で、have got は会話向きのくだけた言い方です（I've got / She's got と短くするのが普通）。今の状態を言うときに使い、過去は had を使います（had got とは言いません）。疑問文は、アメリカ英語では Do you have ...? が普通です。get の過去分詞 gotten（手に入れた）とは別ものです。",
    "searchKeywords": "have got 持っている／〜がある 持っている／〜がある 所有"
  },
  {
    "id": "adv_just",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "頻度・強調",
    "english": "just",
    "japanese": "たった今／ただ／ちょうど",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "たった今",
        "category": "時間",
        "example": "I just got home.",
        "exampleJa": "たった今家に着きました。"
      },
      {
        "pos": "副詞",
        "meaning": "ただ／単に",
        "category": "限定",
        "example": "I just want to help.",
        "exampleJa": "ただ手伝いたいだけです。"
      },
      {
        "pos": "副詞",
        "meaning": "ちょうど",
        "category": "程度",
        "example": "That is just right.",
        "exampleJa": "それがちょうどいいです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "just",
        "example": "I just got home.",
        "exampleJa": "たった今家に着きました。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "just は文脈で「たった今」「ただ」「ちょうど」「〜だけ」などに変わります。",
    "searchKeywords": "just たった今／ただ／ちょうど たった今 ただ／単に ちょうど 頻度・強調"
  },
  {
    "id": "adv_yet",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "yet",
    "japanese": "まだ／もう",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "まだ（否定文）",
        "category": "時間",
        "example": "I have not eaten yet.",
        "exampleJa": "まだ食べていません。"
      },
      {
        "pos": "副詞",
        "meaning": "もう（疑問文）",
        "category": "時間",
        "example": "Have you eaten yet?",
        "exampleJa": "もう食べた？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "yet",
        "example": "I have not finished yet.",
        "exampleJa": "まだ終わっていません。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "否定文では「まだ」、疑問文では「もう」が基本です。",
    "searchKeywords": "yet まだ／もう まだ（否定文） もう（疑問文） 時間"
  },
  {
    "id": "adv_even",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "強調",
    "english": "even",
    "japanese": "〜さえ／〜すら",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "〜さえ／〜すら",
        "category": "強調"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "even",
        "example": "Even I know that.",
        "exampleJa": "私でさえそれを知っています。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "even 〜さえ／〜すら 〜さえ／〜すら 強調"
  },
  {
    "id": "adv_ever",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "ever",
    "japanese": "今までに／これまで",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "今までに／これまで",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "ever",
        "example": "Have you ever been there?",
        "exampleJa": "今までそこへ行ったことある？"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "ever 今までに／これまで 今までに／これまで 時間"
  },
  {
    "id": "adv_almost",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "程度",
    "english": "almost",
    "japanese": "ほとんど／もう少しで",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "ほとんど／もう少しで",
        "category": "程度"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "almost",
        "example": "I am almost done.",
        "exampleJa": "もうほとんど終わりです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "almost ほとんど／もう少しで ほとんど／もう少しで 程度"
  },
  {
    "id": "adv_enough",
    "type": "word",
    "partOfSpeech": [
      "形容詞",
      "副詞"
    ],
    "category": "程度",
    "english": "enough",
    "japanese": "十分な／十分に",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "十分な",
        "category": "量",
        "example": "We have enough food.",
        "exampleJa": "食べ物は十分あります。"
      },
      {
        "pos": "副詞",
        "meaning": "十分に",
        "category": "程度",
        "example": "It is good enough.",
        "exampleJa": "十分に良いです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "enough",
        "example": "I have enough time.",
        "exampleJa": "十分な時間があります。"
      }
    ],
    "changeType": "",
    "beginnerTip": "形容詞の後では good enough のように後ろに置くのが基本です。",
    "searchKeywords": "enough 十分な／十分に 十分な 十分に 程度"
  },
  {
    "id": "adv_too",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "程度",
    "english": "too",
    "japanese": "〜も／〜すぎる",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "〜も",
        "category": "追加",
        "example": "I want to go too.",
        "exampleJa": "私も行きたいです。"
      },
      {
        "pos": "副詞",
        "meaning": "〜すぎる",
        "category": "程度",
        "example": "It is too expensive.",
        "exampleJa": "高すぎます。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "too",
        "example": "I want to go too.",
        "exampleJa": "私も行きたいです。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "too は「〜も」と「〜すぎる」の2つが非常によく出ます。「〜も」の too は文末に置きます：I like it, too. 動詞があっても文末で大丈夫で、会話ではこちらがよく使われます。Me too. は too だけです。also との違いは also のカードも見てください。",
    "searchKeywords": "too 〜も／〜すぎる 〜も 〜すぎる 程度"
  },
  {
    "id": "adv_also",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "追加",
    "english": "also",
    "japanese": "〜もまた",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "〜もまた",
        "category": "追加"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "also",
        "example": "I also like it.",
        "exampleJa": "私もそれが好きです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "also 〜もまた 〜もまた 追加",
    "beginnerTip": "意味は too と同じ「〜も」です。also は文の真ん中に置きます（be動詞の後ろ、一般動詞の前）：I also like it. / I am also tired. 文頭の Also, は「それと」と話を足すときに使います。会話では文末の too のほうがよく使われ、文末の also は不自然に聞こえることが多いです。"
  },
  {
    "id": "adv_only",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "形容詞"
    ],
    "category": "限定",
    "english": "only",
    "japanese": "〜だけ／唯一の",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "〜だけ",
        "category": "限定",
        "example": "I only need five minutes.",
        "exampleJa": "5分だけ必要です。"
      },
      {
        "pos": "形容詞",
        "meaning": "唯一の",
        "category": "限定",
        "example": "This is my only chance.",
        "exampleJa": "これが唯一のチャンスです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "only",
        "example": "I only have one.",
        "exampleJa": "1つしかありません。",
        "needsHint": true
      }
    ],
    "changeType": "",
    "searchKeywords": "only 〜だけ／唯一の 〜だけ 唯一の 限定"
  },
  {
    "id": "adv_especially",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "強調",
    "english": "especially",
    "japanese": "特に",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "特に",
        "category": "強調"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "especially",
        "example": "I especially like this one.",
        "exampleJa": "特にこれが好きです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "especially 特に 特に 強調"
  },
  {
    "id": "adv_finally",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "finally",
    "japanese": "ついに／ようやく",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "ついに／ようやく",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "finally",
        "example": "I finally finished it.",
        "exampleJa": "ようやく終わりました。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "finally ついに／ようやく ついに／ようやく 時間"
  },
  {
    "id": "adv_recently",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "recently",
    "japanese": "最近",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "最近",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "recently",
        "example": "I have been busy recently.",
        "exampleJa": "最近忙しいです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "recently 最近 最近 時間"
  },
  {
    "id": "adv_soon",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "soon",
    "japanese": "すぐに／まもなく",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "すぐに／まもなく",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "soon",
        "example": "See you soon.",
        "exampleJa": "またすぐにね。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "soon すぐに／まもなく すぐに／まもなく 時間"
  },
  {
    "id": "adv_together",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "関係",
    "english": "together",
    "japanese": "一緒に",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "一緒に",
        "category": "関係"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "together",
        "example": "Let us go together.",
        "exampleJa": "一緒に行こう。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "together 一緒に 一緒に 関係"
  },
  {
    "id": "adv_away",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "場所",
    "english": "away",
    "japanese": "離れて／不在で",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "離れて／不在で",
        "category": "場所"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "away",
        "example": "She is away this week.",
        "exampleJa": "彼女は今週不在です。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "away 離れて／不在で 離れて／不在で 場所"
  },
  {
    "id": "adv_back",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "名詞"
    ],
    "category": "方向",
    "english": "back",
    "japanese": "戻って／後ろへ",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "戻って／後ろへ",
        "category": "方向"
      },
      {
        "pos": "名詞",
        "meaning": "背中／後ろ",
        "category": "体",
        "example": "My back hurts.",
        "exampleJa": "背中が痛いです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "back",
        "example": "I will be back soon.",
        "exampleJa": "すぐ戻ります。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "back 戻って／後ろへ 戻って／後ろへ 方向"
  },
  {
    "id": "adv_again",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "again",
    "japanese": "もう一度／再び",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "もう一度／再び",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "again",
        "example": "Say that again, please.",
        "exampleJa": "もう一度言ってください。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "again もう一度／再び もう一度／再び 時間"
  },
  {
    "id": "conj_though",
    "type": "word",
    "partOfSpeech": [
      "接続詞",
      "副詞"
    ],
    "category": "つなぎ",
    "english": "though",
    "japanese": "〜だけど／でも",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "〜だけど／〜にもかかわらず",
        "category": "つなぎ",
        "example": "Though I was tired, I went out.",
        "exampleJa": "疲れていたけど出かけました。"
      },
      {
        "pos": "副詞",
        "meaning": "でもね／とはいえ（文末）",
        "category": "会話",
        "example": "It was expensive. I liked it, though.",
        "exampleJa": "高かった。でも気に入りました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "though",
        "example": "I like it, though.",
        "exampleJa": "でも、私はそれが好きです。"
      }
    ],
    "changeType": "",
    "beginnerTip": "文末の though は会話で「でもね／とはいえ」のように使われます。",
    "searchKeywords": "though 〜だけど／でも 〜だけど／〜にもかかわらず でもね／とはいえ（文末） つなぎ"
  },
  {
    "id": "adv_instead",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "選択",
    "english": "instead",
    "japanese": "代わりに",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "代わりに",
        "category": "選択"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "instead",
        "example": "I stayed home instead.",
        "exampleJa": "代わりに家にいました。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "instead 代わりに 代わりに 選択"
  },
  {
    "id": "adv_quite",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "程度",
    "english": "quite",
    "japanese": "かなり／なかなか",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "かなり／なかなか",
        "category": "程度"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "quite",
        "example": "It is quite good.",
        "exampleJa": "かなり良いです。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "アメリカ英語では quite は「かなり」の意味で使われることが多いです。強さの目安：really（とても）＞ quite（かなり）＞ kind of（ちょっと）＞ a little（少し）。",
    "searchKeywords": "quite かなり／なかなか かなり／なかなか 程度"
  },
  {
    "id": "adj_right",
    "type": "word",
    "partOfSpeech": [
      "形容詞",
      "名詞",
      "副詞"
    ],
    "category": "評価",
    "english": "right",
    "japanese": "正しい／右の／ちょうど",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "正しい",
        "category": "評価",
        "example": "You are right.",
        "exampleJa": "あなたの言う通りです。"
      },
      {
        "pos": "名詞",
        "meaning": "右／右側",
        "category": "方向",
        "example": "Turn to the right.",
        "exampleJa": "右へ曲がって。"
      },
      {
        "pos": "副詞",
        "meaning": "ちょうど／すぐ",
        "category": "強調",
        "example": "I am right here.",
        "exampleJa": "私はここにいます。"
      },
      {
        "pos": "副詞",
        "meaning": "〜だよね？（確認）",
        "category": "会話",
        "example": "You are coming, right?",
        "exampleJa": "来るよね？"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "right",
        "example": "You are right.",
        "exampleJa": "あなたの言う通りです。"
      }
    ],
    "changeType": "",
    "beginnerTip": "right は「正しい」だけでなく「右」「ちょうど」など頻出の意味があります。",
    "searchKeywords": "right 正しい／右の／ちょうど 正しい 右／右側 ちょうど／すぐ 評価"
  },
  {
    "id": "adj_wrong",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "wrong",
    "japanese": "間違った／おかしい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "間違った／おかしい",
        "category": "評価"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "wrong",
        "example": "Something is wrong.",
        "exampleJa": "何かがおかしいです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "What is wrong? は「どうしたの？」の定番表現です。",
    "searchKeywords": "wrong 間違った／おかしい 間違った／おかしい 評価"
  },
  {
    "id": "adj_sure",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "評価",
    "english": "sure",
    "japanese": "確かな／もちろん",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "確かな",
        "category": "評価"
      },
      {
        "pos": "副詞",
        "meaning": "返事の「もちろん／いいよ」",
        "category": "会話",
        "example": "Sure, I can help.",
        "exampleJa": "もちろん、手伝うよ。"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "sure",
        "example": "Are you sure?",
        "exampleJa": "本当に？／確か？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "Sure. だけで気軽な「いいよ／もちろん」の返事になります。Of course. は「言うまでもなく」という、やや強めの返事です。",
    "searchKeywords": "sure 確かな／もちろん 確かな／もちろん 評価"
  },
  {
    "id": "adj_ready",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "状態",
    "english": "ready",
    "japanese": "準備ができた",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "準備ができた",
        "category": "状態"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "ready",
        "example": "I am ready.",
        "exampleJa": "準備できました。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "ready 準備ができた 準備ができた 状態"
  },
  {
    "id": "adj_afraid",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "afraid",
    "japanese": "怖い／残念ながら",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "怖い／残念ながら",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "afraid",
        "example": "I am afraid of heights.",
        "exampleJa": "高いところが怖いです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "I’m afraid ... は「残念ながら〜です」と丁寧に悪い知らせを伝えるときにも使います。",
    "searchKeywords": "afraid 怖い／残念ながら 怖い／残念ながら 感情"
  },
  {
    "id": "adj_surprised",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "surprised",
    "japanese": "驚いた",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "驚いた",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "surprised",
        "example": "I was surprised.",
        "exampleJa": "驚きました。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "surprised 驚いた 驚いた 感情"
  },
  {
    "id": "adj_excited",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "excited",
    "japanese": "ワクワクした／興奮した",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "ワクワクした／興奮した",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "excited",
        "example": "I am excited about the trip.",
        "exampleJa": "旅行が楽しみです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "excited ワクワクした／興奮した ワクワクした／興奮した 感情"
  },
  {
    "id": "adj_worried",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "worried",
    "japanese": "心配している",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "心配している",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "worried",
        "example": "I am worried about her.",
        "exampleJa": "彼女が心配です。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "worried 心配している 心配している 感情"
  },
  {
    "id": "adj_glad",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "glad",
    "japanese": "嬉しい／よかった",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "嬉しい／よかった",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "glad",
        "example": "I am glad you came.",
        "exampleJa": "来てくれて嬉しいです。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "glad 嬉しい／よかった 嬉しい／よかった 感情",
    "beginnerTip": "glad は出来事に対して「よかった」と思う嬉しさです。happy は「幸せ・嬉しい」という状態や気分です。"
  },
  {
    "id": "adj_sorry",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情",
    "english": "sorry",
    "japanese": "申し訳ない／残念に思う",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "申し訳ない",
        "category": "感情"
      },
      {
        "pos": "形容詞",
        "meaning": "残念に思う（お気の毒に）",
        "category": "感情",
        "example": "I'm sorry to hear that.",
        "exampleJa": "それは残念です。"
      },
      {
        "pos": "形容詞",
        "meaning": "聞き返し（もう一度言って）",
        "category": "会話",
        "example": "Sorry? Can you say that again?",
        "exampleJa": "え？もう一度言ってくれる？"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "sorry",
        "example": "I am sorry I am late.",
        "exampleJa": "遅れてごめんなさい。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "sorry 申し訳ない／残念に思う 申し訳ない／残念に思う 感情"
  },
  {
    "id": "adj_same",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "比較",
    "english": "same",
    "japanese": "同じ",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "同じ",
        "category": "比較"
      }
    ],
    "forms": [
      {
        "label": "原級",
        "formName": "same",
        "example": "We have the same idea.",
        "exampleJa": "同じ考えです。"
      }
    ],
    "changeType": "変化なし",
    "searchKeywords": "same 同じ 同じ 比較"
  },
  {
    "id": "det_another",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "another",
    "japanese": "もう1つの／別の",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "もう1つの／別の",
        "category": "数量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "another",
        "example": "Can I have another one?",
        "exampleJa": "もう1つもらえますか？"
      }
    ],
    "changeType": "",
    "beginnerTip": "another = an + other の感覚で「もう1つ／別の1つ」です。",
    "searchKeywords": "another もう1つの／別の もう1つの／別の 数量"
  },
  {
    "id": "adj_own",
    "type": "word",
    "partOfSpeech": [
      "形容詞",
      "動詞"
    ],
    "category": "所有",
    "english": "own",
    "japanese": "自分自身の／所有する",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "自分自身の",
        "category": "所有"
      },
      {
        "pos": "動詞",
        "meaning": "所有する",
        "category": "所有",
        "example": "She owns a house.",
        "exampleJa": "彼女は家を所有しています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "own",
        "example": "I have my own room.",
        "exampleJa": "自分の部屋があります。"
      }
    ],
    "changeType": "",
    "beginnerTip": "my own ... のように所有を強調できます。",
    "searchKeywords": "own 自分自身の／所有する 自分自身の 所有する 所有"
  },
  {
    "id": "n_child",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "child",
    "japanese": "子ども",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "子ども",
        "category": "人・物"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "child",
        "example": "The child is sleeping.",
        "exampleJa": "その子どもは寝ています。"
      },
      {
        "label": "複数形",
        "formName": "children",
        "example": "The children are playing.",
        "exampleJa": "子どもたちは遊んでいます。"
      }
    ],
    "changeType": "不規則複数形",
    "searchKeywords": "child 子ども 子ども 人・物"
  },
  {
    "id": "n_man",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "man",
    "japanese": "男性／男の人",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "男性／男の人",
        "category": "人・物"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "man",
        "example": "A man is waiting outside.",
        "exampleJa": "男性が外で待っています。"
      },
      {
        "label": "複数形",
        "formName": "men",
        "example": "Two men are waiting.",
        "exampleJa": "男性が2人待っています。"
      }
    ],
    "changeType": "不規則複数形",
    "searchKeywords": "man 男性／男の人 男性／男の人 人・物"
  },
  {
    "id": "n_woman",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "woman",
    "japanese": "女性／女の人",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "女性／女の人",
        "category": "人・物"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "woman",
        "example": "A woman helped me.",
        "exampleJa": "女性が助けてくれました。"
      },
      {
        "label": "複数形",
        "formName": "women",
        "example": "Two women are talking.",
        "exampleJa": "女性が2人話しています。"
      }
    ],
    "changeType": "不規則複数形",
    "beginnerTip": "woman / women は綴りだけでなく発音も変わります。",
    "searchKeywords": "woman 女性／女の人 女性／女の人 人・物"
  },
  {
    "id": "n_tooth",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "tooth",
    "japanese": "歯",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "歯",
        "category": "人・物"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "tooth",
        "example": "My tooth hurts.",
        "exampleJa": "歯が痛いです。"
      },
      {
        "label": "複数形",
        "formName": "teeth",
        "example": "Brush your teeth.",
        "exampleJa": "歯を磨いて。"
      }
    ],
    "changeType": "不規則複数形",
    "searchKeywords": "tooth 歯 歯 人・物"
  },
  {
    "id": "n_foot",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "foot",
    "japanese": "足／足部",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "足／足部",
        "category": "人・物"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "foot",
        "example": "My foot hurts.",
        "exampleJa": "足が痛いです。"
      },
      {
        "label": "複数形",
        "formName": "feet",
        "example": "My feet are tired.",
        "exampleJa": "足が疲れています。"
      }
    ],
    "changeType": "不規則複数形",
    "searchKeywords": "foot 足／足部 足／足部 人・物"
  },
  {
    "id": "n_life",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "生活",
    "english": "life",
    "japanese": "人生／生活／命",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "人生／生活／命",
        "category": "生活"
      }
    ],
    "forms": [
      {
        "label": "単数形",
        "formName": "life",
        "example": "Life is short.",
        "exampleJa": "人生は短いです。"
      },
      {
        "label": "複数形",
        "formName": "lives",
        "example": "It changed many lives.",
        "exampleJa": "多くの人の人生を変えました。"
      }
    ],
    "changeType": "f → ves",
    "beginnerTip": "life の複数形は lives です。",
    "searchKeywords": "life 人生／生活／命 人生／生活／命 生活"
  },
  {
    "id": "exp_i_am_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "I am（I'm）",
    "japanese": "私は〜です／〜にいる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私は〜です／〜にいる",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "現在形",
        "formName": "am / is / are",
        "example": "I am at home.",
        "exampleJa": "私は家にいます。"
      },
      {
        "label": "過去形",
        "formName": "was / were",
        "example": "I was tired.",
        "exampleJa": "私は疲れていました。"
      },
      {
        "label": "過去分詞",
        "formName": "been",
        "example": "I have been busy.",
        "exampleJa": "ずっと忙しかったです。"
      },
      {
        "label": "ing形",
        "formName": "being",
        "example": "He is being quiet.",
        "exampleJa": "彼は静かにしています。"
      }
    ],
    "example": "I am at home.",
    "exampleJa": "私は家にいます。",
    "beginnerTip": "主語によって be 動詞が変わります。",
    "searchKeywords": "I am（I'm） 私は〜です／〜にいる 私は〜です／〜にいる 省略形",
    "contractions": [
      "I'm",
      "you're",
      "he's",
      "she's",
      "it's",
      "we're",
      "they're"
    ],
    "contractionNote": "he's / she's / it's は has の省略形になる場合もあります。文の後ろから判断します。",
    "contractionPairs": [
      {
        "short": "I'm",
        "full": "I am",
        "example": "I'm ready.",
        "exampleJa": "私は準備できています。"
      },
      {
        "short": "you're",
        "full": "you are",
        "example": "You're right.",
        "exampleJa": "あなたの言う通りです。"
      },
      {
        "short": "he's",
        "full": "he is",
        "example": "He's here.",
        "exampleJa": "彼はここにいます。"
      },
      {
        "short": "she's",
        "full": "she is",
        "example": "She's busy.",
        "exampleJa": "彼女は忙しいです。"
      },
      {
        "short": "it's",
        "full": "it is",
        "example": "It's okay.",
        "exampleJa": "大丈夫です。"
      },
      {
        "short": "we're",
        "full": "we are",
        "example": "We're ready.",
        "exampleJa": "私たちは準備できています。"
      },
      {
        "short": "they're",
        "full": "they are",
        "example": "They're outside.",
        "exampleJa": "彼らは外にいます。"
      }
    ]
  },
  {
    "id": "exp_i_have_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "I have",
    "japanese": "私は持っている／〜したことがある・〜してきた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私は持っている／〜したことがある・〜してきた",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "I have（I've）",
        "example": "I have a meeting today.",
        "exampleJa": "今日は会議があります。",
        "quizExclude": true
      },
      {
        "label": "三人称単数現在",
        "formName": "has",
        "example": "She has a car.",
        "exampleJa": "彼女は車を持っています。"
      },
      {
        "label": "過去形",
        "formName": "had",
        "example": "I had more time yesterday.",
        "exampleJa": "昨日はもっと時間がありました。"
      },
      {
        "label": "過去分詞",
        "formName": "had",
        "example": "I have had this phone for years.",
        "exampleJa": "このスマホを何年も使っています。"
      },
      {
        "label": "ing形",
        "formName": "having",
        "example": "I am having lunch.",
        "exampleJa": "昼食を食べています。"
      }
    ],
    "example": "I have a meeting today.",
    "exampleJa": "今日は会議があります。",
    "beginnerTip": "アメリカ英語では所有の have は省略せず I have ... と言うことも多く、I’ve は現在完了で特によく使います。",
    "searchKeywords": "I have（I've） 私は持っている／〜したことがある・〜してきた 私は持っている／〜したことがある・〜してきた 省略形",
    "contractions": [
      "I've",
      "you've",
      "we've",
      "they've",
      "he's",
      "she's",
      "it's"
    ],
    "contractionNote": "he's / she's / it's は he/she/it has の省略にも、he/she/it is の省略にもなります。後ろが過去分詞なら has の可能性が高いです。",
    "contractionPairs": [
      {
        "short": "I've",
        "full": "I have",
        "example": "I've seen it.",
        "exampleJa": "それを見たことがあります。"
      },
      {
        "short": "you've",
        "full": "you have",
        "example": "You've done enough.",
        "exampleJa": "十分やりました。"
      },
      {
        "short": "we've",
        "full": "we have",
        "example": "We've been there.",
        "exampleJa": "そこへ行ったことがあります。"
      },
      {
        "short": "they've",
        "full": "they have",
        "example": "They've already left.",
        "exampleJa": "彼らはもう出ました。"
      },
      {
        "short": "he's",
        "full": "he has",
        "example": "He's already eaten.",
        "exampleJa": "彼はもう食べ終わっています。"
      },
      {
        "short": "she's",
        "full": "she has",
        "example": "She's been busy.",
        "exampleJa": "彼女はずっと忙しいです。"
      },
      {
        "short": "it's",
        "full": "it has",
        "example": "It's been a long day.",
        "exampleJa": "長い1日でした。"
      }
    ]
  },
  {
    "id": "exp_i_will_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "I will（I'll）",
    "japanese": "私は〜するつもり／〜するだろう",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私は〜するつもり／〜するだろう",
        "category": "省略形"
      },
      {
        "pos": "表現",
        "meaning": "〜だろう（予測）",
        "category": "予測",
        "example": "It will be fine.",
        "exampleJa": "大丈夫でしょう。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "will + 動詞（原形）",
        "example": "I'll call you later.",
        "exampleJa": "あとで電話するね。"
      }
    ],
    "example": "I'll call you later.",
    "exampleJa": "あとで電話するね。",
    "beginnerTip": "will の省略形です。その場で決めたことや約束に使います（I'll help you.）。前から決めていた予定は be going to が自然です。予測は、根拠が目の前にあるときは be going to、考えや見込みのときは will が自然です。",
    "searchKeywords": "I will（I'll） 私は〜するつもり／〜するだろう 私は〜するつもり／〜するだろう 省略形",
    "contractions": [
      "I'll",
      "you'll",
      "he'll",
      "she'll",
      "it'll",
      "we'll",
      "they'll"
    ],
    "contractionPairs": [
      {
        "short": "I'll",
        "full": "I will",
        "example": "I'll call you.",
        "exampleJa": "電話するね。"
      },
      {
        "short": "you'll",
        "full": "you will",
        "example": "You'll like it.",
        "exampleJa": "きっと気に入るよ。"
      },
      {
        "short": "he'll",
        "full": "he will",
        "example": "He'll come later.",
        "exampleJa": "彼はあとで来ます。"
      },
      {
        "short": "she'll",
        "full": "she will",
        "example": "She'll be okay.",
        "exampleJa": "彼女は大丈夫でしょう。"
      },
      {
        "short": "it'll",
        "full": "it will",
        "example": "It'll be fine.",
        "exampleJa": "大丈夫でしょう。"
      },
      {
        "short": "we'll",
        "full": "we will",
        "example": "We'll see.",
        "exampleJa": "様子を見よう。"
      },
      {
        "short": "they'll",
        "full": "they will",
        "example": "They'll arrive soon.",
        "exampleJa": "彼らはもうすぐ着きます。"
      }
    ]
  },
  {
    "id": "exp_i_would_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "I would（I'd）",
    "japanese": "私は〜するだろう／〜したい",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私は〜するだろう／〜したい",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "would + 動詞（原形）",
        "example": "I'd like some coffee.",
        "exampleJa": "コーヒーが欲しいです。"
      }
    ],
    "example": "I'd like some coffee.",
    "exampleJa": "コーヒーが欲しいです。",
    "beginnerTip": "'d は would だけでなく had の省略にもなります。後ろが動詞（原形）なら would、過去分詞なら had と判断しやすいです。",
    "searchKeywords": "I would（I'd） 私は〜するだろう／〜したい 私は〜するだろう／〜したい 省略形",
    "contractions": [
      "I'd",
      "you'd",
      "he'd",
      "she'd",
      "we'd",
      "they'd"
    ],
    "contractionNote": "同じ 'd が had と would の両方を表します。",
    "contractionPairs": [
      {
        "short": "I'd",
        "full": "I would",
        "example": "I'd like some coffee.",
        "exampleJa": "コーヒーが欲しいです。"
      },
      {
        "short": "you'd",
        "full": "you would",
        "example": "You'd like this place.",
        "exampleJa": "この場所が気に入ると思います。"
      },
      {
        "short": "he'd",
        "full": "he would",
        "example": "He'd help us.",
        "exampleJa": "彼なら助けてくれるでしょう。"
      },
      {
        "short": "she'd",
        "full": "she would",
        "example": "She'd love it.",
        "exampleJa": "彼女ならきっと気に入ります。"
      },
      {
        "short": "we'd",
        "full": "we would",
        "example": "We'd like to go.",
        "exampleJa": "私たちは行きたいです。"
      },
      {
        "short": "they'd",
        "full": "they would",
        "example": "They'd understand.",
        "exampleJa": "彼らなら理解するでしょう。"
      }
    ]
  },
  {
    "id": "exp_i_had_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "I had（I'd）",
    "japanese": "〜していた／〜し終わっていた（過去のある時点より前）",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜していた／〜し終わっていた（過去のある時点より前）",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "過去完了",
        "formName": "had + 動詞（過去分詞）",
        "example": "I'd already eaten.",
        "exampleJa": "私はすでに食べ終わっていました。"
      }
    ],
    "example": "I'd already eaten.",
    "exampleJa": "私はすでに食べ終わっていました。",
    "beginnerTip": "'d は had だけでなく would の省略にもなります。後ろが過去分詞なら had と判断しやすいです。",
    "searchKeywords": "I had（I'd） 〜していた／〜し終わっていた（過去のある時点より前） 〜していた／〜し終わっていた（過去のある時点より前） 省略形",
    "contractions": [
      "I'd",
      "you'd",
      "he'd",
      "she'd",
      "we'd",
      "they'd"
    ],
    "contractionNote": "同じ 'd が had と would の両方を表します。",
    "contractionPairs": [
      {
        "short": "I'd",
        "full": "I had",
        "example": "I'd already eaten.",
        "exampleJa": "私はすでに食べ終わっていました。"
      },
      {
        "short": "you'd",
        "full": "you had",
        "example": "You'd already left.",
        "exampleJa": "あなたはすでに出発していました。"
      },
      {
        "short": "he'd",
        "full": "he had",
        "example": "He'd finished before noon.",
        "exampleJa": "彼は正午前に終えていました。"
      },
      {
        "short": "she'd",
        "full": "she had",
        "example": "She'd seen it before.",
        "exampleJa": "彼女は以前それを見たことがありました。"
      },
      {
        "short": "we'd",
        "full": "we had",
        "example": "We'd already decided.",
        "exampleJa": "私たちはすでに決めていました。"
      },
      {
        "short": "they'd",
        "full": "they had",
        "example": "They'd gone home.",
        "exampleJa": "彼らは家に帰っていました。"
      }
    ]
  },
  {
    "id": "exp_do_not_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "do not（don't）",
    "japanese": "〜しない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜しない",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "do not",
        "example": "I don't know.",
        "exampleJa": "分かりません。"
      },
      {
        "label": "三人称単数現在",
        "formName": "does not",
        "example": "She doesn't know.",
        "exampleJa": "彼女は知りません。"
      },
      {
        "label": "過去形",
        "formName": "did not",
        "example": "I didn't know.",
        "exampleJa": "知りませんでした。"
      }
    ],
    "example": "I don't know.",
    "exampleJa": "分かりません。",
    "beginnerTip": "do の時制・主語に合わせて don’t / doesn’t / didn’t が変わります。",
    "searchKeywords": "do not（don't） 〜しない 〜しない 省略形",
    "contractions": [
      "don't",
      "doesn't",
      "didn't"
    ],
    "contractionPairs": [
      {
        "short": "don't",
        "full": "do not",
        "example": "I don't know.",
        "exampleJa": "分かりません。"
      },
      {
        "short": "doesn't",
        "full": "does not",
        "example": "She doesn't know.",
        "exampleJa": "彼女は知りません。"
      },
      {
        "short": "didn't",
        "full": "did not",
        "example": "I didn't know.",
        "exampleJa": "知りませんでした。"
      }
    ]
  },
  {
    "id": "exp_cannot_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "cannot（can't）",
    "japanese": "〜できない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜できない",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "現在",
        "formName": "cannot / can not",
        "example": "I can't go.",
        "exampleJa": "行けません。"
      },
      {
        "label": "過去・控えめ",
        "formName": "could not",
        "example": "I couldn't sleep.",
        "exampleJa": "眠れませんでした。"
      }
    ],
    "example": "I can't go.",
    "exampleJa": "行けません。",
    "beginnerTip": "cannot は通常1語で書き、会話では can’t が非常によく使われます。",
    "searchKeywords": "cannot（can't） 〜できない 〜できない 省略形",
    "contractions": [
      "can't",
      "couldn't"
    ],
    "contractionPairs": [
      {
        "short": "can't",
        "full": "cannot",
        "example": "I can't go.",
        "exampleJa": "行けません。"
      },
      {
        "short": "couldn't",
        "full": "could not",
        "example": "I couldn't sleep.",
        "exampleJa": "眠れませんでした。"
      }
    ]
  },
  {
    "id": "exp_be_not_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "be not（isn't / aren't）",
    "japanese": "〜ではない／〜にいない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜ではない／〜にいない",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "現在",
        "formName": "is not / are not",
        "example": "She isn't here.",
        "exampleJa": "彼女はここにいません。"
      },
      {
        "label": "過去",
        "formName": "was not / were not",
        "example": "They weren't ready.",
        "exampleJa": "彼らは準備できていませんでした。"
      }
    ],
    "example": "She isn't here.",
    "exampleJa": "彼女はここにいません。",
    "beginnerTip": "主語と時制に合わせて形が変わります。",
    "searchKeywords": "be not（isn't / aren't） 〜ではない／〜にいない 〜ではない／〜にいない 省略形",
    "contractions": [
      "isn't",
      "aren't",
      "wasn't",
      "weren't"
    ],
    "contractionPairs": [
      {
        "short": "isn't",
        "full": "is not",
        "example": "She isn't here.",
        "exampleJa": "彼女はここにいません。"
      },
      {
        "short": "aren't",
        "full": "are not",
        "example": "They aren't ready.",
        "exampleJa": "彼らは準備できていません。"
      },
      {
        "short": "wasn't",
        "full": "was not",
        "example": "It wasn't easy.",
        "exampleJa": "簡単ではありませんでした。"
      },
      {
        "short": "weren't",
        "full": "were not",
        "example": "We weren't late.",
        "exampleJa": "私たちは遅れていませんでした。"
      }
    ]
  },
  {
    "id": "exp_have_not_contr",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "省略形",
    "english": "have not（haven't）",
    "japanese": "まだ〜していない／〜したことがない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "まだ〜していない／〜したことがない",
        "category": "省略形"
      }
    ],
    "forms": [
      {
        "label": "現在完了",
        "formName": "have not / has not",
        "example": "I haven't finished yet.",
        "exampleJa": "まだ終わっていません。"
      },
      {
        "label": "過去完了",
        "formName": "had not",
        "example": "I hadn't seen it before.",
        "exampleJa": "それを以前見たことがありませんでした。"
      }
    ],
    "example": "I haven't finished yet.",
    "exampleJa": "まだ終わっていません。",
    "beginnerTip": "have / has / had に応じて省略形が変わります。",
    "searchKeywords": "have not（haven't） まだ〜していない／〜したことがない まだ〜していない／〜したことがない 省略形",
    "contractions": [
      "haven't",
      "hasn't",
      "hadn't"
    ],
    "contractionPairs": [
      {
        "short": "haven't",
        "full": "have not",
        "example": "I haven't finished yet.",
        "exampleJa": "まだ終わっていません。"
      },
      {
        "short": "hasn't",
        "full": "has not",
        "example": "She hasn't arrived yet.",
        "exampleJa": "彼女はまだ着いていません。"
      },
      {
        "short": "hadn't",
        "full": "had not",
        "example": "I hadn't seen it before.",
        "exampleJa": "以前それを見たことがありませんでした。"
      }
    ]
  },
  {
    "id": "exp_enough_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "程度",
    "english": "enough to + 動詞（原形）",
    "japanese": "〜するのに十分…／十分〜なので…できる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜するのに十分…／十分〜なので…できる",
        "category": "程度"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "enough to + 動詞（原形）",
        "example": "I am old enough to travel alone.",
        "exampleJa": "1人で旅行できる年齢です。"
      }
    ],
    "example": "I am old enough to travel alone.",
    "exampleJa": "1人で旅行できる年齢です。",
    "searchKeywords": "enough to + 動詞（原形） 〜するのに十分…／十分〜なので…できる 〜するのに十分…／十分〜なので…できる 程度"
  },
  {
    "id": "exp_too_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "程度",
    "english": "too ... to + 動詞（原形）",
    "japanese": "〜すぎて…できない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜すぎて…できない",
        "category": "程度"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "too + 形容詞 + to + 動詞（原形）",
        "example": "I am too tired to go out.",
        "exampleJa": "疲れすぎて外出できません。"
      }
    ],
    "example": "I am too tired to go out.",
    "exampleJa": "疲れすぎて外出できません。",
    "searchKeywords": "too ... to + 動詞（原形） 〜すぎて…できない 〜すぎて…できない 程度"
  }
];
