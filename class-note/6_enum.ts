// enum 선언시 별도의 설정하지않으면 숫자형 (기본값 0)
// enum Shoes {
//     Nike,
//     Adidas
// }

// let myShoes = Shoes.Nike
// console.log(myShoes) // 0

// 문자형 enum (기본값 0)
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike
console.log(myShoes) // 나이키


// 예제 
enum Answer {
    Yes = 'Y',
    No = 'N'
}

//enum 타입 활용한 함수
function askQuestion (answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
//파라미터 타입이 enum 이기때문에 아래 enum 만받음
//정확한코드, 예외처리 케이스가 줄어듬
askQuestion(Answer.Yes)

//에러
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

