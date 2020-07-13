import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealCategoryScreen = (props) => {
  const renderMeal = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  const CatId = props.navigation.getParam("CategoryId");

  const displayedIds = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(CatId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedIds}
        renderItem={renderMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

MealCategoryScreen.navigationOptions = (navigationData) => {
  const CatId = navigationData.navigation.getParam("CategoryId");
  const selectedMeal = CATEGORIES.find((cat) => cat.id === CatId);
  return {
    headerTitle: selectedMeal.title,
    headerStyle: {
      backgroundColor: "skyblue",
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealCategoryScreen;
