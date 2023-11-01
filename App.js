import { View, Text, Image, ImageBackground ,ScrollView,Pressable} from "react-native";
import Component2 from "./component2";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>

  <Component2/>

   {/* <ScrollView>
   <Pressable onPress={()=>console.log("Image Pressed")}>
   <Component2/>
   </Pressable>
   <Image source={logoImg} style={{ width: 300, height: 300 }} />
    <Pressable onPress={()=>console.log("Text Pressed")}>
    <Text>
      Lorem ipsum dolor sit amet, bonorum reprimique has ad, paulo congue atomorum eam te. Assum recusabo dissentiet cum cu. Ne nec elit audiam consetetur, mea in munere contentiones. Ea docendi consulatu has.
      Qui eu delenit epicuri senserit, hinc interesset repudiandae ut eos. Ut nec ceteros erroribus patrioque, aeterno platonem ea vis. Qui te velit nonumy noluisse, nam in admodum delicatissimi, te vocent iriure mnesarchum qui. Causae discere et sed. His erat meliore mediocritatem ei.
      Offendit recteque usu id, sit no modus democritum vituperata. Stet eripuit his id, cu mei dicunt labitur partiendo. Quo laudem suscipiantur in, te vim augue facilis imperdiet, nostrud omittam rationibus ut vis. Ei posse labore disputando usu. Has nemore aliquip et. In nibh aperiam delectus vis, vel labitur singulis eu.
      Quo timeam virtute eu, cu cum nusquam euripidis definitiones, vis an everti nostrum fierent. Sea ad doming facilisi suavitate. Ad modo dolorum temporibus qui, et nam dico viuperatoribus, adhuc aperiri fabellas vis te. Cu facer zril signiferumque est. Nihil invenire conceptam pri ea. Appetere expetenda eos ut, eos magna intellegam theophrastus et, ne mea veri prima. Eu sea nostrud dolorum accusam.
      Natum propriae ad eum, cu eos atqui consequuntur, no nusquam petentium definitiones mea. Numquam expetenda accommodare vix te, ad latine prompta voluptaria est. Qui atqui euripidis at. No fuisset postulant eos, vim no tation dolorum evertitur, tota doming oportere in cum. Ex quo dicat ubique ignota, et quo erat ridens probatus, qui ei paulo intellegat.
    </Text>
    </Pressable>
    <Image source={logoImg} style={{ width: 300, height: 300 }} />

   </ScrollView> */}
  </View>;
}