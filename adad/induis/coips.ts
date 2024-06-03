type MyTupleType = [string, number, boolean, number];

function processTuple(myTuple: MyTupleType): void {
  const [text, num1, flag, num2] = myTuple;

  // Process the string element
  console.log(`String element: ${text}`);

  // Process the first number element
  console.log(`First number element: ${num1}`);

  // Process the boolean element
  console.log(`Boolean element: ${flag}`);

  // The fourth element is not provided in the original tuple,
  // so we'll assume a default value for demonstration purposes.
  const defaultNum2 = 0;
  console.log(`Second number element: ${num2 ?? defaultNum2}`);
}

// Example usage:
const myTuple: MyTupleType = ['hello', 143, false, 0];
processTuple(myTuple);
