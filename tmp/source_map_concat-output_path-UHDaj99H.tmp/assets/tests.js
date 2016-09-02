define('student-info/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('student-info/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/adapter.js should pass jshint.\napplication/adapter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/adapter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/adapter.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('student-info/tests/application/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/model.js should pass jshint.\napplication/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/route.js should pass jshint.\napplication/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/serializer.js should pass jshint.\napplication/serializer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/serializer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('student-info/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('student-info/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'student-info/tests/helpers/start-app', 'student-info/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _studentInfoTestsHelpersStartApp, _studentInfoTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _studentInfoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _studentInfoTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('student-info/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('student-info/tests/helpers/resolver', ['exports', 'student-info/resolver', 'student-info/config/environment'], function (exports, _studentInfoResolver, _studentInfoConfigEnvironment) {

  var resolver = _studentInfoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _studentInfoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentInfoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('student-info/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('student-info/tests/helpers/start-app', ['exports', 'ember', 'student-info/app', 'student-info/config/environment'], function (exports, _ember, _studentInfoApp, _studentInfoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _studentInfoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _studentInfoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('student-info/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('student-info/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 17, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('student-info/tests/student/create-new/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/create-new/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/create-new/model.js should pass jshint.\nstudent/create-new/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/create-new/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/create-new/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/create-new/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/create-new/route.js should pass jshint.\nstudent/create-new/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/create-new/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/edit-student/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/edit-student/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/edit-student/model.js should pass jshint.\nstudent/edit-student/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/edit-student/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/edit-student/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/edit-student/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/edit-student/route.js should pass jshint.\nstudent/edit-student/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/edit-student/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/md-student/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/md-student/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/md-student/adapter.js should pass jshint.\nstudent/md-student/adapter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/md-student/adapter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/md-student/adapter.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('student-info/tests/student/md-student/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/md-student/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/md-student/model.js should pass jshint.\nstudent/md-student/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/md-student/model.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/md-student/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/md-student/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/md-student/serializer.js should pass jshint.\nstudent/md-student/serializer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/md-student/serializer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/student-list/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/student-list/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/student-list/controller.js should pass jshint.\nstudent/student-list/controller.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/controller.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/student-list/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/student-list/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/student-list/model.js should pass jshint.\nstudent/student-list/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('student-info/tests/student/student-list/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/student-list/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/student-list/route.js should pass jshint.\nstudent/student-list/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/route.js: line 8, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('student-info/tests/test-helper', ['exports', 'student-info/tests/helpers/resolver', 'ember-qunit'], function (exports, _studentInfoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_studentInfoTestsHelpersResolver['default']);
});
define('student-info/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('student-info/tests/unit/application/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Model | application', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/application/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/application/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-info/tests/unit/application/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/application/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/route-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/application/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('student-info/tests/unit/application/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/application/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/create-new/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('student/create-new', 'Unit | Model | student/create new', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/student/create-new/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/create-new/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/create-new/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/create-new/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:student/create-new', 'Unit | Route | student/create new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-info/tests/unit/student/create-new/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/create-new/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/create-new/route-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/edit-student/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('student/edit-student', 'Unit | Model | student/edit student', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/student/edit-student/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/edit-student/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/edit-student/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/edit-student/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:student/edit-student', 'Unit | Route | student/edit student', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-info/tests/unit/student/edit-student/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/edit-student/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/edit-student/route-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/md-student/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('student/md-student', 'Unit | Model | student/md student', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/student/md-student/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/md-student/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/md-student/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('student', 'Unit | Model | student', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/student/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/student-list/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:student/student-list', 'Unit | Controller | student/student list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-info/tests/unit/student/student-list/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/student-list/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/student-list/controller-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/student-list/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('student/student-list', 'Unit | Model | student/student list', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('student-info/tests/unit/student/student-list/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/student-list/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/student-list/model-test.js should pass jshint.');
  });
});
define('student-info/tests/unit/student/student-list/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:student/student-list', 'Unit | Route | student/student list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-info/tests/unit/student/student-list/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/student/student-list/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/student/student-list/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('student-info/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map