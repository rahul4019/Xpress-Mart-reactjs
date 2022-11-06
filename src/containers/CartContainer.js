import { connect } from 'react-redux';
import Cart from '../pages/Cart';
import { addToCart, removeFromCart } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
  removeFromCartHandler: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
