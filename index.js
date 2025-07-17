/*1. 数値の配列から最大値を取得する関数を作成してください。

- 10個以上の要素を持つ数値型の配列を定義してください
- 数値型の配列を引数に取り、その最大値の数値型を返す関数を定義してください。*/
//配列の要素を比較して、最も大きな数値を返す
//数値の配列numbersを引数、number型の最大値を返す。
//配列が空の場合は、Not a Numberを返す
//配列内の各要素を順番に比較する
//配列の中に、より大きい値が見つかる度にmaxを更新する
//maxに格納された最大値を返す
function findMax(numbers: numbers[]): numbers {
    if (numbers.length === 0) {
        return NaN;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
/*2. FizzBuzz 関数

- 数値型を引数に取り、
3の倍数のときには `Fizz`
5の倍数のときには `Buzz`
3と5の倍数のときには `FizzBuzz`
それ以外のときには元の数値を返す関数"string"を定義する
- 上記の関数を使って、1～100までの数値の返り値を順番に　＝forループ　コンソールに出力してください。*/
function string(num) {
    if (num % 15 === 0)
        return "FizzBuzz";
    if (num % 3 === 0)
        return "Fizz";
    if (num % 5 === 0)
        return "Buzz";
    
    return num.toString();
}
for (var i = 1; i <= 100; i++) {
    console.log(string(i));
}
/*3. 逆さ文字列
- 文字列を引数に取り、受け取った文字列を逆順にして返す関数を作成してください。　`split`文字列を配列に分割,`reverse`その配列を逆順に,`join`再び文字列に結合メソッド
- `baseball` という引数を与えたとき `llabesab` という文字列が返ることを確認してください。 */
const inverse = (str) => {
    return str.split('').reverse().join('');
  };
  
  console.log(inverse("baseball")); 

/*4. 文字列分割
「任意の文章」と
「区切り文字」を引数にとり、
任意の文章を区切り文字で区切った
配列を返す関数を作成してください。
`'apple,orange,strawberry'` という文章と
 `,` という区切り文字を与えたとき `['apple', 'orange', 'strawberry']` という配列が返ることを確認してください。 */
 //split() メソッドを使用して文字列を区切り文字で分割し、結果を配列として返す

 function splitString(text: string, delimiter: string): string[] {
    return text.split(delimiter);
  }
  

  const text = 'apple,orange,strawberry';
  const delimiter = ',';
  const result = splitString(text, delimiter);
  console.log(result); 
  //  [ 'apple', 'orange', 'strawberry' ]