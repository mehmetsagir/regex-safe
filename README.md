# Regex Safe

Easy controls with Regex.

<p>
  <a href="https://www.npmjs.com/package/regex-safe">
    <img src="https://img.shields.io/npm/dm/regex-safe" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/regex-safe">
    <img src="https://img.shields.io/npm/dt/regex-safe" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/regex-safe">
    <img src="https://img.shields.io/npm/v/regex-safe" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/regex-safe">
    <img src="https://img.shields.io/npm/l/regex-safe" alt="License">
  </a>
</p>

## Use of Utils

### Get Position

```js
import { getPosition } from "regex-safe";
getPosition(document.body); // { left: 0, top: 0 }
```

### Sort Descending

```js
import { sortDescending } from "regex-safe";
sortDescending([new Date("2019-01-03"), new Date("2019-01-01")]); // [new Date("2019-01-03"), new Date("2019-01-01")]
```

### Yesterday

```js
import { yesterday } from "regex-safe";
yesterday(); // 2022-07-10T14:32:24.326Z
```

### Get Week Day

```js
import { getWeekday } from "regex-safe";
getWeekday(new Date()); // sunday
```

### Number of Days

```js
import { numberOfDays } from "regex-safe";
numberOfDays(2022); // 365
```

### Tomorrow

```js
import { tomorrow } from "regex-safe";
tomorrow(); // 2022-07-10T17:34:28.400Z
```

### Get Timezone

```js
import { getTimezone } from "regex-safe";
getTimezone(); // Europe/Istanbul
```

### Days in Month

```js
import { daysInMonth } from "regex-safe";
daysInMonth(2020, 1); // 30
```

### Get Month Name

```js
import { getMonthName } from "regex-safe";
getMonthName(new Date()); // July
```

### Get Last Date

```js
import { getLastDate } from "regex-safe";
getLastDate(new Date("2020-01-01")); // 2020-01-30T21:00:00.000Z
```

### Get First Date

```js
import { getFirstDate } from "regex-safe";
getFirstDate(); // 2022-06-30T21:00:00.000Z
getFirstDate(new Date("2020-01-01")); // 2020-01-01T00:00:00.
```

### Day of Year

```js
import { dayOfYear } from "regex-safe";
dayOfYear(new Date(2020, 04, 16)); // 137
```

### Format Date

```js
import { formatLocaleDate } from "regex-safe";
formatLocaleDate(new Date(), "pt-BR"); // 06/05/2020
formatLocaleDate(new Date(), "tr-TR"); // 06.05.2020
```

### Format Seconds

```js
import { formatSeconds } from "regex-safe";
formatSeconds(200); // 00:03:20
```

### Month Diff

```js
import { monthDiff } from "regex-safe";
monthDiff(new Date("2020-01-01"), new Date("2021-01-01")); // 12
```

### Diff Days

```js
import { diffDays } from "regex-safe";
diffDays(new Date("2014-12-19"), new Date("2020-01-01")); // 1839
```

### Suffix Am / Pm

```js
import { suffixAmPm } from "regex-safe";
suffixAmPm(0); // '12am'
suffixAmPm(12); // '12pm'
```

### Transpose

```js
import { swapItems } from "regex-safe";
swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
```

### Transpose

```js
import { transpose } from "regex-safe";
transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
```

### Chunk

```js
import { chunk } from "regex-safe";
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

### Sort

```js
import { sort } from "regex-safe";
sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]
```

### Shuffle

```js
import { shuffle } from "regex-safe";
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

### Repeat

````js
import { repeat } from "regex-safe";
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]```
````

### Union

```js
import { removeFalsy } from "regex-safe";

removeFalsy([0, "mehmet", "", NaN, true, 5, undefined, "regex-safe", false]); // [ 'mehmet', true, 5, 'regex-safe' ]
```

### Group by

```js
import { groupBy } from "regex-safe";

