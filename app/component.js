

import React from 'react';

const Component = React.createClass({
  render: function(){
    return '<div />'
  }
})

module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world';

    return element;
};
