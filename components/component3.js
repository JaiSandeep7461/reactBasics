import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Component3(){

    return (
        <View style={{flex:1,backgroundColor:"plum", padding:60}}>
        <StatusBar backgroundColor="lightgreen"
            // barStyle="default"
            barStyle="light-content"
            hidden
        />
        </View>
    );

}