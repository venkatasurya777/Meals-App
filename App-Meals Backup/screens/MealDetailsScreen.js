import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen</Text>
      <Button
        title="TOP"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");

  const selectedId = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedId.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourites"
          iconName="ios-star"
          onPress={() => {}}
          iconSize={21}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailsScreen;
