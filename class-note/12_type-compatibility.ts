// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
}

let developer: Developer;
let person: Person;

//person 값을 developer 에할당 -> 에러발생
// 왼쪽의 타입이 더 크기 때문에 호환이 안됨
// developer = person;

person = developer;
developer = new Person()



