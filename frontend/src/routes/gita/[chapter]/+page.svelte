<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// chapter number from the URL
	let chapter;
	$: chapter = $page.params.chapter;

	// state
	let verses = [];          // full array from API
	let selectedIndex = 0;    // index in verses[]
	let currentVerse = null;
	let fontSize = 22;
	let loading = true;
	let errorMessage = '';

	onMount(async () => {
		loading = true;
		errorMessage = '';
		currentVerse = null;
		verses = [];

		try {
			const res = await fetch(`/api/gita/${chapter}`);
			if (!res.ok) {
				throw new Error(`HTTP ${res.status}`);
			}

			const json = await res.json();

			// API: { status, message, data: [ { shlok_no, lyrics, ... }, ... ] }
			const list = Array.isArray(json.data) ? json.data : [];

			if (list.length === 0) {
				errorMessage = 'No verses found for this chapter.';
				return;
			}

			verses = list;
			selectedIndex = 0;
			currentVerse = verses[selectedIndex];
		} catch (err) {
			console.error('Failed to load chapter', err);
			errorMessage = 'Unable to load chapter. API issue.';
		} finally {
			loading = false;
		}
	});

	function goBack() {
		history.back();
	}

	function onVerseChange(event) {
		selectedIndex = Number(event.target.value);
		currentVerse = verses[selectedIndex];
	}
</script>

<div class="p-6 max-w-4xl mx-auto">
	<button on:click={goBack} class="text-blue-600 mb-4">&lt; Back</button>

	{#if loading}
		<p>Loading chapter...</p>
	{:else if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{:else if currentVerse}
		<h1 class="text-3xl font-bold mb-6">Chapter {chapter}</h1>

		<div class="mb-6 flex gap-6 items-center flex-wrap">
			<div>
				<label>Verse:</label>
				<select bind:value={selectedIndex} on:change={onVerseChange} class="border p-2">
					{#each verses as verse, i}
						<option value={i}>
							Verse {verse.shlok_no ?? i + 1}
						</option>
					{/each}
				</select>
			</div>

			<div>
				<label>Font Size:</label>
				<input type="range" min="12" max="65" bind:value={fontSize} />
			</div>
		</div>

		<div class="leading-relaxed" style="font-size: {fontSize}px;">
			{@html currentVerse.lyrics}
			<!-- If API has extra fields like translation, you can show them here:
			{#if currentVerse.translation}
				<br><br>
				{@html currentVerse.translation}
			{/if}
			-->
		</div>

		{#if currentVerse.audio}
			<div class="mt-6">
				<audio controls src={currentVerse.audio}></audio>
			</div>
		{/if}
	{:else}
		<p>No verse data available.</p>
	{/if}
</div>

<style>
	select,
	input[type='range'] {
		padding: 6px 10px;
	}
</style>
