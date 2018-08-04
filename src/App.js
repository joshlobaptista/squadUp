import React, {Component} from "react";
import { Main } from "./components/screens";
import { TabNavigator } from "react-navigation";

const Tabs = TabNavigator(
  {
    Nearby: Main,
    Search: Main,
    Me: Main,
    Courts: Main,
    More: Main
  },
  {}
);

export default class App extends Component {
  render() {
    return <Tabs />;
    
  }
}

