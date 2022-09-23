// //타입 단언
// let a;
// //a의 타입이 any -> b 타입도 any
// let b = a;

let a;
a = 20;
a = 'a';
// 개발자가 봤을때 문자열로 추정될 것이다 -> as string 으로 해주면 b가 string이 됨. (타입단언)
let b = a as string;

// DOM API 조작