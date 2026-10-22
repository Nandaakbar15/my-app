import { Text, View } from "react-native";

export default function BasicJavascript() {
  // Tipe data

  // primitive
  const name = "Alvinda Akbar";
  let usia = 25;
  const jenisKelamin = "Laki-laki";

  // complex

  const hewanPeliharaan = {
    nama: "John",
    jenis: "kucing",
    usia: 3,
  }; // Ini tipe data yang tipenya object

  // tipe data berupa function
  const sayHello = (name: string, age: number) => {
    return console.log(`Hello ${name}, your age is ${age}`);
  };

  sayHello("Alvinda", 25);

  // tipe data function yang tipenya object - array
  const listWaifu = [
    "Asuka Langley Soryu",
    "Rei Ayanami",
    "Ran Mouri",
    "Ai Haibara / Shiho Miyano",
  ];

  // if statement

  const sapaHewan = (objectHewan: string) => {
    let hasilSapa = "";
    if (objectHewan.nama === "John") {
      hasilSapa = "Hello John";
    } else {
      hasilSapa = "Hewan siapa ini...";
    }

    return hasilSapa;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontWeight: "bold", fontFamily: "arial" }}>
        Belajar Javascript dasar
      </Text>

      <Text>Biodata Pribadi</Text>
      <Text>Nama: {name}</Text>
      <Text>Usia: {usia}</Text>
      <Text>Jenis Kelamin: {jenisKelamin}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>

      <Text style={{ marginTop: 20 }}>List Waifu</Text>

      {listWaifu.map((waifu) => (
        <Text key={waifu}>{waifu}</Text>
      ))}
    </View>
  );
}
