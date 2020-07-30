"use strict";

const app = {
  options: []
};

const formData = e => {
  e.preventDefault();
  var valByFormData = e.target.inputValue.value;

  if (valByFormData) {
    app.options.push(valByFormData);
    e.target.inputValue.value = '';
    render();
  }
};

const removeAllOptionsValue = () => {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

const render = () => {
  var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count : ", app.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: removeAllOptionsValue
  }, "Remove All"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), app.options.map((opt, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, opt);
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: formData
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "inputValue"
  }), /*#__PURE__*/React.createElement("button", null, "Add Task")));
  ReactDOM.render(temp, appRoot);
};

render();