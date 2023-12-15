import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";

export default function App() {
  const [panjang, setPanjang] = useState(0);
  const [lebar, setLebar] = useState(0);
  const [luas, setLuas] = useState(0);

  const hitungLuas = () => {
    const p = parseInt(panjang);
    const l = parseInt(lebar);
    const luas = p * l;
    setLuas(luas);

    alert("Luas Persegi Panjang = " + luas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hitung Luas Persegi Panjang</Text>
      <Text style={styles.tulisan}>Panjang</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Masukkan Panjang"
        onChangeText={setPanjang}
      />
      <Text style={styles.tulisan}>Lebar</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Masukkan Lebar"
        onChangeText={setLebar}
      />
      <Button title="Hitung" onPress={hitungLuas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  tulisan: {
    fontSize: 25,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
