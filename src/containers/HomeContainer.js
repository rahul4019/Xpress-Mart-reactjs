import { connect } from 'react-redux';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(Home);
