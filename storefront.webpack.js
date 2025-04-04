const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.html'),   
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.js'),   
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.html'),   
      './js/ProductGallery.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.js'),   
      './scss/ProductGallery.scss': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.scss'),   
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),   
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.js'),   
      './html/ProductVariations.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductVariations.html'),   
      './js/ProductVariations.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductVariations.js'),   
      './html/SearchEngine.html': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.html'),   
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.js'),   
      './html/InstantSearch.html': path.resolve(__dirname, 'template/js/custom-js/html/InstantSearch.html'),   
      './js/InstantSearch.js': path.resolve(__dirname, 'template/js/custom-js/html/InstantSearch.js'),   
      './html/ItemCustomizations.html': path.resolve(__dirname, 'template/js/custom-js/html/ItemCustomizations.html'),   
      './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html'),   
      './js/AccountForm.js': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.js'),   
    //   './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html'),   
    //   './html/CartItem.html': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.html'),   
    //   './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCart.html'),   
    //   './html/EcSummary.html': path.resolve(__dirname, 'template/js/custom-js/html/EcSummary.html'),  
    //   './html/QuantitySelector.html': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.html'),   
    //   './js/QuantitySelector.js': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.js'),   
       './html/CartQuickview.html': path.resolve(__dirname, 'template/js/custom-js/html/CartQuickview.html'),   
    './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCart.html'),   
    './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.html'),   
    './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.js'),   
    './html/PaymentMethods.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentMethods.html'),   
    './App.vue': path.resolve(__dirname, 'template/js/custom-js/html/App.vue'),   
   './helpers/favorite-products': path.resolve(__dirname, 'template/js/custom-js/html/favorite-products.js'),   
      './helpers/favorite-products.js': path.resolve(__dirname, 'template/js/custom-js/html/favorite-products.js'),   
      '@ecomplus/storefront-components/src/js/helpers/favorite-products': path.resolve(__dirname, 'template/js/custom-js/html/favorite-products.js'), 
    }
  }
})
