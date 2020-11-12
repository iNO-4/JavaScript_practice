// [Challenge]
// app_1にあった「ジャンケンプログラム」に、次の機能を付け足す。
// 1.グー・チョキ・パー以外の文字列が入力されたときに、「グー・チョキ・パーのいずれかを入力してください」とアラートウィンドウにエラーが表示されるようにする。
// 2.アラートウィンドウでエラーが表示された後、もう一度プロンプト入力欄が表示され、入力できるようにする。
// 3.キャンセルボタンが押されたときは、「またチャレンジしてね」というアラートメッセージが出力されるようにする。

var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

// 追加
while((user_hand!="グー")&&(user_hand!="チョキ")&&(user_hand!="パー")&&(user_hand!=null)){
	alert('グー・チョキ・パーのいずれかを入力して下さい。');
	user_hand = prompt('ジャンケンの手をグー・チョキ・パーから選んでください。');
}
// ここまで

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

// if文を追加
if(user_hand!=null){
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
	alert("またチャレンジしてね")
}
// ここまで

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	var hand_name;

	if(js_hand_num == 0){
		hand_name = "グー";
	}else if(js_hand_num == 1){
		hand_name = "チョキ";
	}else if(js_hand_num == 2){
		hand_name = "パー";
	}

	return hand_name;
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


// 10行目のwhile()の条件式で、「"グー"以外且つ、"チョキ"以外且つ、"パー"以外且つ、キャンセルボタン以外だったら」というような条件式を書く。
// その後、22行目で、「キャンセルじゃなかったら(user_hand!=null)」ジャンケンの結果を出し、elseで「キャンセルだったら」また"チャレンジしてね"という文が出せる処理になっている。
