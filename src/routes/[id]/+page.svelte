<script lang="ts">
	import Button from '../../lib/shared/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { hero } = data;
</script>

<a href="/">
	<Button>Go back</Button>
</a>

<div class="hero">
	<div class="content">
		<h1>{hero.name}</h1>
		<p>{hero.description}</p>
		<p>{hero.stand}</p>
	</div>
	<img src={hero.image} alt={hero.name} />
</div>

<style>
	.hero {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}
	.content {
		color: #fff;
	}
	.content > h1,
	p {
		margin: 0.8rem 0;
	}
</style>
