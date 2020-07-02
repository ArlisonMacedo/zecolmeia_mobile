import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../services/api";

interface Product {
  id: number;
  nameProduct: string;
  image: string;
  image_url: string;
  price: number;
  amount: number;
  establishment_id: number;
}

interface Params {
  id: number;
}

interface Data {
  id: number;
  name: string;
  email: string;
  endereco: string;
  city: string;
  uf: string;
}

const Points = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>();
  const [user, setUser] = useState<Data>({} as Data);
  const route = useRoute();
  const routeParams = route.params as Params;

  // console.log(routeParams);

  useEffect(() => {
    api
      .get("/users/profile", {
        headers: {
          Authorization: routeParams.id,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    api.get("products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  function handleGoToRequests(id: number) {
    navigation.navigate("Requests", { id: id });
  }

  function handleNavigateBuy(id: number) {
    navigation.navigate("Buy", { id: id });
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={handleNavigateGoBack}
            style={styles.iconBack}
          >
            <Icon name="arrow-left" size={25} color="#FFA500" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.requestsLink}
            onPress={() => handleGoToRequests(user.id)}
          >
            <Text style={styles.requestsLinkText}>Seus Pedidos</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Bem Vindo {user.name}</Text>
        <Text style={styles.description}> Vamos comer, Pratos abaixo </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 20,
          }}
        >
          {products?.map((product) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleNavigateBuy(product.id)}
              key={product.id}
              activeOpacity={0.6}
            >
              <Image source={{ uri: product.image_url }} style={styles.image} />
              <View>
                <Text style={styles.titleProduct}>{product.nameProduct}</Text>
                <Text style={styles.titlePrice}> Preço R$ {product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 0,
  },
  iconBack: {
    marginLeft: 40,
    width: 30,
  },
  requestsLink: {
    marginLeft: 290,
    position: "absolute",
    marginTop: 4,
  },
  requestsLinkText: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 15,
    color: "#322153",
  },
  title: {
    fontFamily: "Ubuntu_700Bold",
    marginTop: 20,
    marginLeft: 45,
    fontSize: 22,
    color: "#322153",
  },
  description: {
    fontFamily: "Roboto_500Medium",
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 45,
  },
  titleProduct: {
    fontFamily: "Roboto_500Medium",
    justifyContent: "center",
    fontSize: 23,
    marginBottom: 10,
  },
  titlePrice: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    marginBottom: 40,
    marginLeft: 0,
  },
  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 440,
    width: 385,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    width: 350,
    height: 320,
    marginBottom: 5,
    borderRadius: 20,
  },
});

export default Points;
