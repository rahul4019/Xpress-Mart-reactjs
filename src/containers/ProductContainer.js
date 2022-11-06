import { connect } from 'react-redux';
import Product from '../pages/Product';
import { addToCart } from '../services/actions';

const mapStateToProps = (state) => ({
  allProducts: state.products.allProducts,
});

const mapDisppatchToProps = (dispatch) => ({
  addToCartHandler: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDisppatchToProps)(Product);
