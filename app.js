var hello = 'Hello World';
alert(hello);

var boxA = 1;
// 負数を代入
var boxB = -10;
var boxC = 3.14;
var boxD = "JavaScriptを覚えよう";

alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);
alert('Hello' + 'World');

var box1 = 'Hello'
var box2 = 'World'
alert(box1 + box2);

var orange = 100;
var apple = 120;
if(orange < apple){
	alert('みかんの値段がりんごより安い');
}else if(orrange == apple){
	alert('みかんとりんごが同じ値段')
}else{
	alert('みかんの値段がりんごより高い')
}


var max = 100;
var num = 1;
var count = 0;
while(num < max){
	num = num * 2;
	count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


var i;
var numm = 0;
for(i = 1; i < 11; i++){
	numm = numm + i
}
alert('1から10まで足し算した結果は' + numm + 'です。');



function addString(strA){
	var addStr = 'Hello' + strA;
	return addStr;
}

var alertString;
alertString = addString("Webcamp");

alert(alertString);





var promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);





var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
alert('あなたの選んだ手は' + user_hand + 'です。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
	alert('グー・チョキ・パーのいずれかを入力して下さい')
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
	alert("またチャレンジしてね");
}


function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	var hand;

	if(js_hand_num == 0){
		hand = "グー";
	}else if(js_hand_num == 1){
		hand = "チョキ";
	}else if(js_hand_num == 2){
		hand = "パー";
	}
	return hand;
}

function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}


	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}


	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}

		return winLoseStr;
}