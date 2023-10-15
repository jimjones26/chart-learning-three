<script lang="ts">
	import ParCoordChart from '$lib/components/charts/ParCoordChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ParCoordChart {data} />
