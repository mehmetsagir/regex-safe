var $da93f66a944e6fa1$exports = {};
const $da93f66a944e6fa1$var$isEmail = (email)=>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email) ? true : false;
};
$da93f66a944e6fa1$exports = {
    isEmail: $da93f66a944e6fa1$var$isEmail
};


var $df16d17eb59f28f2$require$isEmail = $da93f66a944e6fa1$exports.isEmail;
var $d0029f21aa125231$exports = {};
const $d0029f21aa125231$var$isNum = (num)=>{
    const regex = /^[1-9]\d*$/g;
    return regex.test(num) ? true : false;
};
$d0029f21aa125231$exports = {
    isNum: $d0029f21aa125231$var$isNum
};


var $df16d17eb59f28f2$require$isNum = $d0029f21aa125231$exports.isNum;
var $a733197d8723ee59$exports = {};
const $a733197d8723ee59$var$isName = (name)=>{
    const regex = /^[A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]+(\s([A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]{2,})){1,3}$/i;
    return regex.test(name);
};
$a733197d8723ee59$exports = {
    isName: $a733197d8723ee59$var$isName
};


var $df16d17eb59f28f2$require$isName = $a733197d8723ee59$exports.isName;
var $80e0acff89f2d717$exports = {};
const $80e0acff89f2d717$var$isImageURL = (fileURL)=>{
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|gif|png|webp)$/;
    return regex.test(fileURL) ? true : false;
};
$80e0acff89f2d717$exports = {
    isImageURL: $80e0acff89f2d717$var$isImageURL
};


var $df16d17eb59f28f2$require$isImageURL = $80e0acff89f2d717$exports.isImageURL;
var $e2dfc88a9db0468b$exports = {};
const $e2dfc88a9db0468b$var$isRegex = (value, regex)=>{
    if (typeof regex !== "object") return false;
    return regex.test(value) ? true : false;
};
$e2dfc88a9db0468b$exports = {
    isRegex: $e2dfc88a9db0468b$var$isRegex
};


var $df16d17eb59f28f2$require$isRegex = $e2dfc88a9db0468b$exports.isRegex;
var $dc91f24c56a1b722$exports = {};
const $dc91f24c56a1b722$var$isBoolean = (value)=>{
    const regex = /^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/;
    return regex.test(value) ? true : false;
};
$dc91f24c56a1b722$exports = {
    isBoolean: $dc91f24c56a1b722$var$isBoolean
};


var $df16d17eb59f28f2$require$isBoolean = $dc91f24c56a1b722$exports.isBoolean;
var $a0b92d42cd17c784$exports = {};
const $a0b92d42cd17c784$var$isURL = (url)=>{
    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
    return regex.test(url) ? true : false;
};
$a0b92d42cd17c784$exports = {
    isURL: $a0b92d42cd17c784$var$isURL
};


