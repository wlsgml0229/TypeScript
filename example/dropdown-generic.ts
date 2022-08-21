interface Email {
  value: string;
  selected: boolean;
}

const emails:Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

interface TrueFalse {
  value: boolean;
  selected: boolean;
}

// 타입이 어떤게 오던간에 유연하게 사용하려면 제네릭 활용해야함

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach((product) => {
  const item = createDropdownItem(product)
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
})