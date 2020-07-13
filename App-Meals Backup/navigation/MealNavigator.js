import React from "react";
import { Platform } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealCategories from "../screens/MealCategories";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "grey" : "grey",
    },
    headerTintColor: Platform.OS === "android" ? "white" : "white",
  },
  headerTitle: "A Screen",
};

const MealNavigator = createStackNavigator(
  {
    categoriesScreen: CategoriesScreen,
    mealCategories: MealCategories,
    mealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const favNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favourites: {
      screen: favNavigator,

      navigationOptions: {
        tabBarLabel: "Favourites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: "skyblue",
      },
    },
  },
  {
    activeColor: "orange",
    shifting: true,
  }
);

const filtersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const mainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: tabScreenConfig,
    navigationOptions: {
      drawerLabel: "Meals",
    },
  },
  Filters: filtersNavigator,
},{
  activeTintColor:'white'
});

export default createAppContainer(mainNavigator);
