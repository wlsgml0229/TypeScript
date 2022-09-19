// function logText(text) {
//     console.log(text);
//     return text;
// }

// //위에 파라미터 타입지정 x -> 아무 타입이나 넣을 수 있음
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true 

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이'); //호출하는 시점에 타입을 넘겨줄 수 있는것이 제네릭의 특징

// !!!기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복선언의 단점

// 타입을 다르게 받기 위해 새로운 함수를 만들어내야함. ==> 유지보수 관점에서 좋지않음 코드가 방대해짐
// function logText(text: string) {
//     console.log(text);
// //    text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// logText(10); // 숫자 10
// const num = logNumber(10);
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true 


// !! union으로 사용했을때 문제점
// function logText(text: string | number) {
//     console.log(text);
//     text // string, number의 교집합으로 두 타입이 모두 접근가능한 속성 또는 api에 관해서만 프리뷰를 제공 하게되는 문제점
//     return text;
// }

// const a = logText('a');
// //리턴값을 받을때 a에 관한 값도 스트링과 넘버타입을 받게됨 - split 사용 불가
// a.split()
// logText(10);



//!! 제네릭 사용시 장점
//각각정의 하는게 아니라 호출한 시점에 타입을 정의 
// 타입추론을 하여 최종 반환값 까지 붙일수 있음
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

//반환값도 정상적 타입으로 string 나옴
const abc = logText<string>('abc') 
abc.split('')

const login = logText<boolean>(true);

//제네릭의 타입 제한 (제네릭의 타입에 대한 힌트를 추가적으로 줄 수 있음)
// 그냥 제네릭으로 받으면 length 가 인식 x 
// 배열이라고 적어놓으면 타입 힌트를 좀 더 줘서 length에 접근 가능 
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length)
//     text.forEach(el => {
//         console.log(el)
//     })
//     return text;
// }
// //하지만 string을 배열로 넣어줘야한다.
// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
// 제네릭에 LengthType 이 포함되어있다고 선언
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('hi')
// logTextLength(10); //숫자라서 length 속성 x
// logTextLength({ leng: 10 }) // err leng속성의 정의되어있지 않기 때문에 오류

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
//extends를 활용 (기존의 클래스나 인터페이스 확장)
// 정의된 타입중 하나만 넘겨 받고 싶은경우 keyof 를 사용해서 타입 제한을 할 수 있음
// ShoppingItem 키값만 들어갈 수 있음
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
//제네릭이기 떄문에 타입만 잘 맞춰주면 다 넣을 수 있음
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
getShoppingItemOption('price');




