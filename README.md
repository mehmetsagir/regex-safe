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

isName("Mehmet Sağır"); // true
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
isPassword("Test -123", {}, "tr"); // { valid: false, message: 'Boşluk içermemeli.' }
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

- **[Mehmet Sağır](https://github.com/mehmetsagir)**

## License

Licensed under the MIT license, see [LICENSE](https://github.com/mehmetsagir/regex-safe/blob/master/LICENSE) for details.
