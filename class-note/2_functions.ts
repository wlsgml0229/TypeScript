//파라미터의 타입을 정의하는 방식

// function sum(a: number, b: number) {
//   return a + b;
// }

sum(10, 20);

//함수의 반환값에 타입을 정의하는 방식
// 리턴값이 내부에서 정의 되지 않으면 에러
function add(): number {
  return 10;
}

// 함수에 타입을 정의 하는 방식
//함수의 타입을 정의하는 가장 기본적 방식
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20, 30, 40); //30
//두개의 인자를 받는경우를 정의해놓고 추가적인 인자를 넣을경우 ts가 인식하여 에러를 띄워줌

//함수의 선택적 파라미터 - 옵셔널 파라미터
// 특정 파라미터를 선택적으로 넣고싶을때 해당 타입선언앞에 ? 를 붙여주게 되면 선택적으로 사용이 가능하다.
function log(a: string, b?: string) {}
log("hello world");
log("hello ts", "abcc");
