# 인터페이스
```obejct``` 타입으로 선언된 변수는 ```number```, ```boolean```, ```stirng``` 타입의 값을 가질 수는 없지만, 아래와 같이 속성이름이 다른 객체를 모두 자유롭게 담을수 있다.

```ts
let o: object = {name: 'Jack', age: 32}
o = {first: 1, second: 2}
```

## 인터페이스 선언문
인터페이스는 ```객체의 타입을 정의하는 것이 목적```이므로 다음처럼 객체를 의미하는 ```중괄호 {}```로 속성과 속성의 타입 주석을 나열하는 형태로 사용
```ts
interface 인터페이스 이름 {
    속성 이름[?]: 속성타입[,...]
}
```

```name```, ```age``` 속성을 포함하는 객체의 타입으로 ```IPerson``` ```인터페이스```를 정의한다면 다음과 같다

### 인터페이스 구문 예
```ts
interface IPerson {
    name: string
    age: number
}
```
IPerson 인터페이스의 목적은 name과 age라는 이름의 속성이 둘다 있는 객체만 유효하도록 객체의 타입 범위를 좁히는 데 있기 때문에 조건을 벗어난 코드는 오류가 발생한다.


### 인터페이스의 조건을 벗어나는 예
```ts
interface IPerson {
    name: string
    age: number
}

let good: IPerson = {name: 'Jack', age: 32}

// let bad1: IPerson = {name: "Jack"}                      // age 속성이 없어 오류
// let bad2: IPerson = {age: 32}                           // name 속성이 없어 오류
// let bad3: IPerson = {}                                  // age, name 속성이 없어 오류
// let bad4: IPerson = {name: 'Jack', age: 32, etc: true}  // etc 속성이 있어서 오류
```

## 선택 속성 구문
인터페이스 설계시 어떤 속성은 반드시 있어야 하지만, 어떤 속성은 있어도 되고 없어도 되는 형태로 만들고 싶을때 사용, 속성이름 뒤에 물음표 기호를 붙여서 작성

```ts
 interface IPerson2 {
     name: string   // 필수 속성
     age: number    // 필수 속성
     etc?: boolean  // 선택 속성
 }

 let good1: IPerson2 = {name: 'Jack', age: 32}
 let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}
```
## 익명 인터페이스
```타입스크립트```는 ```interface 키워드```도 사용하지 않고 인터페이스의 이름도 없는 인터페이스를 만들수 있으며 이를 ```익명 인터페이스```라고 한다.

### 인터페이스를 활용한 함수 예시
익명 인터페이스는 주로 함수를 구현할때 사용한다.
```ts
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32, etc: true}

function printMe2(person: IPerson2){
        console.log(
        person.etc ?
           `${person.name} ${person.age} ${person.etc}` :
           `${person.name} ${person.age}`
    )
}

 printMe(ai)
```

### 익명 인터페이스의 활용한 함수 예시
```ts
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
```