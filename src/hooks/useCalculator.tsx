import {useState, useRef} from 'react';
enum operationsRef {
  sum, rest, multiply, divide
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const operationsReference = useRef<operationsRef>();

  const cleanNumber = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const numbersOperations = (textNumber: string) => {
    // valido que no se pueda ingresar mas de un punto
    if (number.includes('.') && textNumber === '.') {return;}
    if (number.startsWith('0') || number.startsWith('-0')){ // valido si empieza en 0 o -0
      if (textNumber === '.'){ //valido si el siguiente caracter es un punto
        setNumber(number + textNumber); // concateno el punto
      } else if (textNumber === '0' && number.includes('.')){ // valido si el siguiente caracter es un 0 y si contiene un punto
        setNumber(number + textNumber); // concateno el 0
      } else if (textNumber !== '0' && !number.includes('.')){ // valido si el siguiente caracter es diferente de 0 y si no contiene un punto
        setNumber(textNumber); //seteo el numero
      } else if (textNumber === '0' && !number.includes('.')){ // valido si el siguiente caracter es 0 y si no contiene un punto
        setNumber(number); // no hago nada
      } else {
        setNumber(number + textNumber); // concateno el numero
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')){
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const delAction = () => {
    let negatives = '';
    let tempNumber = number;
    //valido si incluye el simbolo de negativo
    if (number.includes('-')){
      negatives = '-'; // guardo el simbolo de negativo
      tempNumber = number.substring(1); // guardo el numero sin el simbolo de negativo
    }
    if (tempNumber.length > 1){ // si la longitud de numero es mayor a 1
      setNumber(negatives + tempNumber.replace(/.$/, '')); // elimino el ultimo caracter contatenando el simbolo de negativo al principio
    } else {
      setNumber('0');
    }
  };

  const previusValueResults = () => {
    if (number.endsWith('.')){
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const sumAction = () => {
    previusValueResults();
    operationsReference.current = operationsRef.sum;
    // operationsResult();
  };
  const restAction = () => {
    previusValueResults();
    operationsReference.current = operationsRef.rest;
    // operationsResult();
  };
  const divideAction = () => {
    previusValueResults();
    operationsReference.current = operationsRef.divide;
    // operationsResult();
  };
  const multiplyAction = () => {
    previusValueResults();
    operationsReference.current = operationsRef.multiply;
    // operationsResult();
  };

  const operationsResult = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);
    // if (operationsReference.current === operationsRef.sum){
    //   setPreviousNumber(`${number1 + number2}`);
    // }
    switch (operationsReference.current) {
      case operationsRef.sum:
        setNumber(`${number1 + number2}`);
        break;
      case operationsRef.rest:
        setNumber(`${number2 - number1}`);
        break;
      case operationsRef.divide:
        if (number1 === 0){
          setNumber('0');
          setPreviousNumber('0');
          return;
        }
        setNumber(`${number2 / number1}`);
        break;
      case operationsRef.multiply:
        setNumber(`${number1 * number2}`);
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };

  return {
    cleanNumber,
    number,
    previousNumber,
    numbersOperations,
    operationsResult,
    sumAction,
    restAction,
    multiplyAction,
    divideAction,
    positiveNegative,
    delAction,
  };

};


