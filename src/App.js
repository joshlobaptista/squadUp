import React, {Component} from "react";
import { Main } from "./components/screens";
import { createMaterialTopTabNavigator } from "react-navigation";
import { Courts } from "./components/screens";
import { Profile } from "./components/screens";

const Tabs = createMaterialTopTabNavigator(
  {
    Nearby: Main,
    Search: Main,
    Me: Profile,
    Courts: Courts
  },
  {}
);

export default class App extends Component {
  render() {
    return <Tabs />
      
  }
}

