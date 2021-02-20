import React, {Component} from "react";
import { Main, Courts, Login, Profile, Signup } from "./components/screens";
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";

const Tabs = createBottomTabNavigator({
  Map: Main,
  Profle: Profile,
  Courts: Courts
});

const IntroStack = createStackNavigator ({
  login: Login,
  signup: Signup
});

const MainStack = createSwitchNavigator({
    auth: IntroStack,
    Main: Tabs,
  
});

class App extends Component {
  render() {
    return <MainStack />;

    
  }
}

export default App;

