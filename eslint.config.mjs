import tsParser from '@typescript-eslint/parser'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'
import { fileURLToPath } from 'url'

import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		ignores: ['.next/**', 'node_modules/**']
	},
	// TypeScript 配置
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			import: importPlugin
		},
		rules: {
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			// 强制类型使用单独导入
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports'
				}
			],

			// 导入排序规则
			'import/order': 'off',
			// 'import/order': [
			// 	'error',
			// 	{
			// 		groups: [
			// 			'builtin', // Node.js 内置模块
			// 			'external', // 外部依赖
			// 			'internal', // 内部别名路径
			// 			['parent', 'sibling'], // 相对路径
			// 			'index', // 目录索引文件
			// 			'object', // 类型导入 (需要配合类型分组)
			// 			'type' // 类型导入分组
			// 		],
			// 		pathGroups: [
			// 			{
			// 				pattern: '{react,react-dom,next/**}',
			// 				group: 'external',
			// 				position: 'before'
			// 			},
			// 			{
			// 				pattern: '@/**', // 配置你的别名路径
			// 				group: 'internal'
			// 			}
			// 		],
			// 		pathGroupsExcludedImportTypes: ['builtin'],
			// 		alphabetize: {
			// 			order: 'asc',
			// 			caseInsensitive: true
			// 		},
			// 		'newlines-between': 'always',
			// 		warnOnUnassignedImports: true
			// 	}
			// ],

			// 禁止类型与值混合导入
			'import/no-duplicates': ['error', { considerQueryString: true }]
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx']
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json'
				}
			}
		}
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts'
	])
])

export default eslintConfig
