// TypeScript 변수

// let 변수이름: 타입 [= 초깃값]
// const 변수이름: 타입 = 초깃값
// 타입은 생략해도 타입추론 기능을 통해 자동으로 타입을 지정해준다.
let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

/*
타입이 다르기 떄문에 오류 발생
n = 'a'
b = 1
s = false
*/
o = {name: 'Jack', age: 32}

// any 타입
// any 타입은 타입과 무관하게 어떤 종류의 값도 저장할 수 있다
let a: any = 0
a = 'hello'
a = true
a = {}

// undefined 타입
// 변수를 초기화 하지 않으면 해당 변수는 undefined 값을 가짐
// undefined는 값이면서 타입이다.
let u: undefined = undefined
// u = 1 오류 발생

// any -> object -> interface, class -> undefined
//     -> number, boolean, string    ->
// any는 모든 타입의 루트 타입(최상위 타입)
// undefined 는 모든 타입의 최하위 타입

// 템플릿 문자열

let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result)