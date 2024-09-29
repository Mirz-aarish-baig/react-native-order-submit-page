import HomeScreen from "../screens/Dashboard/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import splashscreen from "../screens/admin-panel/splashscreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
<Stack.Screen name="splashscreen" component={splashscreen} />  

      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
}

export default App;
