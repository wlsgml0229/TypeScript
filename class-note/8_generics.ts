// function logText(text) {
//     console.log(text);
//     return text;
// }

// //위에 파라미터 타입지정 x -> 아무 타입이나 넣을 수 있음
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true 

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이'); //호출하는 시점에 타입을 넘겨줄 수 있는것이 제네릭의 특징

// !!!기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복선언의 단점

// 타입을 다르게 받기 위해 새로운 함수를 만들어내야함. ==> 유지보수 관점에서 좋지않음 코드가 방대해짐
// function logText(text: string) {
//     console.log(text);
// //    text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// logText(10); // 숫자 10
// const num = logNumber(10);
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true 


// !! union으로 사용했을때 문제점
// function logText(text: string | number) {
//     console.log(text);
//     text // string, number의 교집합으로 두 타입이 모두 접근가능한 속성 또는 api에 관해서만 프리뷰를 제공 하게되는 문제점
//     return text;
// }

// const a = logText('a');
// //리턴값을 받을때 a에 관한 값도 스트링과 넘버타입을 받게됨 - split 사용 불가
// a.split()
// logText(10);



//!! 제네릭 사용시 장점
//각각정의 하는게 아니라 호출한 시점에 타입을 정의 
// 타입추론을 하여 최종 반환값 까지 붙일수 있음
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

//반환값도 정상적 타입으로 string 나옴
const abc = logText<string>('abc') 
abc.split('')

const login = logText<boolean>(true);


