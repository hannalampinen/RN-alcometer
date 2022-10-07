import { StyleSheet} from "react-native";

// styles defines margins and overall settings

// LIGHT THEME STYLES

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: { 
    marginHorizontal: 20,  
  },
  title: {
    textAlign:'center',
    fontSize: 34,
    fontWeight: 'bold',
    padding: 20,
  },
  view: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  subheadings: { // Weight, gender
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  subheadingsNumeric: { //Amount of bottles, hours
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },
  radioButtonLabel: { // gender radio buttonlabels
    fontSize: 15,
    marginRight: 20,
  },
  radioinput: {
    marginBottom: 10,
  },
  radioButton: { // gender radio buttons
    buttonColor: '#517A79',
    selectedButtonColor: '#517A79',
  },
  weightInput: {
    marginBottom: 20,
    backgroundColor: '#eceff1',
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 15,
  },
  numericInput: { //bottles, hours
    textColor:'black',
    rightButtonBackgroundColor:'#517A79', 
    leftButtonBackgroundColor:'#517A79',
    borderColor: '#517A79',
  },
  calculateButton:{
    marginTop: 40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FFAC86',
    borderRadius:10,
  },
  calculateText:{
      color:'black',
      textAlign:'center',
      fontSize: 17,
      paddingLeft : 10,
      paddingRight : 10
  }, 
  results: {
    marginTop: 40,
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#eceff1',
    borderColor: '#ddd',
    fontSize: 17,
    textAlign: 'center',
    color: 'black'
  }
});

// DARK THEME STYLES

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#161618',
  },
  scrollView: { 
    marginHorizontal: 20,  
    backgroundColor:'#161618',
  },
  title: {
    textAlign:'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },
  view: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  subheadings: { // Weight, gender
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: 'white',
  },
  subheadingsNumeric: { //Amount of bottles, hours
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    color: 'white',
  },
  radioButtonLabel: { // gender radio button labels
    fontSize: 15,
    marginRight: 20,
    color: 'white'
  },
  radioinput: { // gender radio buttons
    marginBottom: 10,
  },
  radioButton: { // gender radio buttons
    buttonColor: '#FFAC86',
    selectedButtonColor: '#FFAC86',
  },
  weightInput: {
    marginBottom: 20,
    backgroundColor: '#A1C4C3',
    borderWidth: 2,
    borderColor: '#517A79',
    padding: 15
  },
  numericInput: {
    marginBottom: 30,
  },
  numericInput: { // bottles, hours
    textColor:'white',
    borderColor: 'none',
    rightButtonBackgroundColor:'#FFAC86', 
    leftButtonBackgroundColor:'#FFAC86',
    borderColor: '#FFAC86',
  },
  calculateButton:{ 
    marginTop: 40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#517A79',
    borderRadius:10,
  },
  calculateText:{
      color:'white',
      textAlign:'center',
      fontSize: 17,
      paddingLeft : 10,
      paddingRight : 10
  }, 
  results: {
    marginTop: 40,
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#A1C4C3',
    borderColor: '#A1C4C3',
    color: 'black',
    fontSize: 17,
    textAlign: 'center'
  }
});
