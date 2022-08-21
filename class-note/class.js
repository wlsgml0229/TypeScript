//프로토타입의 생성자 함수를 통해서 클래스문법이 이루어짐

function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴'  100);

// ES2015(ES6)
// 실제로 바벨을 통해 변환되는것은 위의 코드
class Person {
    //클래스 로직
    constructor() {
        console.log('생성 되었습니다.')

    }
}

var seho = new Person('세호', 30) // 생성 되었습니다.
cosnole.log(seho)

