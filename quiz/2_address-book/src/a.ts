// 동기적인 코드 -> 반환타입 직접 선언 x 타입스크립트에서 추론 가능
// function fetchItems(): string[] {
//     let items = ['a', 'b', 'c']
//     return items;
// }

// let result = fetchItems();
// console.log(result)

//비동기코드 - 타입추론이 되지않음
// 반환값 지정 타입과 resolve 확인
function fetchItems(): Promise<string[]> {
    let items: string[] = ['a','b','c']
    return new Promise(function (resolve) {
        resolve(items)
    })
}
fetchItems();