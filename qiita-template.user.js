// ==UserScript==
// @name           Qiita Template
// @description    Inserts a template when starting to write new post
// @version        1.0
// @match          http://qiita.com/drafts/new
// @namespace      https://github.com/vzvu3k6k/qiita-template.user.js
// @license        CC0
// ==/UserScript==

var textarea = document.querySelector("#draft_item_raw_body");
textarea.textContent += '$template';
