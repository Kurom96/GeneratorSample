# GeneratorSample
Sample of Generator

# Generator を3行くらいで説明する。
function* で定義する。  
Generator は実行時点ではコードは実行せずに next がコールされるたびに 次の yield が呼ばれるところまでコードを実行する。  
使い方を工夫すればイテレータ以外にも非同期処理の待合に使えたりするらしい。

詳しくは公式を参照  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators

# Clone
```
$ git clone https://github.com/Kurom96/GeneratorSample.git
$ cd GeneratorSample
```

# 超簡単なGenerator
```
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
```
上記 Generator を for of でループすると
```
for (let i of simpleGenerator()) {
    console.log(i);
}
```
こうなる。

```
$ node simple
```
で実際に動かしてみてください。

# step up
1〜10000 までの素数を検出する Generator。  
`isPrimeNumber(num)` はパラメタが素数か否かを判定。

```
function* generatePrimeNumber(from, to) {
    for (let i = from; i <= to; i++) {
        if (isPrimeNumber(i)) {
            yield i;
        }
    }
}
```

以下で動かしてみてください
```
$ node prime
```
