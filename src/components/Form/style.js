import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    view1: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    view2: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 20
    },
    label: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        height: 45,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        margin: 12,
        paddingLeft: 10
    },
    button: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8a2be2",
        marginLeft: 16,
        margin: 30,   
    },
    textButton: {
        fontSize: 20,
        color: "#fff"
    },
    errorMessage: {
        fontSize: 11,
        color: "red",
        paddingLeft: 250
    },
    exibirResult: {
        width: "90%",
        height: "40%",
        marginTop: 100,
    }
});

export default styles