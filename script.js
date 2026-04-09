
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (value.value === "") {
      return alert("Please enter a value in the 'value' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series({\n    '': ,\n    '': \n}, name='" + value.value + "')";
  }
}

const createFromList = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + array.value + " = pd.Series(" + variable.value + ", index=['', ''])";
  }
}

const seriesProperties = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+= '\n' + document.editor.variable.value + '.' + stat;
  }
}

const assignColumn = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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
let ilocIndexRangeStart = document.getElementById("ilocIndexRangeStart");
let ilocIndexRangeEnd = document.getElementById("ilocIndexRangeEnd");
let indexFunc = document.getElementById("indexFunc");
  indexFunc.style.color = "black";
let ilocStatus = false;
let indexAssign = document.getElementById("indexAssign");

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
      return alert("Please enter a number in the 'start' field, in the 'Indexing' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
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

const ilocIndex = (arg) => {
  if (ilocStatus === false) {
    indexFunc.style.background = "grey";
    indexFunc.style.color = "white";
    indexFunc.value = "list";
    ilocStatus = true;
  } else {
    indexFunc.style.background = "#5c5cb8";
    indexFunc.style.color = "black";
    indexFunc.value = "range";
    ilocStatus = false;
  }
}

const assignIndex = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (indexAssign.value === "") {
      return alert("Please enter a comma separated array in the 'new index' field, in the 'Indexing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + ".index = ['" + indexAssign.value.replaceAll(/\s*,\s*/g, "', '").split(",") + "']";
  }
}

// Slicing
let indexSeriesRangeOne = document.getElementById("indexSeriesRangeOne");
let indexSeriesRangeTwo = document.getElementById("indexSeriesRangeTwo");
let startMatrix = document.getElementById("startMatrix");
let endMatrix = document.getElementById("endMatrix");
let beforeMatrix = document.getElementById("beforeMatrix");

const sliceRange = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (indexSeriesRangeOne.value === "") {
      return alert("Please enter an element name in the 'range one' field, in the 'Slicing' section.");
  } else if (indexSeriesRangeTwo.value === "") {
      return alert("Please enter an element name in the 'range two' field, in the 'Slicing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "['" + indexSeriesRangeOne.value + "': '" + indexSeriesRangeTwo.value + "']";
  }
}

const rangeMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (startMatrix.value === "") {
      return alert("Please enter a number in the 'start' field, in the 'Slicing' section.");
  } else if (endMatrix.value === "") {
      return alert("Please enter a number in the 'end' field, in the 'Slicing' section.");
  } else {
      if (beforeMatrix.value) {
        document.editor.textbox.value+= "\n" + variable.value + "[" + startMatrix.value + ":" + endMatrix.value + ":" + beforeMatrix.value + "]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "[" + startMatrix.value + ":" + endMatrix.value + "]";
      }
  }
}

const sliceMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (endMatrix.value === "") {
      return alert("Please enter a number in the 'end' field, in the 'Slicing' section.");
  } else if (startMatrix.value === "" && endMatrix.value) {
      if (beforeMatrix.value === "") {
        document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":" + beforeMatrix.value + ":]";
      }
  } else if (startMatrix.value && endMatrix.value) {
      document.editor.textbox.value+= "\n" + variable.value + "[:" + startMatrix.value + ":" + endMatrix.value + "]";
  }
}

const rangeMatrixReverse = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[::-1]";
  }
}

const rangeMatrixOdd = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[::2]";
  }
}

// Summary statistics
let axis = document.getElementById("axis");

const log = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\nnp." + arg + "(" + variable.value + ")";
  }
}

const statistics = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (!axis.value) {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "()";
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "(axis=" + axis.value + ")";
  }
}

// Broadcasting and Vectorized operations
let broadcastColumn = document.getElementById("broadcastColumn");
let broadcastNumber = document.getElementById("broadcastNumber");
let broadcastNumbers = document.getElementById("broadcastNumbers");

