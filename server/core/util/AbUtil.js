/**
 * 获取配置文件路径
 * @returns {string}
 */
 module.exports.getConfigPath = function(){
    var configPath = process.cwd() + "/";
    var applicationPath = process.env.NODE_ENV || "dev";
    configPath = configPath +  "config/" + applicationPath + "/";
    return configPath;
};