var $df16d17eb59f28f2$require$isURL = $a0b92d42cd17c784$exports.isURL;
var $79ad2f4b9bde0dfa$exports = {};
const $79ad2f4b9bde0dfa$var$defaultOptions = {
    atLeastOneNumber: true,
    atLeastOneUpperCase: true,
    atLeastOneLowerCase: true,
    atLeastSpeacialChar: true,
    whitespace: true,
    repeatedly: true,
    minLength: true
};
const $79ad2f4b9bde0dfa$var$localization = {
    en: {
        atLeastOneNumber: "Must contain at least one digit.",
        atLeastOneUpperCase: "Must contain at least one uppercase letter.",
        atLeastOneLowerCase: "Must contain at least one lowercase letter.",
        atLeastOneSpecialChar: "Must contain at least one special character.",
        whitespace: "Must not contain whitespace.",
        repeatedly: "Must not contain repeating characters.",
        minLength: "Must be at least 8 characters."
    },
    tr: {
        atLeastOneNumber: "En az bir rakam içermeli.",
        atLeastOneUpperCase: "En az bir büyük harf içermeli.",
        atLeastOneLowerCase: "En az bir küçük harf içermeli.",
        atLeastOneSpecialChar: "En az bir özel karakter içermeli.",
        whitespace: "Boşluk içermemeli.",
        repeatedly: "Tekrar eden karakterler içermemeli.",
        minLength: "En az 8 karakter içermeli."
    }
};
const $79ad2f4b9bde0dfa$var$isPassword = (pass, options = $79ad2f4b9bde0dfa$var$defaultOptions, locale = "en")=>{
    if (locale !== "tr" && locale !== "en") return "Invalid locale";
    const regexs = {
        atLeastOneNumber: /(?=.*[0-9])/g,
        atLeastOneUpperCase: /^(?=.*[A-ZÇÖÜĞİŞ])./g,
        atLeastOneLowerCase: /^(?=.*[a-zçöüğış])./g,
        atLeastOneSpecialChar: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ])./g,
        whitespace: /^(?!.* )/g,
        repeatedly: /^(?:([\s\w!#%&*+-ÇÖÜçöüĞğİıŞş])(?!\1\1))+$/g,
        minLength: /^.{8,}$/g
    };
    const values = Object.entries({
        ...$79ad2f4b9bde0dfa$var$defaultOptions,
        ...options
    }).flatMap(([key, value])=>{
        if (value) {
            if (!regexs[key].test(pass)) return {
                valid: false,
                message: $79ad2f4b9bde0dfa$var$localization[locale][key]
            };
            return true;
        }
    }).filter((item)=>item !== true && item !== undefined
    );
    return values?.length > 0 ? values[0] : true;
};
$79ad2f4b9bde0dfa$exports = {
    isPassword: $79ad2f4b9bde0dfa$var$isPassword
};


var $df16d17eb59f28f2$require$isPassword = $79ad2f4b9bde0dfa$exports.isPassword;
var $173ad5c86c714063$exports = {};
const $173ad5c86c714063$var$isEven = (num)=>{
    const regex = /^-?\d*[02468]$/g;
    return regex.test(num) ? true : false;
};
$173ad5c86c714063$exports = {
    isEven: $173ad5c86c714063$var$isEven
};


var $df16d17eb59f28f2$require$isEven = $173ad5c86c714063$exports.isEven;
var $38f19612229b864f$exports = {};
const $38f19612229b864f$var$isOdd = (num)=>{
    const regex = /^-?\d*[13579]$/g;
    return regex.test(num) ? true : false;
};
$38f19612229b864f$exports = {
    isOdd: $38f19612229b864f$var$isOdd
};


var $df16d17eb59f28f2$require$isOdd = $38f19612229b864f$exports.isOdd;
var $373eda095639a10e$exports = {};
const $373eda095639a10e$var$isSlug = (value)=>{
    const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/gim;
    return regex.test(value) ? true : false;
};
$373eda095639a10e$exports = {
    isSlug: $373eda095639a10e$var$isSlug
};


var $df16d17eb59f28f2$require$isSlug = $373eda095639a10e$exports.isSlug;
var $250d7e0e21323638$exports = {};
const $250d7e0e21323638$var$isHexColor = (color)=>{
    const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return regex.test(color) ? true : false;
};
$250d7e0e21323638$exports = {
    isHexColor: $250d7e0e21323638$var$isHexColor
};


var $df16d17eb59f28f2$require$isHexColor = $250d7e0e21323638$exports.isHexColor;
var $261ee2fe7a5b1086$exports = {};
const $261ee2fe7a5b1086$var$isInteger = (value)=>{
    const regex = /^-?\d+$/gim;
    return regex.test(value) ? true : false;
};
$261ee2fe7a5b1086$exports = {
    isInteger: $261ee2fe7a5b1086$var$isInteger
};


var $df16d17eb59f28f2$require$isInteger = $261ee2fe7a5b1086$exports.isInteger;
var $1189bd4b06d87008$exports = {};
const $1189bd4b06d87008$var$isIPv4 = (ip)=>{
    const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip) ? true : false;
};
$1189bd4b06d87008$exports = {
    isIPv4: $1189bd4b06d87008$var$isIPv4
};


var $df16d17eb59f28f2$require$isIPv4 = $1189bd4b06d87008$exports.isIPv4;
var $1836460093ed9e15$exports = {};
const $1836460093ed9e15$var$isIPv6 = (ip)=>{
    const regex = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/g;
    return regex.test(ip);
};
$1836460093ed9e15$exports = {
    isIPv6: $1836460093ed9e15$var$isIPv6
};


