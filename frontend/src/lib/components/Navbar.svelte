<script>
	const menu = [
		{ name: 'ĀYURVEDA', href: '#' },
		{ name: 'YOGASŪTRAS', href: '#' },
		{ name: 'BHAGAVAD GĪTĀ', href: '/gita', active: true },
		{ name: 'UPANIṢADS', href: '#' },
		{ name: 'SANSKRIT', href: '#' },
		{ name: 'Contact us', href: '#' }
	];

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	// Handle scroll effect
	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
		isScrolled
			? 'bg-white/80 backdrop-blur-md shadow-2xl border-b border-[#a41d28]/10 py-3'
			: 'bg-gradient-to-r from-white/95 via-[#fef7e6]/90 to-white/95 backdrop-blur-sm shadow-gita py-4'
	}`}
>
	<div class="max-w-7xl mx-auto flex items-center justify-between px-6">
		<!-- Logo/Brand -->
		<div class="flex items-center space-x-3">
			<div class="relative group">
				<img
					src="/logo.png"
					alt="Wellbeing Svasti Logo"
					class="w-20 h-15 object-contain transform group-hover:scale-110 transition-all duration-300"
				/>
			</div>
			<div
				class="text-xl font-bold bg-gradient-to-r from-[#a41d28] to-[#8b1a23] bg-clip-text text-transparent hover:from-[#8b1a23] hover:to-[#6b1419] transition-all duration-300 cursor-pointer"
			>
				WELLBEING~SVASTI
			</div>
		</div>

		<!-- Desktop Menu -->
		<ul class="hidden md:flex items-center gap-2">
			{#each menu as item, index}
				<li class="relative group">
					<a
						href={item.href}
						class={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 overflow-hidden ${
							item.active
								? 'text-white bg-gradient-to-r from-[#a41d28] to-[#8b1a23] shadow-lg transform scale-105'
								: 'text-gray-700 hover:text-[#a41d28] hover:bg-[#a41d28]/5'
						}`}
						style="animation-delay: {index * 0.1}s"
					>
						<span class="relative z-10">{item.name}</span>
						{#if !item.active}
							<div
								class="absolute inset-0 bg-gradient-to-r from-[#a41d28]/0 via-[#a41d28]/10 to-[#a41d28]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							></div>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-gradient-to-br from-[#a41d28]/10 to-[#8b1a23]/10 hover:from-[#a41d28]/20 hover:to-[#8b1a23]/20 transition-all duration-300 group"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<div class="relative w-6 h-5 flex flex-col justify-between">
				<span
					class={`block w-full h-0.5 bg-gradient-to-r from-[#a41d28] to-[#8b1a23] rounded-full transition-all duration-300 ${
						isMenuOpen ? 'rotate-45 translate-y-2' : ''
					}`}
				></span>
				<span
					class={`block w-full h-0.5 bg-gradient-to-r from-[#a41d28] to-[#8b1a23] rounded-full transition-all duration-300 ${
						isMenuOpen ? 'opacity-0' : ''
					}`}
				></span>
				<span
					class={`block w-full h-0.5 bg-gradient-to-r from-[#a41d28] to-[#8b1a23] rounded-full transition-all duration-300 ${
						isMenuOpen ? '-rotate-45 -translate-y-2' : ''
					}`}
				></span>
			</div>
			<div
				class="absolute inset-0 rounded-lg bg-gradient-to-r from-[#a41d28]/0 via-[#a41d28]/5 to-[#a41d28]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
			></div>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#a41d28]/10 shadow-2xl animate-fadeInUp"
		>
			<ul class="flex flex-col py-6 px-4 space-y-2">
				{#each menu as item, index}
					<li class="transform animate-fadeInUp" style="animation-delay: {index * 0.1}s">
						<a
							href={item.href}
							class={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
								item.active
									? 'text-white bg-gradient-to-r from-[#a41d28] to-[#8b1a23] shadow-lg'
									: 'text-gray-700 hover:text-[#a41d28] hover:bg-[#a41d28]/5 hover:translate-x-2'
							}`}
							onclick={closeMenu}
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<!-- Spacer to prevent content from hiding behind fixed navbar -->
<div class="h-20"></div>

<style>
	nav {
		font-family: 'Georgia', serif;
		letter-spacing: 0.5px;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fadeInUp {
		animation: fadeInUp 0.3s ease-out forwards;
	}
</style>
