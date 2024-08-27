const people = ["Juan Pérez", "María García", "Pedro Fernández", "Ana López", "Luis González", "Sofía Martín"];

// Renderizar la lista de personas
const ul = document.getElementById('personList');
ul.innerHTML = people.map(person => `<li>${person}</li>`).join('');

// Añadir el evento de búsqueda
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    const lis = ul.getElementsByTagName('li');
    
    Array.from(lis).forEach(li => {
        const text = li.textContent.toLowerCase();
        if (text.includes(filter)) {
            li.classList.remove('hidden');
        } else {
            li.classList.add('hidden');
        }
    });
});
