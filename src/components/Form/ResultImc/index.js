import React from "react"
import {View, Text} from "react-native"
import styles from "./style"

export default function ResultImc(props){
    return(
        <View style={styles.result}>
            <Text style={styles.text} >{props.messageResultImc}</Text>
            <Text style={styles.number} >{props.resultImc}</Text>
        </View>
    );
}