function getKey(o, path, encoded) {
	const parts = path.split(/[.\[\]]/).filter(e => e);
	let r = o;
	let p;

	while (parts.length) {
		p = parts.shift();
		if (!r) return;

		r = r[p];
	}
	return encoded ? encodeURIComponent(r) : r;
}

function replace(template, data) {
	return template.replace(/\{\{\%?([\s\S]+?)\}\}/g, (m, key) => getKey(data, key, m.startsWith('{{%')));
}

const data = {
	redux: {
		var1: 'Hello World!=',
		var2: [['foo', 'ding2']],
		queries: {
			currentQuery: 'bla'
		}
	}
};