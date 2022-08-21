// function logText(text) {
//     console.log(text);
//     return text;
// }

// //위에 파라미터 타입지정 x -> 아무 타입이나 넣을 수 있음
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true 

function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText<string>('하이'); //호출하는 시점에 타입을 넘겨줄 수 있는것이 제네릭의 특징

