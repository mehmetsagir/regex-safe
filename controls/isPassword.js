const defaultOptions = {
  atLeastOneNumber: true,
  atLeastOneUpperCase: true,
  atLeastOneLowerCase: true,
  atLeastSpeacialChar: true,
  whitespace: true,
  repeatedly: true,
  minLength: true,
};

const localization = {
  en: {
    atLeastOneNumber: "Must contain at least one digit.",
    atLeastOneUpperCase: "Must contain at least one uppercase letter.",
    atLeastOneLowerCase: "Must contain at least one lowercase letter.",
    atLeastOneSpecialChar: "Must contain at least one special character.",
    whitespace: "Must not contain whitespace.",
    repeatedly: "Must not contain repeating characters.",
    minLength: "Must be at least 8 characters.",
  },
  tr: {
    atLeastOneNumber: "En az bir rakam içermeli.",
    atLeastOneUpperCase: "En az bir büyük harf içermeli.",
    atLeastOneLowerCase: "En az bir küçük harf içermeli.",
    atLeastOneSpecialChar: "En az bir özel karakter içermeli.",
    whitespace: "Boşluk içermemeli.",
    repeatedly: "Tekrar eden karakterler içermemeli.",
    minLength: "En az 8 karakter içermeli.",
  },
};

const isPassword = (pass, options = defaultOptions, locale = "en") => {
  if (locale !== "tr" && locale !== "en") return "Invalid locale";

  const regexs = {
    atLeastOneNumber: /(?=.*[0-9])/g,
    atLeastOneUpperCase: /^(?=.*[A-ZÇÖÜĞİŞ])./g,
    atLeastOneLowerCase: /^(?=.*[a-zçöüğış])./g,
    atLeastOneSpecialChar: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ])./g,
    whitespace: /^(?!.* )/g,
    repeatedly: /^(?:([\s\w!#%&*+-ÇÖÜçöüĞğİıŞş])(?!\1\1))+$/g,
    minLength: /^.{8,}$/g,
  };

  const values = Object.entries({ ...defaultOptions, ...options })
    .flatMap(([key, value]) => {
      if (value) {
        if (!regexs[key].test(pass)) {
          return {
            valid: false,
            message: localization[locale][key],
          };
        }
        return true;
      }
    })
    .filter((item) => item !== true && item !== undefined);

  return values?.length > 0 ? values[0] : true;
};

module.exports = isPassword;
