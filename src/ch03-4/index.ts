import {IPerson, ICompany} from './utils/IPerson_ICompany'

// 객체의 구조화 할당
let personName = 'Jack'
let personAge = 32

let companyName = 'Apple Company, Inc'
let companyAge = 43

let jack: IPerson = {name: 'Jack', age: 32},
    jane: IPerson = {name: 'Jane', age: 32}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(jack)
console.log(jane)

console.log(apple)
console.log(ms)

// 객체의 비구조화 할당
// let name = jack.name, age = jack.age
let {name, age} = jack

console.log(name, age)

// 잔여 연산자
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC Building'
}

const {country, city, ...details} = address
console.log(details)

const {address1, address2, address3} = details
console.log(address1, address2, address3)

// 전개 연산자
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord)

let part1 = {name: 'Jane'}, part2 = {age: 2}, part3 = {city: 'Seoul', county: 'kr'}
let merged = {...part1, ...part2, ...part3}
console.log(merged)