/*
// eslint.config.js
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [{
    root: true,
    extends: ["eslint:recommended"],
    globals: {
        "chai": "readonly"
    }, env: {
        "browser": true
    }, parserOptions: {
        "ecmaVersion": "latest", "sourceType": "module"
    }, plugins: {
        '@stylistic/js': stylisticJs
    }, rules: {
        '@stylistic/js/indent': [2, 2, {"SwitchCase": 1, "MemberExpression": 0}],
        "@stylistic/js/linebreak-style": [2, "unix"],
        "@stylistic/js/quotes": [2, "single", {
            "avoidEscape": true, "allowTemplateLiterals": true
        }],
        "@stylistic/js/semi": [2, "always"],
        "@stylistic/js/no-extra-parens": 1,
        "@stylistic/js/curly": 1,
        "@stylistic/js/eol-last": [2, "always"],
        "@stylistic/js/array-bracket-spacing": [2, "never"],
        "@stylistic/js/block-spacing": [2, "never"],
        "@stylistic/js/brace-style": [2, "stroustrup"],
        "@stylistic/js/comma-spacing": [2, {
            "before": false, "after": true
        }],
        "@stylistic/js/comma-style": [2, "last"],
        "@stylistic/js/computed-property-spacing": [2, "never"],
        "@stylistic/js/key-spacing": [2, {
            "beforeColon": false, "afterColon": true
        }],
        "@stylistic/js/no-trailing-spaces": [2, {
            "skipBlankLines": true
        }],
        "@stylistic/js/keyword-spacing": [2, {
            "before": false, "after": false, "overrides": {
                "let": {
                    "after": true
                }, "const": {
                    "after": true
                }, "import": {
                    "after": true
                }, "else": {
                    "after": true
                }, "do": {
                    "after": true
                }, "return": {
                    "after": true
                }, "try": {
                    "after": true
                }, "case": {
                    "after": true
                }, "export": {
                    "after": true
                }, "from": {
                    "before": true, "after": true
                }
            }
        }],
        "@stylistic/js/no-whitespace-before-property": 2,
        "@stylistic/js/object-curly-spacing": [2, "never"],
        "@stylistic/js/semi-spacing": [2, {
            "before": false, "after": true
        }],
        "@stylistic/js/space-before-blocks": 2,
        "@stylistic/js/space-before-function-paren": [2, {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "@stylistic/js/space-in-parens": [2, "never"],
        "@stylistic/js/space-infix-ops": 2,
        "@stylistic/js/space-unary-ops": 2,
        "@stylistic/js/arrow-spacing": [2, {
            "before": true, "after": true
        }],
        "@stylistic/js/no-confusing-arrow": 2,
        "@stylistic/js/generator-star-spacing": [2, "after"],
        "@stylistic/js/yield-star-spacing": [2, "after"],
        "no-console": 0,
        "no-unexpected-multiline": "off",
        "valid-jsdoc": [2, {
            "prefer": {
                "return": "return"
            }, "requireReturn": false, "requireReturnDescription": false
        }],
        "no-irregular-whitespace": 2,
        "curly": [2, "all"],
        "dot-notation": 2,
        "eqeqeq": [2, "always"],
        "no-else-return": 2,
        "no-extra-bind": 2,
        "no-implied-eval": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [2, {
            "ignore": [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 100, 250, 500, 1000], "ignoreArrayIndexes": true
        }],
        "no-native-reassign": 2,
        "no-param-reassign": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "radix": 2,
        "no-shadow-restricted-names": 2,
        "no-unused-vars": [2, {"args": "none"}],
        "no-use-before-define": 2, // nodejs
        "callback-return": 2,
        "global-require": 2,
        "handle-callback-err": [2, "^(err|error|(.+)Error)$"],
        "no-path-concat": 2,
        "no-process-exit": 2, // styling
        "consistent-this": [2, "self", "vm"],
        "no-lonely-if": 2,
        "no-negated-condition": 2,
        "no-new-object": 2,
        "no-spaced-func": 2,
        "one-var": [2, "never"], // es6
        "arrow-body-style": [2, "as-needed"],
        "constructor-super": 2,
        "no-duplicate-imports": 2,
        "no-useless-constructor": 2,
        "no-const-assign": 2,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-rename": 2,
        "no-var": 2,
        "object-shorthand": [2, "always", {"avoidQuotes": true}],
        "prefer-arrow-callback": [2, {"allowUnboundThis": false}],
        "prefer-const": [2, {
            "destructuring": "all"
        }],
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2
    }, overrides: [{
        "files": ["web-test-runner.config.js", "app.js", "config.js"], "env": {
            "node": true
        }
    }],
    ignores:[
        "node_modules/"
    ]
}]*/