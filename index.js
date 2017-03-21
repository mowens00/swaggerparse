// dependencies
var _ = require('lodash');
var json2csv = require('json2csv');
var fs = require('fs');
// data
var androidEndpoints = require('./android.endpoints.js').data;
var iosEndpoints = require('./ios.endpoints.js').data;
var swagger = require('./swagger.json');

// combine ios and android endpoints
var mobileEndpoints = _.intersectionWith(androidEndpoints, iosEndpoints, _.isEqual);

var results = [];

_.forEach(swagger.paths, function(obj, key) {
	_.forEach(mobileEndpoints, function(me) {
		if (key == me.path) {
			_.forEach(obj, function(o, method) {
				if (method == me.method.toLowerCase()) {
					var match = o;
					results.push(o);
				}
			});
		}
	});
});

var csv = json2csv({ data: results });

fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});