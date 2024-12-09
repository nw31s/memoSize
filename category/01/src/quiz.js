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
    "1202": "小エビのサラダ",
    "1205": "わかめのサラダ",
    "1207": "モッツアレラのサラダ",
    "1208": "グリーンサラダ",
    "1209": "チキンのサラダ",
    "1301": "コーンクリームスープ",
    "1305": "田舎風ミネストローネ",
    "1307": "たまねぎのズッパ",
    "1401": "辛味チキン",
    "1402": "アロスティチーニ（ラムの串焼き、2本）",
    "1403": "ほうれん草のソテー",
    "1404": "ポップコーンシュリンプ",
    "1405": "エスカルゴのオーブン焼き",
    "1406": "小エビのカクテル",
    "1407": "チョリソー",
    "1408": "蒸し鶏の辛味ソース",
    "1410": "ムール貝のガーリック焼き",
    "1411": "アスパラガスの温サラダ",
    "1413": "爽やかにんじんサラダ",
    "1414": "モッツアレラトマト",
    "1415": "カリッとポテト",
    "1417": "バッファローモッツアレラのカプレーゼ",
    "1422": "ハモン・セラーノ",
    "1423": "生ハムとバッファローモッツアレラの盛合せ",
    "1425": "柔らか青豆の温サラダ",
    "1452": "アロスティチーニWサイズ（4本)",
    "2101": "ミラノ風ドリア",
    "2103": "半熟卵のミラノ風ドリア",
    "2106": "タラコとエビのドリア",
    "2108": "焼きチーズミラノ風ドリア",
    "2109": "エビとタラコのクリームグラタン（全粒粉）",
    "4301": "トッピング半熟卵",
    "4304": "野菜ペースト",
    "4307": "トッピング粉チーズ（グランモラビア）",
    "5101": "セットドリンクバー",
    "5102": "キッズドリンクバー",
    "5103": "ドリンクバー〈単品〉",
    "5104": "ランチドリンクバー"
}
  
const saizeKeys = Object.keys(data); // 番号
const saizeValues = Object.values(data); // 商品名

function generateQuestion() {
    let pre = Math.floor(Math.random() * 37) + 1;
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