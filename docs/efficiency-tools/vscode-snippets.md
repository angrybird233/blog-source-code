---
title: 代码片段
date: 2023-03-05 22:04:43
hideComments: true
---

# 代码片段
+ vscode如何创建代码片段
> 点击 设置 -> 用户代码片段 -> 新建全局代码片段文件/新建xx文件夹的代码片段 -> 输入代码段文件名并回车 -> 输入 prefix 和 body


## 1. 快速创建vue页面
+ 快捷输入：v-tem
```js
{
	"Print to console": {
		"scope": "vue,jsx",
		"prefix": "v-tem",
		"body": [
			"<template>",
			"\t<div>",
				"$1",
			"\t</div>",
			"</template>",

		"<script>",
		"\t export default {",
			"\t\t data() {",
				"\t\t\t return {",
				"\t",
				"\t\t\t }",
			"\t\t },",
    "\t\t mounted() {",

    "\t\t },",
		"\t\t methods: {",
		"\t",

			"\t\t },",
		"\t}",
		"</script>",
		"<style lang=\"less\" scoped>",
			"\t",
		"</style>",
		],
		"description": "Log output to console"
	}
}
```
## 2. 快速创建vue组件
+ 快捷输入：v-comp
```js
{
	"Print to console": {
		"scope": "vue,jsx",
		"prefix": "v-comp",
		"body": [
			"<template>",
			"\t<div>",
				"$1",
			"\t</div>",
			"</template>",

		"<script>",
		"\t export default {",
      "\t\t name:"",",
      "\t\t props:{},",
			"\t\t data() {",
				"\t\t\t return {",
				"\t",
				"\t\t\t }",
			"\t\t },",
    "\t\t mounted() {",

    "\t\t },",
		"\t\t methods: {",
		"\t",

			"\t\t },",
		"\t}",
		"</script>",
		"<style lang=\"less\" scoped>",
			"\t",
		"</style>",
		],
		"description": "Log output to console"
	}
}
```

## 3. 快速打印变量
+ 快捷输入：log
```js
{
	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "log",
		"body": [
			"console.log($1);",
		],
		"description": "console.log()"
	}
}
```