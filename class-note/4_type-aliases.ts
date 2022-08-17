/* type 별칭 */

/**
 * 타입별칭과 인터페이스의 차이
 * 1. 타입별칭은 새로운 타입 값을 하나 생성하는것이 아니라 
 * 정의한 타입에 대해 나중에 쉽게 참고 할 수 있게 이름을 부여하는 것
 * 2. 타입으로 선언시 프리뷰에 타입의 내용이 모두 표시 (인터페이스로 선언할 경우 인터페이스 명만 표시)
 * 
 * <주의> 가장 큰 차이점
 * 타입의 확장 가능 / 불가능 여부
 * 인터페이스는 확장 가능한데 비해 타입별칭은 확장이 불가능 하여 interface사용을 추천
 * 
 *  */ 

interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

let juho: Person = {
    name: '주호',
    age: 30
}

type MyString = string;
let str: MyString = 'hello';

// 가독성 상승
type Todo = {id: string; title:string; done: boolean;}
function getTodo (todo: Todo) {

}

