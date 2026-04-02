
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

// Assigning
let assignIndexValue = document.getElementById("assignIndexValue");
let assignValue = document.getElementById("assignValue");
let assignRangeStart = document.getElementById("assignRangeStart");
let assignRangeEnd = document.getElementById("assignRangeEnd");

const assignSeries = () => {
  if (variable.value === '') {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (assignIndexValue.value === "") {
      return alert("Please enter an element name or index in the 'index' field, in the 'Assigning' section.");
  } else if (assignValue.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Assigning' section.");
  } else {
    let format = assignIndexValue.value;

    if (Math.abs(Number(format)) >= 0) {
        format = Number(format);
    } else {
        format = `'${format}'`;
    }

      document.editor.textbox.value+= "\n" + variable.value + "[" + format + "] = " + assignValue.value;
  }
}

const assignRangeSeries = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (assignRangeStart.value === "") {
      return alert("Please enter a number in the 'start' field, in the 'Assigning' section.");
  } else if (assignRangeEnd.value === "") {
      return alert("Please enter a number in the 'end' field, in the 'Assigning' section.");
  } else if (assignValue.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Assigning' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + assignRangeStart.value + ":" + assignRangeEnd.value + "] = " + assignValue.value;
  }
}

// Indexing
let indexDataFrameColumn = document.getElementById("indexDataFrameColumn");
let indexDataFrameRow = document.getElementById("indexDataFrameRow");
let indexDataFrameRowSecond = document.getElementById("indexDataFrameRowSecond");
let ilocIndexStart = document.getElementById("ilocIndexStart");
let ilocIndexEnd = document.getElementById("ilocIndexEnd");
let ilocIndexStep = document.getElementById("ilocIndexStep");

const accessDataFrameColumn = () => {
  if (variable.value === '') {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (indexDataFrameColumn.value === "") {
      return alert("Please enter an element name or index in the 'index' field, in the 'Indexing' section.");
  } else {
    let index = indexDataFrameColumn.value.replaceAll(",", "', '");
    let recover = indexDataFrameColumn.value;

    if (index.split("").includes(",")) {
      document.editor.textbox.value+= "\n" + variable.value + "[['" + index + "']]";
    }  else if (Math.abs(Number(recover)) >= 0) {
        indexDataFrameColumn.value = Number(recover);
        document.editor.textbox.value+= "\n" + variable.value + "[" + indexDataFrameColumn.value + "]";
    } else {
        indexDataFrameColumn.value = `'${indexDataFrameColumn.value}'`;

      if (indexAssign.value === "") {
        document.editor.textbox.value+= "\n" + variable.value + "[" + indexDataFrameColumn.value + "]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "[[" + indexDataFrameColumn.value + ", '" + indexAssign.value + "']]";
      }

      indexDataFrameColumn.value = recover;
    }
  }
}

const accessDataFrameRow = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (indexDataFrameRow.value === "") {
      return alert("Please enter a row name in the 'row' field, in the 'Indexing' section.");
  } else {
      let regex = /\s*,\s*/g;
      let replacement = indexDataFrameRow.value.replace(regex, "': '");
      let second = indexDataFrameRowSecond.value;

      if (second !== "") {
        if (second.split("").includes(",")) {
          second = ", ['" + indexDataFrameRowSecond.value.replaceAll(regex, "', '") + "']";
        } else {
            second = ", '" + indexDataFrameRowSecond.value + "'";
        }
      }

      document.editor.textbox.value+= "\n" + variable.value + ".loc['" + replacement + "'" + second + "]";
  }
}

const accessIloc = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (ilocIndexStart.value === "") {
      return alert("Please enter a number in the 'index start' field, in the 'Indexing' section.");
  } else {
      if (ilocIndexEnd.value !== "") {
        if (ilocIndexStep.value !== "") {
          document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[[" + ilocIndexStart.value + ", " + ilocIndexEnd.value + ", " + ilocIndexStep.value + "]]";
        } else {
          document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[[" + ilocIndexStart.value + ", " + ilocIndexEnd.value + "]]";
        }
      } else {
          document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[" + ilocIndexStart.value + "]";
      }
  }
}

const ilocRange = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (ilocIndexRangeStart.value === "") {
      return alert("Please enter a number in the 'range start' field, in the 'Indexing' section.");
  } else if (ilocIndexRangeEnd.value === "") {
      return alert("Please enter a number in the 'range end' field, in the 'Indexing' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Indexing' section.");
  } else if (ilocIndexStart.value === "") {
        document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[" + ilocIndexRangeStart.value + ":" + ilocIndexRangeEnd.value  + "]";
  } else if (ilocIndexEnd.value === "") {
        document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[" + ilocIndexRangeStart.value + ":" + ilocIndexRangeEnd.value + ", " + ilocIndexStart.value + "]";
  } else {
      if (ilocStatus) {
        document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[" + ilocIndexStart.value + ":" + ilocIndexEnd.value + ", [" + ilocIndexRangeStart.value + ", " + ilocIndexRangeEnd.value  + "]]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + ".iloc" + "[" + ilocIndexStart.value + ":" + ilocIndexEnd.value + ", " + ilocIndexRangeStart.value + ":" + ilocIndexRangeEnd.value  + "]";
      }
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

