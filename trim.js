
// trim


function trim(str) {
    var done = false;
    var len;
    while (!done) {
        len = str.length;
	str = checkFirst(str);
    }

    function checkFirst(strF) {
        if (strF.charCodeAt(0) < 33) {
            strF = strF.slice(1);
        }
        strF = checkLast(strF);
        return strF;
    }

    function checkLast(strL) {
        if (strL.charCodeAt(strL.length - 1) < 33) {
            strL = strL.slice(0, strL.length - 1);
        }
        checkIfDone(strL);
        return strL;
    }

    function checkIfDone(strD) {
        if (strD.length === len) {
            done = true;
		alert(done);
        }
    }

    return str;
}