const operation = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (broadcastColumn.value === "") {
      return alert("Please enter column names in the 'columns' field, in the 'Broadcasting and Vectorized operations' section.");
  } else if (broadcastNumber.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Broadcasting and Vectorized operations' section.");
  } else {
      let regex = /\s*,\s*/g;
      document.editor.textbox.value+="\n" + variable.value + "[['" + broadcastColumn.value.replace(regex, "', '") + "']] " + arg + " " + broadcastNumber.value;
  }
}

const addColumns = () => {
  if (array.value === "") {
    return alert("Please enter a new variable name in the 'array' field, in the 'pandas.DataFrame object' section.");
  }  else if (broadcastColumn.value === "") {
      return alert("Please enter column names, separated by commas, in the 'columns' field, in the 'Broadcasting and Vectorized operations' section.");
  } else if (broadcastNumbers.value === "") {
      return alert("Please enter numbers, separated by commas, in the 'values' field, in the 'Broadcasting and Vectorized operations' section.");
  } else {
      let regex = /\s*,\s*/g;
      document.editor.textbox.value+="\n" + array.value + " = pd.Series([" + broadcastNumbers.value.replace(regex, ", ") + "], index=['" + broadcastColumn.value.replace(regex, "', '") + "'])";
      if (variable.value.length > 0) {
        if (Math.abs(Number(variable.value)) >= 0) {
          return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
        }
        document.editor.textbox.value+="\n" + variable.value + "[['" + broadcastColumn.value.replaceAll(regex, "', '") + "']] + " + array.value;
      }
  }
}

// Conditional selection (Boolean arrays)
let booleanFilter = document.getElementById("booleanFilter");
let valueA = document.getElementById("valueA");
let valueB = document.getElementById("valueB");
let conditionA = document.getElementById("conditionA");
let conditionB = document.getElementById("conditionB");

const boolean = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (valueA.value === "") {
    return alert("Please enter a value in the 'value A' field, in the 'Conditional selection (Boolean arrays)' section.");
  } else if (valueB.value === "") {
      return alert("Please enter a value in the 'value B' field, in the 'Conditional selection (Boolean arrays)' section.");
  } else {
      if (booleanFilter.value === "") {
        document.editor.textbox.value+="\n" + variable.value + ".loc[" + variable.value + "['" + valueA.value + "'] " + arg + " " + valueB.value + "]";
      } else {

          let filter = booleanFilter.value;
          if (filter.split("").includes(",")) {
            filter = "['" + filter.replaceAll(", ", "', '") + "']";
          } else {
              filter = "'" + filter + "'";
          }

          document.editor.textbox.value+="\n" + variable.value + ".loc[" + variable.value + "['" + valueA.value + "'] " + arg + " " + valueB.value + ", " + filter + "]";
      }
  }
}

const masks = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (conditionA.value === "") {
      return alert("Please enter a value in the 'condition A' field, in the 'Conditional selection (Boolean arrays)' section.");
  } else if (conditionB.value === "") {
      return alert("Please enter a value in the 'condition B' field, in the 'Conditional selection (Boolean arrays)' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "[(" + conditionA.value + ") " + arg + " (" + conditionB.value + ")]";
  }
}

// Dropping
let dropValue = document.getElementById("dropValue");
let dropCol = document.getElementById("dropCol");
let dropColumnStatus = false;
let dropAxis = document.getElementById("dropAxis");
let axisDropColumn = "";
let axisDropRow = "";
let column = document.getElementById("column");
let row = document.getElementById("row");

const drop = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (dropValue.value === "") {
      return alert("Please enter a value(s) in the 'drop value' field, if more than one please separate with commas, in the 'Dropping' section.");
  } else {
      let filter = dropValue.value;
      let regex = /\s*,\s*/g;

      if (filter.split("").includes(",")) {
        filter = "['" + filter.replaceAll(regex, "', '") + "']";
      } else {
         filter = "'" + filter + "'";
      }

      let column = "";
      if (dropColumnStatus) {
         column = "columns=";
      }

      let axisDrop = "";
      if (dropAxis.value !== "") {
        axisDrop = ", axis=" + dropAxis.value;
      } else if (axisDropColumn !== "") {
          axisDrop = ", axis='" + axisDropColumn + "s'";
      } else if (axisDropRow !== "") {
          axisDrop = ", axis='" + axisDropRow + "s'";
      }

      document.editor.textbox.value+="\n" + variable.value + ".drop(" + column + filter + axisDrop + ")";
  }
}

