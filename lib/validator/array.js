var rules = require('../rule');

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
var array = function(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required
    || (!rule.required && source.hasOwnProperty(rule.field));
  if(validate) {
    rules.required(rule, value, source, errors, options);
    if(rule.required || value != undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

module.exports = array;
