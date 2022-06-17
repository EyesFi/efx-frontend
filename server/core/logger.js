var log4js = require('log4js');
var EfUtil = require('./util/AbUtil');
log4js.configure(EfUtil.getConfigPath() + '/log4js.json');

exports.getLogger=function(category){
    return log4js.getLogger(category);
};
