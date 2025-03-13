document.addEventListener('click', function(e) {
    //The code that will be executed on click

    //save button element as a variable
    let img = document.getElementById('image1');

    //check if the click is on the first image
    if (e.target == img) {
        // if it is on the first image - execute this
        console.log('truuuuue');
    } else {
        //if not
        console.log('faaaalse');
    }
});

//set element with id image2 as variable
let img2 = document.querySelector('image2');

//event listener on image 2
document.querySelector('#image2').addEventListener('mouseover', function() {
    img2.style.border = "10px solid hotpink";
});

//set element with id image3 as variable
let math = document.querySelector('#image3');

//event listener on image 3
math.addEventListener('click', function() {
    let math = 1 + 1;
});

//log the sum of 1 + 1
console.log('the sum: ', math);

//event listener on image 4 where the image gets bigger when you click on it
document.querySelector('#image4').addEventListener('click', enlargen);

const enlargen = function() {
    document.querySelector('#image4').style.transform = "scale(1.2)";
};

// event listener on image 5. Should show a text that you clicked it
let imageFive = document.getElementById('#image5');

imageFive.addEventListener('click', function() {
    let text = imageFive.querySelector('p');
    text.innerHtml = 'You clicked me!';
});

// event listener on image 6. Should change image source.
let imgSix = document.querySelector('#image6');

imgSix.addEventListner('click', changePic);

function changePic() {
    imgSix.src = 'https://example.com/newimage.jpg';
}

let imgSix = document.querySelector('#image6');
