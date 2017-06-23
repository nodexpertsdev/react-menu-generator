export const name = 'react-menu-generator';

import React, { Component } from 'react';

export default class MenuGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ulClass: this.props.ulClass || '',
      liClass: this.props.liClass || '',
      arrData: this.props.arrData || [],
    };
    this.menu = this.menu.bind(this);
    this.createMenu = this.createMenu.bind(this);
  }

  componentDidMount(){
    {this.menu()}
  }

  createMenu (element, arrData, options ) {
    const { ulClass, liClass } = options;
    let ul = document.createElement('ul');
    ul.className = ulClass;
    arrData.map(obj => {
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
        this.createMenu(li, obj.content, options);
      }
      ul.appendChild(li);
    });
    element.appendChild(ul);
  }

  menu(){
    const element = document.getElementById('root');

    const options = {};
    options.liClass = this.state.liClass;
    options.ulClass = this.state.ulClass;

    {this.createMenu(element, this.state.arrData, options)}
  }

  render() {
    return (
      <div id='root'>
      </div>
    );
  }
}
