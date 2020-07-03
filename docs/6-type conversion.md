# 객체의 타입 변환
```특정 타입```의 ```변숫값```을 ```다른 타입```의 값으로 ```변환```하는 기능 

## 타입 변환(type conversion)
아래의 예시를 보면 person 변수의 타입은 object인데 object 타입은 name 속성을 가지지 않으므로 오류가 발생합니다.
```ts
let person: object = {name: 'Jack', age: 32};
person.name   
// object 타입은 name 속성을 가지지 않으므로 오류 발생
```
![image](https://user-images.githubusercontent.com/32615702/86472197-beeb3700-bd79-11ea-98d8-92961eb82394.png)

따라서 오류를 타입 변환 구문을 통해 해결하려면 person 변수를 일시적으로 name 속성이 있는 타입, 즉 {name: string} 타입으로 변환해 person.name 속성값을 얻어야 합니다.

```ts
let person: object = {name: 'Jack', age: 32};

(<{name: string, age: number}>person).name
(<{name: string, age: number}>person).age
```

## 타입 단언(type assertion)
```타입스크립트```에서만 사용하는 ```타입 변환```, ```ES5 자바스크립트```와 구분하기 위해 ```타입 단언```이라는 용어를 사용한다.
```ts
(<타입>객체)    // 타입 단언 방법 1
(객체 as 타입)  // 타입 단언 방법 2
```

아래와 같이 ```interface```가 있고 ```object``` 변수를 아래 ```interface```로 ```타입 단언``` 할때 아래와 같은 방식으로 한다.
```ts
export default interface INameable {
    name: string
}
```

```ts
import INameable from './utils/INameable'
let obj: object = {name: 'jack'}

let name1 = (<INameable>obj).name       // 타입 단언 방법 1
let name2 = (obj as INameable).name     // 타입 단언 방법 2
console.log(name1, name2)
// Jack Jack
```