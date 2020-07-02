import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather as Icon } from "@expo/vector-icons";
import { TextInput, RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

// interface User {
//     name: string;
//     email: string;
//     endereco: string;
//     city: string;
//     uf: string;
// }

const Register = () => {
  const navigation = useNavigation();

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  function handleSubmit() {
    const data = {
      name,
      email,
      endereco,
      city,
      uf,
    };

    try {
      api.post("users", data);
      alert("Success, Cadastrado com sucesso");
      navigation.navigate("Home");
    } catch (error) {
      alert("Erro ao Cadastrar");
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/logo.png")}
      imageStyle={{
        width: 100,
        height: 200,
        marginLeft: 150,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={handleNavigateGoBack}
        style={{ marginTop: 10 }}
      >
        <Icon name="arrow-left" size={25} color="#FFA500" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}> Criar Novo Usúario</Text>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Nome</Text>
            <TextInput
              underlineColorAndroid="#FFA500"
              autoCapitalize="words"
              style={styles.formInput}
              placeholder="Seu Nome"
              onChangeText={(name) => setName(name)}
            />
            <Text style={styles.formTitle}>E-mail</Text>
            <TextInput
              style={styles.formInput}
              underlineColorAndroid="#FFA500"
              placeholder="exemple@gmail.com"
              onChangeText={(email) => setEmail(email)}
            />
            <Text style={styles.formTitle}>Endereço</Text>
            <TextInput
              style={styles.formInput}
              underlineColorAndroid="#FFA500"
              placeholder="Rua Pailhares n 155"
              onChangeText={(endereco) => setEndereco(endereco)}
            />
            <Text style={styles.formTitle}>Cidade</Text>
            <TextInput
              style={styles.formInput}
              underlineColorAndroid="#FFA500"
              placeholder="Cruz Orlando"
              onChangeText={(city) => setCity(city)}
            />
            <Text style={styles.formTitle}>UF</Text>
            <TextInput
              style={styles.formInput}
              underlineColorAndroid="#FFA500"
              placeholder="MA"
              autoCapitalize="characters"
              onChangeText={(uf) => setUf(uf)}
            />

            <RectButton style={styles.button} onPress={handleSubmit}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="user-plus" size={24} color="#fff" />
                </Text>
              </View>
              <Text style={styles.buttonText}>Criar</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  title: {
    fontFamily: "Ubuntu_700Bold",
    color: "#322153",
    fontSize: 28,
    padding: 20,
    marginTop: 130,
    marginLeft: 20,
  },
  form: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  formTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    color: "#322153",
    fontWeight: "bold",
  },
  formInput: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 95,
  },
});

export default Register;
