import type { Hero } from '../lib/models/Hero';

export const searchInHeroes = (array: Hero[], initValue: string) => {
	let filteredArray: Hero[] = [];
	const value = initValue.trim().toLowerCase();
	if (value === '') {
		console.log('Empty string');
		return array;
	}
	array.forEach((hero) => {
		if (String(hero.name).toLowerCase().search(value) !== -1) {
			filteredArray.push(hero);
		} else if (String(hero.stand)?.toLowerCase().search(value) !== -1) {
			filteredArray.push(hero);
		} else {
			filteredArray = filteredArray.filter((item) => item.id !== hero.id);
		}
	});
	console.log(filteredArray);
	return filteredArray;
};
