export default function appendToEachArrayValue(array, appendString) {
  // Loop through each element (value) of the array using the for...of loop
  for (let value of array) {
    // Append the appendString to each value
    value = appendString + value;
  }

  // The original array remains unchanged since 'value' is a copy of the array element
  // The changes made to 'value' inside the loop do not affect the original array

  // Return the modified array
  return array;
}
