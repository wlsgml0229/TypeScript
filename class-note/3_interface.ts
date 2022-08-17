interface User {
    age: number
    name: string
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}


//함수에 인터페이스 활용
//이 함수는 인터페이스 형식을 준수하는 인수만 받겠다고 선언
function getUser (user: User) {
    console.log(user)
}


// name, age 모두 정의해주어야 에러안남
const capt = {
    name: '캡틴',
    age: 100
}

//any 일때는 어떤 데이터를 넣어도 무방
//인자가 파라미터에 정의한 인터페이스를 잘 따르고 있는 지 확인!
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
// -> 함수의 전체적인 모습을 정의 할 수 있다.
interface SumFunction {
    (a: number, b: number): number;
}


let sum: SumFunction;
sum = function(a:number, b:number) {
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

let arr = ['a','b','c'];
// 1. 인덱스로 접근
//2. 배열의 방식을 인터페이스로 정할수 있다.
// arr[0] = 10; // 'a'

//딕셔너리 패턴 
interface StringRegexDictionary {
    //정규표현식 생성자 예약어 제공 (타입제공)
    [key: string]: RegExp
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    //오브젝트에 인터페이스를 정의한 순간 형식에 안맞는것들은 모두 에러 발생
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
//에러발생
// obj['cssFile'] = 'a' 

// 객체의 키를 접근할때 값에대한 타입추론이 가능함
Object.keys(obj).forEach((value) => {})

// 인터페이스의 확장
interface Person {
    name: string;
    age: number;
}

//상속을 받아 확장이 가능
interface Developer extends Person {
    langauage: string;
}

let jini: Developer = {
    name: 'jin',
    age: 27,
    langauage: 'ts'
}
