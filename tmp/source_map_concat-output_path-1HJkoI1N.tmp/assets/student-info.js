"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('student-info/app', ['exports', 'ember', 'student-info/resolver', 'ember-load-initializers', 'student-info/config/environment'], function (exports, _ember, _studentInfoResolver, _emberLoadInitializers, _studentInfoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _studentInfoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentInfoConfigEnvironment['default'].podModulePrefix,
    Resolver: _studentInfoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _studentInfoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('student-info/application/adapter', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: '//localhost:8080',
    host: "//localhost:4000/api"

  });
});
define('student-info/application/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('student-info/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('student-info/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTSerializer.extend({
        primaryKey: '_id',
        serializeId: function serializeId(id) {
            return id.toString();
        }
    });
});
define("student-info/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "student-info/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('student-info/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'student-info/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _studentInfoConfigEnvironment) {

  var name = _studentInfoConfigEnvironment['default'].APP.name;
  var version = _studentInfoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('student-info/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('student-info/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('student-info/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'student-info/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _studentInfoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_studentInfoConfigEnvironment['default'].APP.name, _studentInfoConfigEnvironment['default'].APP.version)
  };
});
define('student-info/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('student-info/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('student-info/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('student-info/initializers/export-application-global', ['exports', 'ember', 'student-info/config/environment'], function (exports, _ember, _studentInfoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_studentInfoConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _studentInfoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_studentInfoConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('student-info/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('student-info/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('student-info/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("student-info/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('student-info/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('student-info/router', ['exports', 'ember', 'student-info/config/environment'], function (exports, _ember, _studentInfoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _studentInfoConfigEnvironment['default'].locationType,
    rootURL: _studentInfoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('student', function () {
      this.route('create_new');
      this.route('edit-student');
      this.route('student-list');
    });
  });

  exports['default'] = Router;
});
define('student-info/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('student-info/student/create-new/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('student-info/student/create-new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("student-info/student/create-new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "student-info/student/create-new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Welcome to list page");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('student-info/student/edit-student/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('student-info/student/edit-student/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("student-info/student/edit-student/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "student-info/student/edit-student/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('student-info/student/md-student/adapter', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: '//localhost:8080',
    host: "//localhost:4000/api",
    pathForType: function pathForType(type) {
      var arr = type.split('-');
      return _ember['default'].String.pluralize(arr.get('lastObject'));
    },
    defaultSerializer: "-default"
  });
});
define('student-info/student/md-student/model', ['exports', 'ember-data'], function (exports, _emberData) {

  var student = _emberData['default'].Model.extend({
    first_name: _emberData['default'].attr('string'),
    middle_name: _emberData['default'].attr('string'),
    last_name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    contact_num: _emberData['default'].attr('')

  });
  exports['default'] = student;
});
define('student-info/student/md-student/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend({
    primaryKey: '_id',
    serializeId: function serializeId(id) {
      return id.toString();
    },
    modelNameFromPayloadKey: function modelNameFromPayloadKey(payloadKey) {

      //assume this is always a string
      return this._super('student/md-' + payloadKey);
    },
    payloadKeyFromModelName: function payloadKeyFromModelName(modelName) {
      //assume all model are written in the app's convention
      //ex: lead-generation/md-lead
      var arr = modelName.split('-');
      return arr.get('lastObject');
    }
  });
});
define('student-info/student/student-list/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('student-info/student/student-list/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('student-info/student/student-list/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('student/md-student');
    },
    setupController: function setupController(controller, model) {
      this._super.apply(this, arguments);
      // console.log('mofff',model.student);
    }
  });
});
define("student-info/student/student-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "student-info/student/student-list/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element0, 0, 0);
          morphs[1] = dom.createMorphAt(element0, 2, 2);
          morphs[2] = dom.createMorphAt(element0, 4, 4);
          morphs[3] = dom.createMorphAt(element0, 6, 6);
          morphs[4] = dom.createMorphAt(element0, 8, 8);
          morphs[5] = dom.createMorphAt(element0, 10, 10);
          return morphs;
        },
        statements: [["content", "student.first_name", ["loc", [null, [6, 8], [6, 30]]], 0, 0, 0, 0], ["content", "student.middle_name", ["loc", [null, [6, 31], [6, 54]]], 0, 0, 0, 0], ["content", "student.last_name", ["loc", [null, [6, 55], [6, 76]]], 0, 0, 0, 0], ["content", "student.address", ["loc", [null, [6, 77], [6, 96]]], 0, 0, 0, 0], ["content", "student.email", ["loc", [null, [6, 97], [6, 114]]], 0, 0, 0, 0], ["content", "student.contact_num", ["loc", [null, [6, 115], [6, 138]]], 0, 0, 0, 0]],
        locals: ["student", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "student-info/student/student-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Student List");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "log", ["model", ["get", "model", ["loc", [null, [3, 14], [3, 19]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 0], [3, 21]]], 0, 0], ["block", "each", [["get", "model", ["loc", [null, [4, 8], [4, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 0], [8, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('student-info/config/environment', ['ember'], function(Ember) {
  var prefix = 'student-info';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("student-info/app")["default"].create({"name":"student-info","version":"0.0.0+e6621ec5"});
}

/* jshint ignore:end */
//# sourceMappingURL=student-info.map