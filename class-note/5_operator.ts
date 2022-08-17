// function logMessage(value: any) {
//     console.log(value);
//     value
// }
// logMessage('hello');
// logMessage(100);


// 유니온 타입 - 한가지타입 이상을 쓸수 있게 만든다.
// any를 쓰면 타입스크립트의 장점이 사라짐 - 타입스크립트가 추론하는 시점에서 any로 인식
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