import { Image, Text, TextInput, View } from "react-native";

const name = "Alvinda Akbar";

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: "red" }} />
      <Text>Name</Text>
      <Alvinda />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
    </View>
  );
};

const Alvinda = () => {
  return <Text>Alvinda Akbar Geannasech</Text>;
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

export default App;
