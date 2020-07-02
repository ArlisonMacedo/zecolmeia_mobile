import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

interface Params {
  id: number;
}

interface Data {
  // product: {
  nameProduct: string;
  image: string;
  image_url: string;
  price: number;
  amount: number;
  establishment_id: number;
  // };
}

const Buy = () => {
  const navigation = useNavigation();

  function handleNavigateToGoback() {
    navigation.goBack();
  }

  const route = useRoute();
  const routeparams = route.params as Params;

  const [data, setData] = useState<Data>({} as Data);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    api.get(`products/${routeparams.id}`).then((response) => {
      setData(response.data.product);
      // console.log(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateToGoback}>
          <Icon name="arrow-left" size={25} color="#FFA500" />
        </TouchableOpacity>
        <Text style={styles.title}> {data.nameProduct}</Text>
        <Image
          style={styles.image}
          source={{
            uri: data.image_url,
          }}
        />
        <Text style={styles.titleDecription}>Descrição</Text>
        <Text style={styles.description}>Preço R$ {data.price}</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button}>
          <Icon name="dollar-sign" size={25} color="#FFF" />
          <Text style={styles.textButton}>Comprar</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },
  title: {
    marginTop: 20,
    fontFamily: "Ubuntu_700Bold",
    fontSize: 25,
    color: "#322153",
  },
  image: {
    width: 385,
    height: 320,
    marginTop: 20,
  },
  titleDecription: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    color: "#322153",
    marginTop: 10,
  },
  description: {
    fontFamily: "Roboto_400Regular",
    color: "#322153",
    fontSize: 17,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
});

export default Buy;
