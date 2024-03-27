document.addEventListener('DOMContentLoaded', function() {
    updateCartContent();
    
    //to clear localStorage when leaving the cart page
    window.addEventListener('unload', function() {
        localStorage.removeItem('selectedSize');
    });
});

function updateCartContent() {
    // Retrieve selected size from localStorage
    var selectedSize = localStorage.getItem('selectedSize');
    var name = localStorage.getItem('productName');
    var cat = localStorage.getItem('productCat');
    var price = localStorage.getItem('productPrice');
    var img = localStorage.getItem('productImg');

    // Display selected size in the selectedSizeContainer element only if it's not null or undefined
    var selectedSizeContainer = document.getElementById('selectedSizeContainer');
    var productN = document.getElementById('productName');
    var productC = document.getElementById('productCat');
    var productP = document.getElementById('productPrice');
    var productI = document.getElementById('productImg');
    var quantitySection = document.getElementById('quantitySection');
    var deleteButton = document.getElementById('delete');
    var ImageSection = document.getElementById('section-left');
    var rS = document.getElementById('rs');
    var summary = document.getElementById('summary');
    var note = document.getElementById('note');
    
    if (selectedSizeContainer && selectedSize !== null && selectedSize !== undefined) {
        selectedSizeContainer.textContent = "Size: " + selectedSize;
        productN.textContent = name;
        productC.textContent = cat;
        productP.textContent = price;
        productI.setAttribute('src', img)
        quantitySection.style.display = 'block';
        deleteButton.style.display = 'block';
        ImageSection.style.display = 'block';
        rS.style.display = 'block';
        summary.style.display = 'block';
        note.style.display = 'block';
    } else {
        selectedSizeContainer.textContent = "There are no items in your cart";
        productN.textContent = "";
        productC.textContent = "";
        productP.textContent = "";
        productI.setAttribute('src', "");
        quantitySection.style.display = 'none';
        deleteButton.style.display = 'none';
        ImageSection.style.display = 'none';
        rS.style.display = 'none';
        summary.style.display = 'none';
        note.style.display = 'none';
         // Clear the content if size is null or undefined
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the delete button
    var deleteButton = document.getElementById('delete');
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            // Retrieve the parent element of cart-container-left-section
            var sectionLeft = document.getElementById('cart-container-left-section');
            var checkSec = document.getElementById('checkoutContainer');
            summary.style.display = 'none';
            note.style.display = 'none';
            // Remove the cart-container-left-section from the DOM
            sectionLeft.remove();
            checkSec.remove();
        });
    }
});
//total price
document.addEventListener("DOMContentLoaded", function() {
    // Get references to elements
    const quantitySelect = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("totalPrice");
    const productPriceElement = document.getElementById("productPrice");

    // Get the initial product price
    const initialProductPrice = parseInt(productPriceElement.textContent.replace(/,/g, ''));
    // Function to update total price
    
    function updateTotalPrice() {
        // Get the selected quantity
        const selectedQuantity = quantitySelect.value;

        // Calculate total price
        const totalPrice = (initialProductPrice * selectedQuantity);

        // Update the total price element
        totalPriceElement.textContent = "MRP : ₹ " + totalPrice; 
    }

    // Listen for changes in the quantity dropdown
    quantitySelect.addEventListener("change", updateTotalPrice);

    // Call updateTotalPrice initially to set the initial total price
    updateTotalPrice();
});

//place order
function generateTrackingID() {
    // Generate a random number between 1000 and 9999 (inclusive)
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }
function placeOrder() {
    // Select all input fields within the d-flex class
    const inputs = document.querySelectorAll('.d-flex input[type="text"], .d-flex input[type="tel"], .d-flex input[type="email"]');
    
    // Check if any of the input fields are empty
    let allFieldsFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFieldsFilled = false;
      }
    });
    const confirmationMsg = document.getElementById("confirmation-msg");
    // If all fields are filled, log "ordered", else log "fill all fields"
    if (allFieldsFilled) {
        window.location.href = '/pages/msg.html';
        // confirmationMsg.textContent = "Thank You! Your order is placed successfully and your Tracking ID is " + generateTrackingID();
      // Here you can place your order logic
    } else {
        confirmationMsg.textContent = "Please fill all the necessary details";
    }
  }
  
  // Attach click event listener to the "Place Order" button

  function checkoutSection() {
    const checkoutContainer = document.getElementById("checkoutContainer");
    checkoutContainer.style.display = "block";
  }

  // Add an event listener to listen for changes in input fields
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.credit-card input').forEach(function (input) {
        input.addEventListener('input', function () {
            validateInput(input);
        });
    });
});
const confirmationMsg = document.getElementById("confirmation-msg");
const tIDButton = document.getElementById("tIDButton");

 function tIdNo(){
    confirmationMsg.textContent =  "Your Tracking ID is " + generateTrackingID();
    tIDButton.removeAttribute("onclick");
 }