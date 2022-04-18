import React from "react";
import ProductService from "../../stores/productService";


class SearchProduct extends React.Component {


  state = {
    products: []
  }

  constructor(){
    super()
    this.service = new ProductService();
  }

  componentDidMount(){
    const products = this.service.getProducts()
    this.setState({
      products
    })
  }


  editProduct = (sku) => {
    //this.props.navigation.navigate(`/product/${sku}`)
  }

  deleteProduct = (sku) => {
    const products = this.service.deleteProduct(sku);
    //this.setState({products})
    
  }

  render(){
    return(
      <>
        <div className="container">
          <div className="card border-primary mt-5 mb-3" >
            <div className="card-header">Search Product</div>
            <div className="card-body">
              <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Sku</th>
                      <th scope="col">Price</th>
                      <th scope="col">Provider</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map( (product, index) => {
                        return(
                          <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.price}</td>
                            <td>{product.provider}</td>
                            <td>
                              <button className="btn btn-primary" onClick={this.editProduct(product.sku)}> Edit</button>
                              <button className="btn btn-danger" onClick={this.deleteProduct(product.sku)}> Delete</button>
                            </td>
                          </tr>
                        )
                      }) 
                    }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}

export default SearchProduct
