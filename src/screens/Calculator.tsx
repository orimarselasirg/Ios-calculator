import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Buttons } from '../components/Buttons';
import { useCalculator } from '../hooks/useCalculator';
import { globalStyles } from '../theme/globalTheme';



export const Calculator = () => {
  const {previousNumber, number, cleanNumber, positiveNegative, delAction, divideAction, numbersOperations, multiplyAction, restAction, sumAction, operationsResult} = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {
        previousNumber !== '0' ? <Text style={globalStyles.resultsStatus}>{previousNumber}</Text> : null
      }

      <Text style={globalStyles.results} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
      <View style={styles.row}>
        <Buttons operationText="C" colorButton="#9b9b9b" pressAction={cleanNumber}/>
        <Buttons operationText="+/-" colorButton="#9b9b9b" pressAction={positiveNegative}/>
        <Buttons operationText="del" colorButton="#9b9b9b" pressAction={delAction}/>
        <Buttons operationText="/" colorButton="#ff9427" pressAction={divideAction}/>
      </View>
      <View style={styles.row}>
        <Buttons operationText="7" pressAction={numbersOperations}/>
        <Buttons operationText="8" pressAction={numbersOperations}/>
        <Buttons operationText="9" pressAction={numbersOperations}/>
        <Buttons operationText="X" colorButton="#ff9427" pressAction={multiplyAction}/>
      </View>
      <View style={styles.row}>
        <Buttons operationText="4" pressAction={numbersOperations}/>
        <Buttons operationText="5" pressAction={numbersOperations}/>
        <Buttons operationText="6" pressAction={numbersOperations}/>
        <Buttons operationText="-" colorButton="#ff9427" pressAction={restAction}/>
      </View>
      <View style={styles.row}>
        <Buttons operationText="1" pressAction={numbersOperations}/>
        <Buttons operationText="2" pressAction={numbersOperations}/>
        <Buttons operationText="3" pressAction={numbersOperations}/>
        <Buttons operationText="+" colorButton="#ff9427" pressAction={sumAction}/>
      </View>
      <View style={styles.row}>
        <Buttons operationText="0" buttonSize pressAction={numbersOperations}/>
        <Buttons operationText="." pressAction={numbersOperations}/>
        <Buttons operationText="=" colorButton="#ff9427" pressAction={operationsResult}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
