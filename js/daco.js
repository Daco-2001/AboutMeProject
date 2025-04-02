const arrayImages = document.getElementsByClassName("imgContainer");
console.log(arrayImages);
var position = 0;
function nextSlide() {
    position++;
    let previousPosition = position - 1;
    console.log("Mi valor position es: " + position);
    console.log(arrayImages.length);
    for (let i = 0; i < arrayImages.length; i++) {
        arrayImages[previousPosition].classList.remove("increaseOpacityElement");
        console.log("Index: " + i);
        if (position == 3) {
            console.log("hacemos animacion in position three");
            arrayImages[0].classList.remove("reduceOpacity");
            arrayImages[previousPosition].classList.add("reduceOpacity");
            setTimeout(() => {
                arrayImages[previousPosition].style.display = "none"
                arrayImages[previousPosition].classList.remove("reduceOpacity");
                arrayImages[0].style.display = "block";
                arrayImages[position].classList.add("increaseOpacityElement");
                /* arrayImages[position].classList.remove("increaseOpacityElement");   */
            }, 450);
            position = 0;
            return
        } 
        if (i == position) {
            console.log("This is the position: " + position + " this is the index " + position)
            console.log("hacemos animacion before  three");
            arrayImages[previousPosition].classList.add("reduceOpacity");
        } else {
            setTimeout(() => {
                arrayImages[previousPosition].classList.toggle("increaseOpacityElement");
                arrayImages[previousPosition].style.display = "none";
                arrayImages[previousPosition].classList.remove("reduceOpacity");
                arrayImages[position].style.display = "block";
                arrayImages[position].classList.add("increaseOpacityElement");
                /* arrayImages[position].innerHTML = arrayImages[previousPosition].innerHTML; */
            }, 1000);
            console.log("remove opacity");
        }
        
    }
}

function backSlide() {
    console.log("Welcome to back slide");
    
    position = position - 1;
    if (position < 0) {
        alert("We can't to show more slides to the left, you are in first slide");
        return;
    }
    console.log("Position in backSlide " + position);
    for (let i = 0; i < arrayImages.length; i++) {
        if (i == position) {
            arrayImages[i].style.display = "block";
        } else {
            arrayImages[i].style.display = "none";
        }
    }
}

function disableSlides() {
    for (let i = 0; i < arrayImages.length; i++) {
        if (i == 0) {
            arrayImages[i].style.display = "block";
        } else {
            arrayImages[i].style.display = "none";
        }
    }
}
disableSlides();