var $df16d17eb59f28f2$require$isIPv6 = $1836460093ed9e15$exports.isIPv6;
var $08330aa2712e47c8$exports = {};
const $08330aa2712e47c8$var$isHTMLTags = (html)=>{
    const regex = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/;
    return regex.test(html) ? true : false;
};
$08330aa2712e47c8$exports = {
    isHTMLTags: $08330aa2712e47c8$var$isHTMLTags
};


var $df16d17eb59f28f2$require$isHTMLTags = $08330aa2712e47c8$exports.isHTMLTags;
var $a3a9e08c7cc9d65e$exports = {};
const $a3a9e08c7cc9d65e$var$removeHTMLTags = (str)=>{
    const regex = /<[^>]*>/g;
    return str.replaceAll(regex, "");
};
$a3a9e08c7cc9d65e$exports = {
    removeHTMLTags: $a3a9e08c7cc9d65e$var$removeHTMLTags
};


var $df16d17eb59f28f2$require$removeHTMLTags = $a3a9e08c7cc9d65e$exports.removeHTMLTags;
var $ca29559d2a7f3726$exports = {};
const $ca29559d2a7f3726$var$boldText = (str, boldText, caseSensitivity)=>{
    const regex = new RegExp("(\\b" + boldText + "\\w*)", caseSensitivity ? "g" : "gi");
    const replacement = "<b>$1</b>";
    return str.replace(regex, replacement);
};
$ca29559d2a7f3726$exports = {
    boldText: $ca29559d2a7f3726$var$boldText
};


var $df16d17eb59f28f2$require$boldText = $ca29559d2a7f3726$exports.boldText;
var $46afb27b069640cc$exports = {};
const $46afb27b069640cc$var$isEqualArray = (a, b, typeSensivity = false)=>{
    return a.length === b.length && typeSensivity ? a.every((v, i)=>v === b[i]
    ) : a.every((v, i)=>v == b[i]
    );
};
$46afb27b069640cc$exports = {
    isEqualArray: $46afb27b069640cc$var$isEqualArray
};


var $df16d17eb59f28f2$require$isEqualArray = $46afb27b069640cc$exports.isEqualArray;
var $77102897f7bf738b$exports = {};
const $77102897f7bf738b$var$castArray = (value)=>{
    return Array.isArray(value) ? value : [
        value
    ];
};
$77102897f7bf738b$exports = {
    castArray: $77102897f7bf738b$var$castArray
};


var $df16d17eb59f28f2$require$castArray = $77102897f7bf738b$exports.castArray;
var $d84d2ebfdd778b0a$exports = {};
const $d84d2ebfdd778b0a$var$convertObject = (arr, key)=>{
    return Object.fromEntries(arr.map((item, index)=>[
            item[key] || index,
            item
        ]
    ));
};
$d84d2ebfdd778b0a$exports = {
    convertObject: $d84d2ebfdd778b0a$var$convertObject
};


var $df16d17eb59f28f2$require$convertObject = $d84d2ebfdd778b0a$exports.convertObject;
var $208347e98c62ff65$exports = {};
const $208347e98c62ff65$var$countOccurrences = (arr, val)=>{
    return arr.reduce((a, v)=>String(v).toLowerCase() === String(val).toLowerCase() ? a + 1 : a
    , 0);
};
$208347e98c62ff65$exports = {
    countOccurrences: $208347e98c62ff65$var$countOccurrences
};


var $df16d17eb59f28f2$require$countOccurrences = $208347e98c62ff65$exports.countOccurrences;
var $395b0a375be26a92$exports = {};
const $395b0a375be26a92$var$range = (min, max)=>Array.from({
        length: max - min + 1
    }, (_, i)=>min + i
    )
;
$395b0a375be26a92$exports = {
    range: $395b0a375be26a92$var$range
};


var $df16d17eb59f28f2$require$range = $395b0a375be26a92$exports.range;
var $c9b9835bd65fed2f$exports = {};
const $c9b9835bd65fed2f$var$maxByArray = (arr, fn)=>{
    return arr.reduce((a, b)=>a[fn] >= b[fn] ? a : b
    , {});
};
$c9b9835bd65fed2f$exports = {
    maxByArray: $c9b9835bd65fed2f$var$maxByArray
};


