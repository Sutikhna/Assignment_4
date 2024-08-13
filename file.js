document.addEventListener('DOMContentLoaded', function() {
    // Hardcoded product data
    const productData = {
        title: "Amazing Product",
        description: "This product is really amazing and has many great features. You will love it!",
        price: "$29.99",
        discount: "20% OFF"
    };

    // Simulate loading delay
    setTimeout(function() {
        // Hide activity indicator
        document.getElementById('activity-indicator').style.display = 'none';
        
        // Display product content
        const productContent = document.getElementById('product-content');
        productContent.style.display = 'block';

        // Set product data
        document.getElementById('product-title').textContent = productData.title;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = `Price: ${productData.price}`;
        document.getElementById('product-discount').textContent = `Discount: ${productData.discount}`;
    }, 2000); // Simulate a 2-second loading time
});
