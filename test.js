/**
 * 超簡単なジェネレータ
 * @return {IterableIterator<number>}
 */
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let i of simpleGenerator()) {
    console.log(i);
}



/**
 * 素数判定
 * @param {Number} num
 * @return {boolean} true: そすう、false: そすうちがう
 */
const isPrimeNumber = num => {

    if (num === 1) {
        return true;
    }

    if (isNaN(num) || num < 1) {
        // 数値以外、1より小さい数は一律 false
        return false;
    }

    let cnt = 0;
    for (let i = 2; i <= num; i++) {
        if ((num % i) === 0) {
            cnt++;
        }
    }

    return cnt === 1;
};

/**
 * from 〜 to の値で素数を検出しイテレータを返却する
 * @param from
 * @param to
 * @return {IterableIterator<*>}
 */
function* generatePrimeNumber(from, to) {
    for (let i = from; i <= to; i++) {
        if (isPrimeNumber(i)) {
            yield i;
        }
    }
}

// 1 〜 10000 の間の素数を探してログ出力するやつ
for (let primeNum of generatePrimeNumber(1, 10000)) {
    console.log(primeNum);
}