var $df16d17eb59f28f2$require$maxByArray = $c9b9835bd65fed2f$exports.maxByArray;
var $a5c6db9f27ac4ecc$exports = {};
const $a5c6db9f27ac4ecc$var$minByArray = (arr, key)=>arr.reduce((a, b)=>a[key] < b[key] ? a : b
    , {})
;
$a5c6db9f27ac4ecc$exports = {
    minByArray: $a5c6db9f27ac4ecc$var$minByArray
};


var $df16d17eb59f28f2$require$minByArray = $a5c6db9f27ac4ecc$exports.minByArray;
var $fb29c14e346d1b9a$exports = {};
const $fb29c14e346d1b9a$var$indexOfMin = (arr)=>arr.reduce((prev, curr, i, a)=>curr < a[prev] ? i : prev
    , 0)
;
$fb29c14e346d1b9a$exports = {
    indexOfMin: $fb29c14e346d1b9a$var$indexOfMin
};


var $df16d17eb59f28f2$require$indexOfMin = $fb29c14e346d1b9a$exports.indexOfMin;
var $b907ac08ea64ac69$exports = {};
const $b907ac08ea64ac69$var$indexOfMax = (arr)=>arr.reduce((prev, curr, i, a)=>curr > a[prev] ? i : prev
    , 0)
;
$b907ac08ea64ac69$exports = {
    indexOfMax: $b907ac08ea64ac69$var$indexOfMax
};


var $df16d17eb59f28f2$require$indexOfMax = $b907ac08ea64ac69$exports.indexOfMax;
var $3cb6ae21dcfb3bb2$exports = {};
const $3cb6ae21dcfb3bb2$var$flat = (arr)=>arr.reduce((a, b)=>Array.isArray(b) ? [
            ...a,
            ...$3cb6ae21dcfb3bb2$var$flat(b)
        ] : [
            ...a,
            b
        ]
    , [])
;
$3cb6ae21dcfb3bb2$exports = {
    flat: $3cb6ae21dcfb3bb2$var$flat
};


var $df16d17eb59f28f2$require$flat = $3cb6ae21dcfb3bb2$exports.flat;
var $7c3d41a23a509ee0$exports = {};
const $7c3d41a23a509ee0$var$getConsecutiveArrays = (arr, size)=>size > arr.length ? [] : arr.slice(size - 1).map((_, i)=>arr.slice(i, size + i)
    )
;
$7c3d41a23a509ee0$exports = {
    getConsecutiveArrays: $7c3d41a23a509ee0$var$getConsecutiveArrays
};


var $df16d17eb59f28f2$require$getConsecutiveArrays = $7c3d41a23a509ee0$exports.getConsecutiveArrays;
var $7b19767f8baf2edc$exports = {};
const $7b19767f8baf2edc$var$getNthItems = (arr, nth)=>arr.filter((_, i)=>i % nth === nth - 1
    )
;
$7b19767f8baf2edc$exports = {
    getNthItems: $7b19767f8baf2edc$var$getNthItems
};


var $df16d17eb59f28f2$require$getNthItems = $7b19767f8baf2edc$exports.getNthItems;
var $33280ff9307368a9$exports = {};
const $33280ff9307368a9$var$getIntersection = (a, ...arr)=>[
        ...new Set(a)
    ].filter((v)=>arr.every((b)=>b.includes(v)
        )
    )
;
$33280ff9307368a9$exports = {
    getIntersection: $33280ff9307368a9$var$getIntersection
};


var $df16d17eb59f28f2$require$getIntersection = $33280ff9307368a9$exports.getIntersection;
var $69fac0d356ebd43e$exports = {};
const $69fac0d356ebd43e$var$sum = (arr)=>arr.reduce((a, b)=>a + b
    , 0)
;
$69fac0d356ebd43e$exports = {
    sum: $69fac0d356ebd43e$var$sum
};


var $df16d17eb59f28f2$require$sum = $69fac0d356ebd43e$exports.sum;
var $531af21bfcf1ee8f$exports = {};
const $531af21bfcf1ee8f$var$unique = (arr)=>[
        ...new Set(arr)
    ]
