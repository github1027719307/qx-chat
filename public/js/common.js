function appendZero(obj) {
    if (obj < 10) return "0" + "" + obj;
    else return obj;
}

function getLocalHMS() {
    var time = (new Date()).getTime();
    var d = new Date();
    return appendZero(d.getHours()) + ":" + appendZero(d.getMinutes()) + ":" + appendZero(d.getSeconds());
}

function getStringLength(_str) {
    return _str.replace(/[^\u0000-\u00ff]/g, "tt").length;
}