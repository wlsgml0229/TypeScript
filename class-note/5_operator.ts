
// any를 쓰면 타입스크립트의 장점이 사라짐 - 타입스크립트가 추론하는 시점에서 any로 인식
// function logMessage(value: any) {
//     console.log(value);
//     value
// }
// logMessage('hello');
// logMessage(100);


// 유니온 타입 - 한가지타입 이상을 쓸수 있게 만든다.
// string 과 number 둘다 허용
var seho: string | number | boolean;

// 타입가드 : 특정 타입으로 타입의 범위를 좁혀 나가는 (필터링) 과정
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone 은 함수내부에서 적용할 수 있는 속성은 name뿐임
    // 유니온속성을 적용하게 되면 Developer 또는 Person에 모두 적용할 수 있어야하기 떄문에 공통적 속성인 name 민 가능
    someone.name

    //접근 x
    //skill 과 age에 접근하고 싶다면 타입가드를 이용하여 추가 접근 가능하게 됨
    // someone.skill
    // someone.age
}
//각각의 Developer, Person에만 맞는 객체를 넘기면 됨
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100})

// && 인터섹션타입
let jin: string | number | boolean;
// never
let cap: string & number & boolean;
// function askSomeone(someone: Developer & Person) {
//     //타입가드가 필요없이 Developer와 Person 의 속성 접근이 가능하게됨
//     someone.name
//     someone.skill
//     someone.age
// }
// //developer 와 person 의 타입까지 다 합한 (합집합) 객체를 넘겨야됨 
// askSomeone({name: '캡틴', 'age': 100})


