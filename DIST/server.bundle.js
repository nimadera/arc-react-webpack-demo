/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var current = process.versions && process.versions.node && process.versions.node.split('.') || [];

function versionIncluded(version) {
    if (version === '*') return true;
    var versionParts = version.split('.');
    for (var i = 0; i < 3; ++i) {
        if ((current[i] || 0) >= (versionParts[i] || 0)) return true;
    }
    return false;
}

var data = __webpack_require__(12);

var core = {};
for (var version in data) {
    if (Object.prototype.hasOwnProperty.call(data, version) && versionIncluded(version)) {
        for (var i = 0; i < data[version].length; ++i) {
            core[data[version][i]] = true;
        }
    }
}
module.exports = core;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function () {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = (new Error()).stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(0);
var parse = path.parse || __webpack_require__(9);

module.exports = function nodeModulesPaths(start, opts) {
    var modules = opts && opts.moduleDirectory
        ? [].concat(opts.moduleDirectory)
        : ['node_modules']
    ;

    // ensure that `start` is an absolute path at this point,
    // resolving against the process' current working directory
    start = path.resolve(start);

    var prefix = '/';
    if (/^([A-Za-z]:)/.test(start)) {
        prefix = '';
    } else if (/^\\\\/.test(start)) {
        prefix = '\\\\';
    }

    var paths = [start];
    var parsed = parse(start);
    while (parsed.dir !== paths[paths.length - 1]) {
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
    }

    var dirs = paths.reduce(function (dirs, aPath) {
        return dirs.concat(modules.map(function (moduleDir) {
            return path.join(prefix, aPath, moduleDir);
        }));
    }, []);

    return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _webpack = __webpack_require__(14);

var _webpack2 = _interopRequireDefault(_webpack);

var _basePage = __webpack_require__(15);

var _basePage2 = _interopRequireDefault(_basePage);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(1);

var _fs2 = _interopRequireDefault(_fs);

var _helloWorld = __webpack_require__(17);

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _mobileDetect = __webpack_require__(19);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var deviceInfo = {};
var initialState = {
	title: 'ARC React/Webpack Demo'
};

// Store any necessary device details into an object for later use
var getDeviceInfo = function getDeviceInfo(req) {
	var md = new _mobileDetect2.default(req.headers['user-agent']);

	deviceInfo = {
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};

	console.log(JSON.stringify(deviceInfo));

	return deviceInfo;
};

// Create array of flags to pass to adaptive imports module to get output path
var getFlags = function getFlags() {
	var flags = [];

	for (var key in deviceInfo) {
		if (deviceInfo[key]) {
			flags.push(key);
		}
	}

	return flags;
};

// Get output path based on flags from the user's device info
var getOutputPath = function getOutputPath() {
	var outputPath = '';
	var flags = getFlags();

	outputPath = _webpack2.default.getOutputPath(__dirname, 'DIST', flags);
	// If folder for that set of flags aren't defined, use default
	try {
		var stat = _fs2.default.statSync('./' + outputPath);
	} catch (err) {
		outputPath = '/DIST/default';
	}

	return outputPath;
};

router.get('/', function (req, res) {
	var deviceInfo = getDeviceInfo(req);
	initialState.outputPath = getOutputPath();

	var html = _server2.default.renderToString(_react2.default.createElement(_helloWorld2.default, null));
	res.status(200).send((0, _basePage2.default)(html, initialState));
});

exports.default = router;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(1);
var path = __webpack_require__(0);
var resolve = __webpack_require__(10);
var directoryListings = {};
var fileMatches = {};
var configs = {};

module.exports.adaptFile = adaptFile;
module.exports.joinFlags = joinFlags;
module.exports.loadAdaptiveConfig = loadAdaptiveConfig;
module.exports.resolveFrom = resolveFrom;

function getIndexedFlags(flags) {
    if (!Array.isArray(flags)) return flags; //assume indexed flagset
    if (flags.indexedFlags) return flags.indexedFlags;

    var indexedFlags = {};
    for (var i = 0; i < flags.length; i++) {
        indexedFlags[flags[i]] = true;
    }

    Object.defineProperty(flags, 'indexedFlags', { value: indexedFlags });
    return indexedFlags;
}

function getDirectoryListing(dirname) {
    if (directoryListings[dirname]) {
        return directoryListings[dirname];
    }

    return directoryListings[dirname] = fs.readdirSync(dirname);
}

function loadAdaptiveConfig(filepath) {
    if (configs[filepath]) {
        return configs[filepath];
    }

    var content = fs.readFileSync(filepath, 'utf8');
    var config = configs[filepath] = JSON.parse(content);

    return config;
}

function getFileMatches(filepath) {
    if (fileMatches[filepath]) {
        return fileMatches[filepath];
    }

    var dirname = path.dirname(filepath);
    var filename = path.basename(filepath);
    var extStart = filename.lastIndexOf('.');
    var basename = filename.slice(0, extStart);
    var extension = filename.slice(extStart + 1);
    var files = getDirectoryListing(dirname);
    var isIndexAdaptive = filename === 'index.adaptive';
    var matches = [];
    var hasDefault = false;
    var defaultName;
    var config;
    var pattern;

    if (isIndexAdaptive) {
        pattern = /([\w\d-]+(?:\.[\w\d-]+)*)/;
        config = loadAdaptiveConfig(filepath);
        defaultName = config && config.default || 'default';
    } else {
        pattern = new RegExp('^' + basename + '((?:\\.[\\w\\d-]+)*)' + '\\.' + extension + '$');
    }

    files.forEach(file => {
        var match = pattern.exec(file);
        if (match) {
            var fullpath = path.join(dirname, file);
            var stat = fs.statSync(fullpath);
            var flags = match[1].split('.');

            if (isIndexAdaptive) {
                if (!stat.isDirectory()) return;
                fullpath = path.resolve(fullpath);
            } else {
                if (!stat.isFile()) return;
                flags = flags.slice(1);
            }

            if (file === defaultName) {
                flags = [];
            }

            hasDefault = hasDefault || !flags.length;

            matches.push({ file: fullpath, flags });
        }
    });

    if (!hasDefault) {
        throw new Error('No default found for ' + filepath);
    }

    matches.sort((a, b) => (
        b.flags.length - a.flags.length
    ));

    return fileMatches[filepath] = matches;
}

function adaptFile(filepath, flags) {
    var indexedFlags = getIndexedFlags(flags);
    var matches = getFileMatches(filepath);

    return matches.find(match => {
        return match.flags.every(flag => indexedFlags[flag]);
    }).file;
}

function resolveFrom(requestingFile, targetFile, options) {
    var flags = options.flags;
    var extensions = (options.extensions || []).concat('.adaptive');

    var resolvedFile = resolve.sync(targetFile, {
        basedir: path.dirname(requestingFile),
        extensions: extensions || ['.js']
    });

    if (getFileMatches(resolvedFile).some(match => match.file === requestingFile)) {
        return resolvedFile;
    }

    return adaptFile(resolvedFile, flags);
}

// Alphabetize flags before joining them
function joinFlags(flags) {
    flags.sort();
    return flags.join('.');
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isWindows = process.platform === 'win32';

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

win32.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};



// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


posix.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


if (isWindows)
  module.exports = win32.parse;
else /* posix */
  module.exports = posix.parse;

module.exports.posix = posix.parse;
module.exports.win32 = win32.parse;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
exports = module.exports = __webpack_require__(11);
exports.core = core;
exports.isCore = function isCore(x) { return core[x]; };
exports.sync = __webpack_require__(13);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var fs = __webpack_require__(1);
var path = __webpack_require__(0);
var caller = __webpack_require__(4);
var nodeModulesPaths = __webpack_require__(5);

module.exports = function resolve(x, options, callback) {
    var cb = callback;
    var opts = options || {};
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof x !== 'string') {
        var err = new TypeError('path must be a string');
        return process.nextTick(function () {
            cb(err);
        });
    }

    var isFile = opts.isFile || function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (err && err.code === 'ENOENT') cb(null, false);
            else if (err) cb(err);
            else cb(null, stat.isFile() || stat.isFIFO());
        });
    };
    var readFile = opts.readFile || fs.readFile;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..') res += '/';
        if (/\/$/.test(x) && res === y) {
            loadAsDirectory(res, opts.package, onfile);
        } else loadAsFile(res, opts.package, onfile);
    } else loadNodeModules(x, y, function (err, n, pkg) {
        if (err) cb(err);
        else if (n) cb(null, n, pkg);
        else if (core[x]) return cb(null, x);
        else {
            var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
            moduleError.code = 'MODULE_NOT_FOUND';
            cb(moduleError);
        }
    });

    function onfile(err, m, pkg) {
        if (err) cb(err);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err);
            else if (d) cb(null, d, pkg);
            else {
                var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }

    function loadAsFile(x, pkg, callback) {
        var cb = callback;
        if (typeof pkg === 'function') {
            cb = pkg;
            pkg = undefined;
        }

        var exts = [''].concat(extensions);
        load(exts, x, pkg);

        function load(exts, x, pkg) {
            if (exts.length === 0) return cb(null, undefined, pkg);
            var file = x + exts[0];

            if (pkg) onpkg(null, pkg);
            else loadpkg(path.dirname(file), onpkg);

            function onpkg(err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err);
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load(
                        [''].concat(extensions.slice()),
                        path.resolve(dir, r),
                        pkg
                    );
                }
                isFile(file, onex);
            }
            function onex(err, ex) {
                if (err) cb(err);
                else if (!ex) load(exts.slice(1), x, pkg);
                else cb(null, file, pkg);
            }
        }
    }

    function loadpkg(dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && (/^\w:[\\\/]*$/).test(dir)) {
            return cb(null);
        }
        if (/[\\\/]node_modules[\\\/]*$/.test(dir)) return cb(null);

        var pkgfile = path.join(dir, 'package.json');
        isFile(pkgfile, function (err, ex) {
            // on err, ex is false
            if (!ex) return loadpkg(path.dirname(dir), cb);

            readFile(pkgfile, function (err, body) {
                if (err) cb(err);
                try { var pkg = JSON.parse(body); } catch (jsonErr) {}

                if (pkg && opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                cb(null, pkg, dir);
            });
        });
    }

    function loadAsDirectory(x, fpkg, callback) {
        var cb = callback;
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }

        var pkgfile = path.join(x, 'package.json');
        isFile(pkgfile, function (err, ex) {
            if (err) return cb(err);
            if (!ex) return loadAsFile(path.join(x, 'index'), fpkg, cb);

            readFile(pkgfile, function (err, body) {
                if (err) return cb(err);
                try {
                    var pkg = JSON.parse(body);
                } catch (jsonErr) {}

                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }

                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './') {
                        pkg.main = 'index';
                    }
                    loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                        if (err) return cb(err);
                        if (m) return cb(null, m, pkg);
                        if (!pkg) return loadAsFile(path.join(x, 'index'), pkg, cb);

                        var dir = path.resolve(x, pkg.main);
                        loadAsDirectory(dir, pkg, function (err, n, pkg) {
                            if (err) return cb(err);
                            if (n) return cb(null, n, pkg);
                            loadAsFile(path.join(x, 'index'), pkg, cb);
                        });
                    });
                    return;
                }

                loadAsFile(path.join(x, '/index'), pkg, cb);
            });
        });
    }

    function processDirs(cb, dirs) {
        if (dirs.length === 0) return cb(null, undefined);
        var dir = dirs[0];

        var file = path.join(dir, x);
        loadAsFile(file, undefined, onfile);

        function onfile(err, m, pkg) {
            if (err) return cb(err);
            if (m) return cb(null, m, pkg);
            loadAsDirectory(path.join(dir, x), undefined, ondir);
        }

        function ondir(err, n, pkg) {
            if (err) return cb(err);
            if (n) return cb(null, n, pkg);
            processDirs(cb, dirs.slice(1));
        }
    }
    function loadNodeModules(x, start, cb) {
        processDirs(cb, nodeModulesPaths(start, opts));
    }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"*": [
		"assert",
		"buffer_ieee754",
		"buffer",
		"child_process",
		"cluster",
		"console",
		"constants",
		"crypto",
		"_debugger",
		"dgram",
		"dns",
		"domain",
		"events",
		"freelist",
		"fs",
		"http",
		"https",
		"_linklist",
		"module",
		"net",
		"os",
		"path",
		"punycode",
		"querystring",
		"readline",
		"repl",
		"stream",
		"string_decoder",
		"sys",
		"timers",
		"tls",
		"tty",
		"url",
		"util",
		"vm",
		"zlib"
	],
	"0.11": [
		"_http_server"
	],
	"1.0": [
		"process",
		"v8"
	]
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var fs = __webpack_require__(1);
var path = __webpack_require__(0);
var caller = __webpack_require__(4);
var nodeModulesPaths = __webpack_require__(5);

