import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "../screens/Dashboard/Menu";
import HomeScreen from "../screens/Dashboard/Home";
import Contact from "../screens/Dashboard/Contact";
import Profile from "../screens/Dashboard/Profile";

const Stack = createNativeStackNavigator();

const opt = { headerShown: false };

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Menu" component={MenuScreen} options={opt} />
      <Stack.Screen name="Home" component={HomeScreen} options={opt} />
      <Stack.Screen name="Home" component={Profile} options={opt} />
      <Stack.Screen name="Contact Support" component={Contact} options={opt} />
    </Stack.Navigator>
  );
}

export default App;
