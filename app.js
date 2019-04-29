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