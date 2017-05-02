'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _ava2.default)('foo', function (t) {
	t.pass();
});

(0, _ava2.default)('bar', function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(t) {
		var bar;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						bar = Promise.resolve('bar');
						_context.t0 = t;
						_context.next = 4;
						return bar;

					case 4:
						_context.t1 = _context.sent;

						_context.t0.is.call(_context.t0, _context.t1, 'bar');

					case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy90ZXN0LmpzIl0sIm5hbWVzIjpbInQiLCJwYXNzIiwiYmFyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7QUFFQSxtQkFBSyxLQUFMLEVBQVksYUFBSztBQUNoQkEsR0FBRUMsSUFBRjtBQUNBLENBRkQ7O0FBSUEsbUJBQUssS0FBTDtBQUFBLHNEQUFZLGlCQUFNRCxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMRSxTQURLLEdBQ0NDLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FERDtBQUFBLG9CQUdYSixDQUhXO0FBQUE7QUFBQSxhQUdBRSxHQUhBOztBQUFBO0FBQUE7O0FBQUEsa0JBR1RHLEVBSFMsZ0NBR0ssS0FITDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdhdmEnO1xyXG5cclxudGVzdCgnZm9vJywgdCA9PiB7XHJcblx0dC5wYXNzKCk7XHJcbn0pO1xyXG5cclxudGVzdCgnYmFyJywgYXN5bmMgdCA9PiB7XHJcblx0Y29uc3QgYmFyID0gUHJvbWlzZS5yZXNvbHZlKCdiYXInKTtcclxuXHJcblx0dC5pcyhhd2FpdCBiYXIsICdiYXInKTtcclxufSk7XHJcbiJdfQ==