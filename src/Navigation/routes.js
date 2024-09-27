import HomeScreen from "../screens/Dashboard/Home";

import MenuScreen from "../screens/Dashboard/Menu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
