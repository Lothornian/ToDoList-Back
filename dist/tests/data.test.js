'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _data = require('../data/data.js');

var _item = require('../data/item.js');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('Verifying test items', function (t) {
  var itemtest = new _item2.default(1, 'Thing one', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com');

  t.deepEqual(_data.items[0], itemtest, "Test items are not being created correctly");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9kYXRhLnRlc3QuanMiXSwibmFtZXMiOlsiaXRlbXRlc3QiLCJ0IiwiZGVlcEVxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLG1CQUFNLHNCQUFOLEVBQThCLGFBQUs7QUFDakMsTUFBSUEsV0FBVyxtQkFBVSxDQUFWLEVBQWEsV0FBYixFQUEwQix5Q0FBMUIsRUFBcUUsU0FBckUsRUFBZ0YscUJBQWhGLENBQWY7O0FBRUFDLElBQUVDLFNBQUYsQ0FBYSxZQUFNLENBQU4sQ0FBYixFQUF1QkYsUUFBdkIsRUFBaUMsNENBQWpDO0FBQ0QsQ0FKRCIsImZpbGUiOiJkYXRhLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnMsIGl0ZW1zIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vZGF0YS9pdGVtLmpzJztcclxuXHJcbnRlc3QoICdWZXJpZnlpbmcgdGVzdCBpdGVtcycsIHQgPT4ge1xyXG4gIGxldCBpdGVtdGVzdCA9IG5ldyBJdGVtKCAxLCAnVGhpbmcgb25lJywgJ1RoaXMgaXMgdGhlIGZpcnN0IHRoaW5nIEkgd2lsbCBiZSBkb2luZycsICc0LzE1LzE3JywgJ0t5bGVSSHVudEBHbWFpbC5jb20nICk7XHJcblxyXG4gIHQuZGVlcEVxdWFsKCBpdGVtc1swXSwgaXRlbXRlc3QsIFwiVGVzdCBpdGVtcyBhcmUgbm90IGJlaW5nIGNyZWF0ZWQgY29ycmVjdGx5XCIgKTtcclxufSk7XHJcbiJdfQ==