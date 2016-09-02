define('student-info/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTSerializer.extend({
        primaryKey: '_id',
        serializeId: function serializeId(id) {
            return id.toString();
        }
    });
});