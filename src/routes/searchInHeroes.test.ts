import { describe, it, expect } from 'vitest';
import type { Hero } from '../lib/models/Hero';
import { searchInHeroes } from './searchInHeroes';

const mockData = [
	{
		id: 1,
		name: 'Hello world',
		stand: 'testing'
	},
	{
		id: 2,
		name: 'Dogs and cats',
		stand: 'animals'
	},
	{
		id: 3,
		name: 'Bitcoin',
		stand: 'game'
	}
];

describe('Search test', () => {
	it('search by name with different case', () => {
		let testValue = 'HeLLo World';
		expect(searchInHeroes(mockData as Hero[], testValue)).toStrictEqual(
			mockData.filter((item) => item.id === 1)
		);
	});
	it('search by stand with different case', () => {
		let testValue = 'AnimalS';
		expect(searchInHeroes(mockData as Hero[], testValue)).toStrictEqual(
			mockData.filter((item) => item.id === 2)
		);
	});
	it('search by empty string', () => {
		let testValue = '';
		expect(searchInHeroes(mockData as Hero[], testValue)).toStrictEqual(mockData);
	});
	it('search value, which doesnt exists', () => {
		let testValue = 'Hhelldoohdf';
		expect(searchInHeroes(mockData as Hero[], testValue)).toStrictEqual([]);
	});
});
