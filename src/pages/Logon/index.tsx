import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

const Logon = () => {
  const navigation = useNavigation();

  const [id, setId] = useState("");

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  async function handleSubmit() {
    const data = {
      id,
    };
    try {
      const response = await api.post("users/session", data);
      setId(response.data.id);
      navigation.navigate("Points", { id: id });
    } catch (error) {
      alert("Erro ao realizar login tente novamente");
    }
  }

  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/logo.png")}
        style={styles.container}
        imageStyle={{
          width: 100,
          height: 200,
          marginLeft: 150,
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleNavigateGoBack}>
          <Icon name="arrow-left" size={24} color="#FFA500" />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}> Dados do Usúario</Text>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Codigo do Usuário</Text>
            <TextInput
              underlineColorAndroid="#FFA500"
              autoCapitalize="words"
              style={styles.formInput}
              placeholder="ex. 001"
              onChangeText={(id) => setId(id)}
            />

            <RectButton style={styles.button} onPress={handleSubmit}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" size={24} color="#fff" />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: "Ubuntu_700Bold",
    color: "#322153",
    fontSize: 28,
    padding: 20,
    marginTop: 180,
    marginLeft: 30,
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

export default Logon;
