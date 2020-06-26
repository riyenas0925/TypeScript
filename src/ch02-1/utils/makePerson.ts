export function makePerson(name: string, age : number){
    return {name: name, age: age}
}

export function testMakePerson() {
    console.log(
        makePerson('jane', 22),
        makePerson('jack', 33)
    )
}