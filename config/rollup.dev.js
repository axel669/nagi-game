import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import del from "rollup-plugin-delete"
import html from "@rollup/plugin-html"

import copy from "./plugins/copy.js"

import appInfo from "./app-info.js"
import template from "./html-template.js"

export default [
    {
        input: "./src/main.js",
        output: {
            file: `./build/app-d${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            del({ targets: "./build/*" }),
            svelte(),
            resolve(),
            commonjs(),
            html({
                filename: "./build/index.html",
                title: appInfo.name,
                template,
            }),
            copy("static", "build")
        ]
    },
    {
        input: "./src/question/main.js",
        output: {
            file: `./build/question/app-d${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            html({
                filename: "./build/question/index.html",
                title: appInfo.name,
                template,
            }),
        ]
    },
    {
        input: "./src/chat/main.js",
        output: {
            file: `./build/chat/app-d${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            html({
                filename: "./build/chat/index.html",
                title: appInfo.name,
                template,
            }),
        ]
    },
]
