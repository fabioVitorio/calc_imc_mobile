import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard} from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";
import { MaskedTextInput} from "react-native-mask-text";


export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [erroMessage, setErroMessage] = useState(null)
    const [maskAltura, setMaskAltura] = useState(null);
    const [unMaskAltura, setUnmaskAltura] = useState(null);
    const [maskPeso, setMaskPeso] = useState(null);
    const [unMaskPeso, setUnmaskPeso] = useState(null);
    
    function imcCalcular(){
        let formatAltura = altura.replace("," , ".")
        let formatPeso = peso.replace("," , ".")
        
        return setImc((formatPeso / (formatAltura * formatAltura)).toFixed(2))
    }

    function verificaCampos(){
        if(imc == null){
            Vibration.vibrate();
            setErroMessage("campo obrigatório*")
        }
    }

    function validarImc(){
        if(altura != null && peso != null && altura != isNaN(altura) && peso != isNaN(peso)){ 
            imcCalcular()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc atual é")
            setTextButton("Calcular novamente")
            setErroMessage(null)
            Keyboard.dismiss
        }else{
            verificaCampos()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
            Keyboard.dismiss
        }
        
    }

    return(
        <View style={styles.view1}>

            {imc == null ?

                <Pressable onPress={Keyboard.dismiss} style={styles.view2}>
                    <Text style={styles.label}>Altura (m)</Text>
                    <Text style={styles.errorMessage}> {erroMessage} </Text>
                    <MaskedTextInput
                        style={styles.input}
                        mask="9.99"
                        onChangeText={(_altura, text, rawText) => { 
                            setAltura(_altura);
                            setMaskAltura(text); 
                            setUnmaskAltura(rawText); 
                        }}
                        keyboardType="numeric"
                        placeholder="Ex.: 1.70"
                        value={altura}
                    />
                    <Text style={styles.label}>Peso (kg)</Text>
                    <Text style={styles.errorMessage}> {erroMessage} </Text>
                    <MaskedTextInput
                        style={styles.input}
                        mask="99.9"
                        onChangeText={(_peso, text, rawText) => { 
                            setPeso(_peso);
                            setMaskPeso(text); 
                            setUnmaskPeso(rawText); 
                        }}
                        keyboardType="numeric"
                        placeholder="Ex.: 60.2"
                        value={peso}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => validarImc()} >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exibirResult}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity style={styles.button} onPress={() => validarImc()} >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    );
}