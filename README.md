react-menu-generator

react-menu-generator is a react component that is an automatic menu generator for your meteor based react application.

### Installation

```
meteor add nodexpert:react-menu-generator
```

### Import

```
import MenuGenerator from 'meteor/nodexpert:react-menu-generator';
```
### Using MenuGenerator
Pass the value of ulClass, liClass and arrData in component.
```
<MenuGenerator
  ulClass='First'
  liClass='Second'
  arrData={this.state.arrData}
/>
```
#### Know-about
1. Pass an array of objects in arrData to create menu.
2. ulClass and liClass are defined here as global classes to automatically add in each ul and li tag.
3. ulClass and liClass are optional.

#### About data object
1. class - To add specific class with respect to tag.
2. link  - To create a hyperlink.
3. label - To give label to the link or list item.
4. icon  - To add icon.

#### Structure of arrData
```
[{
  icon: 'icon-class-name',
  class: 'style',
  label: 'Label of Item',
  link: '#a-link',
}, {
  icon: 'icon-class-name',
  label: 'Second Item',
  content: [{
    icon: 'icon-class-name',
    label: 'Sub Menu of Second Item',
    link: '#another-link',
  }, ],
}, ]
```

#### Default values
```
liClass - ''
ulClass - ''
arrData = []
```

## Running the tests

Explain how to run the automated tests for this system.
