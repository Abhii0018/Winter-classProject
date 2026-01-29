let sel;

document.addEventListener('DOMContentLoaded', function() {
    sel = document.getElementById('productStore');
    
    
    fetchProductData('https://dummyjson.com/products')
        .then(data => {
            resolveData(data);
        })
        .catch(error => {
            sel.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
});

function resolveData(data) {
    const products = data.products;
    sel.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            
            <p class="product-price">Price: $${product.price}</p>
            <p class="product-rating">Rating: ${product.rating}/5</p>
        `;
        sel.appendChild(productCard);
    });
}

function fetchProductData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("data fetched successfully");
                resolve(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                reject(error);
            });
    });
}


fetchProductData('https://dummyjson.com/products')
    .then(data => {
        resolveData(data);
    })
    .catch(error => {
        sel.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    });
