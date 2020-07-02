import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";

interface Params {
  id: number;
}
interface Data {
  id: number;
  nameProduct: string;
  image: string;
  price: number;
  amount: number;
  establishment_id: number;
  product_id: number;
  user_id: number;
  image_url: string;
}

const Requests = () => {
  const navigation = useNavigation();
  const [userRequests, setUserRequests] = useState<Data[]>();
  const route = useRoute();
  const routeParam = route.params as Params;

  useEffect(() => {
    api
      .get("requests", {
        headers: {
          Authorization: routeParam.id,
        },
      })
      .then((response) => {
        setUserRequests(response.data);
      });
  }, []);

  function handleGoToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoToBack}>
        <Icon name="arrow-left" size={24} color="#FFA500" />
      </TouchableOpacity>

      <Text style={styles.title}>Seus Pedidos</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userRequests?.map((request) => (
          <TouchableOpacity
            key={request.id}
            style={styles.infoProduct}
            activeOpacity={1}
          >
            <Text style={styles.titleProduct}> {request.nameProduct}</Text>
            <Image source={{ uri: request.image_url }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    color: "#322153",
    marginTop: 20,
    marginLeft: 6,
    marginBottom: 40,
  },
  infoProduct: {
    backgroundColor: "#fff",
  },
  titleProduct: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#332153",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 55,
  },
  image: {
    width: 250,
    height: 220,
    margin: 17,
    marginLeft: 65,
    borderRadius: 20,
  },
});

export default Requests;
