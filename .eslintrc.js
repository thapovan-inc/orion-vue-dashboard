module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    plugins: [
        'html', // Lint .vue files
        'jsdoc' // Check JSDoc
    ],
    globals: {
        firebase: true
    },
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    rules: {
        // Our overrides
        'indent': ['error', 4, { SwitchCase: 1 }], // 4-space indents
        'max-len': ['error', {
            code: 120,                             // We all have big screens - use them!
            ignoreUrls: true,                      // A bunch of these things are a pain to maintain when wrapped...
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],
        'arrow-parens': ['error', 'as-needed'],    // No reason to write ((a) => {..}) when (a => {..}) will do
        'no-trailing-spaces': 0,                   // Many IDEs insert these, they're invisible, and cause no harm
        'no-console': 1,                           // We use console for debugging, should revisit this
        'no-alert': 0,                             // These are actually pretty useful in modern browsers
        'comma-dangle': 0,                         // This seems good but ends up being painful in large nested objects
        'func-names': ['error', 'as-needed'],      // Only require function names when required.
        'no-plusplus': 0,                          // i += 1 is REALLY annoying for devs used to ++. We'll be careful.

        // JSDoc
        "jsdoc/check-param-names": 2,
        "jsdoc/check-tag-names": 1,
        "jsdoc/check-types": 2,
        "jsdoc/newline-after-description": 1,
        "jsdoc/require-description-complete-sentence": 0,
        "jsdoc/require-hyphen-before-param-description": 2,
        "jsdoc/require-param": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-param-type": 2,
        "jsdoc/require-returns-description": 0,
        "jsdoc/require-returns-type": 1,

        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],

        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'linebreak-style': 0
    }
};
