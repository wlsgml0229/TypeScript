// 타입추론 기본 1
let a = 'a';

// 변수, 속성 인자의기본값 함수 반환값등 모두 타입추론 O
function getB(b = 10) {
    var c = 'hi'
    return b + c;
}

//타입 추론 기본 2
// interface Dropdown<T> {
//     value: T
//     title:string;
// }

// //타입초기화 string -> value: string 으로
// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

//타입 추론 기본 3
    interface Dropdown<T> {
        value: T
        title:string;
    }
    //extends를 사용해서 Dropdown 타입까지 K로 넘겨주면 Dropdown 의 타입까지 모두 적용
    interface DetailedDropdown<K> extends Dropdown<K>{
        description: string;
        tag: K
    }
    
    let detailedItem : DetailedDropdown<string> = {
        //고정된 타입 초기화
        title: 'aa',
        description: 'ab',
        // value 값도 string으로
        value: 'a',
        tag: 'a'
    }