module.exports = function (x, options) {
    var opts = options || {};
    var isFile = opts.isFile || function (file) {
        try {
            var stat = fs.statSync(file);
        } catch (e) {
            if (e && e.code === 'ENOENT') return false;
            throw e;
        }
        return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return m;
    } else {
        var n = loadNodeModulesSync(x, y);
        if (n) return n;
    }

    if (core[x]) return x;

    var err = new Error("Cannot find module '" + x + "' from '" + y + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;

    function loadAsFileSync(x) {
        if (isFile(x)) {
            return x;
        }

        for (var i = 0; i < extensions.length; i++) {
            var file = x + extensions[i];
            if (isFile(file)) {
                return file;
            }
        }
    }

    function loadAsDirectorySync(x) {
        var pkgfile = path.join(x, '/package.json');
        if (isFile(pkgfile)) {
            var body = readFileSync(pkgfile, 'utf8');
            try {
                var pkg = JSON.parse(body);
                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, x);
                }

                if (pkg.main) {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                }
            } catch (e) {}
        }

        return loadAsFileSync(path.join(x, '/index'));
    }

    function loadNodeModulesSync(x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join(dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join(dir, '/', x));
            if (n) return n;
        }
    }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(0);
var adaptiveImports = __webpack_require__(8);

module.exports.adaptFiles = adaptFiles;
module.exports.getOutputPath = getOutputPath;

