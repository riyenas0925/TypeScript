# 객체의 비구조화 할당문

## 구조화(Structuring)란?
```인터페이스```나 ```클래스```를 사용해 관련된 정보를 묶어 ```새로운 타입```으로 표현하는 방법
```ts
let personName = 'Jack'
let personAge = 32

let companyName = 'Apple Company, Inc'
let companyAge = 43
```
위의 코드는 작성하기고 ```번거롭고 확장하기도 어렵기``` 때문에 아래와 같이 ```구조화``` 할수 있다.

```ts
export interface IPerson {
    name: string
    age: number
}

export interface ICompany {
    name: string
    age: number
}
```

```ts
let jack: IPerson = {name: 'Jack', age: 32},
    jane: IPerson = {name: 'Jane', age: 32}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}
```
코드를 구조화 하면 새로운 비슷한 유형의 변수를 쉽게 만들수 있고, ```코드의 기능 확장이 수월```해지는 장점이 있다.

## 비구조화(destructuring)란?
구조화된 데이터에서 데이터의 일부만 사용해야 할때, ```구조화된 데이터를 분해```하는 것을 ```비구조화``` 라고 한다.

```ts
let name = jack.name, age = jack.age
```
## 비구조화 할당
```비구조화 할당```은 ```ESNext 자바스크립트```의 구문으로 ```타입스크립트```에서도 사용 할수 있다.  
```ts
let {name, age} = jack  // let {얻고 싶은 속성} = 객체
```
비구조화 할당은 name, age라는 ```새로운 변수```에 jack.age, jack.name의 값을 각각 ```초깃값으로 할당``` 받는다.

```ts
import {IPerson} from './utils/IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32}
let {name, age} = jack
console.log(name, age)
```

## ... 연산자
```ESNext 자바스크립트```와 ```타입스크립트```에서 ```...``` 연산자는 연산자의 위치에 따라 ```잔여 연산자(resp operator)```, ```전개 연산자(spread operator)```로 사용 된다.

### 잔여 연산자
country, city를 제외한 나머진 변수를 별도의  details라는 변수에 저장하고 싶을때 아애와 같이 details 변수앞에 ```...``` 연산자를 붙인다.
```ts
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC Building'
}

const {country, city, ...details} = address

console.log(details)    
// { address1: 'Gangnam-gu', address2: 'Sinsa-dong 123-456', address3: '789 street, 2 Floor ABC Building' }
```

### 전개 연산자
점 3개 연산자가 비구조화 할당문이 아닌곳에서 사용 될때 전개 연산자는 의미 그대로 객체의 속성을 모두 전개해 새로운 객체로 만들어 준다.
```ts
let coord = {...{x: 0}, ...{y: 0}}

console.log(coord)  
// { x: 0, y: 0 }
```

```ts
let part1 = {name: 'Jane'}, part2 = {age: 2}, part3 = {city: 'Seoul', county: 'kr'}
let merged = {...part1, ...part2, ...part3}

console.log(merged)
// { name: 'Jane', age: 2, city: 'Seoul', county: 'kr' }
```