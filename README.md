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

## Usage

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
  - atLeastSpeacialChar
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

### Boolean

```js
import { isBoolean } from "regex-safe";

isBoolean(false); // true
isBoolean("true"); // true
isBoolean("value"); // false
```

## Versioning

We use [GitHub](https://github.com/mehmetsagir/regex-safe) for versioning.

## Authors

- **[Mehmet Sağır](https://github.com/mehmetsagir)**

## License

Licensed under the MIT license, see [LICENSE](https://github.com/mehmetsagir/regex-safe/blob/master/LICENSE) for details.
