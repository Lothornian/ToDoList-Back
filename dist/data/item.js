"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * item.js
 * Definition of the item object
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */
var _class = function _class(id, summary, description, dueDate, user) //end constructor params
{
  var isComplete = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  _classCallCheck(this, _class);

  this.id = id;
  this.summary = summary;
  this.description = description;
  this.dueDate = dueDate;
  this.isComplete = isComplete;
  this.user = user;
  this.active = true;
} // end constructor method
;

exports.default = _class;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2l0ZW0uanMiXSwibmFtZXMiOlsiaWQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwidXNlciIsImlzQ29tcGxldGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7YUFRRSxnQkFDRUEsRUFERixFQUVFQyxPQUZGLEVBR0VDLFdBSEYsRUFJRUMsT0FKRixFQUtFQyxJQUxGLEVBT0U7QUFDRjtBQUFBLE1BRkVDLFVBRUYsdUVBRmUsS0FFZjs7QUFBQTs7QUFDRSxPQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtFLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0UsTUFBTCxHQUFjLElBQWQ7QUFDRCxDLENBQUEiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIGl0ZW0uanNcclxuICogRGVmaW5pdGlvbiBvZiB0aGUgaXRlbSBvYmplY3RcclxuICogQXV0aG9yOiBLeWxlIEh1bnRcclxuICogQ3JlYXRlZCBEYXRlOiA0LzE1LzE3XHJcbiAqIExhc3QgVXBkYXRlZDogNC8xNS8xN1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICBzdW1tYXJ5LFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgdXNlcixcclxuICAgIGlzQ29tcGxldGUgPSBmYWxzZVxyXG4gICkgLy9lbmQgY29uc3RydWN0b3IgcGFyYW1zXHJcbiAge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5zdW1tYXJ5ID0gc3VtbWFyeTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICB9Ly8gZW5kIGNvbnN0cnVjdG9yIG1ldGhvZFxyXG59XHJcbiJdfQ==