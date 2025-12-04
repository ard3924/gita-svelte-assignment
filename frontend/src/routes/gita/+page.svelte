<script>
	import banner from '$lib/assets/gita_banner.png';
	import chapterImg from '$lib/assets/chapter.jpg';

	const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<section class="relative h-64 sm:h-80 md:h-96 lg:h-[430px] w-full">
	<img src={banner} alt="Gita Banner" class="absolute inset-0 w-full h-full object-cover" />

	<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/10">
		<h1 class="text-4xl sm:text-6xl lg:text-7xl text-white font-serif uppercase drop-shadow-2xl">
			Bhagavad Gita
		</h1>
	</div>
</section>

<div class="bg-[linear-gradient(#faf5e6,#f2e7c9)] pt-20 pb-24">
	<div class="text-center mb-14">
		<h2 class="text-3xl sm:text-4xl font-serif font-bold tracking-wider text-[#a41d28] uppercase">
			Gita Chapters
		</h2>
		<div class="w-32 mx-auto mt-3 border-b-[4px] border-[#a41d28]"></div>
	</div>

	<section class="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-40 px-4">
		{#each chapters as chapter}
			<a href={`/gita/${chapter}`} class="group block relative transform hover:scale-105 transition duration-300">
				<div class="w-32 h-32 sm:w-36 sm:h-36 rotate-45 overflow-hidden border shadow-xl mx-auto">
					<img src={chapterImg} class="-rotate-45 w-full h-full object-cover" />
				</div>

				<span class="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold">
					{chapter}
				</span>
			</a>
		{/each}
	</section>
</div>
