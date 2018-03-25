import React, { Component } from 'react';
import './ProductsInner.css';


class ProductsInner extends Component {
  constructor(){
    super();  
    this.state = {
      products: [],
      pid:'',
      localProduct:[]
    }; 
  }
  getParam(){
//      this.props.match.params.redirectParam    
//    console.log(this.props)
    return this.props.match.params.id;
  };
  getProudcts(){
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data =>{
       console.log(data);
      this.setState({ products: data });
      console.log(this.state.products);
      var re =this.getParam();
      var ddata = this.state.products;
      var result = ddata.filter(function(el){
        return el.id==re;
      })[0];
      this.setState({ localProduct: result });
//      console.log(result);
    })
    .catch(err =>{
      console.log("something went wrong");
    })

  
   
//    console.log(result);
    
  } 
  componentDidMount(){
    this.getProudcts();
    }
  addProducts(){
    var data = {"name": "BLENDED TO PERFECTION",
    "title":"COFFEES & TEAS",
    "desc":"We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.",
    "path":"assets/img/products-01.jpg"}
    fetch('http://localhost:3000/products', {
      method: 'post',
      headers: {'Content-Type':'application/json'},      
      body: JSON.stringify(data)
     }).then((res)=> res.json())
     .then((data)=> {
       console.log(data);
       console.log("inserted properly");
     });
  };
  
  

  render() {
    const { products } = this.state;
    return (      
      <div> 
         <section class="page-section">       
          <div class="container">
            <div class="product-item">
              <div class="product-item-title d-flex">
                <div class="bg-faded p-5 d-flex ml-auto rounded">
                  <h2 class="section-heading mb-0">
                    <span class="section-heading-upper">{this.state.localProduct.name}</span>
                    <span class="section-heading-lower">{this.state.localProduct.title}</span>
                  </h2>
                </div>
              </div>
              <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={this.state.localProduct.path} alt=""/>
              <div class="product-item-description d-flex mr-auto">
                <div class="bg-faded p-5 rounded">
                  <p class="mb-0">{this.state.localProduct.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

   
    );
  }
}

export default ProductsInner;
