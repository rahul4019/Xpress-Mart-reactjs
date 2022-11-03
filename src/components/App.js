import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import HomeContainer from '../containers/HomeContainer';
import { handleGetAllProducts } from '../services/actions';

class App extends React.Component {
  componentDidMount() {
    console.log('App props: ', this.props);
    this.props.dispatch(handleGetAllProducts());
  }

  render() {
    return (
      <>
        <Navbar />
        <HomeContainer />
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
