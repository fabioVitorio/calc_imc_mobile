import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>CALCULADORA IMC</Text>
        </View>
    );
}