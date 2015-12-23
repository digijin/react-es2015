

import React from 'react';

const Component = React.createClass({
  render: function(){
    return <div>hi</div>
  }
})

module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world';

    return element;
};
