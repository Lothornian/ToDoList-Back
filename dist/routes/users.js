'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Express = require('Express');

var _data = require('../data/data.js');

var _db = require('../db.js');

var _user = require('../data/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = new _Express.Router();

router.get('/', function (req, res) {

  return res.json(_data.users);
});

router.get('/:email', function (req, res) {

  var user = _data.users.filter(function (user) {
    return user.email === req.params.email;
  });
  return res.json(user);
});

router.post('/', function (req, res) {
  var user = new _user2.default(req.body.name, req.body.email);
  console.log(user);
  storeUser(user);
  return res.json(user);
});

var storeUser = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(user) {
    var userCollection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.getCollection)('users');

          case 2:
            userCollection = _context.sent;

            userCollection.insertOne(user);
            console.log("stored");

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function storeUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlcnMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsInVzZXIiLCJmaWx0ZXIiLCJlbWFpbCIsInBhcmFtcyIsInBvc3QiLCJib2R5IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZVVzZXIiLCJ1c2VyQ29sbGVjdGlvbiIsImluc2VydE9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0MsR0FBUCxDQUFZLEdBQVosRUFBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7O0FBRTdCLFNBQU9BLElBQUlDLElBQUosYUFBUDtBQUVELENBSkQ7O0FBTUFKLE9BQU9DLEdBQVAsQ0FBYSxTQUFiLEVBQXdCLFVBQUNDLEdBQUQsRUFBS0MsR0FBTCxFQUFhOztBQUVuQyxNQUFJRSxPQUFPLFlBQU1DLE1BQU4sQ0FBYztBQUFBLFdBQVFELEtBQUtFLEtBQUwsS0FBZUwsSUFBSU0sTUFBSixDQUFXRCxLQUFsQztBQUFBLEdBQWQsQ0FBWDtBQUNBLFNBQU9KLElBQUlDLElBQUosQ0FBU0MsSUFBVCxDQUFQO0FBRUQsQ0FMRDs7QUFPQUwsT0FBT1MsSUFBUCxDQUFjLEdBQWQsRUFBbUIsVUFBQ1AsR0FBRCxFQUFLQyxHQUFMLEVBQWE7QUFDOUIsTUFBSUUsT0FBTyxtQkFBU0gsSUFBSVEsSUFBSixDQUFTQyxJQUFsQixFQUF3QlQsSUFBSVEsSUFBSixDQUFTSCxLQUFqQyxDQUFYO0FBQ0FLLFVBQVFDLEdBQVIsQ0FBWVIsSUFBWjtBQUNBUyxZQUFVVCxJQUFWO0FBQ0EsU0FBT0YsSUFBSUMsSUFBSixDQUFTQyxJQUFULENBQVA7QUFDRCxDQUxEOztBQU9BLElBQU1TO0FBQUEsdURBQVksaUJBQU1ULElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYSx1QkFBYyxPQUFkLENBRGI7O0FBQUE7QUFDVlUsMEJBRFU7O0FBRWhCQSwyQkFBZUMsU0FBZixDQUF5QlgsSUFBekI7QUFDQU8sb0JBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQUhnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQU1lYixNIiwiZmlsZSI6InVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnRXhwcmVzcyc7XHJcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcclxuaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gJy4uL2RiLmpzJztcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2RhdGEvdXNlci5qc1wiO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCggJy8nLCAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKHVzZXJzKVxyXG5cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICggJy86ZW1haWwnLCAocmVxLHJlcykgPT4ge1xyXG5cclxuICBsZXQgdXNlciA9IHVzZXJzLmZpbHRlciggdXNlciA9PiB1c2VyLmVtYWlsID09PSByZXEucGFyYW1zLmVtYWlsKTtcclxuICByZXR1cm4gcmVzLmpzb24odXNlcik7XHJcblxyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0ICggJy8nLCAocmVxLHJlcykgPT4ge1xyXG4gIGxldCB1c2VyID0gbmV3IFVzZXIocmVxLmJvZHkubmFtZSwgcmVxLmJvZHkuZW1haWwgKTtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICBzdG9yZVVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlVXNlciA9IGFzeW5jKHVzZXIpID0+IHtcclxuICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGF3YWl0IGdldENvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgdXNlckNvbGxlY3Rpb24uaW5zZXJ0T25lKHVzZXIpO1xyXG4gIGNvbnNvbGUubG9nKFwic3RvcmVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdfQ==