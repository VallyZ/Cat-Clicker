let container = document.querySelector('.container');
var container1 = document.createElement('div');
container1.className = 'left';
var container2 = document.createElement('div');
container2.className = 'right';
container.appendChild(container1);
container.appendChild(container2);

let arrayImg = ['img/cat1.jpeg', 'img/cat2.jpeg', 'img/cat3.jpeg', 'img/cat4.jpeg', 'img/cat5.jpeg'];
let arrayAlt = [' Cat 1', ' Cat 2', ' Cat 3', ' Cat 4', ' Cat 5'];

let z, x;
var selectedCat = [];

function cat() {
  for (j = 0; j < arrayImg.length; j++) {
    z = arrayImg[j];
    x = arrayAlt[j];
    //Create,Style,Append div to the container on the left
    var div = document.createElement('div');
    div.style.cssText = 'width: 100%';
    div.className = 'img';
    container1.appendChild(div);
    //Create catname,Append to its div
    var name = document.createElement('h2');
    div.appendChild(name);
    name.innerHTML = x;
    //Create cat img,style,append to its div
    var img = document.createElement('img');
    img.style.cssText = 'width: 100%';
    img.setAttribute('src', z);
    img.setAttribute('alt', x);
    div.appendChild(img);
    //Add event listener to all cat img,
    img.addEventListener('click', (function(z, x) {
      return function() {
        //Create own divs for the selected cats
        var anotherDiv = document.createElement('div');
        anotherDiv.className = 'thisCat';
        container2.appendChild(anotherDiv);
        //Create a blank img space
        var newImg = document.createElement('img');
        //Select the clicked img and show it in the right side container
        newImg.setAttribute('src', z);
        newImg.className = 'clickable';
        anotherDiv.appendChild(newImg);
        /*Store the cat div in an array because every time a cat from the left
          list is selected, it ads it to the right and creates a list of all
          the selected cats*/
        selectedCat.push(anotherDiv);
        //Only the last selected cat is shown on the right
        if (selectedCat.length > 1) {
          var right = document.querySelector('.right');
          right.removeChild(right.childNodes[0]);
        };
        //Create the text for the clicking
        var newDiv = document.createElement('div');
        anotherDiv.appendChild(newDiv);
        var newText = document.createElement('h1');
        newText.innerHTML = 'The cat has been clicked this many times:';
        newDiv.style.cssText = "width:100%; text-align: center";
        newDiv.appendChild(newText);
        //Call the function that counts the amount of clicks
        clickable();

        console.log(z + x);
      };
    })(z, x, ));
  };
};

cat();

function clickable() {
  var clickable = document.querySelector('.clickable');
  //Create the number
  var span = document.createElement('span');
  span.innerHTML = 0;
  var newText = $('h1');
  newText.append(span);
  //Number +1 for every click on the right side image
  document.addEventListener('click', function(e) {
    if (e.target.className === 'clickable') {
      span.innerHTML++;
    };
  });
};