import { listBoard, addListToPage } from './scoreList.js';
import './style.css';

const array = [];
const section = document.querySelector('.scoreList');
const nameClass = document.querySelector('.name-class')
const scoreClass = document.querySelector('.score-class')
const submit = document.querySelector('.submit')
section.appendChild(listBoard);

submit.addEventListener('click', addListToPage)
scoreClass.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter' && scoreClass.value) addListToPage();
})

export { nameClass, scoreClass, array}
