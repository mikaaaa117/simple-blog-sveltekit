import axios from 'axios';
import type { PageLoad } from '../$types';
import type { Hero } from '../../lib/models/Hero';

export const load = (async ({ params }) => {
	const response = await axios.get(`http://localhost:5041/Heroes/${params.id}`);
	const hero: Hero = response.data;
	return {
		hero
	};
}) satisfies PageLoad;
