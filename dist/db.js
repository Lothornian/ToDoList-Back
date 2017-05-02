'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollection = undefined;

var _mongodb = require('mongodb');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var schema = 'ToDoList';
var port = '27017';

var mongoUri = process.env.MONGO_URI || 'mongodb://localhost:' + port + '/' + schema;

var connect = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongodb.MongoClient.connect(mongoUri);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = connect;
var getCollection = exports.getCollection = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(collectionIWant) {
    var db;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return connect();

          case 2:
            db = _context2.sent;
            return _context2.abrupt('return', db.collection(collectionIWant));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getCollection(_x) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJwb3J0IiwibW9uZ29VcmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiY29ubmVjdCIsImdldENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uSVdhbnQiLCJkYiIsImNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLFNBQVMsVUFBZjtBQUNBLElBQU1DLE9BQU8sT0FBYjs7QUFFQSxJQUFNQyxXQUFXQyxRQUFRQyxHQUFSLENBQVlDLFNBQVosNkJBQWdESixJQUFoRCxTQUF3REQsTUFBekU7O0FBRUEsSUFBTU07QUFBQSx1REFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBa0IscUJBQVlBLE9BQVosQ0FBb0JKLFFBQXBCLENBQWxCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFFZUksTztBQUVSLElBQU1DO0FBQUEsd0RBQWdCLGtCQUFPQyxlQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZGLFNBRFU7O0FBQUE7QUFDckJHLGNBRHFCO0FBQUEsOENBRXBCQSxHQUFHQyxVQUFILENBQWNGLGVBQWQsQ0FGb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTiIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCBzY2hlbWEgPSAnVG9Eb0xpc3QnO1xyXG5jb25zdCBwb3J0ID0gJzI3MDE3JztcclxuXHJcbmNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJIHx8IGBtb25nb2RiOi8vbG9jYWxob3N0OiR7cG9ydH0vJHtzY2hlbWF9YDtcclxuXHJcbmNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KG1vbmdvVXJpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29sbGVjdGlvbiA9IGFzeW5jIChjb2xsZWN0aW9uSVdhbnQpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3QoKTtcclxuICByZXR1cm4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uSVdhbnQpO1xyXG59O1xyXG4iXX0=