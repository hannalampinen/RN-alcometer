import { useState } from 'react';
import { Text, View, TextInput, Switch, SafeAreaView, ScrollView, TouchableOpacity, Alert} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input';
import { styles, darkTheme, lightTheme } from './Styles';

// HANNA LAMPINEN, TIK21KM

export default function App() {

// variables for the calculations
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [alcoholContent, setAlcoholContent] = useState('');
  const [redOrGreen, setRedOrGreen] = useState('green');
  const [reminder, setReminder] = useState('');
    

// variables for the numeric inputs
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);

  // Toggle for changing between light/dark-mode
  const [isEnabled, setIsEnabled] = useState(false);

// Creating an array for gender radiobuttons
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const showAlert = () => {
    Alert.alert(
      'No weight added',
      'You must add weight before calculating',
    [
      {
        text: 'Ok',
      }
    ]
    );
  }

// Calculate-function: calculating the alcohol in blood, checking the weight input, taking care of negative results
  const calculate = () => {

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burningTime = weight / 10;
    const gramsLeft = grams - burningTime * hours;

    let result = 0;

    // if weight is empty, alert and set result to zero
    if (weight === '') { 
      showAlert()
      setAlcoholContent(0)
      setReminder('')
    } else {
      if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
      }
      else {
        result = gramsLeft / (weight * 0.6);
      };
      if (result < 0) { // if result < 0, set result to zero
        setAlcoholContent(0)
        setReminder('Good to go!')
      } else {
        setAlcoholContent(result.toFixed(2));
      };
      if (result > 0.5) {
        setRedOrGreen('red');
        setReminder('You are not allowed to drive!')
      } else {
        setRedOrGreen('green')
        setReminder('Good to go!');
      };
    }
  }

  // Functions for toggle
  const toggleSwitch = () => setIsEnabled(prev => !prev);
  const theme = (isEnabled === true) ? darkTheme : lightTheme;


  return (
    <SafeAreaView style={theme.container}>
      <ScrollView style={theme.scrollView}>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
        <Text style={theme.title}>Alcometer</Text>
        <View style={theme.view}>
          <Text style={theme.subheadings}>Weight</Text>
          <TextInput
            style={theme.weightInput}
            onChangeText={text => setWeight(text)} 
            placeholder='in kilograms'
            keyboardType='number-pad'>
            </TextInput>
          <Text style={theme.subheadings}>Gender</Text>
          <RadioForm
            style={theme.radioinput}
            buttonSize = {20}
            buttonOuterSize = {30}
            formHorizontal={true}
            buttonColor={theme.radioButton.selectedButtonColor}
            selectedButtonColor={theme.radioButton.buttonColor} 
            labelStyle={theme.radioButtonLabel}
            radio_props={genders}
            initial={0}
            onPress={(value) => {setGender(value)}} 
            labelHorizontal={true}
          /> 
          <Text style={theme.subheadingsNumeric}>Amount of bottles</Text>
          <NumericInput 
          onChange={v => setBottles(v)} 
          value={bottles}
          rounded
          totalWidth={295} 
          totalHeight={50} 
          iconSize={25}
          step={1}
          minValue={0}
          valueType='real'
          borderColor={theme.numericInput.borderColor}
          textColor={theme.numericInput.textColor}
          rightButtonBackgroundColor={theme.numericInput.rightButtonBackgroundColor}
          leftButtonBackgroundColor={theme.numericInput.leftButtonBackgroundColor}
          />
          <Text style={theme.subheadingsNumeric}>Hours</Text>
          <NumericInput 
          onChange={v => setHours(v)} 
          value={hours}
          rounded
          totalWidth={295} 
          totalHeight={50} 
          iconSize={25}
          step={1}
          minValue={0}
          valueType='real'
          textColor={theme.numericInput.textColor}
          borderColor={theme.numericInput.borderColor}
          rightButtonBackgroundColor={theme.numericInput.rightButtonBackgroundColor}
          leftButtonBackgroundColor={theme.numericInput.leftButtonBackgroundColor}
          />
          <TouchableOpacity
            style={theme.calculateButton}
            onPress={calculate}
            underlayColor='#fff'>
            <Text style={theme.calculateText}>Calculate</Text>
          </TouchableOpacity>
          <Text style={theme.results}>
            Your results are <Text style={{color: redOrGreen}}>{alcoholContent}</Text> ‰ {"\n"}
            <Text style={{fontSize: 15, color: redOrGreen}}>{reminder}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

