import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from '../components/MealItem'

const MealList = (props) => {
  const renderFood = (itemData) => {
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "mealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        duration={itemData.item.duration}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderFood}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
