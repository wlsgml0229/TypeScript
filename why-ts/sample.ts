function add(a: number, b: number): number {
  return a + b;
}
// a와 b 모두 숫자여야하는데 아닌경우 코드상에서 에러라고 미리 알려줌
// 타입이 정의되어있었을때 에러의 사전방지
var result = add(10, 20);

// 타입스크립트의 추론
//제공하는 api 를 바로 볼 수 있고 자동완성을 도와줌
result.toLocaleString();
