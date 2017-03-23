// dependencies
var _ = require('lodash');
var fs = require('fs');
// data
var androidEndpoints = require('./android.endpoints.js').data;
var iosEndpoints = require('./ios.endpoints.js').data;
var swagger = require('./swagger.json');

// combine ios and android endpoints
var mobileEndpoints = _.intersectionWith(androidEndpoints, iosEndpoints, _.isEqual);

var result = {
	swagger: "2.0",
	info: {
		version: "All",
		title: "Monscierge API"
	},
	host: "api-test.monscierge.com:443",
	schemes: [
		"https"
	],
	paths: {},
	definitions: swagger.definitions
};

_.forEach(mobileEndpoints, function(me) {
	_.forEach(swagger.paths, function(obj, key) {
		if (key == me.path) {
			result.paths[key] = obj;
		}
	});
});

fs.writeFile("./result.json", JSON.stringify(result), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});