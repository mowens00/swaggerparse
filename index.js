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

function getModels(input) {
	
}

_.forEach(swagger.paths, function(obj, key) {
	_.forEach(mobileEndpoints, function(me) {
		if (key == me.path) {
			_.forEach(obj, function(o, method) {
				if (method == me.method.toLowerCase()) {

					_.forEach(o.responses, function(r) {
						if (r.schema.$ref) {
							// gets top level response object
							r.schema.$ref = _.pick(swagger.definitions, r.schema.$ref);
							for (var i in r.schema.$ref) {
								console.log(r.schema.$ref[i].properties);

							}
							_.forEach(r.schema.$ref.properties);
						}
					});
					//console.log(JSON.stringify(o.responses));

					// fill in submodels
					var match = {
						path: me.path,
						method: me.method,
						parameters: o.parameters,
						response: o.responses
					};
					results.push(match);
				}
			});
		}
	});
});

// var csv = json2csv({ data: results });

// fs.writeFile('file.csv', csv, function(err) {
//   if (err) throw err;
//   console.log('file saved');
// });
