import React from "react";
import { FlatList, StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import friend from "./friends.json";
import hobby from "./hobbies.json";

const Stack = createNativeStackNavigator();

function Main({ navigation }: any) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Button
        title="Friends"
        onPress={() => {
          navigation.navigate("Friends", {
            data: friend, // Pasar datos de amigos
          });
        }}
      />
      <Button
        title="Hobbies"
        onPress={() => {
          navigation.navigate("Hobbies", {
            data: hobby, // Pasar datos de hobbies
          });
        }}
      />
    </View>
  );
}

function Friends({ navigation, route }: any) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.picture }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}

function Hobbies({ navigation, route }: any) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.picture }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Hobbies" component={Hobbies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA600",
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  itemContent: {
    flexDirection: "row", // Organiza los elementos horizontalmente
    alignItems: "center", // Alinea verticalmente al centro
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
