<script>
	import { redirect } from '@sveltejs/kit';

	// Run during server load → redirect to /gita
	export function load() {
		throw redirect(302, '/gita');
	}
</script>
