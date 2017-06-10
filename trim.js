
// trim

function trim(str) { 
    ((typeof(str)).toLowerCase() === "string") ? str = checkLast(checkFirst(str)) : (
        console.log("Argument is not a string. Nothing to trim."),
        str = false);
    return str;
    function checkFirst(strF) {
        if (strF.charCodeAt(0) < 33) {
            strF = strF.substr(1);
            strF = checkFirst(strF);
        }
        return strF;
    }
    function checkLast(strL) {
        if (strL.charCodeAt(strL.length - 1) < 33) {
            strL = strL.substr(0, strL.length - 1);
            strL = checkLast(strL);
        }
        return strL;
    }
}
