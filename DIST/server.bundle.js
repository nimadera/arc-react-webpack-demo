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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).reduce(function (acc, x) {
    acc[x] = true;
    return acc;
}, {});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function () {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack };
    var stack = (new Error()).stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(1);

module.exports = function (start, opts) {
    var modules = opts.moduleDirectory
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

    var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\/+/;

    var parts = start.split(splitRe);

    var dirs = [];
    for (var i = parts.length - 1; i >= 0; i--) {
        if (modules.indexOf(parts[i]) !== -1) continue;
        dirs = dirs.concat(modules.map(function(module_dir) {
            return prefix + path.join(
                path.join.apply(path, parts.slice(0, i + 1)),
                module_dir
            );
        }));
    }
    if (process.platform === 'win32'){
        dirs[dirs.length-1] = dirs[dirs.length-1].replace(":", ":\\");
    }
    return dirs.concat(opts.paths);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _adaptiveImports = __webpack_require__(19);

var _adaptiveImports2 = _interopRequireDefault(_adaptiveImports);

var _appLayout = __webpack_require__(13);

var _appLayout2 = _interopRequireDefault(_appLayout);

var _basePage = __webpack_require__(14);

var _basePage2 = _interopRequireDefault(_basePage);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(0);

var _fs2 = _interopRequireDefault(_fs);

var _mobileDetect = __webpack_require__(20);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var router = _express2.default.Router();
var deviceInfo = {};
var initialState = {
	title: 'ARC React/Webpack Demo'
};

// Store any necessary device details into an object for later use
var getDeviceInfo = function getDeviceInfo(req) {
	var md = new _mobileDetect2.default(req.headers['user-agent']);

	deviceInfo = {
		desktop: md.phone() === null,
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};

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

	// Use adaptive-imports to find the directory in the same location that matches the most flags
	outputPath = _adaptiveImports2.default.adaptResource('DIST/default', flags);

	return outputPath;
};

var FlagProvider = function (_Component) {
	_inherits(FlagProvider, _Component);

	function FlagProvider() {
		_classCallCheck(this, FlagProvider);

		return _possibleConstructorReturn(this, (FlagProvider.__proto__ || Object.getPrototypeOf(FlagProvider)).apply(this, arguments));
	}

	_createClass(FlagProvider, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				flags: this.props.flags
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return this.props.children;
		}
	}]);

	return FlagProvider;
}(_react.Component);

FlagProvider.childContextTypes = {
	flags: _react2.default.PropTypes.array
};

router.get('/', function (req, res) {
	initialState.deviceInfo = getDeviceInfo(req);
	initialState.outputPath = getOutputPath();

	var html = _server2.default.renderToString(_react2.default.createElement(
		FlagProvider,
		{ flags: getFlags() },
		_react2.default.createElement(_appLayout2.default, { initialState: initialState })
	));
	res.status(200).send((0, _basePage2.default)(html, initialState));
});

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(0);
var path = __webpack_require__(1);
var resolve = __webpack_require__(9);
var directoryListings = {};
var fileMatches = {};
var configs = {};

module.exports.adaptResource = adaptResource;
module.exports.joinFlags = joinFlags;
module.exports.loadAdaptiveConfig = loadAdaptiveConfig;
module.exports.resolveFrom = resolveFrom;
module.exports.getFileMatches = getFileMatches;
module.exports.getBestMatch = getBestMatch;

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

function getFileMatches(filepath, extensions) {
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
                fullpath = resolve.sync(fullpath, {
                    basedir: path.dirname(fullpath),
                    extensions: extensions || ['.js']
                });
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

    return fileMatches[filepath] = matches;
}

// Utility function to get directory matches
function getDirMatches(filepath) {
    if (fileMatches[filepath]) {
        return fileMatches[filepath];
    }

    var parentDir = path.dirname(filepath);
    var basename = path.basename(filepath);
    var contents = getDirectoryListing(parentDir);
    var matches = [];

    contents.forEach(dir => {
        var fullpath = path.join(parentDir, dir);
        // We only want to operate on the directories
        var stat = fs.statSync(fullpath);
        if (!stat.isDirectory()) return;

        var flags = dir.split('.');

        if (dir === basename) {
            flags = [];
        }

        matches.push({ file: fullpath, flags });
    });

    return fileMatches[filepath] = matches;
}

