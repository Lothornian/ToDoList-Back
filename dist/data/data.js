'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteData = exports.loadData = exports.users = exports.items = exports.user2 = exports.user1 = exports.item3 = exports.item2 = exports.item1 = undefined;

var _db = require('../db.js');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * data.js
 * Used to generate seed data to populate development for testing purposes.
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */

// Seed Items
var item1 = exports.item1 = new _item2.default(1, 'Thing one', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com');
var item2 = exports.item2 = new _item2.default(2, 'Thing two', "I'll do this after the first thing", '4/16/17', 'KyleRHunt@Gmail.com');
var item3 = exports.item3 = new _item2.default(3, 'Thing red', "This one is red", '4/16/17', 'KyleRHunt@Gmail.com');

//Seed Users
var user1 = exports.user1 = new _user2.default('Kyle Hunt', 'KyleRHunt@Gmail.com');
var user2 = exports.user2 = new _user2.default('John', 'John@gmail.com');

//Arrays of data for reference
var items = exports.items = [item1, item2];
var users = exports.users = [user1, user2];

/*
 * loadData()
 * used to load seed data into Mongo
 */
var loadData = exports.loadData = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var userCollection, itemCollection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.getCollection)('users');

          case 2:
            userCollection = _context.sent;
            _context.next = 5;
            return (0, _db.getCollection)('items');

          case 5:
            itemCollection = _context.sent;
            _context.next = 8;
            return userCollection.insertMany([user1, user2]);

          case 8:
            _context.next = 10;
            return itemCollection.insertMany([item1, item2, item3]);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function loadData() {
    return _ref.apply(this, arguments);
  };
}();

/*
 * deleteData()
 * used to clear out the development database to "reset" seed data
 */
