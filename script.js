
// pandas.DataFrame object
const dataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
     document.editor.textbox.value+= "\n" + variable.value + " = pd.DataFrame({\n    'column 1': [1, 2, 3],\n    'column 2': ['a', 'b', 'c'],\n    'column 3': [7, 8, 9]\n}, columns=['column 1', 'column 2', 'column 3'])";
  }
}
