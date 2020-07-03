let person: object = {name: 'Jack', age: 32};
//person.name   // object 타입은 name 속성을 가지지 않으므로 오류 발생

console.log((<{name: string, age: number}>person).name);
console.log((<{name: string, age: number}>person).age);

import INameable from './utils/INameable'
let obj: object = {name: 'jack'}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)