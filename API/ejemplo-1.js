

// fetch('https://epic.gsfc.nasa.gov/api/natural')
// .then(response => response.json())
// .then(data => console.log(data))

const app = document.getElementById('app');

function getImagesFromNasa() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
        .then(function (response) {
            return response.json();
        })
}

getImagesFromNasa()
.then(function(info) {
    console.log(info)

    info.forEach(function(imageElem) {
        const img = document.createElement('img');
        img.src = getImageUrl(imageElem);
        img.alt = imageElem.caption

        app.appendChild(img)
    })
})


function getImageUrl(infoImage) {
    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
    const date = infoImage.date
        .substr(0, 10)
        .split('-')

    return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${infoImage.image}.png`
}
