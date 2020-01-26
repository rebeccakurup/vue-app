var app = new Vue({
    el: '#app',
    data: {
        brand: 'Cozy Toes',
        product: 'Socks',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantID: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg',
                variantQuantity: 10,
            },
            {
                variantID: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg',
                variantQuantity: 0,
            }
        ],
        cart: 0,
        onSale: false
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        },
        subtractFromCart: function () {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
          if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
          }
            return  this.brand + ' ' + this.product + ' are not on sale'
        }
    }
})