import { connect } from 'react-redux';
import Product from '../pages/Product';

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(Product);
