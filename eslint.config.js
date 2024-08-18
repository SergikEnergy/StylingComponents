export default [
    {
        root: true,
        env: { browser: true, es2020: true },
        extends: ['arui-presets-lint/eslint'],
        ignorePatterns: ['dist', 'coverage', '*.cjs'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: ['./tsconfig.eslint.json'],
        },
        plugins: ['react-refresh'],
        overrides: [],
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            'no-underscore-dangle': [
                'error',
                {
                    allow: ['_id'],
                },
            ],

            'import/no-absolute-path': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
