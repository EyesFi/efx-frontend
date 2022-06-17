
module.exports.cleanDict = function (dic={}) {
    for ( var key in dic ){
        if ( dic[key] === '' ){
            delete dic[key]
        }
    }
    return dic;
};

