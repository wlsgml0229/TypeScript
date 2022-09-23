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

//타입가드로 위의 코드를 줄여 나갈 수 있음