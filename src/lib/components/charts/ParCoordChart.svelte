<script lang="ts">
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	export let data: any;

	let ready = false;
	onMount(() => (ready = true));

	// chart dimensions
	const width = 800;
	const height = 600;
	const margin = { top: 20, right: 10, bottom: 20, left: 10 };

	// horizontal axis for each key
	const x = new Map(
		Array.from(data.keys, (key) => [
			key,
			d3.scaleLinear(
				d3.extent(data.data.default, (d) => d[key]),
				[margin.left, width - margin.right]
			)
		])
	);

	// vertical scale
	const y = d3.scalePoint(data.keys, [margin.top, height - margin.bottom]);
</script>

{#if ready}
	<svg viewBox="0 0 {width} {height}" style="max-width: 100%; height: auto;">
		<g>
			<line
				x1={margin.left}
				x2={width - margin.right}
				y1={height - margin.bottom}
				y2={height - margin.bottom}
				stroke="black"
				stroke-width="1"
				transition:draw={{ duration: 2000 }}
			/>
		</g>
	</svg>
{/if}

{JSON.stringify(data.data.default)}
{JSON.stringify(data.keys)}
