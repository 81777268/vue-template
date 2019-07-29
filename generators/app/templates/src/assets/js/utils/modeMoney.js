module.exports = function(str) {

    var strIndexof = str.indexOf('.'),
        strNumber = str.length,
        strDecimal = '';

    if (strIndexof == '-1') {
        strNumber = strNumber
    } else {
        strDecimal = str.substr(strIndexof)
        str = str.substring(0, strIndexof)
        strNumber = str.length;
    }

    var strParseint = parseInt(strNumber / 3), //取整 — 小数点个数
        strRemain = strNumber % 3, //取余 - 是否有最后一位小数点   (=0) strParseint-1   (!=0)  strParseint=strParseint
        fn = function(strParseint, str) {
            for (let i = 0; i < strParseint; i++) {
                str = str.substring(0, strNumber - (i + 1) * (3)) + ',' + str.substr((i + 1) * (-3) + (-i))
            }
            return str
        };

    if (strIndexof == '-1') { //如果不为小数
        if (strRemain != 0) {
            str = fn(strParseint, str)
            return str
        } else {
            strParseint = strParseint - 1
            str = fn(strParseint, str)
            return str
        }
    } else {
        if (strRemain != 0) {
            str = fn(strParseint, str) + strDecimal
            return str
        } else {
            strParseint = strParseint - 1
            str = fn(strParseint, str) + strDecimal
            return str
        }
    }
}