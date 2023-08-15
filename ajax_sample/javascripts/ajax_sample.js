let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

async function fetchData() {
  console.log('kjhmgfb');
  if (data) {
    console.log('kjhmgfb');
    try {
      
      const response = await fetch('ajax.json');
      data = await response.json();
    } catch (error) {
      console.log('kjhmgfb');
      console.error('Error al recuperar los datos:', error);
    }
  }
}

function changeVideo() {
  if (!data) {
    console.error('Los datos aún no se han recuperado.');
    return;
  }

  // Verificar si el número está dentro del rango válido de índices
  if (number >= 0 && number < data.length) {
    const item = data[number];
    titleArea.textContent = item.title;
    contentArea.textContent = item.content;

    // Establecer la URL del video en el atributo src del iframe
    videoArea.src = item.url;

    number = (number + 1) % data.length;
  }
}

window.onload = () => {
  fetchData();
  changeVideo();
};

button.addEventListener('click', changeVideo);
