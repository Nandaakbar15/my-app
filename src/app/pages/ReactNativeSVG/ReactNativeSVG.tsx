import { Text, View } from "react-native";

import HealthServer from "../../../assets/images/healty-server.svg";

export default function ReactNativeSVG() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        Belajar pake SVG di React Native
      </Text>

      <View style={{ marginTop: 20 }}>
        <HealthServer width={244} height={125} />

        <Text style={{ marginLeft: 20 }}>
          Ini adalah gambar dalam format svg
        </Text>
      </View>
    </View>
  );
}
