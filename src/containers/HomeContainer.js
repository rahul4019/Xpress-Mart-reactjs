import { connect } from 'react-redux';
import Home from '../pages/Home';
import { addToCart } from '../services/actions';

const mapStateToProps = (state) => ({
  products: state.products.products,
  cart: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
