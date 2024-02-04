const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_=-+{}[]?/>.,<`~";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  while (length > password.length) {
    console.log(password);
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
};

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
