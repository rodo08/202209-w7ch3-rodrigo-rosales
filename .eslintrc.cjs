module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-unused-vars": ["error"],
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/indent": "off",
        "no-implicita-coercion": "off",
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
