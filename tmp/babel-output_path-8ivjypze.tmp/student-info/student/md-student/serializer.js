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