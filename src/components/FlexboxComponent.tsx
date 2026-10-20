import { Component } from "react";
import { Image, Text, View } from "react-native";

export default class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }} />
        </View>

        {/* list button navigation */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        {/* foto profil */}
        <View
          style={{ flexDirection: "row", marginTop: 50, alignItems: "center" }}
        >
          <Image
            source={{
              uri: "https://yt3.ggpht.com/6QENkouU7ZvipGvfOLo41nip_NQLo2dLWzvPyIx-mt9NZqp1RtZrYCBw77TPZWcOg5MC02nzaw=s48-c-k-c0x00ffffff-no-rj",
            }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Nanda Akbar Geannasech
            </Text>
            <Text>50 Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}
