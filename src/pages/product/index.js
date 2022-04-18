import React from "react";
import ProductService from "../../stores/productService";

const initialState = {
  name: '',
  sku: '',
  description: '',
  price: 0,
  provider: '',
  sucess: false,
  error: []
}

class Product extends React.Component{

  state = initialState;

  constructor(){
    super()
    this.service = new ProductService();
  }

  onChange = (event)=>{
    const value = event.target.value;
    const fieldName = event.target.name;

    this.setState({
      [fieldName] : value
    })
  }

  onSubmit = ()=>{

    const product = {
      name: this.state.name,
      sku: this.state.sku,
      description: this.state.description,
      price: this.state.price,
      provider: this.state.provider,
    }

    try {
      //call the service's save function ProductService, passing the parameter product
      this.service.save(product);
      this.clearFields();
      this.setState({ sucess: true })

    } catch (error) {
      const errors = error.error
      this.setState({ error : errors})
    }
    

  }

  clearFields = ()=>{
    this.setState(initialState)
    console.log(this.state)
  }


  render(){
    return(
      <>
        <div className="container">

          <div className="card border-primary mt-5 mb-3" >
              <div className="card-header">Register Product</div>
              <div className="card-body">

                {this.state.sucess && 
                  <div className="alert alert-dismissible alert-success">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong> Cadastro realizado com sucesso </strong>
                  </div>
                }

                {this.state.error.length > 0 && 
                  this.state.error.map( msg => {
                    return(
                      <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong> Error ! </strong> {msg}
                      </div>
                    )
                  })
                }

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>*Name</label>
                      <input type="text" 
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>*SKU</label>
                      <input type="text" 
                        className="form-control" 
                        name="sku"
                        value={this.state.sku}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>*Product Description</label>
                      <textarea className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>*Price</label>
                      <input type="text" 
                        className="form-control"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>*Provider</label>
                      <input type="text" 
                        className="form-control" 
                        name="provider"
                        value={this.state.provider}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-1">
                    <button className="btn btn-success" onClick={this.onSubmit}>Salve</button>
                  </div>
                  <div className="col-md-1">
                    <button className="btn btn-primary" onClick={this.clearFields}>Clear</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        
      </>
    )
  }
}
export default Product