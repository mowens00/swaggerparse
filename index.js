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

var testEndpoint = {};
_.forEach(swagger.paths, function(obj, key) {
	if (key == '/v1/Places/{placeId}/Info') {
		_.forEach(obj, function(o, method) {
			if (method == 'get') {
				var result = {
					path : 'v1/Places/{placeId}/Info',
					method: 'GET',
					params: parseParams(o.parameters),
					response: parseResponse(o.responses)
				};
				results.push(result);
			}
		});
	}
});

function parseParams(params) {
	q = [];
	_.forEach(params, function(p) {
		if (p.schema) {
			var parameter = {
				    name: p.name,
				    in: p.in,
				    description: p.description,
				    required: p.required,
				    type: p.type,
				    format: p.format,
				    schema: parseObject(p.schema.$ref)
				};
				q.push(parameter);
			}
		else {
			q.push(p);
		}
	});
	return q;
}

function parseResponse(resp) {
	q = [];
	_.forEach(resp, function(r) {
		if (r.schema) {
			var response = {
				description : r.description,
				schema: parseObject(r.schema.$ref)
			}
			q.push(response);
		}
		else {
			q.push(r);
		}
	});
	return q;
}

function parseObject(obj) {
	var r = {};
	var model = _.pick(swagger.definitions, obj);
	var modelKey = Object.keys(model);

	if (model[modelKey].properties) {
		_.forEach(model[modelKey].properties, function(p, propertyKey) {
			if (p.items) {
				r[propertyKey] = parseObject(p.items.$ref);
			}
			else if (p.$ref) {
				r[propertyKey] = parseObject(p.$ref);
			}
			else {
				r[propertyKey] = p;
			}
		});
		return r;
	}
}

// _.forEach(swagger.paths, function(obj, key) {
// 	_.forEach(mobileEndpoints, function(me) {
// 		if (key == me.path) {
// 			_.forEach(obj, function(o, method) {
// 				if (method == me.method.toLowerCase()) {

// 					_.forEach(o.responses, function(r) {
// 						if (r.schema.$ref) {
// 							// gets top level response object
// 							r.schema.$ref = _.pick(swagger.definitions, r.schema.$ref);
// 							for (var i in r.schema.$ref) {
// 								_.forEach(r.schema.$ref[i], function(p) {
// 								});
// 							}
// 						}
// 					});
// 					//console.log(JSON.stringify(o.responses));

// 					// fill in submodels
// 					var match = {
// 						path: me.path,
// 						method: me.method,
// 						parameters: parseParams(o.parameters)
// 						// response: parseResponse(o.responses)
// 					};
// 					results.push(match);
// 				}
// 			});
// 		}
// 	});
// });

var csv = json2csv({ data: results });

fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});
