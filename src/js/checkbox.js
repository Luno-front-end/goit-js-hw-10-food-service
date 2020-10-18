const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

currentCheckThem();
checkboxPosition();

refs.checkbox.addEventListener('change', onBlackWhite);

function onBlackWhite(e) {
  const checkThem = localStorage.getItem('Them');

  if (e.target.checked === false) {
    localStorage.setItem('Them', Theme.LIGHT);
    checkOff();
  } else if (e.target.checked === true) {
    localStorage.setItem('Them', Theme.DARK);
    checkOn();
  }
}

function checkboxPosition() {
  const checkThem = localStorage.getItem('Them');
  if (checkThem === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}

function checkOn() {
  const checkThem = localStorage.getItem('Them');
  if (checkThem === Theme.DARK) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(checkThem);
  }
}
function checkOff() {
  const checkThem = localStorage.getItem('Them');
  if (checkThem === Theme.LIGHT) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(checkThem);
  }
}

function currentCheckThem() {
  const checkThem = localStorage.getItem('Them');

  if (!checkThem) {
    localStorage.setItem('Them', Theme.LIGHT);
  } else {
    refs.body.classList.add(checkThem);
  }
}