function adaptResource(filepath, flags) {
    var stat = fs.statSync(filepath);
    var matches = [];

    if (stat.isFile()) {
        matches = getFileMatches(filepath);
    } else if (stat.isDirectory()) {
        matches = getDirMatches(filepath);
    }

    return getBestMatch(matches, flags).file;
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

    return adaptResource(resolvedFile, flags);
}

// Alphabetize flags before joining them
function joinFlags(flags) {
    flags.sort();
    return flags.join('.');
}

// Return best matching filepath
function getBestMatch(matches, flags) {
    var indexedFlags = getIndexedFlags(flags);
    var bestMatchObj = {};
    var bestMatchFile = '';

    matches.sort((a, b) => (
        b.flags.length - a.flags.length
    ));

    bestMatchObj = matches.find(match => {
        return match.flags.every(flag => indexedFlags[flag]);
    });

    return bestMatchObj;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
exports = module.exports = __webpack_require__(10);
exports.core = core;
exports.isCore = function (x) { return core[x] };
exports.sync = __webpack_require__(12);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var fs = __webpack_require__(0);
var path = __webpack_require__(1);
var caller = __webpack_require__(5);
var nodeModulesPaths = __webpack_require__(6);
var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;

module.exports = function resolve (x, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (!opts) opts = {};
    if (typeof x !== 'string') {
        return process.nextTick(function () {
            cb(new Error('path must be a string'));
        });
    }
    
    var isFile = opts.isFile || function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (err && err.code === 'ENOENT') cb(null, false)
            else if (err) cb(err)
            else cb(null, stat.isFile() || stat.isFIFO())
        });
    };
    var readFile = opts.readFile || fs.readFile;
    
    var extensions = opts.extensions || [ '.js' ];
    var y = opts.basedir || path.dirname(caller());
    
    opts.paths = opts.paths || [];
    
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..') res += '/';
        if (/\/$/.test(x) && res === y) {
            loadAsDirectory(res, opts.package, onfile);
        }
        else loadAsFile(res, opts.package, onfile);
    }
    else loadNodeModules(x, y, function (err, n, pkg) {
        if (err) cb(err)
        else if (n) cb(null, n, pkg)
        else if (core[x]) return cb(null, x);
        else cb(new Error("Cannot find module '" + x + "' from '" + y + "'"))
    });
    
    function onfile (err, m, pkg) {
        if (err) cb(err)
        else if (m) cb(null, m, pkg)
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err)
            else if (d) cb(null, d, pkg)
            else cb(new Error("Cannot find module '" + x + "' from '" + y + "'"))
        })
    }
    
    function loadAsFile (x, pkg, cb) {
        if (typeof pkg === 'function') {
            cb = pkg;
            pkg = undefined;
        }
        
        var exts = [''].concat(extensions);
        load(exts, x, pkg)
		
		function load (exts, x, pkg) {
            if (exts.length === 0) return cb(null, undefined, pkg);
            var file = x + exts[0];
            
            if (pkg) onpkg(null, pkg)
            else loadpkg(path.dirname(file), onpkg);
            
            function onpkg (err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err)
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
            function onex (err, ex) {
                if (err) cb(err)
                else if (!ex) load(exts.slice(1), x, pkg)
                else cb(null, file, pkg)
            }
        }
    }
    
    function loadpkg (dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && /^\w:[\\\/]*$/.test(dir)) {
            return cb(null);
        }
        if (/[\\\/]node_modules[\\\/]*$/.test(dir)) return cb(null);
        
        var pkgfile = path.join(dir, 'package.json');
        isFile(pkgfile, function (err, ex) {
            // on err, ex is false
            if (!ex) return loadpkg(
                path.dirname(dir), cb
            );
            
            readFile(pkgfile, function (err, body) {
                if (err) cb(err);
                try { var pkg = JSON.parse(body) }
                catch (err) {}
                
                if (pkg && opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                cb(null, pkg, dir);
            });
        });
    }
    
    function loadAsDirectory (x, fpkg, cb) {
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }
        
        var pkgfile = path.join(x, '/package.json');
        isFile(pkgfile, function (err, ex) {
            if (err) return cb(err);
            if (!ex) return loadAsFile(path.join(x, '/index'), fpkg, cb);
            
            readFile(pkgfile, function (err, body) {
                if (err) return cb(err);
                try {
                    var pkg = JSON.parse(body);
                }
                catch (err) {}
                
                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                
                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './'){
                        pkg.main = 'index'
                    }
                    loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                        if (err) return cb(err);
                        if (m) return cb(null, m, pkg);
                        if (!pkg) return loadAsFile(path.join(x, '/index'), pkg, cb);

                        var dir = path.resolve(x, pkg.main);
                        loadAsDirectory(dir, pkg, function (err, n, pkg) {
                            if (err) return cb(err);
                            if (n) return cb(null, n, pkg);
                            loadAsFile(path.join(x, '/index'), pkg, cb);
                        });
                    });
                    return;
                }
                
                loadAsFile(path.join(x, '/index'), pkg, cb);
            });
        });
    }
    
    function loadNodeModules (x, start, cb) {
        (function process (dirs) {
            if (dirs.length === 0) return cb(null, undefined);
            var dir = dirs[0];
            
            var file = path.join(dir, '/', x);
            loadAsFile(file, undefined, onfile);
            
            function onfile (err, m, pkg) {
                if (err) return cb(err);
                if (m) return cb(null, m, pkg);
                loadAsDirectory(path.join(dir, '/', x), undefined, ondir);
            }
            
            function ondir (err, n, pkg) {
                if (err) return cb(err);
                if (n) return cb(null, n, pkg);
                process(dirs.slice(1));
            }
        })(nodeModulesPaths(start, opts));
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [
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
];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var fs = __webpack_require__(0);
var path = __webpack_require__(1);
var caller = __webpack_require__(5);
var nodeModulesPaths = __webpack_require__(6);

module.exports = function (x, opts) {
    if (!opts) opts = {};
    var isFile = opts.isFile || function (file) {
        try { var stat = fs.statSync(file) }
        catch (err) { if (err && err.code === 'ENOENT') return false }
        return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;
    
    var extensions = opts.extensions || [ '.js' ];
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
    
    throw new Error("Cannot find module '" + x + "' from '" + y + "'");
    
    function loadAsFileSync (x) {
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
    
    function loadAsDirectorySync (x) {
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
            }
            catch (err) {}
        }
        
        return loadAsFileSync(path.join( x, '/index'));
    }
    
    function loadNodeModulesSync (x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join( dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join( dir, '/', x ));
            if (n) return n;
        }
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


            let config = {
    "proxy": "./adaptive-proxy",
    "default": "desktop"
};
            let proxy = __webpack_require__(16);
            let resourcePath = '/Users/mirawlings/code/arc-react-webpack-demo/src/components/app-layout/index.adaptive';
            let getBestMatch = __webpack_require__(8).getBestMatch;
            let matches = [{ exports:__webpack_require__(18), flags:["mobile"]},{ exports:__webpack_require__(17), flags:[]}];

            function requireAdapted(flags) {
                return getBestMatch(matches, flags).exports;
            }

            module.exports = proxy(requireAdapted, config);
        

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

function getDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = function (requireAdapted, config) {
    function AdaptiveComponent(props, context) {
        var flags = context.flags;
        var Component = getDefault(requireAdapted(flags));
        return React.createElement(Component, props);
    }

    AdaptiveComponent.contextTypes = {
        flags: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
    };

    return AdaptiveComponent;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopLayout = function (_Component) {
    _inherits(DesktopLayout, _Component);

    function DesktopLayout() {
        _classCallCheck(this, DesktopLayout);

        return _possibleConstructorReturn(this, (DesktopLayout.__proto__ || Object.getPrototypeOf(DesktopLayout)).apply(this, arguments));
    }

    _createClass(DesktopLayout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "hello-world" },
                "Hello world - desktop :)"
            );
        }
    }]);

    return DesktopLayout;
}(_react.Component);

exports.default = DesktopLayout;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileLayout = function (_Component) {
    _inherits(MobileLayout, _Component);

    function MobileLayout() {
        _classCallCheck(this, MobileLayout);

        return _possibleConstructorReturn(this, (MobileLayout.__proto__ || Object.getPrototypeOf(MobileLayout)).apply(this, arguments));
    }

    _createClass(MobileLayout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "hello-world" },
                "Hello world - mobile :)"
            );
        }
    }]);

    return MobileLayout;
}(_react.Component);

exports.default = MobileLayout;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("adaptive-imports");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);