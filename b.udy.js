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
        this.__element.className = value.replace(/\s+/g, ' ');

        return this;
    }

    function setAttr (key, value) {
        this.__element.setAttribute(key, value);

        return this;
    }

    function setData (key, value) {
        return this.attr('data-' + key, value);
    }

    function setId (value) {
        return this.attr('id', value);
    }

    function returnElement () {
        return this.__element;
    }

    return {
        __element: element,
        id: setId,
        className: setClassName,
        attr: setAttr,
        data: setData,
        listen: setListener,
        unlisten: unsetListener,
        element: returnElement,
    }
}

module.exports = b;
