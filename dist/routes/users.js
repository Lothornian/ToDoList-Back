'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Express = require('Express');

var _data = require('../data/data.js');

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

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlcnMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsInVzZXIiLCJmaWx0ZXIiLCJlbWFpbCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0MsR0FBUCxDQUFZLEdBQVosRUFBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7O0FBRTdCLFNBQU9BLElBQUlDLElBQUosYUFBUDtBQUVELENBSkQ7O0FBTUFKLE9BQU9DLEdBQVAsQ0FBYSxTQUFiLEVBQXdCLFVBQUNDLEdBQUQsRUFBS0MsR0FBTCxFQUFhOztBQUVuQyxNQUFJRSxPQUFPLFlBQU1DLE1BQU4sQ0FBYztBQUFBLFdBQVFELEtBQUtFLEtBQUwsS0FBZUwsSUFBSU0sTUFBSixDQUFXRCxLQUFsQztBQUFBLEdBQWQsQ0FBWDtBQUNBLFNBQU9KLElBQUlDLElBQUosQ0FBU0MsSUFBVCxDQUFQO0FBRUQsQ0FMRDs7a0JBT2VMLE0iLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdFeHByZXNzJztcclxuaW1wb3J0IHsgdXNlcnMgfSBmcm9tICcuLi9kYXRhL2RhdGEuanMnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCggJy8nLCAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKHVzZXJzKVxyXG5cclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0ICggJy86ZW1haWwnLCAocmVxLHJlcykgPT4ge1xyXG5cclxuICBsZXQgdXNlciA9IHVzZXJzLmZpbHRlciggdXNlciA9PiB1c2VyLmVtYWlsID09PSByZXEucGFyYW1zLmVtYWlsKTtcclxuICByZXR1cm4gcmVzLmpzb24odXNlcik7XHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIl19