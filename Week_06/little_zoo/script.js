document.addEventListener('DOMContentLoaded', () => {
    const animalList = document.getElementById('animalList');
    const searchAnimal = document.getElementById('searchAnimal');
    const filterType = document.getElementById('filterType');
    const sortAnimals = document.getElementById('sortAnimals');
    const newAnimalName = document.getElementById('newAnimalName');
    const newAnimalType = document.getElementById('newAnimalType');
    const addAnimal = document.getElementById('addAnimal');
  
    let animals = [
      { name: 'Fox', type: 'Mammal' },
      { name: 'Bear', type: 'Mammal' },
      { name: 'Eagle', type: 'Bird' },
    ];
  
    function displayAnimals() {
      animalList.innerHTML = '';
      animals.forEach((animal, index) => {
        const li = document.createElement('li');
        li.textContent = `${animal.name} (${animal.type})`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
          animals.splice(index, 1);
          displayAnimals();
        });
        li.appendChild(removeBtn);
        animalList.appendChild(li);
      });
    }
  
    function filterAnimals() {
      const searchValue = searchAnimal.value.toLowerCase();
      const filterValue = filterType.value;
      animalList.innerHTML = '';
      animals
        .filter(animal => 
          (filterValue === 'All' || animal.type === filterValue) &&
          animal.name.toLowerCase().includes(searchValue))
        .forEach((animal, index) => {
          const li = document.createElement('li');
          li.textContent = `${animal.name} (${animal.type})`;
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Remove';
          removeBtn.classList.add('remove-btn');
          removeBtn.addEventListener('click', () => {
            animals.splice(index, 1);
            displayAnimals();
          });
          li.appendChild(removeBtn);
          animalList.appendChild(li);
        });
    }
  
    addAnimal.addEventListener('click', () => {
      const name = newAnimalName.value.trim();
      const type = newAnimalType.value;
      if (name && type) {
        animals.push({ name, type });
        newAnimalName.value = '';
        newAnimalType.value = '';
        displayAnimals();
      }
    });
  
    searchAnimal.addEventListener('input', filterAnimals);
    filterType.addEventListener('change', filterAnimals);
    sortAnimals.addEventListener('click', () => {
      animals.sort((a, b) => a.name.localeCompare(b.name));
      displayAnimals();
    });
  
    displayAnimals();
  });