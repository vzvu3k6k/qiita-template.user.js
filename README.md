# Qiita Template

A userscript to insert a template when starting to write new post.

## Usage

Replace `$template` in `./qiita-template-user.js` with your template, and install it.

### Tips

If your browser hasn't supported ES6's backtick string literal yet, `./generate.js` will be helpful to convert your template into an old string literal.

```
$ node generate.js qiita-template.user.js template.md > my.user.js
```