var deleteData = exports.deleteData = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var userCollection, itemCollection;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _db.getCollection)('users');

          case 2:
            userCollection = _context2.sent;
            _context2.next = 5;
            return (0, _db.getCollection)('items');

          case 5:
            itemCollection = _context2.sent;
            _context2.next = 8;
            return userCollection.remove({});

          case 8:
            _context2.next = 10;
            return itemCollection.remove({});

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function deleteData() {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2RhdGEuanMiXSwibmFtZXMiOlsiaXRlbTEiLCJpdGVtMiIsIml0ZW0zIiwidXNlcjEiLCJ1c2VyMiIsIml0ZW1zIiwidXNlcnMiLCJsb2FkRGF0YSIsInVzZXJDb2xsZWN0aW9uIiwiaXRlbUNvbGxlY3Rpb24iLCJpbnNlcnRNYW55IiwiZGVsZXRlRGF0YSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDTyxJQUFJQSx3QkFBUSxtQkFBVSxDQUFWLEVBQWEsV0FBYixFQUEwQix5Q0FBMUIsRUFBcUUsU0FBckUsRUFBZ0YscUJBQWhGLENBQVo7QUFDQSxJQUFJQyx3QkFBUSxtQkFBVSxDQUFWLEVBQWEsV0FBYixFQUEwQixvQ0FBMUIsRUFBZ0UsU0FBaEUsRUFBMkUscUJBQTNFLENBQVo7QUFDQSxJQUFJQyx3QkFBUSxtQkFBVSxDQUFWLEVBQWEsV0FBYixFQUEwQixpQkFBMUIsRUFBNkMsU0FBN0MsRUFBd0QscUJBQXhELENBQVo7O0FBRVA7QUFDTyxJQUFNQyx3QkFBUSxtQkFBVSxXQUFWLEVBQXVCLHFCQUF2QixDQUFkO0FBQ0EsSUFBTUMsd0JBQVEsbUJBQVUsTUFBVixFQUFrQixnQkFBbEIsQ0FBZDs7QUFFUDtBQUNPLElBQUlDLHdCQUFRLENBQUNMLEtBQUQsRUFBUUMsS0FBUixDQUFaO0FBQ0EsSUFBSUssd0JBQVEsQ0FBQ0gsS0FBRCxFQUFRQyxLQUFSLENBQVo7O0FBRVA7Ozs7QUFJTyxJQUFNRztBQUFBLHVEQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ08sdUJBQWMsT0FBZCxDQURQOztBQUFBO0FBQ2hCQywwQkFEZ0I7QUFBQTtBQUFBLG1CQUVPLHVCQUFjLE9BQWQsQ0FGUDs7QUFBQTtBQUVoQkMsMEJBRmdCO0FBQUE7QUFBQSxtQkFJaEJELGVBQWVFLFVBQWYsQ0FBMkIsQ0FBQ1AsS0FBRCxFQUFRQyxLQUFSLENBQTNCLENBSmdCOztBQUFBO0FBQUE7QUFBQSxtQkFLaEJLLGVBQWVDLFVBQWYsQ0FBMkIsQ0FBQ1YsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLEtBQWYsQ0FBM0IsQ0FMZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQVFQOzs7O0FBSU8sSUFBTVM7QUFBQSx3REFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNLLHVCQUFjLE9BQWQsQ0FETDs7QUFBQTtBQUNsQkgsMEJBRGtCO0FBQUE7QUFBQSxtQkFFSyx1QkFBYyxPQUFkLENBRkw7O0FBQUE7QUFFbEJDLDBCQUZrQjtBQUFBO0FBQUEsbUJBSWxCRCxlQUFlSSxNQUFmLENBQXNCLEVBQXRCLENBSmtCOztBQUFBO0FBQUE7QUFBQSxtQkFLbEJILGVBQWVHLE1BQWYsQ0FBc0IsRUFBdEIsQ0FMa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOIiwiZmlsZSI6ImRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZGIuanMnO1xyXG5pbXBvcnQgaXRlbSBmcm9tICcuL2l0ZW0nO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIuanMnO1xyXG5cclxuLypcclxuICogZGF0YS5qc1xyXG4gKiBVc2VkIHRvIGdlbmVyYXRlIHNlZWQgZGF0YSB0byBwb3B1bGF0ZSBkZXZlbG9wbWVudCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cclxuICogQXV0aG9yOiBLeWxlIEh1bnRcclxuICogQ3JlYXRlZCBEYXRlOiA0LzE1LzE3XHJcbiAqIExhc3QgVXBkYXRlZDogNC8xNS8xN1xyXG4gKi9cclxuXHJcbi8vIFNlZWQgSXRlbXNcclxuZXhwb3J0IGxldCBpdGVtMSA9IG5ldyBpdGVtKCAxLCAnVGhpbmcgb25lJywgJ1RoaXMgaXMgdGhlIGZpcnN0IHRoaW5nIEkgd2lsbCBiZSBkb2luZycsICc0LzE1LzE3JywgJ0t5bGVSSHVudEBHbWFpbC5jb20nICk7XHJcbmV4cG9ydCBsZXQgaXRlbTIgPSBuZXcgaXRlbSggMiwgJ1RoaW5nIHR3bycsIFwiSSdsbCBkbyB0aGlzIGFmdGVyIHRoZSBmaXJzdCB0aGluZ1wiLCAnNC8xNi8xNycsICdLeWxlUkh1bnRAR21haWwuY29tJyApO1xyXG5leHBvcnQgbGV0IGl0ZW0zID0gbmV3IGl0ZW0oIDMsICdUaGluZyByZWQnLCBcIlRoaXMgb25lIGlzIHJlZFwiLCAnNC8xNi8xNycsICdLeWxlUkh1bnRAR21haWwuY29tJyApO1xyXG5cclxuLy9TZWVkIFVzZXJzXHJcbmV4cG9ydCBjb25zdCB1c2VyMSA9IG5ldyB1c2VyKCAnS3lsZSBIdW50JywgJ0t5bGVSSHVudEBHbWFpbC5jb20nICk7XHJcbmV4cG9ydCBjb25zdCB1c2VyMiA9IG5ldyB1c2VyKCAnSm9obicsICdKb2huQGdtYWlsLmNvbScgKTtcclxuXHJcbi8vQXJyYXlzIG9mIGRhdGEgZm9yIHJlZmVyZW5jZVxyXG5leHBvcnQgbGV0IGl0ZW1zID0gW2l0ZW0xLCBpdGVtMl07XHJcbmV4cG9ydCBsZXQgdXNlcnMgPSBbdXNlcjEsIHVzZXIyXTtcclxuXHJcbi8qXHJcbiAqIGxvYWREYXRhKClcclxuICogdXNlZCB0byBsb2FkIHNlZWQgZGF0YSBpbnRvIE1vbmdvXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYygpID0+IHtcclxuICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGF3YWl0IGdldENvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcbiAgY29uc3QgaXRlbUNvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKCdpdGVtcycpO1xyXG5cclxuICBhd2FpdCB1c2VyQ29sbGVjdGlvbi5pbnNlcnRNYW55KCBbdXNlcjEsIHVzZXIyXSApO1xyXG4gIGF3YWl0IGl0ZW1Db2xsZWN0aW9uLmluc2VydE1hbnkoIFtpdGVtMSwgaXRlbTIsIGl0ZW0zXSApO1xyXG59XHJcblxyXG4vKlxyXG4gKiBkZWxldGVEYXRhKClcclxuICogdXNlZCB0byBjbGVhciBvdXQgdGhlIGRldmVsb3BtZW50IGRhdGFiYXNlIHRvIFwicmVzZXRcIiBzZWVkIGRhdGFcclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMoKSA9PiB7XHJcbiAgY29uc3QgdXNlckNvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKCd1c2VycycpO1xyXG4gIGNvbnN0IGl0ZW1Db2xsZWN0aW9uID0gYXdhaXQgZ2V0Q29sbGVjdGlvbignaXRlbXMnKTtcclxuXHJcbiAgYXdhaXQgdXNlckNvbGxlY3Rpb24ucmVtb3ZlKHt9KTtcclxuICBhd2FpdCBpdGVtQ29sbGVjdGlvbi5yZW1vdmUoe30pO1xyXG59XHJcbiJdfQ==