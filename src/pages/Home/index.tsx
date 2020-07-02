import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleToGoPoints() {
    navigation.navigate("Logon");
  }

  function handleGoToRegister() {
    navigation.navigate("Register");
  }

  return (
    <ImageBackground
      source={require("../../assets/logo.png")}
      imageStyle={{
        width: 272,
        height: 300,
        marginLeft: 70,
        marginTop: 110,
        justifyContent: "center",
        alignItems: "center",
      }}
      style={styles.container}
    >
      <View style={styles.main}>
        <Text style={styles.text}>Zé Colmeia</Text>
        <Text style={styles.description}>
          Seu aplicativo para comida Boa!!!
        </Text>
      </View>
      <RectButton style={styles.button} onPress={handleToGoPoints}>
        <View style={styles.buttonIcon}>
          <Text>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </Text>
        </View>
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
      <RectButton style={styles.buttonCreate} onPress={handleGoToRegister}>
        <View style={styles.buttonCreateIcon}>
          <Text>
            <Icon name="user-plus" color="#FFF" size={24} />
          </Text>
        </View>
        <Text style={styles.buttonCreateText}>Cadastrar-se</Text>
      </RectButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 32,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#322153",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 32,
    maxWidth: 260,
    marginTop: 180,
    paddingLeft: 90,
  },
  description: {
    color: "#322153",
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
    marginTop: 10,
    marginLeft: 50,
  },
  buttonCreate: {
    backgroundColor: "#FF4500",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonCreateIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCreateText: {
    fontSize: 18,
    color: "#FFF",
    marginLeft: 70,
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

export default Home;
