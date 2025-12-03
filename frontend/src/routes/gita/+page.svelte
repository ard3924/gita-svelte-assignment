<script>
	import banner from '$lib/assets/gita_banner.png';
	import chapterImg from '$lib/assets/chapter.jpg';

	const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<!-- HERO BANNER -->
<section class="relative h-64 sm:h-80 md:h-96 lg:h-[430px] w-full fade-in-up">
	<!-- Banner image -->
	<img src={banner} alt="Gita Banner" class="absolute inset-0 w-full h-full object-cover" />

	<!-- Overlay -->
	<div
		class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-black/20 to-black/10 px-4"
	>
		<h1
			class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] font-serif tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] text-white uppercase text-center leading-tight drop-shadow-2xl"
			style="text-shadow: 0 4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3);"
		>
			Bhagavad Gita
		</h1>
	</div>
</section>

<!-- PAGE BACKGROUND WRAPPER -->
<div class="bg-[linear-gradient(#faf5e6,#f2e7c9)] pt-20 pb-24">
	<!-- GITA CHAPTERS TITLE -->
	<div class="text-center mb-14 fade-in-up">
		<h2
			class="text-3xl sm:text-4xl font-serif font-bold tracking-wider text-[#a41d28] uppercase drop-shadow-lg"
			style="text-shadow: 0 2px 4px rgba(164, 29, 40, 0.3), 0 0 15px rgba(255, 255, 255, 0.2);"
		>
			Gita Chapters
		</h2>
		<div class="w-32 mx-auto mt-3 border-b-[4px] border-[#a41d28] shadow-sm"></div>
	</div>

	<!-- CHAPTER GRID -->
	<section
		class="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-40 px-4"
	>
		{#each chapters as chapter}
			<a href="#" class="group relative block transform hover:scale-105 transition duration-300">
				<!-- Diamond container -->
				<div
					class="w-32 h-32 sm:w-36 sm:h-36 rotate-45 overflow-hidden shadow-xl border border-gray-300 bg-gray-100 mx-auto"
				>
					<img src={chapterImg} alt="Chapter Image" class="-rotate-45 w-full h-full object-cover" />
				</div>

				<!-- Chapter number overlay -->
				<span
					class="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-bold drop-shadow-md group-hover:text-yellow-300"
				>
					{chapter}
				</span>
			</a>
		{/each}
	</section>
</div>
