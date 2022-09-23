interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Maing'}
}
let tony = introduce();
// union Type 배웠을때, 두 타입의 공통된 속성만 접근을 할 수 있음
console.log(tony.skill)

//name 만 접근가능
console.log(tony.name)

//타입단언으로 skill이 있다고 보장가능
if((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill)
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

//타입가드로 위의 코드를 줄여 나갈 수 있음 (is패턴 많이씀)
// 반환 타입 인자 is Developer 타입?
// return 값으로 target.skill 존재 -> Developer 타입이 됨
// Developer 타입인지 판단
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined
}

//타입가드를 통해서 추론을 도와줌
if (isDeveloper(tony)) {
    //developer 라고 추정 -> .skill 제공
    tony.skill
} else {
    // developer 아닌 Person의 타입이니까 -> .age 제공
    tony.age
}