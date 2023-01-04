Hooks.once('init', () => {
	if (typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'wfrp4e-it-translation',
			lang: 'it',
			dir: 'compendium',
		});
	}
});