const dropColumn = () => {
  if (dropColumnStatus === false) {
    dropCol.style.background = "#5c5cb8";
    dropColumnStatus = true;
  } else {
      dropCol.style.background = "white";
      dropColumnStatus = false;
  }
}

const setAxis = (arg) => {
  row.style.background = "white";
  column.style.background = "white";

  if (arg === "column") {

    if (axisDropColumn === "") {
      column.style.background = "#5c5cb8";
      axisDropColumn = arg;
      axisDropRow = "";
    } else {
        column.style.background = "white";
        axisDropColumn = "";
       axisDropRow = "";
    }

  } else if (arg === "row") {
    if (axisDropRow === "") {
      row.style.background = "#5c5cb8";
      axisDropRow = arg;
      axisDropColumn = "";
    } else {
        row.style.background = "white";
        axisDropRow = "";
        axisDropColumn = "";
    }

  }
}

// Modifying series
let modifyColumn = document.getElementById("modifyColumn");
let modifyValue = document.getElementById("modifyValue");
let modifyIndex = document.getElementById("modifyIndex");

const addDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (array.value === "") {
      return alert("Please enter a new variable name in the 'array' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(array.value)) >= 0) {
      return alert("Please do not enter a number in the 'array' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'array' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "['" + modifyColumn.value + "'] = " + array.value;
  }
}

const modifyDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else if (modifyValue.value === "") {
      return alert("Please enter a new value in the 'value' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyValue.value)) >= 0) {
      return alert("Please do not enter a number in the 'value' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "['" + modifyColumn.value + "'] = '" + modifyValue.value + "'";
  }
}

const renameDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".rename(\n    columns={\n        'old column 1': 'new column 1',\n        'old column 2': 'new column 2'\n    }, index={\n        'old index 1': 'new index 1',\n        'old index 2': 'new index 2'\n    })\n";
  }
}

const lowerCaseDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".rename(index=str.upper)";
  }
}

const upperCaseDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".rename(index=lambda x: x.lower())";
  }
}

const dropDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".drop(columns='" + modifyColumn.value + "', inplace=True)";
  }
}

const dropIndexDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".drop('" + modifyColumn.value + "', inplace=True)";
  }
}

const appendDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".append(pd.Series({\n    'column_1': 1,\n    'column_2': 2\n}, name='description'))";
  }
}

const appendIndexDataFrame = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + ".loc['" + modifyColumn.value + "'] = pd.Series({\n    'column_1': 1,\n    'column_2': 2\n})";
  }
}

const resetIndexDataFrame = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = " + variable.value + "." + arg;
  }
}

const setIndexDataFrame = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "('" + modifyColumn.value + "')";
  }
}

const modifyBoolean = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (modifyColumn.value === "") {
      return alert("Please enter a column name in the 'column' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'column' field, in the 'Modifying series' section.");
  } else if (modifyValue.value === "") {
      return alert("Please enter the primary index in the 'value' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyValue.value)) >= 0) {
      return alert("Please do not enter a number in the 'value' field, in the 'Modifying series' section.");
  } else if (modifyIndex.value === "") {
      return alert("Please enter the secondary index in the 'index' field, in the 'Modifying series' section.");
  } else if (Math.abs(Number(modifyIndex.value)) >= 0) {
      return alert("Please do not enter a number in the 'index' field, in the 'Modifying series' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "['" +modifyColumn.value + "'] = " + variable.value + "['" + modifyValue.value + "'] " + arg + " " + variable.value + "['" + modifyIndex.value + "']";
  }
}

// Plot
const plot = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.DataFrame object' section.");
  } else if (plotColumn.value === "") {
      return alert("Please enter the column name in the 'column' field, in the 'Plot' section.");
  } else if (Math.abs(Number(plotColumn.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Plot' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + plotColumn.value + "." + arg + "()";
  }
}
