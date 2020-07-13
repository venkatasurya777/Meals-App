import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderTitle = (itemData) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealCategory",
            params: {
              CategoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return <FlatList data={CATEGORIES} renderItem={renderTitle} numColumns={2} />;
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Pick Your Category",
  headerStyle: {
    backgroundColor: "yellow",
  },
  headerTintColor: "blue",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
