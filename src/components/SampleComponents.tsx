import { Image, Text, TextInput, View } from "react-native";

import { Component } from "react";

const name = "Alvinda Akbar";

export default function SampleComponent() {
  return (
    <View>
      <BoxGreen />
      <Text>Name</Text>
      <Alvinda />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />

      <Profile />
    </View>
  );
}

const Alvinda = () => {
  return <Text>${name} Geannasech</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: "https://picsum.photos/id/0/5000/3333",
      }}
      style={{ width: 100, height: 100 }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: "blue", fontSize: 24 }}>
          Ini adalah gambar pemandangan
        </Text>
      </View>
    );
  }
}
