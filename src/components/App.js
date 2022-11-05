import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import NavbarContainer from '../containers/NavbarContainer';
import HomeContainer from '../containers/HomeContainer';
import ProductContainer from '../containers/ProductContainer';
import AddProduct from '../pages/AddProduct';
import Cart from '../pages/Cart';

import { handleGetAllProducts } from '../services/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetAllProducts());
  }

  Page404 = () => {
    return <h1>404</h1>;
  };

  render() {
    return (
      <>
        <Router>
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/product/:id" element={<ProductContainer />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={this.Page404()} />
          </Routes>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
