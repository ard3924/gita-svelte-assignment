<script>
	import logo from '$lib/assets/logo.png';
</script>

<footer class="bg-[#394c3b] text-[#f3e2c4] pt-12 pb-10">
	<div class="max-w-4xl mx-auto text-center">
		<img src={logo} alt="Logo" class="h-16 mx-auto my-4" />

		<p class="text-[24px] tracking-[0.2em]">WELLBEING~SVASTI</p>

		<p class="mt-2 text-[13px]">
			© 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by
		</p>

		<a href="#" class="text-[13px] underline text-[#f5d68b] hover:text-white">
			Burning Desire Inclusive
		</a>
	</div>

	<!-- Back-to-top -->
	<button
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed bottom-6 right-6 h-10 w-10 bg-black/70 rounded flex justify-center items-center text-white text-xl"
		aria-label="Back to top"
	>
		˄
	</button>
</footer>
