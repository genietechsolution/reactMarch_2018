import React, { Component } from 'react';
import './Products.css';
import { BrowserRouter as Router, Route, Link,NavLink  } from "react-router-dom";
import ProductInner from '../productsInner/ProductsInner';

class Products extends Component {
  constructor(){
    super();  
    this.state = {
      products: [],
    }; 

  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data =>{
     console.log(data);
    this.setState({ products: data });
    console.log(this.state.products);
  });

  }
 
  getProudcts(){
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data =>{
       console.log(data);
      this.setState({ products: data });
      console.log(this.state.products);
    })
    .catch(err =>{
      console.log("something went wrong");
    })
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
        <button onClick={()=> this.addProducts()}> add product </button>
       {products.map((product) =>
        <section class="page-section" key={product.id}>       
          <div class="container">
            <div class="product-item">
              <div class="product-item-title col-sm-6 col-sm-offset-3">
                <div class="bg-faded p-5  ml-auto rounded">
                  <h2 class="section-heading mb-0">
                    <span class="section-heading-upper">{product.name}</span>
                    <span class="section-heading-lower">{product.title}</span>                    
                  </h2>
                  <Link to={`/products/${product.id}`}>See more.. </Link>
                </div>
              </div>           
            </div>
          </div>
        </section>
      )} 
       <Route path={`/products/:id`} component={ProductInner} />

      </div>

   
    );
  }
}

export default Products;
