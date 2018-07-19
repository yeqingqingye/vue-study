import aa from './a.js';
import './style.css';
import myImg from './1.jpg';
import myJson from './data.json';

document.write('hello world', aa.a);
//document.write(JSON.stringify(myIcon));

let s = document.createElement('span');
s.innerText = 123;
s.setAttribute('class', 'cur');
s.id = 'cur';
document.body.appendChild(s);
s.onclick = function () {
    console.log(this.innerText);
};

let myIcon = new Image();
myIcon.src = myImg;
document.body.appendChild(myIcon);

let newArr = myJson.data.filter((item, index) => {
    return item > 3;
});

newArr.forEach((item, index) => {
    document.write(item);
});


