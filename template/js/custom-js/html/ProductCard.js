import {
  i19addToFavorites,
  i19buy,
  i19connectionErrorProductMsg,
  i19outOfStock,
  i19unavailable
} from '@ecomplus/i18n'

import {
  i18n,
  name as getName,
  inStock as checkInStock,
  onPromotion as checkOnPromotion,
  price as getPrice,
  variationsGrids as getVariationsGrids
} from '@ecomplus/utils'

import Vue from 'vue'
import { store } from '@ecomplus/client'
import ecomCart from '@ecomplus/shopping-cart'
import ALink from '@ecomplus/storefront-components/src/ALink.vue'
import APicture from '@ecomplus/storefront-components/src/APicture.vue'
import APrices from '@ecomplus/storefront-components/src/APrices.vue'
import ecomPassport from '@ecomplus/passport-client'
import { toggleFavorite, checkFavorite } from '@ecomplus/storefront-components/src/js/helpers/favorite-products'

const getExternalHtml = (varName, product) => {
  if (typeof window === 'object') {
    varName = `productCard${varName}Html`
    const html = typeof window[varName] === 'function'
      ? window[varName](product)
      : window[varName]
    if (typeof html === 'string') {
      return html
    }
  }
  return undefined
}

export default {
  name: 'ProductCard',

  components: {
    ALink,
    APicture,
    APrices
  },

  props: {
    product: Object,
    productId: String,
    isSmall: Boolean,
    headingTag: {
      type: String,
      default: 'h3'
    },
    buyText: String,
    transitionClass: {
      type: String,
      default: 'animated fadeIn'
    },
    canAddToCart: {
      type: Boolean,
      default: true
    },
    ecomPassport: {
      type: Object,
      default () {
        return ecomPassport
      }
    },
    accountUrl: {
      type: String,
      default: '/app/#/account/'
    },
    isLoaded: Boolean,
    installmentsOption: Object,
    discountOption: Object
  },

  data () {
    return {
      body: {},
      isLoading: false,
      isWaitingBuy: false,
      isHovered: false,
      isFavorite: false,
      selectedPicture:false,
      variationImagesKey: Math.random().toString(),
      apx_tags: [],
      apx_productTags:{},
      rng:Math.random().toString(),
      error: '',
      selectedColor:false
    }
  },

  computed: {
    i19addToFavorites: () => i18n(i19addToFavorites),
    i19outOfStock: () => i18n(i19outOfStock),
    i19unavailable: () => i18n(i19unavailable),
    i19uponRequest: () => 'Sob consulta',

    isWithoutPrice () {
      return !getPrice(this.body)
    },

    ratingHtml () {
      return getExternalHtml('Rating', this.body)
    },

    buyHtml () {
      return getExternalHtml('Buy', this.body)
    },

    footerHtml () {
      return getExternalHtml('Footer', this.body)
    },

    name () {
      //let small_text = ['Óculos Solar','Óculos de Grau'];
      let title = getName(this.body);
      // let small_title = "";
      // for(let i = 0; i <  small_text.length; i++){
      //   if(title.includes(small_text[i])){
      //     title = title.replace(small_text[i],'');
      //     small_title = "<small>"+ small_text[i] +"</small>"
      //   }
      // }
      //console.log(title, small_text, small_title)
      //return (small_title + title)
      return title
    },

    strBuy () {
      return this.buyText ||
        (typeof window === 'object' && window.productCardBuyText) ||
        i18n(i19buy)
    },

    isInStock () {
      return checkInStock(this.body)
    },

    isActive () {
      return this.body.available && this.body.visible && this.isInStock
    },

    isLogged () {
      return ecomPassport.checkAuthorization()
    },

    discount () {
      const { body } = this
      return checkOnPromotion(body)
        ? Math.round(((body.base_price - getPrice(body)) * 100) / body.base_price)
        : 0
    }
  },

  methods: {
    getTags(){
      return this.apx_productTags
    },
    setTags(){
      let tags = [];
      
      if(this.body.categories){
        let terms = this.body.categories.map(item => 'cat_' + item._id)
        terms.push(this.body.sku)
        this.apx_tags.filter(el => terms.some(term => el.identificador.includes(term))).forEach(item => {
          if(!this.apx_productTags[item.type]){
            this.apx_productTags[item.type] = []

          }
          this.apx_productTags[item.type] = [...this.apx_productTags[item.type], item]
        })

        this.apx_productTags = {...this.apx_productTags}
        
        if(this.body.quantity < 10){
          this.apx_productTags['top_left'] = []  // Array
        }
        if(this.apx_productTags['top_left']){  // Acesso pelo índice 0
          this.apx_productTags['top_left'].push({"identificador":[this.body.sku],type:"top_left",title:"Últimas Unidades",description:"",color:"red",border:"red"})
        }

       // {"top_left":[{"identificador":["LBS0060","MGI0052","MGI0055","POL0126","TR0032","LBS0036","LBS0050","LBS0058","LBS0099","LBS0110","LBS0112","LBS0108","MGI0066","MGI0054","MGI0053","POL0115","POL0111","MGI0064","LBS0042","MG1731","MGI0044","MGI0050","MGI0057","POL0217","POL0183","POL0182","POL0181","POL0176","POL0159","POL0149","POL0160","POL0201","POL0162","LBS0116-C1","LBS0115","LBS0114","LBS0103","LBS0061","LBS0023","TR0031","TR0009"],"type":"top_left","title":"Polarizado","description":"Texto explicativo aqui, não aparece na lista","color":"#000000","border":"#000000"}]}

        console.log('tags', JSON.stringify(this.apx_productTags))
      }

    },
    setListingItemImages(color){
      let variation = this.body.variations.find(el => el.specifications.colors.some(el => el.text === color))
      let variationImage = false;
      if (variation.picture_id) {
        variationImage = this.body.pictures.find(el => el._id == variation.picture_id)
      }
      this.selectedPicture = variationImage
      this.variationImagesKey = Math.random().toString()
      this.selectedColor = color
    },
    getCMSPropInfo(color){
      return window.apx_properties.find(el => el.title.trim() == color.trim())
    },
    getHexColor(color){
      console.log(this.body.variations)
      let hex = this.body.variations.find(el => el.specifications.colors.some(el => el.text.trim().toLowerCase() === color.trim().toLowerCase()))
      return hex      
    },
    setBody (data) {
      this.body = Object.assign({}, data)
      //console.log(this.body)
      delete this.body.body_html
      delete this.body.body_text
      delete this.body.inventory_records
      delete this.body.price_change_records
      this.isFavorite = checkFavorite(this.body._id, this.ecomPassport)
      this.body.variationsGrids = getVariationsGrids(this.body, {}, true)
    },

    fetchItem () {
      if (this.productId) {
        this.isLoading = true
        store({ url: `/products/${this.productId}.json` })
          .then(({ data }) => {
            this.$emit('update:product', data)
            this.setBody(data)
            this.$emit('update:is-loaded', true)
          })
          .catch(err => {
            console.error(err)
            if (!this.body.name || !this.body.slug || !this.body.pictures) {
              this.error = i18n(i19connectionErrorProductMsg)
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
    isMobile(){
      return window.innerWidth < 990 
    },

    toggleFavorite () {
      //if (this.isLogged) {
        this.isFavorite = toggleFavorite(this.body._id, this.ecomPassport)
      //}
    },

    buy () {
      const product = this.body
      this.$emit('buy', { product })
      if (this.canAddToCart) {
        this.isWaitingBuy = true
        store({ url: `/products/${product._id}.json` })
          .then(({ data }) => {
            const selectFields = ['variations', 'customizations', 'kit_composition']
            for (let i = 0; i < selectFields.length; i++) {
              const selectOptions = data[selectFields[i]]
              if (selectOptions && selectOptions.length) {
                return import('@ecomplus/storefront-components/src/ProductQuickview.vue')
                  .then(quickview => {
                    new Vue({
                      render: h => h(quickview.default, {
                        props: {
                          product: data
                        }
                      })
                    }).$mount(this.$refs.quickview)
                  })
              }
            }
            const { quantity, price } = data
            ecomCart.addProduct({ ...product, quantity, price })
          })
          .catch(err => {
            console.error(err)
            window.location = `/${product.slug}`
          })
          .finally(() => {
            this.isWaitingBuy = false
          })
      }
    }
  },

  created () {
    if (this.product) {
      this.setBody(this.product)
      if (this.product.available === undefined) {
        this.body.available = true
      }
      if (this.product.visible === undefined) {
        this.body.visible = true
      }
    }
    if (!this.isLoaded) {
      this.fetchItem()
    }

    //window.productListColors(this.body._id)
  },
  mounted(){
    this.apx_tags = [...window.apx_tags]
    this.setTags()
    //window.productListColors(this.body._id)
  }
}