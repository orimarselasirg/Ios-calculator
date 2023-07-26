import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'black',
    },
    calculatorContainer: {
      paddingHorizontal: 10,
      // backgroundColor: 'red',
      flex: 1,
      justifyContent: 'flex-end',
    },
    results: {
      color: 'white',
      fontSize: 60,
      textAlign: 'right',
    },
    resultsStatus :{
      color: 'grey',
      fontSize: 30,
      textAlign: 'right',
    },
});
