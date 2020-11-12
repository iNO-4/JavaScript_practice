// 関数は複数定義することも可能。
// alert()関数でアラートウィンドウを表示させていたが、入力の設定も可能である。
// ブラウザ上で文字を入力する場合、通常はフォームが使われるが、入力ダイアログで値を入力することもできる。

// var promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);
// アラートウィンドウの入力ダイアログに文字を入力すると、入力された文字列はptompt()関数の戻り値として変数「promptStr」に格納され、表示される。

// 次に、複数の関数を定義するため、入力した値を処理する関数を作成していく。
// 今回は、ユーザが入力したジャンケンの手(グー・チョキ・パー)と、JSがランダムに出すジャンケンの手を比較し、勝ち負けの結果を表示させる関数を定義する。
// ジャンケンの手を入力するプロンプト欄を作成する。

// var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + 'です。');

// この処理に、相手のジャンケンの手をランダムに選択する関数を追加していく。

// function getJShand(){
// 	var js_hand_num = Math.floor( Math.random() * 3 );
// 乱数を生成する関数を設定している。これによりランダムで表示されるようになる。
// Math.floor( Math.random() * 3 )は、0~2までのランダムな整数値を生成している。
// 関数内の「3」は、ランダム生成したい整数値の+1を指定している。

	// if(js_hand_num == 0){
	// 	js_hand = "グー";
	// }else if(js_hand_num == 1){
	// 	js_hand = "チョキ"
	// }else if(js_hand_num == 2){
	// 	js_hand = "パー";
	// }
// ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分ける。

	// return js_hand;
// }
// 最後に戻り値として、グー・チョキ・パーの文字列を返す。

// これらを応用し、入力されたグー・チョキ・パーと、JSで生成したランダムなジャンケンの手を比べ、勝ち・負け・引き分けの結果を表示する。

// ジャンケンの手を入力してもらうプロンプト欄を作成
var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

// ジャンケンの手をランダムに生成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJSのジャンケンの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する(\の入力は「option」+「¥」)
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでジャンケンの手を作成する関数
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

// ユーザの手とJSのジャンケンの手を比べる関数
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
