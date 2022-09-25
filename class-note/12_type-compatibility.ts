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

// 함수

// 두개 함수의 차이는 파라미터한개의 차이 
//add 함수보다 sum 이 더크다는 개념
// b : number
let add = function(a: number) {
    // ...
}

let sum = function(a: number, b: number) {
    // ...
}

// 호환 가능
sum = add;
// 호환 불가 sum 이 더 구조적으로 크다
add = sum;

// 제네릭 
interface Empty<T> {
    // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

//이미 선언되서 사용되었으면 구조적으로 달라져서 호환불가
notempty1 = notempty2;
notempty2 = notempty1;

