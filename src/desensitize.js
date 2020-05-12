export const desensitize = function (value, type) {
    if (!value || value.length === 0) {
        return value
    }
    type = type.toLowerCase();
    const length = value.length;
    switch (type) {
        case 'mobile': // 手机号
            {
                if (length <= 6) {
                    return value
                }
                const stars = '*'.repeat(length - 7);
                return value.replace(/(1\d{2})\d{1,4}(\d{4})/g, `$1${stars}$2`)
            }
        case 'email':  // 邮箱
            {
                const vs = value.split('@');
                if (vs[0].length <= 2) {
                    return value
                }
                const stars = '*'.repeat(vs[0].length - 2);
                const left = vs[0].replace(/(^\w)\w+(\w$)/g, `$1${stars}$2`)
                return `${left}@${vs[1]}`
            }
        // 身份证/驾驶证号
        case 'idcard':
        case 'driving_license':
            {
                if (length <= 8) {
                    return value
                }
                const stars = '*'.repeat(length - 8);
                return value.replace(/(^\w{6})\w+(\w{2}$)/g, `$1${stars}$2`)
            }
        // 银行卡号
        case 'bankCardNo':
        case 'bankAccount':
        case 'bankCardNum':
            {
                if (length <= 10) {
                    return value
                }
                const stars = '*'.repeat(length - 10);
                return value.replace(/(^\w{6})\w+(\w{4}$)/g, `$1${stars}$2`)
            }
        // 护照号/军官证号/港澳台通行证号/其他证件号
        case 'passport':
        case 'armcard':
        case 'simplified_chinese':
        case 'other':
            {
                if (length <= 6) {
                    return value
                }
                const stars = '*'.repeat(length - 6);
                return value.replace(/(^\w{3})\w+(\w{3}$)/g, `$1${stars}$2`)
            }
        default:
            return value
    }
}