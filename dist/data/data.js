'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.items = exports.user1 = exports.item2 = exports.item1 = undefined;

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item1 = exports.item1 = new _item2.default(1, 'First thing', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com');
var item2 = exports.item2 = new _item2.default(2, 'second thing', "I'll do this after the first thing", '4/16/17', 'KyleRHunt@Gmail.com');

var user1 = exports.user1 = new _user2.default('Kyle Hunt', 'KyleRHunt@Gmail.com');

var items = exports.items = [item1, item2];
var users = exports.users = [user1];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2RhdGEuanMiXSwibmFtZXMiOlsiaXRlbTEiLCJpdGVtMiIsInVzZXIxIiwiaXRlbXMiLCJ1c2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQUlBLHdCQUFRLG1CQUFVLENBQVYsRUFBYSxhQUFiLEVBQTRCLHlDQUE1QixFQUF1RSxTQUF2RSxFQUFrRixxQkFBbEYsQ0FBWjtBQUNBLElBQUlDLHdCQUFRLG1CQUFVLENBQVYsRUFBYSxjQUFiLEVBQTZCLG9DQUE3QixFQUFtRSxTQUFuRSxFQUE4RSxxQkFBOUUsQ0FBWjs7QUFFQSxJQUFNQyx3QkFBUSxtQkFBVSxXQUFWLEVBQXVCLHFCQUF2QixDQUFkOztBQUVBLElBQUlDLHdCQUFRLENBQUNILEtBQUQsRUFBUUMsS0FBUixDQUFaO0FBQ0EsSUFBSUcsd0JBQVEsQ0FBQ0YsS0FBRCxDQUFaIiwiZmlsZSI6ImRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXRlbSBmcm9tICcuL2l0ZW0nO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIuanMnO1xyXG5cclxuZXhwb3J0IGxldCBpdGVtMSA9IG5ldyBpdGVtKCAxLCAnRmlyc3QgdGhpbmcnLCAnVGhpcyBpcyB0aGUgZmlyc3QgdGhpbmcgSSB3aWxsIGJlIGRvaW5nJywgJzQvMTUvMTcnLCAnS3lsZVJIdW50QEdtYWlsLmNvbScgKTtcclxuZXhwb3J0IGxldCBpdGVtMiA9IG5ldyBpdGVtKCAyLCAnc2Vjb25kIHRoaW5nJywgXCJJJ2xsIGRvIHRoaXMgYWZ0ZXIgdGhlIGZpcnN0IHRoaW5nXCIsICc0LzE2LzE3JywgJ0t5bGVSSHVudEBHbWFpbC5jb20nICk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcjEgPSBuZXcgdXNlciggJ0t5bGUgSHVudCcsICdLeWxlUkh1bnRAR21haWwuY29tJyApO1xyXG5cclxuZXhwb3J0IGxldCBpdGVtcyA9IFtpdGVtMSwgaXRlbTJdO1xyXG5leHBvcnQgbGV0IHVzZXJzID0gW3VzZXIxXTtcclxuIl19