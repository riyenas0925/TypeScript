// obejct 타입으로 선언된 변수는 number, boolean, stirng 타입의 값을 가질 수는 없지만, 
// 다음처럼 속성이름이 다른 객체를 모두 자유롭게 담을수 있다.
let o1: object = {name: 'Jack', age: 32}
console.log(o1)

o1 = {first: 1, second: 2}
console.log(o1)

// 인터페이스 선언문
// interface 인터페이스_이름 { 
//    속성이름[?]: 속성타입[,...]
// }

interface IPerson {
    name: string
    age: number
}

let good: IPerson = {name: 'Jack', age: 32}

/* 
let bad1: IPerson = {name: "Jack"}                      // age 속성이 없어 오류
let bad2: IPerson = {age: 32}                           // name 속성이 없어 오류
let bad3: IPerson = {}                                  // age, name 속성이 없어 오류
let bad4: IPerson = {name: 'Jack', age: 32, etc: true}  // etc 속성이 있어서 오류
 */

 interface IPerson2 {
     name: string   // 필수 속성
     age: number    // 필수 속성
     etc?: boolean  // 선택 속성
 }

 let good1: IPerson2 = {name: 'Jack', age: 32}
 let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}

// 익명 인터페이스 예시
 let ai: {
     name: string
     age: number
     etc?: boolean
 } = {name: 'Jack', age: 32, etc: true}

 function printMe(me: {name: string, age: number, etc?: boolean}) {
     console.log(
         me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
     )
 }

 printMe(ai)

 // 위의 예시를 인터페이스를 사용해서 작성\
 function printMe2(person: IPerson2){
    console.log(
        person.etc ?
           `${person.name} ${person.age} ${person.etc}` :
           `${person.name} ${person.age}`
    )
 }

 printMe(ai)