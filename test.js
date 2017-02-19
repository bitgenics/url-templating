const replace = require('./index');

const data = {
	redux: {
		var1: 'Hello World!=',
		var2: [['foo', 'ding2']],
		queries: {
			currentQuery: 'bla'
		}
	}
};

const template = '/search?q={{redux.queries.currentQuery}}&var1={{%redux.var1}}&var2={{redux.var2[0][1]}}';
const replaced = replace(template, data)
console.log(replaced);