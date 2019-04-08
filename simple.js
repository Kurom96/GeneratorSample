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