'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Express = require('Express');

var _data = require('../data/data.js');

var router = new _Express.Router();

router.get('/', function (req, res) {

  return res.json(_data.items);
});

router.get('/:item', function (req, res) {

  var item = _data.items.filter(function (item) {
    return item.id == req.params.item;
  });
  return res.json();
});

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaXRlbXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIml0ZW0iLCJmaWx0ZXIiLCJpZCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0MsR0FBUCxDQUFZLEdBQVosRUFBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7O0FBRTdCLFNBQU9BLElBQUlDLElBQUosYUFBUDtBQUVELENBSkQ7O0FBTUFKLE9BQU9DLEdBQVAsQ0FBWSxRQUFaLEVBQXNCLFVBQUNDLEdBQUQsRUFBS0MsR0FBTCxFQUFhOztBQUVqQyxNQUFJRSxPQUFPLFlBQU1DLE1BQU4sQ0FBYztBQUFBLFdBQVFELEtBQUtFLEVBQUwsSUFBV0wsSUFBSU0sTUFBSixDQUFXSCxJQUE5QjtBQUFBLEdBQWQsQ0FBWDtBQUNBLFNBQU9GLElBQUlDLElBQUosRUFBUDtBQUVELENBTEQ7O2tCQU9lSixNIiwiZmlsZSI6Iml0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnRXhwcmVzcyc7XHJcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCggJy8nLCAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKGl0ZW1zKTtcclxuXHJcbn0pO1xyXG5cclxucm91dGVyLmdldCggJy86aXRlbScsIChyZXEscmVzKSA9PiB7XHJcblxyXG4gIGxldCBpdGVtID0gaXRlbXMuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgPT0gcmVxLnBhcmFtcy5pdGVtKTtcclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iXX0=