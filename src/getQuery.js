//location search 转化为json
function urlArgs() {
    const args = {};
    const query = location.search.substring(1);
    const pairs = query.split("&");
    for (let i = 0; i < pairs.length; i++) {
        const pos = pairs[i].indexOf("=");
        if (pos === -1) continue;
        const name = pairs[i].substring(0, pos);
        let value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

export const getQuery = function (parameter) {
    const query = urlArgs();
    if (!parameter) {
        return query;
    }
    return query[parameter];
}