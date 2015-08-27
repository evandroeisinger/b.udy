## b.udy.js :dog2:  [![npm version](https://badge.fury.io/js/b.udy.js)](http://badge.fury.io/js/b.udy.js) [![Build Status](https://travis-ci.org/evandroeisinger/b.udy.js.svg?branch=master)](https://travis-ci.org/evandroeisinger/b.udy.js)

> A micro DOM library! With only one purpose: facilitate the creation and manipulation of DOM elements.

```javascript
npm install b.udy.js
```

### basic usage
```javascript
// load b.udy
var b = require('b.udy');
var element;

// to create a element and return it
element = b('div').element();

// to load a existing element
b(element);

// to set a element id
b(element).id('element-id');

// to set a element className
b(element).className('element-class other-element-class');

// to set a element attribute
b(element).attr('data-type', 'div');

// to unset a element attribute
b(element).removeAttr('data-type', 'div');

// to set a element listener
b(element).listener('click', clickListener);

// to unset a element listener
b(element).removeListener('click', clickListener);

// to set multiple properties
b(element).id('element').className('element-class').listener('click', clickListener);
```

### methods
- b***(nodeType | element)***: Create or load a DOM element;
- b.**element()**: Return the DOM element;
- b.**id(value)**: Set the DOM element id;
- b.**className(value)**: Set the DOM element className;
- b.**attr(key, value)**: Add a attribute to the DOM element;
- b.**removeAttr(key)**: Remove a attribute from the DOM element;
- b.**listener(eventType, callback)**: Add a event listener to the DOM element;
- b.**removeListener(eventType, callback)**: Remove a event listener from the DOM element;

### support
- chrome: **latest**;
- firefox: **latest**;
- safari: **latest**;
- internet explore: **9+**;

---
### contribute
Everyone can contribute! Finding bugs, creating issues, improving documentation, improving editor it self or creating components.
Every contribution will be welcomed! :santa:

**Fork it** -> **Branch it** -> **Test it** -> **Push it** -> **Pull Request it** :gem:
