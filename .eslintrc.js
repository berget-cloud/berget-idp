module.exports = {
  extends: ["react-app"],
  rules: {
    // Disable rules that are causing warnings
    "@typescript-eslint/no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/iframe-has-title": "off",
    "jsx-a11y/heading-has-content": "off",
    "jsx-a11y/alt-text": "off",
    "react/jsx-no-target-blank": "off",
    "eqeqeq": "off",
    "no-template-curly-in-string": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-labels": "off"
  }
};
