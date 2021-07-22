# Markdown app

### Prettier

Install and configure prettier.

1. Install pretiter: `npm install prettier`
2. Create a `.prettierrc` file in your project root.

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "quoteProps": "consistent",
  "arrowParens": "always"
}
```

### Stylelint

Install and configure style linter.

1. Install stylelint: `npm i -D stylelint stylelint-config-sass-guidelines`
2. Add stylelint config file to `.stylelintrc.json`

```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "number-leading-zero": null,
    "color-hex-length": null,
    "max-nesting-depth": 4,
    "selector-pseudo-element-no-unknown": null,
    "selector-no-qualifying-type": null,
    "selector-max-compound-selectors": 5
  }
}
```

### Husky

Install and configure husky to check commmits and pushes.

1. `npx husky-init`
2. `npm i -D lint-staged prettier`
3. Create .lintstagedrc with content:

```json
{
  "*.(js|ts|html)": ["eslint --cache --fix", "prettier --write"],
  "*.scss": "stylelint \"**/*.scss\" --config \"./.stylelintrc\" --syntax \"scss\" --formatter \"verbose\" --max-warnings 0"
}
```

4. In the husky folder find the pre-commit file and add the lint-staged command, the file should look like this

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged --verbose
```

5. Create a pre-push file and add this configuration

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

ng test --coverage --watch=false
```

6. Speeding angular builds.

```json
{
  "scripts": {
    "start": "NG_PERSISTENT_BUILD_CACHE=1 ng serve",
    "build": "NG_PERSISTENT_BUILD_CACHE=1 ng build"
  }
}
```
