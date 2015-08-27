function b (element) {
    'use strict';

    if (typeof element === 'string') element = document.createElement(element);

    function setListener (type, callback) {
        this.__element.addEventListener(type, callback);

        return this;
    }

    function unsetListener (type, callback) {
        this.__element.removeEventListener(type, callback);

        return this;
    }

    function setClassName (value) {
        this.__element.className = value.replace(/\s+/g, ' ').trim();

        return this;
    }

    function setId (value) {
        this.__element.id = value;

        return this
    }

    function setAttr (key, value) {
        this.__element.setAttribute(key, value);

        return this;
    }

    function unsetAttr (key) {
        this.__element.removeAttribute(key);

        return this;
    }

    function returnElement () {
        return this.__element;
    }

    return {
        __element: element,
        id: setId,
        className: setClassName,
        attr: setAttr,
        removeAttr: unsetAttr,
        listener: setListener,
        removeListener: unsetListener,
        element: returnElement,
    }
}

module.exports = b;
