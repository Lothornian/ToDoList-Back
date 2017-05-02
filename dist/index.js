'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _data = require('./data/data.js');

var _users = require('./routes/users.js');

var _users2 = _interopRequireDefault(_users);

var _items = require('./routes/items.js');

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * index.js
 * sets up our routes and prepopulates seed data.
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */

var ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = (0, _express2.default)();
var port = process.env.PORT || 5000;

console.log(port);

//Only load seed data when in development
if (ENV === 'development') {
  (0, _data.deleteData)();
  (0, _data.loadData)();
};

//Create routes for users and items.
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use('/users', _users2.default);
app.use('/items', _items2.default);

app.listen(port, function () {
  return console.log('App start: http://localhost:' + port);
});

exports.default = app;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFTlYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJwb3J0IiwiUE9SVCIsImNvbnNvbGUiLCJsb2ciLCJ1c2UiLCJqc29uIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNQSxNQUFNQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosR0FBdUJGLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixhQUEzRDtBQUNBLElBQU1DLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxPQUFPSixRQUFRQyxHQUFSLENBQVlJLElBQVosSUFBb0IsSUFBakM7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWUgsSUFBWjs7QUFFQTtBQUNBLElBQUlMLFFBQVEsYUFBWixFQUEyQjtBQUN6QjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQUksSUFBSUssR0FBSixDQUFRLHFCQUFSO0FBQ0FMLElBQUlLLEdBQUosQ0FBUSxxQkFBT0MsSUFBUCxFQUFSO0FBQ0FOLElBQUlLLEdBQUosQ0FBUSxRQUFSO0FBQ0FMLElBQUlLLEdBQUosQ0FBUSxRQUFSOztBQUVBTCxJQUFJTyxNQUFKLENBQVdOLElBQVgsRUFBaUI7QUFBQSxTQUFNRSxRQUFRQyxHQUFSLGtDQUEyQ0gsSUFBM0MsQ0FBTjtBQUFBLENBQWpCOztrQkFFZUQsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5pbXBvcnQge2xvYWREYXRhfSBmcm9tICcuL2RhdGEvZGF0YS5qcyc7XHJcbmltcG9ydCB7ZGVsZXRlRGF0YX0gZnJvbSAnLi9kYXRhL2RhdGEuanMnO1xyXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi9yb3V0ZXMvdXNlcnMuanMnO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9yb3V0ZXMvaXRlbXMuanMnO1xyXG5cclxuLypcclxuICogaW5kZXguanNcclxuICogc2V0cyB1cCBvdXIgcm91dGVzIGFuZCBwcmVwb3B1bGF0ZXMgc2VlZCBkYXRhLlxyXG4gKiBBdXRob3I6IEt5bGUgSHVudFxyXG4gKiBDcmVhdGVkIERhdGU6IDQvMTUvMTdcclxuICogTGFzdCBVcGRhdGVkOiA0LzE1LzE3XHJcbiAqL1xyXG5cclxuY29uc3QgRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBhcHAgPSBFeHByZXNzKCk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XHJcblxyXG5jb25zb2xlLmxvZyhwb3J0KTtcclxuXHJcbi8vT25seSBsb2FkIHNlZWQgZGF0YSB3aGVuIGluIGRldmVsb3BtZW50XHJcbmlmKCBFTlYgPT09ICdkZXZlbG9wbWVudCcgKXtcclxuICBkZWxldGVEYXRhKCk7XHJcbiAgbG9hZERhdGEoKTtcclxufTtcclxuXHJcbi8vQ3JlYXRlIHJvdXRlcyBmb3IgdXNlcnMgYW5kIGl0ZW1zLlxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoUGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoJy91c2VycycsIHVzZXJzKTtcclxuYXBwLnVzZSgnL2l0ZW1zJywgaXRlbXMpO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgQXBwIHN0YXJ0OiBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiJdfQ==