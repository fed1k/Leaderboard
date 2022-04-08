import { nameClass, scoreClass, array} from "./index.js";

class List {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const listBoard = document.createElement("div");
const addListToPage = () => {
  if (nameClass.value && scoreClass.value) {
    const list = new List(nameClass.value, scoreClass.value);
    array.push(list);
    nameClass.value = null;
    scoreClass.value = null;
    fetch('')
  }
};

// const p = document.createElement('p');
// p.textContent = `${list.name}: ${list.score}`;
// listBoard.appendChild(p);

export { listBoard, addListToPage };
