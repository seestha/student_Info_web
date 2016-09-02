import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  serializeId: function(id) {
      return id.toString();
  },
  modelNameFromPayloadKey: function(payloadKey) {

      //assume this is always a string
      return this._super('student/md-'+payloadKey);
  },
  payloadKeyFromModelName: function(modelName) {
    //assume all model are written in the app's convention
    //ex: lead-generation/md-lead
    var arr = modelName.split('-');
    return arr.get('lastObject');
  }
});
