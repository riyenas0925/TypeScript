// 생성자
class Person2 {
    constructor(public name: string, public age?: number) {}
}

let jack2 : Person2 = new Person2('Jack', 32)
console.log(jack2)

class Person3 {
    name : string
    age?: number
    constructor(name: string, age?: number) {
        this.name = name; this.age = age
    }
}

let jack3 : Person3 = new Person3('Jack', 32)
console.log(jack3)

// 인터페이스 구현
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    name: string;
    age?: number 
    constructor(name: string, age?: number) {
        this.name = name; this.age = age
    }
}

let jack4: IPerson4 = new Person4('Jack', 32)
console.log(jack4)


// 추상 클래스
abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}

// 클래스의 상속

class Person5 extends AbstractPerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}

let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5)

//static 속성
class A {
    static initValue = 1
}

let initVal = A.initValue
console.log(initVal)