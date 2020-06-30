# 변수

## 타입스크립트 기본 제공 타입
| 유형 | 자바스크립트 타입 | 타입스크립트 타입 |
|:---:|:---:|:---:|
| 수 타입 | Number | number |
| 불리언 타입 | Boolean | boolean |
| 문자열 타입 | String | string |
| 객체 타입 | Object | object |

## let과 const
> ```ES5 자바스크립트```는 variable의 앞 세글자를 딴 ```var```라는 키워드를 사용하지만 ```var```는 프로그래머의 의도와 다르게 동작할수 있기 때문에 ```let```, ```const```를 도입 ```ESNext```는 var 대신 let, const를 사용하라고 권고

```js
let 변수 이름 [= 초깃값]    // let으로 선언한 변수는 그값이 수시로 변경될 수 있음을 암시
const 변수 이름 = 초깃값    // const 변수는 선언할때 반드시 초깃값을 명시
```

## 타입 주석
타입스크립트는 자바스크립트 변수 선언문을 확장해 다음과 같은 형태로 타입을 명시
```js
let 변수 이름: 타입[= 초깃값]
const 변수 이름: 타입 = 초깃값
```

### 타입스크립트 변수 예시
```ts
let n: number = 1
let b: boolean = true   // 혹은 false
let s: string = 'hello'
let o: object = {}
```

### 타입불일치 오류 예시
```ts
let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

// 타입이 다르기 떄문에 오류 발생
// n = 'a'
// b = 1
// s = false

// 타입이 같기 때문에 오류 발생 X
o = {name: 'Jack', age: 32}
```

## 타입 추론
자바스크립트와의 호환성을 위해 타입 주석 부분을 생략할수 있다. 아래 예시와 같은 코드를 만나면 ```대입 연산자(=)``` 오른쪽 값에 따라 변수의 타입을 지정
```ts
let n = 1
let b = true
let s = 'hello'
let o = {}
```
변수 초깃값에 해당하는 타입으로 지정되면 이후에는 해당 타입의 값만 저장 가능

## any 타입
any 타입은 값의 타입과 무관하게 ```어떤 종류의 값```도 저장할 수 있다.
```ts
let a: any = 0
a = 'hello'
a = true
a = {}
```

## undefined 타입
```자바스크립트```에서 변수를 초기화하지 않으면 해당 변수는 ```undefined```값을 가진다. 하지만 ```타입스크립트```에서는 ```undefined```는 ```값```이기도하고 ```타입```이기도 한다
```ts
let u: undefined = undefined

// undefined타입으로 지정된 변수에 상위타입인 number 타입을 저장하려고 해서 오류 발생
// u = 1
```

## 타입스크립트 타입 계층도
* ```any```는 모든 타입의 루트 타입(최상위 타입)
* ```undefined```는 모든 타입의 최하위 타입

![Typescript_Type](https://user-images.githubusercontent.com/32615702/86135434-c6b29d80-bb25-11ea-9077-3f7aa944c287.png)

## 템플릿 문자열
변수에 담긴 값을 조합해 문자열을 만들수 있게 하는 템플릿 문자열 ```역따옴표(`)```로 문자열을 감싸고 변수를 ```${}```기호로 감싸는 형태로 만든다

```ts
let count = 10, message = 'Your count'
let result = `${message} is ${count}`
```

