import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import {terser} from "rollup-plugin-terser"
import html from "@rollup/plugin-html"

import copy from "./plugins/copy.js"

import appInfo from "./app-info.js"
import template from "./html-template.js"

export default [
    {
        input: "./src/main.js",
        output: {
            file: `./build/app-${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            terser(),
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
            file: `./build/question/app-${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            terser(),
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
            file: `./build/chat/app-${Date.now()}.js`,
            format: "iife",
        },
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            terser(),
            html({
                filename: "./build/chat/index.html",
                title: appInfo.name,
                template,
            }),
        ]
    },
]
