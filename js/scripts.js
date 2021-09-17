baguetteBox.run('#gallery');

let userInput = document.querySelector('.search');
let a = document.querySelectorAll('a');
let imageArray = Array.from(a);


const searchFilter = () => {
  for (i=0; i<imageArray.length; i++){
    let dataCaption = imageArray[i].getAttribute('data-caption').toLowerCase();


    if (dataCaption.includes(userInput.value.toLowerCase())){
      imageArray[i].style.display = 'block';
    } else {
      imageArray[i].style.display = 'none';
    }
  }
};
