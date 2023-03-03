<button><slot /></button>

<style>
	button {
		padding: 0.6rem 1rem;
		background-color: #5865f2;
		color: #fff;
		border: none;
		font-size: 1.2rem;
		border-radius: 1.8rem;
		transition: box-shadow 0.2s ease, transform 0.1s;
	}

	button:hover {
		cursor: pointer;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}
</style>
