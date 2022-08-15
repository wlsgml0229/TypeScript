function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);

//ts 파일을 브라우저가 인식할수있도록 js로 변경해줘야함
//npm i typescript -g
// tsc index.ts
// 위의 명령어 입력시 타입스크립트 파일이 js 파일로 변환되어 생성
