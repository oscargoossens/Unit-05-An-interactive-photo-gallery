baguetteBox.run('.gallery');

let searchBar = document.getElementsByClassName('.search');
let a = document.querySelectorAll('a');


let searchArray = Array.from(searchBar);
let imageArray = Array.from(a);
let userLower = searchArray[0].getAttribute("value").toLowerCase();

const searchFilter = () => {
  for (i=0; i<imageArray.length; i++){
    let dataCaption = imageArray[i].getAttribute('data-caption').toLowerCase();

      if (dataCaption.includes(userInput)) {
        imageArray[i].style.display = 'block';
      } else {
        imageArray[i].style.display = 'none';
      }
    }
  };
