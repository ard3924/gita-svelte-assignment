export async function GET({ params }) {
	const chapter = params.chapter;

	const res = await fetch(`https://sanskrit.ie/api/geeta.php?q=${chapter}`, {
		headers: {
			'User-Agent': 'Mozilla/5.0',
			Accept: 'application/json'
		}
	});

	const data = await res.json();

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
}
