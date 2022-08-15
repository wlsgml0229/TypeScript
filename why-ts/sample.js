// function sum(a, b) {
//   return a + b;
// }
// //sum(10, "20"); //1020

// //자동완성 api 따로 뜨지않음
// var res = sum(10, 20);
// result.toLocaleString();

//타입스크립트를 쓰지않고 자바스크립트 상에서 타입스크립트처럼 쓰는 방법!

//ts-check 아래 행을 추가해주면 타입스크립트와 같이 타입이 틀린경우 알려줌
// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns
 */

//vscode 에서 코드프리뷰를 제공함
function sum(a, b) {
  return a + b;
}

// 잘못됐다고 알려주지는 않음
// sum(10, "20");