groupBy(
  [
    { branch: "audi", model: "q8", year: "2019" },
    { branch: "audi", model: "rs7", year: "2020" },
    { branch: "ford", model: "mustang", year: "2019" },
    { branch: "ford", model: "explorer", year: "2020" },
    { branch: "bmw", model: "x7", year: "2020" },
  ],
  "branch"
); // { audi: [{ branch: "audi", model: "q8", year: "2019" }, { branch: "audi", model: "rs7", year: "2020" }], ford: [{ branch: "ford", model: "mustang", year: "2019" }, { branch: "ford", model: "explorer", year: "2020" }], bmw: [{ branch: "bmw", model: "x7", year: "2020" }] }
```

### Union

```js
import { union } from "regex-safe";

union([1, 2], [2, 3], [3]); // [1, 2, 3]
```

### Unique

```js
import { unique } from "regex-safe";

unique([1, 2, 3, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
```

### Sum

```js
import { sum } from "regex-safe";

sum([1, 2, 3, 4, 5]); // 15
```

### Get Intersection

```js
import { getIntersection } from "regex-safe";

getIntersection([1, 2, 3], [2, 3, 4]); // [2, 3]
```

### Get n-th Items

```js
import { getNthItems } from "regex-safe";

getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
```

### Get Consecutive Arrays

```js
import { getConsecutiveArrays } from "regex-safe";

getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
```

### Flat an Array

```js
import { flat } from "regex-safe";

flat(["regex-safe", ["regex", "safe"]]); // ["regex-safe", "regex", "safe"]
```

### Index of Max

```js
import { indexOfMax } from "regex-safe";

indexOfMax([6, 2, 5, 9, 7]); // 3
```

### Index of Min

```js
import { indexOfMin } from "regex-safe";

indexOfMin([6, 2, 5, 9, 7]); // 1
```

### Max by Array

```js
import { minByArray } from "regex-safe";

minByArray(
  [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Jane",
      age: 30,
    },
    {
      name: "Joe",
      age: 10,
    },
  ],
  "age"
); // { name: "Joe", age: 10 },
```

### Max by Array

```js
import { maxByArray } from "regex-safe";

maxByArray(
  [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Jane",
      age: 30,
    },
    {
      name: "Joe",
      age: 10,
    },
  ],
  "age"
); // { name: "Jane", age: 30 },
```

### Range

```js
import { range } from "regex-safe";

