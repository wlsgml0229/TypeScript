//Js 문자열 선언
// var str = "hello";

//Ts 문자열 선언
const str: string = "hello";
const num: number = 10;
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];
let items: number[] = [1, 2, 3];

//Ts 튜플
// 배열에 각각 인덱스, 즉 순서에 타입까지 정의하는 것을 튜플 이라고 부른다.
let address: [string, number] = ["gan", 1];

//Ts 객체
// 상세 타입 설정을 하지않았다면 객체 형태를 유지할 경우 내부의 타입은 상관없음
let obj: object = {};
// let persion: object = {
//   name: "capt",
//   age: 100,
// };

// 구체적으로 내부 타입까지 설정하는 경우
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

//Ts 진위값

let show: boolean = true;
