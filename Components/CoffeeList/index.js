import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";



// Component
import CoffeeItem from "./CoffeeItem";
import { connect } from "react-redux";

class CoffeeList extends Component {

  render() {
    let shops;
    if (this.props.coffeeshops) {
      shops = this.props.coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  coffeeShops: state.rootCoffee.coffeeShops,
});
export default connect(mapStateToProps)(CoffeeList);
