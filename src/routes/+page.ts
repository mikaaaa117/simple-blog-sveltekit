import type { PageLoad } from './$types';
import axios from 'axios';
import type { Hero } from '../lib/models/Hero';

export const load = (async () => {
	const response = await axios.get('http://localhost:5041/Heroes');
	const heroes: Hero[] = response.data;

	return {
		heroes
	};
}) satisfies PageLoad;
