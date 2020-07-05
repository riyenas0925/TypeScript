// 함수 선언문의 예시
function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2))

// argument 인수, 인자  -> 함수를 호출할때 전달하는 값
// parameter 매개변수 -> 함수 이름 뒤 괄호 안에 선언하는 변수

function printMe3(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`)
}

printMe3("Jack", 32)

// 함수 시그니처
let printMe4: (arg0: string, arg1: number) => void = function (name: string, age: number): void {}

printMe4('Jack', 22)

type stringNumberFunc = (arg0: string, arg1: number) => void
let f: stringNumberFunc = function(a: string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}

interface INameable {
    name: string
}

/*
function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}

let k = getName(undefined)
console.log(k)
*/