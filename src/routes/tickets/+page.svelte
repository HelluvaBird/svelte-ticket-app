<script lang="ts">
	const sourceData = [
		{ id: 1, product: 'Macbook', date: 1.0079, status: 'new' },
		{ id: 2, product: 'iPhone/iPad', date: 4.0026, status: 'new' },
		{ id: 3, product: 'Macbook', date: 6.941, status: 'new' },
		{ id: 4, product: 'Apple Watch', date: 9.0122, status: 'new' },
		{ id: 5, product: 'Macbook', date: 10.811, status: 'new' }
	];
</script>

<div class="p-10">
	<div class="max-w-[56rem] mx-auto space-y-4">
		<!-- Responsive Container (recommended) -->
		<h1 class="h1 text-center">Tickets</h1>
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
					{#each sourceData as row (row.id)}
						<tr>
							<td class="!align-middle">{row.date}</td>
							<td class="!align-middle">{row.product}</td>
							<td class="!align-middle">
								<span class="badge variant-filled">{row.status}</span>
							</td>
							<td class="grid">
								<button type="button" class="btn variant-filled-primary">Button</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
