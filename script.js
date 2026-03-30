
// pandas.DataFrame object
let array = document.getElementById("array");
let variable = document.getElementById("variable");
let value = document.getElementById("value");
let index = document.getElementById("index");
let start = document.getElementById("start");
let end = document.getElementById("end");
let step = document.getElementById("step");

const dataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
     document.editor.textbox.value+= "\n" + variable.value + " = pd.DataFrame({\n    'column 1': [1, 2, 3],\n    'column 2': ['a', 'b', 'c'],\n    'column 3': [7, 8, 9]\n}, columns=['column 1', 'column 2', 'column 3'])";
  }
}

const createFromObject = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (value.value === "") {
      return alert("Please enter a value in the 'value' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series({\n    '': ,\n    '': \n}, name='" + value.value + "')";
  }
}

const createFromList = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (value.value === "") {
      return alert("Please enter a value in the 'value' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series(\n    [ , , ],\n    index=['', ''],\n    name='" + value.value + "')";
  }
}

const createFromSeries = () => {
  if (array.value === "") {
    return alert("Please enter a new variable name in the 'array' field, in the 'pandas.DataFrame object' section.");
  } else if (variable.value === "") {
      return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + array.value + " = pd.Series(" + variable.value + ", index=['', ''])";
  }
}

const seriesProperties = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (arg === "columns") {
      let regex = /\s*,\s*/g;

      if (value.value) {
        document.editor.textbox.value+="\n" + variable.value + "." + arg + " = ['" + value.value.replaceAll(regex, "', '") + "']";
      } else {
          document.editor.textbox.value+="\n" + variable.value + "." + arg;
      }

  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg;
  }
}

const copy = (arg) => {
  if (array.value === "") {
    return alert("Please enter a new variable name in the 'array' field, in the 'pandas.DataFrame object' section.");
  } else if (variable.value === "") {
      return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
     document.editor.textbox.value+= "\n" + array.value + " = np." + arg + "(" + variable.value + ")";
  }
}

const nameSeries = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (value.value === "") {
      return alert("Please enter a value in the 'value' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + " = '" + value.value + "'";
  }
}

const access = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (index.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + index.value + "]";
  }
}

const range = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (step.value === "") {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + "]";
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + ":" + step.value + "]";
  }
}

// Data at a glance
let assignDataColumn = document.getElementById("assignDataColumn");
let assignDataVariable = document.getElementById("assignDataVariable");

const data = (stat) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+= '\n' + document.editor.variable.value + '.' + stat;
  }
}

const assignColumn = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (assignDataVariable.value === "") {
      return alert("Please enter a new variable name in the 'array' field, in the 'Data at a glance' section.");
  } else if (assignDataColumn.value === "") {
      return alert("Please enter a column in the 'column' field, in the 'Data at a glance' section.");
  } else {
      document.editor.textbox.value+="\n" + assignDataVariable.value + " = " + variable.value + "['" + assignDataColumn.value + "']";
  }
}

const dataStat = (arg) => {
  if (assignDataVariable.value === "") {
      return alert("Please enter a new variable name in the 'new variable' field, in the 'Data at a glance' section.");
  } else {
      if (arg === "average") {
        document.editor.textbox.value+="\n" + assignDataVariable.value + ".sum() / len(" + assignDataVariable.value + ")";
      } else {
          document.editor.textbox.value+="\n" + assignDataVariable.value + "." + arg;
      }
  }
}

// Array Type
const dtype = (type) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (!type) {
      document.editor.textbox.value+= "\n" + variable.value + ".dtype";
  } else if (type === "dtype.value_counts()") {
      document.editor.textbox.value+= "\n" + variable.value + "." + type;
  } else {
      document.editor.textbox.value+= "\npd.Series(" + variable.value + ", dtype=np." + type + ")";
  }
}

// Summary statistics
const statistics = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (!axis.value) {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "()";
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "(axis=" + axis.value + ")";
  }
}

