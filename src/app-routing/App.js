import React, { Component } from 'react';
import './App.css';
import  Helloworld from './helloworld/Helloworld';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/About';
import Header from './header/Header';
import Products from './products/Products';
import Store from './store/Store';
import Footer from './footer/Footer';
import Home from './home/Home';
import ProductInner from './productsInner/ProductsInner';



class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
           <div>
              <Header></Header>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/store" component={Store} />   
                  
            </div>
         </Router>
         <Footer/>
      </div>
    );
  }
}

export default App;
