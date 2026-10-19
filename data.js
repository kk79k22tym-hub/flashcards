// Flashcards: 404 existing cards (noun articles reviewed) + 110 travel cards.
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
    "english": "have + 名詞",
    "japanese": "持っている",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "持っている",
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
        "label": "基本形",
        "formName": "have + 名詞",
        "example": "I have a car.",
        "exampleJa": "車を持っています。"
      },
      {
        "label": "三人称単数現在",
        "formName": "has + 名詞",
        "example": "She has a dog.",
        "exampleJa": "彼女は犬を飼っています。"
      },
      {
        "label": "過去形",
        "formName": "had + 名詞",
        "example": "I had a car.",
        "exampleJa": "車を持っていました。"
      }
    ],
    "changeType": "不規則 A-B-B",
    "beginnerTip": "have は「持っている」。had はその過去形で「持っていた」。現在完了・過去完了の have/had + 動詞（過去分詞）は別カードで学びます。",
    "searchKeywords": "have 持っている／ある 持っている／ある 基本動詞 have + 名詞 had + 名詞"
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
      },
      {
        "pos": "動詞",
        "meaning": "〜だと思う／たぶん（文末・挿入的な I think）",
        "category": "会話",
        "example": "It's around five, I think.",
        "exampleJa": "5時くらいだと思います。"
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
    "searchKeywords": "think 思う／考える 思う／考える 思考 〜だと思う／たぶん（文末・挿入的な I think） It's around five, I think.",
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
    "beginnerTip": "need to + 動詞（原形）は別の表現カードで学びます。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
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
    "beginnerTip": "love は like より強い「大好き」です。会話では物や食べ物にもよく使います（I love this song.）。 「愛」は通常不可算。some love など。"
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
    "beginnerTip": "look は意識して目を向ける動作です。see は自然に目に入る、watch は動きを追って見るときに使います。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "beginnerTip": "watch はテレビ・動画・試合など、動くものをある程度続けて見るときに使います。see は自然に目に入る、look は目を向ける動作です。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "beginnerTip": "talk は相手と会話するイメージです。speak は言語を話すときや、やや改まった「話す」に使います。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "japanese": "使う（利用する）",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "使う（利用する）",
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
    "searchKeywords": "use 使う 使う 日常生活 使う（利用する）"
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
    "searchKeywords": "work 働く／機能する／仕事／作業 働く／機能する 仕事／作業 仕事",
    "beginnerTip": "「仕事」は通常不可算。some work（仕事が少し）、a job（1つの仕事）。"
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
    "searchKeywords": "drink 飲む／飲み物 飲む 飲み物 食事",
    "beginnerTip": "名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "searchKeywords": "help 助ける／手伝う／助け／手伝い 助ける／手伝う 助け／手伝い 人間関係",
    "beginnerTip": "「助け」は通常不可算。some help（手助け）。"
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
    "searchKeywords": "try 試す／やってみる／試み／挑戦 試す／やってみる 試み／挑戦 行動",
    "beginnerTip": "名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "english": "a person",
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
    "beginnerTip": "複数形は persons ではなく、通常 people を使います。 数えられる名詞の単数形では a person のように a / an を付けます。動詞などとして使う場合は不要です。",
    "searchKeywords": "person 人 人 人 person a person"
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
    "beginnerTip": "「時間」の time は数えないことが多く、「〜回」の意味では times と数えます。 時間（不可算用法）と「回」（可算用法）があるため、使い方で冠詞が変わります。a time（ある時／1回）、some time（少しの時間）。",
    "searchKeywords": "time 時間／回／機会 時間 回／機会 時間"
  },
  {
    "id": "n_day",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "時間",
    "english": "a day",
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
    "searchKeywords": "day 日／1日 日／1日 時間 day a day",
    "beginnerTip": "数えられる名詞の単数形では a day のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_year",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "時間",
    "english": "a year",
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
    "searchKeywords": "year 年／1年間 年／1年間 時間 year a year",
    "beginnerTip": "数えられる名詞の単数形では a year のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_place",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "場所",
    "english": "a place",
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
    "searchKeywords": "place 場所 場所 場所 place a place",
    "beginnerTip": "数えられる名詞の単数形では a place のように a / an を付けます。動詞などとして使う場合は不要です。"
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
    "beginnerTip": "go home の home の前には通常 to を付けません。 「家に／家へ」は at home / go home のように冠詞なし。a home は「住まい1軒」を指す場合。",
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
    "beginnerTip": "普段の「食べ物」は food のまま使うことが多いです。 通常は不可算名詞。some food（食べ物）、a kind of food（食べ物の一種）。",
    "searchKeywords": "food 食べ物／食事 食べ物／食事 食事"
  },
  {
    "id": "n_job",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "仕事",
    "english": "a job",
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
    "searchKeywords": "job 仕事／職 仕事／職 仕事 job a job",
    "beginnerTip": "数えられる名詞の単数形では a job のように a / an を付けます。動詞などとして使う場合は不要です。"
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
    "searchKeywords": "language 言語 言語 学習",
    "beginnerTip": "可算名詞。a language（1つの言語）。"
  },
  {
    "id": "n_thing",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "基本名詞",
    "english": "a thing",
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
    "searchKeywords": "thing もの／こと もの／こと 基本名詞 thing a thing",
    "beginnerTip": "数えられる名詞の単数形では a thing のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_problem",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "日常生活",
    "english": "a problem",
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
    "searchKeywords": "problem 問題／困りごと 問題／困りごと 日常生活 problem a problem",
    "beginnerTip": "数えられる名詞の単数形では a problem のように a / an を付けます。動詞などとして使う場合は不要です。"
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
      },
      {
        "pos": "副詞",
        "meaning": "その通り／まさにそれ（相づち）",
        "category": "会話",
        "example": "Exactly! That's what I meant.",
        "exampleJa": "その通り！それが言いたかったの。"
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
    "searchKeywords": "exactly 正確に／まさに／その通り 正確に／まさに／その通り 会話 その通り／まさにそれ（相づち） Exactly! That's what I meant."
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
    "searchKeywords": "now 今／今すぐ／今／現在 今／今すぐ 今／現在 時間",
    "beginnerTip": "副詞「今」が基本で冠詞は付けません。"
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
      },
      {
        "pos": "表現",
        "meaning": "まあそんな感じ！／だいたいそんな感じ！",
        "example": "Kind of!",
        "exampleJa": "まあそんな感じ！"
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
    "japanese": "もちろん！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もちろん！（快く承諾する）",
        "category": "会話",
        "example": "A: Can you help me?\nB: Of course!",
        "exampleJa": "A: 手伝ってくれる？\nB: もちろん！"
      },
      {
        "pos": "表現",
        "meaning": "そっか、そりゃそうだよね（納得・気づき）",
        "category": "会話",
        "example": "A: She's tired. She worked all night.\nB: Oh, of course.",
        "exampleJa": "A: 彼女、徹夜で働いて疲れてるんだ。\nB: ああ、そっか。そりゃそうだよね。"
      },
      {
        "pos": "表現",
        "meaning": "当然でしょ！（強い確信）",
        "category": "会話",
        "example": "A: Do you love your family?\nB: Of course!",
        "exampleJa": "A: 家族のこと好き？\nB: もちろん！"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "of course",
        "example": "Can you help me? Of course!",
        "exampleJa": "手伝ってくれる？ もちろん！"
      }
    ],
    "example": "Of course!",
    "exampleJa": "もちろん！",
    "searchKeywords": "of course もちろん 快く承諾 納得 気づき そっか そりゃそうだよね 当然でしょ 会話",
    "beginnerTip": "「もちろん！」という快い承諾だけでなく、理由を聞いて「考えてみれば当然だ」と納得したときにも使います。言い方や状況によっては「当然でしょ！」と強く響くこともあります。"
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
    "beginnerTip": "「速い／速く」が最も一般的です。fast には「断食する」「断食」という別の意味もあります。 形容詞・副詞として使う場合は冠詞なし。",
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
    "searchKeywords": "call 呼ぶ／電話する 呼ぶ／電話する 会話",
    "beginnerTip": "名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "beginnerTip": "sound + 形容詞 で「〜に聞こえる／〜そうだ」を表せます。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
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
    "beginnerTip": "Do you mind ...? は直訳よりも「〜しても構いませんか？」として覚えると使いやすいです。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
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
    "beginnerTip": "It doesn’t matter. は「問題ないよ／気にしないで」の意味で頻出します。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
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
    "japanese": "使う（費やす／過ごす）",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "使う（費やす／過ごす）",
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
    "searchKeywords": "spend 使う／過ごす 使う／過ごす 時間・お金 使う（費やす／過ごす）"
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
    "searchKeywords": "change 変える／変わる／変化 変える／変わる 変化／変更 変化",
    "beginnerTip": "名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
      },
      {
        "pos": "表現",
        "meaning": "さらに〜（比較級を強める）",
        "example": "This is even better.",
        "exampleJa": "これはさらにいいです。"
      },
      {
        "pos": "表現",
        "meaning": "〜さえしない（not even）",
        "example": "I didn't even know that.",
        "exampleJa": "そのことさえ知りませんでした。"
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
    "searchKeywords": "even 〜さえ／〜すら 〜さえ／〜すら 強調 even + 比較級 not even"
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
    "searchKeywords": "back 戻って／後ろへ 戻って／後ろへ 方向",
    "beginnerTip": "名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。"
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
    "beginnerTip": "right は「正しい」だけでなく「右」「ちょうど」など頻出の意味があります。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
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
      },
      {
        "pos": "形容詞",
        "meaning": "私も同じ／私も！（口語の相づち）",
        "category": "会話",
        "example": "Same! I feel that way too.",
        "exampleJa": "私も！同じように感じる。"
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
    "searchKeywords": "same 同じ 同じ 比較 私も同じ／私も！（口語の相づち） Same! I feel that way too."
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
    "english": "a child",
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
    "searchKeywords": "child 子ども 子ども 人・物 child a child",
    "beginnerTip": "数えられる名詞の単数形では a child のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_man",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "a man",
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
    "searchKeywords": "man 男性／男の人 男性／男の人 人・物 man a man",
    "beginnerTip": "数えられる名詞の単数形では a man のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_woman",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "a woman",
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
    "beginnerTip": "woman / women は綴りだけでなく発音も変わります。 数えられる名詞の単数形では a woman のように a / an を付けます。動詞などとして使う場合は不要です。",
    "searchKeywords": "woman 女性／女の人 女性／女の人 人・物 woman a woman"
  },
  {
    "id": "n_tooth",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "a tooth",
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
    "searchKeywords": "tooth 歯 歯 人・物 tooth a tooth",
    "beginnerTip": "数えられる名詞の単数形では a tooth のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_foot",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "人・物",
    "english": "a foot",
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
    "searchKeywords": "foot 足／足部 足／足部 人・物 foot a foot",
    "beginnerTip": "数えられる名詞の単数形では a foot のように a / an を付けます。動詞などとして使う場合は不要です。"
  },
  {
    "id": "n_life",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "生活",
    "english": "a life",
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
    "beginnerTip": "life の複数形は lives です。 数えられる名詞の単数形では a life のように a / an を付けます。動詞などとして使う場合は不要です。",
    "searchKeywords": "life 人生／生活／命 人生／生活／命 生活 life a life"
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
  },
  {
    "id": "w_nervous",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "nervous",
    "japanese": "緊張している",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "緊張している",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "nervous",
        "example": "I am nervous about the call.",
        "exampleJa": "通話のことで緊張しています。"
      }
    ],
    "searchKeywords": "nervous 緊張している 感情・状態"
  },
  {
    "id": "w_embarrassed",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "embarrassed",
    "japanese": "恥ずかしい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "恥ずかしい",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "embarrassed",
        "example": "I was so embarrassed.",
        "exampleJa": "すごく恥ずかしかった。"
      }
    ],
    "searchKeywords": "embarrassed 恥ずかしい 感情・状態"
  },
  {
    "id": "w_disappointed",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "disappointed",
    "japanese": "がっかりした",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "がっかりした",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "disappointed",
        "example": "I was disappointed with the result.",
        "exampleJa": "結果にがっかりしました。"
      }
    ],
    "searchKeywords": "disappointed がっかりした 感情・状態"
  },
  {
    "id": "w_relieved",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "relieved",
    "japanese": "ほっとした",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "ほっとした",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "relieved",
        "example": "I was relieved to hear that.",
        "exampleJa": "それを聞いてほっとしました。"
      }
    ],
    "searchKeywords": "relieved ほっとした 感情・状態"
  },
  {
    "id": "w_confused",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "confused",
    "japanese": "混乱している／よく分からない",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "混乱している／よく分からない",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "confused",
        "example": "I am a little confused.",
        "exampleJa": "ちょっと混乱しています。"
      }
    ],
    "searchKeywords": "confused 混乱している／よく分からない 感情・状態"
  },
  {
    "id": "w_upset",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "upset",
    "japanese": "動揺した／嫌な気持ちになった",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "動揺した／嫌な気持ちになった",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "upset",
        "example": "I was really upset.",
        "exampleJa": "本当に嫌な気持ちになりました。"
      }
    ],
    "searchKeywords": "upset 動揺した／嫌な気持ちになった 感情・状態"
  },
  {
    "id": "w_annoyed",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "annoyed",
    "japanese": "イライラした",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "イライラした",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "annoyed",
        "example": "I was annoyed at first.",
        "exampleJa": "最初はイライラしていました。"
      }
    ],
    "searchKeywords": "annoyed イライラした 感情・状態"
  },
  {
    "id": "w_lonely",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "lonely",
    "japanese": "寂しい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "寂しい",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "lonely",
        "example": "I feel lonely sometimes.",
        "exampleJa": "ときどき寂しく感じます。"
      }
    ],
    "searchKeywords": "lonely 寂しい 感情・状態"
  },
  {
    "id": "w_comfortable",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "comfortable",
    "japanese": "心地よい／気楽な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "心地よい／気楽な",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "comfortable",
        "example": "I feel comfortable talking to you.",
        "exampleJa": "あなたとは気楽に話せます。"
      }
    ],
    "searchKeywords": "comfortable 心地よい／気楽な 感情・状態"
  },
  {
    "id": "w_uncomfortable",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "uncomfortable",
    "japanese": "居心地が悪い／不快な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "居心地が悪い／不快な",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "uncomfortable",
        "example": "That made me uncomfortable.",
        "exampleJa": "それで居心地が悪くなりました。"
      }
    ],
    "searchKeywords": "uncomfortable 居心地が悪い／不快な 感情・状態"
  },
  {
    "id": "w_proud",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "proud",
    "japanese": "誇らしい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "誇らしい",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "proud",
        "example": "I am proud of you.",
        "exampleJa": "あなたを誇りに思います。"
      }
    ],
    "searchKeywords": "proud 誇らしい 感情・状態"
  },
  {
    "id": "w_jealous",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "jealous",
    "japanese": "嫉妬している／羨ましい",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "嫉妬している／羨ましい",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "jealous",
        "example": "I am a little jealous.",
        "exampleJa": "ちょっと羨ましい。"
      }
    ],
    "searchKeywords": "jealous 嫉妬している／羨ましい 感情・状態"
  },
  {
    "id": "w_scared",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "scared",
    "japanese": "怖い",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "怖い",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "scared",
        "example": "I was scared at first.",
        "exampleJa": "最初は怖かったです。"
      }
    ],
    "searchKeywords": "scared 怖い 感情・状態"
  },
  {
    "id": "w_bored",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "bored",
    "japanese": "退屈している",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "退屈している",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "bored",
        "example": "I was bored at home.",
        "exampleJa": "家で退屈していました。"
      }
    ],
    "searchKeywords": "bored 退屈している 感情・状態"
  },
  {
    "id": "w_interested",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "interested",
    "japanese": "興味がある",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "興味がある",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "interested",
        "example": "I am interested in other cultures.",
        "exampleJa": "他の文化に興味があります。"
      }
    ],
    "searchKeywords": "interested 興味がある 感情・状態"
  },
  {
    "id": "w_curious",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "curious",
    "japanese": "知りたい／興味津々な",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "知りたい／興味津々な",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "curious",
        "example": "I am curious about that.",
        "exampleJa": "それが気になります。"
      }
    ],
    "searchKeywords": "curious 知りたい／興味津々な 感情・状態"
  },
  {
    "id": "w_grateful",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "grateful",
    "japanese": "感謝している",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "感謝している",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "grateful",
        "example": "I am grateful for your help.",
        "exampleJa": "助けてくれて感謝しています。"
      }
    ],
    "searchKeywords": "grateful 感謝している 感情・状態"
  },
  {
    "id": "w_awkward",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "awkward",
    "japanese": "気まずい／ぎこちない",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "気まずい／ぎこちない",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "awkward",
        "example": "It was a little awkward.",
        "exampleJa": "ちょっと気まずかったです。"
      }
    ],
    "searchKeywords": "awkward 気まずい／ぎこちない 感情・状態"
  },
  {
    "id": "w_exhausted",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "exhausted",
    "japanese": "へとへとに疲れた",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "へとへとに疲れた",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "exhausted",
        "example": "I was exhausted after work.",
        "exampleJa": "仕事の後はへとへとでした。"
      }
    ],
    "searchKeywords": "exhausted へとへとに疲れた 感情・状態"
  },
  {
    "id": "w_overwhelmed",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "感情・状態",
    "english": "overwhelmed",
    "japanese": "いっぱいいっぱいな／圧倒された",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "いっぱいいっぱいな／圧倒された",
        "category": "感情・状態"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "overwhelmed",
        "example": "I feel overwhelmed right now.",
        "exampleJa": "今ちょっといっぱいいっぱいです。"
      }
    ],
    "searchKeywords": "overwhelmed いっぱいいっぱいな／圧倒された 感情・状態"
  },
  {
    "id": "exp_no_way",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "No way!",
    "japanese": "まさか！／嘘でしょ！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "まさか！／嘘でしょ！",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "No way!",
        "example": "No way! Really?",
        "exampleJa": "嘘でしょ！本当に？"
      }
    ],
    "example": "No way! Really?",
    "exampleJa": "嘘でしょ！本当に？",
    "searchKeywords": "No way! まさか！／嘘でしょ！ リアクション"
  },
  {
    "id": "exp_that_s_awesome",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "That's awesome!",
    "japanese": "それ最高！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それ最高！",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "That's awesome!",
        "example": "That's awesome! I'm so happy for you.",
        "exampleJa": "それ最高！本当によかったね。"
      }
    ],
    "example": "That's awesome! I'm so happy for you.",
    "exampleJa": "それ最高！本当によかったね。",
    "searchKeywords": "That's awesome! それ最高！ リアクション"
  },
  {
    "id": "exp_that_s_too_bad",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "That's too bad.",
    "japanese": "それは残念だね",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それは残念だね",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "That's too bad.",
        "example": "That's too bad. I hope things get better.",
        "exampleJa": "それは残念だね。よくなるといいね。"
      }
    ],
    "example": "That's too bad. I hope things get better.",
    "exampleJa": "それは残念だね。よくなるといいね。",
    "searchKeywords": "That's too bad. それは残念だね リアクション"
  },
  {
    "id": "exp_that_s_crazy",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "That's crazy!",
    "japanese": "それすごい！／やばい！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それすごい！／やばい！",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "That's crazy!",
        "example": "That's crazy! I can't believe it.",
        "exampleJa": "それすごい！信じられない。"
      }
    ],
    "example": "That's crazy! I can't believe it.",
    "exampleJa": "それすごい！信じられない。",
    "searchKeywords": "That's crazy! それすごい！／やばい！ リアクション"
  },
  {
    "id": "exp_i_know_what_you_mean",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "I know what you mean.",
    "japanese": "言いたいこと分かる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "言いたいこと分かる",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I know what you mean.",
        "example": "I know what you mean. I feel the same way.",
        "exampleJa": "言いたいこと分かる。私も同じように感じる。"
      }
    ],
    "example": "I know what you mean. I feel the same way.",
    "exampleJa": "言いたいこと分かる。私も同じように感じる。",
    "searchKeywords": "I know what you mean. 言いたいこと分かる リアクション"
  },
  {
    "id": "exp_that_makes_sense",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "That makes sense.",
    "japanese": "なるほど／それなら納得",
    "senses": [
      {
        "pos": "表現",
        "meaning": "なるほど／それなら納得",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "That makes sense.",
        "example": "Oh, that makes sense.",
        "exampleJa": "ああ、なるほど。"
      }
    ],
    "example": "Oh, that makes sense.",
    "exampleJa": "ああ、なるほど。",
    "searchKeywords": "That makes sense. なるほど／それなら納得 リアクション"
  },
  {
    "id": "exp_me_too",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "Me too.",
    "japanese": "私も",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私も",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Me too.",
        "example": "I love traveling. — Me too!",
        "exampleJa": "旅行が大好き。— 私も！"
      }
    ],
    "example": "I love traveling. — Me too!",
    "exampleJa": "旅行が大好き。— 私も！",
    "searchKeywords": "Me too. 私も リアクション"
  },
  {
    "id": "exp_me_neither",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "Me neither.",
    "japanese": "私も〜ない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私も〜ない",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Me neither.",
        "example": "I don't like crowds. — Me neither.",
        "exampleJa": "人混みが好きじゃない。— 私も。"
      }
    ],
    "example": "I don't like crowds. — Me neither.",
    "exampleJa": "人混みが好きじゃない。— 私も。",
    "searchKeywords": "Me neither. 私も〜ない リアクション"
  },
  {
    "id": "exp_i_can_t_believe_it",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "I can't believe it.",
    "japanese": "信じられない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "信じられない",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I can't believe it.",
        "example": "I can't believe it happened.",
        "exampleJa": "そんなことが起きたなんて信じられない。"
      }
    ],
    "example": "I can't believe it happened.",
    "exampleJa": "そんなことが起きたなんて信じられない。",
    "searchKeywords": "I can't believe it. 信じられない リアクション"
  },
  {
    "id": "exp_are_you_serious",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "Are you serious?",
    "japanese": "本当に？／マジで？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "本当に？／マジで？",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Are you serious?",
        "example": "Are you serious? That is amazing.",
        "exampleJa": "本当に？すごいね。"
      }
    ],
    "example": "Are you serious? That is amazing.",
    "exampleJa": "本当に？すごいね。",
    "searchKeywords": "Are you serious? 本当に？／マジで？ リアクション"
  },
  {
    "id": "exp_good_for_you",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "Good for you!",
    "japanese": "よかったね！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "よかったね！",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Good for you!",
        "example": "You finally did it? Good for you!",
        "exampleJa": "ついにできたの？よかったね！"
      }
    ],
    "example": "You finally did it? Good for you!",
    "exampleJa": "ついにできたの？よかったね！",
    "searchKeywords": "Good for you! よかったね！ リアクション"
  },
  {
    "id": "exp_i_m_glad_to_hear_that",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "I'm glad to hear that.",
    "japanese": "それを聞けて嬉しい",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それを聞けて嬉しい",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I'm glad to hear that.",
        "example": "I'm glad to hear that you're doing well.",
        "exampleJa": "元気にしていると聞けて嬉しい。"
      }
    ],
    "example": "I'm glad to hear that you're doing well.",
    "exampleJa": "元気にしていると聞けて嬉しい。",
    "searchKeywords": "I'm glad to hear that. それを聞けて嬉しい リアクション"
  },
  {
    "id": "exp_i_m_sorry_to_hear_that",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "I'm sorry to hear that.",
    "japanese": "それは大変だったね／残念だね",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それは大変だったね／残念だね",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I'm sorry to hear that.",
        "example": "I'm sorry to hear that. Are you okay?",
        "exampleJa": "それは大変だったね。大丈夫？"
      }
    ],
    "example": "I'm sorry to hear that. Are you okay?",
    "exampleJa": "それは大変だったね。大丈夫？",
    "searchKeywords": "I'm sorry to hear that. それは大変だったね／残念だね リアクション"
  },
  {
    "id": "exp_fair_enough",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "Fair enough.",
    "japanese": "まあ、それなら分かる／それももっとも",
    "senses": [
      {
        "pos": "表現",
        "meaning": "まあ、それなら分かる／それももっとも",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Fair enough.",
        "example": "Fair enough. I understand.",
        "exampleJa": "それなら分かるよ。"
      }
    ],
    "example": "Fair enough. I understand.",
    "exampleJa": "それなら分かるよ。",
    "searchKeywords": "Fair enough. まあ、それなら分かる／それももっとも リアクション",
    "beginnerTip": "完全に同意するとは限らないけど、言ってることには納得できる。"
  },
  {
    "id": "exp_you_re_kidding",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "リアクション",
    "english": "You're kidding!",
    "japanese": "冗談でしょ！／まさか！",
    "senses": [
      {
        "pos": "表現",
        "meaning": "冗談でしょ！／まさか！",
        "category": "リアクション"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "You're kidding!",
        "example": "You're kidding! That really happened?",
        "exampleJa": "冗談でしょ！本当にそんなことあったの？"
      }
    ],
    "example": "You're kidding! That really happened?",
    "exampleJa": "冗談でしょ！本当にそんなことあったの？",
    "searchKeywords": "You're kidding! 冗談でしょ！／まさか！ リアクション"
  },
  {
    "id": "w_may",
    "type": "word",
    "partOfSpeech": [
      "助動詞"
    ],
    "category": "推量",
    "english": "may",
    "japanese": "〜かもしれない",
    "senses": [
      {
        "pos": "助動詞",
        "meaning": "〜かもしれない",
        "category": "推量"
      }
    ],
    "forms": [
      {
        "label": "可能性",
        "formName": "may + 動詞（原形）",
        "example": "I may go next year.",
        "exampleJa": "来年行くかもしれません。"
      }
    ],
    "searchKeywords": "may 〜かもしれない 推量",
    "beginnerTip": "今回は「〜かもしれない」という可能性の用法だけを学びます。"
  },
  {
    "id": "exp_like_this",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "like this",
    "japanese": "こんなふうに／こんな感じで／こんな〜",
    "senses": [
      {
        "pos": "表現",
        "meaning": "こんなふうに／こんな感じで／こんな〜",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本用法",
        "formName": "like this",
        "example": "Do it like this.",
        "exampleJa": "こんなふうにやって。"
      },
      {
        "label": "時間と一緒に",
        "formName": "at a time like this",
        "example": "It figures they would be away at a time like this.",
        "exampleJa": "こんな時に限って、両親がいないなんて。"
      }
    ],
    "example": "Do it like this.",
    "exampleJa": "こんなふうにやって。",
    "searchKeywords": "like this こんなふうに／こんな感じで／こんな〜 会話"
  },
  {
    "id": "exp_how_was_it",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How was it?",
    "japanese": "どうだった？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どうだった？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How was it?",
        "example": "How was the trip?",
        "exampleJa": "旅行どうだった？"
      }
    ],
    "example": "How was the trip?",
    "exampleJa": "旅行どうだった？",
    "searchKeywords": "How was it? どうだった？ 質問"
  },
  {
    "id": "exp_what_was_it_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What was it like?",
    "japanese": "どんな感じだった？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どんな感じだった？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What was it like?",
        "example": "What was it like living there?",
        "exampleJa": "そこに住むのってどんな感じだった？"
      }
    ],
    "example": "What was it like living there?",
    "exampleJa": "そこに住むのってどんな感じだった？",
    "searchKeywords": "What was it like? どんな感じだった？ 質問"
  },
  {
    "id": "exp_what_happened",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What happened?",
    "japanese": "何があったの？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "何があったの？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What happened?",
        "example": "What happened? Are you okay?",
        "exampleJa": "何があったの？大丈夫？"
      }
    ],
    "example": "What happened? Are you okay?",
    "exampleJa": "何があったの？大丈夫？",
    "searchKeywords": "What happened? 何があったの？ 質問"
  },
  {
    "id": "exp_what_about_you",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What about you?",
    "japanese": "あなたは？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "あなたは？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What about you?",
        "example": "I am doing okay. What about you?",
        "exampleJa": "私は元気だよ。あなたは？"
      }
    ],
    "example": "I am doing okay. What about you?",
    "exampleJa": "私は元気だよ。あなたは？",
    "searchKeywords": "What about you? あなたは？ 質問"
  },
  {
    "id": "exp_how_did_you_feel",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How did you feel?",
    "japanese": "どう感じた？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どう感じた？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How did you feel?",
        "example": "How did you feel when you heard that?",
        "exampleJa": "それを聞いたときどう感じた？"
      }
    ],
    "example": "How did you feel when you heard that?",
    "exampleJa": "それを聞いたときどう感じた？",
    "searchKeywords": "How did you feel? どう感じた？ 質問"
  },
  {
    "id": "exp_what_do_you_think_about_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What do you think about + 名詞／動詞（ing形）?",
    "japanese": "〜についてどう思う？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜についてどう思う？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What do you think about + 名詞／動詞（ing形）?",
        "example": "What do you think about living abroad?",
        "exampleJa": "海外で暮らすことについてどう思う？"
      }
    ],
    "example": "What do you think about living abroad?",
    "exampleJa": "海外で暮らすことについてどう思う？",
    "searchKeywords": "What do you think about + 名詞／動詞（ing形）? 〜についてどう思う？ 質問"
  },
  {
    "id": "exp_why_do_you_think",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "Why do you think + 文?",
    "japanese": "どうして〜だと思う？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どうして〜だと思う？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Why do you think + 文?",
        "example": "Why do you think that happened?",
        "exampleJa": "どうしてそれが起きたと思う？"
      }
    ],
    "example": "Why do you think that happened?",
    "exampleJa": "どうしてそれが起きたと思う？",
    "searchKeywords": "Why do you think + 文? どうして〜だと思う？ 質問"
  },
  {
    "id": "exp_how_long_have_you",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How long have you + 動詞（過去分詞）?",
    "japanese": "どのくらい〜している？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どのくらい〜している？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How long have you + 動詞（過去分詞）?",
        "example": "How long have you lived there?",
        "exampleJa": "そこにどのくらい住んでる？"
      }
    ],
    "example": "How long have you lived there?",
    "exampleJa": "そこにどのくらい住んでる？",
    "searchKeywords": "How long have you + 動詞（過去分詞）? どのくらい〜している？ 質問"
  },
  {
    "id": "exp_what_kind_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What kind of + 名詞 ...?",
    "japanese": "どんな〜？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どんな〜？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What kind of + 名詞 ...?",
        "example": "What kind of music do you like?",
        "exampleJa": "どんな音楽が好き？"
      }
    ],
    "example": "What kind of music do you like?",
    "exampleJa": "どんな音楽が好き？",
    "searchKeywords": "What kind of + 名詞 ...? どんな〜？ 質問"
  },
  {
    "id": "exp_which_one_do_you_like_better",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "Which one do you like better?",
    "japanese": "どっちの方が好き？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どっちの方が好き？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Which one do you like better?",
        "example": "Which one do you like better?",
        "exampleJa": "どっちの方が好き？"
      }
    ],
    "example": "Which one do you like better?",
    "exampleJa": "どっちの方が好き？",
    "searchKeywords": "Which one do you like better? どっちの方が好き？ 質問"
  },
  {
    "id": "exp_tell_me_more",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "Tell me more.",
    "japanese": "もっと聞かせて",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もっと聞かせて",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Tell me more.",
        "example": "That sounds interesting. Tell me more.",
        "exampleJa": "面白そう。もっと聞かせて。"
      }
    ],
    "example": "That sounds interesting. Tell me more.",
    "exampleJa": "面白そう。もっと聞かせて。",
    "searchKeywords": "Tell me more. もっと聞かせて 質問"
  },
  {
    "id": "exp_how_did_it_go",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How did it go?",
    "japanese": "どうだった？／うまくいった？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どうだった？／うまくいった？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How did it go?",
        "example": "How did the interview go?",
        "exampleJa": "面接どうだった？"
      }
    ],
    "example": "How did the interview go?",
    "exampleJa": "面接どうだった？",
    "searchKeywords": "How did it go? どうだった？／うまくいった？ 質問"
  },
  {
    "id": "exp_then_what_happened",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "Then what happened?",
    "japanese": "それでどうなったの？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それでどうなったの？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Then what happened?",
        "example": "Then what happened after that?",
        "exampleJa": "それで、そのあとどうなったの？"
      }
    ],
    "example": "Then what happened after that?",
    "exampleJa": "それで、そのあとどうなったの？",
    "searchKeywords": "Then what happened? それでどうなったの？ 質問"
  },
  {
    "id": "exp_how_come",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How come?",
    "japanese": "どうして？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どうして？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How come?",
        "example": "How come you changed your mind?",
        "exampleJa": "どうして気が変わったの？"
      }
    ],
    "example": "How come you changed your mind?",
    "exampleJa": "どうして気が変わったの？",
    "searchKeywords": "How come? どうして？ 質問"
  },
  {
    "id": "exp_what_do_you_mean_by",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "What do you mean by + 名詞?",
    "japanese": "〜ってどういう意味？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜ってどういう意味？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What do you mean by + 名詞?",
        "example": "What do you mean by that?",
        "exampleJa": "それってどういう意味？"
      }
    ],
    "example": "What do you mean by that?",
    "exampleJa": "それってどういう意味？",
    "searchKeywords": "What do you mean by + 名詞? 〜ってどういう意味？ 質問"
  },
  {
    "id": "exp_how_do_you_know",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How do you know?",
    "japanese": "どうして分かるの？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どうして分かるの？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How do you know?",
        "example": "How do you know that?",
        "exampleJa": "どうしてそれが分かるの？"
      }
    ],
    "example": "How do you know that?",
    "exampleJa": "どうしてそれが分かるの？",
    "searchKeywords": "How do you know? どうして分かるの？ 質問"
  },
  {
    "id": "exp_i_ve_been_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "近況",
    "english": "I've been + 動詞（ing形）",
    "japanese": "最近ずっと〜している",
    "senses": [
      {
        "pos": "表現",
        "meaning": "最近ずっと〜している",
        "category": "近況"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've been + 動詞（ing形）",
        "example": "I've been studying English every day.",
        "exampleJa": "最近毎日英語を勉強しています。"
      }
    ],
    "example": "I've been studying English every day.",
    "exampleJa": "最近毎日英語を勉強しています。",
    "searchKeywords": "I've been + 動詞（ing形） 最近ずっと〜している 近況"
  },
  {
    "id": "exp_i_ve_just",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "近況",
    "english": "I've just + 動詞（過去分詞）",
    "japanese": "ちょうど〜したところ",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ちょうど〜したところ",
        "category": "近況"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've just + 動詞（過去分詞）",
        "example": "I've just finished work.",
        "exampleJa": "ちょうど仕事が終わったところ。"
      }
    ],
    "example": "I've just finished work.",
    "exampleJa": "ちょうど仕事が終わったところ。",
    "searchKeywords": "I've just + 動詞（過去分詞） ちょうど〜したところ 近況"
  },
  {
    "id": "exp_i_haven_t_yet",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "近況",
    "english": "I haven't + 動詞（過去分詞） + yet",
    "japanese": "まだ〜していない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "まだ〜していない",
        "category": "近況"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I haven't + 動詞（過去分詞） + yet",
        "example": "I haven't eaten yet.",
        "exampleJa": "まだ食べてない。"
      }
    ],
    "example": "I haven't eaten yet.",
    "exampleJa": "まだ食べてない。",
    "searchKeywords": "I haven't + 動詞（過去分詞） + yet まだ〜していない 近況"
  },
  {
    "id": "exp_i_used_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "I used to + 動詞（原形）",
    "japanese": "昔は〜していた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "昔は〜していた",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I used to + 動詞（原形）",
        "example": "I used to live there.",
        "exampleJa": "昔そこに住んでいました。"
      }
    ],
    "example": "I used to live there.",
    "exampleJa": "昔そこに住んでいました。",
    "searchKeywords": "I used to + 動詞（原形） 昔は〜していた 経験"
  },
  {
    "id": "exp_i_m_used_to_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "I'm used to + 名詞／動詞（ing形）",
    "japanese": "〜に慣れている",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜に慣れている",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I'm used to + 名詞／動詞（ing形）",
        "example": "I'm used to working from home.",
        "exampleJa": "在宅勤務に慣れています。"
      }
    ],
    "example": "I'm used to working from home.",
    "exampleJa": "在宅勤務に慣れています。",
    "searchKeywords": "I'm used to + 名詞／動詞（ing形） 〜に慣れている 経験"
  },
  {
    "id": "exp_get_used_to_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "get used to + 名詞／動詞（ing形）",
    "japanese": "〜に慣れる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜に慣れる",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "get used to + 名詞／動詞（ing形）",
        "example": "It took time to get used to it.",
        "exampleJa": "それに慣れるまで時間がかかりました。"
      }
    ],
    "example": "It took time to get used to it.",
    "exampleJa": "それに慣れるまで時間がかかりました。",
    "searchKeywords": "get used to + 名詞／動詞（ing形） 〜に慣れる 経験"
  },
  {
    "id": "exp_i_ended_up_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "I ended up + 動詞（ing形）",
    "japanese": "結局〜した",
    "senses": [
      {
        "pos": "表現",
        "meaning": "結局〜した",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I ended up + 動詞（ing形）",
        "example": "I ended up staying home.",
        "exampleJa": "結局家にいました。"
      }
    ],
    "example": "I ended up staying home.",
    "exampleJa": "結局家にいました。",
    "searchKeywords": "I ended up + 動詞（ing形） 結局〜した 経験"
  },
  {
    "id": "exp_it_s_been_since",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "時間",
    "english": "It's been + 期間 + since ...",
    "japanese": "〜してから…経った",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜してから…経った",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "It's been + 期間 + since ...",
        "example": "It's been two years since we met.",
        "exampleJa": "出会ってから2年経ったね。"
      }
    ],
    "example": "It's been two years since we met.",
    "exampleJa": "出会ってから2年経ったね。",
    "searchKeywords": "It's been + 期間 + since ... 〜してから…経った 時間"
  },
  {
    "id": "exp_i_haven_t_in_a_while",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "近況",
    "english": "I haven't ... in a while.",
    "japanese": "しばらく〜していない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "しばらく〜していない",
        "category": "近況"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I haven't ... in a while.",
        "example": "I haven't traveled in a while.",
        "exampleJa": "しばらく旅行していません。"
      }
    ],
    "example": "I haven't traveled in a while.",
    "exampleJa": "しばらく旅行していません。",
    "searchKeywords": "I haven't ... in a while. しばらく〜していない 近況"
  },
  {
    "id": "exp_i_ve_always_wanted_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "経験",
    "english": "I've always wanted to + 動詞（原形）",
    "japanese": "ずっと〜したかった",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ずっと〜したかった",
        "category": "経験"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've always wanted to + 動詞（原形）",
        "example": "I've always wanted to visit Colorado.",
        "exampleJa": "ずっとコロラドに行ってみたかった。"
      }
    ],
    "example": "I've always wanted to visit Colorado.",
    "exampleJa": "ずっとコロラドに行ってみたかった。",
    "searchKeywords": "I've always wanted to + 動詞（原形） ずっと〜したかった 経験"
  },
  {
    "id": "exp_i_forgot_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "記憶",
    "english": "I forgot to + 動詞（原形）",
    "japanese": "〜するのを忘れた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜するのを忘れた",
        "category": "記憶"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I forgot to + 動詞（原形）",
        "example": "I forgot to reply.",
        "exampleJa": "返信するのを忘れた。"
      }
    ],
    "example": "I forgot to reply.",
    "exampleJa": "返信するのを忘れた。",
    "searchKeywords": "I forgot to + 動詞（原形） 〜するのを忘れた 記憶"
  },
  {
    "id": "exp_i_forgot_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "記憶",
    "english": "I forgot + 動詞（ing形）",
    "japanese": "〜したことを忘れた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜したことを忘れた",
        "category": "記憶"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I forgot + 動詞（ing形）",
        "example": "I forgot meeting him before.",
        "exampleJa": "以前彼に会ったことを忘れていました。"
      }
    ],
    "example": "I forgot meeting him before.",
    "exampleJa": "以前彼に会ったことを忘れていました。",
    "searchKeywords": "I forgot + 動詞（ing形） 〜したことを忘れた 記憶"
  },
  {
    "id": "exp_i_remember_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "記憶",
    "english": "I remember + 動詞（ing形）",
    "japanese": "〜したことを覚えている",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜したことを覚えている",
        "category": "記憶"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I remember + 動詞（ing形）",
        "example": "I remember talking about that.",
        "exampleJa": "それについて話したのを覚えています。"
      }
    ],
    "example": "I remember talking about that.",
    "exampleJa": "それについて話したのを覚えています。",
    "searchKeywords": "I remember + 動詞（ing形） 〜したことを覚えている 記憶"
  },
  {
    "id": "exp_i_m_looking_forward_to_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "I'm looking forward to + 名詞／動詞（ing形）",
    "japanese": "〜を楽しみにしている",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜を楽しみにしている",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I'm looking forward to + 名詞／動詞（ing形）",
        "example": "I'm looking forward to seeing you.",
        "exampleJa": "あなたに会うのを楽しみにしています。"
      }
    ],
    "example": "I'm looking forward to seeing you.",
    "exampleJa": "あなたに会うのを楽しみにしています。",
    "searchKeywords": "I'm looking forward to + 名詞／動詞（ing形） 〜を楽しみにしている 感情"
  },
  {
    "id": "exp_i_can_t_wait_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "I can't wait to + 動詞（原形）",
    "japanese": "〜するのが待ちきれない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜するのが待ちきれない",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I can't wait to + 動詞（原形）",
        "example": "I can't wait to see you.",
        "exampleJa": "会うのが待ちきれない。"
      }
    ],
    "example": "I can't wait to see you.",
    "exampleJa": "会うのが待ちきれない。",
    "searchKeywords": "I can't wait to + 動詞（原形） 〜するのが待ちきれない 感情"
  },
  {
    "id": "exp_i_ve_never_thought_about_that",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "I've never thought about that.",
    "japanese": "それは考えたことなかった",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それは考えたことなかった",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've never thought about that.",
        "example": "I've never thought about that before.",
        "exampleJa": "それは今まで考えたことなかった。"
      }
    ],
    "example": "I've never thought about that before.",
    "exampleJa": "それは今まで考えたことなかった。",
    "searchKeywords": "I've never thought about that. それは考えたことなかった 会話"
  },
  {
    "id": "exp_i_didn_t_expect_that",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "I didn't expect that.",
    "japanese": "それは予想してなかった",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それは予想してなかった",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I didn't expect that.",
        "example": "I didn't expect that at all.",
        "exampleJa": "それは全然予想してなかった。"
      }
    ],
    "example": "I didn't expect that at all.",
    "exampleJa": "それは全然予想してなかった。",
    "searchKeywords": "I didn't expect that. それは予想してなかった 会話"
  },
  {
    "id": "exp_i_was_about_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "時間",
    "english": "I was about to + 動詞（原形）",
    "japanese": "ちょうど〜するところだった",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ちょうど〜するところだった",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I was about to + 動詞（原形）",
        "example": "I was about to call you.",
        "exampleJa": "ちょうど電話しようとしてた。"
      }
    ],
    "example": "I was about to call you.",
    "exampleJa": "ちょうど電話しようとしてた。",
    "searchKeywords": "I was about to + 動詞（原形） ちょうど〜するところだった 時間"
  },
  {
    "id": "exp_i_was_thinking_about_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "I was thinking about + 名詞／動詞（ing形）",
    "japanese": "〜について考えていた／〜しようか考えていた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜について考えていた／〜しようか考えていた",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I was thinking about + 名詞／動詞（ing形）",
        "example": "I was thinking about visiting next year.",
        "exampleJa": "来年行こうか考えてた。"
      }
    ],
    "example": "I was thinking about visiting next year.",
    "exampleJa": "来年行こうか考えてた。",
    "searchKeywords": "I was thinking about + 名詞／動詞（ing形） 〜について考えていた／〜しようか考えていた 会話"
  },
  {
    "id": "exp_i_ve_been_meaning_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "I've been meaning to + 動詞（原形）",
    "japanese": "ずっと〜しようと思っていた",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ずっと〜しようと思っていた",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I've been meaning to + 動詞（原形）",
        "example": "I've been meaning to ask you that.",
        "exampleJa": "ずっとそれを聞こうと思ってた。"
      }
    ],
    "example": "I've been meaning to ask you that.",
    "exampleJa": "ずっとそれを聞こうと思ってた。",
    "searchKeywords": "I've been meaning to + 動詞（原形） ずっと〜しようと思っていた 会話"
  },
  {
    "id": "exp_i_feel_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "I feel like + 文",
    "japanese": "〜な気がする",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜な気がする",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I feel like + 文",
        "example": "I feel like something is wrong.",
        "exampleJa": "何かおかしい気がする。"
      }
    ],
    "example": "I feel like something is wrong.",
    "exampleJa": "何かおかしい気がする。",
    "searchKeywords": "I feel like + 文 〜な気がする 感情"
  },
  {
    "id": "exp_i_feel_like_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "I feel like + 動詞（ing形）",
    "japanese": "〜したい気分",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜したい気分",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I feel like + 動詞（ing形）",
        "example": "I feel like staying home today.",
        "exampleJa": "今日は家にいたい気分。"
      }
    ],
    "example": "I feel like staying home today.",
    "exampleJa": "今日は家にいたい気分。",
    "searchKeywords": "I feel like + 動詞（ing形） 〜したい気分 感情"
  },
  {
    "id": "exp_i_don_t_feel_like_ing",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "I don't feel like + 動詞（ing形）",
    "japanese": "〜する気分じゃない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜する気分じゃない",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I don't feel like + 動詞（ing形）",
        "example": "I don't feel like going out.",
        "exampleJa": "外出する気分じゃない。"
      }
    ],
    "example": "I don't feel like going out.",
    "exampleJa": "外出する気分じゃない。",
    "searchKeywords": "I don't feel like + 動詞（ing形） 〜する気分じゃない 感情"
  },
  {
    "id": "exp_i_don_t_think",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "意見",
    "english": "I don't think + 文",
    "japanese": "〜ではないと思う",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜ではないと思う",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I don't think + 文",
        "example": "I don't think that's a bad idea.",
        "exampleJa": "それは悪い考えじゃないと思う。"
      }
    ],
    "example": "I don't think that's a bad idea.",
    "exampleJa": "それは悪い考えじゃないと思う。",
    "searchKeywords": "I don't think + 文 〜ではないと思う 意見"
  },
  {
    "id": "exp_it_depends_on",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "意見",
    "english": "It depends on + 名詞",
    "japanese": "〜による／場合による",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜による／場合による",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "It depends on + 名詞",
        "example": "It depends on the weather.",
        "exampleJa": "天気によるね。"
      }
    ],
    "example": "It depends on the weather.",
    "exampleJa": "天気によるね。",
    "searchKeywords": "It depends on + 名詞 〜による／場合による 意見"
  },
  {
    "id": "exp_that_s_why",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "理由",
    "english": "That's why + 文",
    "japanese": "だから〜なんだ",
    "senses": [
      {
        "pos": "表現",
        "meaning": "だから〜なんだ",
        "category": "理由"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "That's why + 文",
        "example": "That's why I was late.",
        "exampleJa": "だから遅れたんだ。"
      }
    ],
    "example": "That's why I was late.",
    "exampleJa": "だから遅れたんだ。",
    "searchKeywords": "That's why + 文 だから〜なんだ 理由"
  },
  {
    "id": "exp_the_reason_is",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "理由",
    "english": "The reason is ...",
    "japanese": "理由は〜",
    "senses": [
      {
        "pos": "表現",
        "meaning": "理由は〜",
        "category": "理由"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "The reason is ...",
        "example": "The reason is simple.",
        "exampleJa": "理由は単純です。"
      }
    ],
    "example": "The reason is simple.",
    "exampleJa": "理由は単純です。",
    "searchKeywords": "The reason is ... 理由は〜 理由"
  },
  {
    "id": "exp_to_be_honest",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "To be honest, ...",
    "japanese": "正直に言うと",
    "senses": [
      {
        "pos": "表現",
        "meaning": "正直に言うと",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "To be honest, ...",
        "example": "To be honest, I was nervous.",
        "exampleJa": "正直に言うと、緊張してた。"
      }
    ],
    "example": "To be honest, I was nervous.",
    "exampleJa": "正直に言うと、緊張してた。",
    "searchKeywords": "To be honest, ... 正直に言うと 会話"
  },
  {
    "id": "exp_i_wonder_if",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "推量",
    "english": "I wonder if + 文",
    "japanese": "〜かな／〜だろうか",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜かな／〜だろうか",
        "category": "推量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I wonder if + 文",
        "example": "I wonder if she is okay.",
        "exampleJa": "彼女、大丈夫かな。"
      }
    ],
    "example": "I wonder if she is okay.",
    "exampleJa": "彼女、大丈夫かな。",
    "searchKeywords": "I wonder if + 文 〜かな／〜だろうか 推量"
  },
  {
    "id": "exp_maybe_it_s_because",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "理由",
    "english": "Maybe it's because + 文",
    "japanese": "もしかしたら〜だからかも",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もしかしたら〜だからかも",
        "category": "理由"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Maybe it's because + 文",
        "example": "Maybe it's because I'm tired.",
        "exampleJa": "もしかしたら疲れてるからかも。"
      }
    ],
    "example": "Maybe it's because I'm tired.",
    "exampleJa": "もしかしたら疲れてるからかも。",
    "searchKeywords": "Maybe it's because + 文 もしかしたら〜だからかも 理由"
  },
  {
    "id": "exp_i_don_t_really",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "ニュアンス",
    "english": "I don't really + 動詞（原形）",
    "japanese": "あまり〜しない／そこまで〜ではない",
    "senses": [
      {
        "pos": "表現",
        "meaning": "あまり〜しない／そこまで〜ではない",
        "category": "ニュアンス"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I don't really + 動詞（原形）",
        "example": "I don't really watch TV.",
        "exampleJa": "テレビはあまり見ない。"
      }
    ],
    "example": "I don't really watch TV.",
    "exampleJa": "テレビはあまり見ない。",
    "searchKeywords": "I don't really + 動詞（原形） あまり〜しない／そこまで〜ではない ニュアンス"
  },
  {
    "id": "exp_i_kind_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "ニュアンス",
    "english": "I kind of + 動詞／形容詞",
    "japanese": "ちょっと〜／なんとなく〜",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ちょっと〜／なんとなく〜",
        "category": "ニュアンス"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "I kind of + 動詞／形容詞",
        "example": "I kind of miss it.",
        "exampleJa": "ちょっと恋しいかも。"
      }
    ],
    "example": "I kind of miss it.",
    "exampleJa": "ちょっと恋しいかも。",
    "searchKeywords": "I kind of + 動詞／形容詞 ちょっと〜／なんとなく〜 ニュアンス"
  },
  {
    "id": "exp_it_feels_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "感情",
    "english": "It feels like + 文",
    "japanese": "〜のように感じる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜のように感じる",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "It feels like + 文",
        "example": "It feels like time is going so fast.",
        "exampleJa": "時間がすごく早く過ぎてる気がする。"
      }
    ],
    "example": "It feels like time is going so fast.",
    "exampleJa": "時間がすごく早く過ぎてる気がする。",
    "searchKeywords": "It feels like + 文 〜のように感じる 感情"
  },
  {
    "id": "exp_it_seems_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "推量",
    "english": "It seems like + 文",
    "japanese": "〜みたい／〜のように思える",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜みたい／〜のように思える",
        "category": "推量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "It seems like + 文",
        "example": "It seems like everyone is busy.",
        "exampleJa": "みんな忙しいみたい。"
      }
    ],
    "example": "It seems like everyone is busy.",
    "exampleJa": "みんな忙しいみたい。",
    "searchKeywords": "It seems like + 文 〜みたい／〜のように思える 推量"
  },
  {
    "id": "exp_as_far_as_i_know",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "意見",
    "english": "As far as I know, ...",
    "japanese": "私の知る限りでは",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私の知る限りでは",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "As far as I know, ...",
        "example": "As far as I know, she is doing well.",
        "exampleJa": "私の知る限り、彼女は元気だよ。"
      }
    ],
    "example": "As far as I know, she is doing well.",
    "exampleJa": "私の知る限り、彼女は元気だよ。",
    "searchKeywords": "As far as I know, ... 私の知る限りでは 意見"
  },
  {
    "id": "exp_if_you_ask_me",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "意見",
    "english": "If you ask me, ...",
    "japanese": "私に言わせれば／私としては",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私に言わせれば／私としては",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "If you ask me, ...",
        "example": "If you ask me, it was worth it.",
        "exampleJa": "私としては、やる価値があったと思う。"
      }
    ],
    "example": "If you ask me, it was worth it.",
    "exampleJa": "私としては、やる価値があったと思う。",
    "searchKeywords": "If you ask me, ... 私に言わせれば／私としては 意見"
  },
  {
    "id": "exp_the_thing_is",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "The thing is, ...",
    "japanese": "実は／問題は〜なんだ",
    "senses": [
      {
        "pos": "表現",
        "meaning": "実は／問題は〜なんだ",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "The thing is, ...",
        "example": "The thing is, I do not have much time.",
        "exampleJa": "実は、あまり時間がないんだ。"
      }
    ],
    "example": "The thing is, I do not have much time.",
    "exampleJa": "実は、あまり時間がないんだ。",
    "searchKeywords": "The thing is, ... 実は／問題は〜なんだ 会話"
  },
  {
    "id": "exp_make_sure",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "make sure",
    "japanese": "確認する／必ず〜する",
    "senses": [
      {
        "pos": "表現",
        "meaning": "確認する／必ず〜する",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "make sure",
        "example": "Make sure you bring your passport.",
        "exampleJa": "パスポートを忘れずに持ってきて。"
      }
    ],
    "example": "Make sure you bring your passport.",
    "exampleJa": "パスポートを忘れずに持ってきて。",
    "searchKeywords": "make sure 確認する／必ず〜する 句動詞"
  },
  {
    "id": "exp_figure_out",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "figure out",
    "japanese": "理解する／解決方法を見つける",
    "senses": [
      {
        "pos": "表現",
        "meaning": "理解する／解決方法を見つける",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "figure out",
        "example": "I finally figured it out.",
        "exampleJa": "やっと分かった。"
      }
    ],
    "example": "I finally figured it out.",
    "exampleJa": "やっと分かった。",
    "searchKeywords": "figure out 理解する／解決方法を見つける 句動詞"
  },
  {
    "id": "exp_work_out",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "work out",
    "japanese": "うまくいく／解決する",
    "senses": [
      {
        "pos": "表現",
        "meaning": "うまくいく／解決する",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "work out",
        "example": "I hope everything works out.",
        "exampleJa": "全部うまくいくといいね。"
      }
    ],
    "example": "I hope everything works out.",
    "exampleJa": "全部うまくいくといいね。",
    "searchKeywords": "work out うまくいく／解決する 句動詞"
  },
  {
    "id": "exp_deal_with",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "deal with",
    "japanese": "対処する／相手をする／扱う",
    "senses": [
      {
        "pos": "表現",
        "meaning": "対処する／相手をする／扱う",
        "category": "句動詞"
      },
      {
        "pos": "表現",
        "meaning": "相手をする",
        "example": "I deal with customers every day.",
        "exampleJa": "毎日お客さんの相手をしています。"
      },
      {
        "pos": "表現",
        "meaning": "扱う",
        "example": "This book deals with friendship.",
        "exampleJa": "この本は友情を扱っています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "deal with",
        "example": "I do not know how to deal with this.",
        "exampleJa": "これにどう対処すればいいか分からない。"
      }
    ],
    "example": "I do not know how to deal with this.",
    "exampleJa": "これにどう対処すればいいか分からない。",
    "searchKeywords": "deal with 〜に対処する 句動詞 対処する／相手をする／扱う"
  },
  {
    "id": "exp_get_along_with",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "get along with",
    "japanese": "〜と仲良くやる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜と仲良くやる",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "get along with",
        "example": "I get along well with her.",
        "exampleJa": "彼女とは仲がいいです。"
      }
    ],
    "example": "I get along well with her.",
    "exampleJa": "彼女とは仲がいいです。",
    "searchKeywords": "get along with 〜と仲良くやる 句動詞"
  },
  {
    "id": "exp_come_up_with",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "come up with",
    "japanese": "〜を思いつく",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜を思いつく",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "come up with",
        "example": "I came up with an idea.",
        "exampleJa": "アイデアを思いつきました。"
      }
    ],
    "example": "I came up with an idea.",
    "exampleJa": "アイデアを思いつきました。",
    "searchKeywords": "come up with 〜を思いつく 句動詞"
  },
  {
    "id": "exp_run_out_of",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "句動詞",
    "english": "run out of",
    "japanese": "〜を使い切る／〜がなくなる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜を使い切る／〜がなくなる",
        "category": "句動詞"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "run out of",
        "example": "We ran out of time.",
        "exampleJa": "時間がなくなりました。"
      }
    ],
    "example": "We ran out of time.",
    "exampleJa": "時間がなくなりました。",
    "searchKeywords": "run out of 〜を使い切る／〜がなくなる 句動詞"
  },
  {
    "id": "exp_by_the_way",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "by the way",
    "japanese": "ところで",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ところで",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "by the way",
        "example": "By the way, how is Pumpkin?",
        "exampleJa": "ところで、Pumpkinは元気？"
      }
    ],
    "example": "By the way, how is Pumpkin?",
    "exampleJa": "ところで、Pumpkinは元気？",
    "searchKeywords": "by the way ところで 会話"
  },
  {
    "id": "exp_at_least",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "ニュアンス",
    "english": "at least",
    "japanese": "少なくとも／せめて",
    "senses": [
      {
        "pos": "表現",
        "meaning": "少なくとも／せめて",
        "category": "ニュアンス"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "at least",
        "example": "At least we tried.",
        "exampleJa": "少なくともやってみたよ。"
      }
    ],
    "example": "At least we tried.",
    "exampleJa": "少なくともやってみたよ。",
    "searchKeywords": "at least 少なくとも／せめて ニュアンス"
  },
  {
    "id": "exp_out_of_the_blue",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "out of the blue",
    "japanese": "突然／予想外に",
    "senses": [
      {
        "pos": "表現",
        "meaning": "突然／予想外に",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "out of the blue",
        "example": "She called me out of the blue.",
        "exampleJa": "彼女から突然電話がきました。"
      }
    ],
    "example": "She called me out of the blue.",
    "exampleJa": "彼女から突然電話がきました。",
    "searchKeywords": "out of the blue 突然／予想外に 会話"
  },
  {
    "id": "grammar_have_past_participle",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "文法",
    "english": "have + 動詞（過去分詞）",
    "japanese": "〜した／〜したことがある／ずっと〜している",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜した／〜したことがある／ずっと〜している",
        "category": "文法"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "have + 動詞（過去分詞）",
        "example": "I have visited Kyoto twice.",
        "exampleJa": "京都を2回訪れたことがあります。"
      }
    ],
    "example": "I have visited Kyoto twice.",
    "exampleJa": "京都を2回訪れたことがあります。",
    "beginnerTip": "現在完了。経験・完了・継続などを表します。「まだ〜していない」は haven’t ... yet、「〜したことがない」は have never ... など、否定表現を使います。",
    "searchKeywords": "have + 動詞（過去分詞） 〜した／〜したことがある／ずっと〜している 文法"
  },
  {
    "id": "grammar_had_past_participle",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "文法",
    "english": "had + 動詞（過去分詞）",
    "japanese": "〜していた／〜し終わっていた（過去のある時点より前）",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜していた／〜し終わっていた（過去のある時点より前）",
        "category": "文法"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "had + 動詞（過去分詞）",
        "example": "I had already eaten when she called.",
        "exampleJa": "彼女から電話が来たとき、私はすでに食べ終わっていました。"
      }
    ],
    "example": "I had already eaten when she called.",
    "exampleJa": "彼女から電話が来たとき、私はすでに食べ終わっていました。",
    "beginnerTip": "過去完了。過去のある時点より前に起きたことを表します。",
    "searchKeywords": "had + 動詞（過去分詞） 〜していた／〜し終わっていた（過去のある時点より前） 文法"
  },
  {
    "id": "exp_even_though",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "文法",
    "english": "even though + 文",
    "japanese": "〜なのに／〜だけど",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜なのに／〜だけど",
        "category": "文法"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "even though + 文",
        "example": "Even though I was tired, I went out.",
        "exampleJa": "疲れていたけど、出かけました。"
      }
    ],
    "example": "Even though I was tired, I went out.",
    "exampleJa": "疲れていたけど、出かけました。",
    "beginnerTip": "実際にそうである事実と対照的なことを述べます。",
    "searchKeywords": "even though + 文 〜なのに／〜だけど 文法"
  },
  {
    "id": "exp_even_if",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "文法",
    "english": "even if + 文",
    "japanese": "たとえ〜でも",
    "senses": [
      {
        "pos": "表現",
        "meaning": "たとえ〜でも",
        "category": "文法"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "even if + 文",
        "example": "Even if it rains, I will go.",
        "exampleJa": "たとえ雨が降っても行きます。"
      }
    ],
    "example": "Even if it rains, I will go.",
    "exampleJa": "たとえ雨が降っても行きます。",
    "beginnerTip": "仮定した条件でも結果は変わらないときに使います。",
    "searchKeywords": "even if + 文 たとえ〜でも 文法"
  },
  {
    "id": "q_what",
    "type": "word",
    "partOfSpeech": [
      "疑問詞"
    ],
    "category": "質問",
    "english": "what",
    "japanese": "何／どんな",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "何",
        "category": "質問"
      },
      {
        "pos": "疑問詞",
        "meaning": "どんな〜／何の〜（what + 名詞）",
        "category": "質問",
        "example": "What kind of music do you like?",
        "exampleJa": "どんな音楽が好きですか？"
      },
      {
        "pos": "疑問詞",
        "meaning": "なんて〜だ（感嘆）",
        "category": "感嘆",
        "example": "What a nice day!",
        "exampleJa": "なんて素敵な日でしょう！"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "what",
        "example": "What do you want to eat?",
        "exampleJa": "何が食べたいですか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "what は「何」です。what time（何時）、what kind of（どんな種類の）のように、名詞とセットでもよく使います。",
    "searchKeywords": "what 何／どんな 何 どんな〜／何の〜（what + 名詞） なんて〜だ（感嘆） 質問"
  },
  {
    "id": "q_when",
    "type": "word",
    "partOfSpeech": [
      "疑問詞",
      "接続詞"
    ],
    "category": "質問",
    "english": "when",
    "japanese": "いつ／〜するとき",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "いつ",
        "category": "質問"
      },
      {
        "pos": "接続詞",
        "meaning": "〜するとき",
        "category": "つなぎ",
        "example": "Call me when you get home.",
        "exampleJa": "家に着いたら電話してね。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "when",
        "example": "When does the movie start?",
        "exampleJa": "映画はいつ始まりますか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "疑問文の when は「いつ」、文をつなぐ when は「〜するとき」です。when のあとは、未来のことでも現在形で言います（Call me when you get home.）。",
    "searchKeywords": "when いつ／〜するとき いつ 〜するとき 質問"
  },
  {
    "id": "q_where",
    "type": "word",
    "partOfSpeech": [
      "疑問詞"
    ],
    "category": "質問",
    "english": "where",
    "japanese": "どこ／〜する場所",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "どこ（に・で）",
        "category": "質問"
      },
      {
        "pos": "疑問詞",
        "meaning": "〜する場所",
        "category": "つなぎ",
        "example": "This is where I work.",
        "exampleJa": "ここが私の働いている場所です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "where",
        "example": "Where do you live?",
        "exampleJa": "どこに住んでいますか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "Where are you from?（出身はどこ？）のように、前置詞が文末に残る形をよく使います。",
    "searchKeywords": "where どこ／〜する場所 どこ（に・で） 〜する場所 質問"
  },
  {
    "id": "q_who",
    "type": "word",
    "partOfSpeech": [
      "疑問詞"
    ],
    "category": "質問",
    "english": "who",
    "japanese": "誰／〜する人",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "誰",
        "category": "質問"
      },
      {
        "pos": "疑問詞",
        "meaning": "〜する人",
        "category": "つなぎ",
        "example": "I know the girl who lives there.",
        "exampleJa": "そこに住んでいる女の子を知っています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "who",
        "example": "Who is this?",
        "exampleJa": "どちら様ですか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "電話では Who is this?（どちら様ですか？）と相手をたずねられます。",
    "searchKeywords": "who 誰／〜する人 誰 〜する人 質問"
  },
  {
    "id": "q_why",
    "type": "word",
    "partOfSpeech": [
      "疑問詞"
    ],
    "category": "質問",
    "english": "why",
    "japanese": "なぜ／どうして",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "なぜ",
        "category": "質問"
      },
      {
        "pos": "疑問詞",
        "meaning": "だから〜（that's why）",
        "category": "つなぎ",
        "example": "That's why I called you.",
        "exampleJa": "だからあなたに電話したんです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "why",
        "example": "Why are you so tired?",
        "exampleJa": "なぜそんなに疲れているのですか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "答えは Because ... で言います。「〜しない？」と誘う Why don't we ...? は別のカードで学びます。",
    "searchKeywords": "why なぜ／どうして なぜ だから〜（that's why） 質問"
  },
  {
    "id": "q_how",
    "type": "word",
    "partOfSpeech": [
      "疑問詞"
    ],
    "category": "質問",
    "english": "how",
    "japanese": "どうやって／どう",
    "senses": [
      {
        "pos": "疑問詞",
        "meaning": "どうやって／どのように",
        "category": "質問"
      },
      {
        "pos": "疑問詞",
        "meaning": "調子・様子はどう",
        "category": "質問",
        "example": "How was your day?",
        "exampleJa": "今日はどうでしたか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "how",
        "example": "How do I get there?",
        "exampleJa": "そこへはどうやって行けばいいですか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "How are you?（調子はどう？）のように、状態をたずねるときにも使います。長さ・数・頻度をたずねる形は、How + 形容詞／副詞 のカードで学びます。",
    "searchKeywords": "how どうやって／どう どうやって／どのように 調子・様子はどう 質問"
  },
  {
    "id": "exp_how_about",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "提案",
    "english": "How about…?",
    "japanese": "〜はどう？／〜はいかが？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜はどう？（提案）",
        "category": "提案"
      },
      {
        "pos": "表現",
        "meaning": "〜は？（話を相手に返す）",
        "category": "会話",
        "example": "I'm fine. How about you?",
        "exampleJa": "元気だよ。あなたは？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How about…?",
        "example": "How about tomorrow?",
        "exampleJa": "明日はどう？"
      }
    ],
    "example": "How about tomorrow?",
    "exampleJa": "明日はどう？",
    "beginnerTip": "What about…? とほぼ同じ意味で、どちらも使えます。How about は提案が中心で、What about は「〜はどうなの？」と話題を出すときにも使います。",
    "searchKeywords": "How about…? 〜はどう？／〜はいかが？ 〜はどう？（提案） 〜は？（話を相手に返す） 提案"
  },
  {
    "id": "exp_how_adj",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "How + 形容詞／副詞…?",
    "japanese": "どのくらい〜？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どのくらい〜？（How long / How often など）",
        "category": "質問"
      },
      {
        "pos": "表現",
        "meaning": "いくつ／いくら（How many / How much）",
        "category": "質問",
        "example": "How many people are coming?",
        "exampleJa": "何人来ますか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "How + 形容詞／副詞…?",
        "example": "How long does it take?",
        "exampleJa": "どのくらいかかりますか？"
      }
    ],
    "example": "How long does it take?",
    "exampleJa": "どのくらいかかりますか？",
    "beginnerTip": "How long（期間）、How often（頻度）、How far（距離）、How many（数）、How much（量・値段）の形があります。数えられるものは many、数えられないものは much です。",
    "searchKeywords": "How + 形容詞／副詞…? どのくらい〜？ どのくらい〜？（How long / How often など） いくつ／いくら（How many / How much） 質問"
  },
  {
    "id": "conj_and",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "and",
    "japanese": "そして／〜と",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "そして／〜と",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "〜しなさい、そうすれば（命令文 + and）",
        "category": "つなぎ",
        "example": "Study hard and you will pass.",
        "exampleJa": "一生懸命勉強すれば、合格します。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "and",
        "example": "I like coffee and tea.",
        "exampleJa": "コーヒーと紅茶が好きです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "A and B のように並べます。3つ以上のときは、A, B, and C の形（A、B、そして C）にします。",
    "searchKeywords": "and そして／〜と そして／〜と 〜しなさい、そうすれば（命令文 + and） つなぎ"
  },
  {
    "id": "conj_but",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "but",
    "japanese": "しかし／でも",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "しかし／でも",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "あのね（やんわり切り出す）",
        "category": "会話",
        "example": "Sorry, but I can't hear you.",
        "exampleJa": "ごめん、でも聞こえないんだ。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "but",
        "example": "I like it, but it is expensive.",
        "exampleJa": "好きだけど、高いです。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "文のはじめの But も、会話ではよく使います。文末の though（でもね）との違いは、though のカードで学びます。",
    "searchKeywords": "but しかし／でも しかし／でも あのね（やんわり切り出す） つなぎ"
  },
  {
    "id": "conj_because",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "because",
    "japanese": "〜だから／なぜなら",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "〜だから／なぜなら",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "〜のせいで／〜のため（because of + 名詞）",
        "category": "つなぎ",
        "example": "We stayed home because of the rain.",
        "exampleJa": "雨のせいで家にいました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "because",
        "example": "I was late because I missed the bus.",
        "exampleJa": "バスに乗り遅れたので遅れました。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "because は理由を、so は結果を、あとにつなげます（I missed the bus, so I was late.）。Why? の答えとして、Because だけでも言えます。後ろが名詞のときは because of を使います。",
    "searchKeywords": "because 〜だから／なぜなら 〜だから／なぜなら 〜のせいで／〜のため（because of + 名詞） つなぎ"
  },
  {
    "id": "conj_so",
    "type": "word",
    "partOfSpeech": [
      "接続詞",
      "副詞"
    ],
    "category": "つなぎ",
    "english": "so",
    "japanese": "だから／とても",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "だから／それで",
        "category": "つなぎ"
      },
      {
        "pos": "副詞",
        "meaning": "とても／そんなに",
        "category": "程度",
        "example": "I'm so tired.",
        "exampleJa": "とても疲れた。"
      },
      {
        "pos": "副詞",
        "meaning": "それで（話題を切り替える）",
        "category": "会話",
        "example": "So, how was your day?",
        "exampleJa": "それで、今日はどうだった？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "so",
        "example": "I was tired, so I went to bed early.",
        "exampleJa": "疲れていたので、早く寝ました。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "so は結果をつなげます（理由を先に言うなら because）。会話のはじめの So, ... は「それで」と話を切り出す合図になります。",
    "searchKeywords": "so だから／とても だから／それで とても／そんなに それで（話題を切り替える） つなぎ"
  },
  {
    "id": "conj_if",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "if",
    "japanese": "もし〜なら／〜かどうか",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "もし〜なら",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "〜かどうか",
        "category": "つなぎ",
        "example": "I don't know if he's coming.",
        "exampleJa": "彼が来るかどうか分かりません。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "if",
        "example": "If it rains, we will stay home.",
        "exampleJa": "雨が降ったら、家にいます。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "if のあとは、未来のことでも現在形で言います（If it rains, ...）。",
    "searchKeywords": "if もし〜なら／〜かどうか もし〜なら 〜かどうか つなぎ"
  },
  {
    "id": "conj_or",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "or",
    "japanese": "または／それとも",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "または／それとも",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "さもないと（命令文 + or）",
        "category": "つなぎ",
        "example": "Hurry, or we'll be late.",
        "exampleJa": "急いで、さもないと遅れるよ。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "or",
        "example": "Do you want tea or coffee?",
        "exampleJa": "紅茶とコーヒー、どちらがいいですか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "選択肢を並べるときに使います。Do you want A or B? の B は、文末を下げて言います。",
    "searchKeywords": "or または／それとも または／それとも さもないと（命令文 + or） つなぎ"
  },
  {
    "id": "adv_then",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "つなぎ",
    "english": "then",
    "japanese": "それから／それなら",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "それから／その後",
        "category": "時間"
      },
      {
        "pos": "副詞",
        "meaning": "それなら",
        "category": "つなぎ",
        "example": "Then let's go together.",
        "exampleJa": "それなら、一緒に行こう。"
      },
      {
        "pos": "副詞",
        "meaning": "その頃",
        "category": "時間",
        "example": "I was young then.",
        "exampleJa": "その頃、私は若かったです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "then",
        "example": "Finish your work, then call me.",
        "exampleJa": "仕事を終えて、それから電話して。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "than（〜より）と綴りが似ているので注意します。会話では Then...?（それで？）と続きを聞くときにも使います。",
    "searchKeywords": "then それから／それなら それから／その後 それなら その頃 つなぎ"
  },
  {
    "id": "conj_while",
    "type": "word",
    "partOfSpeech": [
      "接続詞"
    ],
    "category": "つなぎ",
    "english": "while",
    "japanese": "〜している間／〜だけど",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "〜している間",
        "category": "つなぎ"
      },
      {
        "pos": "接続詞",
        "meaning": "〜な一方で",
        "category": "つなぎ",
        "example": "I like tea, while my friend likes coffee.",
        "exampleJa": "私は紅茶が好きで、友達はコーヒーが好きです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "while",
        "example": "Don't talk on the phone while you are driving.",
        "exampleJa": "運転中に電話で話さないで。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "while のあとには文が続きます。名詞が続くときは during を使います（during the meeting）。",
    "searchKeywords": "while 〜している間／〜だけど 〜している間 〜な一方で つなぎ"
  },
  {
    "id": "conj_until",
    "type": "word",
    "partOfSpeech": [
      "接続詞",
      "前置詞"
    ],
    "category": "時間",
    "english": "until",
    "japanese": "〜まで",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜まで（ずっと）",
        "category": "時間"
      },
      {
        "pos": "接続詞",
        "meaning": "〜するまで",
        "category": "時間",
        "example": "Wait here until I come back.",
        "exampleJa": "戻るまでここで待っていて。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "until",
        "example": "I worked until midnight.",
        "exampleJa": "夜中の12時まで働きました。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "until は「その時までずっと続く」ことに使います。「その時までに済ませる」ときは by を使います。",
    "searchKeywords": "until 〜まで 〜まで（ずっと） 〜するまで 時間"
  },
  {
    "id": "conj_than",
    "type": "word",
    "partOfSpeech": [
      "接続詞",
      "前置詞"
    ],
    "category": "比較",
    "english": "than",
    "japanese": "〜より",
    "senses": [
      {
        "pos": "接続詞",
        "meaning": "〜より（比較）",
        "category": "比較"
      },
      {
        "pos": "前置詞",
        "meaning": "〜以上（more than）",
        "category": "数量",
        "example": "It costs more than ten dollars.",
        "exampleJa": "10ドル以上します。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "than",
        "example": "My phone is newer than yours.",
        "exampleJa": "私のスマホはあなたのより新しいです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "比較級（newer, more important など）のあとに than をつけます。then（それから）と綴りが似ているので注意します。",
    "searchKeywords": "than 〜より 〜より（比較） 〜以上（more than） 比較"
  },
  {
    "id": "prep_in",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "場所",
    "english": "in",
    "japanese": "〜の中に／〜で",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の中に／〜で（場所・月・年）",
        "category": "場所"
      },
      {
        "pos": "前置詞",
        "meaning": "〜後に（これから先の期間）",
        "category": "時間",
        "example": "I'll be back in ten minutes.",
        "exampleJa": "10分後に戻ります。"
      },
      {
        "pos": "前置詞",
        "meaning": "〜語で",
        "category": "手段",
        "example": "Say it in English.",
        "exampleJa": "英語で言って。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "in",
        "example": "The keys are in my bag.",
        "exampleJa": "鍵は私のバッグの中にあります。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "in は広がりのある「中」、on は表面に接している「上」、at は「一点」のイメージです。in・on・at の違いは、3つのカードで見比べます。",
    "searchKeywords": "in 〜の中に／〜で 〜の中に／〜で（場所・月・年） 〜後に（これから先の期間） 〜語で 場所"
  },
  {
    "id": "prep_on",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "場所",
    "english": "on",
    "japanese": "〜の上に／〜に",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の上に／〜に（接している・曜日・日付）",
        "category": "場所"
      },
      {
        "pos": "前置詞",
        "meaning": "〜中（電話・乗り物）",
        "category": "電話",
        "example": "I'm on the phone.",
        "exampleJa": "電話中です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "on",
        "example": "The keys are on the table.",
        "exampleJa": "鍵はテーブルの上にあります。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "曜日や日付の前は on です（on Monday）。電話・バス・電車にも on を使います（on the phone, on the bus）。",
    "searchKeywords": "on 〜の上に／〜に 〜の上に／〜に（接している・曜日・日付） 〜中（電話・乗り物） 場所"
  },
  {
    "id": "prep_at",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "場所",
    "english": "at",
    "japanese": "〜に／〜で",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜に／〜で（時刻・一点の場所）",
        "category": "場所"
      },
      {
        "pos": "前置詞",
        "meaning": "〜に向かって",
        "category": "方向",
        "example": "Look at the screen.",
        "exampleJa": "画面を見て。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "at",
        "example": "I'll meet you at five.",
        "exampleJa": "5時に会いましょう。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "at は時刻（at five）や、一点としての場所（at home, at work）に使います。",
    "searchKeywords": "at 〜に／〜で 〜に／〜で（時刻・一点の場所） 〜に向かって 場所"
  },
  {
    "id": "prep_with",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "関係",
    "english": "with",
    "japanese": "〜と一緒に／〜を使って",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜と一緒に",
        "category": "関係"
      },
      {
        "pos": "前置詞",
        "meaning": "〜を使って",
        "category": "手段",
        "example": "I wrote it with a pen.",
        "exampleJa": "ペンで書きました。"
      },
      {
        "pos": "前置詞",
        "meaning": "〜つきの／〜を持った",
        "category": "状態",
        "example": "I want a room with a view.",
        "exampleJa": "景色のいい部屋がいいです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "with",
        "example": "Do you want to come with me?",
        "exampleJa": "一緒に来ませんか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "道具には with を使います。「〜と話す」は talk with でも talk to でも言えます。",
    "searchKeywords": "with 〜と一緒に／〜を使って 〜と一緒に 〜を使って 〜つきの／〜を持った 関係"
  },
  {
    "id": "prep_for",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "関係",
    "english": "for",
    "japanese": "〜のために／〜の間",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜のために／〜用に",
        "category": "関係"
      },
      {
        "pos": "前置詞",
        "meaning": "〜の間（期間）",
        "category": "時間",
        "example": "I have lived here for three years.",
        "exampleJa": "ここに3年間住んでいます。"
      },
      {
        "pos": "前置詞",
        "meaning": "〜にとって",
        "category": "関係",
        "example": "This is easy for me.",
        "exampleJa": "これは私には簡単です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "for",
        "example": "This gift is for you.",
        "exampleJa": "このプレゼントはあなたへのものです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "for は期間の長さ（for three years）、since は始まりの時点（since 2020）、during は出来事の間（during the meeting）です。",
    "searchKeywords": "for 〜のために／〜の間 〜のために／〜用に 〜の間（期間） 〜にとって 関係"
  },
  {
    "id": "prep_to",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "方向",
    "english": "to",
    "japanese": "〜へ／〜まで／〜に",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜へ（方向・目的地）",
        "category": "方向"
      },
      {
        "pos": "前置詞",
        "meaning": "〜まで",
        "category": "時間",
        "example": "I work from nine to five.",
        "exampleJa": "9時から5時まで働いています。"
      },
      {
        "pos": "前置詞",
        "meaning": "〜に（相手）",
        "category": "関係",
        "example": "Can you give it to me?",
        "exampleJa": "それを私にくれますか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "to",
        "example": "I'm going to the station.",
        "exampleJa": "駅へ行くところです。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "to のあとに動詞が来る形（want to go など）は、want to のカードで学びます。into（〜の中へ）とは別のカードです。",
    "searchKeywords": "to 〜へ／〜まで／〜に 〜へ（方向・目的地） 〜まで 〜に（相手） 方向"
  },
  {
    "id": "prep_from",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "方向",
    "english": "from",
    "japanese": "〜から／〜出身の",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜から（場所・時間の始まり）",
        "category": "方向"
      },
      {
        "pos": "前置詞",
        "meaning": "〜出身の",
        "category": "関係",
        "example": "I'm from Japan.",
        "exampleJa": "日本出身です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "from",
        "example": "This gift is from my friend.",
        "exampleJa": "このプレゼントは友達からです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "Where are you from?（出身はどこ？）は、自己紹介でいちばんよく使う形のひとつです。",
    "searchKeywords": "from 〜から／〜出身の 〜から（場所・時間の始まり） 〜出身の 方向"
  },
  {
    "id": "prep_about",
    "type": "word",
    "partOfSpeech": [
      "前置詞",
      "副詞"
    ],
    "category": "関係",
    "english": "about",
    "japanese": "〜について／約〜",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜について",
        "category": "関係"
      },
      {
        "pos": "副詞",
        "meaning": "約〜／およそ",
        "category": "数量",
        "example": "It takes about ten minutes.",
        "exampleJa": "約10分かかります。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "about",
        "example": "What are you talking about?",
        "exampleJa": "何の話をしているの？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "talk about（〜について話す）、think about（〜について考える）のように、動詞とセットでよく使います。",
    "searchKeywords": "about 〜について／約〜 〜について 約〜／およそ 関係"
  },
  {
    "id": "prep_of",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "関係",
    "english": "of",
    "japanese": "〜の／〜のうちの",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の（一部・所属）",
        "category": "関係"
      },
      {
        "pos": "前置詞",
        "meaning": "〜のうちの",
        "category": "数量",
        "example": "He is one of my friends.",
        "exampleJa": "彼は私の友達の1人です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "of",
        "example": "Can I have a cup of coffee?",
        "exampleJa": "コーヒーを1杯もらえますか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "a lot of、a cup of、one of のように、数や量を表す言葉のあとによく出ます。",
    "searchKeywords": "of 〜の／〜のうちの 〜の（一部・所属） 〜のうちの 関係"
  },
  {
    "id": "prep_by",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "時間",
    "english": "by",
    "japanese": "〜までに／〜で／〜のそばに",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜までに（期限）",
        "category": "時間"
      },
      {
        "pos": "前置詞",
        "meaning": "〜で（手段）",
        "category": "手段",
        "example": "I go to work by train.",
        "exampleJa": "電車で通勤しています。"
      },
      {
        "pos": "前置詞",
        "meaning": "〜のそばに",
        "category": "場所",
        "example": "Sit by me.",
        "exampleJa": "私のそばに座って。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "by",
        "example": "Please call me by five.",
        "exampleJa": "5時までに電話してください。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "by は「その時までに」（期限）、until は「その時までずっと」です。",
    "searchKeywords": "by 〜までに／〜で／〜のそばに 〜までに（期限） 〜で（手段） 〜のそばに 時間"
  },
  {
    "id": "exp_can_you",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "依頼",
    "english": "Can you / Could you + 動詞（原形）?",
    "japanese": "〜してくれますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜してくれますか？（依頼）",
        "category": "依頼"
      },
      {
        "pos": "表現",
        "meaning": "〜できますか？",
        "category": "可能",
        "example": "Can you swim?",
        "exampleJa": "泳げますか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Can you + 動詞（原形）?",
        "example": "Can you open the door?",
        "exampleJa": "ドアを開けてくれますか？"
      },
      {
        "label": "丁寧",
        "formName": "Could you + 動詞（原形）?",
        "example": "Could you say that again?",
        "exampleJa": "もう一度言っていただけますか？"
      }
    ],
    "example": "Can you open the door?",
    "exampleJa": "ドアを開けてくれますか？",
    "beginnerTip": "Could you は Can you より丁寧です。親しい友達には Can you、初めての相手や頼みにくいときは Could you を使います。",
    "searchKeywords": "Can you / Could you + 動詞（原形）? 〜してくれますか？ 〜してくれますか？（依頼） 〜できますか？ 依頼"
  },
  {
    "id": "exp_would_you_like",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "依頼",
    "english": "Would you like + 名詞／to + 動詞（原形）?",
    "japanese": "〜はいかがですか？／〜しませんか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜はいかがですか？（名詞）",
        "category": "提案"
      },
      {
        "pos": "表現",
        "meaning": "〜しませんか？（to + 動詞（原形））",
        "category": "提案",
        "example": "Would you like to join us?",
        "exampleJa": "ご一緒にいかがですか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Would you like + 名詞?",
        "example": "Would you like some coffee?",
        "exampleJa": "コーヒーはいかがですか？"
      }
    ],
    "example": "Would you like some coffee?",
    "exampleJa": "コーヒーはいかがですか？",
    "beginnerTip": "Do you want ...? より丁寧な言い方です。「I'd like ...（〜がほしいです）」に対応する、たずねる形です。",
    "searchKeywords": "Would you like + 名詞／to + 動詞（原形）? 〜はいかがですか？／〜しませんか？ 〜はいかがですか？（名詞） 〜しませんか？（to + 動詞（原形）） 依頼"
  },
  {
    "id": "exp_lets",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "提案",
    "english": "Let's + 動詞（原形）",
    "japanese": "〜しよう",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜しよう（誘い）",
        "category": "提案"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Let's + 動詞（原形）",
        "example": "Let's go.",
        "exampleJa": "行こう。"
      },
      {
        "label": "否定",
        "formName": "Let's not + 動詞（原形）",
        "example": "Let's not argue.",
        "exampleJa": "言い争うのはやめよう。"
      }
    ],
    "example": "Let's go.",
    "exampleJa": "行こう。",
    "beginnerTip": "Let's は Let us の省略形です。相手を直接誘う言い方で、Why don't we ...? より、はっきりした提案になります。",
    "searchKeywords": "Let's + 動詞（原形） 〜しよう 〜しよう（誘い） 提案"
  },
  {
    "id": "exp_why_dont_we",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "提案",
    "english": "Why don't we + 動詞（原形）?",
    "japanese": "〜しない？／〜しようよ",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜しない？（一緒に）",
        "category": "提案"
      },
      {
        "pos": "表現",
        "meaning": "〜したらどう？（Why don't you）",
        "category": "助言",
        "example": "Why don't you ask him?",
        "exampleJa": "彼に聞いてみたら？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Why don't we + 動詞（原形）?",
        "example": "Why don't we eat out tonight?",
        "exampleJa": "今夜は外食しない？"
      }
    ],
    "example": "Why don't we eat out tonight?",
    "exampleJa": "今夜は外食しない？",
    "beginnerTip": "Let's より柔らかく、相手の気持ちを聞く感じの提案です。主語を you にすると（Why don't you ...?）、「〜したらどう？」という助言になります。",
    "searchKeywords": "Why don't we + 動詞（原形）? 〜しない？／〜しようよ 〜しない？（一緒に） 〜したらどう？（Why don't you） 提案"
  },
  {
    "id": "exp_do_you_want_me_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "依頼",
    "english": "Do you want me to + 動詞（原形）?",
    "japanese": "〜しましょうか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜しましょうか？（申し出）",
        "category": "提案"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Do you want me to + 動詞（原形）?",
        "example": "Do you want me to call you back?",
        "exampleJa": "折り返し電話しましょうか？"
      }
    ],
    "example": "Do you want me to call you back?",
    "exampleJa": "折り返し電話しましょうか？",
    "beginnerTip": "「私が〜しましょうか？」と申し出るときに使います。もっと丁寧に言うなら Would you like me to ...? です。",
    "searchKeywords": "Do you want me to + 動詞（原形）? 〜しましょうか？ 〜しましょうか？（申し出） 依頼"
  },
  {
    "id": "exp_would_you_mind",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "依頼",
    "english": "Would you mind + 動詞（ing形）?",
    "japanese": "〜していただけませんか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜していただけませんか？（丁寧な依頼）",
        "category": "依頼"
      },
      {
        "pos": "表現",
        "meaning": "〜してもよろしいですか？（Would you mind if I ...?）",
        "category": "許可",
        "example": "Would you mind if I sat here?",
        "exampleJa": "ここに座ってもよろしいですか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Would you mind + 動詞（ing形）?",
        "example": "Would you mind opening the window?",
        "exampleJa": "窓を開けていただけませんか？"
      }
    ],
    "example": "Would you mind opening the window?",
    "exampleJa": "窓を開けていただけませんか？",
    "beginnerTip": "mind は「嫌だと思う」なので、「いいですよ」と答えるときは No, not at all. と No を使います。",
    "searchKeywords": "Would you mind + 動詞（ing形）? 〜していただけませんか？ 〜していただけませんか？（丁寧な依頼） 〜してもよろしいですか？（Would you mind if I ...?） 依頼"
  },
  {
    "id": "aux_should",
    "type": "word",
    "partOfSpeech": [
      "助動詞"
    ],
    "category": "助言",
    "english": "should",
    "japanese": "〜したほうがいい／〜はずだ",
    "senses": [
      {
        "pos": "助動詞",
        "meaning": "〜したほうがいい／〜すべき",
        "category": "助言"
      },
      {
        "pos": "助動詞",
        "meaning": "〜はずだ（当然そうなるはず）",
        "category": "推量",
        "example": "It should be fine.",
        "exampleJa": "大丈夫なはずです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "should",
        "example": "You should get some rest.",
        "exampleJa": "少し休んだほうがいいよ。",
        "needsHint": true
      },
      {
        "label": "否定",
        "formName": "shouldn't",
        "example": "You shouldn't worry.",
        "exampleJa": "心配しなくていいよ。",
        "quizExclude": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "助言・義務の強さの目安は、must ＞ had better ＞ should です。should は「〜したほうがいい」という、ふつうの助言です。",
    "searchKeywords": "should 〜したほうがいい／〜はずだ 〜したほうがいい／〜すべき 〜はずだ（当然そうなるはず） 助言"
  },
  {
    "id": "aux_must",
    "type": "word",
    "partOfSpeech": [
      "助動詞"
    ],
    "category": "義務",
    "english": "must",
    "japanese": "〜しなければならない／〜に違いない",
    "senses": [
      {
        "pos": "助動詞",
        "meaning": "〜しなければならない（強い義務）",
        "category": "義務"
      },
      {
        "pos": "助動詞",
        "meaning": "〜に違いない（強い推量）",
        "category": "推量",
        "example": "You must be tired.",
        "exampleJa": "疲れているに違いないね。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "must",
        "example": "I must go now.",
        "exampleJa": "もう行かなければ。",
        "needsHint": true
      },
      {
        "label": "否定",
        "formName": "must not",
        "example": "You must not tell anyone.",
        "exampleJa": "誰にも言ってはいけません。",
        "quizExclude": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "must not は「〜してはいけない（禁止）」です。have to の否定の don't have to（〜しなくていい）とは意味が違います。会話の「〜しなければ」は、have to のほうがよく使われます。",
    "searchKeywords": "must 〜しなければならない／〜に違いない 〜しなければならない（強い義務） 〜に違いない（強い推量） 義務"
  },
  {
    "id": "aux_might",
    "type": "word",
    "partOfSpeech": [
      "助動詞"
    ],
    "category": "可能性",
    "english": "might",
    "japanese": "〜かもしれない",
    "senses": [
      {
        "pos": "助動詞",
        "meaning": "〜かもしれない",
        "category": "可能性"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "might",
        "example": "I might go tonight.",
        "exampleJa": "今夜行くかもしれない。"
      },
      {
        "label": "否定",
        "formName": "might not",
        "example": "It might not work.",
        "exampleJa": "うまくいかないかもしれない。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "あまり高くない可能性を言います。maybe（もしかすると）は文のはじめに置き、might は動詞の前に置きます（Maybe I will go. / I might go.）。",
    "searchKeywords": "might 〜かもしれない 〜かもしれない 可能性"
  },
  {
    "id": "exp_had_better",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "助言",
    "english": "had better + 動詞（原形）",
    "japanese": "〜したほうがいい（しないと困る）",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜したほうがいい（しないと困る）",
        "category": "助言"
      },
      {
        "pos": "表現",
        "meaning": "そろそろ〜しなきゃ（I'd better）",
        "category": "会話",
        "example": "I'd better get going.",
        "exampleJa": "そろそろ行かなきゃ。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "had better + 動詞（原形）",
        "example": "You'd better go now.",
        "exampleJa": "もう行ったほうがいいよ。"
      },
      {
        "label": "会話形",
        "formName": "better + 動詞（原形）",
        "example": "You better hurry.",
        "exampleJa": "急いだほうがいいよ。"
      }
    ],
    "example": "You'd better go now.",
    "exampleJa": "もう行ったほうがいいよ。",
    "beginnerTip": "should より強く、「しないと困ったことになる」という忠告・警告になります。目上の人には使わないほうが無難です。",
    "searchKeywords": "had better + 動詞（原形） 〜したほうがいい（しないと困る） 〜したほうがいい（しないと困る） そろそろ〜しなきゃ（I'd better） 助言",
    "spokenForm": [
      "better"
    ]
  },
  {
    "id": "exp_be_supposed_to",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "予定",
    "english": "be supposed to + 動詞（原形）",
    "japanese": "〜することになっている",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜することになっている／〜するはず",
        "category": "予定"
      },
      {
        "pos": "表現",
        "meaning": "〜してはいけない（否定）",
        "category": "ルール",
        "example": "You're not supposed to park here.",
        "exampleJa": "ここに駐車してはいけません。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "be supposed to + 動詞（原形）",
        "example": "I'm supposed to call him at five.",
        "exampleJa": "5時に彼に電話することになっています。"
      },
      {
        "label": "過去形",
        "formName": "was / were supposed to + 動詞（原形）",
        "example": "I was supposed to meet her today.",
        "exampleJa": "今日彼女に会うはずでした。"
      }
    ],
    "example": "I'm supposed to call him at five.",
    "exampleJa": "5時に彼に電話することになっています。",
    "beginnerTip": "予定・決まり・期待に使います。実際にはしなかったことを「〜するはずだったのに」と言うときは was supposed to です。",
    "searchKeywords": "be supposed to + 動詞（原形） 〜することになっている 〜することになっている／〜するはず 〜してはいけない（否定） 予定"
  },
  {
    "id": "exp_do_you_think",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "質問",
    "english": "Do you think + 文?",
    "japanese": "〜だと思いますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜だと思いますか？",
        "category": "質問"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Do you think + 文?",
        "example": "Do you think it will rain?",
        "exampleJa": "雨が降ると思いますか？"
      }
    ],
    "example": "Do you think it will rain?",
    "exampleJa": "雨が降ると思いますか？",
    "beginnerTip": "I think + 文 の疑問形です。Do you think のあとは、ふつうの文の語順のままです（it will rain）。",
    "searchKeywords": "Do you think + 文? 〜だと思いますか？ 〜だと思いますか？ 質問"
  },
  {
    "id": "exp_hold_on",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "hold on",
    "japanese": "ちょっと待って／つかまっていて",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ちょっと待って",
        "category": "電話"
      },
      {
        "pos": "表現",
        "meaning": "しっかりつかまる",
        "category": "動作",
        "example": "Hold on to the railing.",
        "exampleJa": "手すりにつかまって。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "hold on",
        "example": "Hold on a second.",
        "exampleJa": "ちょっと待って。"
      }
    ],
    "example": "Hold on a second.",
    "exampleJa": "ちょっと待って。",
    "beginnerTip": "電話や会話で「ちょっと待って」と言う定番です。wait より口語的で、Hold on a second. / Hold on a minute. の形でもよく使います。",
    "searchKeywords": "hold on ちょっと待って／つかまっていて ちょっと待って しっかりつかまる 電話"
  },
  {
    "id": "exp_call_back",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "call back",
    "japanese": "折り返し電話する",
    "senses": [
      {
        "pos": "表現",
        "meaning": "折り返し電話する",
        "category": "電話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "call back",
        "example": "I'll call you back later.",
        "exampleJa": "あとで折り返します。"
      }
    ],
    "example": "I'll call you back later.",
    "exampleJa": "あとで折り返します。",
    "beginnerTip": "「折り返す」は call + 人 + back の語順です。「あとで電話する」は call you later と言います。",
    "searchKeywords": "call back 折り返し電話する 折り返し電話する 電話"
  },
  {
    "id": "exp_hang_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "hang up",
    "japanese": "電話を切る",
    "senses": [
      {
        "pos": "表現",
        "meaning": "電話を切る",
        "category": "電話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "hang up",
        "example": "Please don't hang up.",
        "exampleJa": "切らないでください。"
      },
      {
        "label": "三人称単数現在",
        "formName": "hangs up",
        "example": "She hangs up when she is angry.",
        "exampleJa": "彼女は怒ると電話を切ります。"
      },
      {
        "label": "過去形",
        "formName": "hung up",
        "example": "I hung up by mistake.",
        "exampleJa": "間違えて切ってしまいました。"
      },
      {
        "label": "過去分詞",
        "formName": "hung up",
        "example": "He has hung up already.",
        "exampleJa": "彼はもう電話を切りました。"
      },
      {
        "label": "ing形",
        "formName": "hanging up",
        "example": "I'm hanging up now.",
        "exampleJa": "もう切るね。"
      }
    ],
    "example": "Please don't hang up.",
    "exampleJa": "切らないでください。",
    "beginnerTip": "hang の過去形・過去分詞は hung です。「電話を切る」は hang up、「電話に出る」は answer や pick up です。",
    "searchKeywords": "hang up 電話を切る 電話を切る 電話"
  },
  {
    "id": "exp_speak_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "speak up",
    "japanese": "もっと大きな声で話す／はっきり意見を言う",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もっと大きな声で話す",
        "category": "電話"
      },
      {
        "pos": "表現",
        "meaning": "遠慮せず意見を言う",
        "category": "会話",
        "example": "If you disagree, speak up.",
        "exampleJa": "反対なら、遠慮せず言って。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "speak up",
        "example": "Can you speak up, please?",
        "exampleJa": "もう少し大きな声で話してもらえますか？"
      }
    ],
    "example": "Can you speak up, please?",
    "exampleJa": "もう少し大きな声で話してもらえますか？",
    "beginnerTip": "speak up は「声を大きく」です。ゆっくり話してほしいときは speak more slowly、はっきり話してほしいときは speak clearly を使います。",
    "searchKeywords": "speak up もっと大きな声で話す／はっきり意見を言う もっと大きな声で話す 遠慮せず意見を言う 電話"
  },
  {
    "id": "exp_break_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "break up",
    "japanese": "電波が途切れる／別れる",
    "senses": [
      {
        "pos": "表現",
        "meaning": "電波が途切れる（You're breaking up.）",
        "category": "電話"
      },
      {
        "pos": "表現",
        "meaning": "別れる",
        "category": "人間関係",
        "example": "They broke up last year.",
        "exampleJa": "彼らは去年別れました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "break up",
        "example": "The call might break up in the tunnel.",
        "exampleJa": "トンネルの中では電話が途切れるかもしれません。"
      },
      {
        "label": "三人称単数現在",
        "formName": "breaks up",
        "example": "The signal breaks up here.",
        "exampleJa": "ここは電波が途切れます。"
      },
      {
        "label": "過去形",
        "formName": "broke up",
        "example": "The call broke up twice.",
        "exampleJa": "電話が2回途切れました。"
      },
      {
        "label": "過去分詞",
        "formName": "broken up",
        "example": "Your voice has broken up again.",
        "exampleJa": "また声が途切れました。"
      },
      {
        "label": "ing形",
        "formName": "breaking up",
        "example": "You're breaking up.",
        "exampleJa": "声が途切れています。"
      }
    ],
    "example": "The call might break up in the tunnel.",
    "exampleJa": "トンネルの中では電話が途切れるかもしれません。",
    "beginnerTip": "電話で You're breaking up.（声が途切れてるよ）と言えます。break の変化は break → broke → broken です。",
    "searchKeywords": "break up 電波が途切れる／別れる 電波が途切れる（You're breaking up.） 別れる 電話"
  },
  {
    "id": "v_answer",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "電話",
    "english": "answer",
    "japanese": "答える／電話に出る",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "答える／応答する",
        "category": "会話"
      },
      {
        "pos": "動詞",
        "meaning": "電話に出る",
        "category": "電話",
        "example": "Please answer the phone.",
        "exampleJa": "電話に出てください。"
      },
      {
        "pos": "名詞",
        "meaning": "答え",
        "category": "会話",
        "example": "Your answer is correct.",
        "exampleJa": "あなたの答えは正しいです。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "answer",
        "example": "Can you answer this question?",
        "exampleJa": "この質問に答えられますか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "answers",
        "example": "She answers every email.",
        "exampleJa": "彼女はすべてのメールに返信します。"
      },
      {
        "label": "過去形",
        "formName": "answered",
        "example": "He answered right away.",
        "exampleJa": "彼はすぐに応答しました。"
      },
      {
        "label": "過去分詞",
        "formName": "answered",
        "example": "I have answered all of them.",
        "exampleJa": "全部に答えました。"
      },
      {
        "label": "ing形",
        "formName": "answering",
        "example": "I'm answering a call.",
        "exampleJa": "電話に出ています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "answer のあとには、そのまま名詞が来ます（answer the phone, answer a question）。answer the phone は、pick up the phone とほぼ同じ場面で、電話に出ることです。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
    "searchKeywords": "answer 答える／電話に出る 答える／応答する 電話に出る 答え 電話"
  },
  {
    "id": "v_catch",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "電話",
    "english": "catch",
    "japanese": "つかまえる／聞き取る／（病気に）かかる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "つかまえる／受け止める",
        "category": "基本動詞"
      },
      {
        "pos": "動詞",
        "meaning": "聞き取る",
        "category": "電話",
        "example": "Sorry, I didn't catch that.",
        "exampleJa": "ごめん、聞き取れなかった。"
      },
      {
        "pos": "動詞",
        "meaning": "（風邪などに）かかる",
        "category": "体調",
        "example": "I caught a cold last week.",
        "exampleJa": "先週風邪をひきました。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "catch",
        "example": "Catch the ball!",
        "exampleJa": "ボールをつかまえて！"
      },
      {
        "label": "三人称単数現在",
        "formName": "catches",
        "example": "She catches the bus every morning.",
        "exampleJa": "彼女は毎朝そのバスに乗ります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "caught",
        "example": "I caught the last train.",
        "exampleJa": "最終電車に間に合いました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "caught",
        "example": "I have never caught a fish.",
        "exampleJa": "魚を釣ったことがありません。"
      },
      {
        "label": "ing形",
        "formName": "catching",
        "example": "I'm catching the 8:30 bus tomorrow.",
        "exampleJa": "明日は8時30分のバスに乗ります。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-B",
    "beginnerTip": "I didn't catch that.（聞き取れなかった）は、電話で聞き返すときの定番です。hear は音が聞こえること、catch は聞こえた言葉を聞き取ることです。聞こえているのに分からないときは catch を使います。",
    "searchKeywords": "catch つかまえる／聞き取る／（病気に）かかる つかまえる／受け止める 聞き取る （風邪などに）かかる 電話"
  },
  {
    "id": "v_repeat",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "電話",
    "english": "repeat",
    "japanese": "繰り返す／もう一度言う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "繰り返す／もう一度言う",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "repeat",
        "example": "Can you repeat that, please?",
        "exampleJa": "もう一度言ってもらえますか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "repeats",
        "example": "She repeats the same story.",
        "exampleJa": "彼女は同じ話を繰り返します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "repeated",
        "example": "I repeated my question.",
        "exampleJa": "質問を繰り返しました。"
      },
      {
        "label": "過去分詞",
        "formName": "repeated",
        "example": "He has repeated himself three times.",
        "exampleJa": "彼は3回も同じことを言いました。"
      },
      {
        "label": "ing形",
        "formName": "repeating",
        "example": "I'm repeating the words after her.",
        "exampleJa": "彼女のあとについて言葉を繰り返しています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "Can you repeat that? は聞き返しの定番です。Say that again? や Come again? も同じ場面で使えます。",
    "searchKeywords": "repeat 繰り返す／もう一度言う 繰り返す／もう一度言う 電話"
  },
  {
    "id": "adv_slowly",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "電話",
    "english": "slowly",
    "japanese": "ゆっくり",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "ゆっくり",
        "category": "電話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "slowly",
        "example": "Please speak slowly.",
        "exampleJa": "ゆっくり話してください。"
      },
      {
        "label": "比較級",
        "formName": "more slowly",
        "example": "Could you speak more slowly?",
        "exampleJa": "もう少しゆっくり話してもらえますか？",
        "quizExclude": true
      }
    ],
    "changeType": "slow + ly",
    "beginnerTip": "slow（遅い）に -ly がついた副詞です。-ly は「〜に／〜く」という副詞の目印になることが多いです。",
    "searchKeywords": "slowly ゆっくり ゆっくり 電話"
  },
  {
    "id": "adv_clearly",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "電話",
    "english": "clearly",
    "japanese": "はっきり／明らかに",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "はっきりと",
        "category": "電話"
      },
      {
        "pos": "副詞",
        "meaning": "明らかに",
        "category": "確信度",
        "example": "Clearly, he was wrong.",
        "exampleJa": "明らかに、彼が間違っていました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "clearly",
        "example": "Please speak clearly.",
        "exampleJa": "はっきり話してください。"
      },
      {
        "label": "比較級",
        "formName": "more clearly",
        "example": "I can hear you more clearly now.",
        "exampleJa": "今のほうがはっきり聞こえます。",
        "quizExclude": true
      }
    ],
    "changeType": "clear + ly",
    "beginnerTip": "clear（はっきりした）に -ly がついた副詞です。電話では Can you speak more clearly? のように頼めます。",
    "searchKeywords": "clearly はっきり／明らかに はっきりと 明らかに 電話"
  },
  {
    "id": "exp_let_me_know",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "Let me know",
    "japanese": "知らせて／教えて",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜を知らせて",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Let me know",
        "example": "Let me know if you can come.",
        "exampleJa": "来られるか教えてね。"
      }
    ],
    "example": "Let me know if you can come.",
    "exampleJa": "来られるか教えてね。",
    "beginnerTip": "Let me know + if / when / what ... の形で使います。tell me より気軽な、「分かったら教えてね」という頼み方です。",
    "searchKeywords": "Let me know 知らせて／教えて 〜を知らせて 会話"
  },
  {
    "id": "exp_talk_to_you_later",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "Talk to you later",
    "japanese": "また後で（電話・会話の終わり）",
    "senses": [
      {
        "pos": "表現",
        "meaning": "また後で話そう（別れのあいさつ）",
        "category": "電話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Talk to you later",
        "example": "Talk to you later!",
        "exampleJa": "じゃあ、また後で話そう！"
      }
    ],
    "example": "Talk to you later!",
    "exampleJa": "じゃあ、また後で話そう！",
    "beginnerTip": "電話やチャットの終わりのあいさつです。See you later.（また後で）や Catch you later. も近い使い方です。",
    "searchKeywords": "Talk to you later また後で（電話・会話の終わり） また後で話そう（別れのあいさつ） 電話"
  },
  {
    "id": "exp_whats_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "会話",
    "english": "What's up? / How's it going?",
    "japanese": "やあ、元気？／調子はどう？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "やあ、元気？（What's up?）",
        "category": "会話"
      },
      {
        "pos": "表現",
        "meaning": "調子はどう？（How's it going?）",
        "category": "会話",
        "example": "How's it going with your new job?",
        "exampleJa": "新しい仕事の調子はどう？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "What's up?",
        "example": "Hey, what's up?",
        "exampleJa": "やあ、元気？"
      },
      {
        "label": "同じ意味",
        "formName": "How's it going?",
        "example": "Hi, how's it going?",
        "exampleJa": "やあ、調子はどう？"
      }
    ],
    "example": "Hey, what's up?",
    "exampleJa": "やあ、元気？",
    "beginnerTip": "友達へのあいさつです。返事は Not much.（特に何も）や Pretty good.（かなりいいよ）などです。What's up? は「何かあった？」と聞こえることもあります。",
    "searchKeywords": "What's up? / How's it going? やあ、元気？／調子はどう？ やあ、元気？（What's up?） 調子はどう？（How's it going?） 会話"
  },
  {
    "id": "exp_is_this_a_good_time",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "Is this a good time to talk?",
    "japanese": "今、話しても大丈夫？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "今、話しても大丈夫？",
        "category": "電話"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "Is this a good time to talk?",
        "example": "Hi, is this a good time to talk?",
        "exampleJa": "もしもし、今話しても大丈夫？"
      }
    ],
    "example": "Hi, is this a good time to talk?",
    "exampleJa": "もしもし、今話しても大丈夫？",
    "beginnerTip": "電話をかけたときの最初のひとことです。返事は Sure.（いいよ）や Can I call you back?（あとでかけ直してもいい？）などです。",
    "searchKeywords": "Is this a good time to talk? 今、話しても大丈夫？ 今、話しても大丈夫？ 電話"
  },
  {
    "id": "exp_this_is",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "This is + 名前",
    "japanese": "（電話で）こちらは〜です",
    "senses": [
      {
        "pos": "表現",
        "meaning": "（電話で）こちらは〜です",
        "category": "電話"
      },
      {
        "pos": "表現",
        "meaning": "〜さんですか？（Is this + 名前?）",
        "category": "電話",
        "example": "Is this Emma?",
        "exampleJa": "エマさんですか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "This is + 名前",
        "example": "Hi, this is Emma.",
        "exampleJa": "もしもし、エマです。"
      }
    ],
    "example": "Hi, this is Emma.",
    "exampleJa": "もしもし、エマです。",
    "beginnerTip": "電話では I am ではなく This is を使います。相手を確かめるときは Is this ...? や Who is this?（どちら様ですか？）と言います。",
    "searchKeywords": "This is + 名前 （電話で）こちらは〜です （電話で）こちらは〜です 〜さんですか？（Is this + 名前?） 電話"
  },
  {
    "id": "adv_later",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "later",
    "japanese": "あとで／〜後に",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "あとで／もっとあとに",
        "category": "時間"
      },
      {
        "pos": "副詞",
        "meaning": "〜後に（two days later など）",
        "category": "時間",
        "example": "He called me two days later.",
        "exampleJa": "彼は2日後に電話してきました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "later",
        "example": "See you later.",
        "exampleJa": "またあとで。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "late（遅い）の比較級 later と同じ形ですが、会話では「あとで」の意味でとてもよく使います。after（〜のあとに）は、基準になる言葉が必要です。",
    "searchKeywords": "later あとで／〜後に あとで／もっとあとに 〜後に（two days later など） 時間"
  },
  {
    "id": "prep_before",
    "type": "word",
    "partOfSpeech": [
      "前置詞",
      "接続詞",
      "副詞"
    ],
    "category": "時間",
    "english": "before",
    "japanese": "〜の前に／〜する前に／以前に",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の前に（名詞）",
        "category": "時間"
      },
      {
        "pos": "接続詞",
        "meaning": "〜する前に（文）",
        "category": "時間",
        "example": "Call me before you leave.",
        "exampleJa": "出る前に電話して。"
      },
      {
        "pos": "副詞",
        "meaning": "以前に",
        "category": "時間",
        "example": "Have we met before?",
        "exampleJa": "以前にお会いしましたか？"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "before",
        "example": "Let's talk before lunch.",
        "exampleJa": "昼食の前に話そう。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "名詞の前（before lunch）にも、文の前（before you leave）にも使えます。after の反対です。",
    "searchKeywords": "before 〜の前に／〜する前に／以前に 〜の前に（名詞） 〜する前に（文） 以前に 時間"
  },
  {
    "id": "prep_after",
    "type": "word",
    "partOfSpeech": [
      "前置詞",
      "接続詞"
    ],
    "category": "時間",
    "english": "after",
    "japanese": "〜のあとに／〜したあとに",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜のあとに（名詞）",
        "category": "時間"
      },
      {
        "pos": "接続詞",
        "meaning": "〜したあとに（文）",
        "category": "時間",
        "example": "Call me after you finish work.",
        "exampleJa": "仕事が終わったら電話して。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "after",
        "example": "Let's eat after the movie.",
        "exampleJa": "映画のあとに食べよう。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "名詞の前（after work）にも、文の前（after you finish）にも使えます。later は単独で「あとで」、after は「何かのあと」と基準を言います。",
    "searchKeywords": "after 〜のあとに／〜したあとに 〜のあとに（名詞） 〜したあとに（文） 時間"
  },
  {
    "id": "adv_ago",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "時間",
    "english": "ago",
    "japanese": "〜前に",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "〜前に",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "ago",
        "example": "I met her two years ago.",
        "exampleJa": "2年前に彼女に会いました。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "ago は今を基準に「〜前に」と言うときに使い、過去形の文に置きます（three days ago）。",
    "searchKeywords": "ago 〜前に 〜前に 時間"
  },
  {
    "id": "prep_since",
    "type": "word",
    "partOfSpeech": [
      "前置詞",
      "接続詞"
    ],
    "category": "時間",
    "english": "since",
    "japanese": "〜から（ずっと）／〜なので",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜から（ずっと）",
        "category": "時間"
      },
      {
        "pos": "接続詞",
        "meaning": "〜なので",
        "category": "つなぎ",
        "example": "Since you're here, let's start.",
        "exampleJa": "来たことだし、始めましょう。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "since",
        "example": "I have lived here since 2020.",
        "exampleJa": "2020年からここに住んでいます。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "since は「始まりの時点」、for は「期間の長さ」です（since 2020 / for six years）。どちらも have + 過去分詞の形といっしょによく出ます。",
    "searchKeywords": "since 〜から（ずっと）／〜なので 〜から（ずっと） 〜なので 時間"
  },
  {
    "id": "prep_during",
    "type": "word",
    "partOfSpeech": [
      "前置詞"
    ],
    "category": "時間",
    "english": "during",
    "japanese": "〜の間（に）",
    "senses": [
      {
        "pos": "前置詞",
        "meaning": "〜の間（に）",
        "category": "時間"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "during",
        "example": "Please don't talk during the movie.",
        "exampleJa": "映画の間は話さないでください。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "during は「出来事の間」（during the meeting）です。期間の長さは for（for two hours）、文が続くときは while を使います。",
    "searchKeywords": "during 〜の間（に） 〜の間（に） 時間"
  },
  {
    "id": "adv_tomorrow",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "名詞"
    ],
    "category": "時間",
    "english": "tomorrow",
    "japanese": "明日",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "明日（に）",
        "category": "時間"
      },
      {
        "pos": "名詞",
        "meaning": "明日",
        "category": "時間",
        "example": "Tomorrow is Friday.",
        "exampleJa": "明日は金曜日です。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "tomorrow",
        "example": "See you tomorrow.",
        "exampleJa": "また明日。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "tomorrow の前に on や in はつけません（× on tomorrow）。 「明日」の意味では冠詞なし。",
    "searchKeywords": "tomorrow 明日 明日（に） 明日 時間"
  },
  {
    "id": "adv_yesterday",
    "type": "word",
    "partOfSpeech": [
      "副詞",
      "名詞"
    ],
    "category": "時間",
    "english": "yesterday",
    "japanese": "昨日",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "昨日（に）",
        "category": "時間"
      },
      {
        "pos": "名詞",
        "meaning": "昨日",
        "category": "時間",
        "example": "Yesterday was a long day.",
        "exampleJa": "昨日は長い1日でした。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "yesterday",
        "example": "I called you yesterday.",
        "exampleJa": "昨日あなたに電話しました。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "yesterday の前にも前置詞はつけません。過去形の文といっしょに使います。 「昨日」の意味では冠詞なし。",
    "searchKeywords": "yesterday 昨日 昨日（に） 昨日 時間"
  },
  {
    "id": "adv_quickly",
    "type": "word",
    "partOfSpeech": [
      "副詞"
    ],
    "category": "速さ",
    "english": "quickly",
    "japanese": "すばやく／すぐに",
    "senses": [
      {
        "pos": "副詞",
        "meaning": "すばやく／すぐに",
        "category": "速さ"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "quickly",
        "example": "Please reply quickly.",
        "exampleJa": "すぐに返信してください。"
      },
      {
        "label": "比較級",
        "formName": "more quickly",
        "example": "I can finish more quickly this way.",
        "exampleJa": "このほうが早く終わらせられます。",
        "quizExclude": true
      }
    ],
    "changeType": "quick + ly",
    "beginnerTip": "quick（すばやい）に -ly をつけた副詞です。fast とほぼ同じ意味で使えます。",
    "searchKeywords": "quickly すばやく／すぐに すばやく／すぐに 速さ"
  },
  {
    "id": "exp_last_night",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "時間",
    "english": "last night / next week / this morning",
    "japanese": "昨夜／来週／今朝（前置詞なし）",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜に（last + 時を表す言葉）",
        "category": "時間"
      },
      {
        "pos": "表現",
        "meaning": "来〜に（next + 時を表す言葉）",
        "category": "時間",
        "example": "I'll see her next week.",
        "exampleJa": "来週彼女に会います。"
      },
      {
        "pos": "表現",
        "meaning": "今〜に（this + 時を表す言葉）",
        "category": "時間",
        "example": "I'm busy this morning.",
        "exampleJa": "今朝は忙しいです。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "last night / next week / this morning",
        "example": "I called you last night.",
        "exampleJa": "昨夜あなたに電話しました。"
      }
    ],
    "example": "I called you last night.",
    "exampleJa": "昨夜あなたに電話しました。",
    "beginnerTip": "last / next / this + 時を表す言葉 の前には、in や on をつけません。",
    "searchKeywords": "last night / next week / this morning 昨夜／来週／今朝（前置詞なし） 〜に（last + 時を表す言葉） 来〜に（next + 時を表す言葉） 今〜に（this + 時を表す言葉） 時間"
  },
  {
    "id": "v_enjoy",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "enjoy",
    "japanese": "楽しむ",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "楽しむ",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "enjoy",
        "example": "I enjoy cooking.",
        "exampleJa": "料理を楽しんでいます。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "enjoys",
        "example": "She enjoys long walks.",
        "exampleJa": "彼女は長い散歩を楽しみます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "enjoyed",
        "example": "We enjoyed the trip.",
        "exampleJa": "私たちは旅行を楽しみました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "enjoyed",
        "example": "I have enjoyed talking with you.",
        "exampleJa": "あなたと話せて楽しかったです。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "enjoying",
        "example": "I'm enjoying my coffee.",
        "exampleJa": "コーヒーを楽しんでいます。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "enjoy のあとに動詞が来るときは、〜ing の形です（enjoy talking。× enjoy to talk）。like（好き）より、実際にやって楽しむ感じです。Enjoy! だけで「楽しんでね」にもなります。",
    "searchKeywords": "enjoy 楽しむ 楽しむ 感情"
  },
  {
    "id": "v_finish",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "finish",
    "japanese": "終える／終わる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "終える",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "finish",
        "example": "Let me finish this first.",
        "exampleJa": "まずこれを終わらせて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "finishes",
        "example": "The movie finishes at nine.",
        "exampleJa": "映画は9時に終わります。"
      },
      {
        "label": "過去形",
        "formName": "finished",
        "example": "I finished my work early.",
        "exampleJa": "仕事を早く終えました。"
      },
      {
        "label": "過去分詞",
        "formName": "finished",
        "example": "Have you finished yet?",
        "exampleJa": "もう終わりましたか？"
      },
      {
        "label": "ing形",
        "formName": "finishing",
        "example": "I'm finishing my homework.",
        "exampleJa": "宿題を終わらせるところです。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "finish のあとに動詞が来るときは〜ing の形です（finish eating）。「終わらせる」も「終わる」も finish で言えます。",
    "searchKeywords": "finish 終える／終わる 終える 行動"
  },
  {
    "id": "v_agree",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "意見",
    "english": "agree",
    "japanese": "賛成する／同意する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "賛成する",
        "category": "意見"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "agree",
        "example": "I agree with you.",
        "exampleJa": "あなたに賛成です。"
      },
      {
        "label": "三人称単数現在",
        "formName": "agrees",
        "example": "She agrees with me.",
        "exampleJa": "彼女は私に賛成です。"
      },
      {
        "label": "過去形",
        "formName": "agreed",
        "example": "We agreed on a price.",
        "exampleJa": "私たちは値段に合意しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "agreed",
        "example": "I have agreed to help him.",
        "exampleJa": "彼を手伝うことに同意しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "agreeing",
        "example": "I'm not agreeing to that.",
        "exampleJa": "私はそれには同意しません。"
      }
    ],
    "changeType": "規則変化 (-d)",
    "beginnerTip": "agree with + 人・意見（〜に賛成）、agree to + 提案（〜に同意する）、agree on + 内容（〜で合意する）を使い分けます。I agree. だけでも言えます。",
    "searchKeywords": "agree 賛成する／同意する 賛成する 意見"
  },
  {
    "id": "v_plan",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "予定",
    "english": "plan",
    "japanese": "計画する／予定する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "計画する／予定する",
        "category": "予定"
      },
      {
        "pos": "名詞",
        "meaning": "計画／予定",
        "category": "予定",
        "example": "Do you have any plans this weekend?",
        "exampleJa": "今週末は何か予定がありますか？"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "plan",
        "example": "We plan to leave at six.",
        "exampleJa": "6時に出発する予定です。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "plans",
        "example": "She plans every trip carefully.",
        "exampleJa": "彼女は旅行を丁寧に計画します。"
      },
      {
        "label": "過去形",
        "formName": "planned",
        "example": "I planned a surprise party.",
        "exampleJa": "サプライズパーティーを計画しました。"
      },
      {
        "label": "過去分詞",
        "formName": "planned",
        "example": "We have planned everything.",
        "exampleJa": "すべて計画しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "planning",
        "example": "We're planning a trip next month.",
        "exampleJa": "来月の旅行を計画しています。"
      }
    ],
    "changeType": "n重ね + -ed / -ing",
    "beginnerTip": "plan to + 動詞（原形）は「〜するつもり」で、be going to とほぼ同じ意味ですが、考えて準備していることを強調します。名詞の plan（予定）もよく使います。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
    "searchKeywords": "plan 計画する／予定する 計画する／予定する 計画／予定 予定"
  },
  {
    "id": "v_invite",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "人間関係",
    "english": "invite",
    "japanese": "招待する／誘う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "招待する",
        "category": "人間関係"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "invite",
        "example": "Let's invite him too.",
        "exampleJa": "彼も誘おう。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "invites",
        "example": "She invites us every year.",
        "exampleJa": "彼女は毎年私たちを招待してくれます。"
      },
      {
        "label": "過去形",
        "formName": "invited",
        "example": "They invited me to dinner.",
        "exampleJa": "彼らは私を夕食に招待してくれました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "invited",
        "example": "I have invited ten people.",
        "exampleJa": "10人を招待しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "inviting",
        "example": "We're inviting everyone.",
        "exampleJa": "みんなを招待するところです。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-d)",
    "beginnerTip": "invite + 人 + to + 場所・行事（〜に誘う）の形で使います。",
    "searchKeywords": "invite 招待する／誘う 招待する 人間関係"
  },
  {
    "id": "v_explain",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "会話",
    "english": "explain",
    "japanese": "説明する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "説明する",
        "category": "会話"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "explain",
        "example": "Let me explain.",
        "exampleJa": "説明させて。"
      },
      {
        "label": "三人称単数現在",
        "formName": "explains",
        "example": "He explains things clearly.",
        "exampleJa": "彼は分かりやすく説明します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "explained",
        "example": "I explained the problem.",
        "exampleJa": "問題を説明しました。"
      },
      {
        "label": "過去分詞",
        "formName": "explained",
        "example": "She has explained it twice.",
        "exampleJa": "彼女は2回説明してくれました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "explaining",
        "example": "I'm explaining the rules.",
        "exampleJa": "ルールを説明しているところです。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "explain + 内容 + to + 人 の語順です（× explain me）。Can you explain it to me? のように言います。",
    "searchKeywords": "explain 説明する 説明する 会話"
  },
  {
    "id": "v_expect",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "考え",
    "english": "expect",
    "japanese": "予想する／期待する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "予想する／期待する",
        "category": "考え"
      },
      {
        "pos": "動詞",
        "meaning": "来ると思う／待っている",
        "category": "考え",
        "example": "I wasn't expecting you!",
        "exampleJa": "来るとは思っていなかった！"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "expect",
        "example": "I expect you to be on time.",
        "exampleJa": "時間どおりに来てほしいです。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "expects",
        "example": "She expects a lot from me.",
        "exampleJa": "彼女は私に多くを期待します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "expected",
        "example": "I expected it to be easy.",
        "exampleJa": "簡単だと思っていました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "expected",
        "example": "We have expected this for months.",
        "exampleJa": "数か月前からこれを予想していました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "expecting",
        "example": "I'm expecting a package today.",
        "exampleJa": "今日は荷物が届く予定です。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "expect は「そうなると思う」という予想です。hope（そうなってほしい）より、実際に起こる可能性が高いと考えているときに使います。wait（待つ）とは違います。",
    "searchKeywords": "expect 予想する／期待する 予想する／期待する 来ると思う／待っている 考え"
  },
  {
    "id": "v_worry",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "worry",
    "japanese": "心配する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "心配する",
        "category": "感情"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "worry",
        "example": "Don't worry.",
        "exampleJa": "心配しないで。"
      },
      {
        "label": "三人称単数現在",
        "formName": "worries",
        "example": "She worries about everything.",
        "exampleJa": "彼女は何でも心配します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "worried",
        "example": "I worried all night.",
        "exampleJa": "一晩中心配しました。"
      },
      {
        "label": "過去分詞",
        "formName": "worried",
        "example": "I have worried about this for days.",
        "exampleJa": "何日もこのことを心配しています。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "worrying",
        "example": "I'm worrying too much.",
        "exampleJa": "心配しすぎています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (y→ied)",
    "beginnerTip": "worry about + 名詞（〜を心配する）の形です。worried（心配している）は形容詞のカードで、worry は「心配する」という動作です。Don't worry about it.（気にしないで）はよく使います。",
    "searchKeywords": "worry 心配する 心配する 感情"
  },
  {
    "id": "v_care",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "感情",
    "english": "care",
    "japanese": "気にかける／世話をする",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "気にかける／大切に思う",
        "category": "感情"
      },
      {
        "pos": "動詞",
        "meaning": "世話をする（care for）",
        "category": "行動",
        "example": "She cares for her grandmother.",
        "exampleJa": "彼女は祖母の世話をしています。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "care",
        "example": "I really care about you.",
        "exampleJa": "あなたのことを本当に大切に思っています。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "cares",
        "example": "He cares about his health.",
        "exampleJa": "彼は健康を気にしています。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "cared",
        "example": "We cared about the result.",
        "exampleJa": "私たちは結果を気にかけました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "cared",
        "example": "I have always cared about this.",
        "exampleJa": "私はずっとこのことを大切にしてきました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "caring",
        "example": "She is caring for her mother.",
        "exampleJa": "彼女は母親の世話をしています。"
      }
    ],
    "changeType": "規則変化 (-d)",
    "beginnerTip": "I don't care.（どうでもいい）は、言い方によってはきつく聞こえます。Take care!（またね・気をつけて）は別れのあいさつです。",
    "searchKeywords": "care 気にかける／世話をする 気にかける／大切に思う 世話をする（care for） 感情"
  },
  {
    "id": "v_share",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "share",
    "japanese": "共有する／分け合う",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "共有する",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "share",
        "example": "Can I share this with you?",
        "exampleJa": "これをあなたと分けてもいい？"
      },
      {
        "label": "三人称単数現在",
        "formName": "shares",
        "example": "She shares her notes with everyone.",
        "exampleJa": "彼女はみんなにノートを共有します。"
      },
      {
        "label": "過去形",
        "formName": "shared",
        "example": "We shared a pizza.",
        "exampleJa": "私たちはピザを分け合いました。"
      },
      {
        "label": "過去分詞",
        "formName": "shared",
        "example": "I have shared the photos.",
        "exampleJa": "写真を共有しました。"
      },
      {
        "label": "ing形",
        "formName": "sharing",
        "example": "I'm sharing a room with my friend.",
        "exampleJa": "友達と部屋を共有しています。"
      }
    ],
    "changeType": "規則変化 (-d)",
    "beginnerTip": "share A with B（AをBと分け合う）の形でよく使います。SNSで「シェアする」と言うときも、同じ share です。",
    "searchKeywords": "share 共有する／分け合う 共有する 行動"
  },
  {
    "id": "v_join",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "join",
    "japanese": "参加する／加わる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "参加する",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "join",
        "example": "Do you want to join us?",
        "exampleJa": "一緒にどうですか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "joins",
        "example": "He joins the call at ten.",
        "exampleJa": "彼は10時に通話に加わります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "joined",
        "example": "I joined a gym last month.",
        "exampleJa": "先月ジムに入会しました。"
      },
      {
        "label": "過去分詞",
        "formName": "joined",
        "example": "She has joined our team.",
        "exampleJa": "彼女はチームに加わりました。"
      },
      {
        "label": "ing形",
        "formName": "joining",
        "example": "I'm joining the meeting now.",
        "exampleJa": "今、会議に参加します。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "join のあとには、前置詞なしで名詞が来ます（× join to us）。",
    "searchKeywords": "join 参加する／加わる 参加する 行動"
  },
  {
    "id": "v_borrow",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "borrow",
    "japanese": "借りる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "借りる",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "borrow",
        "example": "Can I borrow your pen?",
        "exampleJa": "ペンを借りてもいい？",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "borrows",
        "example": "He always borrows my charger.",
        "exampleJa": "彼はいつも私の充電器を借ります。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "borrowed",
        "example": "I borrowed a book from her.",
        "exampleJa": "彼女から本を借りました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "borrowed",
        "example": "She has borrowed my car twice.",
        "exampleJa": "彼女は私の車を2回借りました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "borrowing",
        "example": "I'm borrowing his bike today.",
        "exampleJa": "今日は彼の自転車を借りています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "borrow は「借りる」、lend は「貸す」です。Can I borrow ...?（借りてもいい？）と Can you lend me ...?（貸してくれる？）で、動詞が逆になります。",
    "searchKeywords": "borrow 借りる 借りる 行動"
  },
  {
    "id": "v_learn",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "学習",
    "english": "learn",
    "japanese": "学ぶ／覚える",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "学ぶ",
        "category": "学習"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "learn",
        "example": "I want to learn Spanish.",
        "exampleJa": "スペイン語を学びたいです。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "learns",
        "example": "She learns fast.",
        "exampleJa": "彼女は覚えが早いです。"
      },
      {
        "label": "過去形",
        "formName": "learned",
        "example": "I learned a lot today.",
        "exampleJa": "今日はたくさん学びました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "learned",
        "example": "I have learned a few new words.",
        "exampleJa": "新しい単語をいくつか覚えました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "learning",
        "example": "I'm learning to cook.",
        "exampleJa": "料理を習っているところです。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "learn は「身につける」、study は「勉強する」という行為、practice は「練習して慣らす」ことです。アメリカ英語の過去形は learned です。",
    "searchKeywords": "learn 学ぶ／覚える 学ぶ 学習"
  },
  {
    "id": "v_study",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "学習",
    "english": "study",
    "japanese": "勉強する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "勉強する",
        "category": "学習"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "study",
        "example": "I study English every day.",
        "exampleJa": "毎日英語を勉強しています。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "studies",
        "example": "She studies at night.",
        "exampleJa": "彼女は夜に勉強します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "studied",
        "example": "I studied for two hours.",
        "exampleJa": "2時間勉強しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "studied",
        "example": "I have studied this before.",
        "exampleJa": "前にこれを勉強したことがあります。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "studying",
        "example": "I'm studying for a test.",
        "exampleJa": "テストの勉強をしています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (y→ied)",
    "beginnerTip": "study は「勉強する」という行為そのものです。learn は「身につく」という結果に重点があります。",
    "searchKeywords": "study 勉強する 勉強する 学習"
  },
  {
    "id": "v_practice",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "学習",
    "english": "practice",
    "japanese": "練習する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "練習する",
        "category": "学習"
      },
      {
        "pos": "名詞",
        "meaning": "練習",
        "category": "学習",
        "example": "Practice makes perfect.",
        "exampleJa": "習うより慣れよ。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "practice",
        "example": "I practice every morning.",
        "exampleJa": "毎朝練習しています。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "practices",
        "example": "She practices the piano.",
        "exampleJa": "彼女はピアノを練習します。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "practiced",
        "example": "We practiced for hours.",
        "exampleJa": "私たちは何時間も練習しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "practiced",
        "example": "I have practiced this a lot.",
        "exampleJa": "これをたくさん練習しました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "practicing",
        "example": "I'm practicing my English.",
        "exampleJa": "英語を練習しています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-d)",
    "beginnerTip": "アメリカ英語では、名詞も動詞も practice と書きます。練習して慣らすときに使い、learn（身につける）、study（勉強する）とは少し違います。 「練習」は通常不可算。some practice（練習）。",
    "searchKeywords": "practice 練習する 練習する 練習 学習"
  },
  {
    "id": "v_check",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "check",
    "japanese": "確認する／調べる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "確認する",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "check",
        "example": "Let me check my schedule.",
        "exampleJa": "予定を確認させて。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "checks",
        "example": "He checks his phone often.",
        "exampleJa": "彼はよくスマホを見ます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "checked",
        "example": "I checked the time.",
        "exampleJa": "時間を確認しました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "checked",
        "example": "Have you checked your email?",
        "exampleJa": "メールを確認しましたか？",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "checking",
        "example": "I'm checking the weather.",
        "exampleJa": "天気を調べています。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "check は「合っているか確かめる」、look for は「探す」、find out は「調べて分かる」です。Let me check. は、電話で「確認するね」と言うときの定番です。",
    "searchKeywords": "check 確認する／調べる 確認する 行動"
  },
  {
    "id": "v_wish",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "希望",
    "english": "wish",
    "japanese": "願う／〜だったらいいのに",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "願う",
        "category": "希望"
      },
      {
        "pos": "動詞",
        "meaning": "〜だったらいいのに（I wish + 過去形）",
        "category": "希望",
        "example": "I wish I had more time.",
        "exampleJa": "もっと時間があったらいいのに。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "wish",
        "example": "I wish you luck.",
        "exampleJa": "幸運を祈っています。"
      },
      {
        "label": "三人称単数現在",
        "formName": "wishes",
        "example": "She wishes him well.",
        "exampleJa": "彼女は彼の幸せを願っています。"
      },
      {
        "label": "過去形",
        "formName": "wished",
        "example": "I wished for rain.",
        "exampleJa": "雨が降るよう願いました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "wished",
        "example": "We have wished for this for years.",
        "exampleJa": "何年もこれを願ってきました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "wishing",
        "example": "I'm wishing you the best.",
        "exampleJa": "あなたの幸せを祈っています。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "hope は「そうなるかもしれないこと」、wish は「実際にはそうではないこと」への願いです（I hope you're okay. / I wish I were there.）。",
    "searchKeywords": "wish 願う／〜だったらいいのに 願う 〜だったらいいのに（I wish + 過去形） 希望"
  },
  {
    "id": "v_play",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "play",
    "japanese": "遊ぶ／（スポーツ・ゲームを）する／演奏する",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "遊ぶ／（スポーツ・ゲームを）する",
        "category": "行動"
      },
      {
        "pos": "動詞",
        "meaning": "演奏する",
        "category": "音楽",
        "example": "I play the piano.",
        "exampleJa": "ピアノを弾きます。"
      },
      {
        "pos": "動詞",
        "meaning": "（音楽・動画を）再生する",
        "category": "機器",
        "example": "Play this song.",
        "exampleJa": "この曲をかけて。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "play",
        "example": "Do you want to play a game?",
        "exampleJa": "ゲームをしませんか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "plays",
        "example": "She plays tennis on Sundays.",
        "exampleJa": "彼女は日曜日にテニスをします。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "played",
        "example": "We played outside all day.",
        "exampleJa": "私たちは一日中外で遊びました。"
      },
      {
        "label": "過去分詞",
        "formName": "played",
        "example": "I have played this game before.",
        "exampleJa": "このゲームは前にやったことがあります。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "playing",
        "example": "The kids are playing outside.",
        "exampleJa": "子どもたちは外で遊んでいます。"
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "スポーツやゲームにはつけず（play tennis）、楽器には the をつけます（play the piano）。",
    "searchKeywords": "play 遊ぶ／（スポーツ・ゲームを）する／演奏する 遊ぶ／（スポーツ・ゲームを）する 演奏する （音楽・動画を）再生する 行動"
  },
  {
    "id": "v_write",
    "type": "word",
    "partOfSpeech": [
      "動詞"
    ],
    "category": "行動",
    "english": "write",
    "japanese": "書く",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "書く",
        "category": "行動"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "write",
        "example": "Please write your name here.",
        "exampleJa": "ここに名前を書いてください。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "writes",
        "example": "He writes every day.",
        "exampleJa": "彼は毎日書きます。"
      },
      {
        "label": "過去形",
        "formName": "wrote",
        "example": "I wrote her a letter.",
        "exampleJa": "彼女に手紙を書きました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "written",
        "example": "I have written the report.",
        "exampleJa": "報告書を書き終えました。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "writing",
        "example": "I'm writing an email.",
        "exampleJa": "メールを書いているところです。",
        "needsHint": true
      }
    ],
    "changeType": "不規則 A-B-C",
    "beginnerTip": "write → wrote → written と変化します。right（正しい）と発音が同じなので、聞いて覚えるときに注意します。",
    "searchKeywords": "write 書く 書く 行動"
  },
  {
    "id": "v_visit",
    "type": "word",
    "partOfSpeech": [
      "動詞",
      "名詞"
    ],
    "category": "移動",
    "english": "visit",
    "japanese": "訪問する／訪れる",
    "senses": [
      {
        "pos": "動詞",
        "meaning": "訪れる／訪問する",
        "category": "移動"
      },
      {
        "pos": "名詞",
        "meaning": "訪問",
        "category": "移動",
        "example": "Thank you for your visit.",
        "exampleJa": "お越しいただきありがとうございます。"
      }
    ],
    "forms": [
      {
        "label": "原形",
        "formName": "visit",
        "example": "I want to visit you soon.",
        "exampleJa": "近いうちにあなたに会いに行きたいです。",
        "needsHint": true
      },
      {
        "label": "三人称単数現在",
        "formName": "visits",
        "example": "She visits her parents every month.",
        "exampleJa": "彼女は毎月両親を訪ねます。",
        "needsHint": true
      },
      {
        "label": "過去形",
        "formName": "visited",
        "example": "We visited a museum.",
        "exampleJa": "私たちは美術館を訪れました。",
        "needsHint": true
      },
      {
        "label": "過去分詞",
        "formName": "visited",
        "example": "I have never visited New York.",
        "exampleJa": "ニューヨークを訪れたことがありません。",
        "needsHint": true
      },
      {
        "label": "ing形",
        "formName": "visiting",
        "example": "I'm visiting my friend tomorrow.",
        "exampleJa": "明日友達を訪ねます。",
        "needsHint": true
      }
    ],
    "changeType": "規則変化 (-ed)",
    "beginnerTip": "visit のあとには、前置詞なしで場所や人が来ます（× visit to）。come over（遊びに来る）との違いは、visit は訪ねる側から見た言い方です。 名詞として使う場合、数えられる単数形なら a / an を付けます。動詞・形容詞などの用法では不要です。",
    "searchKeywords": "visit 訪問する／訪れる 訪れる／訪問する 訪問 移動"
  },
  {
    "id": "pron_this",
    "type": "word",
    "partOfSpeech": [
      "代名詞"
    ],
    "category": "指示",
    "english": "this / that",
    "japanese": "これ／あれ",
    "senses": [
      {
        "pos": "代名詞",
        "meaning": "これ／あれ（this は近く、that は離れたもの）",
        "category": "指示"
      },
      {
        "pos": "代名詞",
        "meaning": "相づちの that（それは〜だ）",
        "category": "会話",
        "example": "That sounds great.",
        "exampleJa": "それはいいね。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "this / that",
        "example": "This is my phone, and that is yours.",
        "exampleJa": "これは私のスマホで、あれはあなたのです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "this は近いもの、that は少し離れたものを指します。相手の言ったことを受けるときは、That's great.（それはいいね）のように that を使います。",
    "searchKeywords": "this / that これ／あれ これ／あれ（this は近く、that は離れたもの） 相づちの that（それは〜だ） 指示"
  },
  {
    "id": "pron_these",
    "type": "word",
    "partOfSpeech": [
      "代名詞"
    ],
    "category": "指示",
    "english": "these / those",
    "japanese": "これら／あれら",
    "senses": [
      {
        "pos": "代名詞",
        "meaning": "これら／あれら（these は近く、those は離れたもの）",
        "category": "指示"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "these / those",
        "example": "These shoes are mine, and those are yours.",
        "exampleJa": "この靴は私ので、あの靴はあなたのです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "this / that の複数形です。these は近いもの、those は離れたものを指します。",
    "searchKeywords": "these / those これら／あれら これら／あれら（these は近く、those は離れたもの） 指示"
  },
  {
    "id": "pron_something",
    "type": "word",
    "partOfSpeech": [
      "代名詞"
    ],
    "category": "数量",
    "english": "something / anything / nothing",
    "japanese": "何か／何も",
    "senses": [
      {
        "pos": "代名詞",
        "meaning": "何か（something）",
        "category": "数量",
        "example": "I need something to drink.",
        "exampleJa": "何か飲み物が必要です。"
      },
      {
        "pos": "代名詞",
        "meaning": "何か（anything・疑問文と否定文）",
        "category": "数量",
        "example": "Do you need anything?",
        "exampleJa": "何か必要ですか？"
      },
      {
        "pos": "代名詞",
        "meaning": "何も〜ない（nothing）",
        "category": "数量",
        "example": "Nothing happened.",
        "exampleJa": "何も起こりませんでした。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "something / anything / nothing",
        "example": "I want to tell you something.",
        "exampleJa": "あなたに伝えたいことがあります。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "ふつうの文は something、疑問文や否定文は anything、「何もない」は nothing です。Would you like something to drink? のように、すすめるときは疑問文でも something を使います。",
    "searchKeywords": "something / anything / nothing 何か／何も 何か（something） 何か（anything・疑問文と否定文） 何も〜ない（nothing） 数量"
  },
  {
    "id": "pron_someone",
    "type": "word",
    "partOfSpeech": [
      "代名詞"
    ],
    "category": "数量",
    "english": "someone / anyone / no one",
    "japanese": "誰か／誰も〜ない",
    "senses": [
      {
        "pos": "代名詞",
        "meaning": "誰か（someone）",
        "category": "数量",
        "example": "Someone is at the door.",
        "exampleJa": "誰かが玄関にいます。"
      },
      {
        "pos": "代名詞",
        "meaning": "誰か（anyone・疑問文と否定文）",
        "category": "数量",
        "example": "Is anyone home?",
        "exampleJa": "誰か家にいますか？"
      },
      {
        "pos": "代名詞",
        "meaning": "誰も〜ない（no one）",
        "category": "数量",
        "example": "No one answered the phone.",
        "exampleJa": "誰も電話に出ませんでした。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "someone / anyone / no one",
        "example": "I need someone to help me.",
        "exampleJa": "手伝ってくれる人が必要です。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "someone と somebody、anyone と anybody は同じ意味です。会話では -body の形もよく使います。",
    "searchKeywords": "someone / anyone / no one 誰か／誰も〜ない 誰か（someone） 誰か（anyone・疑問文と否定文） 誰も〜ない（no one） 数量"
  },
  {
    "id": "det_many",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "many / much",
    "japanese": "たくさんの",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "たくさんの（数えられるもの：many）",
        "category": "数量"
      },
      {
        "pos": "限定詞",
        "meaning": "たくさんの（数えられないもの：much）",
        "category": "数量",
        "example": "I don't eat much meat.",
        "exampleJa": "あまり肉は食べません。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "many / much",
        "example": "I don't have many friends here.",
        "exampleJa": "ここには友達があまりいません。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "数えられるもの（friends, books）は many、数えられないもの（time, water）は much です。ふつうの文では a lot of のほうが自然です（I have a lot of time.）。",
    "searchKeywords": "many / much たくさんの たくさんの（数えられるもの：many） たくさんの（数えられないもの：much） 数量"
  },
  {
    "id": "det_some",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "some / any",
    "japanese": "いくつかの／少しの／少しも",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "いくつかの／少しの（some）",
        "category": "数量",
        "example": "I have some questions.",
        "exampleJa": "いくつか質問があります。"
      },
      {
        "pos": "限定詞",
        "meaning": "少しも〜ない／何か（any）",
        "category": "数量",
        "example": "I don't have any plans.",
        "exampleJa": "予定は何もありません。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "some / any",
        "example": "Do you have any questions?",
        "exampleJa": "何か質問はありますか？"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "ふつうの文は some、疑問文や否定文は any が基本です。Would you like some tea? のように、すすめるときは some を使います。",
    "searchKeywords": "some / any いくつかの／少しの／少しも いくつかの／少しの（some） 少しも〜ない／何か（any） 数量"
  },
  {
    "id": "det_every",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "every / each",
    "japanese": "すべての／毎〜／それぞれ",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "すべての／毎〜（every）",
        "category": "数量",
        "example": "I call my mom every day.",
        "exampleJa": "毎日母に電話します。"
      },
      {
        "pos": "限定詞",
        "meaning": "それぞれの（each）",
        "category": "数量",
        "example": "Each student has a book.",
        "exampleJa": "生徒はそれぞれ本を1冊持っています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "every / each",
        "example": "I check my phone every morning.",
        "exampleJa": "毎朝スマホを確認します。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "every は全体をひとまとめにして、each は1つ1つを見るイメージです。どちらも、あとには単数の名詞が来ます。",
    "searchKeywords": "every / each すべての／毎〜／それぞれ すべての／毎〜（every） それぞれの（each） 数量"
  },
  {
    "id": "det_both",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "both / all",
    "japanese": "両方／すべて",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "両方（both）",
        "category": "数量",
        "example": "Both of us were late.",
        "exampleJa": "私たち2人とも遅れました。"
      },
      {
        "pos": "限定詞",
        "meaning": "すべて（all）",
        "category": "数量",
        "example": "All of us were ready.",
        "exampleJa": "私たちはみんな準備できていました。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "both / all",
        "example": "I like both of them.",
        "exampleJa": "どちらも好きです。"
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "both は2つ（2人）、all は3つ（3人）以上に使います。",
    "searchKeywords": "both / all 両方／すべて 両方（both） すべて（all） 数量"
  },
  {
    "id": "det_few",
    "type": "word",
    "partOfSpeech": [
      "限定詞"
    ],
    "category": "数量",
    "english": "a few",
    "japanese": "少しの（数個の）／いくつかの",
    "senses": [
      {
        "pos": "限定詞",
        "meaning": "少しの（数個の）／いくつかの",
        "category": "数量"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "a few",
        "example": "I have a few friends here.",
        "exampleJa": "ここに友達が数人います。",
        "needsHint": true
      }
    ],
    "changeType": "変化なし",
    "beginnerTip": "a few は数えられるもの、a little は数えられないものに使います。a をとって few だけだと、「ほとんどない」という否定的な意味になります。",
    "searchKeywords": "a few 少しの（数個の）／いくつかの 少しの（数個の）／いくつかの 数量"
  },
  {
    "id": "exp_turn_on_off",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常動作",
    "english": "turn on / turn off",
    "japanese": "つける／消す",
    "senses": [
      {
        "pos": "表現",
        "meaning": "（電気・機器を）つける",
        "category": "日常動作"
      },
      {
        "pos": "表現",
        "meaning": "（電気・機器を）消す",
        "category": "日常動作",
        "example": "Turn off the TV.",
        "exampleJa": "テレビを消して。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "turn on / turn off",
        "example": "Turn on the light, please.",
        "exampleJa": "電気をつけてください。"
      }
    ],
    "example": "Turn on the light, please.",
    "exampleJa": "電気をつけてください。",
    "beginnerTip": "turn on は動かす・つける、turn off は止める・消すです。活用は turn のカードと同じです（turned on, turning off）。",
    "searchKeywords": "turn on / turn off つける／消す （電気・機器を）つける （電気・機器を）消す 日常動作"
  },
  {
    "id": "exp_wake_up",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常動作",
    "english": "wake up",
    "japanese": "目を覚ます／起こす",
    "senses": [
      {
        "pos": "表現",
        "meaning": "目を覚ます／起きる",
        "category": "日常動作"
      },
      {
        "pos": "表現",
        "meaning": "起こす",
        "category": "日常動作",
        "example": "Please wake me up at six.",
        "exampleJa": "6時に起こしてください。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "wake up",
        "example": "I wake up at seven.",
        "exampleJa": "7時に起きます。"
      },
      {
        "label": "三人称単数現在",
        "formName": "wakes up",
        "example": "He wakes up early.",
        "exampleJa": "彼は早起きです。"
      },
      {
        "label": "過去形",
        "formName": "woke up",
        "example": "I woke up late today.",
        "exampleJa": "今日は遅く起きました。"
      },
      {
        "label": "過去分詞",
        "formName": "woken up",
        "example": "I have woken up early all week.",
        "exampleJa": "今週ずっと早く起きています。"
      },
      {
        "label": "ing形",
        "formName": "waking up",
        "example": "I'm waking up the kids.",
        "exampleJa": "子どもたちを起こしているところです。"
      }
    ],
    "example": "I wake up at seven.",
    "exampleJa": "7時に起きます。",
    "beginnerTip": "wake up は自分が起きること、wake + 人 + up は人を起こすことです。get up（布団やベッドから出る）とは少し違います。wake の変化は wake → woke → woken です。",
    "searchKeywords": "wake up 目を覚ます／起こす 目を覚ます／起きる 起こす 日常動作"
  },
  {
    "id": "exp_slow_down",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "電話",
    "english": "slow down",
    "japanese": "速度を落とす／ゆっくりにする",
    "senses": [
      {
        "pos": "表現",
        "meaning": "速度を落とす",
        "category": "動作"
      },
      {
        "pos": "表現",
        "meaning": "ペースを落とす／落ち着く",
        "category": "会話",
        "example": "You need to slow down and rest.",
        "exampleJa": "ペースを落として休まないと。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "slow down",
        "example": "Can you slow down a little?",
        "exampleJa": "もう少しゆっくり話してもらえますか？"
      },
      {
        "label": "三人称単数現在",
        "formName": "slows down",
        "example": "The train slows down here.",
        "exampleJa": "電車はここで速度を落とします。"
      },
      {
        "label": "過去形",
        "formName": "slowed down",
        "example": "I slowed down at the corner.",
        "exampleJa": "角で速度を落としました。"
      },
      {
        "label": "過去分詞",
        "formName": "slowed down",
        "example": "Things have slowed down lately.",
        "exampleJa": "最近は物事のペースが落ちています。"
      },
      {
        "label": "ing形",
        "formName": "slowing down",
        "example": "The car is slowing down.",
        "exampleJa": "車が速度を落としています。"
      }
    ],
    "example": "Can you slow down a little?",
    "exampleJa": "もう少しゆっくり話してもらえますか？",
    "beginnerTip": "電話で話が速いときは Can you slow down? と言えます。speak more slowly とほぼ同じ意味です。",
    "searchKeywords": "slow down 速度を落とす／ゆっくりにする 速度を落とす ペースを落とす／落ち着く 電話"
  },
  {
    "id": "exp_come_over",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常動作",
    "english": "come over",
    "japanese": "遊びに来る／立ち寄る",
    "senses": [
      {
        "pos": "表現",
        "meaning": "遊びに来る／家に来る",
        "category": "人間関係"
      },
      {
        "pos": "表現",
        "meaning": "こちらへ来る",
        "category": "動作",
        "example": "Come over here.",
        "exampleJa": "こっちに来て。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "come over",
        "example": "Do you want to come over tonight?",
        "exampleJa": "今夜うちに来ない？"
      }
    ],
    "example": "Do you want to come over tonight?",
    "exampleJa": "今夜うちに来ない？",
    "beginnerTip": "come over は、相手の家などに遊びに行くときの定番です。hang out（一緒に過ごす）とセットでよく使います。活用は come のカードと同じです（came over）。",
    "searchKeywords": "come over 遊びに来る／立ち寄る 遊びに来る／家に来る こちらへ来る 日常動作"
  },
  {
    "id": "exp_go_out",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常動作",
    "english": "go out",
    "japanese": "外出する／付き合う",
    "senses": [
      {
        "pos": "表現",
        "meaning": "外出する／出かける",
        "category": "日常動作"
      },
      {
        "pos": "表現",
        "meaning": "付き合う（go out with）",
        "category": "人間関係",
        "example": "They have been going out for two years.",
        "exampleJa": "彼らは2年間付き合っています。"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "go out",
        "example": "Do you want to go out tonight?",
        "exampleJa": "今夜出かけない？"
      }
    ],
    "example": "Do you want to go out tonight?",
    "exampleJa": "今夜出かけない？",
    "beginnerTip": "活用は go のカードと同じです（went out, going out）。「付き合う」の意味では、go out with + 人 の形です。",
    "searchKeywords": "go out 外出する／付き合う 外出する／出かける 付き合う（go out with） 日常動作"
  },
  {
    "id": "exp_write_down",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "日常動作",
    "english": "write down",
    "japanese": "書き留める",
    "senses": [
      {
        "pos": "表現",
        "meaning": "書き留める",
        "category": "日常動作"
      }
    ],
    "forms": [
      {
        "label": "基本形",
        "formName": "write down",
        "example": "Let me write that down.",
        "exampleJa": "それを書き留めさせて。"
      }
    ],
    "example": "Let me write that down.",
    "exampleJa": "それを書き留めさせて。",
    "beginnerTip": "電話で番号や住所を聞くときに便利です。活用は write のカードと同じです（wrote down, written down）。",
    "searchKeywords": "write down 書き留める 書き留める 日常動作"
  },
  {
    "id": "travel_exp_001",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the check-in counter?",
    "japanese": "チェックインカウンターはどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "チェックインカウンターはどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the check-in counter?",
    "exampleJa": "チェックインカウンターはどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the check-in counter? チェックインカウンターはどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_002",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the security checkpoint?",
    "japanese": "保安検査場はどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "保安検査場はどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the security checkpoint?",
    "exampleJa": "保安検査場はどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the security checkpoint? 保安検査場はどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_003",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the departure gate?",
    "japanese": "搭乗口はどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "搭乗口はどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the departure gate?",
    "exampleJa": "搭乗口はどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the departure gate? 搭乗口はどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_004",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Has boarding started yet?",
    "japanese": "もう搭乗は始まっていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もう搭乗は始まっていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Has boarding started yet?",
    "exampleJa": "もう搭乗は始まっていますか？",
    "beginnerTip": "",
    "searchKeywords": "Has boarding started yet? もう搭乗は始まっていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_005",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "What time does boarding start?",
    "japanese": "搭乗は何時からですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "搭乗は何時からですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "What time does boarding start?",
    "exampleJa": "搭乗は何時からですか？",
    "beginnerTip": "",
    "searchKeywords": "What time does boarding start? 搭乗は何時からですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_006",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this the right line?",
    "japanese": "この列で合っていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "この列で合っていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this the right line?",
    "exampleJa": "この列で合っていますか？",
    "beginnerTip": "",
    "searchKeywords": "Is this the right line? この列で合っていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_007",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do I need to take this out?",
    "japanese": "これを取り出す必要がありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これを取り出す必要がありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do I need to take this out?",
    "exampleJa": "これを取り出す必要がありますか？",
    "beginnerTip": "",
    "searchKeywords": "Do I need to take this out? これを取り出す必要がありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_008",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do I need to remove my shoes?",
    "japanese": "靴を脱ぐ必要がありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "靴を脱ぐ必要がありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do I need to remove my shoes?",
    "exampleJa": "靴を脱ぐ必要がありますか？",
    "beginnerTip": "",
    "searchKeywords": "Do I need to remove my shoes? 靴を脱ぐ必要がありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_009",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this allowed in my carry-on?",
    "japanese": "これは機内持ち込みできますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これは機内持ち込みできますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this allowed in my carry-on?",
    "exampleJa": "これは機内持ち込みできますか？",
    "beginnerTip": "",
    "searchKeywords": "Is this allowed in my carry-on? これは機内持ち込みできますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_010",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I'm only bringing a personal item.",
    "japanese": "身の回り品だけ持っていきます",
    "senses": [
      {
        "pos": "表現",
        "meaning": "身の回り品だけ持っていきます",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I'm only bringing a personal item.",
    "exampleJa": "身の回り品だけ持っていきます",
    "beginnerTip": "",
    "searchKeywords": "I'm only bringing a personal item. 身の回り品だけ持っていきます 旅行 香港"
  },
  {
    "id": "travel_exp_011",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I'm here for sightseeing.",
    "japanese": "観光で来ました",
    "senses": [
      {
        "pos": "表現",
        "meaning": "観光で来ました",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I'm here for sightseeing.",
    "exampleJa": "観光で来ました",
    "beginnerTip": "",
    "searchKeywords": "I'm here for sightseeing. 観光で来ました 旅行 香港"
  },
  {
    "id": "travel_exp_012",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I'm leaving tonight.",
    "japanese": "今夜出国します",
    "senses": [
      {
        "pos": "表現",
        "meaning": "今夜出国します",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I'm leaving tonight.",
    "exampleJa": "今夜出国します",
    "beginnerTip": "",
    "searchKeywords": "I'm leaving tonight. 今夜出国します 旅行 香港"
  },
  {
    "id": "travel_exp_013",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I'm not staying overnight.",
    "japanese": "宿泊しません",
    "senses": [
      {
        "pos": "表現",
        "meaning": "宿泊しません",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I'm not staying overnight.",
    "exampleJa": "宿泊しません",
    "beginnerTip": "",
    "searchKeywords": "I'm not staying overnight. 宿泊しません 旅行 香港"
  },
  {
    "id": "travel_exp_014",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I have a return flight tonight.",
    "japanese": "今夜の帰国便を予約しています",
    "senses": [
      {
        "pos": "表現",
        "meaning": "今夜の帰国便を予約しています",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I have a return flight tonight.",
    "exampleJa": "今夜の帰国便を予約しています",
    "beginnerTip": "",
    "searchKeywords": "I have a return flight tonight. 今夜の帰国便を予約しています 旅行 香港"
  },
  {
    "id": "travel_exp_015",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the immigration checkpoint?",
    "japanese": "入国審査場はどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "入国審査場はどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the immigration checkpoint?",
    "exampleJa": "入国審査場はどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the immigration checkpoint? 入国審査場はどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_016",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you let me through?",
    "japanese": "通していただけますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "通していただけますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you let me through?",
    "exampleJa": "通していただけますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you let me through? 通していただけますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_017",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you move your bag?",
    "japanese": "バッグを動かしてもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "バッグを動かしてもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you move your bag?",
    "exampleJa": "バッグを動かしてもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you move your bag? バッグを動かしてもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_018",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this seat taken?",
    "japanese": "この席は空いていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "この席は空いていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this seat taken?",
    "exampleJa": "この席は空いていますか？",
    "beginnerTip": "",
    "searchKeywords": "Is this seat taken? この席は空いていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_019",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could I have some water?",
    "japanese": "お水をいただけますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "お水をいただけますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could I have some water?",
    "exampleJa": "お水をいただけますか？",
    "beginnerTip": "",
    "searchKeywords": "Could I have some water? お水をいただけますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_020",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you turn off the light?",
    "japanese": "明かりを消してもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "明かりを消してもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you turn off the light?",
    "exampleJa": "明かりを消してもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you turn off the light? 明かりを消してもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_021",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you lower your voice?",
    "japanese": "声を小さくしてもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "声を小さくしてもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you lower your voice?",
    "exampleJa": "声を小さくしてもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you lower your voice? 声を小さくしてもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_022",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where can I charge my phone?",
    "japanese": "スマホはどこで充電できますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "スマホはどこで充電できますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where can I charge my phone?",
    "exampleJa": "スマホはどこで充電できますか？",
    "beginnerTip": "",
    "searchKeywords": "Where can I charge my phone? スマホはどこで充電できますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_023",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is there a water refill station nearby?",
    "japanese": "近くに給水所はありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "近くに給水所はありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a water refill station nearby?",
    "exampleJa": "近くに給水所はありますか？",
    "beginnerTip": "",
    "searchKeywords": "Is there a water refill station nearby? 近くに給水所はありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_024",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is anything open this early?",
    "japanese": "こんな早朝に開いているところはありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "こんな早朝に開いているところはありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is anything open this early?",
    "exampleJa": "こんな早朝に開いているところはありますか？",
    "beginnerTip": "",
    "searchKeywords": "Is anything open this early? こんな早朝に開いているところはありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_025",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is the airport open all night?",
    "japanese": "空港は24時間開いていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "空港は24時間開いていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is the airport open all night?",
    "exampleJa": "空港は24時間開いていますか？",
    "beginnerTip": "",
    "searchKeywords": "Is the airport open all night? 空港は24時間開いていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_026",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "How do I get to + 場所?",
    "japanese": "〜にはどうやって行きますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜にはどうやって行きますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "How do I get to Hong Kong Disneyland?",
    "exampleJa": "〜にはどうやって行きますか？",
    "beginnerTip": "",
    "searchKeywords": "How do I get to + 場所? 〜にはどうやって行きますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_027",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Does this bus go to + 場所?",
    "japanese": "このバスは〜に行きますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "このバスは〜に行きますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Does this bus go to Hong Kong Disneyland?",
    "exampleJa": "このバスは〜に行きますか？",
    "beginnerTip": "",
    "searchKeywords": "Does this bus go to + 場所? このバスは〜に行きますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_028",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Does this train stop at + 場所?",
    "japanese": "この電車は〜に停まりますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "この電車は〜に停まりますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Does this train stop at Hong Kong Disneyland?",
    "exampleJa": "この電車は〜に停まりますか？",
    "beginnerTip": "",
    "searchKeywords": "Does this train stop at + 場所? この電車は〜に停まりますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_029",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where do I catch the bus?",
    "japanese": "バスはどこから乗れますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "バスはどこから乗れますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where do I catch the bus?",
    "exampleJa": "バスはどこから乗れますか？",
    "beginnerTip": "",
    "searchKeywords": "Where do I catch the bus? バスはどこから乗れますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_030",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Which bus should I take?",
    "japanese": "どのバスに乗ればいいですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どのバスに乗ればいいですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Which bus should I take?",
    "exampleJa": "どのバスに乗ればいいですか？",
    "beginnerTip": "",
    "searchKeywords": "Which bus should I take? どのバスに乗ればいいですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_031",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Which platform should I go to?",
    "japanese": "どのホームに行けばいいですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どのホームに行けばいいですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Which platform should I go to?",
    "exampleJa": "どのホームに行けばいいですか？",
    "beginnerTip": "",
    "searchKeywords": "Which platform should I go to? どのホームに行けばいいですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_032",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do I need to transfer?",
    "japanese": "乗り換えが必要ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "乗り換えが必要ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do I need to transfer?",
    "exampleJa": "乗り換えが必要ですか？",
    "beginnerTip": "",
    "searchKeywords": "Do I need to transfer? 乗り換えが必要ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_033",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where do I transfer?",
    "japanese": "どこで乗り換えますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どこで乗り換えますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where do I transfer?",
    "exampleJa": "どこで乗り換えますか？",
    "beginnerTip": "",
    "searchKeywords": "Where do I transfer? どこで乗り換えますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_034",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "How many stops is it?",
    "japanese": "何駅（何停留所）先ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "何駅（何停留所）先ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "How many stops is it?",
    "exampleJa": "何駅（何停留所）先ですか？",
    "beginnerTip": "",
    "searchKeywords": "How many stops is it? 何駅（何停留所）先ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_035",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "How long does it take to get there?",
    "japanese": "そこまでどのくらいかかりますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "そこまでどのくらいかかりますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "How long does it take to get there?",
    "exampleJa": "そこまでどのくらいかかりますか？",
    "beginnerTip": "",
    "searchKeywords": "How long does it take to get there? そこまでどのくらいかかりますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_036",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "How much is the fare?",
    "japanese": "運賃はいくらですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "運賃はいくらですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "How much is the fare?",
    "exampleJa": "運賃はいくらですか？",
    "beginnerTip": "",
    "searchKeywords": "How much is the fare? 運賃はいくらですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_037",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can I pay with a credit card?",
    "japanese": "クレジットカードで払えますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "クレジットカードで払えますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can I pay with a credit card?",
    "exampleJa": "クレジットカードで払えますか？",
    "beginnerTip": "",
    "searchKeywords": "Can I pay with a credit card? クレジットカードで払えますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_038",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can I use a contactless card?",
    "japanese": "タッチ決済のカードは使えますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "タッチ決済のカードは使えますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can I use a contactless card?",
    "exampleJa": "タッチ決済のカードは使えますか？",
    "beginnerTip": "",
    "searchKeywords": "Can I use a contactless card? タッチ決済のカードは使えますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_039",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do I need to tap in and out?",
    "japanese": "乗るときと降りるときにタッチが必要ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "乗るときと降りるときにタッチが必要ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do I need to tap in and out?",
    "exampleJa": "乗るときと降りるときにタッチが必要ですか？",
    "beginnerTip": "",
    "searchKeywords": "Do I need to tap in and out? 乗るときと降りるときにタッチが必要ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_040",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this the last train?",
    "japanese": "これが終電ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これが終電ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this the last train?",
    "exampleJa": "これが終電ですか？",
    "beginnerTip": "",
    "searchKeywords": "Is this the last train? これが終電ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_041",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "What time is the last bus?",
    "japanese": "最終バスは何時ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "最終バスは何時ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "What time is the last bus?",
    "exampleJa": "最終バスは何時ですか？",
    "beginnerTip": "",
    "searchKeywords": "What time is the last bus? 最終バスは何時ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_042",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Am I going the right way?",
    "japanese": "こちらの方向で合っていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "こちらの方向で合っていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Am I going the right way?",
    "exampleJa": "こちらの方向で合っていますか？",
    "beginnerTip": "",
    "searchKeywords": "Am I going the right way? こちらの方向で合っていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_043",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you show me on the map?",
    "japanese": "地図で教えてもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "地図で教えてもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you show me on the map?",
    "exampleJa": "地図で教えてもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you show me on the map? 地図で教えてもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_044",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is it within walking distance?",
    "japanese": "歩いて行ける距離ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "歩いて行ける距離ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is it within walking distance?",
    "exampleJa": "歩いて行ける距離ですか？",
    "beginnerTip": "",
    "searchKeywords": "Is it within walking distance? 歩いて行ける距離ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_045",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the entrance?",
    "japanese": "入口はどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "入口はどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the entrance?",
    "exampleJa": "入口はどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the entrance? 入口はどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_046",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the exit?",
    "japanese": "出口はどこですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "出口はどこですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the exit?",
    "exampleJa": "出口はどこですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the exit? 出口はどこですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_047",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this the line for + アトラクション?",
    "japanese": "これは〜の待機列ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これは〜の待機列ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this the line for this ride?",
    "exampleJa": "これは〜の待機列ですか？",
    "beginnerTip": "",
    "searchKeywords": "Is this the line for + アトラクション? これは〜の待機列ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_048",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "How long is the wait?",
    "japanese": "待ち時間はどのくらいですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "待ち時間はどのくらいですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "How long is the wait?",
    "exampleJa": "待ち時間はどのくらいですか？",
    "beginnerTip": "",
    "searchKeywords": "How long is the wait? 待ち時間はどのくらいですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_049",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is the ride open?",
    "japanese": "アトラクションは運営していますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "アトラクションは運営していますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is the ride open?",
    "exampleJa": "アトラクションは運営していますか？",
    "beginnerTip": "",
    "searchKeywords": "Is the ride open? アトラクションは運営していますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_050",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is the ride temporarily closed?",
    "japanese": "アトラクションは一時休止中ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "アトラクションは一時休止中ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is the ride temporarily closed?",
    "exampleJa": "アトラクションは一時休止中ですか？",
    "beginnerTip": "",
    "searchKeywords": "Is the ride temporarily closed? アトラクションは一時休止中ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_051",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "When will it reopen?",
    "japanese": "いつ再開しますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "いつ再開しますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "When will it reopen?",
    "exampleJa": "いつ再開しますか？",
    "beginnerTip": "",
    "searchKeywords": "When will it reopen? いつ再開しますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_052",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "What time does the show start?",
    "japanese": "ショーは何時からですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ショーは何時からですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "What time does the show start?",
    "exampleJa": "ショーは何時からですか？",
    "beginnerTip": "",
    "searchKeywords": "What time does the show start? ショーは何時からですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_053",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is the show canceled today?",
    "japanese": "今日のショーは中止ですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "今日のショーは中止ですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is the show canceled today?",
    "exampleJa": "今日のショーは中止ですか？",
    "beginnerTip": "",
    "searchKeywords": "Is the show canceled today? 今日のショーは中止ですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_054",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where is the best place to watch?",
    "japanese": "どこで見るのが一番いいですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どこで見るのが一番いいですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where is the best place to watch?",
    "exampleJa": "どこで見るのが一番いいですか？",
    "beginnerTip": "",
    "searchKeywords": "Where is the best place to watch? どこで見るのが一番いいですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_055",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can we sit here?",
    "japanese": "ここに座ってもいいですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "ここに座ってもいいですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can we sit here?",
    "exampleJa": "ここに座ってもいいですか？",
    "beginnerTip": "",
    "searchKeywords": "Can we sit here? ここに座ってもいいですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_056",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you take a picture of us?",
    "japanese": "私たちの写真を撮ってもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "私たちの写真を撮ってもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you take a picture of us?",
    "exampleJa": "私たちの写真を撮ってもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you take a picture of us? 私たちの写真を撮ってもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_057",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you take one more?",
    "japanese": "もう1枚撮ってもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もう1枚撮ってもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you take one more?",
    "exampleJa": "もう1枚撮ってもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you take one more? もう1枚撮ってもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_058",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you fit the whole castle in the picture?",
    "japanese": "お城全体が入るように撮ってもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "お城全体が入るように撮ってもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you fit the whole castle in the picture?",
    "exampleJa": "お城全体が入るように撮ってもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you fit the whole castle in the picture? お城全体が入るように撮ってもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_059",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Where can I find + キャラクター／商品?",
    "japanese": "〜はどこで会えますか／見つかりますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜はどこで会えますか／見つかりますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Where can I find this souvenir?",
    "exampleJa": "〜はどこで会えますか／見つかりますか？",
    "beginnerTip": "",
    "searchKeywords": "Where can I find + キャラクター／商品? 〜はどこで会えますか／見つかりますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_060",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can I have it without + 食材?",
    "japanese": "〜抜きにできますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "〜抜きにできますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can I have it without raw onions?",
    "exampleJa": "〜抜きにできますか？",
    "beginnerTip": "例：Can I have it without raw onions?（生の玉ねぎ抜きにできますか？）",
    "searchKeywords": "Can I have it without + 食材? 〜抜きにできますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_061",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is this spicy?",
    "japanese": "これは辛いですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これは辛いですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this spicy?",
    "exampleJa": "これは辛いですか？",
    "beginnerTip": "",
    "searchKeywords": "Is this spicy? これは辛いですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_062",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "What's in this?",
    "japanese": "これには何が入っていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これには何が入っていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "What's in this?",
    "exampleJa": "これには何が入っていますか？",
    "beginnerTip": "",
    "searchKeywords": "What's in this? これには何が入っていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_063",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Which one do you recommend?",
    "japanese": "どちらがおすすめですか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "どちらがおすすめですか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Which one do you recommend?",
    "exampleJa": "どちらがおすすめですか？",
    "beginnerTip": "",
    "searchKeywords": "Which one do you recommend? どちらがおすすめですか？ 旅行 香港"
  },
  {
    "id": "travel_exp_064",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could I have the bill, please?",
    "japanese": "お会計をお願いします",
    "senses": [
      {
        "pos": "表現",
        "meaning": "お会計をお願いします",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could I have the bill, please?",
    "exampleJa": "お会計をお願いします",
    "beginnerTip": "",
    "searchKeywords": "Could I have the bill, please? お会計をお願いします 旅行 香港"
  },
  {
    "id": "travel_exp_065",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do you have this in a different size?",
    "japanese": "これの別サイズはありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これの別サイズはありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do you have this in a different size?",
    "exampleJa": "これの別サイズはありますか？",
    "beginnerTip": "",
    "searchKeywords": "Do you have this in a different size? これの別サイズはありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_066",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Do you have any more in stock?",
    "japanese": "まだ在庫はありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "まだ在庫はありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Do you have any more in stock?",
    "exampleJa": "まだ在庫はありますか？",
    "beginnerTip": "",
    "searchKeywords": "Do you have any more in stock? まだ在庫はありますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_067",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can I pay separately?",
    "japanese": "別々に支払えますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "別々に支払えますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can I pay separately?",
    "exampleJa": "別々に支払えますか？",
    "beginnerTip": "",
    "searchKeywords": "Can I pay separately? 別々に支払えますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_068",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could I get a receipt?",
    "japanese": "レシートをもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "レシートをもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could I get a receipt?",
    "exampleJa": "レシートをもらえますか？",
    "beginnerTip": "",
    "searchKeywords": "Could I get a receipt? レシートをもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_069",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I think I left something behind.",
    "japanese": "忘れ物をしたかもしれません",
    "senses": [
      {
        "pos": "表現",
        "meaning": "忘れ物をしたかもしれません",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I think I left something behind.",
    "exampleJa": "忘れ物をしたかもしれません",
    "beginnerTip": "",
    "searchKeywords": "I think I left something behind. 忘れ物をしたかもしれません 旅行 香港"
  },
  {
    "id": "travel_exp_070",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Has anyone turned in a lost item?",
    "japanese": "落とし物は届いていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "落とし物は届いていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Has anyone turned in a lost item?",
    "exampleJa": "落とし物は届いていますか？",
    "beginnerTip": "",
    "searchKeywords": "Has anyone turned in a lost item? 落とし物は届いていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_071",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Does this have any raw onions in it?",
    "japanese": "これに生の玉ねぎは入っていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "これに生の玉ねぎは入っていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Does this have any raw onions in it?",
    "exampleJa": "これに生の玉ねぎは入っていますか？",
    "beginnerTip": "",
    "searchKeywords": "Does this have any raw onions in it? これに生の玉ねぎは入っていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_072",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Can I have it without them?",
    "japanese": "それらを抜いてもらえますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それらを抜いてもらえますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Can I have it without them?",
    "exampleJa": "それらを抜いてもらえますか？",
    "beginnerTip": "直前の raw onions など複数形の名詞を them で受けます。単数形なら食材名を繰り返すと明確です。",
    "searchKeywords": "Can I have it without them? それらを抜いてもらえますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_073",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Are the onions raw or cooked?",
    "japanese": "玉ねぎは生ですか？ 火が通っていますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "玉ねぎは生ですか？ 火が通っていますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Are the onions raw or cooked?",
    "exampleJa": "玉ねぎは生ですか？ 火が通っていますか？",
    "beginnerTip": "玉ねぎの加熱状態を確認する表現です。青ネギ・長ネギの有無までは確認できません。",
    "searchKeywords": "Are the onions raw or cooked? 玉ねぎは生ですか？ 火が通っていますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_074",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Then that's fine. I'll have it, please.",
    "japanese": "それなら大丈夫です。お願いします。",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それなら大丈夫です。お願いします。",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Then that's fine. I'll have it, please.",
    "exampleJa": "それなら大丈夫です。お願いします。",
    "beginnerTip": "",
    "searchKeywords": "Then that's fine. I'll have it, please. それなら大丈夫です。お願いします。 旅行 香港"
  },
  {
    "id": "travel_exp_075",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Then I'll pass. Thank you.",
    "japanese": "それならやめておきます。ありがとうございます。",
    "senses": [
      {
        "pos": "表現",
        "meaning": "それならやめておきます。ありがとうございます。",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Then I'll pass. Thank you.",
    "exampleJa": "それならやめておきます。ありがとうございます。",
    "beginnerTip": "",
    "searchKeywords": "Then I'll pass. Thank you. それならやめておきます。ありがとうございます。 旅行 香港"
  },
  {
    "id": "travel_exp_076",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "I'll have this one instead, please.",
    "japanese": "じゃあ代わりにこっちをお願いします。",
    "senses": [
      {
        "pos": "表現",
        "meaning": "じゃあ代わりにこっちをお願いします。",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "I'll have this one instead, please.",
    "exampleJa": "じゃあ代わりにこっちをお願いします。",
    "beginnerTip": "",
    "searchKeywords": "I'll have this one instead, please. じゃあ代わりにこっちをお願いします。 旅行 香港"
  },
  {
    "id": "travel_exp_077",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Could you say that again, please?",
    "japanese": "もう一度言っていただけますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "もう一度言っていただけますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Could you say that again, please?",
    "exampleJa": "もう一度言っていただけますか？",
    "beginnerTip": "",
    "searchKeywords": "Could you say that again, please? もう一度言っていただけますか？ 旅行 香港"
  },
  {
    "id": "travel_exp_078",
    "type": "expression",
    "partOfSpeech": [
      "表現"
    ],
    "category": "旅行・香港（日帰り）",
    "english": "Is there a + 場所 + nearby?",
    "japanese": "近くに〜はありますか？",
    "senses": [
      {
        "pos": "表現",
        "meaning": "近くに〜はありますか？",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a restroom nearby?",
    "exampleJa": "近くに〜はありますか？",
    "beginnerTip": "数えられる単数名詞には a / an を使います。例：Is there a restroom nearby? / Is there an ATM nearby?",
    "searchKeywords": "Is there a + 場所 + nearby? 近くに〜はありますか？ 旅行 香港"
  },
  {
    "id": "travel_word_001",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a boarding pass",
    "japanese": "搭乗券",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "搭乗券",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "boarding pass a boarding pass 搭乗券 旅行"
  },
  {
    "id": "travel_word_002",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a gate",
    "japanese": "搭乗口／ゲート",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "搭乗口／ゲート",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "gate a gate 搭乗口／ゲート 旅行"
  },
  {
    "id": "travel_word_003",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a terminal",
    "japanese": "ターミナル",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "ターミナル",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "terminal a terminal ターミナル 旅行"
  },
  {
    "id": "travel_word_004",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a departure",
    "japanese": "出発",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "出発",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "departure a departure 出発 旅行"
  },
  {
    "id": "travel_word_005",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "an arrival",
    "japanese": "到着",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "到着",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "arrival an arrival 到着 旅行"
  },
  {
    "id": "travel_word_006",
    "type": "word",
    "partOfSpeech": [
      "名詞",
      "動詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a delay",
    "japanese": "遅延／遅れる",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "遅延／遅れる",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "名詞では a delay（遅延）、動詞では delay（遅らせる）。",
    "searchKeywords": "delay a delay 遅延／遅れる 旅行"
  },
  {
    "id": "travel_word_007",
    "type": "word",
    "partOfSpeech": [
      "形容詞"
    ],
    "category": "旅行・空港／交通",
    "english": "canceled",
    "japanese": "中止された／欠航になった",
    "senses": [
      {
        "pos": "形容詞",
        "meaning": "中止された／欠航になった",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "形容詞・過去分詞なので a / an は付けません。a canceled flight（欠航した便）のように名詞の前に置けます。",
    "searchKeywords": "canceled canceled 中止された／欠航になった 旅行"
  },
  {
    "id": "travel_word_008",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a carry-on",
    "japanese": "機内持ち込み手荷物",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "機内持ち込み手荷物",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "carry-on a carry-on 機内持ち込み手荷物 旅行"
  },
  {
    "id": "travel_word_009",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a personal item",
    "japanese": "身の回り品",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "身の回り品",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "personal item a personal item 身の回り品 旅行"
  },
  {
    "id": "travel_word_010",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "security",
    "japanese": "保安検査／安全",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "保安検査／安全",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "保安検査・安全は通常不可算名詞です。security check（保安検査）のように具体的な名詞と組み合わせます。",
    "searchKeywords": "security security 保安検査／安全 旅行"
  },
  {
    "id": "travel_word_011",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "immigration",
    "japanese": "入国審査／出入国管理",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "入国審査／出入国管理",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "入国審査・出入国管理は通常不可算名詞です。go through immigration（入国審査を通る）。",
    "searchKeywords": "immigration immigration 入国審査／出入国管理 旅行"
  },
  {
    "id": "travel_word_012",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "customs",
    "japanese": "税関",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "税関",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "税関の意味では customs と複数形の形で使います。go through customs（税関を通る）。a customs とはしません。",
    "searchKeywords": "customs customs 税関 旅行"
  },
  {
    "id": "travel_word_013",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a fare",
    "japanese": "運賃",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "運賃",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "fare a fare 運賃 旅行"
  },
  {
    "id": "travel_word_014",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a platform",
    "japanese": "ホーム／乗り場",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "ホーム／乗り場",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "platform a platform ホーム／乗り場 旅行"
  },
  {
    "id": "travel_word_015",
    "type": "word",
    "partOfSpeech": [
      "名詞",
      "動詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a transfer",
    "japanese": "乗り換える／乗り換え",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "乗り換える／乗り換え",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "名詞では a transfer（乗り換え）、動詞では transfer（乗り換える）。",
    "searchKeywords": "transfer a transfer 乗り換える／乗り換え 旅行"
  },
  {
    "id": "travel_word_016",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a route",
    "japanese": "経路／ルート",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "経路／ルート",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "route a route 経路／ルート 旅行"
  },
  {
    "id": "travel_word_017",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a queue",
    "japanese": "列／待機列",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "列／待機列",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "queue a queue 列／待機列 旅行"
  },
  {
    "id": "travel_word_018",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "an entrance",
    "japanese": "入口",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "入口",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "entrance an entrance 入口 旅行"
  },
  {
    "id": "travel_word_019",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "an exit",
    "japanese": "出口",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "出口",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "exit an exit 出口 旅行"
  },
  {
    "id": "travel_word_020",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a receipt",
    "japanese": "レシート／領収書",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "レシート／領収書",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "",
    "exampleJa": "",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "receipt a receipt レシート／領収書 旅行"
  },
  {
    "id": "travel_word_021",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a green onion / a scallion",
    "japanese": "青ネギ・小ネギ",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "青ネギ・小ネギ",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Does this have green onions in it?",
    "exampleJa": "これには青ネギが入っていますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。 アメリカ英語では green onion と scallion はほぼ同じ意味です。",
    "searchKeywords": "green onion / scallion a green onion / a scallion 青ネギ・小ネギ 旅行"
  },
  {
    "id": "travel_word_022",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a Japanese long onion",
    "japanese": "長ネギ",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "長ネギ",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is this a Japanese long onion?",
    "exampleJa": "これは長ネギですか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "Japanese long onion a Japanese long onion 長ネギ 旅行"
  },
  {
    "id": "travel_word_023",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・空港／交通",
    "english": "a leek",
    "japanese": "西洋ネギ・ポロネギ",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "西洋ネギ・ポロネギ",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there leek in this soup?",
    "exampleJa": "このスープには西洋ネギが入っていますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。 日本の長ネギとは異なる西洋ネギです。",
    "searchKeywords": "leek a leek 西洋ネギ・ポロネギ 旅行"
  },
  {
    "id": "travel_word_024",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a restroom",
    "japanese": "トイレ",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "トイレ",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a restroom nearby?",
    "exampleJa": "近くにトイレはありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "restroom a restroom トイレ 旅行"
  },
  {
    "id": "travel_word_025",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a vending machine",
    "japanese": "自動販売機",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "自動販売機",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a vending machine nearby?",
    "exampleJa": "近くに自動販売機はありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "vending machine a vending machine 自動販売機 旅行"
  },
  {
    "id": "travel_word_026",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a convenience store",
    "japanese": "コンビニ",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "コンビニ",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a convenience store nearby?",
    "exampleJa": "近くにコンビニはありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "convenience store a convenience store コンビニ 旅行"
  },
  {
    "id": "travel_word_027",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a pharmacy",
    "japanese": "薬局",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "薬局",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a pharmacy nearby?",
    "exampleJa": "近くに薬局はありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "pharmacy a pharmacy 薬局 旅行"
  },
  {
    "id": "travel_word_028",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "an ATM",
    "japanese": "ATM",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "ATM",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there an ATM nearby?",
    "exampleJa": "近くにATMはありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "ATM an ATM ATM 旅行"
  },
  {
    "id": "travel_word_029",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a charging station",
    "japanese": "充電スポット",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "充電スポット",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a charging station nearby?",
    "exampleJa": "近くに充電スポットはありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "charging station a charging station 充電スポット 旅行"
  },
  {
    "id": "travel_word_030",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a water refill station",
    "japanese": "給水所",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "給水所",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a water refill station nearby?",
    "exampleJa": "近くに給水所はありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。 飲料水をボトルに補充できる給水所です。",
    "searchKeywords": "water refill station a water refill station 給水所 旅行"
  },
  {
    "id": "travel_word_031",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a bus stop",
    "japanese": "バス停",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "バス停",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a bus stop nearby?",
    "exampleJa": "近くにバス停はありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。",
    "searchKeywords": "bus stop a bus stop バス停 旅行"
  },
  {
    "id": "travel_word_032",
    "type": "word",
    "partOfSpeech": [
      "名詞"
    ],
    "category": "旅行・施設",
    "english": "a station",
    "japanese": "駅",
    "senses": [
      {
        "pos": "名詞",
        "meaning": "駅",
        "category": "旅行"
      }
    ],
    "forms": [],
    "example": "Is there a station nearby?",
    "exampleJa": "近くに駅はありますか？",
    "beginnerTip": "数えられる名詞の単数形なので a / an を付けます。 電車の話題なら station だけで「駅」と通じます。",
    "searchKeywords": "station a station 駅 旅行"
  }
];
