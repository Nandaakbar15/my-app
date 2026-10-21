import { Image, StyleSheet, Text, View } from "react-native";

import cart from "../assets/images/cart icon.png";

export default function PositionComponent() {
  return (
    <View style={styles.wrapper}>
      <Text style={{ marginBottom: 30, fontWeight: "bold" }}>
        Belajar Position
      </Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notification}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconCart: { width: 50, height: 50 },
  wrapper: { padding: 20, marginTop: 50, alignItems: "center" },
  cartWrapper: {
    borderWidth: 1,
    borderColor: "#4398D1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: { fontSize: 12, color: "#777777", fontWeight: "700", marginTop: 8 },
  notification: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#6FCF97",
    padding: 4,
    borderRadius: 50,
    width: 24,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
