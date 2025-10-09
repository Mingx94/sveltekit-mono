import antfu from '@antfu/eslint-config'

export default antfu({
	svelte: true,
	formatters: false,
	stylistic: false,
}).removeRules('style/no-tabs')
