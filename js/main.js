const elMax30 = document.querySelector('#max30');
const elMax100 = document.querySelector('#max100');
const elMax1000 = document.querySelector('#max1000');

// loading

const elSpan30 = document.querySelector('#load30');
const elSpan100 = document.querySelector('#load100');
const elSpan1000 = document.querySelector('#load1000');

// Maxlength

let elLength30 = elMax30.getAttribute('maxlength')
let elLength100 = elMax100.getAttribute('maxlength')
let elLength1000 = elMax1000.getAttribute('maxlength')

console.log(elLength30)

function max(e) {
  if(e.target.id == elMax30.id) {
    let a = e.target.value;
    elSpan30.style.width = `${a.length * (100 / elLength30)}%`
  }
  if(e.target.id == elMax100.id) {
    let a = e.target.value;
      elSpan100.style.width = `${a.length * (100 / elLength100)}%`
  }
  if(e.target.id == elMax1000.id) {
    let a = e.target.value;
      elSpan1000.style.width = `${a.length * (100 / elLength1000)}%`
  }
}
