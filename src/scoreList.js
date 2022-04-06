const listBoard = document.createElement('div');
const array = [
  { name: 'Firdavs', score: 91 },
  { name: 'Said', score: 69 },
  { name: 'Sediq', score: 51 },
  { name: 'Amedzro', score: 48 },
];

for (const i of array) {
  const p = document.createElement('p');
  p.textContent = `${i.name}: ${i.score}`;
  listBoard.appendChild(p);
}
export { listBoard, array };
