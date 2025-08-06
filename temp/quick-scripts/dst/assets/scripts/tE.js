
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tE.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd306dQjHl5AJbe+g7xzVEUS', 'tE');
// scripts/tE.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var n = function () {
  function t() {
    this._1 = [];
    this._2 = [];
  }

  t.prototype.on = function (t) {
    var e = this;

    e._1.push(t);

    return function () {
      return e.off(t);
    };
  };

  t.prototype.once = function (t) {
    var e = this;

    e._2.push(t);

    return function () {
      return e.off(t);
    };
  };

  t.prototype.off = function (t) {
    var e = this;

    var o = e._1.indexOf(t);

    o > -1 && e._1.splice(o, 1);
    (o = e._2.indexOf(t)) > -1 && e._2.splice(o, 1);
  };

  t.prototype.emit = function (t) {
    var e = this;

    e._1.forEach(function (e) {
      return e(t);
    });

    e._2.forEach(function (e) {
      return e(t);
    });

    e._2 = [];
  };

  t.prototype.pipe = function (t) {
    return this.on(function (e) {
      return t.emit(e);
    });
  };

  t.prototype.clear = function () {
    this._1 = [];
    this._2 = [];
  };

  return t;
}();

exports["default"] = n;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdEUuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJuIiwidCIsIl8xIiwiXzIiLCJwcm90b3R5cGUiLCJvbiIsImUiLCJwdXNoIiwib2ZmIiwib25jZSIsIm8iLCJpbmRleE9mIiwic3BsaWNlIiwiZW1pdCIsImZvckVhY2giLCJwaXBlIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFBQ0MsS0FBSyxFQUFFLENBQUM7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxFQUFMLEdBQVUsRUFBVjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxFQUFWO0VBQ0g7O0VBQ0RGLENBQUMsQ0FBQ0csU0FBRixDQUFZQyxFQUFaLEdBQWlCLFVBQVVKLENBQVYsRUFBYTtJQUMxQixJQUFJSyxDQUFDLEdBQUcsSUFBUjs7SUFDQUEsQ0FBQyxDQUFDSixFQUFGLENBQUtLLElBQUwsQ0FBVU4sQ0FBVjs7SUFDQSxPQUFPLFlBQVk7TUFDZixPQUFPSyxDQUFDLENBQUNFLEdBQUYsQ0FBTVAsQ0FBTixDQUFQO0lBQ0gsQ0FGRDtFQUdILENBTkQ7O0VBT0FBLENBQUMsQ0FBQ0csU0FBRixDQUFZSyxJQUFaLEdBQW1CLFVBQVVSLENBQVYsRUFBYTtJQUM1QixJQUFJSyxDQUFDLEdBQUcsSUFBUjs7SUFDQUEsQ0FBQyxDQUFDSCxFQUFGLENBQUtJLElBQUwsQ0FBVU4sQ0FBVjs7SUFDQSxPQUFPLFlBQVk7TUFDZixPQUFPSyxDQUFDLENBQUNFLEdBQUYsQ0FBTVAsQ0FBTixDQUFQO0lBQ0gsQ0FGRDtFQUdILENBTkQ7O0VBT0FBLENBQUMsQ0FBQ0csU0FBRixDQUFZSSxHQUFaLEdBQWtCLFVBQVVQLENBQVYsRUFBYTtJQUMzQixJQUFJSyxDQUFDLEdBQUcsSUFBUjs7SUFDQSxJQUFJSSxDQUFDLEdBQUdKLENBQUMsQ0FBQ0osRUFBRixDQUFLUyxPQUFMLENBQWFWLENBQWIsQ0FBUjs7SUFDQVMsQ0FBQyxHQUFHLENBQUMsQ0FBTCxJQUFVSixDQUFDLENBQUNKLEVBQUYsQ0FBS1UsTUFBTCxDQUFZRixDQUFaLEVBQWUsQ0FBZixDQUFWO0lBQ0EsQ0FBQ0EsQ0FBQyxHQUFHSixDQUFDLENBQUNILEVBQUYsQ0FBS1EsT0FBTCxDQUFhVixDQUFiLENBQUwsSUFBd0IsQ0FBQyxDQUF6QixJQUE4QkssQ0FBQyxDQUFDSCxFQUFGLENBQUtTLE1BQUwsQ0FBWUYsQ0FBWixFQUFlLENBQWYsQ0FBOUI7RUFDSCxDQUxEOztFQU1BVCxDQUFDLENBQUNHLFNBQUYsQ0FBWVMsSUFBWixHQUFtQixVQUFVWixDQUFWLEVBQWE7SUFDNUIsSUFBSUssQ0FBQyxHQUFHLElBQVI7O0lBQ0FBLENBQUMsQ0FBQ0osRUFBRixDQUFLWSxPQUFMLENBQWEsVUFBVVIsQ0FBVixFQUFhO01BQ3RCLE9BQU9BLENBQUMsQ0FBQ0wsQ0FBRCxDQUFSO0lBQ0gsQ0FGRDs7SUFHQUssQ0FBQyxDQUFDSCxFQUFGLENBQUtXLE9BQUwsQ0FBYSxVQUFVUixDQUFWLEVBQWE7TUFDdEIsT0FBT0EsQ0FBQyxDQUFDTCxDQUFELENBQVI7SUFDSCxDQUZEOztJQUdBSyxDQUFDLENBQUNILEVBQUYsR0FBTyxFQUFQO0VBQ0gsQ0FURDs7RUFVQUYsQ0FBQyxDQUFDRyxTQUFGLENBQVlXLElBQVosR0FBbUIsVUFBVWQsQ0FBVixFQUFhO0lBQzVCLE9BQU8sS0FBS0ksRUFBTCxDQUFRLFVBQVVDLENBQVYsRUFBYTtNQUN4QixPQUFPTCxDQUFDLENBQUNZLElBQUYsQ0FBT1AsQ0FBUCxDQUFQO0lBQ0gsQ0FGTSxDQUFQO0VBR0gsQ0FKRDs7RUFLQUwsQ0FBQyxDQUFDRyxTQUFGLENBQVlZLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLZCxFQUFMLEdBQVUsRUFBVjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxFQUFWO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPRixDQUFQO0FBQ0gsQ0E3Q08sRUFBUjs7QUE4Q0FILE9BQU8sV0FBUCxHQUFrQkUsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiAhMH0pO1xudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuXzEgPSBbXTtcbiAgICAgICAgdGhpcy5fMiA9IFtdO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgZS5fMS5wdXNoKHQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUub2ZmKHQpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgZS5fMi5wdXNoKHQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUub2ZmKHQpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB2YXIgbyA9IGUuXzEuaW5kZXhPZih0KTtcbiAgICAgICAgbyA+IC0xICYmIGUuXzEuc3BsaWNlKG8sIDEpO1xuICAgICAgICAobyA9IGUuXzIuaW5kZXhPZih0KSkgPiAtMSAmJiBlLl8yLnNwbGljZShvLCAxKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGUuXzEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUodCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlLl8yLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlKHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS5fMiA9IFtdO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdC5lbWl0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl8xID0gW107XG4gICAgICAgIHRoaXMuXzIgPSBbXTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG47XG4iXX0=