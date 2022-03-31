function* generatorFunc() {
    yield 15;
    yield 22;
    yield 39;
}
const obj = generatorFunc();
for (let value of obj) {
    console.log(value);
}