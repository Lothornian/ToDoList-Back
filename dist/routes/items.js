'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = undefined;

var _Express = require('Express');

var _db = require('../db.js');

var _data = require('../data/data.js');

var _item = require('../data/item.js');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Items.js
 * This class defines the routes for getting items.
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */

var router = new _Express.Router();

/*
 * getAllItems
 * Used to get all items
 *
 * @return an array of all items.
 *
 * @TODO have it linked to a user
 */
var getAllItems = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var itemsCollection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db.getCollection)('items');

          case 2:
            itemsCollection = _context.sent;
            _context.next = 5;
            return itemsCollection.find({ active: true });

          case 5:
            _context.next = 7;
            return _context.sent.toArray();

          case 7:
            return _context.abrupt('return', _context.sent);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getAllItems() {
    return _ref.apply(this, arguments);
  };
}(); //end getAllItems

/*
 * getItem
 * Used to get detailed information for a specific item
 *
 * @param id - the id of the item
 * @return an item
 */
var getItem = exports.getItem = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id) {
    var itemsCollection, value;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = parseInt(id);
            _context2.next = 3;
            return (0, _db.getCollection)('items');

          case 3:
            itemsCollection = _context2.sent;
            _context2.next = 6;
            return itemsCollection.find({ id: id });

          case 6:
            _context2.next = 8;
            return _context2.sent.toArray();

          case 8:
            value = _context2.sent;
            return _context2.abrupt('return', value);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getItem(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //end getItem

/*
 * /items Route
 * Gets all items
 *
 * @TODO only return items for the specified user
 */
router.get('/', function (req, res) {
  return getAllItems().then(function (items) {
    return res.json(items);
  });
});

/*
 * /items/:id Route
 * Used to get details about a specific item by specifying the id of the item
 *
 * @TODO only return items for the specified user
 */
router.get('/:item', function (req, res) {
  return getItem(req.params.item).then(function (item) {
    console.log(item);
    return res.json(item);
  });
});

/*
 * /items/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the item
 * @param summary The one line summary of the item
 * @param description The long description or details of the item
 * @param dueDate The due date for the item. in mm/dd/yyyy format
 * @param user the user who owns the item
 *
 * @return The newly created instance of the item.
 */
router.post('/', function (req, res) {
  var item = new _item2.default(req.body.id, req.body.summary, req.body.description, req.body.dueDate, req.body.user); //end new Item
  storeItem(item);
  return res.json(item);
}); //end router.post ( '/'

/*
 * storeItem
 * Used to store an item in the attached database
 *
 * @param item The item to be stored.
 */
var storeItem = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(item) {
    var itemCollection;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _db.getCollection)('items');

          case 2:
            itemCollection = _context3.sent;

            itemCollection.insertOne(item);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function storeItem(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); // end storeItem

/*
 * /items/:itemId Delete route
 * Used to delete an item from the list.
 * Note: The item is archived and still exists in the database.
 */
router.delete('/:itemId', function (req, res) {
  removeItem(req.params.itemId);
  return res.send('item ' + req.params.itemId + ' has been deleted');
});

/*
 * removeItem
 * Used to set the active flag to false on an item.
 * This will effectivly delete the item for the user.
 */
var removeItem = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(itemId) {
    var itemCollection;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _db.getCollection)('items');

          case 2:
            itemCollection = _context4.sent;

            itemCollection.updateOne({ id: parseInt(itemId) }, {
              $set: { "active": false }
            });

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function removeItem(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/*
 * deleteItem
 * Used to remove an item from the database.
 * Don't remove data, it doesn't end well..
 */
var deleteItem = function () {
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(itemId) {
    var itemCollection;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _db.getCollection)('items');

          case 2:
            itemCollection = _context5.sent;

            itemCollection.deleteOne({ id: parseInt(itemId) });

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function deleteItem(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaXRlbXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0QWxsSXRlbXMiLCJpdGVtc0NvbGxlY3Rpb24iLCJmaW5kIiwiYWN0aXZlIiwidG9BcnJheSIsImdldEl0ZW0iLCJpZCIsInBhcnNlSW50IiwidmFsdWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJ0aGVuIiwianNvbiIsIml0ZW1zIiwicGFyYW1zIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiYm9keSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJ1c2VyIiwic3RvcmVJdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJkZWxldGUiLCJyZW1vdmVJdGVtIiwiaXRlbUlkIiwic2VuZCIsInVwZGF0ZU9uZSIsIiRzZXQiLCJkZWxldGVJdGVtIiwiZGVsZXRlT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUEsSUFBTUEsU0FBUyxxQkFBZjs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNQztBQUFBLHVEQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ksdUJBQWMsT0FBZCxDQURaOztBQUFBO0FBQ1pDLDJCQURZO0FBQUE7QUFBQSxtQkFHR0EsZ0JBQWdCQyxJQUFoQixDQUFxQixFQUFFQyxRQUFRLElBQVYsRUFBckIsQ0FISDs7QUFBQTtBQUFBO0FBQUEsaUNBRzJDQyxPQUgzQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTixDLENBSUM7O0FBRUQ7Ozs7Ozs7QUFPTyxJQUFNQztBQUFBLHdEQUFVLGtCQUFNQyxFQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkEsaUJBQUtDLFNBQVNELEVBQVQsQ0FBTDtBQURxQjtBQUFBLG1C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RUFBRTdCLElBQUlDLFNBQVN1QixNQUFULENBQU4sRUFERjs7QUFGaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFPYy9CLE0iLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdFeHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tICcuLi9kYi5qcyc7XHJcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vZGF0YS9pdGVtLmpzJztcclxuXHJcbi8qKlxyXG4gKiBJdGVtcy5qc1xyXG4gKiBUaGlzIGNsYXNzIGRlZmluZXMgdGhlIHJvdXRlcyBmb3IgZ2V0dGluZyBpdGVtcy5cclxuICogQXV0aG9yOiBLeWxlIEh1bnRcclxuICogQ3JlYXRlZCBEYXRlOiA0LzE1LzE3XHJcbiAqIExhc3QgVXBkYXRlZDogNC8xNS8xN1xyXG4gKi9cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbi8qXHJcbiAqIGdldEFsbEl0ZW1zXHJcbiAqIFVzZWQgdG8gZ2V0IGFsbCBpdGVtc1xyXG4gKlxyXG4gKiBAcmV0dXJuIGFuIGFycmF5IG9mIGFsbCBpdGVtcy5cclxuICpcclxuICogQFRPRE8gaGF2ZSBpdCBsaW5rZWQgdG8gYSB1c2VyXHJcbiAqL1xyXG5jb25zdCBnZXRBbGxJdGVtcyA9IGFzeW5jKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zQ29sbGVjdGlvbiA9IGF3YWl0IGdldENvbGxlY3Rpb24oJ2l0ZW1zJyk7XHJcblxyXG4gIHJldHVybiBhd2FpdCAoIGF3YWl0IGl0ZW1zQ29sbGVjdGlvbi5maW5kKHsgYWN0aXZlOiB0cnVlfSkgKS50b0FycmF5KCk7XHJcbn0vL2VuZCBnZXRBbGxJdGVtc1xyXG5cclxuLypcclxuICogZ2V0SXRlbVxyXG4gKiBVc2VkIHRvIGdldCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBmb3IgYSBzcGVjaWZpYyBpdGVtXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgaXRlbVxyXG4gKiBAcmV0dXJuIGFuIGl0ZW1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtID0gYXN5bmMoaWQpID0+IHtcclxuICBpZCA9IHBhcnNlSW50KGlkKTtcclxuICBjb25zdCBpdGVtc0NvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKCdpdGVtcycpO1xyXG4gIGNvbnN0IHZhbHVlID0gYXdhaXQgKCBhd2FpdCBpdGVtc0NvbGxlY3Rpb24uZmluZCh7IGlkIH0pICkudG9BcnJheSgpO1xyXG4gIHJldHVybiB2YWx1ZTtcclxufS8vZW5kIGdldEl0ZW1cclxuXHJcbi8qXHJcbiAqIC9pdGVtcyBSb3V0ZVxyXG4gKiBHZXRzIGFsbCBpdGVtc1xyXG4gKlxyXG4gKiBAVE9ETyBvbmx5IHJldHVybiBpdGVtcyBmb3IgdGhlIHNwZWNpZmllZCB1c2VyXHJcbiAqL1xyXG5yb3V0ZXIuZ2V0KCAnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJldHVybiBnZXRBbGxJdGVtcygpLnRoZW4oXHJcbiAgICBpdGVtcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihpdGVtcyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiAvaXRlbXMvOmlkIFJvdXRlXHJcbiAqIFVzZWQgdG8gZ2V0IGRldGFpbHMgYWJvdXQgYSBzcGVjaWZpYyBpdGVtIGJ5IHNwZWNpZnlpbmcgdGhlIGlkIG9mIHRoZSBpdGVtXHJcbiAqXHJcbiAqIEBUT0RPIG9ubHkgcmV0dXJuIGl0ZW1zIGZvciB0aGUgc3BlY2lmaWVkIHVzZXJcclxuICovXHJcbnJvdXRlci5nZXQoICcvOml0ZW0nLCAocmVxLHJlcykgPT4ge1xyXG4gIHJldHVybiBnZXRJdGVtKCByZXEucGFyYW1zLml0ZW0gKS50aGVuKFxyXG4gICAgaXRlbSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oaXRlbSk7XHJcbiAgICB9XHJcbiAgKTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiAvaXRlbXMvIFBvc3QgUm91dGVcclxuICogVXNlZCB0byBzdG9yZSBhIG5ldyBpdGVtIGluIE1vbmdvXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCBUaGUgSWQgb2YgdGhlIGl0ZW1cclxuICogQHBhcmFtIHN1bW1hcnkgVGhlIG9uZSBsaW5lIHN1bW1hcnkgb2YgdGhlIGl0ZW1cclxuICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBsb25nIGRlc2NyaXB0aW9uIG9yIGRldGFpbHMgb2YgdGhlIGl0ZW1cclxuICogQHBhcmFtIGR1ZURhdGUgVGhlIGR1ZSBkYXRlIGZvciB0aGUgaXRlbS4gaW4gbW0vZGQveXl5eSBmb3JtYXRcclxuICogQHBhcmFtIHVzZXIgdGhlIHVzZXIgd2hvIG93bnMgdGhlIGl0ZW1cclxuICpcclxuICogQHJldHVybiBUaGUgbmV3bHkgY3JlYXRlZCBpbnN0YW5jZSBvZiB0aGUgaXRlbS5cclxuICovXHJcbnJvdXRlci5wb3N0KCAnLycsIChyZXEscmVzKSA9PiB7XHJcbiAgbGV0IGl0ZW0gPSBuZXcgSXRlbShcclxuICAgIHJlcS5ib2R5LmlkLFxyXG4gICAgcmVxLmJvZHkuc3VtbWFyeSxcclxuICAgIHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxyXG4gICAgcmVxLmJvZHkuZHVlRGF0ZSxcclxuICAgIHJlcS5ib2R5LnVzZXJcclxuICApOyAvL2VuZCBuZXcgSXRlbVxyXG4gIHN0b3JlSXRlbShpdGVtKTtcclxuICByZXR1cm4gcmVzLmpzb24oaXRlbSk7XHJcbn0pOyAvL2VuZCByb3V0ZXIucG9zdCAoICcvJ1xyXG5cclxuLypcclxuICogc3RvcmVJdGVtXHJcbiAqIFVzZWQgdG8gc3RvcmUgYW4gaXRlbSBpbiB0aGUgYXR0YWNoZWQgZGF0YWJhc2VcclxuICpcclxuICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gYmUgc3RvcmVkLlxyXG4gKi9cclxuY29uc3Qgc3RvcmVJdGVtID0gYXN5bmMoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1Db2xsZWN0aW9uID0gYXdhaXQgZ2V0Q29sbGVjdGlvbignaXRlbXMnKTtcclxuICBpdGVtQ29sbGVjdGlvbi5pbnNlcnRPbmUoaXRlbSk7XHJcbn0gLy8gZW5kIHN0b3JlSXRlbVxyXG5cclxuLypcclxuICogL2l0ZW1zLzppdGVtSWQgRGVsZXRlIHJvdXRlXHJcbiAqIFVzZWQgdG8gZGVsZXRlIGFuIGl0ZW0gZnJvbSB0aGUgbGlzdC5cclxuICogTm90ZTogVGhlIGl0ZW0gaXMgYXJjaGl2ZWQgYW5kIHN0aWxsIGV4aXN0cyBpbiB0aGUgZGF0YWJhc2UuXHJcbiAqL1xyXG5yb3V0ZXIuZGVsZXRlKCAnLzppdGVtSWQnLCAocmVxLHJlcykgPT4ge1xyXG4gIHJlbW92ZUl0ZW0ocmVxLnBhcmFtcy5pdGVtSWQpO1xyXG4gIHJldHVybiByZXMuc2VuZCggYGl0ZW0gJHtyZXEucGFyYW1zLml0ZW1JZH0gaGFzIGJlZW4gZGVsZXRlZGAgKTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiByZW1vdmVJdGVtXHJcbiAqIFVzZWQgdG8gc2V0IHRoZSBhY3RpdmUgZmxhZyB0byBmYWxzZSBvbiBhbiBpdGVtLlxyXG4gKiBUaGlzIHdpbGwgZWZmZWN0aXZseSBkZWxldGUgdGhlIGl0ZW0gZm9yIHRoZSB1c2VyLlxyXG4gKi9cclxuY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1Db2xsZWN0aW9uID0gYXdhaXQgZ2V0Q29sbGVjdGlvbignaXRlbXMnKTtcclxuICBpdGVtQ29sbGVjdGlvbi51cGRhdGVPbmUoXHJcbiAgICB7IGlkOiBwYXJzZUludChpdGVtSWQpIH0sXHJcbiAgICB7XHJcbiAgICAgICRzZXQ6IHsgXCJhY3RpdmVcIjogZmFsc2UgfVxyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIGRlbGV0ZUl0ZW1cclxuICogVXNlZCB0byByZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBkYXRhYmFzZS5cclxuICogRG9uJ3QgcmVtb3ZlIGRhdGEsIGl0IGRvZXNuJ3QgZW5kIHdlbGwuLlxyXG4gKi9cclxuIGNvbnN0IGRlbGV0ZUl0ZW0gPSBhc3luYyhpdGVtSWQpID0+IHtcclxuICAgY29uc3QgaXRlbUNvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKCdpdGVtcycpO1xyXG4gICBpdGVtQ29sbGVjdGlvbi5kZWxldGVPbmUoXHJcbiAgICAgeyBpZDogcGFyc2VJbnQoaXRlbUlkKSB9XHJcbiAgICk7XHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdfQ==