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
function logText(text: string) {
    console.log(text);
//    text.split('').reverse().join('');
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logText(10); // 숫자 10
const num = logNumber(10);
logText('하이'); // 문자열 하이
logText(true); // 진위값 true 



