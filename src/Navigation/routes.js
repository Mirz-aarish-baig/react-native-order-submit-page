import HomeScreen from "../screens/Dashboard/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactScreen from "../screens/Dashboard/Contact";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen  name="Contact Support" component={ContactScreen} />

    </Stack.Navigator>
  );
}

export default App;
