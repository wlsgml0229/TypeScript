interface PhoneNumberDictionary {
    //객체에 key 정의 하지않았을때 여러가지 키값 정의하는 방법 
    [phone: string]: {
      num: number;
    };
  }
  
  interface Contact {
    name: string;
    address: string;
    //
    phones: PhoneNumberDictionary;
  }
  
  enum PhoneType {
    //enum 속성정의 = 할당값 정의
    Home = 'home',
    office = 'office',
    Studio = 'studio'
  }

  //여러개 타입 정의할때는 밑에 정의 많이하는 관행
  export {
    Contact, PhoneType
  };