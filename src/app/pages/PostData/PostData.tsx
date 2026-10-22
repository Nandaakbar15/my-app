import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import axios from "axios";

export default function PostData() {
  const [dataPosts, setDataPosts] = useState({
    title: "",
    body: "",
  });

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((result) => {
      setDataPosts(result.data);
    });
  };

  const addData = () => {
    const dataForApi = {
      title: "Ini Post baru",
      body: "Apa aja",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", dataForApi)
      .then((result) => {
        setDataPosts(result.data);
      });
  };

  // Panggil fetchData di dalam useEffect jika ingin data langsung diambil saat komponen dimuat
  useEffect(() => {
    fetchData();
  }, []);

  const styles = StyleSheet.create({
    line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  });

  return (
    <View style={{ marginTop: 70 }}>
      <Text>Belajar fetch API dengan Vanilla JS</Text>
      <Button title="GET DATA" onPress={fetchData} />
      <Text>Response GET DATA</Text>
      <View style={styles.line} />

      {/* Optional chaining (?.) untuk mencegah error jika data masih kosong sesaat */}
      <Text>{dataPosts?.title}</Text>
      <Text>{dataPosts?.body}</Text>

      <Button title="POST DATA" onPress={addData} />
      <Text>Response POST DATA</Text>
      <Text>{dataPosts.title}</Text>
      <Text>{dataPosts.body}</Text>
    </View>
  );
}
