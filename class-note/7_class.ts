class Person {
    private name: string;
    public age: number;
    //읽기만 가능, 값변경 x
    readonly log: string;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// // 리액트 예전 문법 
// class App extends React.Component {

// }

// //리액트 최신 문법 - 훅 기반의 함수형 코드
// function App() {
//     return <div>Hello World</div>
// }

// new Vue ({
//     el:'',
//     setup() {

//     }
// })