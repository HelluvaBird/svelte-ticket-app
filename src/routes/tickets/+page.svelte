<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ tickets } = data);
</script>

<div class="p-10">
	<div class="max-w-[56rem] mx-auto space-y-4">
		<h1 class="h1 text-center">Tickets</h1>
		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover table-comfortable">
				<thead>
					<tr>
						<th>Date</th>
						<th>Product</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each tickets as row (row._id)}
						<tr>
							<td class="!align-middle">
								{#if row.createdAt}
									{formatDate(row.createdAt)}
								{/if}
							</td>
							<td class="!align-middle">{row.product}</td>
							<td class="!align-middle">
								<span
									class="badge variant-filled{row.status === 'new'
										? '-success'
										: row.status === 'closed'
											? '-error'
											: ''}">{row.status}</span
								>
							</td>
							<td class="grid">
								<a href={`/ticket/${row._id}`} class="btn variant-filled-primary">View</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
