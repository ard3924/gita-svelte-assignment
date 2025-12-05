<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import scrollImg from '$lib/assets/sletter.png';

	const chapter = $page.params.chapter;

	let verses = [];
	let selectedIndex = 0;
	let loading = true;
	let showModal = false;
	let activeVerse = null;
	let parsed = {};

	onMount(async () => {
		try {
			const res = await fetch(`/api/gita/${chapter}`);
			const json = await res.json();
			verses = json?.data || [];

			if (verses.length) {
				selectedIndex = 0;
				activeVerse = verses[selectedIndex];
				parseLyrics(activeVerse.lyrics);
			}
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	});

	function goBack() {
		history.back();
	}

	function openVerse(index) {
		selectedIndex = index;
		activeVerse = verses[index];
		parseLyrics(activeVerse.lyrics);
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	// 🔥 Parse the API lyrics to split into Sanskrit / Transliteration / Meaning
	function parseLyrics(raw) {
		if (!raw) return (parsed = {});
		const parts = raw.split('<br>');

		parsed = {
			sanskrit: parts[0]?.trim() ?? '',
			translit: parts[1]?.trim() ?? '',
			meaning: parts.slice(2).join('<br>').trim() ?? ''
		};
	}
</script>

<div class="bg-[linear-gradient(#fbf4dd,#f4e2b9)] min-h-screen pt-10 pb-20">
	<div class="max-w-6xl mx-auto px-4">
		<button on:click={goBack} class="text-[#be1639] text-sm mb-6 hover:underline">
			&lt; Back
		</button>

		{#if loading}
			<p>Loading chapter...</p>
		{:else}
			<div class="text-center mb-10">
				<h1
					class="text-[22px] sm:text-[26px] tracking-[0.3em] text-[#be1639] uppercase font-semibold"
					style="letter-spacing: 0.3em;"
				>
					Chapter {chapter}
				</h1>
				<div class="mt-5 border-t-[3px] border-[#be1639]"></div>
				<div class="mt-4 border-t-[3px] border-[#be1639]"></div>
			</div>

			<div class="mb-10">
				<span class="uppercase tracking-[0.3em] text-sm text-[#be1639] font-semibold"> Verse </span>
			</div>

			<div
				class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 justify-items-center"
			>
				{#each verses as verse, i}
					<button
						type="button"
						class="relative group w-[130px] sm:w-[140px]"
						on:click={() => openVerse(i)}
					>
						<img
							src={scrollImg}
							alt="Scroll"
							class="w-full drop-shadow-xl group-hover:scale-110 transition"
						/>

						<div
							class="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold"
						>
							{#if i === 0}
								<span class="text-center leading-tight">Whole<br />Chapter</span>
							{:else if i === verses.length - 1}
								<span class="text-center leading-tight">End of<br />Chapter</span>
							{:else}
								<span class="text-[18px]">{verse.shlok_no}</span>
							{/if}
						</div>

						<div
							class="absolute bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/40 group-hover:bg-white group-hover:text-black transition"
						>
							&#9658;
						</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<!-- MODAL -->
	{#if showModal && activeVerse}
		<div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
			<div
				class="bg-[#ffd8b2] max-w-4xl w-[92%] max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden relative"
			>
				<button class="absolute top-2 right-4 text-4xl text-white" on:click={closeModal}>
					×
				</button>

				<div class="overflow-auto px-10 py-8 leading-relaxed text-[18px] space-y-6">
					<!-- 🟠 Sanskrit -->
					<p class="text-[#b35e00] font-semibold text-[22px]">
						{@html parsed.sanskrit}
					</p>

					<!-- 🔵 Transliteration -->
					<p class="text-[#003366] italic">
						{@html parsed.translit}
					</p>

					<!-- ⚫ Meaning -->
					<div class="text-[#2c2c2c]">
						{@html parsed.meaning}
					</div>
				</div>

				{#if activeVerse.audio}
					<div class="border-t border-black/20 px-8 py-4 bg-white/40">
						<audio controls src={activeVerse.audio} class="w-full"></audio>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
