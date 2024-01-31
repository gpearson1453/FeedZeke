import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

//This is a test comment to test committing to github
//This is a test comment to test pull requests
export default function Button({ label }) {
    const [theme, setTheme] = useState("unchecked");
    const handlePress = () => {
        setTheme(theme === "checked" ? "unchecked" : "checked");
        if (label === "Give Zeke some food") {
          theme === "checked" ? alert('Feed Zeke!') : alert('Zeke has been fed!');
        } else if (label === "Give Zeke some water") {
          theme === "checked" ? alert('Give Zeke some water!') : alert('Zeke has water!');
        } else {
          theme === "checked" ? alert('Give Zeke a bath!') : alert('Zeke is clean!');
        }
    };

    return (
        <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#bcbcbc", borderRadius: 18 }]}>
        <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={handlePress}
        >
            {theme === "unchecked" ? (
              <MaterialCommunityIcons
                  name="turtle"
                  size={18}
                  color="#25292e"
                  style={styles.buttonIcon}
              />
            ) : (
              <FontAwesome
                  name="check"
                  size={18}
                  color="#51bf21"
                  style={styles.buttonIcon}
              />
            )}
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});