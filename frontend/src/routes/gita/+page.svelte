<script>
	import banner from '$lib/assets/gita_banner.png';
	import bookImg from '$lib/assets/gita.png';
	import chapterImg from '$lib/assets/chapter.jpg';
	import { goto } from '$app/navigation';

	const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

	function openChapter(chapter) {
		goto(`/gita/${chapter}`);
	}
</script>

<!-- HERO BANNER -->
<section class="relative w-full h-[420px] sm:h-[460px] lg:h-[500px] overflow-hidden">
	<img
		src={banner}
		alt="Bhagavad Gita banner"
		class="absolute inset-0 w-full h-full object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

	<div class="relative z-10 flex flex-col items-center justify-end h-full pb-10">
		<h1
			class="text-[40px] sm:text-[60px] lg:text-[80px] tracking-[0.35em] text-white font-serif uppercase text-center drop-shadow-2xl"
			style="text-shadow: 0 6px 10px rgba(0,0,0,0.7); letter-spacing: 0.35em;"
		>
			BHAGAVAD GITA
		</h1>

		<img
			src={bookImg}
			alt="Gita book"
			class="mt-4 w-[140px] sm:w-[170px] lg:w-[200px] drop-shadow-2xl"
		/>
	</div>
</section>

<!-- BACKGROUND + CHAPTER GRID -->
<div class="bg-[linear-gradient(#fbf4dd,#f4e2b9)] min-h-screen pt-16 pb-20">
	<div class="max-w-[1400px] mx-auto px-6">
		<!-- TITLE -->
		<div class="text-center mb-16">
			<h2
				class="text-[24px] sm:text-[28px] tracking-[0.25em] text-[#be1639] uppercase font-semibold"
				style="letter-spacing: 0.25em;"
			>
				GITA CHAPTERS
			</h2>
			<div class="mt-3 w-40 mx-auto border-b-[3px] border-[#be1639]"></div>
		</div>

		<!-- CHAPTER DIAMONDS -->
		<section
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-24 gap-x-12 justify-items-center"
		>
			{#each chapters as chapter}
				<button type="button" class="group relative block" on:click={() => openChapter(chapter)}>
					<div
						class="w-32 h-32 sm:w-40 sm:h-40 rotate-45 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.2)] bg-white border border-gray-200 rounded-2xl transition-transform duration-300 group-hover:scale-110"
					>
						<img
							src={chapterImg}
							alt="Gita chapter"
							class="-rotate-45 w-full h-full object-cover"
						/>
					</div>

					<div
						class="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-semibold"
					>
						<span class="px-6 py-1 bg-black/50 rounded transition-colors group-hover:bg-black/70">
							{chapter}
						</span>
					</div>
				</button>
			{/each}
		</section>
	</div>
</div>
