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
