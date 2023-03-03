<script lang="ts">
	import Button from '../lib/shared/Button.svelte';
	import type { PageData } from './$types';
	import { searchInHeroes } from './searchInHeroes';

	export let data: PageData;
	let value = '';
	$: console.log(value);
	$: heroes = searchInHeroes(data.heroes, value);
</script>

<header>
	<label>
		Search...
		<input type="text" bind:value />
	</label>
</header>
<ul>
	{#each heroes as hero (hero.id)}
		<li>
			<img src={hero.image} alt={hero.name} />
			<h3>{hero.name}</h3>
			<div>
				<p>{hero.stand || "Doesn't have stand"}</p>
				<a href={`/${hero.id}`}>
					<Button>More</Button>
				</a>
			</div>
		</li>
	{/each}
</ul>

<style>
	* {
		box-sizing: border-box;
	}

	header {
		display: flex;
		justify-content: center;
	}

	ul {
		margin-top: 2rem;
		display: grid;
		padding: 0;
		grid-template-columns: repeat(auto-fit, max(380px));
		justify-content: space-between;
		gap: 3rem;
	}

	ul > li {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
	}

	li > img {
		height: 350px;
		width: fit-content;
	}

	li > h3 {
		font-size: 2rem;
		margin: 0;
		text-align: center;
		font-family: 'Inter', --appl-system, 'Roboto', sans-serif;
	}

	li > div {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}

	li > div > p {
		font-size: 1.4rem;
		margin: 0;
	}
</style>
