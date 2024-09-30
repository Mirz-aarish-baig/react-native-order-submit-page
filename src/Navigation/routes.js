import { createNativeStackNavigator } from "@react-navigation/native-stack";
import splashscreen from "../screens/admin-panel/splashscreen";

import MenuScreen from "../screens/Dashboard/Menu";
import HomeScreen from "../screens/Dashboard/Home";
import Contact from "../screens/Dashboard/Contact";
import Profile from "../screens/Dashboard/Profile";
import Decline from "../screens/Dashboard/Declinereport";
import ForgotPsw from "../screens/Auth/ForgetPsw";

const Stack = createNativeStackNavigator();

const opt = { headerShown: false };

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splashscreen" component={splashscreen} options={opt} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={opt} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={opt} />
      <Stack.Screen name="Contact" component={Contact} options={opt} />
      <Stack.Screen name="Profile" component={Profile} options={opt} />
      <Stack.Screen name="Decline" component={Decline} options={opt} />
      <Stack.Screen name="ForgotPsw" component={ForgotPsw} options={opt} />
    </Stack.Navigator>
  );
}

export default App;
