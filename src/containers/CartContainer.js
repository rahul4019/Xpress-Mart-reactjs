import { connect } from 'react-redux';
import Cart from '../pages/Cart';
import { addToCart } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
