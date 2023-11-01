import { View, Text, Image, ImageBackground ,ScrollView} from "react-native";
import Component2 from "./component2";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>

   <Component2/>
  </View>;
}