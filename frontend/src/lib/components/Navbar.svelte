<script>
	import { page } from '$app/stores';

	const navItems = [
		{ name: "ĀYURVEDA", href: "/ayurveda" },
		{ name: "YOGASŪTRAS", href: "/yogas" },
		{ name: "BHAGAVAD GĪTĀ", href: "/gita" },
		{ name: "UPANIṢADS", href: "/upanisads" },
		{ name: "SANSKRIT", href: "/sanskrit" },
		{ name: "CONTACT US", href: "/contact" }
	];
</script>

<nav class="w-full bg-[#f8efdb] shadow-sm">
	<div class="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6">
		<!-- Logo -->
		<a href="/">
			<img src="src/lib/assets/logo.png" alt="Logo" class="h-14 w-auto" />
		</a>

		<div class="flex items-center gap-14">
			<!-- Nav Items -->
			<ul class="flex items-center gap-10 text-[14px] font-[500] tracking-wide">
				{#each navItems as link}
					<li class="relative group pb-[6px]">
						<a
							href={link.href}
							class="hover:text-[#b37e3c] transition-colors"
							class:text-[#b37e3c]={$page.url.pathname.startsWith(link.href)}
						>
							{link.name}
						</a>

						<!-- Working Underline -->
						<span
							class="absolute left-0 -bottom-[3px] h-[2px] bg-[#b37e3c] w-0 transition-all duration-500 group-hover:w-full"
							class:w-full={$page.url.pathname.startsWith(link.href)}
						></span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		font-family: 'Cinzel', serif;
	}
</style>
