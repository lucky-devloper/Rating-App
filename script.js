const icon = document.querySelectorAll(".fa-star-o")

let currentTotalSelectedStar = -1

icon.forEach((staricon, index) => {
    staricon.dataset.rating = index + 1
    staricon.addEventListener('mouseover', handlemouseover)
    staricon.addEventListener('click', handleOnclick)
    staricon.addEventListener('mouseleave', handlemouseleave)
})

function handlemouseover(event) {
    const currentrating = event.target.dataset.rating;
    // console.log(currentrating);
    if (!currentrating) return
    else updaterating(currentrating)
}

function updaterating(getcurrentrating) {
    for (i = 0; i < 5; i++) {
        if (i < getcurrentrating) {
            icon[i].classList.replace('fa-star-o', 'fa-star')
        } else {
            icon[i].classList.replace('fa-star', 'fa-star-o')
        }
    }
}
function handleOnclick(event) {
    const currentrating = event.target.dataset.rating;
    currentTotalSelectedStar = currentrating
    document.querySelector("#star").innerHTML = `Given Rating : ${currentTotalSelectedStar}`
    updaterating(currentTotalSelectedStar)
}

function handlemouseleave(){
    updaterating(currentTotalSelectedStar)
}