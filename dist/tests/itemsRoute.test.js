'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _data = require('../data/data.js');

var _items = require('../routes/items.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_ava2.default.before("Clear and load data", function (t) {
  (0, _data.deleteData)();
  (0, _data.loadData)();
});

(0, _ava2.default)('Getting a specific item from Mongo', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(t) {
    var response, testItem;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _items.getItem)(2);

          case 2:
            response = _context.sent;
            testItem = response[0];

            t.is(testItem.id, _data.item2.id, "Item returned from Mongo does not match");

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9pdGVtc1JvdXRlLnRlc3QuanMiXSwibmFtZXMiOlsiYmVmb3JlIiwidCIsInJlc3BvbnNlIiwidGVzdEl0ZW0iLCJpcyIsImlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUE7O0FBR0E7Ozs7OztBQUdBLGNBQUtBLE1BQUwsQ0FBYSxxQkFBYixFQUFvQyxhQUFLO0FBQ3ZDO0FBQ0E7QUFDRCxDQUhEOztBQUtBLG1CQUFNLG9DQUFOO0FBQUEsdURBQTJDLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3BCLG9CQUFRLENBQVIsQ0FEb0I7O0FBQUE7QUFDckNDLG9CQURxQztBQUVyQ0Msb0JBRnFDLEdBRTFCRCxTQUFTLENBQVQsQ0FGMEI7O0FBR3pDRCxjQUFFRyxFQUFGLENBQU1ELFNBQVNFLEVBQWYsRUFBbUIsWUFBTUEsRUFBekIsRUFBNkIseUNBQTdCOztBQUh5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJpdGVtc1JvdXRlLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnO1xyXG5cclxuaW1wb3J0IHtsb2FkRGF0YX0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcclxuaW1wb3J0IHtkZWxldGVEYXRhfSBmcm9tICcuLi9kYXRhL2RhdGEuanMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0SXRlbSB9IGZyb20gJy4uL3JvdXRlcy9pdGVtcy5qcyc7XHJcbmltcG9ydCB7IGl0ZW0yIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcclxuXHJcbnRlc3QuYmVmb3JlKCBcIkNsZWFyIGFuZCBsb2FkIGRhdGFcIiwgdCA9PiB7XHJcbiAgZGVsZXRlRGF0YSgpO1xyXG4gIGxvYWREYXRhKCk7XHJcbn0pO1xyXG5cclxudGVzdCggJ0dldHRpbmcgYSBzcGVjaWZpYyBpdGVtIGZyb20gTW9uZ28nLGFzeW5jIHQgPT4ge1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEl0ZW0oMik7XHJcbiAgbGV0IHRlc3RJdGVtID0gcmVzcG9uc2VbMF07XHJcbiAgdC5pcyggdGVzdEl0ZW0uaWQsIGl0ZW0yLmlkLCBcIkl0ZW0gcmV0dXJuZWQgZnJvbSBNb25nbyBkb2VzIG5vdCBtYXRjaFwiICk7XHJcbn0pO1xyXG4iXX0=