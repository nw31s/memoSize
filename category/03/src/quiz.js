function appendNumber(number) {
    const input = document.getElementById('productNumber');
    if (input.value.toString().length >= 4) {
        ;
    } else {
        input.value += number;
    }
}
  
function clearInput() {
    const input = document.getElementById('productNumber');
    input.value = '';
}

let data = {
      "1116": "パルマ風スパゲッティ〈ランチ〉",
      "1120": "ミートソースボロニア風〈ランチ〉",
      "1121": "ほうれん草とパンチェッタのスパゲッティ〈ランチ〉",
      "1135": "タラコソースシシリー風〈ランチ〉",
      "1140": "ディアボラ風ハンバーグ〈ライス通常サイズ〉",
      "1141": "ディアボラ風ハンバーグ〈ライス大盛〉",
      "1142": "ディアボラ風ハンバーグ〈ライス小盛〉",
      "1145": "ディアボラ風ハンバーグ〈フォッカチオ〉",
      "1160": "タラコとエビのドリア〈ランチ〉",
      "1170": "オニオンソースのハンバーグ / 牛100%オニオンソースのハンバーグ〈ライス通常サイズ〉",
      "1171": "オニオンソースのハンバーグ / 牛100%オニオンソースのハンバーグ〈ライス大盛〉",
      "1172": "オニオンソースのハンバーグ / 牛100%オニオンソースのハンバーグ〈ライス小盛〉",
      "1173": "オニオンソースのハンバーグ / 牛100%オニオンソースのハンバーグ〈ミニフィセル〉",
      "1174": "オニオンソースのハンバーグ / 牛100%オニオンソースのハンバーグ〈プチフォッカ〉",
      "1190": "牛100%デミグラスソースのハンバーグ / 特製デミソースハンバーグ〈ライス通常サイズ〉",
      "1191": "牛100%デミグラスソースのハンバーグ / 特製デミソースハンバーグ〈ライス大盛〉",
      "1192": "牛100%デミグラスソースのハンバーグ / 特製デミソースハンバーグ〈ライス小盛〉",
      "1193": "牛100%デミグラスソースのハンバーグ / 特製デミソースハンバーグ〈ミニフィセル〉",
      "1194": "牛100%デミグラスソースのハンバーグ / 特製デミソースハンバーグ〈プチフォッカ〉",
      "1195": "特製デミソースハンバーグ〈フォッカチオ〉",
      "2203": "マルゲリータピザ",
      "2204": "野菜ときのこのピザ",
      "2206": "たっぷりコーンのピザ",
      "2208": "ソーセージピザ",
      "2301": "タラコソースシシリー風",
      "2303": "ペペロンチーノ",
      "2304": "パルマ風スパゲッティ",
      "2305": "カルボナーラ",
      "2306": "ミートソースボロニア風",
      "2310": "スープ入り塩味ボンゴレ",
      "2316": "半熟卵のミートソースボロニア風",
      "2317": "半熟卵のペペロンチーノ",
      "2320": "小エビのタラコソース",
      "2321": "きのことほうれん草のクリームスパゲッティ",
      "2325": "ペンネアラビアータ（全粒粉）",
      "2328": "イカの墨入りセピアソース",
      "2402": "若鶏のディアボラ風",
      "2403": "イタリアンハンバーグ",
      "2404": "柔らかチキンのチーズ焼き",
      "2406": "ハンバーグステーキ",
      "2407": "ディアボラ風ハンバーグ",
      "2413": "ラムと野菜のグリル",
      "2418": "ミックスグリル",
      "3901": "ティラミスクラシコ （あとで）",
      "3904": "ジェラート＆シナモンプチフォッカ （あとで）",
      "3905": "イタリアンジェラート（あとで）",
      "3906": "イタリアンプリン（あとで）",
      "3907": "チョコレートケーキ（あとで）",
      "3912": "プリンとティラミスクラシコの盛合せ（あとで）",
      "3913": "トリフアイスクリーム（あとで）",
      "3915": "コーヒーゼリー＆イタリアンジェラート（あとで）",
      "4105": "おこさまポップコーンシュリンプ",
      "4106": "おこさまポテト"
}
  
const saizeKeys = Object.keys(data); // 番号
const saizeValues = Object.values(data); // 商品名

function generateQuestion() {
    let pre = Math.floor(Math.random() * 52) + 1;
    let answernumber = saizeKeys[pre]
    let question = saizeValues[pre]
    console.log(answernumber)
    console.log(question)
    return [question, answernumber];
}

let questionData = generateQuestion();

function setQuestion(){
    clearInput()
    questionData = generateQuestion();
    document.getElementById('question').textContent = questionData[0];
    document.getElementById('answer').textContent = ""
}

function answerCheck() {
    const input = document.getElementById('productNumber');
    let resultdata = document.getElementById('answer')
    if (input.value == questionData[1]) {
        resultdata.textContent = "正解です!"
    } else {
        resultdata.textContent = "不正解です。正解は「" + questionData[1] + "」です。"
    }
}