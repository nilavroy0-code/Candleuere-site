let cartCount = 0;

// Function to handle adding items to cart
function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    alert(productName + " has been added to your cart!");
}

// Optional: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});