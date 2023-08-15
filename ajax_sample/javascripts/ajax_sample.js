let number = 0;
let data = null;
let dataLoaded = false;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

async function fetchData() {
  if (!dataLoaded) {
    try {
      const response = await fetch('ajax.json');
      data = await response.json();
      dataLoaded = true;
    } catch (error) {
      console.error('Error al recuperar los datos:', error);
    }
  }
}

function changeVideo() {
  if (!data) {
    console.error('Los datos aún no se han recuperado.');
    return;
  }

  if (number >= 0 && number < data.length) {
    const item = data[number];
    titleArea.textContent = item.title;
    contentArea.textContent = item.content;
    videoArea.src = item.url;

    number = (number + 1) % data.length;
  }
}

window.onload = () => {
  fetchData();
  changeVideo();
};

button.addEventListener('click', changeVideo);
