import { nameClass, scoreClass, array } from "./index.js";

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
    sendDataToApi();
  }
};

const sendDataToApi = async()=>{
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lkZvzTSRH77IZXCC4fo9/scores/",
    {
      method: 'POST',
      body: JSON.stringify({
        user: array[0].name,
        score: array[0].score
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8'}
    }
  )
}

export { listBoard, addListToPage };
