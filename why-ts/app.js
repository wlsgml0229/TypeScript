// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// Address 에 대한 정의 추가
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

// 아래에서 정의한 타입에 대한 프로퍼티 정의
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      // 오탈자 낸경우에도 존재하지않는값을 화면에 엮어내서 기능을 실행하게 되면 화면에 에러가 나타나게됨.
      // address.innerText = user[0].addres;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
