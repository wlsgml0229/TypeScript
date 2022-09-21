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

// api 묘사
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// api 규격 정할떄 제네릭을 가장 많이씀

function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  //초기화 코드를 constructor() 에 많이 넣음
  // constructor 는 따로 함수선언 x
  constructor() {
    this.fetchData();
  }

  //반환타입 없음
  // fetchData api 함수 실행후 비동기 데이터 셋업이기 때문에 return 없음 -> void
  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  //name을 위에서 string타입으로 지정했기 때문에 string
  //filter 로 배열반환 -> Contact[]
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  //phoneType - home, office, studio
  findContactByPhone(phoneNumber: number, phoneType: PhoneType) {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  // 타입 오탈자도 날수 있음 => 변수화해서 변수를 넣어주는것 (타입관점에서의 안정성)
  // findContactByPhone('officee');
  // findContactByPhone('homee')
  // findContactByPhone(PhoneType.Home)

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  //map을 이용해서 활용
  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
