# Markdown app

### Husky

Install and configure husky to check commmits and pushes

1. `npx husky-init`
2. `npm i -D lint-staged prettier`
3. Create .lintstagedrc with content:

```json
{
  "*.(js|ts|html)": ["eslint --cache --fix", "prettier --write"]
}
```
