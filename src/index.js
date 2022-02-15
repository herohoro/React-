// constはobjectのプロパティ変更可能
const val4 = {
  name: "へろ",
  age: "33"
};

val4.name = "herohoro";
val4.adress = "kanagawa";
// console.log(val4);
// constは配列のプロパティ変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "herohoro";
const message2 = `私の運営しているブログ名は「${name}ブログ」です。`;
// console.log(message2);

//アロー関数
/*
従来だと・・・
function func2(str){
  return str;
}
/変数に関数を入れるタイプ
従来だと
const func2 = function(str){
  return str;
}
*/
const func2 = (str) => {
  return str;
};
// console.log(func2("変数にアロー関数を入れてみました"));

const func3 = (str) => str;
// console.log(func3("処理１行で終わるなら{}もreturnも省略できる"));

// 分割代入
const myProfile = {
  name2: "hero",
  age: "30"
};
/* 分割前 */
const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);
/* 分割後 */
const { name2, age } = myProfile;
const message4 = `名前は${name2}です。年齢は${age}歳です。`;
// console.log(message4);

// 分割代入 配列
const myProfile2 = ["herohoro", 28];
/* 分割前 */
const message5 = `分割前＿名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(message5);
/* 分割後 */
const [name3, age3] = myProfile2;
const message6 = `分割後＿名前は${name3}です。年齢は${age3}歳です。`;
// console.log(message6);

//デフォルト値
const sayHello = (name) => console.log(`こんにちは${name}さん`);
// sayHello("ほろほろ");
/* 値がnullの時に処理するようにする */
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello2();
// sayHello2("ちゅくちゅく");

//スプレッド構文

// 　_配列の展開
const arr1 = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
/* 普通 */
// sumFunc(arr1[0],arr1[1]);
/* スプレッド構文 */
// sumFunc(...arr1);

// _まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// _配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6);
// _配列の結合
const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/** 問題点
 * スプレッド構文を使用しないと参照元まで置き換えられてしまう
 */
const arr8 = arr4;
arr8[0] = 100;
// console.log(arr4);

// mapやフィルター

/** 従来*/
const nameArr = ["田中", "山田", "鈴木"];
// for (let index=0;index<nameArr.length;index++){
//   console.log(nameArr[index]);
// }

/** map
 * 中にアロー関数を書いて、引数に値の中身が順番に入ってくる
 */
// return の結果に基づいて新たな配列を生成する場合
const nameArr2 = nameArr.map((name5) => {
  return name5;
});
// console.log(nameArr2);

/** 従来版を書き換えるとこうなる　*/
//配列をループして単純に処理をする場合
// nameArr.map((name6)=>console.log(name6));

//　filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num3) => {
  return num3 % 2 === 1;
});
// console.log(newNumArr);

// for (let index=0;index<nameArr.length;index++){
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }
// nameArr.map((name6,index)=>console.log(`${index+1}番目は${name6}です`));

//名前によって「さん」をつける
const newNumArr2 = nameArr.map((name7) => {
  if (name7 === "田中") {
    return name7;
  } else {
    return `${name7}さん`;
  }
});
// console.log(newNumArr2);

//三項演算子
//　ある条件?　trueの場合:falseの場合
const val6 = 1 > 0 ? "0より大きいです" : "０より小さいです";
// console.log(val6)

//実装サンプル１
// const num4 ="1300";
// // toLocaleStringは数値に対してカンマ区切りに変換してくれる
// // console.log(num4.toLocaleString());
// //間違えて数値以外を入力した場合にヒントを表示させる実装
// const formatedNum = typeof num4 ==='number'? num4.toLocaleString():'数値を入力してね';
// console.log(formatedNum);

//実装サンプル２

const checkSum = (num1, num2) => {
  return num1 + num2 > 10 ? "10を超えた" : "10以下だよ";
};
// console.log(checkSum(50,80));

//論理演算子
// const flug1 =true;
// const flug2 =false;

// if (flug1 || flug2){
//   console.log("1または２はtrueだよ");
// }
// if (flug1 && flug2){
//   console.log("1と２はtrueだよ");
// }

//本当の使い方
/** 　||の【左がfalse】の時、右の処理を実行する
/* nullはfalse判定になる
/* if文で解釈し直すと、flug1がfalseの時flug2で判定するってこと
*/
const num = null;
const fee = num || "金額未設定です";
console.log(fee);
/** &&の【左がtrue】なら、右の処理を実行する
 * if文で解釈し直すと、flug1がtrueの時flug2を判定するってこと
 */
const num8 = 100;
const fee2 = num8 && "何か設定されています";
console.log(fee2);
