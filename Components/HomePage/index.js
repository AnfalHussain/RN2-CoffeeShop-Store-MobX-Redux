import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

import { connect } from "react-redux";

import { getCoffeeShops } from "../../store/actions/coffeeActions.js"

import * as actionsCreators from "../../store/actions/"


class HomePage extends Component {

  async componentDidMount() {
    await this.props.getCoffeeShops();

  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(actionsCreators.getCoffeeShops()),

  };
};
export default connect(null, mapDispatchToProps)(HomePage);
