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
// document 접근자에서 조작할수 있는 api
// <div id="app">hi</div>

//쿼리셀렉터로 접근을 하는데 접근하는 시점에 document.querySelector가 돌아가는 시점에 div 가있다는 보장이 없기때문에 확인해야함
// div: HTMLDivElement | null 으로 설정됨
// null 값이 나올수도 있으므로 if문으로 체크해줘야함
// let div = document.querySelector('div')
// if(div) {
//     div?.innerText
// }


//타입단언을 사용하여 HTMLDIVElement 라고 단언 해 놓으면 ( 개발자가 타입을 확정 )
// 타입스크립트가 관여하지않고 타입이 HTMLDivElement 라고 확정된다.
// 그래서 if 문으로 체크하지 않아도 바로 접근 가능하게 된다.
let div = document.querySelector('.container') as HTMLDivElement
  div.innerText;
