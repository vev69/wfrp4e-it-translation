
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'FoundryVTT-wfrp4e-it',
			lang: 'it',
			dir: 'compendium'
		});

	}
});