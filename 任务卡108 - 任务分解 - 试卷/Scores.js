function gapFilling(scores) {
    var value1 = document.getElementById("gap1").value;
    if (value1 === '统一建模语言') {
        scores += 10;
    }

    var value2 = document.getElementById("gap2").value;
    if (value2 === '封装性继承性多态性') {
        scores += 10;
    }
    return scores;
}

function singleChoice(scores) {
    var radio1 = document.getElementsByName("uml");
    if (radio1[1].checked === true) {
        scores += 10;
    }

    var radio2 = document.getElementsByName("java");
    if (radio2[0].checked === true) {
        scores += 10;
    }
    return scores;
}

function multipleChoice(scores) {
    var checkbox1 = document.getElementsByName("granularity");
    if (checkbox1[0].checked === true && checkbox1[1].checked === true && checkbox1[3].checked === true && checkbox1[2].checked === false) {
        scores += 10;
    }

    var checkbox2 = document.getElementsByName("diagram");
    if (checkbox2[0].checked === true && checkbox2[1].checked === true && checkbox2[2].checked === true && checkbox2[3].checked === false) {
        scores += 10;
    }
    return scores;
}

function trueOrFalseQuestion(scores) {
    var judge1 = document.getElementsByName("judge1");
    if (judge1[1].checked === true) {
        scores += 10;
    }

    var judge2 = document.getElementsByName("judge2");
    if (judge2[0].checked === true) {
        scores += 10;
    }
    return scores;
}

function shortAnswerQuestion(scores) {
    var area = document.getElementById("area").value;
    if (area === '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、失误或概念的一种表达形式。' +
        '可以是物理实体；也可以是某种图形；或者是一种教学表达式。') {
        scores += 20;
    }
    return scores;
}

function totalScores() {
    var scores = 0;

    scores = gapFilling(scores);

    scores = singleChoice(scores);

    scores = multipleChoice(scores);

    scores = trueOrFalseQuestion(scores);

    scores = shortAnswerQuestion(scores);


    alert("您的得分为：" + scores + "分！");
}

