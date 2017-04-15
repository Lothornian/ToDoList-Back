'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routes/users.js');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5000;

app.use(_bodyParser2.default.json());
app.use('/users', _users2.default);
// app.use('/items', data);

app.listen(port, function () {
  return console.log('App start: http://localhost:' + port);
});

exports.default = app;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJ1c2UiLCJqc29uIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUVBSixJQUFJSyxHQUFKLENBQVEscUJBQU9DLElBQVAsRUFBUjtBQUNBTixJQUFJSyxHQUFKLENBQVEsUUFBUjtBQUNBOztBQUVBTCxJQUFJTyxNQUFKLENBQVdOLElBQVgsRUFBaUI7QUFBQSxTQUFNTyxRQUFRQyxHQUFSLGtDQUEyQ1IsSUFBM0MsQ0FBTjtBQUFBLENBQWpCOztrQkFFZUQsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmltcG9ydCB1c2VycyBmcm9tICcuL3JvdXRlcy91c2Vycy5qcyc7XHJcblxyXG5jb25zdCBhcHAgPSBFeHByZXNzKCk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XHJcblxyXG5hcHAudXNlKFBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKCcvdXNlcnMnLCB1c2Vycyk7XHJcbi8vIGFwcC51c2UoJy9pdGVtcycsIGRhdGEpO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgQXBwIHN0YXJ0OiBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiJdfQ==