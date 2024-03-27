//js for carousel

let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;
  const slidesPerGroup = 3;

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  slideIndex = (slideIndex + n) % (totalSlides - slidesPerGroup + 1);
  if (slideIndex < 0) slideIndex = totalSlides - slidesPerGroup;

  const offset = -slideIndex * slideWidth;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;

  if (slideIndex === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (slideIndex === totalSlides - 3) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
}

//*********************************************************************************************************************//

//js for sort by btn feature

document.getElementById("sort-btn").addEventListener("click", function () {
  console.log("clicked");
  var dropdown = document.querySelector(".dropdown-content");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

document.getElementById("newest-option").addEventListener("click", function () {
  document.getElementById("sort-btn").textContent = "Sort By: Newest";
  // Add code to sort by newest
  document.querySelector(".dropdown-content").style.display = "none";
});

document.getElementById("high-to-low-option").addEventListener("click", function () {
  document.getElementById("sort-btn").textContent = "Sort By: Price High to Low";
  // Add code to sort by price high to low
  document.querySelector(".dropdown-content").style.display = "none";
});

document.getElementById("low-to-high-option").addEventListener("click", function () {
  document.getElementById("sort-btn").textContent = "Sort By: Price Low to High";
  // Add code to sort by price low to high
  document.querySelector(".dropdown-content").style.display = "none";
});

//*********************************************************************************************************************//

//js for carousel sliding functionality

let slidesIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show one slide base on index number
  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}

//*********************************************************************************************************************//

//js for selecting size in size box

function selectBox(box) {
  // Remove 'selected' class from all box elements
  var boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    box.classList.remove('selected');
  });

  // Add 'selected' class to the clicked box
  box.classList.add('selected');
}

//*********************************************************************************************************************//

//js for adding to cart

function addToCart() {
  var selectedBox = document.querySelector('.box.selected');
  var sizeErrorMessage = document.getElementById('sizeErrorMessage');
  var productName = document.getElementById('productName').textContent;
  var productCat = document.getElementById('productCat').textContent;
  var productPrice = document.getElementById('productPrice').textContent;
  var productImg = document.querySelector('.mySlides img').src;

  if (selectedBox) {
    var selectedSize = selectedBox.textContent;

    // Save selected size to localStorage (or any other preferred method)
    localStorage.setItem('selectedSize', selectedSize);
    localStorage.setItem('productName', productName);
    localStorage.setItem('productCat', productCat);
    localStorage.setItem('productPrice', productPrice);
    localStorage.setItem('productImg', productImg);

    // Redirect to the cart page
    window.location.href = '/pages/cart_page.html';
  } else {
    sizeErrorMessage.style.display = 'block';
  }
}

//*********************************************************************************************************************//
 
//js for printing msg while tracking

function submitMsg() {
  var trackingInput = document.querySelector('input[type="text"]').value;
  var trackingConfirmation = document.getElementById('trackingConfirmation');

  // Check if the input is a valid number and within the specified range
  if (!isNaN(trackingInput) && trackingInput >= 1000 && trackingInput <= 9999) {

    trackingConfirmation.innerText = "Your order is under process. It will be delivered in 4 - 9 business days.";
  } else {
    trackingConfirmation.innerText = "Enter a valid tracking ID.";
  }
}

//*********************************************************************************************************************//

//js for sorting function in mens page

function sortHighToLow(event) {
  event.preventDefault();

  // Sort items by price from high to low
  const mensItemsArray = Array.from(document.querySelectorAll(".mens-item-a"));
  mensItemsArray.sort((a, b) => {
    const priceA = parseInt(a.querySelector(".mens-item-price").innerText.replace(",", ""));
    const priceB = parseInt(b.querySelector(".mens-item-price").innerText.replace(",", ""));
    return priceB - priceA;
  });

  // Rearrange the sorted items
  const mensMain = document.querySelector(".mens-main");
  mensMain.innerHTML = "";
  mensItemsArray.forEach(item => {
    mensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function sortLowToHigh(event) {
  event.preventDefault();

  // Sort items by price from low to high
  const mensItemsArray = Array.from(document.querySelectorAll(".mens-item-a"));
  mensItemsArray.sort((a, b) => {
    const priceA = parseInt(a.querySelector(".mens-item-price").innerText.replace(",", ""));
    const priceB = parseInt(b.querySelector(".mens-item-price").innerText.replace(",", ""));
    return priceA - priceB;
  });

  // Rearrange the sorted items
  const mensMain = document.querySelector(".mens-main");
  mensMain.innerHTML = "";
  mensItemsArray.forEach(item => {
    mensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function sortNewest(event) {
  event.preventDefault();

  // Sort items by name alphabetically for newest 
  const mensItemsArray = Array.from(document.querySelectorAll(".mens-item-a"));
  mensItemsArray.sort((a, b) => {
    const nameA = a.querySelector(".mens-item-content h3").innerText.toLowerCase();
    const nameB = b.querySelector(".mens-item-content h3").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Rearrange the sorted items
  const mensMain = document.querySelector(".mens-main");
  mensMain.innerHTML = "";
  mensItemsArray.forEach(item => {
    mensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}

//*********************************************************************************************************************//

//js for sorting function in womens page

function wSortHighToLow(event) {
  event.preventDefault();

  // Sort items by price from high to low
  const womensItemsArray = Array.from(document.querySelectorAll(".womens-item-a"));
  womensItemsArray.sort((a, b) => {
    const priceC = parseInt(a.querySelector(".womens-item-price").innerText.replace(",", ""));
    const priceD = parseInt(b.querySelector(".womens-item-price").innerText.replace(",", ""));
    return priceD - priceC;
  });

  // Rearrange the sorted items
  const womensMain = document.querySelector(".womens-main");
  womensMain.innerHTML = "";
  womensItemsArray.forEach(item => {
    womensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function wSortLowToHigh(event) {
  event.preventDefault();

  // Sort items by price from low to high
  const womensItemsArray = Array.from(document.querySelectorAll(".womens-item-a"));
  womensItemsArray.sort((a, b) => {
    const priceC = parseInt(a.querySelector(".womens-item-price").innerText.replace(",", ""));
    const priceD = parseInt(b.querySelector(".womens-item-price").innerText.replace(",", ""));
    return priceC - priceD;
  });

  // Rearrange the sorted items
  const womensMain = document.querySelector(".womens-main");
  womensMain.innerHTML = "";
  womensItemsArray.forEach(item => {
    womensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function wSortNewest(event) {
  event.preventDefault();

  // Sort items by name alphabetically for newest
  const womensItemsArray = Array.from(document.querySelectorAll(".womens-item-a"));
  womensItemsArray.sort((a, b) => {
    const nameA = a.querySelector(".womens-item-content h3").innerText.toLowerCase();
    const nameB = b.querySelector(".womens-item-content h3").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Rearrange the sorted items
  const womensMain = document.querySelector(".womens-main");
  womensMain.innerHTML = "";
  womensItemsArray.forEach(item => {
    womensMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}

//*********************************************************************************************************************//

//js for sorting function in airmax page

function aSortHighToLow(event) {
  event.preventDefault();

  // Sort items by price from high to low
  const amItemsArray = Array.from(document.querySelectorAll(".airmax-item-a"));
  amItemsArray.sort((a, b) => {
    const priceE = parseInt(a.querySelector(".airmax-item-price").innerText.replace(",", ""));
    const priceF = parseInt(b.querySelector(".airmax-item-price").innerText.replace(",", ""));
    return priceF - priceE;
  });

  // Rearrange the sorted items
  const amMain = document.querySelector(".airmax-main");
  amMain.innerHTML = "";
  amItemsArray.forEach(item => {
    amMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function aSortLowToHigh(event) {
  event.preventDefault();

  // Sort items by price from low to high
  const amItemsArray = Array.from(document.querySelectorAll(".airmax-item-a"));
  amItemsArray.sort((a, b) => {
    const priceE = parseInt(a.querySelector(".airmax-item-price").innerText.replace(",", ""));
    const priceF = parseInt(b.querySelector(".airmax-item-price").innerText.replace(",", ""));
    return priceE - priceF;
  });

  // Rearrange the sorted items
  const amMain = document.querySelector(".airmax-main");
  amMain.innerHTML = "";
  amItemsArray.forEach(item => {
    amMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function aSortNewest(event) {
  event.preventDefault();

  // Sort items by name alphabetically for newest
  const amItemsArray = Array.from(document.querySelectorAll(".airmax-item-a"));
  amItemsArray.sort((a, b) => {
    const nameA = a.querySelector(".airmax-item-content h3").innerText.toLowerCase();
    const nameB = b.querySelector(".airmax-item-content h3").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Rearrange the sorted items
  const amMain = document.querySelector(".airmax-main");
  amMain.innerHTML = "";
  amItemsArray.forEach(item => {
    amMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}

//*********************************************************************************************************************//

//js for sorting function in sports page

function sPSortHighToLow(event) {
  event.preventDefault();

  // Sort items by price from high to low
  const spItemsArray = Array.from(document.querySelectorAll(".sport-shoes-item-a"));
  spItemsArray.sort((a, b) => {
    const priceG = parseInt(a.querySelector(".sport-shoes-item-price").innerText.replace(",", ""));
    const priceH = parseInt(b.querySelector(".sport-shoes-item-price").innerText.replace(",", ""));
    return priceH - priceG;
  });

  // Rearrange the sorted items
  const spMain = document.querySelector(".sport-shoes-main");
  spMain.innerHTML = "";
  spItemsArray.forEach(item => {
    spMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function sPSortLowToHigh(event) {
  event.preventDefault();

  // Sort items by price from low to high
  const spItemsArray = Array.from(document.querySelectorAll(".sport-shoes-item-a"));
  spItemsArray.sort((a, b) => {
    const priceG = parseInt(a.querySelector(".sport-shoes-item-price").innerText.replace(",", ""));
    const priceH = parseInt(b.querySelector(".sport-shoes-item-price").innerText.replace(",", ""));
    return priceG - priceH;
  });

  // Rearrange the sorted items
  const spMain = document.querySelector(".sport-shoes-main");
  spMain.innerHTML = "";
  spItemsArray.forEach(item => {
    spMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function sPSortNewest(event) {
  event.preventDefault();

  // Sort items by name alphabetically for newest 
  const spItemsArray = Array.from(document.querySelectorAll(".sport-shoes-item-a"));
  spItemsArray.sort((a, b) => {
    const nameA = a.querySelector(".sport-shoes-item-content h3").innerText.toLowerCase();
    const nameB = b.querySelector(".sport-shoes-item-content h3").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Rearrange the sorted items
  const spMain = document.querySelector(".sport-shoes-main");
  spMain.innerHTML = "";
  spItemsArray.forEach(item => {
    spMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}

//*********************************************************************************************************************//

//js for sorting function in sale page

function saleSortHighToLow(event) {
  event.preventDefault();

  // Sort items by price from high to low
  const saleItemsArray = Array.from(document.querySelectorAll(".sale-item-a"));
  saleItemsArray.sort((a, b) => {
    const priceI = parseInt(a.querySelector(".sale-item-price").innerText.replace(",", ""));
    const priceJ = parseInt(b.querySelector(".sale-item-price").innerText.replace(",", ""));
    return priceJ - priceI;
  });

  // Rearrange the sorted items
  const saleMain = document.querySelector(".sale-main");
  saleMain.innerHTML = "";
  saleItemsArray.forEach(item => {
    saleMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function saleSortLowToHigh(event) {
  event.preventDefault();

  // Sort items by price from low to high
  const saleItemsArray = Array.from(document.querySelectorAll(".sale-item-a"));
  saleItemsArray.sort((a, b) => {
    const priceI = parseInt(a.querySelector(".sale-item-price").innerText.replace(",", ""));
    const priceJ = parseInt(b.querySelector(".sale-item-price").innerText.replace(",", ""));
    return priceI - priceJ;
  });

  // Rearrange the sorted items
  const saleMain = document.querySelector(".sale-main");
  saleMain.innerHTML = "";
  saleItemsArray.forEach(item => {
    saleMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
function saleSortNewest(event) {
  event.preventDefault();

  // Sort items by name alphabetically for newest
  const saleItemsArray = Array.from(document.querySelectorAll(".sale-item-a"));
  saleItemsArray.sort((a, b) => {
    const nameA = a.querySelector(".sale-item-content h3").innerText.toLowerCase();
    const nameB = b.querySelector(".sale-item-content h3").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Rearrange the sorted items
  const saleMain = document.querySelector(".sale-main");
  saleMain.innerHTML = "";
  saleItemsArray.forEach(item => {
    saleMain.appendChild(item.cloneNode(true)); // Clone the item
  });
}