/**
 * Get output.path to be used by webpack config
 * 
 * @param {String} dirname - your app's `__dirname`
 * @param {String} outputFolder - name of containing folder for output from webpack config
 * @param {Array} flags - combination of flags (e.g device type, screen size, brand) for one output set
 * 
 * @return {String}
 */
function getOutputPath(dirname, outputFolder, flags) {
    return path.join(dirname, outputFolder, (adaptiveImports.joinFlags(flags) || 'default'));
}

/**
 * Hooks into webpack resolve step to process every path through adaptive imports logic
 * Returns an object with `apply` property following webpack plugin paradigm
 * 
 * @param {Array} flags - combination of flags (e.g device type, screen size, brand) to be processed
 * 
 * @return {Object} 
 */
function adaptFiles(flags) {
    return {
        apply: (resolver) => {
            resolver.plugin('before-existing-file', (request, callback) => {
                var adaptedPath = adaptiveImports.adaptFile(request.path, flags);
                callback(null, Object.assign({}, request, { path: adaptedPath }));
            });
        }
    };
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var basePage = function basePage(html, initialState) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no\">\n\n            <title>" + initialState.title + "</title>\n            \n            <link rel=\"stylesheet\" href=\"" + initialState.outputPath + "/style.css\">\n        </head>\n        <body>\n            <div id=\"main-content\">" + html + "</div>\n\n            <script>\n                window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + "\n            </script>\n            <script src=\"" + initialState.outputPath + "/client.bundle.js\"></script>\n        </body>\n    </html>\n    ";
};

exports.default = basePage;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _router = __webpack_require__(7);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/DIST', _express2.default.static('./DIST'));

app.use('/', _router2.default);

app.listen(2222, function () {
	console.log('Listening on port 2222!');
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = function (_Component) {
    _inherits(HelloWorld, _Component);

    function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hello-world' },
                'Hello world :)'
            );
        }
    }]);

    return HelloWorld;
}(_react.Component);

exports.default = HelloWorld;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);