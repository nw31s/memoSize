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
    "3101": "ライス",
    "3102": "ラージライス",
    "3103": "スモールライス",
    "3104": "シナモンプチフォッカ",
    "3106": "プチフォッカ",
    "3108": "ミニフィセル",
    "3109": "ガーリックトースト",
    "3110": "フォッカチオ",
    "3111": "ガーリックフォッカチオ",
    "3112": "シナモンフォッカチオ",
    "3201": "ティラミスクラシコ （すぐに）",
    "3204": "ジェラート＆シナモンプチフォッカ （すぐに）",
    "3205": "イタリアンジェラート（すぐに）",
    "3206": "イタリアンプリン（すぐに）",
    "3207": "チョコレートケーキ（すぐに）",
    "3212": "プリンとティラミスクラシコの盛合せ（すぐに）",
    "3213": "トリフアイスクリーム（すぐに）",
    "3215": "コーヒーゼリー＆イタリアンジェラート（すぐに）",
    "3301": "生ビールキリン一番搾り〈ジョッキ〉",
    "3302": "生ビールキリン一番搾り〈グラスビール〉",
    "3303": "アサヒドライゼロ",
    "3304": "キリン氷結シチリア産レモン",
    "3306": "グラッパ（30ml）",
    "3401": "グラスワイン赤",
    "3402": "グラスワイン白",
    "3403": "デカンタ（250ml）赤",
    "3404": "デカンタ（250ml）白",
    "3405": "デカンタ（500ml）赤",
    "3406": "デカンタ（500ml）白",
    "3407": "マグナム（1500ml）赤",
    "3408": "マグナム（1500ml）白",
    "3412": "ランブルスコ【（ロゼ）甘口】",
    "3413": "ドン ラファエロ【（白）辛口】",
    "3414": "ランブルスコ セッコ【（赤）辛口】",
    "3415": "ベルデッキオ【辛口・中】",
    "3416": "キャンティ【辛口・やや重い】",
    "3419": "キャンティ ルフィナ リゼルバ【辛口・重い】",
}
  
const saizeKeys = Object.keys(data); // 番号
const saizeValues = Object.values(data); // 商品名

function generateQuestion() {
    let pre = Math.floor(Math.random() * 36) + 1;
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