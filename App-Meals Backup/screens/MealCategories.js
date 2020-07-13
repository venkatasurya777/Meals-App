import React from "react";
import {
 
  Platform,
 
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import Meal from "../models/Meal";

const MealCategoriesScreen = (props) => {
  

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

MealCategoriesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedId = CATEGORIES.find((meal) => meal.id === catId);
  return {
    headerTitle: selectedId.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "purple" : "white",
    },
    headerTintColor: Platform.OS === "android" ? "white" : "purple",
  };
};



export default MealCategoriesScreen;
