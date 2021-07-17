# Markdown app

### Husky

Install and configure husky to check commmits and pushes

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