range(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(2, 5); // [2, 3, 4, 5]
```

### Convert Object

```js
import { countOccurrences } from "regex-safe";

countOccurrences(["Mehmet", "Mehmet", "Regex", "Safe"], "mehmet"); // 2
countOccurrences([2, 1, 3, 4, 5, 2, 7, 2], 2); // 3
```

### Convert Object

Convert to Object from Array.

```js
import { convertArray } from "regex-safe";

convertObject(
  [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ],
  "name"
); // { John: { id: 1, name: "John" }, Jane: { id: 2, name: "Jane" } }

convertObject([
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
]); // { 0: { id: 1, name: "John" }, 1: { id: 2, name: "Jane" } }
```

### Cast Array

```js
import { castArray } from "regex-safe";

castArray(1, 2, 3); // [1, 2, 3]
castArray([1, 2, 3]); // [1, 2, 3]
```

### Equal Array

- Params
  - First Array
  - Second Array
  - Type Sensitivity (Default: false)

```js
import { isEqualArray } from "regex-safe";

isEqualArray([1, 2, 3], [1, "2", 3]); // true
isEqualArray([1, 2, 3], [1, "2", 3], true); // false
isEqualArray([1, 2, 3], [1, 2, 3], true); // true
```

### Bold Text

- Params
  - Text
  - The text you want to be bold
  - Case Sensitivity (Default: false)

```js
import { boldText } from "regex-safe";

const text = "
You can make the areas you want bold in our texts using boldText. Example usage of BoldText is as follows.";

boldText(text, 'boldText'); // You can make the areas you want bold in our texts using <b>boldText</b>. Example usage of <b>BoldText</b> is as follows.

boldText(text, 'boldText', true); // You can make the areas you want bold in our texts using <b>boldText</b>. Example usage of BoldText is as follows.
```

### Remove HTML Tags

```js
import { removeHTMLTags } from "regex-safe";

removeHTMLTags("<h1>Hello world</h1>"); // Hello world
```

## Use of Controls

### Email

```js
import { isEmail } from "regex-safe";

isEmail("username@mail.com"); // true
isEmail("username@m.c"); // false
```

### URL

```js
import { isURL } from "regex-safe";

isURL("https://mehmetsagir.com"); // true
isURL("htp://mehmetsagir.c"); // false
```

### Number

```js
import { isNum } from "regex-safe";

isNum("1"); // true
isNum("1a+"); // false
```

### Name

Requires first and last name.

```js
import { isName } from "regex-safe";

isName("Mehmet Sa????r"); // true
isName("Mehmet"); // false
```

### Password

By default all rules are enabled. <br/>
<b>English</b> and <b>Turkish</b> error message options. Default language is <b>English</b>.<br/>

- Rules:
  - atLeastOneNumber
  - atLeastOneUpperCase
  - atLeastOneLowerCase
  - atLeastOneSpecialChar
  - whitespace
  - repeatedly
  - minLength

```js
import { isPassword } from "regex-safe";

isPassword("Test-123"); // true
isPassword("Test -123", { whitespace: false }, "tr"); // true
isPassword("Test -123"); // { valid: false, message: 'Must not contain whitespace.' }
isPassword("Test -123", {}, "tr"); // { valid: false, message: 'Bo??luk i??ermemeli.' }
```

### Image URL

URL and image types control.

```js
import { isImageURL } from "regex-safe";

isImageURL("https://mehmetsagir.com/wallpaper/3.webp"); // true
isImageURL("https://mehmets>agir.com/wallpaper/3."); // false
```

### External Regex

Allows us to check the value with External Regex.

```js
import { isRegex } from "regex-safe";

isRegex("0123", /^[1-9]\d*$/g); // true
isRegex("Mehmet", /^[1-9]\d*$/g); // false
isRegex("Mehmet"); // false
```

### Slug

```js
import { isSlug } from "regex-safe";

isSlug("hello-world"); // true
isSlug("hello--world"); // false
```

### Boolean

```js
import { isBoolean } from "regex-safe";

isBoolean(false); // true
isBoolean("true"); // true
isBoolean("value"); // false
```

### Even Number

```js
import { isEven } from "regex-safe";

isEven(2); // true
isEven("2"); // true
isEven(1); // false
```

### Odd Number

```js
import { isOdd } from "regex-safe";

isOdd(3); // true
isOdd("3"); // true
isOdd(2); // false
```

### Integer

```js
import { isInteger } from "regex-safe";

isInteger(2); // true
isInteger(2.2); // false
```

### Hex Color

```js
import { isHexColor } from "regex-safe";

isHexColor("#000"); // true
isHexColor("00"); // false
```

### IPv4 Address

```js
import { isIPv4 } from "regex-safe";

isIPv4("01.102.103.104"); // true
isIPv4("01.102.103"); // false
```

### IPv6 Address

```js
import { isIPv6 } from "regex-safe";

isIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // true
isIPv6("2001:0db8:85a3:0000:0000:8a2e:0370"); // false
```

### HTML Tags

```js
import { isHTMLTags } from "regex-safe";

isHTMLTags("<h1>Mehmet</h1>"); // true
isHTMLTags("Mehmet"); // false
```

## Versioning

We use [GitHub](https://github.com/mehmetsagir/regex-safe) for versioning.

## Authors

- **[Mehmet Sa????r](https://github.com/mehmetsagir)**

## License

Licensed under the MIT license, see [LICENSE](https://github.com/mehmetsagir/regex-safe/blob/master/LICENSE) for details.

```

```
