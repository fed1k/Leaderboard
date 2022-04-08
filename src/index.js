import { listBoard, addListToPage } from './scoreList.js';
import './style.css';

const array = [];
const section = document.querySelector('.scoreList');
const nameClass = document.querySelector('.name-class')
const scoreClass = document.querySelector('.score-class')
const reset = document.querySelector('.reset')
const submit = document.querySelector('.submit')
const scrollUp = document.querySelector('.scrollUp')
section.appendChild(listBoard);

submit.addEventListener('click', addListToPage)
scoreClass.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter' && scoreClass.value) addListToPage();
})

const getDataFromApi = async()=>{
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lkZvzTSRH77IZXCC4fo9/scores/')
    const raha =  await response.json();
    for(let i of raha.result){
        const p = document.createElement('p');
        p.className = 'listText';
        p.textContent = `${i.user}: ${i.score}`;
        listBoard.appendChild(p);
        
    }
}

reset.addEventListener('click', ()=>{
    location.reload();
    getDataFromApi()
});
window.onload = getDataFromApi();

scrollUp.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
})



export { nameClass, scoreClass, array}
