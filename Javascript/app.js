fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        let catPhoto = document.createElement("img");
        let imageContainer = document.querySelector(".image-container");
        catPhoto.src = data[0].url;
        imageContainer.append(catPhoto);
        console.log(data);
    })

function catImage() {
    window.location.reload();
}
