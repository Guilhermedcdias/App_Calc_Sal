import React, { Component  } from 'react'
import { View, Text, TextInput, StyleSheet, Button,TouchableOpacity, CheckBox, ScrollView } from 'react-native'


class FormCalc extends Component {
   // estados (variávei principais do meu aplicativo)
   state = {
      salario: 0,
      extras: 0,
      faltas: 0,
      resp:0,      
   }

   // construtor para inicializar variáveis ou executar métodos
   constructor(props) {
      super(props)
      
   }

   // atualiza o state.number1 com a entrada fornecida pelo usuário
   getNumber1 = (text) => {
      this.setState({ salario: text })
   }

  // atualiza o state.number1 com a entrada fornecida pelo usuário
   getNumber2 = (text) => {
      this.setState({ extras: text })
   }

   getNumber3 = (text) => {
      this.setState({ faltas: text })
   }

   // realiza a soma das informações fornecidas pelo usuário
   sal_final = (salario, extras, faltas) => {
      var horasalario = (parseFloat(salario) / 30) / 8 
      var horaextra = (parseFloat(extras) * (horasalario * 1.5))
      var horasfalta = (parseFloat(faltas) * (horasalario))
      var r = horaextra - horasfalta + parseFloat(salario)          
      this.setState({ resp: r })// atualiza o estado (resp)
   }

    // atualiza o state.number1 com a entrada fornecida pelo usuário
   getOpcao1 = () => {
      this.setState({ chk_sel: !this.state.chk_sel })
   }
   
   // atualiza o state.number2 com a entrada fornecida pelo usuário
   getOpcao2 = () => {
      this.setState({ chk_sel2: !this.state.chk_sel2 })
   }
   // atualiza o state.number3 com a entrada fornecida pelo usuário
   getOpcao3 = () => {
      this.setState({ chk_sel3: !this.state.chk_sel3 })
   }

  // visual (renderizar = desenhar a tela ou formulário)
   render() {
     
      return (
         <View style = {styles.container}>
           <ScrollView >
            <Text style={styles.titulo}>
               Calculadora De Salarios
            </Text>

            <Text style={styles.baseText}>
              
            </Text>

       
            <Text style={styles.baseText}>
               Salario Sem Descontos:               
            </Text>

            <TextInput style = {styles.input}               
               placeholder = "Salario"
               placeholderTextColor = "#000"               
               keyboardType="numeric"
               onChangeText = {this.getNumber1}/>   


            <Text style={styles.baseText}>
               Horas Extras:            
            </Text>
            
            <TextInput style = {styles.input}               
               placeholder = "Horas Extras"
               placeholderTextColor = "#000"               
               keyboardType="numeric"
               onChangeText = {this.getNumber2}/> 

            <Text style={styles.baseText}>
               Horas de Faltas:            
            </Text>  

            <TextInput style = {styles.input}               
               placeholder = "Horas de Falta"
               placeholderTextColor = "#000"               
               keyboardType="numeric"
               onChangeText = {this.getNumber3}/>         
 
            <Button 
               style = {styles.botao}
               title="Calcular"
               color="blue"
               onPress={() => this.sal_final(this.state.salario, this.state.extras, this.state.faltas)}
            />

                  

            <Text style={styles.baseText}>
               Reposta: {this.state.resp}
            </Text>

             </ScrollView >
         </View>
      )
   }
}
export default FormCalc
 
const styles = StyleSheet.create({
   container: {
      paddingTop: 16,   
      paddingLeft:16,
      paddingRight:16,  
   },
   input: {
      margin: 15,
      height: 50,
      borderColor: '#000',
      borderWidth: 1,
      fontSize:20,
   },
   submitButton: {
      backgroundColor: '#7a42f4',            
      height: 40,
      margin: 15,
      paddingTop: 20,
      
      paddingLeft:16,
      paddingRight:16,
      paddingBottom:16,
      
   },
   botao: {      
      height: 40,      
      width: 100,  
       paddingTop: 16,   
      paddingLeft:16,
      paddingRight:16,
      paddingBottom:16,    
   },
 
   baseText: {     
      margin: 5,
      fontWeight: 'bold',
      fontSize:20
    },
  
    titulo:{
      fontSize:25,
      color:"red",
    },
 
})
