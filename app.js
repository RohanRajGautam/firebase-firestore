const cafeList = document.querySelector('#cafe-list');
const cafeForm = document.querySelector('#add-cafe-form');

//create element and render cafe
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);
  cafeList.appendChild(li);
}

//get data
db.collection('cafe')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });

//saving data
cafeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('cafe').add({
    name: cafeForm.name.value,
    city: cafeForm.city.value,
  });
  cafeForm.name.value = '';
  cafeForm.city.value = '';
});
