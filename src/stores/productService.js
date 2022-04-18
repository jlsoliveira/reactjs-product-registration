const PRODUCTS = "_PRODUCTS"

export function ErrorValidate (error){
  this.error = error;
}
export default class ProductService {

  validateFields = (product) =>{
    const error = []

    if(!product.name){
      error.push('The Name field is required');
    }

    if(!product.sku){
      error.push('The Sku field is required');
    }

    if(!product.description){
      error.push('The Description field is required');
    }

    if(!product.price || product.price <= 0){
      error.push('The price field is mandatory and cannot be zero');
    }

    if(!product.provider){
      error.push('The Provider field is required');
    }

    if (error.length > 0){
      throw new ErrorValidate(error)
    }
    

  }


  getProducts = () => {
    //get product
    let products = localStorage.getItem(PRODUCTS)

    return JSON.parse(products)
  }

  getIndex = (sku) => {
    let index = null

    this.getProducts().forEach((product, i) => {
      if(product.sku === sku ){
        index = i;
      }
    });

    return index;
  }

  deleteProduct = (sku) => {
    const index = this.getIndex(sku);

    if (index !== null){
      const products = this.getProducts();
      products.splice(index, 1);
      localStorage.setItem(PRODUCTS, JSON.stringify(products));
      return products
    }
    
  }

  save = (product) =>{

    this.validateFields(product);

    //get product
    let products = localStorage.getItem(PRODUCTS)


    if(!products){
      // if it does not have a product, product receives empty array
      products = []
    }else{
      // if it has product, convert the string into an array
      products = JSON.parse(products)
    }

    // add product to array products
    products.push(product)

    // setItem localStorage, first conver array to string, then set the item in localStorage
    localStorage.setItem(PRODUCTS, JSON.stringify(products))

  } 

}