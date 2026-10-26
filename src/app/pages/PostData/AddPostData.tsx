import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import axios from "axios";
import Constants from "expo-constants";

import type { User } from "@/types/user";

// On a physical device, use the same host Metro is served from.
// On an Android emulator, fall back to the AVD gateway (10.0.2.2).
const HOST = Constants.expoConfig?.hostUri?.split(":")[0] ?? "10.0.2.2";
const BASE_URL = `http://${HOST}:3000`;

export default function AddPostsData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  const [users, setUsers] = useState<User[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const addData = async () => {
    try {
      const data = {
        name,
        email,
        job,
      };
      console.log("Data before send: ", data);

      const res = await axios.post(`${BASE_URL}/users`, data);

      console.log(`data : `, res);

      Alert.alert("Success", "Berhasil menambahkan data!");

      // reset the form
      setName("");
      setEmail("");
      setJob("");

      fetchData();
    } catch (error: any) {
      console.error("Error : ", error);

      Alert.alert("Error", "Gagal menambahkan data!");
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);

      setUsers(res.data);
    } catch (error: any) {
      console.error("Error : ", error);
    }
  };

  const fetchDataById = async (id: string) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/${id}`);

      const { name, email, job } = res.data;

      setName(name);
      setEmail(email);
      setJob(job);
      setSelectedId(id);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async () => {
    try {
      const data = {
        name,
        email,
        job,
      };
      const res = await axios.put(`${BASE_URL}/users/${selectedId}`, data);

      console.log("data : ", res);

      Alert.alert("Success", "Berhasil mengubah data!");

      // reset form and deselect
      setName("");
      setEmail("");
      setJob("");
      setSelectedId(null);

      fetchData();
    } catch (error: any) {
      console.error("Error : ", error);
      Alert.alert("Error", "Gagal mengubah data!");
    }
  };

  const ListItem = ({
    item,
    onPress,
  }: {
    item: User;
    onPress: (id: string) => Promise<void>;
  }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => onPress(item.id)}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.desc}>
          <Text style={styles.descNamaUser}>{item.name}</Text>
          <Text style={styles.descEmail}>{item.email}</Text>
          <Text style={styles.descPekerjaan}>{item.job}</Text>
        </View>
        <Text style={styles.deleteButton}>X</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Form Posts Data</Text>
      <Text>Masukan user</Text>
      <TextInput
        placeholder="Nama User"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      ></TextInput>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      ></TextInput>
      <TextInput
        placeholder="Pekerjaan"
        style={styles.input}
        value={job}
        onChangeText={(value) => setJob(value)}
      ></TextInput>
      <Button
        title={selectedId ? "Update" : "Save"}
        onPress={selectedId ? updateData : addData}
      />
      <View style={styles.line} />

      {/* Result data */}
      {users.map((item) => (
        <ListItem key={item.id} item={item} onPress={fetchDataById} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  textTitle: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  input: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 12,
  },
  button: { borderRadius: 25 },
  avatar: { height: 80, width: 80, borderRadius: 25 },
  itemContainer: { flexDirection: "row", marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descNamaUser: { fontSize: 20, fontWeight: "bold" },
  descEmail: { fontSize: 16 },
  descPekerjaan: { fontSize: 12, marginTop: 8 },
  deleteButton: { fontSize: 20, fontWeight: "bold", color: "red" },
});
