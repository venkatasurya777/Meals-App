import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  return (
    <View style={styles.screen}>
      <Text>This is MealDetail</Text>
      <Button
        title="GoBackToCategories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Favourite' iconName='ios-star' onPress={()=>{}}/>
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