;
$531af21bfcf1ee8f$exports = {
    unique: $531af21bfcf1ee8f$var$unique
};


var $df16d17eb59f28f2$require$unique = $531af21bfcf1ee8f$exports.unique;
var $340266b0f8f22979$exports = {};
const $340266b0f8f22979$var$union = (...arr)=>[
        ...new Set(arr.flat())
    ]
;
$340266b0f8f22979$exports = {
    union: $340266b0f8f22979$var$union
};


var $df16d17eb59f28f2$require$union = $340266b0f8f22979$exports.union;
var $8a30a305acb049bc$exports = {};
const $8a30a305acb049bc$var$groupBy = (arr, key)=>arr.reduce((acc, item)=>(acc[item[key]] = [
            ...acc[item[key]] || [],
            item
        ], acc)
    , {})
;
$8a30a305acb049bc$exports = {
    groupBy: $8a30a305acb049bc$var$groupBy
};


var $df16d17eb59f28f2$require$groupBy = $8a30a305acb049bc$exports.groupBy;
var $77f6a72ada3454d8$exports = {};
const $77f6a72ada3454d8$var$merge = (a, b)=>[
        ...a,
        ...b
    ]
;
$77f6a72ada3454d8$exports = {
    merge: $77f6a72ada3454d8$var$merge
};


var $df16d17eb59f28f2$require$merge = $77f6a72ada3454d8$exports.merge;
console.log($df16d17eb59f28f2$require$merge([
    1,
    2,
    3
], [
    4,
    5,
    6
])); // [1, 2, 3, 4, 5, 6]
module.exports = {
    isEmail: $df16d17eb59f28f2$require$isEmail,
    isNum: $df16d17eb59f28f2$require$isNum,
    isName: $df16d17eb59f28f2$require$isName,
    isImageURL: $df16d17eb59f28f2$require$isImageURL,
    isRegex: $df16d17eb59f28f2$require$isRegex,
    isBoolean: $df16d17eb59f28f2$require$isBoolean,
    isURL: $df16d17eb59f28f2$require$isURL,
    isPassword: $df16d17eb59f28f2$require$isPassword,
    isEven: $df16d17eb59f28f2$require$isEven,
    isOdd: $df16d17eb59f28f2$require$isOdd,
    removeHTMLTags: $df16d17eb59f28f2$require$removeHTMLTags,
    isSlug: $df16d17eb59f28f2$require$isSlug,
    isHexColor: $df16d17eb59f28f2$require$isHexColor,
    isInteger: $df16d17eb59f28f2$require$isInteger,
    isIPv4: $df16d17eb59f28f2$require$isIPv4,
    isIPv6: $df16d17eb59f28f2$require$isIPv6,
    isHTMLTags: $df16d17eb59f28f2$require$isHTMLTags,
    boldText: $df16d17eb59f28f2$require$boldText,
    isEqualArray: $df16d17eb59f28f2$require$isEqualArray,
    castArray: $df16d17eb59f28f2$require$castArray,
    convertObject: $df16d17eb59f28f2$require$convertObject,
    countOccurrences: $df16d17eb59f28f2$require$countOccurrences,
    range: $df16d17eb59f28f2$require$range,
    maxByArray: $df16d17eb59f28f2$require$maxByArray,
    minByArray: $df16d17eb59f28f2$require$minByArray,
    indexOfMin: $df16d17eb59f28f2$require$indexOfMin,
    indexOfMax: $df16d17eb59f28f2$require$indexOfMax,
    flat: $df16d17eb59f28f2$require$flat,
    getConsecutiveArrays: $df16d17eb59f28f2$require$getConsecutiveArrays,
    getNthItems: $df16d17eb59f28f2$require$getNthItems,
    getIntersection: $df16d17eb59f28f2$require$getIntersection,
    sum: $df16d17eb59f28f2$require$sum,
    unique: $df16d17eb59f28f2$require$unique,
    union: $df16d17eb59f28f2$require$union,
    groupBy: $df16d17eb59f28f2$require$groupBy,
    merge: $df16d17eb59f28f2$require$merge
};


