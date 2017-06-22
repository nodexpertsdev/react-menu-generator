// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See react-menu-generator-tests.js for an example of importing.
export const name = 'react-menu-generator';

import React, { Component } from 'react';

export default class MenuGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiClass: this.props.uiClass || '',
      liClass: this.props.rightBox || '',
      arrData: this.props.arrData || [],
    };
    this.menu = this.menu.bind(this);
    this.createMenu = this.createMenu.bind(this);
  }

  createMenu(element, arrData, options ) {
  const { ulClass, liClass } = options;
  let ul = document.createElement('ul');
  ul.className = ulClass;
  arrData.map(function(obj) {
    let li = document.createElement('li');
    li.className = liClass;
    let i = document.createElement('i');
    let innerContent;

    if (obj.link) {
      innerContent = document.createElement('a');
      innerContent.setAttribute('href', obj.link);
    } else {
      innerContent = document.createElement('span');
    }

    if (obj.icon) {
      i.className = obj.icon;
      innerContent.appendChild(i);
    }
    innerContent.innerHTML = obj.label;
    li.appendChild(innerContent);
    if (obj.class) {
      li.classList.add(obj.class);
    }
    if (obj.parentClass) {
      ul.classList.add(obj.parentClass);
    }
    if (obj.content) {
      createMenu(li, obj.content);
    }
    ul.appendChild(li);
  });
  element.appendChild(ul);
}

menu(){
  const element = document.getElementById('root');
  const liClass = this.state.liClass;
  const ulClass = this.state.ulClass;
  const options = { liClass, ulClass };
  {this.createMenu(element, this.state.arrData, options)}
}

  render() {
    return (
      <div id='root'>
      </div>
      // {this.menu()}
    );
  }

}
