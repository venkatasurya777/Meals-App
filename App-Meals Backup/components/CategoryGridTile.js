import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let Touchablecmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <Touchablecmp  style={{flex:1}} onPress={props.onSelectMeal}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Touchablecmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius:10,
    overflow:'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    textAlign: "right",
  },
  title: {
    fontSize: 15,
  },
});

export default CategoryGridTile;
