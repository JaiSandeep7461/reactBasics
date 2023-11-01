import { Button, View } from "react-native";

export default function Component2() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>

            <Button title="Press" 
            onPress={() => console.log("Button Pressed")}
            color="midnightblue"
            disabled
             />

        </View>
    );
}