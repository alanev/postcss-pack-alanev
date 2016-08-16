import test from 'ava'
import postcss from 'postcss'
import parser from 'postcss-scss'
import plugins from './index'

test('load config', t => {
	return postcss(plugins)
		.process('a{color: twitter-color; display: flex;} // z', {parser})
		.then(result => {
			console.log(result.css)
			if (result.warnings().length === 0)
				t.pass()
		})
})
