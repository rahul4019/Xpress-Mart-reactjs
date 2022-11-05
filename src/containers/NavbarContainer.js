import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  cart: state.cartItems,
});

export default connect(mapStateToProps)(Navbar);
