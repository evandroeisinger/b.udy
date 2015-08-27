'use strict';

var b = require('../b.udy');

describe('b.udy', function () {
  describe('create/load element', function () {
    it('should create a element and return it', function () {
      expect(b('div').element().tagName).toEqual('DIV');
      expect(b('a').element().tagName).toEqual('A');
      expect(b('h1').element().tagName).toEqual('H1');
      expect(b('input').element().tagName).toEqual('INPUT');
    });

    it('should load a existing element and return it', function () {
      var element = document.createElement('a');

      element.className = 'element';
      element.id = 123;
      element.href = 'http://link.com';
      element.setAttribute('target', '_blank');

      expect(b(element).element().tagName).toEqual('A');
      expect(b(element).element().className).toEqual('element');
      expect(b(element).element().id).toEqual('123');
      expect(b(element).element().getAttribute('target')).toEqual('_blank');
    });
  });

  describe('id', function () {
    it('should set a element ID', function () {
      expect(b('div').id(123).element().id).toEqual('123');
    });

    it('should override a element ID', function () {
      var element = document.createElement('div');
      element.id = 123;

      expect(b(element).element().id).not.toEqual('321');
      expect(b(element).id(321).element().id).toEqual('321');
    });
  });

  describe('className', function () {
    it('should set a element className', function () {
      expect(b('div').className('testClass').element().className).toEqual('testClass');
    });

    it('should treat className to be set', function () {
      expect(b('div').className(' test   with  spaces ').element().className).toEqual('test with spaces');
    });

    it('should override a element className', function () {
      var element = document.createElement('div');
      element.className = 'class';

      expect(b(element).element().className).not.toEqual('override-class');
      expect(b(element).className('override-class').element().className).toEqual('override-class');
    });
  });

  describe('attr', function () {
    it('should set a element attr', function () {
      expect(b('div').attr('class', 'test').element().getAttribute('class')).toEqual('test');
    });

    it('should set a element data attr', function () {
      expect(b('div').data('info', 'test').element().getAttribute('data-info')).toEqual('test');
    });

    it('should override a element attr', function () {
      var element = document.createElement('div');
      element.setAttribute('test', '123');
      element.setAttribute('data-test', '123');

      expect(b(element).element().getAttribute('test')).not.toEqual('321');
      expect(b(element).attr('test', 321).element().getAttribute('test')).toEqual('321');

      expect(b(element).element().getAttribute('data-test')).not.toEqual('321');
      expect(b(element).data('test', 321).element().getAttribute('data-test')).toEqual('321');
    });
  });

  describe('listeners', function () {
    var emitEvent = function (element, type){
      var event = document.createEvent('Events');
      event.initEvent(type, true, false);

      element.dispatchEvent(event);
    };

    it('should set a listener into element', function () {
      var counter = 0;
      var clickLitener = function () { counter++;};
      var element = b('div').on('click', clickLitener).element();

      emitEvent(element, 'click');
      expect(counter).toBe(1);
    });

    it('should unset a listener into element', function () {
      var counter = 0;
      var clickLitener = function () { counter++;};
      var element = b('div').element();

      b(element).on('click', clickLitener);
      b(element).off('click', clickLitener);
      emitEvent(element, 'click');

      expect(counter).toBe(0);
    });
  });
});
