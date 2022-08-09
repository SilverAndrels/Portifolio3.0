const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

const fetchDadosNasa = async () => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.url;
  document.getElementById("explanation").textContent = data.explanation;
};

fetchDadosNasa();
