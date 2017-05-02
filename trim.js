
// trim

function trim(str) {
    var trimmed = false;
    while (!trimmed) {
        var len = str.length;
        if (str.slice(0, 1) == " ") {
            str = str.slice(1);
        }
        if (str.slice(-1) == " ") {
            str = str.slice(0, str.length - 1);
        }
        if (str.length == len) {
            trimmed = true;
        }
    }
    return str;
}
