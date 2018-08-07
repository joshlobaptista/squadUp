import React, {Component} from "react";
import { Main } from "./components/screens";
import { createBottomTabNavigator } from "react-navigation";
import { Courts } from "./components/screens";
import { Profile } from "./components/screens";

const Tabs = createBottomTabNavigator(
  {
    Me: Profile,
    Search: Main,
    Nearby: Main,
    Courts: Courts
  },
  {}
);

export default class App extends Component {
  render() {
    return <Tabs />;

    
  }
}

